import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectPocketComponent } from './select-pocket.component';

describe('SelectPocketComponent', () => {
  let component: SelectPocketComponent;
  let fixture: ComponentFixture<SelectPocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SelectPocketComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectPocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
