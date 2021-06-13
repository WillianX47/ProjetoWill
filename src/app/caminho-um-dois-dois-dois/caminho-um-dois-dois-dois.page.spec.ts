import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CaminhoUmDoisDoisDoisPage } from './caminho-um-dois-dois-dois.page';

describe('CaminhoUmDoisDoisDoisPage', () => {
  let component: CaminhoUmDoisDoisDoisPage;
  let fixture: ComponentFixture<CaminhoUmDoisDoisDoisPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CaminhoUmDoisDoisDoisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CaminhoUmDoisDoisDoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
