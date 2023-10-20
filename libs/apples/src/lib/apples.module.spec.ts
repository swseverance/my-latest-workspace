import { TestBed } from '@angular/core/testing';
import { ApplesModule } from './apples.module';

describe('ApplesModule', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApplesModule],
    }).compileComponents();
  });

  it('should work', () => {
    expect(true).toBe(true);
  });
});
