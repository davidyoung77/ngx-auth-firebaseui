import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthFirebaseuiSigninWithPhoneComponent } from './ngx-auth-firebaseui-signin-with-phone.component';

describe('NgxAuthFirebaseuiSigninWithPhoneComponent', () => {
  let component: NgxAuthFirebaseuiSigninWithPhoneComponent;
  let fixture: ComponentFixture<NgxAuthFirebaseuiSigninWithPhoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxAuthFirebaseuiSigninWithPhoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthFirebaseuiSigninWithPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
