import { SmilePage } from './app.po';

describe('smile App', () => {
  let page: SmilePage;

  beforeEach(() => {
    page = new SmilePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
