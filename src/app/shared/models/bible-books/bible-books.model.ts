export interface BibleBooksModel {
    list: Array<BibleBookTypes>
}

export interface BibileBookList {
    name: string,
    id: string,
    chapterCount: number
}

export interface BibleBookTypes {
    name: BibeBookType,
    books: Array<BibileBookList>;
}

export enum BibeBookType {
    OLD = "oldTestment",
    NEW = "newTesetment"
}

export interface BibleBook {
    chapters: Array<ChapterList>;
    name: string,
    id: string
}

export interface ChapterList {
    name: string,
    id: string,
    verses: Array<any>
}