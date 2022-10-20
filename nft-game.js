const about_game_container = document.getElementById("about-game-container");
const game_img = document.getElementById("game-main-img");
const hot_to_paly_list = document.getElementById("hot-to-paly-list");
const game_features_list = document.getElementById("game-features-list");

const params = new URLSearchParams(window.location.search);
let gameName = params.get("game");
if (!gameName) {
  gameName = "Battle";
}

let GAME_DATA = NFT_GAMES_DATA[gameName];

if (!GAME_DATA) {
  GAME_DATA = NFT_GAMES_DATA.Battle;
}

const initiade_game_data = () => {
  const h3NameElement = document.createElement("h3");
  h3NameElement.textContent = GAME_DATA.name;

  const h6TitleElement = document.createElement("h6");
  h6TitleElement.textContent = GAME_DATA.title;

  console.log(h3NameElement);
  console.log(h6TitleElement);

  GAME_DATA.about.reverse().forEach((pText) => {
    const aboutPElement = document.createElement("p");
    aboutPElement.textContent = pText;
    about_game_container.prepend(aboutPElement);
  });

  about_game_container.prepend(h6TitleElement);
  about_game_container.prepend(h3NameElement);

  game_img.src = `./imgs/nft-games/${GAME_DATA.img_main}`;

  init_hot_to_play();
  init_game_features();
};

const init_hot_to_play = () => {
  GAME_DATA.hot_to_play.reverse().forEach((liText) => {
    const li = document.createElement("li");
    li.textContent = liText;

    hot_to_paly_list.prepend(li);
  });
};

const init_game_features = () => {
  GAME_DATA.game_features.reverse().forEach((liText) => {
    const li = document.createElement("li");
    li.textContent = liText;

    game_features_list.prepend(li);
  });
};

initiade_game_data();
