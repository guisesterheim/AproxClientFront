import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

export interface IRequestOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

export function applicationHttpClientCreator(http: HttpClient) {
  return new ApplicationHttpClient(http);
}

@Injectable()
export class ApplicationHttpClient {

    // TODO: implement the default API
  private api = '';
  private token = "";

  // Extending the HttpClient through the Angular DI.
  public constructor(public http: HttpClient) {
    // If you don't want to use the extended versions in some cases you can access the public property and use the original one.
    // for ex. this.httpClient.http.get(...)
  } 

  /**
   * GET request
   * @param {string} endPoint it doesn't need / in front of the end point
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Get(endPoint: string, options?: IRequestOptions): Observable<HttpResponse<Object>> {
    return this.http.get(this.api + endPoint, {headers: 
                                                  new HttpHeaders()
                                                  .set('Authorization', this.getAppToken()),
                                                  observe: "response",
                                                  responseType: "json"});
  }

  /**
   * POST request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Post(endPoint: string, params: Object, options?: IRequestOptions): Observable<HttpResponse<Object>> {
    return this.http.post(this.api + endPoint, 
                                params, 
                                {headers: new HttpHeaders().set('Authorization', this.getAppToken()),
                                  observe: "response",
                                  responseType: "json"});
  }

  /**
   * PUT request
   * @param {string} endPoint end point of the api
   * @param {Object} params body of the request.
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Put(endPoint: string, params: Object, options?: IRequestOptions): Observable<HttpResponse<Object>> {
    return this.http.put(this.api + endPoint, params, 
      {headers: new HttpHeaders().set('Authorization', this.getAppToken()),
        observe: "response",
        responseType: "json"});
  }

  /**
   * DELETE request
   * @param {string} endPoint end point of the api
   * @param {IRequestOptions} options options of the request like headers, body, etc.
   * @returns {Observable<T>}
   */
  public Delete(endPoint: string, options?: IRequestOptions): Observable<HttpResponse<Object>> {
    return this.http.delete(this.api + endPoint, {headers: new HttpHeaders().set('Authorization', this.getAppToken()),
          observe: "response",
          responseType: "json"});
  }

  public setAppToken(token){
      this.token = token;
  }

  private getAppToken(){
      return this.token;
  }
}