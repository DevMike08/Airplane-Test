import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavResponsiveComponent } from './nav-responsive.component';

describe('NavResponsiveComponent', () => {
  let component: NavResponsiveComponent;
  let fixture: ComponentFixture<NavResponsiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavResponsiveComponent]
    });
    fixture = TestBed.createComponent(NavResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
