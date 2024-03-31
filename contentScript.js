function removeElements() {
  let reels = document.querySelector('.x1n2onr6 > a[href="/reels/"]');
  let explore = document.querySelector('.x1n2onr6 > a[href="/explore/"]');

  if (reels) {
    reels.remove();
  }

  if (explore) {
    explore.remove();
  }
}

removeElements();

const observer = new MutationObserver(removeElements);

const observerOptions = {
  childList: true,
  subtree: true,
};

observer.observe(document.body, observerOptions);
