import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalementsListComponent } from './signalements-list.component';

describe('SignalementsListComponent', () => {
  let component: SignalementsListComponent;
  let fixture: ComponentFixture<SignalementsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignalementsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalementsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
