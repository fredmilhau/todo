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
    } else if (request.url.match(/\/api\/tasks\/\d+$/) && request.method === 'PUT') {
      const urlParts = request.url.split('/');
      const id = parseInt(urlParts[urlParts.length - 1], 10);
      console.log('MockedBackend: update task id=' + id + ' (' + request.url + ')');
      return Observable.of(new HttpResponse({status: 200, body: request.body}));
    } else if (request.url.endsWith('/api/tasks') && request.method === 'POST') {
      console.log('MockedBackend: create task (' + request.url + ')');
      return Observable.of(new HttpResponse({status: 200, body: request.body}));
    } else {
      console.log('MockedBackend: wrong request (' + request.url + ')');
      return Observable.of(new HttpResponse({status: 400}));
    }
  }

}
