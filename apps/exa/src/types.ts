type JsonValue =
  | ({ [x: string]: unknown } | null)
  | boolean
  | number
  | string
  | JsonValue[]
  | { [x: string]: JsonValue }
type ContentsOptions = {
  text?:
    | boolean
    | {
        maxCharacters?: number | ({ [x: string]: unknown } | null) | undefined
        includeHtmlTags?: boolean | ({ [x: string]: unknown } | null) | undefined
        verbosity?: 'compact' | 'standard' | 'full' | ({ [x: string]: unknown } | null) | undefined
        includeSections?:
          | ('header' | 'navigation' | 'banner' | 'body' | 'sidebar' | 'footer' | 'metadata')[]
          | ({ [x: string]: unknown } | null)
          | undefined
        excludeSections?:
          | ('header' | 'navigation' | 'banner' | 'body' | 'sidebar' | 'footer' | 'metadata')[]
          | ({ [x: string]: unknown } | null)
          | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  highlights?:
    | boolean
    | {
        query?: string | ({ [x: string]: unknown } | null) | undefined
        verbosity?: 'low' | 'medium' | 'high' | ({ [x: string]: unknown } | null) | undefined
        dynamic?: boolean | ({ [x: string]: unknown } | null) | undefined
        maxCharacters?: number | ({ [x: string]: unknown } | null) | undefined
        numSentences?: number | ({ [x: string]: unknown } | null) | undefined
        highlightsPerUrl?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  summary?:
    | {
        query?: string | ({ [x: string]: unknown } | null) | undefined
        schema?: { [x: string]: JsonValue } | ({ [x: string]: unknown } | null) | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  extras?:
    | {
        links?: number | ({ [x: string]: unknown } | null) | undefined
        imageLinks?: number | ({ [x: string]: unknown } | null) | undefined
        richImageLinks?: number | ({ [x: string]: unknown } | null) | undefined
        richLinks?: number | ({ [x: string]: unknown } | null) | undefined
        codeBlocks?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | ({ [x: string]: unknown } | null)
    | undefined
  livecrawlTimeout?: number | ({ [x: string]: unknown } | null) | undefined
  maxAgeHours?: number | ({ [x: string]: unknown } | null) | undefined
  snapshotAsOf?: string | string | ({ [x: string]: unknown } | null) | undefined
  context?:
    | boolean
    | { maxCharacters?: number | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
  livecrawl?:
    | 'never'
    | 'always'
    | 'fallback'
    | 'preferred'
    | ({ [x: string]: unknown } | null)
    | undefined
  crawledBeforeDate?: string | ({ [x: string]: unknown } | null) | undefined
  subpages?: number | ({ [x: string]: unknown } | null) | undefined
  subpageTarget?: string | string[] | ({ [x: string]: unknown } | null) | undefined
}
type OutputSchemaText = { type: 'text'; description?: string | undefined }
type OutputSchemaObject = {
  type: 'object'
  description?: string | undefined
  properties?: { [x: string]: JsonValue } | undefined
  required?: string[] | undefined
  additionalProperties?: boolean | undefined
}
type SearchRequest = {
  includeDomains?: string[] | ({ [x: string]: unknown } | null) | undefined
  excludeDomains?: string[] | ({ [x: string]: unknown } | null) | undefined
  startPublishedDate?: string | ({ [x: string]: unknown } | null) | undefined
  endPublishedDate?: string | ({ [x: string]: unknown } | null) | undefined
  numResults?: number | ({ [x: string]: unknown } | null) | undefined
  moderation?: boolean | ({ [x: string]: unknown } | null) | undefined
  contents?: ContentsOptions | ({ [x: string]: unknown } | null) | undefined
  query: string
  additionalQueries?: string[] | ({ [x: string]: unknown } | null) | undefined
  type?:
    | 'auto'
    | 'lite'
    | 'deep-lite'
    | 'deep'
    | 'instant'
    | 'fast'
    | 'deep-reasoning'
    | string
    | ({ [x: string]: unknown } | null)
    | undefined
  category?:
    | 'company'
    | 'publication'
    | 'news'
    | 'personal site'
    | 'financial report'
    | 'people'
    | ({ [x: string]: unknown } | null)
    | undefined
  userLocation?:
    | string
    | { country: string }
    | { country?: string | undefined; latitude: number; longitude: number }
    | ({ [x: string]: unknown } | null)
    | undefined
  compliance?: 'hipaa' | ({ [x: string]: unknown } | null) | undefined
  outputSchema?:
    | OutputSchemaText
    | OutputSchemaObject
    | ({ [x: string]: unknown } | null)
    | undefined
  objective?: string | ({ [x: string]: unknown } | null) | undefined
  userIdentifier?: string | ({ [x: string]: unknown } | null) | undefined
  systemPrompt?: string | ({ [x: string]: unknown } | null) | undefined
  stream?: boolean | ({ [x: string]: unknown } | null) | undefined
  startCrawlDate?: string | ({ [x: string]: unknown } | null) | undefined
  endCrawlDate?: string | ({ [x: string]: unknown } | null) | undefined
  includeText?: string[] | ({ [x: string]: unknown } | null) | undefined
  excludeText?: string[] | ({ [x: string]: unknown } | null) | undefined
  context?:
    | boolean
    | { maxCharacters?: number | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
}
type SearchCompanyEntityOutput = {
  id: string
  type: 'company'
  version: number
  properties: {
    name: string | ({ [x: string]: unknown } | null)
    foundedYear: number | ({ [x: string]: unknown } | null)
    description: string | ({ [x: string]: unknown } | null)
    workforce:
      | { total: number | ({ [x: string]: unknown } | null) }
      | ({ [x: string]: unknown } | null)
    headquarters:
      | {
          address: string | ({ [x: string]: unknown } | null)
          city: string | ({ [x: string]: unknown } | null)
          postalCode: string | ({ [x: string]: unknown } | null)
          country: string | ({ [x: string]: unknown } | null)
        }
      | ({ [x: string]: unknown } | null)
    financials:
      | {
          revenueAnnual: number | ({ [x: string]: unknown } | null)
          fundingTotal: number | ({ [x: string]: unknown } | null)
          fundingLatestRound:
            | {
                name: string | ({ [x: string]: unknown } | null)
                date: string | ({ [x: string]: unknown } | null)
                amount: number | ({ [x: string]: unknown } | null)
              }
            | ({ [x: string]: unknown } | null)
        }
      | ({ [x: string]: unknown } | null)
    webTraffic:
      | {
          visitsMonthly: number | ({ [x: string]: unknown } | null)
          countryRank: number | ({ [x: string]: unknown } | null)
          avgDurationSeconds: number | ({ [x: string]: unknown } | null)
          history: { value: number; dateFrom: string; dateTo: string }[]
        }
      | ({ [x: string]: unknown } | null)
    research:
      | {
          worksCount: number | ({ [x: string]: unknown } | null)
          citationCount: number | ({ [x: string]: unknown } | null)
          areas: string[]
          notableWorks: {
            title: string | ({ [x: string]: unknown } | null)
            year: number | ({ [x: string]: unknown } | null)
            venue: string | ({ [x: string]: unknown } | null)
            citationCount: number | ({ [x: string]: unknown } | null)
            doi: string | ({ [x: string]: unknown } | null)
            id: string | ({ [x: string]: unknown } | null)
            type:
              | 'article'
              | 'book'
              | 'book-chapter'
              | 'dataset'
              | 'dissertation'
              | 'preprint'
              | 'report'
              | 'review'
              | ({ [x: string]: unknown } | null)
          }[]
          topResearchers: {
            person:
              | {
                  name: string | ({ [x: string]: unknown } | null)
                  id: string | ({ [x: string]: unknown } | null)
                }
              | ({ [x: string]: unknown } | null)
            worksCount: number | ({ [x: string]: unknown } | null)
            citationCount: number | ({ [x: string]: unknown } | null)
          }[]
        }
      | ({ [x: string]: unknown } | null)
  }
}
type SearchPersonEntityOutput = {
  id: string
  type: 'person'
  version: number
  properties: {
    name: string | ({ [x: string]: unknown } | null)
    firstName: string | ({ [x: string]: unknown } | null)
    lastName: string | ({ [x: string]: unknown } | null)
    location: string | ({ [x: string]: unknown } | null)
    workHistory: {
      title: string | ({ [x: string]: unknown } | null)
      location: string | ({ [x: string]: unknown } | null)
      dates:
        | {
            from: string | ({ [x: string]: unknown } | null)
            to: string | ({ [x: string]: unknown } | null)
          }
        | ({ [x: string]: unknown } | null)
      company:
        | {
            id: string | ({ [x: string]: unknown } | null)
            name: string | ({ [x: string]: unknown } | null)
          }
        | ({ [x: string]: unknown } | null)
    }[]
    educationHistory: {
      degree: string | ({ [x: string]: unknown } | null)
      dates:
        | {
            from: string | ({ [x: string]: unknown } | null)
            to: string | ({ [x: string]: unknown } | null)
          }
        | ({ [x: string]: unknown } | null)
      institution:
        | {
            id: string | ({ [x: string]: unknown } | null)
            name: string | ({ [x: string]: unknown } | null)
          }
        | ({ [x: string]: unknown } | null)
    }[]
    research:
      | {
          worksCount: number | ({ [x: string]: unknown } | null)
          citationCount: number | ({ [x: string]: unknown } | null)
          hIndex: number | ({ [x: string]: unknown } | null)
          firstPublicationYear: number | ({ [x: string]: unknown } | null)
          latestPublicationYear: number | ({ [x: string]: unknown } | null)
          areas: string[]
          notableWorks: {
            title: string | ({ [x: string]: unknown } | null)
            year: number | ({ [x: string]: unknown } | null)
            venue: string | ({ [x: string]: unknown } | null)
            citationCount: number | ({ [x: string]: unknown } | null)
            doi: string | ({ [x: string]: unknown } | null)
            id: string | ({ [x: string]: unknown } | null)
            type:
              | 'article'
              | 'book'
              | 'book-chapter'
              | 'dataset'
              | 'dissertation'
              | 'preprint'
              | 'report'
              | 'review'
              | ({ [x: string]: unknown } | null)
          }[]
        }
      | ({ [x: string]: unknown } | null)
  }
}
type SearchPublicationEntityOutput = {
  id: string
  type: 'publication'
  version: number
  properties: {
    title: string | ({ [x: string]: unknown } | null)
    year: number | ({ [x: string]: unknown } | null)
    date: string | ({ [x: string]: unknown } | null)
    type:
      | 'article'
      | 'book'
      | 'book-chapter'
      | 'dataset'
      | 'dissertation'
      | 'preprint'
      | 'report'
      | 'review'
      | ({ [x: string]: unknown } | null)
    language: string | ({ [x: string]: unknown } | null)
    citationCount: number | ({ [x: string]: unknown } | null)
    authors: {
      name: string | ({ [x: string]: unknown } | null)
      id: string | ({ [x: string]: unknown } | null)
    }[]
    referenceCount: number | ({ [x: string]: unknown } | null)
    abstract: string | ({ [x: string]: unknown } | null)
    doi: string | ({ [x: string]: unknown } | null)
  }
}
type SearchResultOutput = {
  title: string
  url: string
  publishedDate?: string | undefined
  author?: string | ({ [x: string]: unknown } | null) | undefined
  id?: string | undefined
  image?: string | undefined
  favicon?: string | undefined
  text?: string | undefined
  highlights?: string[] | undefined
  highlightScores?: number[] | undefined
  summary?: string | undefined
  subpages?:
    | {
        title: string
        url: string
        publishedDate?: string | undefined
        author?: string | ({ [x: string]: unknown } | null) | undefined
        id?: string | undefined
        image?: string | undefined
        favicon?: string | undefined
      }[]
    | undefined
  entities?:
    | (SearchCompanyEntityOutput | SearchPersonEntityOutput | SearchPublicationEntityOutput)[]
    | undefined
  extras?:
    | {
        links?: string[] | undefined
        imageLinks?: string[] | undefined
        richImageLinks?: { url: string; alt?: string | undefined }[] | undefined
        richLinks?: { url: string; anchor?: string | undefined }[] | undefined
        codeBlocks?: { text: string; source: string }[] | undefined
      }
    | undefined
}
type CostDollarsOutput = {
  total?: number | undefined
  search?: { neural?: number | undefined; keyword?: number | undefined } | undefined
  summary?: number | undefined
  contents?:
    | { text?: number | undefined; highlights?: number | undefined; summary?: number | undefined }
    | undefined
}
type SearchWarningOutput = { code: string; path: string; message: string }
type SearchNoticeOutput = {
  code: string
  path: string
  message: string
  details?: { [x: string]: { [x: string]: unknown } } | undefined
}
type SearchSynthesisOutputOutput = {
  content: string | { [x: string]: JsonValue }
  grounding: {
    field: string
    citations: { url: string; title: string }[]
    confidence: 'low' | 'medium' | 'high'
  }[]
}
type SearchSynthesisResponse = {
  requestId?: string | undefined
  results: SearchResultOutput[]
  costDollars?: CostDollarsOutput | undefined
  searchTime?: number | undefined
  warnings?: SearchWarningOutput[] | undefined
  notices?: SearchNoticeOutput[] | undefined
  output: SearchSynthesisOutputOutput
  resolvedSearchType?: string | undefined
  context?: string | undefined
}
type SearchResultsResponse = {
  requestId?: string | undefined
  results: SearchResultOutput[]
  costDollars?: CostDollarsOutput | undefined
  searchTime?: number | undefined
  warnings?: SearchWarningOutput[] | undefined
  notices?: SearchNoticeOutput[] | undefined
  resolvedSearchType?: string | undefined
  context?: string | undefined
}
type SearchResponse = SearchSynthesisResponse | SearchResultsResponse
type SearchStreamTextDeltaChunkOutput = {
  requestId?: string | undefined
  type: 'text-delta'
  delta: string
  choices?:
    | {
        index: number
        delta: {
          role?: 'assistant' | undefined
          content?: string | undefined
          citations?: { url: string; title: string; id: string }[] | undefined
        }
        finish_reason: 'stop' | ({ [x: string]: unknown } | null)
      }[]
    | undefined
}
type SearchStreamGroundingChunkOutput = {
  requestId?: string | undefined
  type: 'grounding'
  grounding: {
    field: string
    citations: { url: string; title: string }[]
    confidence: 'low' | 'medium' | 'high'
  }[]
  citations?: { url: string; title: string; id: string }[] | undefined
  choices?:
    | {
        index: number
        delta: {
          role?: 'assistant' | undefined
          content?: string | undefined
          citations?: { url: string; title: string; id: string }[] | undefined
        }
        finish_reason: 'stop' | ({ [x: string]: unknown } | null)
      }[]
    | undefined
}
type SearchStreamResultsChunkOutput = {
  requestId?: string | undefined
  type: 'results'
  results: SearchResultOutput[]
  warnings?: SearchWarningOutput[] | undefined
  notices?: SearchNoticeOutput[] | undefined
}
type SearchStreamResetChunkOutput = {
  requestId?: string | undefined
  type: 'stream-reset'
  streamReset: true
}
type SearchStreamDoneChunkOutput = {
  requestId?: string | undefined
  type: 'done'
  output: SearchSynthesisOutputOutput | ({ [x: string]: unknown } | null)
  searchTime: number
  costDollars?: CostDollarsOutput | undefined
  choices?:
    | {
        index: number
        delta: {
          role?: 'assistant' | undefined
          content?: string | undefined
          citations?: { url: string; title: string; id: string }[] | undefined
        }
        finish_reason: 'stop' | ({ [x: string]: unknown } | null)
      }[]
    | undefined
}
type SearchStreamErrorChunkOutput = {
  requestId?: string | undefined
  type: 'error'
  error: { message: string }
}
type SearchStreamChunk =
  | SearchStreamTextDeltaChunkOutput
  | SearchStreamGroundingChunkOutput
  | SearchStreamResultsChunkOutput
  | SearchStreamResetChunkOutput
  | SearchStreamDoneChunkOutput
  | SearchStreamErrorChunkOutput
type ErrorResponse = { requestId: string; error: string; tag: string }
type X402PaymentChallenge = {
  requestId: string
  error: string
  tag: string
  x402Version: number
  resource: { url: string; description: string; mimeType: string }
  accepts: { [x: string]: { [x: string]: unknown } }[]
  extensions?: { [x: string]: { [x: string]: unknown } } | undefined
}
type ContentsRequest = { [x: string]: unknown } | { [x: string]: unknown }
type ContentsResponse = {
  requestId?: string | undefined
  results?: SearchResultOutput[] | undefined
  statuses?:
    | {
        id: string
        status: 'success' | 'error'
        source?: 'cached' | 'crawled' | undefined
        error?:
          | {
              tag?: string | undefined
              httpStatusCode?: number | ({ [x: string]: unknown } | null) | undefined
            }
          | ({ [x: string]: unknown } | null)
          | undefined
      }[]
    | undefined
  costDollars?: CostDollarsOutput | undefined
  searchTime?: number | undefined
  context?: string | undefined
}
type AnswerRequest = {
  query: string
  stream?: boolean | undefined
  text?: boolean | undefined
  model?: 'exa' | 'exa-pro' | 'exa-research' | 'exa-fast' | undefined
  systemPrompt?: string | undefined
  userLocation?:
    | string
    | { country: string }
    | { country?: string | undefined; latitude: number; longitude: number }
    | ({ [x: string]: unknown } | null)
    | undefined
  outputSchema?:
    | {
        type?: string | undefined
        properties?: { [x: string]: JsonValue } | undefined
        required?: string[] | undefined
        description?: string | undefined
        additionalProperties?: boolean | undefined
      }
    | undefined
  userIdentifier?: string | ({ [x: string]: unknown } | null) | undefined
}
type AnswerResponse = {
  requestId?: string | undefined
  answer: string | { [x: string]: JsonValue }
  citations?:
    | {
        title: string
        url: string
        publishedDate?: string | undefined
        author?: string | ({ [x: string]: unknown } | null) | undefined
        id?: string | undefined
        image?: string | undefined
        favicon?: string | undefined
        text?: string | undefined
      }[]
    | undefined
  costDollars?: CostDollarsOutput | undefined
}
type AnswerStreamTextDeltaChunk = {
  choices: {
    index: number
    delta: {
      role?: 'assistant' | undefined
      content?: string | undefined
      refusal?: string | ({ [x: string]: unknown } | null) | undefined
    }
    finish_reason?: string | ({ [x: string]: unknown } | null) | undefined
  }[]
}
type AnswerStreamCitationsChunkOutput = {
  citations: {
    title: string
    url: string
    publishedDate?: string | undefined
    author?: string | ({ [x: string]: unknown } | null) | undefined
    id?: string | undefined
    image?: string | undefined
    favicon?: string | undefined
    text?: string | undefined
  }[]
}
type AnswerStreamCostChunkOutput = {
  costDollars: CostDollarsOutput
  requestId?: string | undefined
}
type AnswerStreamErrorChunkOutput = {
  tag: 'ERROR'
  payload: { error: { code: number; message: string }; requestId?: string | undefined }
}
type AnswerStreamChunk =
  | AnswerStreamTextDeltaChunk
  | AnswerStreamCitationsChunkOutput
  | AnswerStreamCostChunkOutput
  | AnswerStreamErrorChunkOutput
type FindSimilarRequest = {
  includeDomains?: string[] | ({ [x: string]: unknown } | null) | undefined
  excludeDomains?: string[] | ({ [x: string]: unknown } | null) | undefined
  startPublishedDate?: string | ({ [x: string]: unknown } | null) | undefined
  endPublishedDate?: string | ({ [x: string]: unknown } | null) | undefined
  numResults?: number | ({ [x: string]: unknown } | null) | undefined
  contents?: ContentsOptions | ({ [x: string]: unknown } | null) | undefined
  url: string
  category?:
    | 'company'
    | 'publication'
    | 'news'
    | 'personal site'
    | 'financial report'
    | 'people'
    | ({ [x: string]: unknown } | null)
    | undefined
  excludeSourceDomain?: boolean | ({ [x: string]: unknown } | null) | undefined
  startCrawlDate?: string | ({ [x: string]: unknown } | null) | undefined
  endCrawlDate?: string | ({ [x: string]: unknown } | null) | undefined
  includeText?: string[] | ({ [x: string]: unknown } | null) | undefined
  excludeText?: string[] | ({ [x: string]: unknown } | null) | undefined
}
type FindSimilarResult = {
  title: string
  url: string
  publishedDate?: string | undefined
  author?: string | ({ [x: string]: unknown } | null) | undefined
  id?: string | undefined
  image?: string | undefined
  favicon?: string | undefined
  text?: string | undefined
  highlights?: string[] | undefined
  highlightScores?: number[] | undefined
  summary?: string | undefined
  subpages?:
    | {
        title: string
        url: string
        publishedDate?: string | undefined
        author?: string | ({ [x: string]: unknown } | null) | undefined
        id?: string | undefined
        image?: string | undefined
        favicon?: string | undefined
      }[]
    | undefined
  entities?:
    | (SearchCompanyEntityOutput | SearchPersonEntityOutput | SearchPublicationEntityOutput)[]
    | undefined
  extras?:
    | {
        links?: string[] | undefined
        imageLinks?: string[] | undefined
        richImageLinks?: { url: string; alt?: string | undefined }[] | undefined
        richLinks?: { url: string; anchor?: string | undefined }[] | undefined
        codeBlocks?: { text: string; source: string }[] | undefined
      }
    | undefined
  score?: number | undefined
}
type FindSimilarResponse = {
  requestId?: string | undefined
  results?: FindSimilarResult[] | undefined
  costDollars?: CostDollarsOutput | undefined
  searchTime?: number | undefined
  context?: string | undefined
}
type SummaryWithMaxTokensOptions = {
  query?: string | ({ [x: string]: unknown } | null) | undefined
  maxTokens?: number | undefined
}
type SearchMonitorContents = {
  text?:
    | boolean
    | {
        maxCharacters?: number | ({ [x: string]: unknown } | null) | undefined
        includeHtmlTags?: boolean | ({ [x: string]: unknown } | null) | undefined
        verbosity?: 'compact' | 'standard' | 'full' | ({ [x: string]: unknown } | null) | undefined
        includeSections?:
          | ('header' | 'navigation' | 'banner' | 'body' | 'sidebar' | 'footer' | 'metadata')[]
          | ({ [x: string]: unknown } | null)
          | undefined
        excludeSections?:
          | ('header' | 'navigation' | 'banner' | 'body' | 'sidebar' | 'footer' | 'metadata')[]
          | ({ [x: string]: unknown } | null)
          | undefined
      }
    | undefined
  highlights?:
    | boolean
    | {
        query?: string | ({ [x: string]: unknown } | null) | undefined
        verbosity?: 'low' | 'medium' | 'high' | ({ [x: string]: unknown } | null) | undefined
        dynamic?: boolean | ({ [x: string]: unknown } | null) | undefined
        maxCharacters?: number | ({ [x: string]: unknown } | null) | undefined
        numSentences?: number | ({ [x: string]: unknown } | null) | undefined
        highlightsPerUrl?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  summary?: boolean | SummaryWithMaxTokensOptions | undefined
  extras?:
    | {
        links?: number | ({ [x: string]: unknown } | null) | undefined
        imageLinks?: number | ({ [x: string]: unknown } | null) | undefined
        richImageLinks?: number | ({ [x: string]: unknown } | null) | undefined
        richLinks?: number | ({ [x: string]: unknown } | null) | undefined
        codeBlocks?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  livecrawl?: 'never' | 'always' | 'fallback' | 'preferred' | 'auto' | undefined
  livecrawlTimeout?: number | undefined
  maxAgeHours?: number | undefined
  filterEmptyResults?: boolean | undefined
  subpages?: number | undefined
  subpageTarget?: string | string[] | undefined
  context?: boolean | { maxCharacters?: number | undefined } | undefined
}
type SearchMonitorSearch = {
  query: string
  numResults?: number | undefined
  includeDomains?: string[] | undefined
  excludeDomains?: string[] | undefined
  contents?: SearchMonitorContents | undefined
}
type SearchMonitorTrigger = { type: 'interval'; period: string }
type SearchMonitorOutputSchema =
  | OutputSchemaText
  | OutputSchemaObject
  | ({ [x: string]: unknown } | null)
type SearchMonitorWebhook = {
  url: string
  events?:
    | (
        | 'monitor.created'
        | 'monitor.updated'
        | 'monitor.deleted'
        | 'monitor.run.created'
        | 'monitor.run.completed'
      )[]
    | undefined
}
type CreateSearchMonitorParameters = {
  name?: string | undefined
  search: SearchMonitorSearch
  trigger?: SearchMonitorTrigger | undefined
  outputSchema?: SearchMonitorOutputSchema | undefined
  metadata?: { [x: string]: string } | undefined
  webhook: SearchMonitorWebhook
}
type SummaryWithMaxTokensOptionsOutput = {
  query?: string | ({ [x: string]: unknown } | null) | undefined
  maxTokens?: number | undefined
}
type SearchMonitorContentsOutput = {
  text?:
    | boolean
    | {
        maxCharacters?: number | ({ [x: string]: unknown } | null) | undefined
        includeHtmlTags?: boolean | ({ [x: string]: unknown } | null) | undefined
        verbosity?: 'compact' | 'standard' | 'full' | ({ [x: string]: unknown } | null) | undefined
        includeSections?:
          | ('header' | 'navigation' | 'banner' | 'body' | 'sidebar' | 'footer' | 'metadata')[]
          | ({ [x: string]: unknown } | null)
          | undefined
        excludeSections?:
          | ('header' | 'navigation' | 'banner' | 'body' | 'sidebar' | 'footer' | 'metadata')[]
          | ({ [x: string]: unknown } | null)
          | undefined
      }
    | undefined
  highlights?:
    | boolean
    | {
        query?: string | ({ [x: string]: unknown } | null) | undefined
        verbosity?: 'low' | 'medium' | 'high' | ({ [x: string]: unknown } | null) | undefined
        dynamic?: boolean | ({ [x: string]: unknown } | null) | undefined
        maxCharacters?: number | ({ [x: string]: unknown } | null) | undefined
        numSentences?: number | ({ [x: string]: unknown } | null) | undefined
        highlightsPerUrl?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  summary?: boolean | SummaryWithMaxTokensOptionsOutput | undefined
  extras?:
    | {
        links?: number | ({ [x: string]: unknown } | null) | undefined
        imageLinks?: number | ({ [x: string]: unknown } | null) | undefined
        richImageLinks?: number | ({ [x: string]: unknown } | null) | undefined
        richLinks?: number | ({ [x: string]: unknown } | null) | undefined
        codeBlocks?: number | ({ [x: string]: unknown } | null) | undefined
      }
    | undefined
  livecrawl?: 'never' | 'always' | 'fallback' | 'preferred' | 'auto' | undefined
  livecrawlTimeout?: number | undefined
  maxAgeHours?: number | undefined
  filterEmptyResults?: boolean | undefined
  subpages?: number | undefined
  subpageTarget?: string | string[] | undefined
  context?: boolean | { maxCharacters?: number | undefined } | undefined
}
type SearchMonitorSearchOutput = {
  query: string
  numResults?: number | undefined
  includeDomains?: string[] | undefined
  excludeDomains?: string[] | undefined
  contents?: SearchMonitorContentsOutput | undefined
}
type SearchMonitorTriggerOutput = { type: 'interval'; period: string }
type OutputSchemaTextOutput = { type: 'text'; description?: string | undefined }
type SearchMonitorOutputSchemaOutput =
  | OutputSchemaTextOutput
  | OutputSchemaObject
  | ({ [x: string]: unknown } | null)
type SearchMonitorWebhookOutput = {
  url: string
  events?:
    | (
        | 'monitor.created'
        | 'monitor.updated'
        | 'monitor.deleted'
        | 'monitor.run.created'
        | 'monitor.run.completed'
      )[]
    | undefined
}
type CreateSearchMonitorResponse = {
  id: string
  name: string | ({ [x: string]: unknown } | null)
  status: 'active' | 'paused' | 'disabled'
  search: SearchMonitorSearchOutput
  trigger: SearchMonitorTriggerOutput | ({ [x: string]: unknown } | null)
  outputSchema: SearchMonitorOutputSchemaOutput
  metadata: { [x: string]: string } | ({ [x: string]: unknown } | null)
  webhook: SearchMonitorWebhookOutput
  nextRunAt: string | ({ [x: string]: unknown } | null)
  createdAt: string
  updatedAt: string
  webhookSecret: string
}
type SearchMonitor = {
  id: string
  name: string | ({ [x: string]: unknown } | null)
  status: 'active' | 'paused' | 'disabled'
  search: SearchMonitorSearchOutput
  trigger: SearchMonitorTriggerOutput | ({ [x: string]: unknown } | null)
  outputSchema: SearchMonitorOutputSchemaOutput
  metadata: { [x: string]: string } | ({ [x: string]: unknown } | null)
  webhook: SearchMonitorWebhookOutput
  nextRunAt: string | ({ [x: string]: unknown } | null)
  createdAt: string
  updatedAt: string
}
type ListSearchMonitorsResponse = {
  data: SearchMonitor[]
  hasMore: boolean
  nextCursor?: string | ({ [x: string]: unknown } | null) | undefined
}
type BatchMonitorsRequest = {
  action: 'delete' | 'pause' | 'unpause'
  filter: {
    name?: string | undefined
    status?: 'active' | 'paused' | 'disabled' | undefined
    metadata?: { [x: string]: string } | undefined
  }
  dry_run?: boolean | undefined
  limit?: number | undefined
}
type BatchMonitorsResponse = {
  action: 'delete' | 'pause' | 'unpause'
  affected: number
  ids: string[]
  dry_run: boolean
  has_more: boolean
}
type UpdateSearchMonitorParameters = {
  name?: string | ({ [x: string]: unknown } | null) | undefined
  status?: 'active' | 'paused' | undefined
  search?:
    | {
        query?: string | undefined
        numResults?: number | undefined
        includeDomains?: string[] | undefined
        excludeDomains?: string[] | undefined
        contents?: SearchMonitorContents | undefined
      }
    | undefined
  trigger?:
    | { type?: 'interval' | undefined; period?: string | undefined }
    | ({ [x: string]: unknown } | null)
    | undefined
  outputSchema?: SearchMonitorOutputSchema | undefined
  metadata?: { [x: string]: string } | ({ [x: string]: unknown } | null) | undefined
  webhook?:
    | {
        url?: string | undefined
        events?:
          | (
              | 'monitor.created'
              | 'monitor.updated'
              | 'monitor.deleted'
              | 'monitor.run.created'
              | 'monitor.run.completed'
            )[]
          | undefined
      }
    | undefined
}
type TriggerSearchMonitorResponse = { triggered: boolean }
type SearchMonitorRunOutput = {
  results?: { [x: string]: JsonValue }[] | ({ [x: string]: unknown } | null) | undefined
  content?: JsonValue | ({ [x: string]: unknown } | null) | undefined
  grounding?:
    | {
        field: string
        citations: { url: string; title: string }[]
        confidence: 'low' | 'medium' | 'high'
      }[]
    | ({ [x: string]: unknown } | null)
    | undefined
}
type SearchMonitorRun = {
  id: string
  monitorId: string
  status: 'pending' | 'running' | 'completed' | 'failed' | 'cancelled'
  output: SearchMonitorRunOutput | ({ [x: string]: unknown } | null)
  failReason:
    | 'api_key_invalid'
    | 'insufficient_credits'
    | 'invalid_params'
    | 'rate_limited'
    | 'source_not_available'
    | 'forbidden'
    | 'search_unavailable'
    | 'search_failed'
    | 'internal_error'
    | ({ [x: string]: unknown } | null)
  startedAt: string | ({ [x: string]: unknown } | null)
  completedAt: string | ({ [x: string]: unknown } | null)
  failedAt: string | ({ [x: string]: unknown } | null)
  cancelledAt: string | ({ [x: string]: unknown } | null)
  durationMs: number | ({ [x: string]: unknown } | null)
  createdAt: string
  updatedAt: string
}
type ListSearchMonitorRunsResponse = {
  data: SearchMonitorRun[]
  hasMore: boolean
  nextCursor?: string | ({ [x: string]: unknown } | null) | undefined
}
type AgentEffort = 'minimal' | 'low' | 'medium' | 'high' | 'xhigh' | 'auto' | 'ultra'
type AgentRunId = string
type AgentDataSourceProvider = string
type AgentDataSource = { provider: AgentDataSourceProvider }
type AgentBudget = { maxCostDollars?: number | undefined; maxDurationSeconds?: number | undefined }
type CreateAgentRunRequest = {
  query: string
  systemPrompt?: string | undefined
  effort?: AgentEffort | undefined
  input?:
    | {
        data?: { [x: string]: JsonValue }[] | undefined
        exclusion?: { [x: string]: JsonValue }[] | undefined
      }
    | undefined
  outputSchema?: { [x: string]: JsonValue } | ({ [x: string]: unknown } | null) | undefined
  previousRunId?: AgentRunId | undefined
  metadata?: { [x: string]: string } | undefined
  dataSources?: AgentDataSource[] | undefined
  budget?: AgentBudget | undefined
  userIdentifier?: string | ({ [x: string]: unknown } | null) | undefined
}
type AgentRunStatus = 'queued' | 'running' | 'completed' | 'failed' | 'cancelled'
type AgentStopReason =
  | 'schema_satisfied'
  | 'budget_reached'
  | 'time_limit_reached'
  | 'iteration_limit_reached'
  | 'token_limit_reached'
  | 'stopped'
  | 'error'
  | 'cancelled'
  | string
type AgentDataSourceOutput = { provider: AgentDataSourceProvider }
type AgentBudgetOutput = {
  maxCostDollars?: number | undefined
  maxDurationSeconds?: number | undefined
}
type AgentRunRequest = {
  query?: string | undefined
  systemPrompt?: string | undefined
  effort?: AgentEffort | undefined
  input?:
    | {
        data?: { [x: string]: JsonValue }[] | undefined
        exclusion?: { [x: string]: JsonValue }[] | undefined
      }
    | undefined
  outputSchema?: { [x: string]: JsonValue } | ({ [x: string]: unknown } | null) | undefined
  previousRunId?: AgentRunId | undefined
  metadata?: { [x: string]: string } | undefined
  dataSources?: AgentDataSourceOutput[] | undefined
  budget?: AgentBudgetOutput | undefined
}
type AgentCitation = { url: string; title?: string | undefined }
type AgentGrounding = {
  field: string
  citations: AgentCitation[]
  confidence?: 'low' | 'medium' | 'high' | ({ [x: string]: unknown } | null) | undefined
}
type AgentRunOutput = {
  text: string
  structured: JsonValue | ({ [x: string]: unknown } | null)
  grounding: AgentGrounding[]
}
type AgentDataSourceUsage = { [x: string]: number }
type AgentUsage = {
  agentComputeUnits: number
  searches: number
  emails: number
  phoneNumbers: number
  dataSources?: AgentDataSourceUsage | undefined
}
type AgentDataSourceCost = { [x: string]: number }
type AgentCostDollars = {
  total: number
  agentCompute: number
  search: number
  emails: number
  phoneNumbers: number
  dataSources?: AgentDataSourceCost | undefined
}
type AgentRun = {
  id: AgentRunId
  object: 'agent_run'
  status: AgentRunStatus
  stopReason: AgentStopReason | ({ [x: string]: unknown } | null)
  createdAt: string
  completedAt: string | ({ [x: string]: unknown } | null)
  request: AgentRunRequest | ({ [x: string]: unknown } | null)
  output: AgentRunOutput
  usage: AgentUsage
  costDollars: AgentCostDollars
}
type AgentRunEvent = {
  id: string
  event:
    | 'agent_run.created'
    | 'agent_run.started'
    | 'agent_run.completed'
    | 'agent_run.failed'
    | 'agent_run.cancelled'
  data: JsonValue
  createdAt: string
}
type AgentError = {
  type:
    | 'INVALID_REQUEST'
    | 'AUTHENTICATION_ERROR'
    | 'RATE_LIMIT_ERROR'
    | 'NOT_FOUND'
    | 'SERVER_ERROR'
  code:
    | 'INVALID_REQUEST'
    | 'TEAM_NOT_FOUND'
    | 'RUN_NOT_FOUND'
    | 'PREVIOUS_RUN_NOT_FOUND'
    | 'PREVIOUS_RUN_NOT_COMPLETED'
    | 'CONCURRENCY_LIMIT_REACHED'
    | 'INVALID_OUTPUT_SCHEMA'
    | 'INVALID_DATA_SOURCE'
    | 'TIMEOUT'
    | 'SERVER_ERROR'
  message: string
}
type AgentErrorResponse = { error: AgentError }
type AgentRunList = {
  object: 'list'
  data: AgentRun[]
  hasMore: boolean
  nextCursor: AgentRunId | ({ [x: string]: unknown } | null)
}
type DeleteAgentRunResponse = { id: AgentRunId; object: 'agent_run.deleted'; deleted: true }
type AgentRunEventList = {
  object: 'list'
  data: AgentRunEvent[]
  hasMore: boolean
  nextCursor: string | ({ [x: string]: unknown } | null)
}
type BatchRequestItem = {
  customId: string
  method: 'POST'
  url: '/search' | '/agent/runs'
  body: { [x: string]: JsonValue }
}
type CreateBatchRequest = {
  requests: BatchRequestItem[]
  metadata?: { [x: string]: string } | undefined
}
type BatchStatus = 'in_progress' | 'completed' | 'cancelling' | 'cancelled' | 'expired'
type BatchRequestCounts = { total: number; completed: number; failed: number }
type Batch = {
  id: string
  object: 'batch'
  status: BatchStatus
  requestCounts: BatchRequestCounts
  createdAt: string
  expiresAt: string | ({ [x: string]: unknown } | null)
  endedAt: string | ({ [x: string]: unknown } | null)
  resultsUrl: string | ({ [x: string]: unknown } | null)
  metadata: { [x: string]: string }
}
type BatchList = {
  object: 'list'
  data: Batch[]
  hasMore: boolean
  nextCursor: string | ({ [x: string]: unknown } | null)
}
type DeletedBatch = { id: string; object: 'batch.deleted'; deleted: true }
type WebsetsTeamInfo = {
  object: 'team'
  id: string
  name: string
  concurrency: { active: number; queued: number }
  limits: {
    maxConcurrent: number | ({ [x: string]: unknown } | null)
    maxQueued: number | ({ [x: string]: unknown } | null)
  }
}
type CompanyEntity = { type: 'company' }
type PersonEntity = { type: 'person' }
type ArticleEntity = { type: 'article' }
type ResearchPaperEntity = { type: 'research_paper' }
type CustomEntity = { description: string; type: 'custom' }
type Entity = CompanyEntity | PersonEntity | ArticleEntity | ResearchPaperEntity | CustomEntity
type CreateCriterionParameters = { description: string }
type WebsetEnrichmentFormat = 'text' | 'date' | 'number' | 'options' | 'email' | 'phone' | 'url'
type CreateEnrichmentParameters = {
  description: string
  format?: WebsetEnrichmentFormat | undefined
  options?: { label: string }[] | undefined
  metadata?: { [x: string]: string } | undefined
}
type CreateWebsetParameters = {
  title?: (string | null) | undefined
  search?:
    | {
        query: string
        count?: number | undefined
        entity?: Entity | undefined
        criteria?: CreateCriterionParameters[] | undefined
        maxPeoplePerCompany?: number | undefined
        recall?: boolean | undefined
        exclude?: { source: 'import' | 'webset'; id: string }[] | undefined
        scope?:
          | {
              source: 'import' | 'webset'
              id: string
              relationship?: { definition: string; limit: number } | undefined
            }[]
          | undefined
      }
    | undefined
  import?: { source: 'import' | 'webset'; id: string; evaluate?: boolean | undefined }[] | undefined
  enrichments?: CreateEnrichmentParameters[] | undefined
  exclude?: { source: 'import' | 'webset'; id: string }[] | undefined
  externalId?: string | undefined
  metadata?: { [x: string]: string } | undefined
}
type WebsetSearchBehavior = 'override' | 'append'
type WebsetSearchCanceledReason = 'webset_deleted' | 'webset_canceled' | 'out_of_credits'
type WebsetSearch = {
  id: string
  object: 'webset_search'
  websetId: string
  status: 'created' | 'pending' | 'running' | 'completed' | 'canceled'
  query: string
  entity: Entity
  criteria: { description: string; successRate: number }[]
  count: number
  maxPeoplePerCompany: number | null
  behavior?: WebsetSearchBehavior | undefined
  exclude: { source: 'import' | 'webset'; id: string }[]
  scope: {
    source: 'import' | 'webset'
    id: string
    relationship?: { definition: string; limit: number } | undefined
  }[]
  progress: { found: number; analyzed: number; completion: number; timeLeft: number | null }
  recall: {
    expected: {
      total: number
      confidence: 'high' | 'medium' | 'low'
      bounds: { min: number; max: number }
    }
    reasoning: string
  } | null
  metadata?: { [x: string]: string } | undefined
  canceledAt: string | null
  canceledReason: WebsetSearchCanceledReason
  createdAt: string
  updatedAt: string
}
type Import = {
  id: string
  object: 'import'
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'canceled'
  format: 'csv' | 'webset'
  entity: Entity
  title: string
  count: number
  metadata: { [x: string]: string }
  failedReason: 'invalid_format' | 'invalid_file_content' | 'missing_identifier'
  failedAt: string | null
  failedMessage: string | null
  createdAt: string
  updatedAt: string
}
type WebsetEnrichment = {
  id: string
  object: 'webset_enrichment'
  status: 'pending' | 'canceled' | 'completed'
  websetId: string
  title: string | null
  description: string
  format: WebsetEnrichmentFormat
  options: { label: string }[] | null
  instructions: string | null
  metadata?: { [x: string]: string } | undefined
  createdAt: string
  updatedAt: string
}
type MonitorCadence = { cron: string; timezone?: string | undefined }
type MonitorBehavior = {
  config: {
    query?: string | undefined
    criteria?: { description: string }[] | undefined
    entity?: Entity | undefined
    count: number
    behavior?: WebsetSearchBehavior | undefined
  }
  type: 'search'
}
type MonitorRun = {
  id: string
  object: 'monitor_run'
  monitorId: string
  status: 'created' | 'running' | 'completed' | 'canceled' | 'failed'
  completedAt: string | null
  failedAt: string | null
  failedReason: string | null
  canceledAt: string | null
  createdAt: string
  updatedAt: string
  type: 'search' | 'refresh'
}
type Monitor = {
  id: string
  object: 'monitor'
  status: 'enabled' | 'disabled'
  websetId: string
  cadence: MonitorCadence
  behavior: MonitorBehavior
  lastRun: MonitorRun
  nextRunAt: string | null
  metadata: { [x: string]: string }
  createdAt: string
  updatedAt: string
}
type Webset = {
  id: string
  object: 'webset'
  status: 'idle' | 'pending' | 'running' | 'paused'
  externalId: string | null
  title: string | null
  searches: WebsetSearch[]
  imports: Import[]
  enrichments: WebsetEnrichment[]
  monitors: Monitor[]
  excludes?: { source: 'import' | 'webset'; id: string }[] | undefined
  metadata?: { [x: string]: string } | undefined
  dashboardUrl: string
  createdAt: string
  updatedAt: string
}
type ListWebsetsResponse = { data: Webset[]; hasMore: boolean; nextCursor: string | null }
type WebsetItemPersonProperties = {
  url: string
  description: string
  person: {
    name: string
    location: string | null
    position: string | null
    company: { name: string; location: string | null } | null
    pictureUrl: string | null
    workHistory: {
      title: string | null
      location: string | null
      dates: { from: string | null; to: string | null } | null
      company: { id: string | null; name: string | null; linkedinUrl: string | null } | null
    }[]
    educationHistory: {
      degree: string | null
      dates: { from: string | null; to: string | null } | null
      institution: { id: string | null; name: string | null; linkedinUrl: string | null } | null
    }[]
  }
  type: 'person'
}
type WebsetItemCompanyProperties = {
  url: string
  description: string
  content: string | null
  company: {
    name: string
    location: string | null
    employees: number | null
    industry: string | null
    about: string | null
    logoUrl: string | null
    foundedYear: number | null
    headquarters: {
      address: string | null
      city: string | null
      state: string | null
      postalCode: string | null
      country: string | null
      countryCode: string | null
    } | null
    financials: {
      revenueAnnual: number | null
      fundingTotal: number | null
      fundingLatestRound: { name: string | null; date: string | null; amount: number | null } | null
    } | null
    webTraffic: { visitsMonthly: number | null; uniqueVisitors: number | null } | null
  }
  type: 'company'
}
type WebsetItemArticleProperties = {
  url: string
  description: string
  content: string | null
  article: { title: string | null; author: string | null; publishedAt: string | null }
  type: 'article'
}
type WebsetItemResearchPaperProperties = {
  url: string
  description: string
  content: string | null
  researchPaper: { title: string | null; author: string | null; publishedAt: string | null }
  type: 'research_paper'
}
type WebsetItemCustomProperties = {
  url: string
  description: string
  content: string | null
  custom: { title: string | null; author: string | null; publishedAt: string | null }
  type: 'custom'
}
type WebsetItemEvaluation = {
  criterion: string
  reasoning: string
  satisfied: 'yes' | 'no' | 'unclear'
  references?: { title: string | null; snippet: string | null; url: string }[] | undefined
}
type EnrichmentResult = {
  object: 'enrichment_result'
  status: 'pending' | 'completed' | 'canceled'
  format: WebsetEnrichmentFormat
  result: string[] | null
  reasoning: string | null
  references: { title: string | null; snippet: string | null; url: string }[]
  enrichmentId: string
}
type WebsetItem = {
  id: string
  object: 'webset_item'
  source: 'search' | 'import'
  sourceId: string
  sourceEntityId?: string | undefined
  scopeId?: string | undefined
  websetId: string
  properties:
    | WebsetItemPersonProperties
    | WebsetItemCompanyProperties
    | WebsetItemArticleProperties
    | WebsetItemResearchPaperProperties
    | WebsetItemCustomProperties
  evaluations: WebsetItemEvaluation[]
  enrichments: EnrichmentResult[] | null
  createdAt: string
  updatedAt: string
}
type GetWebsetResponse = {
  id: string
  object: 'webset'
  status: 'idle' | 'pending' | 'running' | 'paused'
  externalId: string | null
  title: string | null
  searches: WebsetSearch[]
  imports: Import[]
  enrichments: WebsetEnrichment[]
  monitors: Monitor[]
  excludes?: { source: 'import' | 'webset'; id: string }[] | undefined
  metadata?: { [x: string]: string } | undefined
  dashboardUrl: string
  createdAt: string
  updatedAt: string
  items?: WebsetItem[] | undefined
}
type UpdateWebsetRequest = {
  metadata?: ({ [x: string]: string } | null) | undefined
  title?: string | undefined
}
type CreateWebsetSearchParameters = {
  count: number
  query: string
  entity?: Entity | undefined
  criteria?: CreateCriterionParameters[] | undefined
  maxPeoplePerCompany?: number | undefined
  exclude?: { source: 'import' | 'webset'; id: string }[] | undefined
  scope?:
    | {
        source: 'import' | 'webset'
        id: string
        relationship?: { definition: string; limit: number } | undefined
      }[]
    | undefined
  recall?: boolean | undefined
  behavior?: WebsetSearchBehavior | undefined
  metadata?: { [x: string]: string } | undefined
}
type UpdateEnrichmentParameters = {
  description?: string | undefined
  format?: WebsetEnrichmentFormat | undefined
  options?: { label: string }[] | undefined
  metadata?: ({ [x: string]: string } | null) | undefined
}
type ListWebsetItemResponse = { data: WebsetItem[]; hasMore: boolean; nextCursor: string | null }
type PreviewWebsetParameters = {
  search: { query: string; entity?: Entity | undefined; count?: number | undefined }
}
type WebsetItemPreview = {
  id: string
  properties:
    | WebsetItemPersonProperties
    | WebsetItemCompanyProperties
    | WebsetItemArticleProperties
    | WebsetItemResearchPaperProperties
    | WebsetItemCustomProperties
  createdAt: string
}
type PreviewWebsetResponse = {
  search: {
    entity: CompanyEntity | PersonEntity | ArticleEntity | ResearchPaperEntity | CustomEntity
    criteria: { description: string }[]
  }
  enrichments: {
    description: string
    format: 'text' | 'date' | 'number' | 'options' | 'email' | 'phone' | 'url'
    options?: { label: string }[] | undefined
  }[]
  items: WebsetItemPreview[]
}
type CreateMonitorParameters = {
  websetId: string
  cadence: MonitorCadence
  behavior: MonitorBehavior
  metadata?: { [x: string]: string } | undefined
}
type ListMonitorsResponse = { data: Monitor[]; hasMore: boolean; nextCursor: string | null }
type UpdateMonitor = {
  metadata?: { [x: string]: string } | undefined
  status?: 'enabled' | 'disabled' | undefined
  cadence?: MonitorCadence | undefined
  behavior?: MonitorBehavior | undefined
}
type ListMonitorRunsResponse = { data: MonitorRun[]; hasMore: boolean; nextCursor: string | null }
type CreateImportParameters = {
  size: number
  count: number
  title?: string | undefined
  format: 'csv'
  metadata?: { [x: string]: string } | undefined
  entity: Entity
  csv?: { identifier?: number | undefined } | undefined
}
type CreateImportResponse = {
  id: string
  object: 'import'
  status: 'pending' | 'processing' | 'completed' | 'failed' | 'canceled'
  format: 'csv' | 'webset'
  entity: Entity
  title: string
  count: number
  metadata: { [x: string]: string }
  failedReason: 'invalid_format' | 'invalid_file_content' | 'missing_identifier'
  failedAt: string | null
  failedMessage: string | null
  createdAt: string
  updatedAt: string
  uploadUrl: string
  uploadValidUntil: string
}
type ListImportsResponse = { data: Import[]; hasMore: boolean; nextCursor: string | null }
type UpdateImport = { metadata?: { [x: string]: string } | undefined; title?: string | undefined }
type EventType =
  | 'webset.created'
  | 'webset.deleted'
  | 'webset.paused'
  | 'webset.idle'
  | 'webset.search.created'
  | 'webset.search.canceled'
  | 'webset.search.completed'
  | 'webset.search.updated'
  | 'import.created'
  | 'import.completed'
  | 'webset.item.created'
  | 'webset.item.enriched'
  | 'monitor.created'
  | 'monitor.updated'
  | 'monitor.deleted'
  | 'monitor.run.created'
  | 'monitor.run.completed'
  | 'webset.export.created'
  | 'webset.export.completed'
type CreateWebhookParameters = {
  events: EventType[]
  url: string
  metadata?: { [x: string]: string } | undefined
}
type Webhook = {
  id: string
  object: 'webhook'
  status: 'active' | 'inactive'
  events: EventType[]
  url: string
  secret: string | null
  metadata?: { [x: string]: string } | undefined
  createdAt: string
  updatedAt: string
}
type ListWebhooksResponse = { data: Webhook[]; hasMore: boolean; nextCursor: string | null }
type UpdateWebhookParameters = {
  events?: EventType[] | undefined
  url?: string | undefined
  metadata?: { [x: string]: string } | undefined
}
type WebhookAttempt = {
  id: string
  object: 'webhook_attempt'
  eventId: string
  eventType: EventType
  webhookId: string
  url: string
  successful: boolean
  responseHeaders: { [x: string]: string }
  responseBody: string | null
  responseStatusCode: number
  attempt: number
  attemptedAt: string
}
type ListWebhookAttemptsResponse = {
  data: WebhookAttempt[]
  hasMore: boolean
  nextCursor: string | null
}
type Event =
  | { id: string; object: 'event'; data: Webset; createdAt: string; type: 'webset.created' }
  | { id: string; object: 'event'; data: Webset; createdAt: string; type: 'webset.deleted' }
  | { id: string; object: 'event'; data: Webset; createdAt: string; type: 'webset.idle' }
  | { id: string; object: 'event'; data: Webset; createdAt: string; type: 'webset.paused' }
  | {
      id: string
      object: 'event'
      data: WebsetItem
      createdAt: string
      type: 'webset.item.created'
    }
  | {
      id: string
      object: 'event'
      data: WebsetItem
      createdAt: string
      type: 'webset.item.enriched'
    }
  | {
      id: string
      object: 'event'
      data: WebsetSearch
      createdAt: string
      type: 'webset.search.created'
    }
  | {
      id: string
      object: 'event'
      data: WebsetSearch
      createdAt: string
      type: 'webset.search.updated'
    }
  | {
      id: string
      object: 'event'
      data: WebsetSearch
      createdAt: string
      type: 'webset.search.canceled'
    }
  | {
      id: string
      object: 'event'
      data: WebsetSearch
      createdAt: string
      type: 'webset.search.completed'
    }
  | { id: string; object: 'event'; data: Import; createdAt: string; type: 'import.created' }
  | { id: string; object: 'event'; data: Import; createdAt: string; type: 'import.completed' }
  | { id: string; object: 'event'; data: Monitor; createdAt: string; type: 'monitor.created' }
  | { id: string; object: 'event'; data: Monitor; createdAt: string; type: 'monitor.updated' }
  | { id: string; object: 'event'; data: Monitor; createdAt: string; type: 'monitor.deleted' }
  | {
      id: string
      object: 'event'
      data: MonitorRun
      createdAt: string
      type: 'monitor.run.created'
    }
  | {
      id: string
      object: 'event'
      data: MonitorRun
      createdAt: string
      type: 'monitor.run.completed'
    }
type ListEventsResponse = { data: Event[]; hasMore: boolean; nextCursor: string | null }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/search': {
      $post:
        | {
            input: { json: SearchRequest }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SearchRequest }
            output: SearchStreamChunk
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse | X402PaymentChallenge
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: SearchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/contents': {
      $post:
        | {
            input: { json: ContentsRequest }
            output: ContentsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse | X402PaymentChallenge
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: ContentsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/answer': {
      $post:
        | {
            input: { json: AnswerRequest }
            output: AnswerResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnswerRequest }
            output: AnswerStreamChunk
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: AnswerRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/findSimilar': {
      $post:
        | {
            input: { json: FindSimilarRequest }
            output: FindSimilarResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 402
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
        | {
            input: { json: FindSimilarRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 503
          }
    }
  } & {
    '/monitors': {
      $post:
        | {
            input: { json: CreateSearchMonitorParameters }
            output: CreateSearchMonitorResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CreateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CreateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: CreateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: CreateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                status?: 'active' | 'paused' | 'disabled' | undefined
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ListSearchMonitorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                status?: 'active' | 'paused' | 'disabled' | undefined
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                status?: 'active' | 'paused' | 'disabled' | undefined
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                status?: 'active' | 'paused' | 'disabled' | undefined
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                status?: 'active' | 'paused' | 'disabled' | undefined
                cursor?: string | undefined
                limit?: number | undefined
                name?: string | undefined
                metadata?: { [x: string]: string } | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/monitors/batch': {
      $post:
        | {
            input: { json: BatchMonitorsRequest }
            output: BatchMonitorsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: BatchMonitorsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: BatchMonitorsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: BatchMonitorsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { json: BatchMonitorsRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/monitors/:id': {
      $get:
        | {
            input: { param: { id: string } }
            output: SearchMonitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateSearchMonitorParameters }
            output: SearchMonitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { json: UpdateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { json: UpdateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { json: UpdateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { json: UpdateSearchMonitorParameters }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } }
            output: SearchMonitor
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/monitors/:id/trigger': {
      $post:
        | {
            input: { param: { id: string } }
            output: TriggerSearchMonitorResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/monitors/:id/runs': {
      $get:
        | {
            input: { param: { id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: ListSearchMonitorRunsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & {
              query: { cursor?: string | undefined; limit?: number | undefined }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/monitors/:id/runs/:runId': {
      $get:
        | {
            input: { param: { id: string; runId: string } }
            output: SearchMonitorRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string; runId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string; runId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string; runId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string; runId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string; runId: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agent/runs': {
      $post:
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: AgentRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: AgentRunEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Exa-Beta'?: string | undefined
              }
            } & { json: CreateAgentRunRequest }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: { query: { limit?: number | undefined; cursor?: AgentRunId | undefined } }
            output: AgentRunList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: AgentRunId | undefined } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: AgentRunId | undefined } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: AgentRunId | undefined } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { query: { limit?: number | undefined; cursor?: AgentRunId | undefined } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agent/runs/:id': {
      $get:
        | {
            input: { param: { id: AgentRunId } }
            output: AgentRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: AgentRunId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: AgentRunId } }
            output: DeleteAgentRunResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: AgentRunId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agent/runs/:id/cancel': {
      $post:
        | {
            input: { param: { id: AgentRunId } }
            output: AgentRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: AgentRunId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agent/runs/:id/stop': {
      $post:
        | {
            input: { param: { id: AgentRunId } }
            output: AgentRun
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: AgentRunId } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: AgentRunId } }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/agent/runs/:id/events': {
      $get:
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentRunEventList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentRunEvent
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 429
          }
        | {
            input: { param: { id: AgentRunId } } & {
              query: { limit?: number | undefined; cursor?: string | undefined }
            } & {
              header: {
                Accept?: 'application/json' | 'text/event-stream' | undefined
                'Last-Event-ID'?: string | undefined
              }
            }
            output: AgentErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/batches': {
      $post:
        | {
            input: { header: { 'Exa-Beta': 'batches-2026-06-06' } } & { json: CreateBatchRequest }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { header: { 'Exa-Beta': 'batches-2026-06-06' } } & { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { header: { 'Exa-Beta': 'batches-2026-06-06' } } & { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { header: { 'Exa-Beta': 'batches-2026-06-06' } } & { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { header: { 'Exa-Beta': 'batches-2026-06-06' } } & { json: CreateBatchRequest }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $get:
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'completed' | undefined
              }
            } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: BatchList
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'completed' | undefined
              }
            } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'completed' | undefined
              }
            } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'completed' | undefined
              }
            } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: {
              query: {
                cursor?: string | undefined
                limit?: number | undefined
                status?: 'completed' | undefined
              }
            } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/batches/:id': {
      $get:
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
      $delete:
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: DeletedBatch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/batches/:id/cancel': {
      $post:
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: Batch
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 403
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 404
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 409
          }
        | {
            input: { param: { id: string } } & { header: { 'Exa-Beta': 'batches-2026-06-06' } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 500
          }
    }
  } & {
    '/v0/teams/me': {
      $get: { input: {}; output: WebsetsTeamInfo; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v0/websets': {
      $post:
        | {
            input: { json: CreateWebsetParameters }
            output: Webset
            outputFormat: 'json'
            status: 201
          }
        | { input: { json: CreateWebsetParameters }; output: {}; outputFormat: string; status: 409 }
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            search?: string | undefined
          }
        }
        output: ListWebsetsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:id': {
      $get:
        | {
            input: { param: { id: string } } & { query: { expand?: 'items'[] | undefined } }
            output: GetWebsetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { query: { expand?: 'items'[] | undefined } }
            output: {}
            outputFormat: string
            status: 404
          }
      $post:
        | {
            input: { param: { id: string } } & { json: UpdateWebsetRequest }
            output: Webset
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebsetRequest }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: Webset; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v0/websets/:id/cancel': {
      $post: { input: { param: { id: string } }; output: Webset; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/v0/websets/:webset/searches': {
      $post: {
        input: { param: { webset: string } } & { json: CreateWebsetSearchParameters }
        output: WebsetSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/searches/:id': {
      $get: {
        input: { param: { webset: string; id: string } }
        output: WebsetSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/searches/:id/cancel': {
      $post: {
        input: { param: { webset: string; id: string } }
        output: WebsetSearch
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/enrichments': {
      $post: {
        input: { param: { webset: string } } & { json: CreateEnrichmentParameters }
        output: WebsetEnrichment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/enrichments/:id': {
      $patch: {
        input: { param: { webset: string; id: string } } & { json: UpdateEnrichmentParameters }
        output: {}
        outputFormat: string
        status: 200
      }
      $get: {
        input: { param: { webset: string; id: string } }
        output: WebsetEnrichment
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webset: string; id: string } }
        output: WebsetEnrichment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/enrichments/:id/cancel': {
      $post: {
        input: { param: { webset: string; id: string } }
        output: WebsetEnrichment
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/items/:id': {
      $get: {
        input: { param: { webset: string; id: string } }
        output: WebsetItem
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { webset: string; id: string } }
        output: WebsetItem
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/:webset/items': {
      $get: {
        input: { param: { webset: string } } & {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            sourceId?: string | undefined
          }
        }
        output: ListWebsetItemResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/websets/preview': {
      $post:
        | {
            input: { query: { search?: boolean | undefined } } & { json: PreviewWebsetParameters }
            output: PreviewWebsetResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { search?: boolean | undefined } } & { json: PreviewWebsetParameters }
            output: {}
            outputFormat: string
            status: 422
          }
    }
  } & {
    '/v0/monitors': {
      $post: {
        input: { json: CreateMonitorParameters }
        output: Monitor
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            websetId?: string | undefined
          }
        }
        output: ListMonitorsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/monitors/:id': {
      $get: { input: { param: { id: string } }; output: Monitor; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: string } } & { json: UpdateMonitor }
        output: Monitor
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Monitor
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/monitors/:monitor/runs': {
      $get: {
        input: { param: { monitor: string } }
        output: ListMonitorRunsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/monitors/:monitor/runs/:id': {
      $get: {
        input: { param: { monitor: string; id: string } }
        output: MonitorRun
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/imports': {
      $post: {
        input: { json: CreateImportParameters }
        output: CreateImportResponse
        outputFormat: 'json'
        status: 201
      }
      $get: {
        input: { query: { cursor?: string | undefined; limit?: number | undefined } }
        output: ListImportsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/imports/:id': {
      $get: { input: { param: { id: string } }; output: Import; outputFormat: 'json'; status: 200 }
      $patch: {
        input: { param: { id: string } } & { json: UpdateImport }
        output: Import
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { id: string } }
        output: Import
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/webhooks': {
      $post: {
        input: { json: CreateWebhookParameters }
        output: Webhook
        outputFormat: 'json'
        status: 200
      }
      $get: {
        input: { query: { cursor?: string | undefined; limit?: number | undefined } }
        output: ListWebhooksResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/webhooks/:id': {
      $get:
        | { input: { param: { id: string } }; output: Webhook; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
      $patch:
        | {
            input: { param: { id: string } } & { json: UpdateWebhookParameters }
            output: Webhook
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { id: string } } & { json: UpdateWebhookParameters }
            output: {}
            outputFormat: string
            status: 404
          }
      $delete:
        | { input: { param: { id: string } }; output: Webhook; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  } & {
    '/v0/webhooks/:id/attempts': {
      $get: {
        input: { param: { id: string } } & {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            eventType?: EventType | undefined
            successful?: boolean | undefined
          }
        }
        output: ListWebhookAttemptsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/events': {
      $get: {
        input: {
          query: {
            cursor?: string | undefined
            limit?: number | undefined
            types?:
              | (
                  | 'webset.created'
                  | 'webset.deleted'
                  | 'webset.paused'
                  | 'webset.idle'
                  | 'webset.search.created'
                  | 'webset.search.canceled'
                  | 'webset.search.completed'
                  | 'webset.search.updated'
                  | 'import.created'
                  | 'import.completed'
                  | 'webset.item.created'
                  | 'webset.item.enriched'
                  | 'monitor.created'
                  | 'monitor.updated'
                  | 'monitor.deleted'
                  | 'monitor.run.created'
                  | 'monitor.run.completed'
                  | 'webset.export.created'
                  | 'webset.export.completed'
                )[]
              | undefined
            createdBefore?: string | undefined
            createdAfter?: string | undefined
          }
        }
        output: ListEventsResponse
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/v0/events/:id': {
      $get:
        | { input: { param: { id: string } }; output: Event; outputFormat: 'json'; status: 200 }
        | { input: { param: { id: string } }; output: {}; outputFormat: string; status: 404 }
    }
  },
  '/'
>
export default routes
