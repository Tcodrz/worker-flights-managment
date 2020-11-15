
export class Worker {
    private _id: number;
    private _name: string;
    private _selected: boolean;

    constructor(id: number, name: string) {
        this._id = id;
        this._name = name;
        this._selected = false;
    }

    getName(): string {
        return this._name;
    }
    getID(): number {
        return this._id;
    }
    toggleSelection(): void {
        this._selected = !this._selected;
    }
    isSelected(): boolean {
        return this._selected;
    }
}
