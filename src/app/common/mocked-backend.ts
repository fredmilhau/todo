import {HttpResponse, HttpXhrBackend} from '@angular/common/http';
import {HttpRequest} from '@angular/common/http/src/request';
import {HttpEvent} from '@angular/common/http/src/response';
import {Observable} from 'rxjs/Observable';
import {TASKS} from './mock.tasks';
import 'rxjs/add/observable/of';

export class MockedBackend extends HttpXhrBackend {

  handle(request: HttpRequest<any>): Observable<HttpEvent<any>> {

    if (request.url.endsWith('/api/tasks') && request.method === 'GET') {
      console.log('MockedBackend: (' + request.url + ')');
      return Observable.of(new HttpResponse({status: 200, body: TASKS}));

    } else {
      console.log('MockedBackend: wrong request (' + request.url + ')');
      return Observable.of(new HttpResponse({status: 400}));
    }
  }

}
