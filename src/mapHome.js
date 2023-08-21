import React from "react";

function Home() {
  return (
    <div>
      <h1>La Carte d'Istanbul</h1>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192695.8877015681!2d28.833590428697104!3d41.006147470461514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2sIstanbul%2C%20Turquie!5e0!3m2!1sfr!2stn!4v1692621306462!5m2!1sfr!2stn"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default Home;
