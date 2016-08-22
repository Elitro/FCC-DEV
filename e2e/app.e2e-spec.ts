import { CLIDEVPage } from './app.po';

describe('cli-dev App', function() {
  let page: CLIDEVPage;

  beforeEach(() => {
    page = new CLIDEVPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
