// src/simulator.js
export function getSimulatedData() {
  const now = new Date().toISOString();
  return {
    temperatura: (Math.random() * 10 + 20).toFixed(2), // entre 20 y 30
    humedad: (Math.random() * 20 + 50).toFixed(2),    // entre 50 y 70
    voltaje: (Math.random() * 0.5 + 3.5).toFixed(2),  // entre 3.5 y 4.0
    timestamp: now
  };
}
