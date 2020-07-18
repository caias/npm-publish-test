import addCommas from './addCommas';

describe('rollupJestBoilerplate', () => {
  it('rollupJestBoilerplate(string)', () => {
    expect(addCommas('1234')).toEqual('1,234');
  });
});