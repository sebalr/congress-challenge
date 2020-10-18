import { browser, by, element } from 'protractor';

describe('List search', () => {

  beforeEach(() => {
    browser.get('/');
  });

  it('should show result after valid search', async () => {
    await element(by.id('input-seach')).sendKeys('lamar');
    expect((await element.all(by.tagName('slr-table-row'))).length).toBe(1);

  });

});
