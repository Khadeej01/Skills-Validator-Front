import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefCreateComponent } from './brief-create.component';

describe('BriefCreateComponent', () => {
  let component: BriefCreateComponent;
  let fixture: ComponentFixture<BriefCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BriefCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BriefCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
