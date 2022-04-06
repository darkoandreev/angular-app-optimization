import { RandomIdPipe } from './random-id.pipe';

describe('RandomIdPipe', () => {
  it('create an instance', () => {
    const pipe = new RandomIdPipe();
    expect(pipe).toBeTruthy();
  });
});
