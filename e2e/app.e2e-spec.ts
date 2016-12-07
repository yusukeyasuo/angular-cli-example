import { AngularCliExamplePage } from './app.po';

describe('angular-cli-example App', function() {
  let page: AngularCliExamplePage;

  beforeEach(() => {
    page = new AngularCliExamplePage();
  });

  it('should display message saying Tour of Heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
