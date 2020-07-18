import addCommas from './addCommas';

describe('addComma test', () => {
  it('seccess case', () => {
    expect(addCommas('1234')).toEqual('1,234');
  });
});