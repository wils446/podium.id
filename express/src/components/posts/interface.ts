export interface PostModelInterface {
    id: number;
    userId: number;
    username?: string;
    caption: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IPostInputDTO {
    username?: string;
    caption: string;
}
