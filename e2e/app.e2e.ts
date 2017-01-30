import { JpMusicPlayerPage } from './app.po';

describe('jp-music-player App', function() {
  let page: JpMusicPlayerPage;

  beforeEach(() => {
    page = new JpMusicPlayerPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('jp-music-player works!');
  });
});
