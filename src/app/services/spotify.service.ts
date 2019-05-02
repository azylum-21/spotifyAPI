import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http"
import { map	} from 'rxjs/operators'

@Injectable({
	providedIn: 'root'
})
export class SpotifyService {

	constructor(private http: HttpClient) { 
		console.log('service spotify running')}

		getQuery(query:string){
			const url =`https://api.spotify.com/v1/${query}`;

			const headers = new HttpHeaders({
				'Authorization': 'Bearer BQBos6pLKevCXRQtUfd8vgx4qSD8Ho68AbxPTWx6X-LvT3ZP26KpE-O2X4CK9zcQJGWNsajgE53vOKJiajM'
			})

			return this.http.get(url, {headers});
		}
		getNewRealeses(){

			return this.getQuery('browse/new-releases')
			.pipe( map(data =>{
				return data['albums'].items;
			}));
		}

		getArtista( termino: string){

			return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
			.pipe( map(data => {
				return data['artists'].items;
			}));
		}

		getArtist( id: string){

			return this.getQuery(`artists/${id}`)
			//.pipe( map(data => {
				//return data['artists'].items;
				///}));
			}
			getTopTracks( id: string){

				return this.getQuery(`artists/${id}/top-tracks?country=us`)
				.pipe( map(data => data['tracks']));
			}

		}
