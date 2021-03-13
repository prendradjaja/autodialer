# Facebook videocall autodialer

One-time setup:

1. `cp config.js.example config.js`
2. Open `config.js` in a text editor and add at least one friend. You can edit this later to add more friends.

Usage:

1. Open `index.html` in a browser. This will be referred to as the autodialer window.
2. (Autodialer window) Click on the big green button. (If it's red, you didn't do the setup.) Your chat with a random friend will appear in a new window.
3. (Facebook window) This is your chance to glance at the chat history and possibly notice that the autodialer has caused you to repeatedly call the same friend, in which case you might want to refrain from calling them again. (In that case, still continue to step 4, but do the "alternatively" version.)
4. (Autodialer window) The big green button is now blue. Click it to open the call in a new window. This will also close the Facebook window opened at step 2.
    - Alternatively, you can click on the gray "skip" button to move to the next friend.
5. (Facebook window) Click the call button.
6. (Autodialer window) If no answer, click on the big green button again. This will close the Facebook window opened at step 4 and open a chat with a new random friend. Go back to step 3 and repeat until someone picks up or you give up because your friends are all busy.
