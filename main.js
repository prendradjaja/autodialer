const state = {
  currentWindow: undefined,
  friends: config.friends,
};

document.addEventListener("DOMContentLoaded", () => {
  checkEmpty();
  shuffle(state.friends);
});

///////////////////////////////////////////////////////////////////////////////////////////////////

const CALL_URL_PREFIX = 'https://www.messenger.com/videocall/incall/?peer_id=';
const CHAT_URL_PREFIX = 'https://www.messenger.com/t/';

function handleButtonClick() {
  if (state.currentWindow) {
    state.currentWindow.close();
  }

  if (state.friends.length) {
    const url = CHAT_URL_PREFIX + state.friends.pop(0);
    state.currentWindow = open(url, null, `height=${config.height},width=${config.width}`)
    checkEmpty();
  }
}

function checkEmpty() {
  if (!state.friends.length) {
    $('#the-button').classList.add('no-more');
  }
}

window.addEventListener('blur', () => {
  document.body.classList.add('blurred');
});

window.addEventListener('focus', () => {
  document.body.classList.remove('blurred');
});
