import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfbuildingArComponent } from './selfbuilding-ar.component';

describe('SelfbuildingArComponent', () => {
  let component: SelfbuildingArComponent;
  let fixture: ComponentFixture<SelfbuildingArComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfbuildingArComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfbuildingArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
