import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpRequest } from "@angular/common/http";
import { TokenService } from "./token.service";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class InterceptorService {
    constructor(private tokenService: TokenService){}

    intercept(r: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let intR = r;
        const token = this.tokenService.getToken();
        if(token != null){
            intR = r.clone({
                headers: r.headers.set('Authorization','Bearer' + token)
            });
        }
        return next.handle(intR);   
    }
}

export const interceptProvider =[{
    provide: HTTP_INTERCEPTORS,
    useClass: InterceptorService,
    multi: true
}];
