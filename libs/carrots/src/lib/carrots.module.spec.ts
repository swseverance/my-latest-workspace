import { TestBed } from '@angular/core/testing';
import { CarrotsModule } from './carrots.module';

describe('CarrotsModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CarrotsModule],
    }).compileComponents();
  });

  it('should work', () => {
    expect(true).toBe(true);
  });
});
