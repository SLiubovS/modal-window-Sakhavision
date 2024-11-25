export interface IFolder {
    id: number;
    name: string;
    children: Array<IFolder>;
}