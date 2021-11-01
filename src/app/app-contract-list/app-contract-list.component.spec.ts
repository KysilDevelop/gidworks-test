import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContractListComponent } from './app-contract-list.component';

describe('AppContractListComponent', () => {
  let component: AppContractListComponent;
  let fixture: ComponentFixture<AppContractListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppContractListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContractListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
