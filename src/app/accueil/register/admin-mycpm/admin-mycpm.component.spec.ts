import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMYCPMComponent } from './admin-mycpm.component';

describe('AdminMYCPMComponent', () => {
  let component: AdminMYCPMComponent;
  let fixture: ComponentFixture<AdminMYCPMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminMYCPMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMYCPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
