import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { JpMusicPlayerAppComponent } from '../app/jp-music-player.component';

beforeEachProviders(() => [JpMusicPlayerAppComponent]);

describe('App: JpMusicPlayer', () => {
  it('should create the app',
      inject([JpMusicPlayerAppComponent], (app: JpMusicPlayerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'jp-music-player works!\'',
      inject([JpMusicPlayerAppComponent], (app: JpMusicPlayerAppComponent) => {
    expect(app.title).toEqual('jp-music-player works!');
  }));
});
