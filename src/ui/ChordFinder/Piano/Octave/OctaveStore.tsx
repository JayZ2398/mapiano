import { computed, observable } from "mobx";

export type NoteState = {
  note: string;
  isMarked: boolean;
};

export const isKeySharp = (note: string) => note.includes("#");

/**
 * This Note type is used to provide a canonical and human-friendly representation for indexing the notes in an octave's state.
 */
export type Note =
  | "C"
  | "C#"
  | "D"
  | "D#"
  | "E"
  | "F"
  | "F#"
  | "G"
  | "G#"
  | "A"
  | "A#"
  | "B";

export const NOTES: Note[] = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];

const DEFAULT_NOTES_STATE = NOTES.map((note) => ({
  note: note,
  isMarked: false,
}));

export class OctaveStore {
  @observable readonly notes: NoteState[] = observable(DEFAULT_NOTES_STATE);
  // Callback property that permits bidirectional state updates through parent ChordFinder
  @observable onClickCallBack: () => void = () => {};

  @computed
  get markedIndexes() {
    return this.notes
      .map((note, i) => ({ ...note, i }))
      .filter(({ isMarked }) => isMarked)
      .map(({ i }) => i);
  }
}
