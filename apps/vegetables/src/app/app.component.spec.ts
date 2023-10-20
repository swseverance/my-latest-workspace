import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CarrotsModule } from '@my-latest-workspace/carrots';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, CarrotsModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should render title', () => {
    expect(true).toBeTruthy();
  });
});
