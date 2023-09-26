/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PainelBarComponent } from './painel-bar.component';

describe('PainelBarComponent', () => {
  let component: PainelBarComponent;
  let fixture: ComponentFixture<PainelBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
