import { JobboardPage } from './app.po';

describe('jobboard App', () => {
  let page: JobboardPage;

  beforeEach(() => {
    page = new JobboardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
