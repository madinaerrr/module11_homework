const getPercent = require('./index');


describe('getPercent count', () => {

  it('correct numbers', () => {
      expect(getPercent(10, 100)).toBe(10);
  });
  it('correct numbers', () => {
      expect(getPercent(20, 200)).toBe(40);
  })

  it('incorrect result', () => {
      expect(getPercent(30, 500)).toBe(10);
  })

  it('correct numbers', () =>{
      expect(getPercent(40, 90)).toBe(36);
  })

  it('incorrect numbers', () => {
      expect(getPercent(-5, -5)).toBe('fail');
  })
})