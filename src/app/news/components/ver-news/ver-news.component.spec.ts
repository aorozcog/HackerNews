import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerNewsComponent } from './ver-news.component';

describe('VerNewsComponent', () => {
  let component: VerNewsComponent;
  let fixture: ComponentFixture<VerNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerNewsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
