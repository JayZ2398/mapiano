import { observable } from "mobx";
import { OctaveStore } from "./Octave/OctaveStore";

type Octave = {
  store: OctaveStore;
  mark: (indexesToMark: number[]) => void;
  unmarkAll: () => void;
};

export class PianoStore {
  @observable octaves: Octave[];

  constructor(octaves: Octave[]) {
    this.octaves = observable(octaves);
  }
}
