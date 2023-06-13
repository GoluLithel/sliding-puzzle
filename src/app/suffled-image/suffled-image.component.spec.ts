import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuffledImageComponent } from './suffled-image.component';

describe('SuffledImageComponent', () => {
  let component: SuffledImageComponent;
  let fixture: ComponentFixture<SuffledImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuffledImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuffledImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
