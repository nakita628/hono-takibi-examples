type Status = 'enqueued' | 'processing' | 'succeeded' | 'failed' | 'canceled'
type U32 = number
type ProgressStepView = { currentStep: string; finished: number; total: number }
type ProgressView = { steps: ProgressStepView[]; percentage: number }
type IndexSwap = { indexes: unknown[] }
type DetailsView = {
  receivedDocuments?: (number | null) | undefined
  indexedDocuments?: (number | null) | undefined
  editedDocuments?: (number | null) | undefined
  primaryKey?: (string | null) | undefined
  providedIds?: (number | null) | undefined
  deletedDocuments?: (number | null) | undefined
  matchedTasks?: (number | null) | undefined
  canceledTasks?: (number | null) | undefined
  deletedTasks?: (number | null) | undefined
  originalFilter?: (string | null) | undefined
  dumpUid?: (string | null) | undefined
  context?: ({ [x: string]: unknown } | null) | undefined
  function?: (string | null) | undefined
  swaps?: (IndexSwap[] | null) | undefined
  upgradeFrom?: (string | null) | undefined
  upgradeTo?: (string | null) | undefined
}
type BatchStats = {
  totalNbTasks: U32
  status: { [x: string]: number }
  types: { [x: string]: number }
  indexUids: { [x: string]: number }
  progressTrace?: { [x: string]: { [x: string]: unknown } } | undefined
  writeChannelCongestion?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  internalDatabaseSizes?: { [x: string]: { [x: string]: unknown } } | undefined
}
type BatchView = {
  uid: U32
  progress?: ({ [x: string]: unknown } | null) | ProgressView | undefined
  details: DetailsView
  stats: BatchStats
  duration?: (string | null) | undefined
  startedAt?: string | undefined
  finishedAt?: (string | null) | undefined
  batchStrategy?: string | undefined
}
type AllBatches = {
  results: BatchView[]
  total: number
  limit: number
  from?: (number | null) | undefined
  next?: (number | null) | undefined
}
type Code =
  | 'api_key_already_exists'
  | 'api_key_not_found'
  | 'bad_parameter'
  | 'bad_request'
  | 'database_size_limit_reached'
  | 'document_not_found'
  | 'dump_already_processing'
  | 'dump_not_found'
  | 'dump_process_failed'
  | 'duplicate_index_found'
  | 'immutable_api_key_actions'
  | 'immutable_api_key_created_at'
  | 'immutable_api_key_expires_at'
  | 'immutable_api_key_indexes'
  | 'immutable_api_key_key'
  | 'immutable_api_key_uid'
  | 'immutable_api_key_updated_at'
  | 'immutable_index_created_at'
  | 'immutable_index_uid'
  | 'immutable_index_updated_at'
  | 'index_already_exists'
  | 'index_creation_failed'
  | 'index_not_found'
  | 'index_primary_key_already_exists'
  | 'index_primary_key_multiple_candidates_found'
  | 'index_primary_key_no_candidate_found'
  | 'internal'
  | 'invalid_api_key'
  | 'invalid_api_key_actions'
  | 'invalid_api_key_description'
  | 'invalid_api_key_expires_at'
  | 'invalid_api_key_indexes'
  | 'invalid_api_key_limit'
  | 'invalid_api_key_name'
  | 'invalid_api_key_offset'
  | 'invalid_api_key_uid'
  | 'invalid_content_type'
  | 'invalid_document_csv_delimiter'
  | 'invalid_document_fields'
  | 'invalid_document_retrieve_vectors'
  | 'missing_document_filter'
  | 'missing_document_edition_function'
  | 'invalid_document_filter'
  | 'invalid_document_geo_field'
  | 'invalid_vector_dimensions'
  | 'invalid_vectors_type'
  | 'invalid_document_id'
  | 'invalid_document_ids'
  | 'invalid_document_limit'
  | 'invalid_document_offset'
  | 'invalid_search_embedder'
  | 'invalid_similar_embedder'
  | 'invalid_search_hybrid_query'
  | 'invalid_index_limit'
  | 'invalid_index_offset'
  | 'invalid_index_primary_key'
  | 'invalid_index_uid'
  | 'invalid_multi_search_facets'
  | 'invalid_multi_search_facets_by_index'
  | 'invalid_multi_search_facet_order'
  | 'invalid_multi_search_federated'
  | 'invalid_multi_search_federation_options'
  | 'invalid_multi_search_max_values_per_facet'
  | 'invalid_multi_search_merge_facets'
  | 'invalid_multi_search_query_facets'
  | 'invalid_multi_search_query_pagination'
  | 'invalid_multi_search_query_ranking_rules'
  | 'invalid_multi_search_query_position'
  | 'invalid_multi_search_remote'
  | 'invalid_multi_search_weight'
  | 'invalid_network_remotes'
  | 'invalid_network_self'
  | 'invalid_network_search_api_key'
  | 'invalid_network_url'
  | 'invalid_search_attributes_to_search_on'
  | 'invalid_search_attributes_to_crop'
  | 'invalid_search_attributes_to_highlight'
  | 'invalid_similar_attributes_to_retrieve'
  | 'invalid_similar_retrieve_vectors'
  | 'invalid_search_attributes_to_retrieve'
  | 'invalid_search_ranking_score_threshold'
  | 'invalid_similar_ranking_score_threshold'
  | 'invalid_search_retrieve_vectors'
  | 'invalid_search_crop_length'
  | 'invalid_search_crop_marker'
  | 'invalid_search_facets'
  | 'invalid_search_semantic_ratio'
  | 'invalid_search_locales'
  | 'invalid_facet_search_exhaustive_facet_count'
  | 'invalid_facet_search_facet_name'
  | 'invalid_similar_id'
  | 'invalid_search_filter'
  | 'invalid_similar_filter'
  | 'invalid_search_highlight_post_tag'
  | 'invalid_search_highlight_pre_tag'
  | 'invalid_search_hits_per_page'
  | 'invalid_similar_limit'
  | 'invalid_search_limit'
  | 'invalid_search_matching_strategy'
  | 'invalid_similar_offset'
  | 'invalid_search_offset'
  | 'invalid_search_page'
  | 'invalid_search_q'
  | 'invalid_facet_search_query'
  | 'invalid_facet_search_name'
  | 'facet_search_disabled'
  | 'invalid_search_vector'
  | 'invalid_search_show_matches_position'
  | 'invalid_search_show_ranking_score'
  | 'invalid_similar_show_ranking_score'
  | 'invalid_search_show_ranking_score_details'
  | 'invalid_similar_show_ranking_score_details'
  | 'invalid_search_sort'
  | 'invalid_search_distinct'
  | 'invalid_settings_displayed_attributes'
  | 'invalid_settings_distinct_attribute'
  | 'invalid_settings_proximity_precision'
  | 'invalid_settings_facet_search'
  | 'invalid_settings_prefix_search'
  | 'invalid_settings_faceting'
  | 'invalid_settings_filterable_attributes'
  | 'invalid_settings_pagination'
  | 'invalid_settings_search_cutoff_ms'
  | 'invalid_settings_embedders'
  | 'invalid_settings_ranking_rules'
  | 'invalid_settings_searchable_attributes'
  | 'invalid_settings_sortable_attributes'
  | 'invalid_settings_stop_words'
  | 'invalid_settings_non_separator_tokens'
  | 'invalid_settings_separator_tokens'
  | 'invalid_settings_dictionary'
  | 'invalid_settings_synonyms'
  | 'invalid_settings_typo_tolerance'
  | 'invalid_settings_localized_attributes'
  | 'invalid_state'
  | 'invalid_store_file'
  | 'invalid_swap_duplicate_index_found'
  | 'invalid_swap_indexes'
  | 'invalid_task_after_enqueued_at'
  | 'invalid_task_after_finished_at'
  | 'invalid_task_after_started_at'
  | 'invalid_task_before_enqueued_at'
  | 'invalid_task_before_finished_at'
  | 'invalid_task_before_started_at'
  | 'invalid_task_canceled_by'
  | 'invalid_task_from'
  | 'invalid_task_limit'
  | 'invalid_task_reverse'
  | 'invalid_task_statuses'
  | 'invalid_task_types'
  | 'invalid_task_uids'
  | 'invalid_batch_uids'
  | 'io_error'
  | 'feature_not_enabled'
  | 'malformed_payload'
  | 'max_fields_limit_exceeded'
  | 'missing_api_key_actions'
  | 'missing_api_key_expires_at'
  | 'missing_api_key_indexes'
  | 'missing_authorization_header'
  | 'missing_content_type'
  | 'missing_document_id'
  | 'missing_facet_search_facet_name'
  | 'missing_index_uid'
  | 'missing_master_key'
  | 'missing_network_url'
  | 'missing_payload'
  | 'missing_search_hybrid'
  | 'missing_swap_indexes'
  | 'missing_task_filters'
  | 'no_space_left_on_device'
  | 'payload_too_large'
  | 'remote_bad_response'
  | 'remote_bad_request'
  | 'remote_could_not_send_request'
  | 'remote_invalid_api_key'
  | 'remote_remote_error'
  | 'remote_timeout'
  | 'too_many_search_requests'
  | 'task_not_found'
  | 'task_file_not_found'
  | 'batch_not_found'
  | 'too_many_open_files'
  | 'too_many_vectors'
  | 'unretrievable_document'
  | 'unretrievable_error_code'
  | 'unsupported_media_type'
  | 'vector_embedding_error'
  | 'not_found_similar_id'
  | 'invalid_document_edition_context'
  | 'invalid_document_edition_function_filter'
  | 'edit_documents_by_function_error'
  | 'invalid_settings_index_chat'
  | 'unimplemented_external_function_calling'
  | 'unimplemented_non_streaming_chat_completions'
  | 'unimplemented_multi_choice_chat_completions'
  | 'chat_not_found'
  | 'invalid_chat_setting_document_template'
  | 'invalid_chat_completion_org_id'
  | 'invalid_chat_completion_project_id'
  | 'invalid_chat_completion_api_version'
  | 'invalid_chat_completion_deployment_id'
  | 'invalid_chat_completion_source'
  | 'invalid_chat_completion_base_api'
  | 'invalid_chat_completion_api_key'
  | 'invalid_chat_completion_prompts'
  | 'invalid_chat_completion_system_prompt'
  | 'invalid_chat_completion_search_description_prompt'
  | 'invalid_chat_completion_search_query_param_prompt'
  | 'invalid_chat_completion_search_index_uid_param_prompt'
  | 'invalid_chat_completion_pre_query_prompt'
