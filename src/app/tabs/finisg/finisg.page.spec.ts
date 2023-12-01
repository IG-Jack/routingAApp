import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FinisgPage } from './finisg.page';

describe('FinisgPage', () => {
  let component: FinisgPage;
  let fixture: ComponentFixture<FinisgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FinisgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
