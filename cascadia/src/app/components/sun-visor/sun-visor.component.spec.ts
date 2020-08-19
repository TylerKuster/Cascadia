import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SunVisorComponent } from './sun-visor.component';

describe('SunVisorComponent', () => {
  let component: SunVisorComponent;
  let fixture: ComponentFixture<SunVisorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunVisorComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SunVisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
