import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Blank1Page } from './blank1.page';

describe('Blank1Page', () => {
  let component: Blank1Page;
  let fixture: ComponentFixture<Blank1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Blank1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
