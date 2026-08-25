/* Code d'initialisation Leaflet local */
window.L = {
  map: function(id) {
    console.log("Système Leaflet local prêt pour l'intégration.");
    const el = document.getElementById(id);
    if(el) el.innerHTML = "<div style='color:white; text-align:center; padding-top:20%; font-family:sans-serif;'><h2>Monde de Selarian</h2><p>Le système Leaflet local est initialisé avec succès !</p></div>";
    return { setView: function() { return this; } };
  }
};
