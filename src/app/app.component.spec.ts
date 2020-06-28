import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { autoSpy } from './utils/auto-spy';
import { AuthorService, Author } from './author.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display the author when found by id', () => {
    const mockAuthor: Author = {
      id: 0,
      name: 'test'
    };
    const service = autoSpy(AuthorService);
    service.getAuthor.and.returnValue(mockAuthor);

    const c = new AppComponent(service);
    c.ngOnInit();
    expect(c.author).toEqual(mockAuthor);
  });
});
