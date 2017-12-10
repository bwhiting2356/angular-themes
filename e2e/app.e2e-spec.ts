import { Untitled12Page } from './app.po';

describe('untitled12 App', () => {
  let page: Untitled12Page;

  beforeEach(() => {
    page = new Untitled12Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
