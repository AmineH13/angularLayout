import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LameVueComponent } from './lame-vue.component';

describe('LameVueComponent', () => {
  let component: LameVueComponent;
  let fixture: ComponentFixture<LameVueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LameVueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LameVueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
