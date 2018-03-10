import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    selector: 'app-lookup',
    templateUrl: './lookup.component.html',
    styleUrls: ['./lookup.component.scss']
})
export class LookupComponent {
    @Input() identifier: string

    constructor(private router: Router) {}

    lookupBuild(): void {
        if (this.identifier) {
            this.router.navigate(['/build/' + this.identifier])
        }
    }

}
