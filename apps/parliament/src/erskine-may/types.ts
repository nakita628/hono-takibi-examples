type ErskineMaySectionOverview = {
  id?: number | undefined
  subSections?: (ErskineMaySectionOverview[] | null) | undefined
  title?: (string | null) | undefined
  titleChain?: (string | null) | undefined
}
type ErskineMayChapterOverview = {
  description?: (string | null) | undefined
  number?: number | undefined
  partNumber?: number | undefined
  sections?: (ErskineMaySectionOverview[] | null) | undefined
  title?: (string | null) | undefined
}
type ErskineMayIndexTermSearchResult = {
  displayAs?: (string | null) | undefined
  id?: number | undefined
  seeValue?: (string | null) | undefined
}
type ErskineMayIndexTermSearchResultErskineMaySearch = {
  searchResults?: (ErskineMayIndexTermSearchResult[] | null) | undefined
  searchTerm?: (string | null) | undefined
  searchTerms?: (string[] | null) | undefined
  skip?: number | undefined
  suggestedSearch?: (string | null) | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type ErskineMayParagraphSearchResult = {
  chapterNumber?: number | undefined
  chapterTitle?: (string | null) | undefined
  paragraphReference?: (string | null) | undefined
  partNumber?: number | undefined
  searchResultText?: (string | null) | undefined
  sectionId?: number | undefined
  sectionTitle?: (string | null) | undefined
  sectionTitleChain?: (string | null) | undefined
}
type ErskineMayIndexTermSeeLink = {
  indexTermId?: number | undefined
  seeType?: (string | null) | undefined
  seeValue?: (string | null) | undefined
}
type ErskineMayIndexTerm = {
  childTerms?: (ErskineMayIndexTerm[] | null) | undefined
  displayAs?: (string | null) | undefined
  id?: number | undefined
  parentTerm?: ErskineMayIndexTerm | undefined
  references?: (ErskineMayParagraphSearchResult[] | null) | undefined
  seeLinks?: (ErskineMayIndexTermSeeLink[] | null) | undefined
  term?: (string | null) | undefined
}
type ErskineMayPart = {
  chapters?: (ErskineMayChapterOverview[] | null) | undefined
  description?: (string | null) | undefined
  number?: number | undefined
  title?: (string | null) | undefined
}
type ErskineMayParagraphSearchResultErskineMaySearch = {
  searchResults?: (ErskineMayParagraphSearchResult[] | null) | undefined
  searchTerm?: (string | null) | undefined
  searchTerms?: (string[] | null) | undefined
  skip?: number | undefined
  suggestedSearch?: (string | null) | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type ErskineMaySectionSearchResult = {
  chapterNumber?: number | undefined
  chapterTitle?: (string | null) | undefined
  partNumber?: number | undefined
  sectionId?: number | undefined
  sectionTitle?: (string | null) | undefined
  sectionTitleChain?: (string | null) | undefined
}
type ErskineMaySectionSearchResultErskineMaySearch = {
  searchResults?: (ErskineMaySectionSearchResult[] | null) | undefined
  searchTerm?: (string | null) | undefined
  searchTerms?: (string[] | null) | undefined
  skip?: number | undefined
  suggestedSearch?: (string | null) | undefined
  take?: number | undefined
  totalResults?: number | undefined
}
type ErskineMayFootnote = {
  content?: (string | null) | undefined
  number?: (string | null) | undefined
}
type ErskineMaySectionDetail = {
  chapterNumber?: number | undefined
  chapterTitle?: (string | null) | undefined
  contentHtml?: (string | null) | undefined
  footnotes?: (ErskineMayFootnote[] | null) | undefined
  id?: number | undefined
  isUpdated?: boolean | undefined
  parentSectionId?: (number | null) | undefined
  parentSectionTitle?: (string | null) | undefined
  partNumber?: number | undefined
  partTitle?: (string | null) | undefined
  subSections?: (ErskineMaySectionOverview[] | null) | undefined
  title?: (string | null) | undefined
  titleChain?: (string | null) | undefined
  updatedDate?: (string | null) | undefined
}
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/api/Chapter/:chapterNumber': {
      $get:
        | {
            input: { param: { chapterNumber: number } }
            output: ErskineMayChapterOverview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { chapterNumber: number } }
            output: ErskineMayChapterOverview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chapterNumber: number } }
            output: ErskineMayChapterOverview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { chapterNumber: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { chapterNumber: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/IndexTerm/browse': {
      $get:
        | {
            input: {
              query: {
                startLetter?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: ErskineMayIndexTermSearchResultErskineMaySearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                startLetter?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: ErskineMayIndexTermSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              query: {
                startLetter?: string | undefined
                skip?: number | undefined
                take?: number | undefined
              }
            }
            output: ErskineMayIndexTermSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/IndexTerm/:indexTermId': {
      $get:
        | {
            input: { param: { indexTermId: number } }
            output: ErskineMayIndexTerm
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexTermId: number } }
            output: ErskineMayIndexTerm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { indexTermId: number } }
            output: ErskineMayIndexTerm
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { indexTermId: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { indexTermId: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Part': {
      $get:
        | { input: {}; output: ErskineMayPart[]; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErskineMayPart[]; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ErskineMayPart[]; outputFormat: 'text'; status: 200 }
    }
  } & {
    '/api/Part/:partNumber': {
      $get:
        | {
            input: { param: { partNumber: number } }
            output: ErskineMayPart
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { partNumber: number } }
            output: ErskineMayPart
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { partNumber: number } }
            output: ErskineMayPart
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { partNumber: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { partNumber: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  } & {
    '/api/Search/IndexTermSearchResults/:searchTerm': {
      $get:
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMayIndexTermSearchResultErskineMaySearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMayIndexTermSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMayIndexTermSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Search/Paragraph/:reference': {
      $get:
        | {
            input: { param: { reference: string } }
            output: ErskineMaySectionOverview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { reference: string } }
            output: ErskineMaySectionOverview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { reference: string } }
            output: ErskineMaySectionOverview
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { reference: string } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { reference: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Search/ParagraphSearchResults/:searchTerm': {
      $get:
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMayParagraphSearchResultErskineMaySearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMayParagraphSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMayParagraphSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Search/SectionSearchResults/:searchTerm': {
      $get:
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMaySectionSearchResultErskineMaySearch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMaySectionSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { searchTerm: string } } & {
              query: { skip?: number | undefined; take?: number | undefined }
            }
            output: ErskineMaySectionSearchResultErskineMaySearch
            outputFormat: 'text'
            status: 200
          }
    }
  } & {
    '/api/Section/:sectionId': {
      $get:
        | {
            input: { param: { sectionId: number } }
            output: ErskineMaySectionDetail
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sectionId: number } }
            output: ErskineMaySectionDetail
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sectionId: number } }
            output: ErskineMaySectionDetail
            outputFormat: 'text'
            status: 200
          }
        | { input: { param: { sectionId: number } }; output: {}; outputFormat: string; status: 400 }
        | { input: { param: { sectionId: number } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/api/Section/:sectionId,:step': {
      $get:
        | {
            input: { param: { sectionId: number; step: number } }
            output: ErskineMaySectionOverview
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { sectionId: number; step: number } }
            output: ErskineMaySectionOverview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sectionId: number; step: number } }
            output: ErskineMaySectionOverview
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { sectionId: number; step: number } }
            output: {}
            outputFormat: string
            status: 400
          }
        | {
            input: { param: { sectionId: number; step: number } }
            output: {}
            outputFormat: string
            status: 404
          }
    }
  },
  '/'
>
export default routes