type ErrorType = 'internal' | 'invalid_request' | 'auth' | 'system'
type ResponseError = { message: string; code: Code; type: ErrorType; link: string }
type Kind =
  | 'documentAdditionOrUpdate'
  | 'documentEdition'
  | 'documentDeletion'
  | 'settingsUpdate'
  | 'indexCreation'
  | 'indexDeletion'
  | 'indexUpdate'
  | 'indexSwap'
  | 'taskCancelation'
  | 'taskDeletion'
  | 'dumpCreation'
  | 'snapshotCreation'
  | 'upgradeDatabase'
type SummarizedTaskView = {
  taskUid: number
  indexUid?: (string | null) | undefined
  status: Status
  type: Kind
  enqueuedAt: string
}
type RuntimeTogglableFeatures = {
  metrics?: (boolean | null) | undefined
  logsRoute?: (boolean | null) | undefined
  editDocumentsByFunction?: (boolean | null) | undefined
  containsFilter?: (boolean | null) | undefined
  network?: (boolean | null) | undefined
  getTaskDocumentsRoute?: (boolean | null) | undefined
  compositeEmbedders?: (boolean | null) | undefined
  chatCompletions?: (boolean | null) | undefined
}
type HealthStatus = 'available'
type HealthResponse = { status: HealthStatus }
type PaginationViewIndexView = {
  results: {
    uid: string
    createdAt: string
    updatedAt: string
    primaryKey?: (string | null) | undefined
  }[]
  offset: number
  limit: number
  total: number
}
type IndexUid = string
type IndexCreateRequest = { uid: IndexUid; primaryKey?: (string | null) | undefined }
type IndexView = {
  uid: string
  createdAt: string
  updatedAt: string
  primaryKey?: (string | null) | undefined
}
type UpdateIndexRequest = { primaryKey?: (string | null) | undefined }
type PaginationViewValue = {
  results: { [x: string]: unknown }[]
  offset: number
  limit: number
  total: number
}
type DocumentDeletionByFilter = { filter: { [x: string]: unknown } }
type DocumentEditionByFunction = {
  filter?: { [x: string]: unknown } | undefined
  context?: { [x: string]: unknown } | undefined
  function: string
}
type BrowseQuery = {
  offset: number
  limit: number
  fields?: (string[] | null) | undefined
  retrieveVectors: boolean
  ids?: (string[] | null) | undefined
  filter?: { [x: string]: unknown } | undefined
}
type HybridQuery = { semanticRatio?: number | undefined; embedder: string }
type MatchingStrategy = 'last' | 'all' | 'frequency'
type RankingScoreThreshold = number
type Locale =
  | 'af'
  | 'ak'
  | 'am'
  | 'ar'
  | 'az'
  | 'be'
  | 'bn'
  | 'bg'
  | 'ca'
  | 'cs'
  | 'da'
  | 'de'
  | 'el'
  | 'en'
  | 'eo'
  | 'et'
  | 'fi'
  | 'fr'
  | 'gu'
  | 'he'
  | 'hi'
  | 'hr'
  | 'hu'
  | 'hy'
  | 'id'
  | 'it'
  | 'jv'
  | 'ja'
  | 'kn'
  | 'ka'
  | 'km'
  | 'ko'
  | 'la'
  | 'lv'
  | 'lt'
  | 'ml'
  | 'mr'
  | 'mk'
  | 'my'
  | 'ne'
  | 'nl'
  | 'nb'
  | 'or'
  | 'pa'
  | 'fa'
  | 'pl'
  | 'pt'
  | 'ro'
  | 'ru'
  | 'si'
  | 'sk'
  | 'sl'
  | 'sn'
  | 'es'
  | 'sr'
  | 'sv'
  | 'ta'
  | 'te'
  | 'tl'
  | 'th'
  | 'tk'
  | 'tr'
  | 'uk'
  | 'ur'
  | 'uz'
  | 'vi'
  | 'yi'
  | 'zh'
  | 'zu'
  | 'afr'
  | 'aka'
  | 'amh'
  | 'ara'
  | 'aze'
  | 'bel'
  | 'ben'
  | 'bul'
  | 'cat'
  | 'ces'
  | 'dan'
  | 'deu'
  | 'ell'
  | 'eng'
  | 'epo'
  | 'est'
  | 'fin'
  | 'fra'
  | 'guj'
  | 'heb'
  | 'hin'
  | 'hrv'
  | 'hun'
  | 'hye'
  | 'ind'
  | 'ita'
  | 'jav'
  | 'jpn'
  | 'kan'
  | 'kat'
  | 'khm'
  | 'kor'
  | 'lat'
  | 'lav'
  | 'lit'
  | 'mal'
  | 'mar'
  | 'mkd'
  | 'mya'
  | 'nep'
  | 'nld'
  | 'nob'
  | 'ori'
  | 'pan'
  | 'pes'
  | 'pol'
  | 'por'
  | 'ron'
  | 'rus'
  | 'sin'
  | 'slk'
  | 'slv'
  | 'sna'
  | 'spa'
  | 'srp'
  | 'swe'
  | 'tam'
  | 'tel'
  | 'tgl'
  | 'tha'
  | 'tuk'
  | 'tur'
  | 'ukr'
  | 'urd'
  | 'uzb'
  | 'vie'
  | 'yid'
  | 'zho'
  | 'zul'
  | 'cmn'
