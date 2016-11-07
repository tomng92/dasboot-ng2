import { DasbootNg2Page } from './app.po';

describe('dasboot-ng2 App', function() {
  let page: DasbootNg2Page;

  beforeEach(() => {
    page = new DasbootNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
