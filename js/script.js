const listGames = [
    {
        name: 'Разноцветный квадратный',
        buttonTitle: 'КУПИТЬ',
        image: 'img/square.png'
    },
    {
        name: 'Among Us, Mраморный',
        buttonTitle: 'КУПИТЬ',
        image: 'img/amongus.png'
    },
    {
        name: 'Разноцветныйкруглый',
        buttonTitle: 'КУПИТЬ',
        image: 'img/round.png'
    }
]

function createListGames() {
    const listOfGame = document.querySelector(".games-container__games-row-container");
    listOfGame.innerHTML = '';
    for (const listGame of listGames) {
        listOfGame.append(makeGameListItem(listGame))
    }
}

function makeGameListItem(listGame) {
    const {name, buttonTitle, image} = listGame
    const avatar = document.createElement('img');
    avatar.classList.add('games-container__games-row-container--img');
    avatar.setAttribute('src', image);

    const title = document.createElement('h6');
    title.classList.add('games-container__games-row-container--title');
    title.innerText = name;

    const button = document.createElement('button');
    button.classList.add('games-container__games-row-container--button');
    button.innerText = buttonTitle;

    const row = document.createElement('div');
    row.classList.add('games-container__games-column-container');
    row.append(avatar, title, button)

    return row
}

createListGames()
