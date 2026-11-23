type Field = {
  name: string
  type: string
  optional?: boolean | undefined
  facet?: boolean | undefined
  index?: boolean | undefined
  locale?: string | undefined
  sort?: boolean | undefined
  infix?: boolean | undefined
  reference?: string | undefined
  async_reference?: boolean | undefined
  num_dim?: number | undefined
  drop?: boolean | undefined
  store?: boolean | undefined
  vec_dist?: string | undefined
  range_index?: boolean | undefined
  stem?: boolean | undefined
  stem_dictionary?: string | undefined
  token_separators?: string[] | undefined
  symbols_to_index?: string[] | undefined
  embed?:
    | {
        from: string[]
        model_config: {
          model_name: string
          api_key?: string | undefined
          url?: string | undefined
          access_token?: string | undefined
          refresh_token?: string | undefined
          client_id?: string | undefined
          client_secret?: string | undefined
          project_id?: string | undefined
          indexing_prefix?: string | undefined
          query_prefix?: string | undefined
        }
      }
    | undefined
}
type VoiceQueryModelCollectionConfig = { model_name?: string | undefined }
type CollectionResponse = {
  name: string
  fields: Field[]
  default_sorting_field?: string | undefined
  token_separators?: string[] | undefined
  synonym_sets?: string[] | undefined
  enable_nested_fields?: boolean | undefined
  symbols_to_index?: string[] | undefined
  voice_query_model?: VoiceQueryModelCollectionConfig | undefined
  metadata?: { [x: string]: unknown } | undefined
  num_documents: bigint
  created_at: bigint
}
type CollectionSchema = {
  name: string
  fields: Field[]
  default_sorting_field?: string | undefined
  token_separators?: string[] | undefined
  synonym_sets?: string[] | undefined
  enable_nested_fields?: boolean | undefined
  symbols_to_index?: string[] | undefined
  voice_query_model?: VoiceQueryModelCollectionConfig | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type ApiResponse = { message: string }
type CollectionUpdateSchema = {
  fields?: Field[] | undefined
  synonym_sets?: string[] | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type IndexAction = 'create' | 'update' | 'upsert' | 'emplace'
type DirtyValues = 'coerce_or_reject' | 'coerce_or_drop' | 'drop' | 'reject'
type DropTokensMode = 'right_to_left' | 'left_to_right' | 'both_sides:3'
type SearchParameters = {
  q?: string | undefined
  query_by?: string | undefined
  validate_field_names?: boolean | undefined
  nl_query?: boolean | undefined
  nl_model_id?: string | undefined
  query_by_weights?: string | undefined
  text_match_type?: string | undefined
  prefix?: string | undefined
  infix?: string | undefined
  max_extra_prefix?: number | undefined
  max_extra_suffix?: number | undefined
  filter_by?: string | undefined
  enable_lazy_filter?: boolean | undefined
  max_filter_by_candidates?: number | undefined
  sort_by?: string | undefined
  facet_by?: string | undefined
  max_facet_values?: number | undefined
  facet_query?: string | undefined
  facet_query_num_typos?: number | undefined
  num_typos?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  limit?: number | undefined
  offset?: number | undefined
  group_by?: string | undefined
  group_limit?: number | undefined
  group_missing_values?: boolean | undefined
  group_max_candidates?: number | undefined
  include_fields?: string | undefined
  exclude_fields?: string | undefined
  highlight_full_fields?: string | undefined
  highlight_affix_num_tokens?: number | undefined
  highlight_start_tag?: string | undefined
  highlight_end_tag?: string | undefined
  enable_highlight_v1?: boolean | undefined
  enable_analytics?: boolean | undefined
  snippet_threshold?: number | undefined
  synonym_sets?: string | undefined
  drop_tokens_threshold?: number | undefined
  drop_tokens_mode?: DropTokensMode | undefined
  typo_tokens_threshold?: number | undefined
  enable_typos_for_alpha_numerical_tokens?: boolean | undefined
  filter_curated_hits?: boolean | undefined
  enable_synonyms?: boolean | undefined
  synonym_prefix?: boolean | undefined
  demote_synonym_match?: boolean | undefined
  synonym_num_typos?: number | undefined
  pinned_hits?: string | undefined
  hidden_hits?: string | undefined
  curation_tags?: string | undefined
  highlight_fields?: string | undefined
  rerank_hybrid_matches?: boolean | undefined
  split_join_tokens?: string | undefined
  pre_segmented_query?: boolean | undefined
  preset?: string | undefined
  enable_curations?: boolean | undefined
  prioritize_exact_match?: boolean | undefined
  max_candidates?: number | undefined
  prioritize_token_position?: boolean | undefined
  prioritize_num_matching_fields?: boolean | undefined
  enable_typos_for_numerical_tokens?: boolean | undefined
  exhaustive_search?: boolean | undefined
  search_cutoff_ms?: number | undefined
  limit_hits?: number | undefined
  use_cache?: boolean | undefined
  cache_ttl?: number | undefined
  min_len_1typo?: number | undefined
  min_len_2typo?: number | undefined
  vector_query?: string | undefined
  remote_embedding_timeout_ms?: number | undefined
  remote_embedding_num_tries?: number | undefined
  facet_strategy?: string | undefined
  stopwords?: string | undefined
  facet_return_parent?: string | undefined
  facet_sample_percent?: number | undefined
  facet_sample_threshold?: number | undefined
  facet_sample_slope?: number | undefined
  voice_query?: string | undefined
  conversation?: boolean | undefined
  conversation_model_id?: string | undefined
  conversation_id?: string | undefined
}
type FacetCounts = {
  counts?:
    | {
        count?: number | undefined
        highlighted?: string | undefined
        value?: string | undefined
        parent?: { [x: string]: unknown } | undefined
      }[]
    | undefined
  field_name?: string | undefined
  sampled?: boolean | undefined
  stats?:
    | {
        max?: number | undefined
        min?: number | undefined
        sum?: number | undefined
        total_values?: number | undefined
        avg?: number | undefined
      }
    | undefined
}
type SearchHighlight = {
  field?: string | undefined
  snippet?: string | undefined
  snippets?: string[] | undefined
  value?: string | undefined
  values?: string[] | undefined
  indices?: number[] | undefined
  matched_tokens?: { [x: string]: unknown }[] | undefined
}
type SearchResultHit = {
  highlights?: SearchHighlight[] | undefined
  highlight?: { [x: string]: unknown } | undefined
  document?: { [x: string]: { [x: string]: unknown } } | undefined
  text_match?: bigint | undefined
  text_match_info?:
    | {
        best_field_score?: string | undefined
        best_field_weight?: number | undefined
        fields_matched?: number | undefined
        num_tokens_dropped?: bigint | undefined
        score?: string | undefined
        tokens_matched?: number | undefined
        typo_prefix_score?: number | undefined
      }
    | undefined
  geo_distance_meters?: { [x: string]: number } | undefined
  vector_distance?: number | undefined
  hybrid_search_info?: { rank_fusion_score?: number | undefined } | undefined
  search_index?: number | undefined
}
type SearchGroupedHit = {
  found?: number | undefined
  group_key: { [x: string]: unknown }[]
  hits: SearchResultHit[]
}
type SearchRequestParams = {
  collection_name: string
  first_q?: string | undefined
  q: string
  per_page: number
  voice_query?: { transcribed_query?: string | undefined } | undefined
}
type SearchResultConversation = {
  answer: string
  conversation_history: { [x: string]: unknown }[]
  conversation_id: string
  query: string
}
type SearchResult = {
  facet_counts?: FacetCounts[] | undefined
  found?: number | undefined
  found_docs?: number | undefined
  search_time_ms?: number | undefined
  out_of?: number | undefined
  search_cutoff?: boolean | undefined
  page?: number | undefined
  grouped_hits?: SearchGroupedHit[] | undefined
  hits?: SearchResultHit[] | undefined
  request_params?: SearchRequestParams | undefined
  conversation?: SearchResultConversation | undefined
  union_request_params?: SearchRequestParams[] | undefined
  metadata?: { [x: string]: unknown } | undefined
}
type SynonymItemSchema = {
  id: string
  synonyms: string[]
  root?: string | undefined
  locale?: string | undefined
  symbols_to_index?: string[] | undefined
}
type SynonymSetSchema = { items: SynonymItemSchema[]; name: string }
type SynonymSetCreateSchema = { items: SynonymItemSchema[] }
type SynonymSetDeleteSchema = { name: string }
type SynonymItemUpsertSchema = {
  synonyms: string[]
  root?: string | undefined
  locale?: string | undefined
  symbols_to_index?: string[] | undefined
}
type SynonymItemDeleteSchema = { id: string }
type CurationRule = {
  tags?: string[] | undefined
  query?: string | undefined
  match?: 'exact' | 'contains' | undefined
  filter_by?: string | undefined
}
type CurationInclude = { id: string; position: number }
type CurationExclude = { id: string }
type CurationItemCreateSchema = {
  rule: CurationRule
  includes?: CurationInclude[] | undefined
  excludes?: CurationExclude[] | undefined
  filter_by?: string | undefined
  remove_matched_tokens?: boolean | undefined
  metadata?: { [x: string]: unknown } | undefined
  sort_by?: string | undefined
  replace_query?: string | undefined
  filter_curated_hits?: boolean | undefined
  effective_from_ts?: number | undefined
  effective_to_ts?: number | undefined
  stop_processing?: boolean | undefined
  id?: string | undefined
}
type CurationSetSchema = {
  items: CurationItemCreateSchema[]
  description?: string | undefined
  name: string
}
type CurationSetCreateSchema = {
  items: CurationItemCreateSchema[]
  description?: string | undefined
}
type CurationSetDeleteSchema = { name: string }
type CurationItemSchema = {
  rule: CurationRule
  includes?: CurationInclude[] | undefined
  excludes?: CurationExclude[] | undefined
  filter_by?: string | undefined
  remove_matched_tokens?: boolean | undefined
  metadata?: { [x: string]: unknown } | undefined
  sort_by?: string | undefined
  replace_query?: string | undefined
  filter_curated_hits?: boolean | undefined
  effective_from_ts?: number | undefined
  effective_to_ts?: number | undefined
  stop_processing?: boolean | undefined
  id: string
}
type CurationItemDeleteSchema = { id: string }
type ConversationModelSchema = {
  id: string
  model_name: string
  api_key?: string | undefined
  history_collection: string
  account_id?: string | undefined
  system_prompt?: string | undefined
  ttl?: number | undefined
  max_bytes: number
  vllm_url?: string | undefined
}
type ConversationModelCreateSchema = {
  id?: string | undefined
  model_name: string
  api_key?: string | undefined
  history_collection: string
  account_id?: string | undefined
  system_prompt?: string | undefined
  ttl?: number | undefined
  max_bytes: number
  vllm_url?: string | undefined
}
type ConversationModelUpdateSchema = {
  id?: string | undefined
  model_name?: string | undefined
  api_key?: string | undefined
  history_collection?: string | undefined
  account_id?: string | undefined
  system_prompt?: string | undefined
  ttl?: number | undefined
  max_bytes?: number | undefined
  vllm_url?: string | undefined
}
type ApiKey = {
  value?: string | undefined
  description: string
  actions: string[]
  collections: string[]
  expires_at?: bigint | undefined
  id?: bigint | undefined
  value_prefix?: string | undefined
}
type ApiKeysResponse = { keys: ApiKey[] }
type ApiKeySchema = {
  value?: string | undefined
  description: string
  actions: string[]
  collections: string[]
  expires_at?: bigint | undefined
}
type ApiKeyDeleteResponse = { id: bigint }
type CollectionAlias = { name: string; collection_name: string }
type CollectionAliasesResponse = { aliases: CollectionAlias[] }
type CollectionAliasSchema = { collection_name: string }
type HealthStatus = { ok: boolean }
type SchemaChangeStatus = {
  collection?: string | undefined
  validated_docs?: number | undefined
  altered_docs?: number | undefined
}
type SuccessStatus = { success: boolean }
type MultiSearchParameters = {
  q?: string | undefined
  query_by?: string | undefined
  query_by_weights?: string | undefined
  text_match_type?: string | undefined
  prefix?: string | undefined
  infix?: string | undefined
  max_extra_prefix?: number | undefined
  max_extra_suffix?: number | undefined
  filter_by?: string | undefined
  enable_lazy_filter?: boolean | undefined
  max_filter_by_candidates?: number | undefined
  sort_by?: string | undefined
  facet_by?: string | undefined
  max_facet_values?: number | undefined
  facet_query?: string | undefined
  facet_query_num_typos?: number | undefined
  num_typos?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  limit?: number | undefined
  offset?: number | undefined
  group_by?: string | undefined
  group_limit?: number | undefined
  group_missing_values?: boolean | undefined
  group_max_candidates?: number | undefined
  include_fields?: string | undefined
  exclude_fields?: string | undefined
  highlight_full_fields?: string | undefined
  highlight_affix_num_tokens?: number | undefined
  highlight_start_tag?: string | undefined
  highlight_end_tag?: string | undefined
  snippet_threshold?: number | undefined
  drop_tokens_threshold?: number | undefined
  drop_tokens_mode?: DropTokensMode | undefined
  typo_tokens_threshold?: number | undefined
  enable_typos_for_alpha_numerical_tokens?: boolean | undefined
  filter_curated_hits?: boolean | undefined
  enable_synonyms?: boolean | undefined
  enable_analytics?: boolean | undefined
  synonym_prefix?: boolean | undefined
  demote_synonym_match?: boolean | undefined
  synonym_num_typos?: number | undefined
  pinned_hits?: string | undefined
  hidden_hits?: string | undefined
  curation_tags?: string | undefined
  highlight_fields?: string | undefined
  rerank_hybrid_matches?: boolean | undefined
  pre_segmented_query?: boolean | undefined
  preset?: string | undefined
  enable_curations?: boolean | undefined
  prioritize_exact_match?: boolean | undefined
  prioritize_token_position?: boolean | undefined
  prioritize_num_matching_fields?: boolean | undefined
  enable_typos_for_numerical_tokens?: boolean | undefined
  exhaustive_search?: boolean | undefined
  search_cutoff_ms?: number | undefined
  limit_hits?: number | undefined
  use_cache?: boolean | undefined
  cache_ttl?: number | undefined
  min_len_1typo?: number | undefined
  min_len_2typo?: number | undefined
  vector_query?: string | undefined
  remote_embedding_timeout_ms?: number | undefined
  remote_embedding_num_tries?: number | undefined
  facet_strategy?: string | undefined
  stopwords?: string | undefined
  facet_return_parent?: string | undefined
  facet_sample_percent?: number | undefined
  facet_sample_threshold?: number | undefined
  facet_sample_slope?: number | undefined
  voice_query?: string | undefined
  conversation?: boolean | undefined
  conversation_model_id?: string | undefined
  conversation_id?: string | undefined
  validate_field_names?: boolean | undefined
}
type MultiSearchCollectionParameters = {
  q?: string | undefined
  query_by?: string | undefined
  query_by_weights?: string | undefined
  text_match_type?: string | undefined
  prefix?: string | undefined
  infix?: string | undefined
  max_extra_prefix?: number | undefined
  max_extra_suffix?: number | undefined
  filter_by?: string | undefined
  enable_lazy_filter?: boolean | undefined
  max_filter_by_candidates?: number | undefined
  sort_by?: string | undefined
  facet_by?: string | undefined
  max_facet_values?: number | undefined
  facet_query?: string | undefined
  facet_query_num_typos?: number | undefined
  num_typos?: string | undefined
  page?: number | undefined
  per_page?: number | undefined
  limit?: number | undefined
  offset?: number | undefined
  group_by?: string | undefined
  group_limit?: number | undefined
  group_missing_values?: boolean | undefined
  group_max_candidates?: number | undefined
  include_fields?: string | undefined
  exclude_fields?: string | undefined
  highlight_full_fields?: string | undefined
  highlight_affix_num_tokens?: number | undefined
  highlight_start_tag?: string | undefined
  highlight_end_tag?: string | undefined
  snippet_threshold?: number | undefined
  drop_tokens_threshold?: number | undefined
  drop_tokens_mode?: DropTokensMode | undefined
  typo_tokens_threshold?: number | undefined
  enable_typos_for_alpha_numerical_tokens?: boolean | undefined
  filter_curated_hits?: boolean | undefined
  enable_synonyms?: boolean | undefined
  enable_analytics?: boolean | undefined
  synonym_prefix?: boolean | undefined
  demote_synonym_match?: boolean | undefined
  synonym_num_typos?: number | undefined
  pinned_hits?: string | undefined
  hidden_hits?: string | undefined
  curation_tags?: string | undefined
  highlight_fields?: string | undefined
  rerank_hybrid_matches?: boolean | undefined
  pre_segmented_query?: boolean | undefined
  preset?: string | undefined
  enable_curations?: boolean | undefined
  prioritize_exact_match?: boolean | undefined
  prioritize_token_position?: boolean | undefined
  prioritize_num_matching_fields?: boolean | undefined
  enable_typos_for_numerical_tokens?: boolean | undefined
  exhaustive_search?: boolean | undefined
  search_cutoff_ms?: number | undefined
  limit_hits?: number | undefined
  use_cache?: boolean | undefined
  cache_ttl?: number | undefined
  min_len_1typo?: number | undefined
  min_len_2typo?: number | undefined
  vector_query?: string | undefined
  remote_embedding_timeout_ms?: number | undefined
  remote_embedding_num_tries?: number | undefined
  facet_strategy?: string | undefined
  stopwords?: string | undefined
  facet_return_parent?: string | undefined
  facet_sample_percent?: number | undefined
  facet_sample_threshold?: number | undefined
  facet_sample_slope?: number | undefined
  voice_query?: string | undefined
  conversation?: boolean | undefined
  conversation_model_id?: string | undefined
  conversation_id?: string | undefined
  validate_field_names?: boolean | undefined
  collection?: string | undefined
  'x-typesense-api-key'?: string | undefined
}
type MultiSearchSearchesParameter = {
  union?: boolean | undefined
  searches: MultiSearchCollectionParameters[]
}
type MultiSearchResultItem = {
  facet_counts?: FacetCounts[] | undefined
  found?: number | undefined
  found_docs?: number | undefined
  search_time_ms?: number | undefined
  out_of?: number | undefined
  search_cutoff?: boolean | undefined
  page?: number | undefined
  grouped_hits?: SearchGroupedHit[] | undefined
  hits?: SearchResultHit[] | undefined
  request_params?: SearchRequestParams | undefined
  conversation?: SearchResultConversation | undefined
  union_request_params?: SearchRequestParams[] | undefined
  metadata?: { [x: string]: unknown } | undefined
  code?: bigint | undefined
  error?: string | undefined
}
type MultiSearchResult = {
  results: MultiSearchResultItem[]
  conversation?: SearchResultConversation | undefined
}
type AnalyticsEvent = {
  name: string
  event_type: string
  data: {
    user_id?: string | undefined
    doc_id?: string | undefined
    doc_ids?: string[] | undefined
    q?: string | undefined
    analytics_tag?: string | undefined
  }
}
type AnalyticsEventCreateResponse = { ok: boolean }
type AnalyticsEventsResponse = {
  events: {
    name?: string | undefined
    event_type?: string | undefined
    collection?: string | undefined
    timestamp?: bigint | undefined
    user_id?: string | undefined
    doc_id?: string | undefined
    doc_ids?: string[] | undefined
    query?: string | undefined
  }[]
}
type AnalyticsStatus = {
  popular_prefix_queries?: number | undefined
  nohits_prefix_queries?: number | undefined
  log_prefix_queries?: number | undefined
  query_log_events?: number | undefined
  query_counter_events?: number | undefined
  doc_log_events?: number | undefined
  doc_counter_events?: number | undefined
}
type AnalyticsRuleType = 'popular_queries' | 'nohits_queries' | 'counter' | 'log'
type AnalyticsRuleCreate = {
  name: string
  type: AnalyticsRuleType
  collection: string
  event_type: string
  rule_tag?: string | undefined
  params?:
    | {
        destination_collection?: string | undefined
        limit?: number | undefined
        capture_search_requests?: boolean | undefined
        meta_fields?: string[] | undefined
        expand_query?: boolean | undefined
        counter_field?: string | undefined
        weight?: number | undefined
      }
    | undefined
}
type AnalyticsRule = {
  name: string
  type: AnalyticsRuleType
  collection: string
  event_type: string
  rule_tag?: string | undefined
  params?:
    | {
        destination_collection?: string | undefined
        limit?: number | undefined
        capture_search_requests?: boolean | undefined
        meta_fields?: string[] | undefined
        expand_query?: boolean | undefined
        counter_field?: string | undefined
        weight?: number | undefined
      }
    | undefined
}
type AnalyticsRuleUpdate = {
  name?: string | undefined
  rule_tag?: string | undefined
  params?:
    | {
        destination_collection?: string | undefined
        limit?: number | undefined
        capture_search_requests?: boolean | undefined
        meta_fields?: string[] | undefined
        expand_query?: boolean | undefined
        counter_field?: string | undefined
        weight?: number | undefined
      }
    | undefined
}
type APIStatsResponse = {
  delete_latency_ms?: number | undefined
  delete_requests_per_second?: number | undefined
  import_latency_ms?: number | undefined
  import_requests_per_second?: number | undefined
  latency_ms?: { [x: string]: unknown } | undefined
  overloaded_requests_per_second?: number | undefined
  pending_write_batches?: number | undefined
  requests_per_second?: { [x: string]: unknown } | undefined
  search_latency_ms?: number | undefined
  search_requests_per_second?: number | undefined
  total_requests_per_second?: number | undefined
  write_latency_ms?: number | undefined
  write_requests_per_second?: number | undefined
}
type StopwordsSetSchema = { id: string; stopwords: string[]; locale?: string | undefined }
type StopwordsSetsRetrieveAllSchema = { stopwords: StopwordsSetSchema[] }
type StopwordsSetUpsertSchema = { stopwords: string[]; locale?: string | undefined }
type StopwordsSetRetrieveSchema = { stopwords: StopwordsSetSchema }
type PresetSchema = { value: SearchParameters | MultiSearchSearchesParameter; name: string }
type PresetsRetrieveSchema = { presets: PresetSchema[] }
type PresetUpsertSchema = { value: SearchParameters | MultiSearchSearchesParameter }
type PresetDeleteSchema = { name: string }
type StemmingDictionary = { id: string; words: { word: string; root: string }[] }
type NLSearchModelSchema = {
  model_name?: string | undefined
  api_key?: string | undefined
  api_url?: string | undefined
  max_bytes?: number | undefined
  temperature?: number | undefined
  system_prompt?: string | undefined
  top_p?: number | undefined
  top_k?: number | undefined
  stop_sequences?: string[] | undefined
  api_version?: string | undefined
  project_id?: string | undefined
  access_token?: string | undefined
  refresh_token?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  region?: string | undefined
  max_output_tokens?: number | undefined
  account_id?: string | undefined
  id: string
}
type NLSearchModelCreateSchema = {
  model_name?: string | undefined
  api_key?: string | undefined
  api_url?: string | undefined
  max_bytes?: number | undefined
  temperature?: number | undefined
  system_prompt?: string | undefined
  top_p?: number | undefined
  top_k?: number | undefined
  stop_sequences?: string[] | undefined
  api_version?: string | undefined
  project_id?: string | undefined
  access_token?: string | undefined
  refresh_token?: string | undefined
  client_id?: string | undefined
  client_secret?: string | undefined
  region?: string | undefined
  max_output_tokens?: number | undefined
  account_id?: string | undefined
  id?: string | undefined
}
type NLSearchModelDeleteSchema = { id: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/collections': {
      $get: {
        input: {
          query: {
            getCollectionsParameters?:
              | {
                  exclude_fields?: string | undefined
                  limit?: number | undefined
                  offset?: number | undefined
                }
              | undefined
          }
        }
        output: CollectionResponse[]
        outputFormat: 'json'
        status: 200
      }
      $post:
        | {
            input: { json: CollectionSchema }
            output: CollectionResponse
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: CollectionSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { json: CollectionSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 409
          }
    }
  } & {
    '/collections/:collectionName': {
      $get:
        | {
            input: { param: { collectionName: string } }
            output: CollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { collectionName: string } } & { json: CollectionUpdateSchema }
            output: CollectionUpdateSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string } } & { json: CollectionUpdateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collectionName: string } } & { json: CollectionUpdateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { collectionName: string } }
            output: CollectionResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collections/:collectionName/documents': {
      $post:
        | {
            input: { param: { collectionName: string } } & {
              query: { action?: IndexAction | undefined; dirty_values?: DirtyValues | undefined }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { param: { collectionName: string } } & {
              query: { action?: IndexAction | undefined; dirty_values?: DirtyValues | undefined }
            } & { json: { [x: string]: unknown } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { collectionName: string } } & {
              query: { updateDocumentsParameters?: { filter_by?: string | undefined } | undefined }
            } & { json: { [x: string]: unknown } }
            output: { num_updated: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string } } & {
              query: { updateDocumentsParameters?: { filter_by?: string | undefined } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collectionName: string } } & {
              query: { updateDocumentsParameters?: { filter_by?: string | undefined } | undefined }
            } & { json: { [x: string]: unknown } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { collectionName: string } } & {
              query: {
                deleteDocumentsParameters?:
                  | {
                      filter_by: string
                      batch_size?: number | undefined
                      ignore_not_found?: boolean | undefined
                      truncate?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: { num_deleted: number }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string } } & {
              query: {
                deleteDocumentsParameters?:
                  | {
                      filter_by: string
                      batch_size?: number | undefined
                      ignore_not_found?: boolean | undefined
                      truncate?: boolean | undefined
                    }
                  | undefined
              }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collections/:collectionName/documents/search': {
      $get:
        | {
            input: { param: { collectionName: string } } & {
              query: { searchParameters: SearchParameters }
            }
            output: SearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string } } & {
              query: { searchParameters: SearchParameters }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collectionName: string } } & {
              query: { searchParameters: SearchParameters }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/synonym_sets': {
      $get: { input: {}; output: SynonymSetSchema[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/synonym_sets/:synonymSetName': {
      $get:
        | {
            input: { param: { synonymSetName: string } }
            output: SynonymSetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { synonymSetName: string } } & { json: SynonymSetCreateSchema }
            output: SynonymSetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string } } & { json: SynonymSetCreateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { synonymSetName: string } }
            output: SynonymSetDeleteSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/synonym_sets/:synonymSetName/items': {
      $get:
        | {
            input: { param: { synonymSetName: string } }
            output: SynonymItemSchema[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/synonym_sets/:synonymSetName/items/:itemId': {
      $get:
        | {
            input: { param: { synonymSetName: string; itemId: string } }
            output: SynonymItemSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string; itemId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { synonymSetName: string; itemId: string } } & {
              json: SynonymItemUpsertSchema
            }
            output: SynonymItemSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string; itemId: string } } & {
              json: SynonymItemUpsertSchema
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { synonymSetName: string; itemId: string } }
            output: SynonymItemDeleteSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { synonymSetName: string; itemId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/curation_sets': {
      $get: { input: {}; output: CurationSetSchema[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/curation_sets/:curationSetName': {
      $get:
        | {
            input: { param: { curationSetName: string } }
            output: CurationSetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { curationSetName: string } } & { json: CurationSetCreateSchema }
            output: CurationSetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string } } & { json: CurationSetCreateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { curationSetName: string } }
            output: CurationSetDeleteSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/curation_sets/:curationSetName/items': {
      $get:
        | {
            input: { param: { curationSetName: string } }
            output: CurationItemSchema[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/curation_sets/:curationSetName/items/:itemId': {
      $get:
        | {
            input: { param: { curationSetName: string; itemId: string } }
            output: CurationItemSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string; itemId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { curationSetName: string; itemId: string } } & {
              json: CurationItemCreateSchema
            }
            output: CurationItemSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string; itemId: string } } & {
              json: CurationItemCreateSchema
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { curationSetName: string; itemId: string } }
            output: CurationItemDeleteSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { curationSetName: string; itemId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collections/:collectionName/documents/export': {
      $get:
        | {
            input: { param: { collectionName: string } } & {
              query: {
                exportDocumentsParameters?:
                  | {
                      filter_by?: string | undefined
                      include_fields?: string | undefined
                      exclude_fields?: string | undefined
                    }
                  | undefined
              }
            }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { collectionName: string } } & {
              query: {
                exportDocumentsParameters?:
                  | {
                      filter_by?: string | undefined
                      include_fields?: string | undefined
                      exclude_fields?: string | undefined
                    }
                  | undefined
              }
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collections/:collectionName/documents/import': {
      $post:
        | {
            input: { param: { collectionName: string } } & {
              query: {
                importDocumentsParameters?:
                  | {
                      batch_size?: number | undefined
                      return_id?: boolean | undefined
                      remote_embedding_batch_size?: number | undefined
                      return_doc?: boolean | undefined
                      action?: IndexAction | undefined
                      dirty_values?: DirtyValues | undefined
                    }
                  | undefined
              }
            } & { json: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { param: { collectionName: string } } & {
              query: {
                importDocumentsParameters?:
                  | {
                      batch_size?: number | undefined
                      return_id?: boolean | undefined
                      remote_embedding_batch_size?: number | undefined
                      return_doc?: boolean | undefined
                      action?: IndexAction | undefined
                      dirty_values?: DirtyValues | undefined
                    }
                  | undefined
              }
            } & { json: string }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { collectionName: string } } & {
              query: {
                importDocumentsParameters?:
                  | {
                      batch_size?: number | undefined
                      return_id?: boolean | undefined
                      remote_embedding_batch_size?: number | undefined
                      return_doc?: boolean | undefined
                      action?: IndexAction | undefined
                      dirty_values?: DirtyValues | undefined
                    }
                  | undefined
              }
            } & { json: string }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/collections/:collectionName/documents/:documentId': {
      $get:
        | {
            input: { param: { collectionName: string; documentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string; documentId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $patch:
        | {
            input: { param: { collectionName: string; documentId: string } } & {
              query: { dirty_values?: DirtyValues | undefined }
            } & { json: { [x: string]: unknown } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string; documentId: string } } & {
              query: { dirty_values?: DirtyValues | undefined }
            } & { json: { [x: string]: unknown } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { collectionName: string; documentId: string } }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { collectionName: string; documentId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/conversations/models': {
      $get: { input: {}; output: ConversationModelSchema[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: ConversationModelCreateSchema }
            output: ConversationModelSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: ConversationModelCreateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/conversations/models/:modelId': {
      $get: {
        input: { param: { modelId: string } }
        output: ConversationModelSchema
        outputFormat: 'json'
        status: 200
      }
      $put: {
        input: { param: { modelId: string } } & { json: ConversationModelUpdateSchema }
        output: ConversationModelSchema
        outputFormat: 'json'
        status: 200
      }
      $delete: {
        input: { param: { modelId: string } }
        output: ConversationModelSchema
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/keys': {
      $get: { input: {}; output: ApiKeysResponse; outputFormat: 'json'; status: 200 }
      $post:
        | { input: { json: ApiKeySchema }; output: ApiKey; outputFormat: 'json'; status: 201 }
        | { input: { json: ApiKeySchema }; output: ApiResponse; outputFormat: 'json'; status: 400 }
        | { input: { json: ApiKeySchema }; output: ApiResponse; outputFormat: 'json'; status: 409 }
    }
  } & {
    '/keys/:keyId': {
      $get:
        | { input: { param: { keyId: bigint } }; output: ApiKey; outputFormat: 'json'; status: 200 }
        | {
            input: { param: { keyId: bigint } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { keyId: bigint } }
            output: ApiKeyDeleteResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { keyId: bigint } }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { keyId: bigint } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/aliases': {
      $get: { input: {}; output: CollectionAliasesResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/aliases/:aliasName': {
      $put:
        | {
            input: { param: { aliasName: string } } & { json: CollectionAliasSchema }
            output: CollectionAlias
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasName: string } } & { json: CollectionAliasSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { aliasName: string } } & { json: CollectionAliasSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $get:
        | {
            input: { param: { aliasName: string } }
            output: CollectionAlias
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { aliasName: string } }
            output: CollectionAlias
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { aliasName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/debug': {
      $get: {
        input: {}
        output: { version?: string | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/health': { $get: { input: {}; output: HealthStatus; outputFormat: 'json'; status: 200 } }
  } & {
    '/operations/schema_changes': {
      $get: { input: {}; output: SchemaChangeStatus[]; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/operations/snapshot': {
      $post: {
        input: { query: { snapshot_path: string } }
        output: SuccessStatus
        outputFormat: 'json'
        status: 201
      }
    }
  } & {
    '/operations/vote': {
      $post: { input: {}; output: SuccessStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/operations/cache/clear': {
      $post: { input: {}; output: SuccessStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/operations/db/compact': {
      $post: { input: {}; output: SuccessStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/config': {
      $post: {
        input: { json: { 'log-slow-requests-time-ms': number } }
        output: SuccessStatus
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/multi_search': {
      $post:
        | {
            input: { query: { multiSearchParameters: MultiSearchParameters } } & {
              json: MultiSearchSearchesParameter
            }
            output: MultiSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { multiSearchParameters: MultiSearchParameters } } & {
              json: MultiSearchSearchesParameter
            }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/analytics/events': {
      $post:
        | {
            input: { json: AnalyticsEvent }
            output: AnalyticsEventCreateResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnalyticsEvent }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { query: { user_id: string; name: string; n: number } }
            output: AnalyticsEventsResponse
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { user_id: string; name: string; n: number } }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/analytics/flush': {
      $post: { input: {}; output: AnalyticsEventCreateResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/analytics/status': {
      $get: { input: {}; output: AnalyticsStatus; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/analytics/rules': {
      $post:
        | {
            input: { json: AnalyticsRuleCreate | AnalyticsRuleCreate[] }
            output: AnalyticsRule | (AnalyticsRule | { error?: string | undefined })[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: AnalyticsRuleCreate | AnalyticsRuleCreate[] }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $get: {
        input: { query: { rule_tag?: string | undefined } }
        output: AnalyticsRule[]
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/analytics/rules/:ruleName': {
      $put:
        | {
            input: { param: { ruleName: string } } & { json: AnalyticsRuleUpdate }
            output: AnalyticsRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleName: string } } & { json: AnalyticsRuleUpdate }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { ruleName: string } }
            output: AnalyticsRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { ruleName: string } }
            output: AnalyticsRule
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { ruleName: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/metrics.json': {
      $get: { input: {}; output: { [x: string]: unknown }; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/stats.json': {
      $get: { input: {}; output: APIStatsResponse; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/stopwords': {
      $get: { input: {}; output: StopwordsSetsRetrieveAllSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/stopwords/:setId': {
      $put:
        | {
            input: { param: { setId: string } } & { json: StopwordsSetUpsertSchema }
            output: StopwordsSetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { setId: string } } & { json: StopwordsSetUpsertSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $get:
        | {
            input: { param: { setId: string } }
            output: StopwordsSetRetrieveSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { setId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { setId: string } }
            output: { id: string }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { setId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/presets': {
      $get: { input: {}; output: PresetsRetrieveSchema; outputFormat: 'json'; status: 200 }
    }
  } & {
    '/presets/:presetId': {
      $get:
        | {
            input: { param: { presetId: string } }
            output: PresetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { presetId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { presetId: string } } & { json: PresetUpsertSchema }
            output: PresetSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { presetId: string } } & { json: PresetUpsertSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
      $delete:
        | {
            input: { param: { presetId: string } }
            output: PresetDeleteSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { presetId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/stemming/dictionaries': {
      $get: {
        input: {}
        output: { dictionaries?: string[] | undefined }
        outputFormat: 'json'
        status: 200
      }
    }
  } & {
    '/stemming/dictionaries/:dictionaryId': {
      $get:
        | {
            input: { param: { dictionaryId: string } }
            output: StemmingDictionary
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { dictionaryId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/stemming/dictionaries/import': {
      $post:
        | {
            input: { query: { id: string } } & { json: string }
            output: string
            outputFormat: 'text'
            status: 200
          }
        | {
            input: { query: { id: string } } & { json: string }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/nl_search_models': {
      $get: { input: {}; output: NLSearchModelSchema[]; outputFormat: 'json'; status: 200 }
      $post:
        | {
            input: { json: NLSearchModelCreateSchema }
            output: NLSearchModelSchema
            outputFormat: 'json'
            status: 201
          }
        | {
            input: { json: NLSearchModelCreateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
    }
  } & {
    '/nl_search_models/:modelId': {
      $get:
        | {
            input: { param: { modelId: string } }
            output: NLSearchModelSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { modelId: string } } & { json: NLSearchModelCreateSchema }
            output: NLSearchModelSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } } & { json: NLSearchModelCreateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 400
          }
        | {
            input: { param: { modelId: string } } & { json: NLSearchModelCreateSchema }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { modelId: string } }
            output: NLSearchModelDeleteSchema
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { modelId: string } }
            output: ApiResponse
            outputFormat: 'json'
            status: 404
          }
    }
  },
  '/'
>
export default routes
