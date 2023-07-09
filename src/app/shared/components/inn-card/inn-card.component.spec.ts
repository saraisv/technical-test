import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnCardComponent } from './inn-card.component';

describe('InnCardComponent', () => {
  let component: InnCardComponent;
  let fixture: ComponentFixture<InnCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
