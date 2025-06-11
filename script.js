function goToHome(lang) {
    // Reindirizza alla pagina corrispondente alla lingua scelta
    const homePages = {
      it: "home_it.html",
      en: "home_en.html",
      de: "home_de.html"
    };
  
    // Controllo di sicurezza nel caso la lingua non sia supportata
    if (homePages[lang]) {
      window.location.href = homePages[lang];
    } else {
      alert("Lingua non supportata.");
    }
  }