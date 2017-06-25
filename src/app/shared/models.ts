export class TwoSideOption {
  private _selected: Boolean = true;

  set selected(selected: Boolean) {
    this._selected = selected;
  }

  get selected(): Boolean {
    return this._selected;
  }

  onMouseEnter() {
    this.selected = true;
  }

  onMouseLeave() {
    this.selected = false;
  }
}