type FacetSearchQuery = {
  facet_query?: (string | null) | undefined
  facet_name: string
  q?: (string | null) | undefined
  vector?: (number[] | null) | undefined
  hybrid?: ({ [x: string]: unknown } | null) | HybridQuery | undefined
  filter?: { [x: string]: unknown } | undefined
  matching_strategy: MatchingStrategy
  attributes_to_search_on?: (string[] | null) | undefined
  ranking_score_threshold?: ({ [x: string]: unknown } | null) | RankingScoreThreshold | undefined
  locales?: (Locale[] | null) | undefined
  exhaustive_facet_count?: (boolean | null) | undefined
}
type BTreeMap = {
  [x: string]: { start: number; length: number; indices?: (number[] | null) | undefined }[]
}
type SearchHit = {
  _formatted?: { [x: string]: unknown } | undefined
  _matchesPosition?: ({ [x: string]: unknown } | null) | BTreeMap | undefined
  _rankingScore?: (number | null) | undefined
  _rankingScoreDetails?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
}
type FacetStats = { min: number; max: number }
type SearchResult = {
  hits: SearchHit[]
  query: string
  processingTimeMs: number
  facetDistribution?: ({ [x: string]: { [x: string]: unknown } } | null) | undefined
  facetStats?: ({ [x: string]: FacetStats } | null) | undefined
  semanticHitCount?: (number | null) | undefined
}
type SearchQuery = {
  q?: (string | null) | undefined
  vector?: (number[] | null) | undefined
  hybrid?: ({ [x: string]: unknown } | null) | HybridQuery | undefined
  offset: number
  limit: number
  page?: (number | null) | undefined
  hits_per_page?: (number | null) | undefined
  attributes_to_retrieve?: (string[] | null) | undefined
  retrieve_vectors: boolean
  attributes_to_crop?: (string[] | null) | undefined
  crop_length: number
  attributes_to_highlight?: (string[] | null) | undefined
  show_matches_position: boolean
  show_ranking_score: boolean
  show_ranking_score_details: boolean
  filter?: { [x: string]: unknown } | undefined
  sort?: (string[] | null) | undefined
  distinct?: (string | null) | undefined
  facets?: (string[] | null) | undefined
  highlight_pre_tag: string
  highlight_post_tag: string
  crop_marker: string
  matching_strategy: MatchingStrategy
  attributes_to_search_on?: (string[] | null) | undefined
  ranking_score_threshold?: ({ [x: string]: unknown } | null) | RankingScoreThreshold | undefined
  locales?: (Locale[] | null) | undefined
}
type AttributePatterns = { patterns: string[] }
type FilterFeatures = { equality?: boolean | undefined; comparison?: boolean | undefined }
type FilterableAttributesFeatures = {
  facetSearch?: boolean | undefined
  filter?: FilterFeatures | undefined
}
type FilterableAttributesPatterns = {
  attributePatterns: AttributePatterns
  features?: FilterableAttributesFeatures | undefined
}
type FilterableAttributesRule = string | FilterableAttributesPatterns
type MinWordSizeTyposSetting = {
  oneTypo?: (number | null) | undefined
  twoTypos?: (number | null) | undefined
}
type TypoSettings = {
  enabled?: (boolean | null) | undefined
  minWordSizeForTypos?: ({ [x: string]: unknown } | null) | MinWordSizeTyposSetting | undefined
  disableOnWords?: (string[] | null) | undefined
  disableOnAttributes?: (string[] | null) | undefined
  disableOnNumbers?: (boolean | null) | undefined
}
type FacetValuesSort = 'alpha' | 'count'
type FacetingSettings = {
  maxValuesPerFacet?: (number | null) | undefined
  sortFacetValuesBy?: ({ [x: string]: FacetValuesSort } | null) | undefined
}
type PaginationSettings = { maxTotalHits?: (number | null) | undefined }
type EmbedderSource = 'openAi' | 'huggingFace' | 'ollama' | 'userProvided' | 'rest' | 'composite'
type OverridePooling = 'useModel' | 'forceCls' | 'forceMean'
type SubEmbeddingSettings = {
  source?: ({ [x: string]: unknown } | null) | EmbedderSource | undefined
  model?: (string | null) | undefined
  revision?: (string | null) | undefined
  pooling?: ({ [x: string]: unknown } | null) | OverridePooling | undefined
  apiKey?: (string | null) | undefined
  dimensions?: (string | null) | undefined
  documentTemplate?: (boolean | null) | undefined
  documentTemplateMaxBytes?: (number | null) | undefined
  url?: (string | null) | undefined
  request?: { [x: string]: unknown } | undefined
  response?: { [x: string]: unknown } | undefined
  headers?: ({ [x: string]: string } | null) | undefined
}
type DistributionShift = { current_mean: number; current_sigma: number }
type SettingEmbeddingSettings = {
  inner?:
    | ({ [x: string]: unknown } | null)
    | {
        source?: ({ [x: string]: unknown } | null) | EmbedderSource | undefined
        model?: (string | null) | undefined
        revision?: (string | null) | undefined
        pooling?: ({ [x: string]: unknown } | null) | OverridePooling | undefined
        apiKey?: (string | null) | undefined
        dimensions?: (string | null) | undefined
        binaryQuantized?: (boolean | null) | undefined
        documentTemplate?: (boolean | null) | undefined
        documentTemplateMaxBytes?: (number | null) | undefined
        url?: (string | null) | undefined
        request?: { [x: string]: unknown } | undefined
        response?: { [x: string]: unknown } | undefined
        headers?: ({ [x: string]: string } | null) | undefined
        searchEmbedder?: ({ [x: string]: unknown } | null) | SubEmbeddingSettings | undefined
        indexingEmbedder?: ({ [x: string]: unknown } | null) | SubEmbeddingSettings | undefined
        distribution?: ({ [x: string]: unknown } | null) | DistributionShift | undefined
      }
    | undefined
}
type LocalizedAttributesRuleView = { attributePatterns: AttributePatterns; locales: Locale[] }
type PrefixSearchSettings = 'indexingTime' | 'disabled'
type ChatSearchParams = {
  hybrid?: ({ [x: string]: unknown } | null) | HybridQuery | undefined
  limit?: (number | null) | undefined
  sort?: (string[] | null) | undefined
  distinct?: (string | null) | undefined
  matchingStrategy?: ({ [x: string]: unknown } | null) | MatchingStrategy | undefined
  attributesToSearchOn?: (string[] | null) | undefined
  rankingScoreThreshold?: ({ [x: string]: unknown } | null) | RankingScoreThreshold | undefined
}
type ChatSettings = {
  description?: (string | null) | undefined
  documentTemplate?: (string | null) | undefined
  documentTemplateMaxBytes?: (number | null) | undefined
  searchParameters?: ({ [x: string]: unknown } | null) | ChatSearchParams | undefined
}
type SettingsUnchecked = {
  displayedAttributes?: (string[] | null) | undefined
  searchableAttributes?: (string[] | null) | undefined
  filterableAttributes?: (FilterableAttributesRule[] | null) | undefined
  sortableAttributes?: (string[] | null) | undefined
  rankingRules?: (string[] | null) | undefined
  stopWords?: (string[] | null) | undefined
  nonSeparatorTokens?: (string[] | null) | undefined
  separatorTokens?: (string[] | null) | undefined
  dictionary?: (string[] | null) | undefined
  synonyms?: ({ [x: string]: string[] } | null) | undefined
  distinctAttribute?: (string | null) | undefined
  proximityPrecision?: (string | null) | undefined
  typoTolerance?: ({ [x: string]: unknown } | null) | TypoSettings | undefined
  faceting?: ({ [x: string]: unknown } | null) | FacetingSettings | undefined
  pagination?: ({ [x: string]: unknown } | null) | PaginationSettings | undefined
  embedders?: ({ [x: string]: SettingEmbeddingSettings } | null) | undefined
  searchCutoffMs?: (number | null) | undefined
  localizedAttributes?: (LocalizedAttributesRuleView[] | null) | undefined
  facetSearch?: (boolean | null) | undefined
  prefixSearch?: ({ [x: string]: unknown } | null) | PrefixSearchSettings | undefined
  chat?: ({ [x: string]: unknown } | null) | ChatSettings | undefined
}
type ProximityPrecisionView = 'byWord' | 'byAttribute'
type RankingRuleView =
  | 'Words'
  | 'Typo'
  | 'Proximity'
  | 'Attribute'
  | 'Sort'
  | 'Exactness'
  | { Asc: string }
  | { Desc: string }
