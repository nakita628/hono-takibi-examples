type ChatInput = {
  query: string
  table: string
  model_name: string
  conversation_uuid?: string
  vector_field?: string
  fields?: string
}
type FulltextFilterInput = {
  query_string?: string
  match?: { [key: string]: unknown }
  match_phrase?: { [key: string]: unknown }
  match_all?: { [key: string]: unknown }
}
type BoolFilterInput = {
  must?: QueryFilterInput[]
  must_not?: QueryFilterInput[]
  should?: QueryFilterInput[]
}
type GeoDistanceInput = {
  location_anchor?: { lat?: number; lon?: number }
  location_source?: string
  distance_type?: 'adaptive' | 'haversine'
  distance?: string
}
type QueryFilterInput = FulltextFilterInput & {
  bool?: BoolFilterInput
  equals?: any
  in?: { [key: string]: unknown }
  range?: { [key: string]: unknown }
  geo_distance?: GeoDistanceInput
}
type HighlightFieldsInput = string[] | { [key: string]: unknown }
type HighlightFieldOptionInput = {
  fragment_size?: number
  limit?: number
  limit_snippets?: number
  limit_words?: number
  number_of_fragments?: number
}
type HighlightInput = {
  after_match?: string
  allow_empty?: boolean
  around?: number
  before_match?: string
  emit_zones?: boolean
  encoder?: 'default' | 'html'
  fields?: HighlightFieldsInput
  force_all_words?: boolean
  force_snippets?: boolean
  highlight_query?: any | QueryFilterInput
  html_strip_mode?: 'none' | 'strip' | 'index' | 'retain'
  limits_per_field?: boolean
  no_match_size?: 0 | 1
  order?: 'asc' | 'desc' | 'score'
  pre_tags?: string
  post_tags?: string
  start_snippet_id?: number
  use_boundaries?: boolean
} & HighlightFieldOptionInput
type SearchQueryInput = QueryFilterInput & { highlight?: HighlightInput }
type JoinCondInput = { field: string; table: string; query?: FulltextFilterInput; type?: any }
type JoinOnInput = { right?: JoinCondInput } & { left?: JoinCondInput } & { operator?: 'eq' }
type JoinInput = {
  type: 'inner' | 'left'
  on: JoinOnInput[]
  query?: FulltextFilterInput
  table: string
}
type DocumentIdInput = bigint
type KnnInput = {
  field: string
  k?: number
  query?: string | number[]
  query_vector?: number[]
  doc_id?: DocumentIdInput
  ef?: number
  rescore?: boolean
  oversampling?: number
  filter?: QueryFilterInput
}
type HybridInput = { query: string; field?: string }
type FacetFilterModeInput = 'strict' | 'auto' | 'max'
type AggTermsInput = { field: string; size?: number }
type AggCompositeTermInput = { field: string }
type AggCompositeSourceInput = { terms: AggCompositeTermInput }
type AggCompositeInput = { size?: number; sources?: { [key: string]: AggCompositeSourceInput }[] }
type AggHistogramInput = { field: string; interval: number; offset?: number; keyed?: boolean }
type AggDateHistogramInput = {
  field: string
  calendar_interval: number
  offset?: number
  keyed?: boolean
}
type RangeInput = { from?: any; to?: any }
type AggRangeInput = { field: string; ranges: RangeInput[]; keyed?: boolean }
type AggTDigestInput = { compression?: number }
type AggPercentilesInput = {
  field: string
  values?: number[]
  keyed?: boolean
  tdigest?: AggTDigestInput
}
type AggPercentileRanksInput = {
  field: string
  values: number[]
  keyed?: boolean
  tdigest?: AggTDigestInput
}
type AggMedianAbsoluteDeviationInput = { field: string; tdigest?: AggTDigestInput }
type AggMetricInput = { field: string }
type AggregationInput = {
  terms?: AggTermsInput
  sort?: any[]
  composite?: AggCompositeInput
  histogram?: AggHistogramInput
  date_histogram?: AggDateHistogramInput
  range?: AggRangeInput
  date_range?: AggRangeInput
  percentiles?: AggPercentilesInput
  percentile_ranks?: AggPercentileRanksInput
  median_absolute_deviation?: AggMedianAbsoluteDeviationInput
  min?: AggMetricInput
  max?: AggMetricInput
  sum?: AggMetricInput
  avg?: AggMetricInput
}
type ScriptFieldScriptInput = { inline: string }
type ScriptFieldInput = { script: ScriptFieldScriptInput }
type SearchRequestInput = {
  table?: string
  chat?: ChatInput
  query?: SearchQueryInput
  join?: JoinInput[]
  highlight?: HighlightInput
  limit?: number
  knn?: KnnInput
  hybrid?: HybridInput
  facet_filter_mode?: FacetFilterModeInput
  aggs?: { [key: string]: AggregationInput }
  expressions?: { [key: string]: string }
  script_fields?: { [key: string]: ScriptFieldInput }
  max_matches?: number
  offset?: number
  options?: { [key: string]: unknown }
  profile?: boolean
  sort?: any
  _source?: any
  track_scores?: boolean
}
type AggBucketsResult = {
  buckets?: any | undefined
  after_key?: { [key: string]: unknown } | undefined
  value?: any | undefined
  value_as_string?: string | undefined
  values?: any | undefined
}
type DocumentId = bigint
type HitsHits = {
  _id?: DocumentId | undefined
  _score?: number | undefined
  _source?: { [key: string]: unknown } | undefined
  _knn_dist?: number | undefined
  highlight?: { [key: string]: unknown } | undefined
  table?: string | undefined
  '_type:'?: string | undefined
  fields?: { [key: string]: unknown } | undefined
}
type SearchResponse = {
  took?: number | undefined
  timed_out?: boolean | undefined
  aggregations?: { [key: string]: AggBucketsResult } | undefined
  hits?:
    | {
        max_score?: number | undefined
        total?: number | undefined
        total_relation?: string | undefined
        hits?: HitsHits[] | undefined
      }
    | undefined
  profile?: { [key: string]: unknown } | undefined
  scroll?: string | undefined
  warning?: { [key: string]: unknown } | undefined
  conversation_uuid?: string | undefined
  user_query?: string | undefined
  search_query?: string | undefined
  response?: string | undefined
  sources?: string | undefined
}
type ResponseErrorDetails = {
  type: string
  reason?: (string | null) | undefined
  table?: (string | null) | undefined
}
type ResponseErrorText = string
type ResponseError = ResponseErrorDetails | ResponseErrorText
type ErrorResponse = { error: ResponseError; status?: number | undefined }
type AutocompleteRequestInput = {
  table: string
  query: string
  options?: { [key: string]: unknown }
}
type SqlRawResponse = { [key: string]: unknown }[]
type BulkResponse = {
  items?: { [key: string]: unknown }[] | undefined
  errors?: boolean | undefined
  error?: string | undefined
  current_line?: number | undefined
  skipped_lines?: number | undefined
}
type DeleteDocumentRequestInput = {
  table: string
  cluster?: string
  id?: DocumentIdInput
  query?: { [key: string]: unknown }
}
type DeleteResponse = {
  table?: string | undefined
  deleted?: number | undefined
  id?: DocumentId | undefined
  found?: boolean | undefined
  result?: string | undefined
}
type InsertDocumentRequestInput = {
  table: string
  cluster?: string
  id?: DocumentIdInput
  doc: { [key: string]: unknown }
}
type SuccessResponse = {
  table?: string | undefined
  id?: DocumentId | undefined
  created?: boolean | undefined
  result?: string | undefined
  found?: boolean | undefined
  status?: number | undefined
}
type PercolateRequestInput = { query: { percolate: { [key: string]: unknown } } }
type SqlObjResponse = {
  hits: { [key: string]: unknown }
  took?: number | undefined
  timed_out?: boolean | undefined
}
type SqlResponse = SqlRawResponse | SqlObjResponse
type TokenRequestInput = {}
type TokenResponse = string
type UpdateDocumentRequestInput = {
  table: string
  cluster?: string
  doc: { [key: string]: unknown }
  id?: DocumentIdInput
  query?: any | QueryFilterInput
}
type UpdateResponse = {
  table?: string | undefined
  updated?: number | undefined
  id?: DocumentId | undefined
  result?: string | undefined
}
type ReplaceDocumentRequestInput = { doc: { [key: string]: unknown } }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/search': {
      $post:
        | {
            input: { json: SearchRequestInput }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SearchRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/autocomplete': {
      $post:
        | {
            input: { json: AutocompleteRequestInput }
            output: SqlRawResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AutocompleteRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/bulk': {
      $post:
        | { input: {}; output: BulkResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ErrorResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/delete': {
      $post:
        | {
            input: { json: DeleteDocumentRequestInput }
            output: DeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: DeleteDocumentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/insert': {
      $post:
        | {
            input: { json: InsertDocumentRequestInput }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InsertDocumentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/pq/:table/search': {
      $post:
        | {
            input: { param: { table: string } } & { json: PercolateRequestInput }
            output: SearchResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table: string } } & { json: PercolateRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/replace': {
      $post:
        | {
            input: { json: InsertDocumentRequestInput }
            output: SuccessResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: InsertDocumentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/sql': {
      $post:
        | {
            input: { query: { raw_response?: string } }
            output: SqlResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { raw_response?: string } }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/token': {
      $post:
        | {
            input: { json: TokenRequestInput }
            output: TokenResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: TokenRequestInput }
            output: TokenResponse
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { json: TokenRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { json: TokenRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/update': {
      $post:
        | {
            input: { json: UpdateDocumentRequestInput }
            output: UpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: UpdateDocumentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  } & {
    '/:table/_update/:id': {
      $post:
        | {
            input: { param: { table: string; id: unknown } } & { json: ReplaceDocumentRequestInput }
            output: UpdateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { table: string; id: unknown } } & { json: ReplaceDocumentRequestInput }
            output: ErrorResponse
            outputFormat: 'json'
            status: 200
          }
    }
  },
  '/'
>
export default routes
