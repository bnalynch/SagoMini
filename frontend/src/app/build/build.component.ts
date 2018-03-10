import { Component, OnInit, Input } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Location } from '@angular/common'
import { Build } from '../build'
import { BuildService } from '../build.service'

@Component({
    selector: 'app-build',
    templateUrl: './build.component.html',
    styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
    @Input() build: Build = {
        identifier: '',
        number: 0
    }
    error = null

    constructor(private route: ActivatedRoute, private router: Router, private location: Location, private buildService: BuildService) { }

    ngOnInit() {
        this.readBuild()
    }

    readBuild(): void {
        console.log("READ")
        this.error = null
        const identifier = this.route.snapshot.paramMap.get('identifier')
        if (identifier) {
            console.log("ID: " + identifier)
            this.buildService.readBuild(identifier).subscribe(build => {
                console.log("GOT BUILD: " + build.identifier)
                this.build = build
            }, error => {
                this.build.identifier = identifier
                this.error = error
            })
        }
    }

    setBuild(): void {
        console.log("SET")
        this.error = null
        this.buildService.setBuild(this.build).subscribe(build => {
            this.build = build
            this.router.navigate(['/build/' + build.identifier]) // ensure url is correct
        }, error => {
            this.error = error
        })
    }

    bumpBuild(): void {
        console.log("BUMP")
        this.error = null
        this.buildService.bumpBuild(this.build).subscribe(build => {
            this.build = build
            this.router.navigate(['/build/' + build.identifier]) // ensure url is correct
        }, error => {
            this.error = error
        })
    }

    goBack(): void {
        this.location.back()
    }

}
