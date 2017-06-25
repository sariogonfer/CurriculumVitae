import { OldTerminalReportPage } from './app.po';

describe('old-terminal-report App', () => {
  let page: OldTerminalReportPage;

  beforeEach(() => {
    page = new OldTerminalReportPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
