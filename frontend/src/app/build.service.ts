import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Build } from './build'

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

@Injectable()
export class BuildService {
    private api = 'http://localhost:4242/api'

    constructor(private http: HttpClient) { }

    readBuild(identifier: string): Observable<Build> {
        const params = {
            bundle_id: identifier
        }
        return this.http.get<Build>(this.api + '/read', {params: params})
    }

    setBuild(build:Build): Observable<Build> {
        const params = {
            bundle_id: build.identifier,
            new_build_number: build.number
        }
        return this.http.post<Build>(this.api + '/set', params, httpOptions)
    }

    bumpBuild(build:Build): Observable<Build> {
        const params = {
            bundle_id: build.identifier
        }
        return this.http.post<Build>(this.api + '/bump', params, httpOptions)
    }
}
