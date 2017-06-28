import { LaycraftdesignPage } from './app.po';

describe('laycraftdesign App', () => {
  let page: LaycraftdesignPage;

  beforeEach(() => {
    page = new LaycraftdesignPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
