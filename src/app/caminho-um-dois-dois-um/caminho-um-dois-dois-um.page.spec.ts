import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisDoisUmPage } from './caminho-um-dois-dois-um.page';

describe('CaminhoUmDoisDoisUmPage', () => {
  let component: CaminhoUmDoisDoisUmPage;
  let fixture: ComponentFixture<CaminhoUmDoisDoisUmPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoUmDoisDoisUmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhoUmDoisDoisUmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