type SimilarResult = { hits: SearchHit[]; id: string; processingTimeMs: number }
type SimilarQuery = {
  id: string
  offset: number
  limit: number
  filter?: { [x: string]: unknown } | undefined
  embedder: string
  attributes_to_retrieve?: (string[] | null) | undefined
  retrieve_vectors: boolean
  show_ranking_score: boolean
  show_ranking_score_details: boolean
  ranking_score_threshold: number
}
type IndexStats = {
  numberOfDocuments: number
  rawDocumentDbSize: number
  avgDocumentSize: number
  isIndexing: boolean
  numberOfEmbeddings?: (number | null) | undefined
  numberOfEmbeddedDocuments?: (number | null) | undefined
  fieldDistribution: { [x: string]: number }
}
type Action =
  | '*'
  | 'search'
  | 'documents.*'
  | 'documents.add'
  | 'documents.get'
  | 'documents.delete'
  | 'indexes.*'
  | 'indexes.create'
  | 'indexes.get'
  | 'indexes.update'
  | 'indexes.delete'
  | 'indexes.swap'
  | 'tasks.*'
  | 'tasks.cancel'
  | 'tasks.delete'
  | 'tasks.get'
  | 'settings.*'
  | 'settings.get'
  | 'settings.update'
  | 'stats.*'
  | 'stats.get'
  | 'metrics.*'
  | 'metrics.get'
  | 'dumps.*'
  | 'dumps.create'
  | 'snapshots.*'
  | 'snapshots.create'
  | 'version'
  | 'keys.create'
  | 'keys.get'
  | 'keys.update'
  | 'keys.delete'
  | 'experimental.get'
  | 'experimental.update'
  | 'network.get'
  | 'network.update'
  | 'chatCompletions'
  | 'chats.*'
  | 'chats.get'
  | 'chats.delete'
  | 'chatsSettings.*'
  | 'chatsSettings.get'
  | 'chatsSettings.update'
