import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service"

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styles: []
})
export class HomeComponent {

newsong: any[] = [];
loading: boolean;


	constructor(private spotify: SpotifyService) {  
		this.loading = true;
		this.spotify.getNewRealeses()
		.subscribe((data: any)  =>{
			this.newsong = data;
			this.loading = false;

		});
	}
}
