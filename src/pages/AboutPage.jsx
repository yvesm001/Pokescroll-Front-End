import React from "react";

function AboutPage() {
  return (
    <div
      className=" card container about-page"
      style={{
        border: "4px solid #413016",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "3rem",
      }}
    >
      <h1>About Us</h1>
      <h2>Welcome to the Generation 1 Pokédex!</h2>
      <p>
        Are you a Pokémon enthusiast with a passion for the classics? Dive into
        the nostalgic world of the original 151 Pokémon with our comprehensive
        Generation 1 Pokédex! Whether you're a seasoned trainer or a new fan,
        our app is designed to bring you detailed insights and information about
        every Pokémon from the first generation.
      </p>
      <h2>Features</h2>
      <ul>
        <li>
          <strong>Complete Gen 1 Pokédex: </strong>Explore detailed entries for
          all 151 original Pokémon. From Bulbasaur to Mew, every Pokémon is
          included with all their unique characteristics.
        </li>
        <li>
          <strong>Detailed Pokémon Profiles: </strong>Each Pokémon entry
          includes essential information such as type, abilities, evolution
          stages, stats, and more.
        </li>
        <li>
          <strong>High-Quality Images: </strong>Enjoy high-resolution images of
          each Pokémon, capturing their classic design.
        </li>
        <li>
          <strong>Search and Filter: </strong>Easily find your favorite Pokémon
          or discover new ones using our intuitive search and filter options.
        </li>
      </ul>

      <h2>Meet the Team</h2>
      <p>
        We are a small team of Pokémon enthusiasts and developers who grew up
        with the original Pokémon games. Our love for Pokémon inspired us to
        create this app as a tribute to the franchise that has given us
        countless hours of joy and adventure.
      </p>
      <ul>
        <li>Victor M Ortiz Martinez</li>
        <li>Yves Martinez</li>
      </ul>
      <p>
        Thank you for visiting our Generation 1 Pokédex. We hope you enjoy your
        journey through the original world of Pokémon!
      </p>
    </div>
  );
}

export default AboutPage;
