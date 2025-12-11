const estadoServer = document.querySelector(".status-dot");
const textoEstado = document.querySelector(".status-text");
const responseOutput = document.getElementById("response-output");
const btnMock = document.getElementById("btn-mock");

//Primero comprobamos el estado del servidor al cargar la página
async function checkServerStatus() {
  try {
    const response = await fetch("/api/users");
    if (response.ok) {
      estadoServer.classList.add("online");
      estadoServer.classList.remove("offline");
      textoEstado.textContent = "Server Online";
    } else {
      estadoServer.classList.add("offline");
      estadoServer.classList.remove("online");
      textoEstado.textContent = "Server Offline";
    }      
  } catch (error) {
    console.error("Error checking server status:", error);
  }
}

// Segundo crear el usuario de prueba, el trip de prueba y hacer match
btnMock.addEventListener("click", async () => {
  try {
    const timestamp = Date.now();

    const userBody = {
      name: `Usuario Demo ${timestamp}`,
      email: `demo+${timestamp}@example.com`,
      country: "España",
      interests: ["playa", "montaña"],
      budget: 300,
      adventureLevel: "Intermediate",
    };

    const userRes = await fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userBody),
    });


    if (!userRes.ok) {
      throw new Error("Failed to create test user");
    }
    const user = await userRes.json();

    // Crear trip de prueba
    const tripBody = {
      creatorID: user._id,        
      title: "Viaje Demo",
      country: "Suiza",
      cities: ["Zúrich", "Interlaken"],
      duration: 5,
      adventureLevel: "Intermediate",
      price: 320,
      notes: "Viaje de prueba para el matcher",
    };


    const tripResponse = await fetch("/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(tripBody)
    });

    if (!tripResponse.ok) {
      throw new Error("Failed to create test trip");
    }
    const trip = await tripResponse.json();

    // Hacemos match
    const matchResponse = await fetch(`/api/matchs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        userId: user._id,    // 👈 _id
        tripId: trip._id     // 👈 _id
      }),
    });
    if (!matchResponse.ok) {
      throw new Error("Failed to match user and trip");
    }

    const match = await matchResponse.json();

    // Mostrar resultados en la página
    responseOutput.textContent = JSON.stringify({
      user, 
      trip, 
      match,
    }, null, 2);
  } catch (error) {
    console.error("Error during mock data creation and matching:", error);
    responseOutput.textContent = "Error during mock data creation and matching. Check console for details.";
  }
});

// Lanzar chequeo de servidor al cargar la página
checkServerStatus();