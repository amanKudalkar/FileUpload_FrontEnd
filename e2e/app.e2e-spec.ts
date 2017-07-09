import { FileMgmtPage } from './app.po';

describe('file-mgmt App', function() {
  let page: FileMgmtPage;

  beforeEach(() => {
    page = new FileMgmtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
