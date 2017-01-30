export class JpMusicPlayerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('jp-music-player-app h1')).getText();
  }
}
