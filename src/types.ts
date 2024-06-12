export interface questionObject {
  id: number;
  type: string;
  text: string;
  answers: { text: string; isChecked: boolean }[];
}
