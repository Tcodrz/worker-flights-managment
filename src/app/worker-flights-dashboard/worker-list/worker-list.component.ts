import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Worker } from 'src/app/Interface/Worker.class';

@Component({
  selector: 'app-worker-list',
  templateUrl: './worker-list.component.html',
  styleUrls: ['./worker-list.component.css']
})
export class WorkerListComponent {

  private selectedWorker: Worker = null;
  @Input() workerList: Worker[] = [];
  @Output() selectWorker: EventEmitter<Worker> = new EventEmitter();

  onSelectWorker(worker: Worker): void {
    if (this.selectedWorker) {
      this.selectedWorker.toggleSelection();
    }
    worker.toggleSelection();
    this.selectedWorker = worker;
    this.selectWorker.emit(this.selectedWorker);
  }

}
