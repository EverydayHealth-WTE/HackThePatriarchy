export interface text_response{
    originalText : string;
    problematicTerms : Array<problematicterm>;
   
}
export interface problematicterm{
    term:string;
    startIndex : number;
    endIndex : number;
    GNReplacement: string;
    FemReplacement: string;
    WarningMessage : string;
    ProblemPoints : number;
}