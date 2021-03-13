const state = {
  // TODO remove "current" from names?
  currentWindow: undefined,
  friends: config.friends,
  currentFriend: undefined,
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

  if (state.currentFriend) {
    const url = CALL_URL_PREFIX + state.currentFriend;
    state.currentWindow = open(url, null, `height=${config.height},width=${config.width}`)
    nextFriend();
  } else  {
    state.currentFriend = state.friends.pop(0);
    const url = CHAT_URL_PREFIX + state.currentFriend;
    state.currentWindow = open(url, null, `height=${config.height},width=${config.width}`)
    $('body').classList.add('call');
  }
}

function handleSkip() {
  if (state.currentWindow) {
    state.currentWindow.close();
  }

  nextFriend();
}

function nextFriend() {
  state.currentFriend = undefined;
  $('body').classList.remove('call');
  checkEmpty();
}

function checkEmpty() {
  if (!state.friends.length) {
    $('.the-button').classList.add('no-more');
    $('.the-button').disabled = true;
  }
}

window.addEventListener('blur', () => {
  document.body.classList.add('blurred');
});

window.addEventListener('focus', () => {
  document.body.classList.remove('blurred');
});
