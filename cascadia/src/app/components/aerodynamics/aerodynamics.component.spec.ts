import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AerodynamicsComponent } from './aerodynamics.component';

describe('AerodynamicsComponent', () => {
  let component: AerodynamicsComponent;
  let fixture: ComponentFixture<AerodynamicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerodynamicsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AerodynamicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
