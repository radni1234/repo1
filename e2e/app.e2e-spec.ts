import { ProjekatPage } from './app.po';

describe('projekat App', function() {
  let page: ProjekatPage;

  beforeEach(() => {
    page = new ProjekatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
