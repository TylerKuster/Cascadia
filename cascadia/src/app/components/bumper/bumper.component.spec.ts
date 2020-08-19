import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BumperComponent } from './bumper.component';

describe('BumperComponent', () => {
  let component: BumperComponent;
  let fixture: ComponentFixture<BumperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BumperComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
