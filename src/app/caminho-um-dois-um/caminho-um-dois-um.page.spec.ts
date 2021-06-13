import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisUmPage } from './caminho-um-dois-um.page';

describe('CaminhoUmDoisUmPage', () => {
  let component: CaminhoUmDoisUmPage;
  let fixture: ComponentFixture<CaminhoUmDoisUmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoUmDoisUmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhoUmDoisUmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