type PaginationViewKeyView = {
  results: {
    name?: (string | null) | undefined
    description?: (string | null) | undefined
    key: string
    uid: string
    actions: Action[]
    indexes: string[]
    expiresAt?: (string | null) | undefined
    createdAt: string
    updatedAt: string
  }[]
  offset: number
  limit: number
  total: number
}
type CreateApiKey = {
  description?: (string | null) | undefined
  name?: (string | null) | undefined
  uid: string
  actions: Action[]
  indexes: string[]
  expiresAt?: (string | null) | undefined
}
type KeyView = {
  name?: (string | null) | undefined
  description?: (string | null) | undefined
  key: string
  uid: string
  actions: Action[]
  indexes: string[]
  expiresAt?: (string | null) | undefined
  createdAt: string
  updatedAt: string
}
type PatchApiKey = { description?: (string | null) | undefined; name?: (string | null) | undefined }
type UpdateStderrLogs = { target: string }
type LogMode = 'human' | 'json' | 'profile'
type GetLogs = { target: string; mode: LogMode; profileMemory: boolean }
type FederationOptions = {
  weight: number
  remote?: (string | null) | undefined
  queryPosition?: (number | null) | undefined
}
type SearchQueryWithIndex = {
  indexUid: IndexUid
  q?: (string | null) | undefined
  vector?: (number[] | null) | undefined
  hybrid?: ({ [x: string]: unknown } | null) | HybridQuery | undefined
  offset?: (number | null) | undefined
  limit?: (number | null) | undefined
  page?: (number | null) | undefined
  hitsPerPage?: (number | null) | undefined
  attributesToRetrieve?: (string[] | null) | undefined
  retrieveVectors: boolean
  attributesToCrop?: (string[] | null) | undefined
  cropLength: number
  attributesToHighlight?: (string[] | null) | undefined
  showRankingScore: boolean
  showRankingScoreDetails: boolean
  showMatchesPosition: boolean
  filter?: { [x: string]: unknown } | undefined
  sort?: (string[] | null) | undefined
  distinct?: (string | null) | undefined
  facets?: (string[] | null) | undefined
  highlightPreTag: string
  highlightPostTag: string
  cropMarker: string
  matchingStrategy: MatchingStrategy
  attributesToSearchOn?: (string[] | null) | undefined
  rankingScoreThreshold?: ({ [x: string]: unknown } | null) | RankingScoreThreshold | undefined
  locales?: (Locale[] | null) | undefined
  federationOptions?: ({ [x: string]: unknown } | null) | FederationOptions | undefined
}
type MergeFacets = { maxValuesPerFacet?: (number | null) | undefined }
type Federation = {
  limit: number
  offset: number
  facetsByIndex: { [x: string]: string[] | null }
  mergeFacets?: ({ [x: string]: unknown } | null) | MergeFacets | undefined
}
type FederatedSearch = {
  queries: SearchQueryWithIndex[]
  federation?: ({ [x: string]: unknown } | null) | Federation | undefined
}
type ComputedFacets = {
  distribution: { [x: string]: { [x: string]: number } }
  stats: { [x: string]: FacetStats }
}
type FederatedFacets = { [x: string]: ComputedFacets }
type FederatedSearchResult = {
  hits: SearchHit[]
  processingTimeMs: number
  semanticHitCount?: (number | null) | undefined
  facetDistribution?: ({ [x: string]: { [x: string]: number } } | null) | undefined
  facetStats?: ({ [x: string]: FacetStats } | null) | undefined
  facetsByIndex?: FederatedFacets | undefined
  remoteErrors?: ({ [x: string]: ResponseError } | null) | undefined
}
type Remote = { url?: (string | null) | undefined; searchApiKey?: (string | null) | undefined }
type Network = {
  remotes?: ({ [x: string]: Remote } | null) | undefined
  self?: (string | null) | undefined
}
type Stats = {
  databaseSize: number
  usedDatabaseSize: number
  lastUpdate?: (string | null) | undefined
  indexes: { [x: string]: IndexStats }
}
type SwapIndexesPayload = { indexes: IndexUid[] }
type TaskView = {
  uid: number
  batchUid?: (number | null) | undefined
  indexUid?: (string | null) | undefined
  status: Status
  type: Kind
  canceledBy?: (number | null) | undefined
  details?: ({ [x: string]: unknown } | null) | DetailsView | undefined
  error?: ({ [x: string]: unknown } | null) | ResponseError | undefined
  duration?: (string | null) | undefined
  enqueuedAt: string
  startedAt?: string | undefined
  finishedAt?: string | undefined
}
type AllTasks = {
  results: TaskView[]
  total: number
  limit: number
  from?: (number | null) | undefined
  next?: (number | null) | undefined
}
type VersionResponse = { commitSha: string; commitDate: string; pkgVersion: string }
declare const routes: import('@hono/zod-openapi').OpenAPIHono<
  import('hono/types').Env,
  {
    '/batches': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: number | undefined
                reverse?: boolean | undefined
                batchUids?: number | undefined
                uids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: string[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: AllBatches
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: number | undefined
                reverse?: boolean | undefined
                batchUids?: number | undefined
                uids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: string[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/batches/:batchUid': {
      $get:
        | {
            input: { param: { batchUid: string } }
            output: BatchView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { batchUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/dumps': {
      $post:
        | { input: {}; output: SummarizedTaskView; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/experimental-features': {
      $get:
        | { input: {}; output: RuntimeTogglableFeatures; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
      $patch:
        | { input: {}; output: RuntimeTogglableFeatures; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/health': { $get: { input: {}; output: HealthResponse; outputFormat: 'json'; status: 200 } }
  } & {
    '/indexes': {
      $get:
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: PaginationViewIndexView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { query: { offset?: number | undefined; limit?: number | undefined } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { json: IndexCreateRequest }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: IndexCreateRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: IndexView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { indexUid: string } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { indexUid: string } } & { json: UpdateIndexRequest }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { indexUid: string } } & { json: UpdateIndexRequest }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/delete-batch': {
      $post:
        | {
            input: { param: { indexUid: string } } & { json: { [x: string]: unknown }[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: { [x: string]: unknown }[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/documents': {
      $get:
        | {
            input: { param: { indexUid: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                fields?: string[] | undefined
                retrieveVectors?: boolean | undefined
                ids?: string[] | undefined
                filter?: string | undefined
              }
            }
            output: PaginationViewValue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                fields?: string[] | undefined
                retrieveVectors?: boolean | undefined
                ids?: string[] | undefined
                filter?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } } & {
              query: {
                offset?: number | undefined
                limit?: number | undefined
                fields?: string[] | undefined
                retrieveVectors?: boolean | undefined
                ids?: string[] | undefined
                filter?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
      $put:
        | {
            input: { param: { indexUid: string } } & {
              query: { primaryKey?: string | undefined; csvDelimiter: string }
            } & { json: { [x: string]: unknown } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              query: { primaryKey?: string | undefined; csvDelimiter: string }
            } & { json: { [x: string]: unknown } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | {
            input: { param: { indexUid: string } } & {
              query: { primaryKey?: string | undefined; csvDelimiter: string }
            } & { json: { [x: string]: unknown } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              query: { primaryKey?: string | undefined; csvDelimiter: string }
            } & { json: { [x: string]: unknown } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/documents/delete': {
      $post:
        | {
            input: { param: { indexUid: string } } & { json: DocumentDeletionByFilter }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { indexUid: string } } & { json: DocumentDeletionByFilter }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/documents/edit': {
      $post:
        | {
            input: { param: { indexUid: string } } & { json: DocumentEditionByFunction }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { param: { indexUid: string } } & { json: DocumentEditionByFunction }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/documents/fetch': {
      $post:
        | {
            input: { param: { indexUid: string } } & { json: BrowseQuery }
            output: PaginationViewValue
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: BrowseQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/documents/:documentId': {
      $get:
        | {
            input: { param: { indexUid: string; documentId: string } } & {
              query: { fields?: string[] | undefined; retrieveVectors?: boolean | undefined }
            }
            output: { [x: string]: unknown }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string; documentId: string } } & {
              query: { fields?: string[] | undefined; retrieveVectors?: boolean | undefined }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string; documentId: string } } & {
              query: { fields?: string[] | undefined; retrieveVectors?: boolean | undefined }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
      $delete:
        | {
            input: { param: { indexUid: string; documentId: string } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string; documentId: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/facet-search': {
      $post:
        | {
            input: { param: { indexUid: string } } & { json: FacetSearchQuery }
            output: SearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: FacetSearchQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } } & { json: FacetSearchQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/indexes/:indexUid/search': {
      $get:
        | {
            input: { param: { indexUid: string } } & {
              query: {
                q?: string | undefined
                vector: number[]
                offset: number
                limit: number
                page?: number | undefined
                hitsPerPage?: number | undefined
                attributesToRetrieve: string[]
                retrieveVectors: boolean
                attributesToCrop: string[]
                cropLength: number
                attributesToHighlight: string[]
                filter?: string | undefined
                sort?: string | undefined
                distinct?: string | undefined
                showMatchesPosition: boolean
                showRankingScore: boolean
                showRankingScoreDetails: boolean
                facets: string[]
                highlightPreTag: string
                highlightPostTag: string
                cropMarker: string
                matchingStrategy: MatchingStrategy
                attributesToSearchOn: string[]
                hybridEmbedder?: string | undefined
                hybridSemanticRatio: number
                rankingScoreThreshold: number
                locales: Locale[]
              }
            }
            output: SearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              query: {
                q?: string | undefined
                vector: number[]
                offset: number
                limit: number
                page?: number | undefined
                hitsPerPage?: number | undefined
                attributesToRetrieve: string[]
                retrieveVectors: boolean
                attributesToCrop: string[]
                cropLength: number
                attributesToHighlight: string[]
                filter?: string | undefined
                sort?: string | undefined
                distinct?: string | undefined
                showMatchesPosition: boolean
                showRankingScore: boolean
                showRankingScoreDetails: boolean
                facets: string[]
                highlightPreTag: string
                highlightPostTag: string
                cropMarker: string
                matchingStrategy: MatchingStrategy
                attributesToSearchOn: string[]
                hybridEmbedder?: string | undefined
                hybridSemanticRatio: number
                rankingScoreThreshold: number
                locales: Locale[]
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } } & {
              query: {
                q?: string | undefined
                vector: number[]
                offset: number
                limit: number
                page?: number | undefined
                hitsPerPage?: number | undefined
                attributesToRetrieve: string[]
                retrieveVectors: boolean
                attributesToCrop: string[]
                cropLength: number
                attributesToHighlight: string[]
                filter?: string | undefined
                sort?: string | undefined
                distinct?: string | undefined
                showMatchesPosition: boolean
                showRankingScore: boolean
                showRankingScoreDetails: boolean
                facets: string[]
                highlightPreTag: string
                highlightPostTag: string
                cropMarker: string
                matchingStrategy: MatchingStrategy
                attributesToSearchOn: string[]
                hybridEmbedder?: string | undefined
                hybridSemanticRatio: number
                rankingScoreThreshold: number
                locales: Locale[]
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { indexUid: string } } & { json: SearchQuery }
            output: SearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: SearchQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } } & { json: SearchQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/indexes/:indexUid/settings': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: SettingsUnchecked
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { indexUid: string } } & { json: SettingsUnchecked }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: SettingsUnchecked }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/chat': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: ChatSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: ChatSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: ChatSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: ChatSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: ChatSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/dictionary': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/displayed-attributes': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/distinct-attribute': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/embedders': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: { [x: string]: SettingEmbeddingSettings }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & {
              json: { [x: string]: SettingEmbeddingSettings }
            }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              json: { [x: string]: SettingEmbeddingSettings }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { indexUid: string } } & {
              json: { [x: string]: SettingEmbeddingSettings }
            }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              json: { [x: string]: SettingEmbeddingSettings }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/facet-search': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: boolean
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: boolean }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: boolean }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: boolean }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: boolean }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/faceting': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: FacetingSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: FacetingSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: FacetingSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { indexUid: string } } & { json: FacetingSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: FacetingSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/filterable-attributes': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: FilterableAttributesRule[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: FilterableAttributesRule[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: FilterableAttributesRule[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: FilterableAttributesRule[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: FilterableAttributesRule[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/localized-attributes': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: LocalizedAttributesRuleView[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: LocalizedAttributesRuleView[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: LocalizedAttributesRuleView[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: LocalizedAttributesRuleView[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: LocalizedAttributesRuleView[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/non-separator-tokens': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/pagination': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: PaginationSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: PaginationSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: PaginationSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { indexUid: string } } & { json: PaginationSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: PaginationSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/prefix-search': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: PrefixSearchSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: PrefixSearchSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: PrefixSearchSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: PrefixSearchSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: PrefixSearchSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/proximity-precision': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: ProximityPrecisionView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: ProximityPrecisionView }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: ProximityPrecisionView }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: ProximityPrecisionView }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: ProximityPrecisionView }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/ranking-rules': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: RankingRuleView[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: RankingRuleView[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: RankingRuleView[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: RankingRuleView[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: RankingRuleView[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/search-cutoff-ms': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: number
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: number }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: number }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: number }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: number }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/searchable-attributes': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/separator-tokens': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/sortable-attributes': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/stop-words': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: string[]
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: string[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/synonyms': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: { [x: string]: string[] }
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $put:
        | {
            input: { param: { indexUid: string } } & { json: { [x: string]: string[] } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: { [x: string]: string[] } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: { [x: string]: string[] } }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: { [x: string]: string[] } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/settings/typo-tolerance': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: TypoSettings
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: { param: { indexUid: string } } & { json: TypoSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: TypoSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { indexUid: string } } & { json: TypoSettings }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: TypoSettings }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/indexes/:indexUid/similar': {
      $get:
        | {
            input: { param: { indexUid: string } } & {
              query: {
                id: string
                offset: number
                limit: number
                attributes_to_retrieve: string[]
                retrieve_vectors: boolean
                filter?: string | undefined
                show_ranking_score: boolean
                show_ranking_score_details: boolean
                ranking_score_threshold?: number | undefined
                embedder: string
              }
            }
            output: SimilarResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & {
              query: {
                id: string
                offset: number
                limit: number
                attributes_to_retrieve: string[]
                retrieve_vectors: boolean
                filter?: string | undefined
                show_ranking_score: boolean
                show_ranking_score_details: boolean
                ranking_score_threshold?: number | undefined
                embedder: string
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } } & {
              query: {
                id: string
                offset: number
                limit: number
                attributes_to_retrieve: string[]
                retrieve_vectors: boolean
                filter?: string | undefined
                show_ranking_score: boolean
                show_ranking_score_details: boolean
                ranking_score_threshold?: number | undefined
                embedder: string
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
      $post:
        | {
            input: { param: { indexUid: string } } & { json: SimilarQuery }
            output: SimilarResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } } & { json: SimilarQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } } & { json: SimilarQuery }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/indexes/:indexUid/stats': {
      $get:
        | {
            input: { param: { indexUid: string } }
            output: IndexStats
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { indexUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/keys': {
      $get:
        | {
            input: { query: { offset: number; limit: number } }
            output: PaginationViewKeyView
            outputFormat: 'json'
            status: 202
          }
        | {
            input: { query: { offset: number; limit: number } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $post:
        | { input: { json: CreateApiKey }; output: KeyView; outputFormat: 'json'; status: 202 }
        | {
            input: { json: CreateApiKey }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/keys/:uidOrKey': {
      $get:
        | {
            input: { param: { uidOrKey: string } }
            output: KeyView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uidOrKey: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | { input: { param: { uidOrKey: string } }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { param: { uidOrKey: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $patch:
        | {
            input: { param: { uidOrKey: string } } & { json: PatchApiKey }
            output: KeyView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { uidOrKey: string } } & { json: PatchApiKey }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/logs/stderr': {
      $post:
        | { input: { json: UpdateStderrLogs }; output: {}; outputFormat: string; status: 204 }
        | {
            input: { json: UpdateStderrLogs }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/logs/stream': {
      $post:
        | { input: { json: GetLogs }; output: string; outputFormat: 'json'; status: 200 }
        | { input: { json: GetLogs }; output: ResponseError; outputFormat: 'json'; status: 400 }
        | { input: { json: GetLogs }; output: ResponseError; outputFormat: 'json'; status: 401 }
      $delete:
        | { input: {}; output: {}; outputFormat: string; status: 204 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/metrics': {
      $get:
        | { input: {}; output: string; outputFormat: 'text'; status: 200 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/multi-search': {
      $post:
        | {
            input: { json: FederatedSearch }
            output: FederatedSearchResult
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: FederatedSearch }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/network': {
      $get:
        | { input: {}; output: Network; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
      $patch:
        | { input: { json: Network }; output: Network; outputFormat: 'json'; status: 200 }
        | { input: { json: Network }; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/snapshots': {
      $post:
        | { input: {}; output: SummarizedTaskView; outputFormat: 'json'; status: 202 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/stats': {
      $get:
        | { input: {}; output: Stats; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  } & {
    '/swap-indexes': {
      $post:
        | {
            input: { json: SwapIndexesPayload[] }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { json: SwapIndexesPayload[] }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
    }
  } & {
    '/tasks': {
      $get:
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: number | undefined
                reverse?: boolean | undefined
                batchUids?: number | undefined
                uids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: string[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: AllTasks
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                limit?: number | undefined
                from?: number | undefined
                reverse?: boolean | undefined
                batchUids?: number | undefined
                uids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: string[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
      $delete:
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tasks/cancel': {
      $post:
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: SummarizedTaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 400
          }
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: {
              query: {
                uids?: number[] | undefined
                batchUids?: number[] | undefined
                canceledBy?: number[] | undefined
                types?: Kind[] | undefined
                statuses?: Status[] | undefined
                indexUids?: string[] | undefined
                afterEnqueuedAt?: string | undefined
                beforeEnqueuedAt?: string | undefined
                afterStartedAt?: string | undefined
                beforeStartedAt?: string | undefined
                afterFinishedAt?: string | undefined
                beforeFinishedAt?: string | undefined
              }
            }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/tasks/:taskUid': {
      $get:
        | {
            input: { param: { taskUid: string } }
            output: TaskView
            outputFormat: 'json'
            status: 200
          }
        | {
            input: { param: { taskUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 401
          }
        | {
            input: { param: { taskUid: string } }
            output: ResponseError
            outputFormat: 'json'
            status: 404
          }
    }
  } & {
    '/version': {
      $get:
        | { input: {}; output: VersionResponse; outputFormat: 'json'; status: 200 }
        | { input: {}; output: ResponseError; outputFormat: 'json'; status: 401 }
    }
  },
  '/'
>
export default routes
