import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blank2Page } from './blank2.page';

describe('Blank2Page', () => {
  let component: Blank2Page;
  let fixture: ComponentFixture<Blank2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Blank2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
