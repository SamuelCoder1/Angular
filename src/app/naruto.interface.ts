export interface TopLevel {
    characters:  Character[];
    currentPage: number;
    pageSize:    number;
    total:       number;
}

export interface Character {
    id:            number;
    name:          string;
    images:        string[];
    debut:         Debut;
    family?:       Family;
    jutsu:         string[];
    natureType?:   string[];
    personal:      Personal;
    rank?:         Rank;
    tools?:        string[];
    voiceActors:   VoiceActors;
    uniqueTraits?: string[];
}

export interface Debut {
    manga:     string;
    anime:     string;
    novel?:    string;
    movie?:    string;
    game:      string;
    ova?:      string;
    appearsIn: AppearsIn;
}

export enum AppearsIn {
    AnimeMangaGame = "Anime, Manga, Game",
    AnimeMangaGameMovie = "Anime, Manga, Game, Movie",
    AnimeMangaNovelGameMovie = "Anime, Manga, Novel, Game, Movie",
}

export interface Family {
    father?:                      string;
    mother?:                      string;
    son?:                         string;
    daughter?:                    string;
    wife?:                        string;
    "adoptive son"?:              string;
    godfather?:                   string;
    brother?:                     string;
    "clone/son"?:                 string;
    "grandmother "?:              string;
    sister?:                      string;
    nephew?:                      string;
    uncle?:                       string;
    "adoptive mother"?:           string;
    "adoptive sons"?:             string;
    "adoptive brother"?:          string;
    clone?:                       string;
    godson?:                      string;
    "great-grandfather"?:         string;
    grandfather?:                 string;
    grandmother?:                 string;
    cousin?:                      string;
    "genetic template/parent"?:   string;
    "clone/brother"?:             string;
    "pet "?:                      string;
    grandson?:                    string;
    granddaughter?:               string;
    granduncle?:                  string;
    aunt?:                        string;
    "first cousin once removed"?: string;
    host?:                        string;
    niece?:                       string;
    lover?:                       string;
    creator?:                     string;
    "genetic template"?:          string;
}

export interface Personal {
    birthdate?:      string;
    sex:             Sex;
    age?:            Age;
    height?:         Height;
    weight?:         Weight;
    bloodType?:      BloodType;
    kekkeiGenkai?:   string[] | string;
    classification?: string[] | string;
    tailedBeast?:    string;
    occupation?:     string[] | string;
    affiliation:     string[];
    team?:           string[] | string;
    clan?:           string[] | string;
    titles?:         string[];
    status?:         string;
    kekkeiMōra?:     string;
    partner?:        string[] | string;
    species?:        string;
}

export interface Age {
    "Part I"?:           string;
    "Part II"?:          string;
    "Academy Graduate"?: string;
    "Chunin Promotion"?: string;
    "Blank Period"?:     string;
    "Boruto Movie"?:     string;
    "Boruto Manga"?:     string;
}

export enum BloodType {
    A = "A",
    Ab = "AB",
    B = "B",
    O = "O",
}

export interface Height {
    "Part I"?:       string;
    "Part II"?:      string;
    "Blank Period"?: string;
    Gaiden?:         string;
    "Boruto Movie"?: string;
    "Boruto Manga"?: string;
}

export enum Sex {
    Female = "Female",
    FileGenderVariousSVGVarious = "File:Gender Various.svg Various",
    Male = "Male",
}

export interface Weight {
    "Part I"?:  string;
    "Part II"?: string;
}

export interface Rank {
    ninjaRank:          NinjaRank;
    ninjaRegistration?: string;
}

export interface NinjaRank {
    "Part I"?:       string;
    Gaiden?:         string;
    "Blank Period"?: string;
    "Part II"?:      string;
}

export interface VoiceActors {
    japanese: string[] | string;
    english:  string[] | string;
}
