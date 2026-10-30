import { createRoute, z } from '@hono/zod-openapi'

const SearchSynonymSchemaSchema = z
  .object({
    root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For 1-way synonyms, indicates the root word that words in the `synonyms` parameter map to.',
      }),
    synonyms: z
      .array(z.string())
      .openapi({ description: 'Array of words that should be considered as synonyms.' }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Locale for the synonym, leave blank to use the standard tokenizer.',
      }),
    symbols_to_index: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is.',
      }),
  })
  .openapi({ required: ['synonyms'] })
  .openapi('SearchSynonymSchema')

type SearchSynonymType = z.infer<typeof SearchSynonymSchemaSchema> & { id: string }

const ApiKeySchemaSchema = z
  .object({
    value: z.string().exactOptional(),
    description: z.string(),
    actions: z.array(z.string()),
    collections: z.array(z.string()),
    expires_at: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
  })
  .openapi({ required: ['actions', 'collections', 'description'] })
  .openapi('ApiKeySchema')

type ApiKeyType = z.infer<typeof ApiKeySchemaSchema> & { id?: bigint; value_prefix?: string }

const FieldSchema = z
  .object({
    name: z.string().openapi({ example: 'company_name' }),
    type: z.string().openapi({ example: 'string' }),
    optional: z.boolean().exactOptional().openapi({ example: true }),
    facet: z.boolean().exactOptional().openapi({ example: false }),
    index: z.boolean().default(true).exactOptional().openapi({ example: true }),
    locale: z.string().exactOptional().openapi({ example: 'el' }),
    sort: z.boolean().exactOptional().openapi({ example: true }),
    infix: z.boolean().default(false).exactOptional().openapi({ example: true }),
    reference: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of a field in another collection that should be linked to this collection so that it can be joined during query.\n',
      }),
    async_reference: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Allow documents to be indexed successfully even when the referenced document doesn't exist yet.\n",
      }),
    num_dim: z.int().exactOptional().openapi({ example: 256 }),
    drop: z.boolean().exactOptional().openapi({ example: true }),
    store: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to false, the field value will not be stored on disk. Default: true.\n',
      }),
    vec_dist: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The distance metric to be used for vector search. Default: `cosine`. You can also use `ip` for inner product.\n',
      }),
    range_index: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enables an index optimized for range filtering on numerical fields (e.g. rating:>3.5). Default: false.\n',
      }),
    stem: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Values are stemmed before indexing in-memory. Default: false.\n' }),
    stem_dictionary: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Name of the stemming dictionary to use for this field',
        example: 'irregular-plurals',
      }),
    token_separators: z
      .array(z.string().length(1))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of symbols or special characters to be used for splitting the text into individual words in addition to space and new-line characters.\n',
      }),
    symbols_to_index: z
      .array(z.string().length(1))
      .default([])
      .exactOptional()
      .openapi({ description: 'List of symbols or special characters to be indexed.\n' }),
    embed: z
      .object({
        from: z.array(z.string()),
        model_config: z
          .object({
            model_name: z.string(),
            api_key: z.string().exactOptional(),
            url: z.string().exactOptional(),
            access_token: z.string().exactOptional(),
            refresh_token: z.string().exactOptional(),
            client_id: z.string().exactOptional(),
            client_secret: z.string().exactOptional(),
            project_id: z.string().exactOptional(),
            indexing_prefix: z.string().exactOptional(),
            query_prefix: z.string().exactOptional(),
          })
          .openapi({ required: ['model_name'] }),
      })
      .exactOptional()
      .openapi({ required: ['from', 'model_config'] }),
  })
  .openapi({ required: ['name', 'type'] })
  .openapi('Field')

const VoiceQueryModelCollectionConfigSchema = z
  .object({ model_name: z.string().exactOptional().openapi({ example: 'ts/whisper/base.en' }) })
  .openapi({ description: 'Configuration for the voice query model\n', required: [] })
  .openapi('VoiceQueryModelCollectionConfig')

const CollectionSchemaSchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the collection', example: 'companies' }),
    fields: z.array(FieldSchema).openapi({
      description: 'A list of fields for querying, filtering and faceting',
      example: [
        { name: 'num_employees', type: 'int32', facet: false },
        { name: 'company_name', type: 'string', facet: false },
        { name: 'country', type: 'string', facet: true },
      ],
    }),
    default_sorting_field: z
      .string()
      .default('')
      .exactOptional()
      .openapi({
        description:
          'The name of an int32 / float field that determines the order in which the search results are ranked when a sort_by clause is not provided during searching. This field must indicate some kind of popularity.',
        example: 'num_employees',
      }),
    token_separators: z
      .array(z.string().length(1))
      .default([])
      .exactOptional()
      .openapi({
        description:
          'List of symbols or special characters to be used for splitting the text into individual words in addition to space and new-line characters.\n',
      }),
    synonym_sets: z
      .array(z.string().openapi({ example: 'synonym_set_1' }))
      .exactOptional()
      .openapi({ description: 'List of synonym set names to associate with this collection' }),
    enable_nested_fields: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Enables experimental support at a collection level for nested object or object array fields. This field is only available if the Typesense server is version `0.24.0.rcn34` or later.',
        example: true,
      }),
    symbols_to_index: z
      .array(z.string().length(1))
      .default([])
      .exactOptional()
      .openapi({ description: 'List of symbols or special characters to be indexed.\n' }),
    voice_query_model: VoiceQueryModelCollectionConfigSchema.exactOptional(),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Optional details about the collection, e.g., when it was created, who created it etc.\n',
      }),
  })
  .openapi({ required: ['name', 'fields'] })
  .openapi('CollectionSchema')

const CollectionUpdateSchemaSchema = z
  .object({
    fields: z
      .array(FieldSchema)
      .exactOptional()
      .openapi({
        description: 'A list of fields for querying, filtering and faceting',
        example: [
          { name: 'company_name', type: 'string', facet: false },
          { name: 'num_employees', type: 'int32', facet: false },
          { name: 'country', type: 'string', facet: true },
        ],
      }),
    synonym_sets: z
      .array(z.string().openapi({ example: 'synonym_set_1' }))
      .exactOptional()
      .openapi({ description: 'List of synonym set names to associate with this collection' }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Optional details about the collection, e.g., when it was created, who created it etc.\n',
      }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({ required: [] })
  .openapi('CollectionUpdateSchema')

const CollectionResponseSchema = CollectionSchemaSchema.and(
  z
    .object({
      num_documents: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({
          type: 'integer',
          format: 'int64',
          description: 'Number of documents in the collection',
          readOnly: true,
        }),
      created_at: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .openapi({
          type: 'integer',
          format: 'int64',
          description: 'Timestamp of when the collection was created (Unix epoch in seconds)',
          readOnly: true,
        }),
    })
    .openapi({ required: ['num_documents', 'created_at'] }),
).openapi('CollectionResponse')

const CollectionAliasSchemaSchema = z
  .object({
    collection_name: z
      .string()
      .openapi({ description: 'Name of the collection you wish to map the alias to' }),
  })
  .openapi({ required: ['collection_name'] })
  .openapi('CollectionAliasSchema')

const CollectionAliasSchema = z
  .object({
    name: z.string().openapi({ readOnly: true, description: 'Name of the collection alias' }),
    collection_name: z
      .string()
      .openapi({ description: 'Name of the collection the alias mapped to' }),
  })
  .openapi({ required: ['collection_name', 'name'] })
  .openapi('CollectionAlias')

const CollectionAliasesResponseSchema = z
  .object({
    aliases: z.array(CollectionAliasSchema).openapi({ 'x-go-type': '[]*CollectionAlias' }),
  })
  .openapi({ required: ['aliases'] })
  .openapi('CollectionAliasesResponse')

const FacetCountsSchema = z
  .object({
    counts: z
      .array(
        z
          .object({
            count: z.int().exactOptional(),
            highlighted: z.string().exactOptional(),
            value: z.string().exactOptional(),
            parent: z.object({}).exactOptional(),
          })
          .openapi({ required: [] }),
      )
      .exactOptional(),
    field_name: z.string().exactOptional(),
    sampled: z.boolean().exactOptional(),
    stats: z
      .object({
        max: z.float64().exactOptional(),
        min: z.float64().exactOptional(),
        sum: z.float64().exactOptional(),
        total_values: z.int().exactOptional(),
        avg: z.float64().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: [] })
  .openapi('FacetCounts')

const SearchHighlightSchema = z
  .object({
    field: z.string().exactOptional().openapi({ example: 'company_name' }),
    snippet: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Present only for (non-array) string fields',
        example: '<mark>Stark</mark> Industries',
      }),
    snippets: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Present only for (array) string[] fields',
        example: ['<mark>Stark</mark> Industries', '<mark>Stark</mark> Corp'],
      }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Full field value with highlighting, present only for (non-array) string fields',
        example: '<mark>Stark</mark> Industries is a major supplier of space equipment.',
      }),
    values: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'Full field value with highlighting, present only for (array) string[] fields',
        example: ['<mark>Stark</mark> Industries', '<mark>Stark</mark> Corp'],
      }),
    indices: z
      .array(z.int())
      .exactOptional()
      .openapi({
        description:
          'The indices property will be present only for string[] fields and will contain the corresponding indices of the snippets in the search field',
        example: 1,
      }),
    matched_tokens: z.array(z.object({}).openapi({ 'x-go-type': 'interface{}' })).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('SearchHighlight')

const SearchResultHitSchema = z
  .object({
    highlights: z
      .array(SearchHighlightSchema)
      .exactOptional()
      .openapi({ description: '(Deprecated) Contains highlighted portions of the search fields' }),
    highlight: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Highlighted version of the matching document' }),
    document: z
      .record(z.string(), z.object({}))
      .exactOptional()
      .openapi({ description: 'Can be any key-value pair' }),
    text_match: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .exactOptional()
      .openapi({ type: 'integer', format: 'int64' }),
    text_match_info: z
      .object({
        best_field_score: z.string().exactOptional(),
        best_field_weight: z.int().exactOptional(),
        fields_matched: z.int().exactOptional(),
        num_tokens_dropped: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .exactOptional()
          .openapi({ type: 'integer', format: 'int64', 'x-go-type': 'uint64' }),
        score: z.string().exactOptional(),
        tokens_matched: z.int().exactOptional(),
        typo_prefix_score: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
    geo_distance_meters: z
      .record(z.string(), z.int())
      .exactOptional()
      .openapi({ description: 'Can be any key-value pair' }),
    vector_distance: z
      .float32()
      .exactOptional()
      .openapi({
        description: "Distance between the query vector and matching document's vector value",
      }),
    hybrid_search_info: z
      .object({
        rank_fusion_score: z
          .float32()
          .exactOptional()
          .openapi({ description: 'Combined score from rank fusion of text and vector search' }),
      })
      .exactOptional()
      .openapi({ description: 'Information about hybrid search scoring', required: [] }),
    search_index: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Returned only for union query response. Indicates the index of the query which this document matched to.',
      }),
  })
  .openapi({
    example: {
      highlights: {
        company_name: { field: 'company_name', snippet: '<mark>Stark</mark> Industries' },
      },
      document: {
        id: '124',
        company_name: 'Stark Industries',
        num_employees: 5215,
        country: 'USA',
      },
      text_match: 1234556,
    },
    required: [],
  })
  .openapi('SearchResultHit')

const SearchGroupedHitSchema = z
  .object({
    found: z.int().exactOptional(),
    group_key: z.array(z.any()),
    hits: z
      .array(SearchResultHitSchema)
      .openapi({ description: 'The documents that matched the search query' }),
  })
  .openapi({ required: ['group_key', 'hits'] })
  .openapi('SearchGroupedHit')

const SearchRequestParamsSchema = z
  .object({
    collection_name: z.string(),
    first_q: z.string().exactOptional(),
    q: z.string(),
    per_page: z.int(),
    voice_query: z
      .object({ transcribed_query: z.string().exactOptional() })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['collection_name', 'q', 'per_page'] })
  .openapi('SearchRequestParams')

const SearchResultConversationSchema = z
  .object({
    answer: z.string(),
    conversation_history: z.array(z.object({})),
    conversation_id: z.string(),
    query: z.string(),
  })
  .openapi({ required: ['answer', 'conversation_history', 'conversation_id', 'query'] })
  .openapi('SearchResultConversation')

const SearchResultSchema = z
  .object({
    facet_counts: z.array(FacetCountsSchema).exactOptional(),
    found: z.int().exactOptional().openapi({ description: 'The number of documents found' }),
    found_docs: z.int().exactOptional(),
    search_time_ms: z
      .int()
      .exactOptional()
      .openapi({ description: 'The number of milliseconds the search took' }),
    out_of: z
      .int()
      .exactOptional()
      .openapi({ description: 'The total number of documents in the collection' }),
    search_cutoff: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the search was cut off' }),
    page: z.int().exactOptional().openapi({ description: 'The search result page number' }),
    grouped_hits: z.array(SearchGroupedHitSchema).exactOptional(),
    hits: z
      .array(SearchResultHitSchema)
      .exactOptional()
      .openapi({ description: 'The documents that matched the search query' }),
    request_params: SearchRequestParamsSchema.exactOptional(),
    conversation: SearchResultConversationSchema.exactOptional(),
    union_request_params: z
      .array(SearchRequestParamsSchema)
      .exactOptional()
      .openapi({ description: 'Returned only for union query response.' }),
    metadata: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Custom JSON object that can be returned in the search response' }),
  })
  .openapi({ required: [] })
  .openapi('SearchResult')

const SearchSynonymSchema: z.ZodType<SearchSynonymType> = z
  .lazy(() =>
    SearchSynonymSchemaSchema.and(
      z.object({ id: z.string().openapi({ readOnly: true }) }).openapi({ required: ['id'] }),
    ),
  )
  .openapi('SearchSynonym')

const SearchSynonymDeleteResponseSchema = z
  .object({ id: z.string().openapi({ description: 'The id of the synonym that was deleted' }) })
  .openapi({ required: ['id'] })
  .openapi('SearchSynonymDeleteResponse')

const SearchSynonymsResponseSchema = z
  .object({ synonyms: z.array(SearchSynonymSchema).openapi({ 'x-go-type': '[]*SearchSynonym' }) })
  .openapi({ required: ['synonyms'] })
  .openapi('SearchSynonymsResponse')

const HealthStatusSchema = z
  .object({ ok: z.boolean() })
  .openapi({ required: ['ok'] })
  .openapi('HealthStatus')

const SchemaChangeStatusSchema = z
  .object({
    collection: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the collection being modified' }),
    validated_docs: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of documents that have been validated' }),
    altered_docs: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of documents that have been altered' }),
  })
  .openapi({ required: [] })
  .openapi('SchemaChangeStatus')

const SuccessStatusSchema = z
  .object({ success: z.boolean() })
  .openapi({ required: ['success'] })
  .openapi('SuccessStatus')

const ApiResponseSchema = z
  .object({ message: z.string() })
  .openapi({ required: ['message'] })
  .openapi('ApiResponse')

const ApiKeySchema: z.ZodType<ApiKeyType> = z
  .lazy(() =>
    ApiKeySchemaSchema.and(
      z
        .object({
          id: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64', readOnly: true }),
          value_prefix: z.string().exactOptional().openapi({ readOnly: true }),
        })
        .openapi({ required: [] }),
    ),
  )
  .openapi('ApiKey')

const ApiKeyDeleteResponseSchema = z
  .object({
    id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({
        type: 'integer',
        format: 'int64',
        description: 'The id of the API key that was deleted',
      }),
  })
  .openapi({ required: ['id'] })
  .openapi('ApiKeyDeleteResponse')

const ApiKeysResponseSchema = z
  .object({ keys: z.array(ApiKeySchema).openapi({ 'x-go-type': '[]*ApiKey' }) })
  .openapi({ required: ['keys'] })
  .openapi('ApiKeysResponse')

const MultiSearchResultItemSchema = SearchResultSchema.and(
  z
    .object({
      code: z
        .preprocess(
          (val) =>
            typeof val === 'number' && Number.isSafeInteger(val)
              ? BigInt(val)
              : typeof val === 'string' && /^-?\d+$/.test(val)
                ? BigInt(val)
                : val,
          z.int64(),
        )
        .exactOptional()
        .openapi({ type: 'integer', format: 'int64', description: 'HTTP error code' }),
      error: z.string().exactOptional().openapi({ description: 'Error description' }),
    })
    .openapi({ required: [] }),
).openapi('MultiSearchResultItem')

const MultiSearchResultSchema = z
  .object({
    results: z.array(MultiSearchResultItemSchema),
    conversation: SearchResultConversationSchema.exactOptional(),
  })
  .openapi({ required: ['results'] })
  .openapi('MultiSearchResult')

const DropTokensModeSchema = z
  .enum(['right_to_left', 'left_to_right', 'both_sides:3'])
  .openapi({
    description:
      'Dictates the direction in which the words in the query must be dropped when the original words in the query do not appear in any document. Values: right_to_left (default), left_to_right, both_sides:3 A note on both_sides:3 - for queries up to 3 tokens (words) in length, this mode will drop tokens from both sides and exhaustively rank all matching results. If query length is greater than 3 words, Typesense will just fallback to default behavior of right_to_left\n',
  })
  .openapi('DropTokensMode')

const SearchParametersSchema = z
  .object({
    q: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.',
      }),
    query_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of `string` fields that should be queried against. Multiple fields are separated with a comma.',
      }),
    validate_field_names: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.\n',
      }),
    nl_query: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether to use natural language processing to parse the query.' }),
    nl_model_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The ID of the natural language model to use.' }),
    query_by_weights: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.',
      }),
    text_match_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.',
      }),
    infix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results',
      }),
    max_extra_prefix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
      }),
    max_extra_suffix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
      }),
    filter_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filter conditions for refining your open api validator search results. Separate multiple conditions with &&.',
        example: 'num_employees:>100 && country: [USA, UK]',
      }),
    enable_lazy_filter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false\n',
      }),
    max_filter_by_candidates: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.',
      }),
    sort_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`',
        example: 'num_employees:desc',
      }),
    facet_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.',
      }),
    max_facet_values: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of facet values to be returned.' }),
    facet_query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".',
      }),
    facet_query_num_typos: z
      .int()
      .exactOptional()
      .openapi({ description: 'Controls the fuzziness of the facet query filter. Default: 2.\n' }),
    num_typos: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of typographical errors (1 or 2) that would be tolerated. Default: 2\n',
      }),
    page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Results from this specific page number would be fetched.' }),
    per_page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of results to fetch per page. Default: 10' }),
    limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.\n',
      }),
    offset: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.',
      }),
    group_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.',
      }),
    group_limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3\n',
      }),
    group_missing_values: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true\n',
      }),
    group_max_candidates: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.\n',
      }),
    include_fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'List of fields from the document to include in the search result' }),
    exclude_fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'List of fields from the document to exclude in the search result' }),
    highlight_full_fields: z
      .string()
      .exactOptional()
      .openapi({
        description: 'List of fields which should be highlighted fully without snippeting',
      }),
    highlight_affix_num_tokens: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of tokens that should surround the highlighted text on each side. Default: 4\n',
      }),
    highlight_start_tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The start tag used for the highlighted snippets. Default: `<mark>`\n',
      }),
    highlight_end_tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The end tag used for the highlighted snippets. Default: `</mark>`\n',
      }),
    enable_highlight_v1: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Flag for enabling/disabling the deprecated, old highlight structure in the response. Default: true\n',
      }),
    enable_analytics: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).\n',
      }),
    snippet_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30\n',
      }),
    synonym_sets: z
      .string()
      .exactOptional()
      .openapi({
        description: 'List of synonym set names to associate with this search query',
        example: 'synonym_set_1,synonym_set_2',
      }),
    drop_tokens_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10\n',
      }),
    drop_tokens_mode: DropTokensModeSchema.exactOptional(),
    typo_tokens_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100\n',
      }),
    enable_typos_for_alpha_numerical_tokens: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.\n',
      }),
    filter_curated_hits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false\n',
      }),
    enable_synonyms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true\n',
      }),
    synonym_prefix: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allow synonym resolution on word prefixes in the query. Default: false\n',
      }),
    demote_synonym_match: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false\n',
      }),
    synonym_num_typos: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Allow synonym resolution on typo-corrected words in the query. Default: 0\n',
      }),
    pinned_hits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
      }),
    hidden_hits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
      }),
    curation_tags: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Comma separated list of tags to trigger the curations rules that match the tags.',
      }),
    highlight_fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A list of custom fields that must be highlighted even if you don't query for them\n",
      }),
    rerank_hybrid_matches: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.\n',
      }),
    split_join_tokens: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Treat space as typo: search for q=basket ball if q=basketball is not found or vice-versa. Splitting/joining of tokens will only be attempted if the original query produces no results. To always trigger this behavior, set value to `always``. To disable, set value to `off`. Default is `fallback`.\n',
      }),
    pre_segmented_query: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.\nSet this parameter to true to do the same\n',
      }),
    preset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.\n',
      }),
    enable_curations: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false\n',
      }),
    prioritize_exact_match: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Set this parameter to true to ensure that an exact match is ranked above the others\n',
      }),
    max_candidates: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Control the number of words that Typesense considers for typo and prefix searching.\n',
      }),
    prioritize_token_position: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Make Typesense prioritize documents where the query words appear earlier in the text.\n',
      }),
    prioritize_num_matching_fields: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Make Typesense prioritize documents where the query words appear in more number of fields.\n',
      }),
    enable_typos_for_numerical_tokens: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Make Typesense disable typos for numerical tokens.\n' }),
    exhaustive_search: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).\n',
      }),
    search_cutoff_ms: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.\n',
      }),
    limit_hits: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.\n',
      }),
    use_cache: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable server side caching of search query results. By default, caching is disabled.\n',
      }),
    cache_ttl: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.\n',
      }),
    min_len_1typo: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
      }),
    min_len_2typo: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
      }),
    vector_query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vector query expression for fetching documents "closest" to a given query/document vector.\n',
      }),
    remote_embedding_timeout_ms: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timeout (in milliseconds) for fetching remote embeddings.\n' }),
    remote_embedding_num_tries: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of times to retry fetching remote embeddings.\n' }),
    facet_strategy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).\n',
      }),
    stopwords: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.\n',
      }),
    facet_return_parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Comma separated string of nested facet fields whose parent object should be returned in facet response.\n',
      }),
    facet_sample_percent: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Percentage of hits that will be used to estimate facet counts. Default: 100.\n',
      }),
    facet_sample_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of hits above which the facet counts are sampled. Default: 0.\n',
      }),
    facet_sample_slope: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.\n',
      }),
    voice_query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base64 encoded audio file in 16 khz 16-bit WAV format.\n' }),
    conversation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable conversational search.\n' }),
    conversation_model_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of Conversation Model to be used.\n' }),
    conversation_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchParameters')

const MultiSearchParametersSchema = z
  .object({
    q: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.',
      }),
    query_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of `string` fields that should be queried against. Multiple fields are separated with a comma.',
      }),
    query_by_weights: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.',
      }),
    text_match_type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.',
      }),
    prefix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.',
      }),
    infix: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results',
      }),
    max_extra_prefix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
      }),
    max_extra_suffix: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
      }),
    filter_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Filter conditions for refining youropen api validator search results. Separate multiple conditions with &&.',
        example: 'num_employees:>100 && country: [USA, UK]',
      }),
    enable_lazy_filter: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false\n',
      }),
    max_filter_by_candidates: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.',
      }),
    sort_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`',
      }),
    facet_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.',
      }),
    max_facet_values: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of facet values to be returned.' }),
    facet_query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".',
      }),
    facet_query_num_typos: z
      .int()
      .exactOptional()
      .openapi({ description: 'Controls the fuzziness of the facet query filter. Default: 2.\n' }),
    num_typos: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The number of typographical errors (1 or 2) that would be tolerated. Default: 2\n',
      }),
    page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Results from this specific page number would be fetched.' }),
    per_page: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of results to fetch per page. Default: 10' }),
    limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.\n',
      }),
    offset: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.',
      }),
    group_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.',
      }),
    group_limit: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3\n',
      }),
    group_missing_values: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true\n',
      }),
    group_max_candidates: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.\n',
      }),
    include_fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'List of fields from the document to include in the search result' }),
    exclude_fields: z
      .string()
      .exactOptional()
      .openapi({ description: 'List of fields from the document to exclude in the search result' }),
    highlight_full_fields: z
      .string()
      .exactOptional()
      .openapi({
        description: 'List of fields which should be highlighted fully without snippeting',
      }),
    highlight_affix_num_tokens: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The number of tokens that should surround the highlighted text on each side. Default: 4\n',
      }),
    highlight_start_tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The start tag used for the highlighted snippets. Default: `<mark>`\n',
      }),
    highlight_end_tag: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The end tag used for the highlighted snippets. Default: `</mark>`\n',
      }),
    snippet_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30\n',
      }),
    drop_tokens_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10\n',
      }),
    drop_tokens_mode: DropTokensModeSchema.exactOptional(),
    typo_tokens_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100\n',
      }),
    enable_typos_for_alpha_numerical_tokens: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.\n',
      }),
    filter_curated_hits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false\n',
      }),
    enable_synonyms: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true\n',
      }),
    enable_analytics: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).\n',
      }),
    synonym_prefix: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Allow synonym resolution on word prefixes in the query. Default: false\n',
      }),
    demote_synonym_match: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false\n',
      }),
    synonym_num_typos: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Allow synonym resolution on typo-corrected words in the query. Default: 0\n',
      }),
    pinned_hits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
      }),
    hidden_hits: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
      }),
    curation_tags: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Comma separated list of tags to trigger the curations rules that match the tags.',
      }),
    highlight_fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A list of custom fields that must be highlighted even if you don't query for them\n",
      }),
    rerank_hybrid_matches: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.\n',
      }),
    pre_segmented_query: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.\nSet this parameter to true to do the same\n',
      }),
    preset: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.\n',
      }),
    enable_curations: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false\n',
      }),
    prioritize_exact_match: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Set this parameter to true to ensure that an exact match is ranked above the others\n',
      }),
    prioritize_token_position: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Make Typesense prioritize documents where the query words appear earlier in the text.\n',
      }),
    prioritize_num_matching_fields: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Make Typesense prioritize documents where the query words appear in more number of fields.\n',
      }),
    enable_typos_for_numerical_tokens: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Make Typesense disable typos for numerical tokens.\n' }),
    exhaustive_search: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).\n',
      }),
    search_cutoff_ms: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.\n',
      }),
    limit_hits: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.\n',
      }),
    use_cache: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Enable server side caching of search query results. By default, caching is disabled.\n',
      }),
    cache_ttl: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.\n',
      }),
    min_len_1typo: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
      }),
    min_len_2typo: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
      }),
    vector_query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Vector query expression for fetching documents "closest" to a given query/document vector.\n',
      }),
    remote_embedding_timeout_ms: z
      .int()
      .exactOptional()
      .openapi({ description: 'Timeout (in milliseconds) for fetching remote embeddings.\n' }),
    remote_embedding_num_tries: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of times to retry fetching remote embeddings.\n' }),
    facet_strategy: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).\n',
      }),
    stopwords: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.\n',
      }),
    facet_return_parent: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Comma separated string of nested facet fields whose parent object should be returned in facet response.\n',
      }),
    facet_sample_percent: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Percentage of hits that will be used to estimate facet counts. Default: 100.\n',
      }),
    facet_sample_threshold: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Minimum number of hits above which the facet counts are sampled. Default: 0.\n',
      }),
    facet_sample_slope: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.\n',
      }),
    voice_query: z
      .string()
      .exactOptional()
      .openapi({ description: 'The base64 encoded audio file in 16 khz 16-bit WAV format.\n' }),
    conversation: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable conversational search.\n' }),
    conversation_model_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'The Id of Conversation Model to be used.\n' }),
    conversation_id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.\n',
      }),
    validate_field_names: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.\n',
      }),
  })
  .openapi({ description: 'Parameters for the multi search API.\n', required: [] })
  .openapi('MultiSearchParameters')

const MultiSearchCollectionParametersSchema = MultiSearchParametersSchema.and(
  z
    .object({
      collection: z
        .string()
        .exactOptional()
        .openapi({ description: 'The collection to search in.\n' }),
      'x-typesense-api-key': z
        .string()
        .exactOptional()
        .openapi({
          description: 'A separate search API key for each search within a multi_search request',
        }),
    })
    .openapi({ required: [] }),
).openapi('MultiSearchCollectionParameters')

const MultiSearchSearchesParameterSchema = z
  .object({
    union: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'When true, merges the search results from each search query into a single ordered set of hits.',
      }),
    searches: z.array(MultiSearchCollectionParametersSchema),
  })
  .openapi({ required: ['searches'] })
  .openapi('MultiSearchSearchesParameter')

const AnalyticsEventCreateResponseSchema = z
  .object({ ok: z.boolean() })
  .openapi({ required: ['ok'] })
  .openapi('AnalyticsEventCreateResponse')

const AnalyticsEventSchema = z
  .object({
    name: z
      .string()
      .openapi({ description: 'Name of the analytics rule this event corresponds to' }),
    event_type: z
      .string()
      .openapi({ description: 'Type of event (e.g., click, conversion, query, visit)' }),
    data: z
      .object({
        user_id: z.string().exactOptional(),
        doc_id: z.string().exactOptional(),
        doc_ids: z.array(z.string()).exactOptional(),
        q: z.string().exactOptional(),
        analytics_tag: z.string().exactOptional(),
      })
      .openapi({ description: 'Event payload', required: [] }),
  })
  .openapi({ required: ['name', 'event_type', 'data'] })
  .openapi('AnalyticsEvent')

const AnalyticsEventsResponseSchema = z
  .object({
    events: z.array(
      z
        .object({
          name: z.string().exactOptional(),
          event_type: z.string().exactOptional(),
          collection: z.string().exactOptional(),
          timestamp: z
            .preprocess(
              (val) =>
                typeof val === 'number' && Number.isSafeInteger(val)
                  ? BigInt(val)
                  : typeof val === 'string' && /^-?\d+$/.test(val)
                    ? BigInt(val)
                    : val,
              z.int64(),
            )
            .exactOptional()
            .openapi({ type: 'integer', format: 'int64' }),
          user_id: z.string().exactOptional(),
          doc_id: z.string().exactOptional(),
          doc_ids: z.array(z.string()).exactOptional(),
          query: z.string().exactOptional(),
        })
        .openapi({ required: [] }),
    ),
  })
  .openapi({ required: ['events'] })
  .openapi('AnalyticsEventsResponse')

const AnalyticsRuleTypeSchema = z
  .enum(['popular_queries', 'nohits_queries', 'counter', 'log'])
  .openapi('AnalyticsRuleType')

const AnalyticsRuleCreateSchema = z
  .object({
    name: z.string(),
    type: AnalyticsRuleTypeSchema,
    collection: z.string(),
    event_type: z.string(),
    rule_tag: z.string().exactOptional(),
    params: z
      .object({
        destination_collection: z.string().exactOptional(),
        limit: z.int().exactOptional(),
        capture_search_requests: z.boolean().exactOptional(),
        meta_fields: z.array(z.string()).exactOptional(),
        expand_query: z.boolean().exactOptional(),
        counter_field: z.string().exactOptional(),
        weight: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ required: ['name', 'type', 'collection', 'event_type'] })
  .openapi('AnalyticsRuleCreate')

const AnalyticsRuleUpdateSchema = z
  .object({
    name: z.string().exactOptional(),
    rule_tag: z.string().exactOptional(),
    params: z
      .object({
        destination_collection: z.string().exactOptional(),
        limit: z.int().exactOptional(),
        capture_search_requests: z.boolean().exactOptional(),
        meta_fields: z.array(z.string()).exactOptional(),
        expand_query: z.boolean().exactOptional(),
        counter_field: z.string().exactOptional(),
        weight: z.int().exactOptional(),
      })
      .exactOptional()
      .openapi({ required: [] }),
  })
  .openapi({ description: 'Fields allowed to update on an analytics rule', required: [] })
  .openapi('AnalyticsRuleUpdate')

const AnalyticsRuleSchema = AnalyticsRuleCreateSchema.and(z.object({})).openapi('AnalyticsRule')

const AnalyticsStatusSchema = z
  .object({
    popular_prefix_queries: z.int().exactOptional(),
    nohits_prefix_queries: z.int().exactOptional(),
    log_prefix_queries: z.int().exactOptional(),
    query_log_events: z.int().exactOptional(),
    query_counter_events: z.int().exactOptional(),
    doc_log_events: z.int().exactOptional(),
    doc_counter_events: z.int().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('AnalyticsStatus')

const APIStatsResponseSchema = z
  .object({
    delete_latency_ms: z.float64().exactOptional(),
    delete_requests_per_second: z.float64().exactOptional(),
    import_latency_ms: z.float64().exactOptional(),
    import_requests_per_second: z.float64().exactOptional(),
    latency_ms: z.object({}).exactOptional().openapi({ 'x-go-type': 'map[string]float64' }),
    overloaded_requests_per_second: z.float64().exactOptional(),
    pending_write_batches: z.float64().exactOptional(),
    requests_per_second: z
      .object({})
      .exactOptional()
      .openapi({ 'x-go-type': 'map[string]float64' }),
    search_latency_ms: z.float64().exactOptional(),
    search_requests_per_second: z.float64().exactOptional(),
    total_requests_per_second: z.float64().exactOptional(),
    write_latency_ms: z.float64().exactOptional(),
    write_requests_per_second: z.float64().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('APIStatsResponse')

const StopwordsSetUpsertSchemaSchema = z
  .object({ stopwords: z.array(z.string()), locale: z.string().exactOptional() })
  .openapi({
    required: ['stopwords'],
    example: '{"stopwords": ["Germany", "France", "Italy"], "locale": "en"}\n',
  })
  .openapi('StopwordsSetUpsertSchema')

const StopwordsSetSchemaSchema = z
  .object({ id: z.string(), stopwords: z.array(z.string()), locale: z.string().exactOptional() })
  .openapi({
    required: ['id', 'stopwords'],
    example: '{"id": "countries", "stopwords": ["Germany", "France", "Italy"], "locale": "en"}\n',
  })
  .openapi('StopwordsSetSchema')

const StopwordsSetRetrieveSchemaSchema = z
  .object({ stopwords: StopwordsSetSchemaSchema })
  .openapi({
    required: ['stopwords'],
    example:
      '{"stopwords": {"id": "countries", "stopwords": ["Germany", "France", "Italy"], "locale": "en"}}\n',
  })
  .openapi('StopwordsSetRetrieveSchema')

const StopwordsSetsRetrieveAllSchemaSchema = z
  .object({ stopwords: z.array(StopwordsSetSchemaSchema) })
  .openapi({
    required: ['stopwords'],
    example:
      '{"stopwords": [{"id": "countries", "stopwords": ["Germany", "France", "Italy"], "locale": "en"}]}\n',
  })
  .openapi('StopwordsSetsRetrieveAllSchema')

const PresetUpsertSchemaSchema = z
  .object({ value: z.xor([SearchParametersSchema, MultiSearchSearchesParameterSchema]) })
  .openapi({ required: ['value'] })
  .openapi('PresetUpsertSchema')

const PresetSchemaSchema = PresetUpsertSchemaSchema.and(
  z.object({ name: z.string() }).openapi({ required: ['name'] }),
).openapi('PresetSchema')

const PresetsRetrieveSchemaSchema = z
  .object({ presets: z.array(PresetSchemaSchema).openapi({ 'x-go-type': '[]*PresetSchema' }) })
  .openapi({ required: ['presets'] })
  .openapi('PresetsRetrieveSchema')

const PresetDeleteSchemaSchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('PresetDeleteSchema')

const DirtyValuesSchema = z
  .enum(['coerce_or_reject', 'coerce_or_drop', 'drop', 'reject'])
  .openapi('DirtyValues')

const IndexActionSchema = z.enum(['create', 'update', 'upsert', 'emplace']).openapi('IndexAction')

const ConversationModelUpdateSchemaSchema = z
  .object({
    id: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.',
      }),
    model_name: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the LLM model offered by OpenAI, Cloudflare or vLLM' }),
    api_key: z.string().exactOptional().openapi({ description: "The LLM service's API Key" }),
    history_collection: z
      .string()
      .exactOptional()
      .openapi({ description: 'Typesense collection that stores the historical conversations' }),
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: "LLM service's account ID (only applicable for Cloudflare)" }),
    system_prompt: z
      .string()
      .exactOptional()
      .openapi({ description: 'The system prompt that contains special instructions to the LLM' }),
    ttl: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'Time interval in seconds after which the messages would be deleted. Default: 86400 (24 hours)\n',
      }),
    max_bytes: z
      .int()
      .exactOptional()
      .openapi({
        description:
          "The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.\n",
      }),
    vllm_url: z.string().exactOptional().openapi({ description: 'URL of vLLM service' }),
  })
  .openapi({ required: [] })
  .openapi('ConversationModelUpdateSchema')

const ConversationModelCreateSchemaSchema = ConversationModelUpdateSchemaSchema.and(
  z
    .object({
      model_name: z
        .string()
        .openapi({ description: 'Name of the LLM model offered by OpenAI, Cloudflare or vLLM' }),
      max_bytes: z
        .int()
        .openapi({
          description:
            "The maximum number of bytes to send to the LLM in every API call. Consult the LLM's documentation on the number of bytes supported in the context window.\n",
        }),
      history_collection: z
        .string()
        .openapi({ description: 'Typesense collection that stores the historical conversations' }),
    })
    .openapi({ required: ['model_name', 'max_bytes', 'history_collection'] }),
)
  .openapi({ required: ['model_name', 'max_bytes'] })
  .openapi('ConversationModelCreateSchema')

const ConversationModelSchemaSchema = ConversationModelCreateSchemaSchema.and(
  z
    .object({
      id: z
        .string()
        .openapi({
          description:
            'An explicit id for the model, otherwise the API will return a response with an auto-generated conversation model id.',
        }),
    })
    .openapi({ required: ['id'] }),
).openapi('ConversationModelSchema')

const StemmingDictionarySchema = z
  .object({
    id: z
      .string()
      .openapi({
        description: 'Unique identifier for the dictionary',
        example: 'irregular-plurals',
      }),
    words: z
      .array(
        z
          .object({
            word: z
              .string()
              .openapi({ description: 'The word form to be stemmed', example: 'people' }),
            root: z
              .string()
              .openapi({ description: 'The root form of the word', example: 'person' }),
          })
          .openapi({ required: ['word', 'root'] }),
      )
      .openapi({ description: 'List of word mappings in the dictionary' }),
  })
  .openapi({ required: ['id', 'words'] })
  .openapi('StemmingDictionary')

const NLSearchModelBaseSchema = z
  .object({
    model_name: z.string().exactOptional().openapi({ description: 'Name of the NL model to use' }),
    api_key: z
      .string()
      .exactOptional()
      .openapi({ description: 'API key for the NL model service' }),
    api_url: z
      .string()
      .exactOptional()
      .openapi({ description: 'Custom API URL for the NL model service' }),
    max_bytes: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of bytes to process' }),
    temperature: z
      .number()
      .exactOptional()
      .openapi({ description: 'Temperature parameter for the NL model' }),
    system_prompt: z
      .string()
      .exactOptional()
      .openapi({ description: 'System prompt for the NL model' }),
    top_p: z
      .number()
      .exactOptional()
      .openapi({ description: 'Top-p parameter for the NL model (Google-specific)' }),
    top_k: z
      .int()
      .exactOptional()
      .openapi({ description: 'Top-k parameter for the NL model (Google-specific)' }),
    stop_sequences: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Stop sequences for the NL model (Google-specific)' }),
    api_version: z
      .string()
      .exactOptional()
      .openapi({ description: 'API version for the NL model service' }),
    project_id: z.string().exactOptional().openapi({ description: 'Project ID for GCP Vertex AI' }),
    access_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Access token for GCP Vertex AI' }),
    refresh_token: z
      .string()
      .exactOptional()
      .openapi({ description: 'Refresh token for GCP Vertex AI' }),
    client_id: z.string().exactOptional().openapi({ description: 'Client ID for GCP Vertex AI' }),
    client_secret: z
      .string()
      .exactOptional()
      .openapi({ description: 'Client secret for GCP Vertex AI' }),
    region: z.string().exactOptional().openapi({ description: 'Region for GCP Vertex AI' }),
    max_output_tokens: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum output tokens for GCP Vertex AI' }),
    account_id: z
      .string()
      .exactOptional()
      .openapi({ description: 'Account ID for Cloudflare-specific models' }),
  })
  .openapi({ required: [] })
  .openapi('NLSearchModelBase')

const NLSearchModelCreateSchemaSchema = NLSearchModelBaseSchema.and(
  z
    .object({
      id: z
        .string()
        .exactOptional()
        .openapi({ description: 'Optional ID for the NL search model' }),
    })
    .openapi({ required: [] }),
).openapi('NLSearchModelCreateSchema')

const NLSearchModelSchemaSchema = NLSearchModelCreateSchemaSchema.and(
  z
    .object({ id: z.string().openapi({ description: 'ID of the NL search model' }) })
    .openapi({ required: ['id'] }),
).openapi('NLSearchModelSchema')

const NLSearchModelUpdateSchemaSchema = NLSearchModelCreateSchemaSchema.openapi(
  'NLSearchModelUpdateSchema',
)

const NLSearchModelDeleteSchemaSchema = z
  .object({ id: z.string().openapi({ description: 'ID of the deleted NL search model' }) })
  .openapi({ required: ['id'] })
  .openapi('NLSearchModelDeleteSchema')

const SynonymItemUpsertSchemaSchema = z
  .object({
    synonyms: z
      .array(z.string())
      .openapi({ description: 'Array of words that should be considered as synonyms' }),
    root: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For 1-way synonyms, indicates the root word that words in the synonyms parameter map to',
      }),
    locale: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Locale for the synonym, leave blank to use the standard tokenizer',
      }),
    symbols_to_index: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'By default, special characters are dropped from synonyms. Use this attribute to specify which special characters should be indexed as is',
      }),
  })
  .openapi({ required: ['synonyms'] })
  .openapi('SynonymItemUpsertSchema')

const SynonymItemSchemaSchema = z
  .object({ id: z.string().openapi({ description: 'Unique identifier for the synonym item' }) })
  .openapi({ required: ['id'] })
  .and(SynonymItemUpsertSchemaSchema)
  .openapi('SynonymItemSchema')

const SynonymSetCreateSchemaSchema = z
  .object({
    items: z.array(SynonymItemSchemaSchema).openapi({ description: 'Array of synonym items' }),
  })
  .openapi({ required: ['items'] })
  .openapi('SynonymSetCreateSchema')

const SynonymSetSchemaSchema = SynonymSetCreateSchemaSchema.and(
  z
    .object({ name: z.string().openapi({ description: 'Name of the synonym set' }) })
    .openapi({ required: ['name'] }),
).openapi('SynonymSetSchema')

const SynonymSetsRetrieveSchemaSchema = z
  .object({
    synonym_sets: z.array(SynonymSetSchemaSchema).openapi({ description: 'Array of synonym sets' }),
  })
  .openapi({ required: ['synonym_sets'] })
  .openapi('SynonymSetsRetrieveSchema')

const SynonymSetDeleteSchemaSchema = z
  .object({ name: z.string().openapi({ description: 'Name of the deleted synonym set' }) })
  .openapi({ required: ['name'] })
  .openapi('SynonymSetDeleteSchema')

const SynonymItemDeleteSchemaSchema = z
  .object({ id: z.string().openapi({ description: 'ID of the deleted synonym item' }) })
  .openapi({ required: ['id'] })
  .openapi('SynonymItemDeleteSchema')

const CurationRuleSchema = z
  .object({
    tags: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'List of tag values to associate with this curation rule.' }),
    query: z
      .string()
      .exactOptional()
      .openapi({ description: 'Indicates what search queries should be curated' }),
    match: z
      .enum(['exact', 'contains'])
      .exactOptional()
      .openapi({
        description:
          'Indicates whether the match on the query term should be `exact` or `contains`. If we want to match all queries that contained the word `apple`, we will use the `contains` match instead.\n',
      }),
    filter_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Indicates that the curation should apply when the filter_by parameter in a search query exactly matches the string specified here (including backticks, spaces, brackets, etc).\n',
      }),
  })
  .openapi({ required: [] })
  .openapi('CurationRule')

const CurationIncludeSchema = z
  .object({
    id: z.string().openapi({ description: 'document id that should be included' }),
    position: z
      .int()
      .openapi({
        description: 'position number where document should be included in the search results',
      }),
  })
  .openapi({ required: ['id', 'position'] })
  .openapi('CurationInclude')

const CurationExcludeSchema = z
  .object({
    id: z
      .string()
      .openapi({ description: 'document id that should be excluded from the search results.' }),
  })
  .openapi({ required: ['id'] })
  .openapi('CurationExclude')

const CurationItemCreateSchemaSchema = z
  .object({
    rule: CurationRuleSchema,
    includes: z
      .array(CurationIncludeSchema)
      .exactOptional()
      .openapi({
        description:
          'List of document `id`s that should be included in the search results with their corresponding `position`s.',
      }),
    excludes: z
      .array(CurationExcludeSchema)
      .exactOptional()
      .openapi({
        description: 'List of document `id`s that should be excluded from the search results.',
      }),
    filter_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A filter by clause that is applied to any search query that matches the curation rule.\n',
      }),
    remove_matched_tokens: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          "Indicates whether search query tokens that exist in the curation's rule should be removed from the search query.\n",
      }),
    metadata: z
      .object({})
      .exactOptional()
      .openapi({
        description:
          'Return a custom JSON object in the Search API response, when this rule is triggered. This can can be used to display a pre-defined message (eg: a promotion banner) on the front-end when a particular rule is triggered.\n',
      }),
    sort_by: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A sort by clause that is applied to any search query that matches the curation rule.\n',
      }),
    replace_query: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Replaces the current search query with this value, when the search query matches the curation rule.\n',
      }),
    filter_curated_hits: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to true, the filter conditions of the query is applied to the curated records as well. Default: false.\n',
      }),
    effective_from_ts: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A Unix timestamp that indicates the date/time from which the curation will be active. You can use this to create rules that start applying from a future point in time.\n',
      }),
    effective_to_ts: z
      .int()
      .exactOptional()
      .openapi({
        description:
          'A Unix timestamp that indicates the date/time until which the curation will be active. You can use this to create rules that stop applying after a period of time.\n',
      }),
    stop_processing: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'When set to true, curation processing will stop at the first matching rule. When set to false curation processing will continue and multiple curation actions will be triggered in sequence. Curations are processed in the lexical sort order of their id field.\n',
      }),
    id: z.string().exactOptional().openapi({ description: 'ID of the curation item' }),
  })
  .openapi({ required: ['rule'] })
  .openapi('CurationItemCreateSchema')

const CurationItemSchemaSchema = CurationItemCreateSchemaSchema.and(
  z.object({ id: z.string() }).openapi({ required: ['id'] }),
).openapi('CurationItemSchema')

const CurationSetCreateSchemaSchema = z
  .object({
    items: z
      .array(CurationItemCreateSchemaSchema)
      .openapi({ description: 'Array of curation items' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Optional description for the curation set' }),
  })
  .openapi({ required: ['items'] })
  .openapi('CurationSetCreateSchema')

const CurationSetSchemaSchema = CurationSetCreateSchemaSchema.and(
  z.object({ name: z.string() }).openapi({ required: ['name'] }),
).openapi('CurationSetSchema')

const CurationSetDeleteSchemaSchema = z
  .object({ name: z.string().openapi({ description: 'Name of the deleted curation set' }) })
  .openapi({ required: ['name'] })
  .openapi('CurationSetDeleteSchema')

const CurationItemDeleteSchemaSchema = z
  .object({ id: z.string().openapi({ description: 'ID of the deleted curation item' }) })
  .openapi({ required: ['id'] })
  .openapi('CurationItemDeleteSchema')

const ApiKeyHeaderSecurityScheme = { type: 'apiKey', name: 'X-TYPESENSE-API-KEY', in: 'header' }

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['collections'],
  summary: 'List all collections',
  description:
    'Returns a summary of all your collections. The collections are returned sorted by creation date, with the most recent collections appearing first.',
  operationId: 'getCollections',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['exclude_fields', ['getCollectionsParameters']],
          ['limit', ['getCollectionsParameters']],
          ['offset', ['getCollectionsParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          getCollectionsParameters: z
            .object({
              exclude_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma-separated list of fields from the collection to exclude from the response',
                }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Number of collections to fetch. Default: returns all collections.\n',
                }),
              offset: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Identifies the starting point to return collections when paginating.',
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'getCollectionsParameters',
                in: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    exclude_fields: {
                      description:
                        'Comma-separated list of fields from the collection to exclude from the response',
                      type: 'string',
                    },
                    limit: {
                      description:
                        'Number of collections to fetch. Default: returns all collections.\n',
                      type: 'integer',
                    },
                    offset: {
                      description:
                        'Identifies the starting point to return collections when paginating.',
                      type: 'integer',
                    },
                  },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'List of all collections',
      content: {
        'application/json': {
          schema: z
            .array(CollectionResponseSchema)
            .openapi({ 'x-go-type': '[]*CollectionResponse' }),
        },
      },
    },
  },
})

export const postCollectionsRoute = createRoute({
  method: 'post',
  path: '/collections',
  tags: ['collections'],
  summary: 'Create a new collection',
  description:
    'When a collection is created, we give it a name and describe the fields that will be indexed from the documents added to the collection.',
  operationId: 'createCollection',
  request: {
    body: {
      description: 'The collection object to be created',
      content: { 'application/json': { schema: CollectionSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Collection successfully created',
      content: { 'application/json': { schema: CollectionResponseSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    409: {
      description: 'Collection already exists',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameRoute = createRoute({
  method: 'get',
  path: '/collections/{collectionName}',
  tags: ['collections'],
  summary: 'Retrieve a single collection',
  description: 'Retrieve the details of a collection, given its name.',
  operationId: 'getCollection',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection fetched',
      content: { 'application/json': { schema: CollectionResponseSchema } },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collectionName}',
  tags: ['collections'],
  summary: 'Delete a collection',
  description:
    'Permanently drops a collection. This action cannot be undone. For large collections, this might have an impact on read latencies.',
  operationId: 'deleteCollection',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection deleted',
      content: { 'application/json': { schema: CollectionResponseSchema } },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const patchCollectionsCollectionNameRoute = createRoute({
  method: 'patch',
  path: '/collections/{collectionName}',
  tags: ['collections'],
  summary: 'Update a collection',
  description: "Update a collection's schema to modify the fields and their types.",
  operationId: 'updateCollection',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The document object with fields to be updated',
      content: { 'application/json': { schema: CollectionUpdateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The updated partial collection schema',
      content: { 'application/json': { schema: CollectionUpdateSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'The collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameDocumentsRoute = createRoute({
  method: 'post',
  path: '/collections/{collectionName}/documents',
  tags: ['documents'],
  summary: 'Index a document',
  description:
    'A document to be indexed in a given collection must conform to the schema of the collection.',
  operationId: 'indexDocument',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to add the document to',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      action: IndexActionSchema.openapi({
        param: {
          name: 'action',
          in: 'query',
          description: 'Additional action to perform',
          schema: { type: 'string', example: 'upsert', $ref: '#/components/schemas/IndexAction' },
          required: false,
        },
      }).exactOptional(),
      dirty_values: DirtyValuesSchema.openapi({
        param: {
          name: 'dirty_values',
          in: 'query',
          description: 'Dealing with Dirty Data',
          schema: { $ref: '#/components/schemas/DirtyValues' },
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      description: 'The document object to be indexed',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({ description: 'Can be any key-value pair', 'x-go-type': 'interface{}' }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Document successfully created/indexed',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ description: 'Can be any key-value pair' }),
        },
      },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameDocumentsRoute = createRoute({
  method: 'delete',
  path: '/collections/{collectionName}/documents',
  tags: ['documents'],
  summary: 'Delete a bunch of documents',
  description:
    'Delete a bunch of documents that match a specific filter condition. Use the `batch_size` parameter to control the number of documents that should deleted at a time. A larger value will speed up deletions, but will impact performance of other operations running on the server.',
  operationId: 'deleteDocuments',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to delete documents from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['filter_by', ['deleteDocumentsParameters']],
          ['batch_size', ['deleteDocumentsParameters']],
          ['ignore_not_found', ['deleteDocumentsParameters']],
          ['truncate', ['deleteDocumentsParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          deleteDocumentsParameters: z
            .object({
              filter_by: z
                .string()
                .openapi({ example: 'num_employees:>100 && country: [USA, UK]' }),
              batch_size: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Batch size parameter controls the number of documents that should be deleted at a time. A larger value will speed up deletions, but will impact performance of other operations running on the server.',
                }),
              ignore_not_found: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              truncate: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'When true, removes all documents from the collection while preserving the collection and its schema.',
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'deleteDocumentsParameters',
                in: 'query',
                schema: {
                  type: 'object',
                  required: ['filter_by'],
                  properties: {
                    filter_by: {
                      type: 'string',
                      example: 'num_employees:>100 && country: [USA, UK]',
                    },
                    batch_size: {
                      description:
                        'Batch size parameter controls the number of documents that should be deleted at a time. A larger value will speed up deletions, but will impact performance of other operations running on the server.',
                      type: 'integer',
                    },
                    ignore_not_found: { type: 'boolean' },
                    truncate: {
                      description:
                        'When true, removes all documents from the collection while preserving the collection and its schema.',
                      type: 'boolean',
                    },
                  },
                },
                required: false,
              },
              required: ['filter_by'],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Documents successfully deleted',
      content: {
        'application/json': {
          schema: z.object({ num_deleted: z.int() }).openapi({ required: ['num_deleted'] }),
        },
      },
    },
    404: {
      description: 'Collection not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const patchCollectionsCollectionNameDocumentsRoute = createRoute({
  method: 'patch',
  path: '/collections/{collectionName}/documents',
  tags: ['documents'],
  summary: 'Update documents with conditional query',
  description:
    'The filter_by query parameter is used to filter to specify a condition against which the documents are matched. The request body contains the fields that should be updated for any documents that match the filter condition. This endpoint is only available if the Typesense server is version `0.25.0.rc12` or later.',
  operationId: 'updateDocuments',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to update documents in',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([['filter_by', ['updateDocumentsParameters']]])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          updateDocumentsParameters: z
            .object({
              filter_by: z
                .string()
                .exactOptional()
                .openapi({ example: 'num_employees:>100 && country: [USA, UK]' }),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'updateDocumentsParameters',
                in: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    filter_by: {
                      type: 'string',
                      example: 'num_employees:>100 && country: [USA, UK]',
                    },
                  },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
    body: {
      description: 'The document fields to be updated',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({ description: 'Can be any key-value pair', 'x-go-type': 'interface{}' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'The response contains a single field, `num_updated`, indicating the number of documents affected.',
      content: {
        'application/json': {
          schema: z
            .object({
              num_updated: z
                .int()
                .openapi({
                  description: 'The number of documents that have been updated',
                  example: 1,
                }),
            })
            .openapi({ required: ['num_updated'] }),
        },
      },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'The collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameDocumentsSearchRoute = createRoute({
  method: 'get',
  path: '/collections/{collectionName}/documents/search',
  tags: ['documents'],
  summary: 'Search for documents in a collection',
  description: 'Search for documents in a collection that match the search criteria.',
  operationId: 'searchCollection',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to search for the document under',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['q', ['searchParameters']],
          ['query_by', ['searchParameters']],
          ['validate_field_names', ['searchParameters']],
          ['nl_query', ['searchParameters']],
          ['nl_model_id', ['searchParameters']],
          ['query_by_weights', ['searchParameters']],
          ['text_match_type', ['searchParameters']],
          ['prefix', ['searchParameters']],
          ['infix', ['searchParameters']],
          ['max_extra_prefix', ['searchParameters']],
          ['max_extra_suffix', ['searchParameters']],
          ['filter_by', ['searchParameters']],
          ['enable_lazy_filter', ['searchParameters']],
          ['max_filter_by_candidates', ['searchParameters']],
          ['sort_by', ['searchParameters']],
          ['facet_by', ['searchParameters']],
          ['max_facet_values', ['searchParameters']],
          ['facet_query', ['searchParameters']],
          ['facet_query_num_typos', ['searchParameters']],
          ['num_typos', ['searchParameters']],
          ['page', ['searchParameters']],
          ['per_page', ['searchParameters']],
          ['limit', ['searchParameters']],
          ['offset', ['searchParameters']],
          ['group_by', ['searchParameters']],
          ['group_limit', ['searchParameters']],
          ['group_missing_values', ['searchParameters']],
          ['group_max_candidates', ['searchParameters']],
          ['include_fields', ['searchParameters']],
          ['exclude_fields', ['searchParameters']],
          ['highlight_full_fields', ['searchParameters']],
          ['highlight_affix_num_tokens', ['searchParameters']],
          ['highlight_start_tag', ['searchParameters']],
          ['highlight_end_tag', ['searchParameters']],
          ['enable_highlight_v1', ['searchParameters']],
          ['enable_analytics', ['searchParameters']],
          ['snippet_threshold', ['searchParameters']],
          ['synonym_sets', ['searchParameters']],
          ['drop_tokens_threshold', ['searchParameters']],
          ['drop_tokens_mode', ['searchParameters']],
          ['typo_tokens_threshold', ['searchParameters']],
          ['enable_typos_for_alpha_numerical_tokens', ['searchParameters']],
          ['filter_curated_hits', ['searchParameters']],
          ['enable_synonyms', ['searchParameters']],
          ['synonym_prefix', ['searchParameters']],
          ['demote_synonym_match', ['searchParameters']],
          ['synonym_num_typos', ['searchParameters']],
          ['pinned_hits', ['searchParameters']],
          ['hidden_hits', ['searchParameters']],
          ['curation_tags', ['searchParameters']],
          ['highlight_fields', ['searchParameters']],
          ['rerank_hybrid_matches', ['searchParameters']],
          ['split_join_tokens', ['searchParameters']],
          ['pre_segmented_query', ['searchParameters']],
          ['preset', ['searchParameters']],
          ['enable_curations', ['searchParameters']],
          ['prioritize_exact_match', ['searchParameters']],
          ['max_candidates', ['searchParameters']],
          ['prioritize_token_position', ['searchParameters']],
          ['prioritize_num_matching_fields', ['searchParameters']],
          ['enable_typos_for_numerical_tokens', ['searchParameters']],
          ['exhaustive_search', ['searchParameters']],
          ['search_cutoff_ms', ['searchParameters']],
          ['limit_hits', ['searchParameters']],
          ['use_cache', ['searchParameters']],
          ['cache_ttl', ['searchParameters']],
          ['min_len_1typo', ['searchParameters']],
          ['min_len_2typo', ['searchParameters']],
          ['vector_query', ['searchParameters']],
          ['remote_embedding_timeout_ms', ['searchParameters']],
          ['remote_embedding_num_tries', ['searchParameters']],
          ['facet_strategy', ['searchParameters']],
          ['stopwords', ['searchParameters']],
          ['facet_return_parent', ['searchParameters']],
          ['facet_sample_percent', ['searchParameters']],
          ['facet_sample_threshold', ['searchParameters']],
          ['facet_sample_slope', ['searchParameters']],
          ['voice_query', ['searchParameters']],
          ['conversation', ['searchParameters']],
          ['conversation_model_id', ['searchParameters']],
          ['conversation_id', ['searchParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          searchParameters: z
            .object({
              q: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.',
                }),
              query_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A list of `string` fields that should be queried against. Multiple fields are separated with a comma.',
                }),
              validate_field_names: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.\n',
                }),
              nl_query: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description: 'Whether to use natural language processing to parse the query.',
                }),
              nl_model_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The ID of the natural language model to use.' }),
              query_by_weights: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.',
                }),
              text_match_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.',
                }),
              prefix: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.',
                }),
              infix: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results',
                }),
              max_extra_prefix: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                }),
              max_extra_suffix: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                }),
              filter_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter conditions for refining your open api validator search results. Separate multiple conditions with &&.',
                  example: 'num_employees:>100 && country: [USA, UK]',
                }),
              enable_lazy_filter: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false\n',
                }),
              max_filter_by_candidates: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.',
                }),
              sort_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`',
                  example: 'num_employees:desc',
                }),
              facet_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.',
                }),
              max_facet_values: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'Maximum number of facet values to be returned.' }),
              facet_query: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".',
                }),
              facet_query_num_typos: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description: 'Controls the fuzziness of the facet query filter. Default: 2.\n',
                }),
              num_typos: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The number of typographical errors (1 or 2) that would be tolerated. Default: 2\n',
                }),
              page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description: 'Results from this specific page number would be fetched.',
                }),
              per_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'Number of results to fetch per page. Default: 10' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.\n',
                }),
              offset: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.',
                }),
              group_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.',
                }),
              group_limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3\n',
                }),
              group_missing_values: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true\n',
                }),
              group_max_candidates: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.\n',
                }),
              include_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of fields from the document to include in the search result',
                }),
              exclude_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of fields from the document to exclude in the search result',
                }),
              highlight_full_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'List of fields which should be highlighted fully without snippeting',
                }),
              highlight_affix_num_tokens: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of tokens that should surround the highlighted text on each side. Default: 4\n',
                }),
              highlight_start_tag: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The start tag used for the highlighted snippets. Default: `<mark>`\n',
                }),
              highlight_end_tag: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The end tag used for the highlighted snippets. Default: `</mark>`\n',
                }),
              enable_highlight_v1: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Flag for enabling/disabling the deprecated, old highlight structure in the response. Default: true\n',
                }),
              enable_analytics: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).\n',
                }),
              snippet_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30\n',
                }),
              synonym_sets: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of synonym set names to associate with this search query',
                  example: 'synonym_set_1,synonym_set_2',
                }),
              drop_tokens_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10\n',
                }),
              drop_tokens_mode: DropTokensModeSchema.exactOptional(),
              typo_tokens_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100\n',
                }),
              enable_typos_for_alpha_numerical_tokens: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.\n',
                }),
              filter_curated_hits: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false\n',
                }),
              enable_synonyms: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true\n',
                }),
              synonym_prefix: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Allow synonym resolution on word prefixes in the query. Default: false\n',
                }),
              demote_synonym_match: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false\n',
                }),
              synonym_num_typos: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Allow synonym resolution on typo-corrected words in the query. Default: 0\n',
                }),
              pinned_hits: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                }),
              hidden_hits: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                }),
              curation_tags: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated list of tags to trigger the curations rules that match the tags.',
                }),
              highlight_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A list of custom fields that must be highlighted even if you don't query for them\n",
                }),
              rerank_hybrid_matches: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.\n',
                }),
              split_join_tokens: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Treat space as typo: search for q=basket ball if q=basketball is not found or vice-versa. Splitting/joining of tokens will only be attempted if the original query produces no results. To always trigger this behavior, set value to `always``. To disable, set value to `off`. Default is `fallback`.\n',
                }),
              pre_segmented_query: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.\nSet this parameter to true to do the same\n',
                }),
              preset: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.\n',
                }),
              enable_curations: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false\n',
                }),
              prioritize_exact_match: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Set this parameter to true to ensure that an exact match is ranked above the others\n',
                }),
              max_candidates: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Control the number of words that Typesense considers for typo and prefix searching.\n',
                }),
              prioritize_token_position: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Make Typesense prioritize documents where the query words appear earlier in the text.\n',
                }),
              prioritize_num_matching_fields: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Make Typesense prioritize documents where the query words appear in more number of fields.\n',
                }),
              enable_typos_for_numerical_tokens: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({ description: 'Make Typesense disable typos for numerical tokens.\n' }),
              exhaustive_search: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).\n',
                }),
              search_cutoff_ms: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.\n',
                }),
              limit_hits: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.\n',
                }),
              use_cache: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Enable server side caching of search query results. By default, caching is disabled.\n',
                }),
              cache_ttl: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.\n',
                }),
              min_len_1typo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                }),
              min_len_2typo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                }),
              vector_query: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Vector query expression for fetching documents "closest" to a given query/document vector.\n',
                }),
              remote_embedding_timeout_ms: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description: 'Timeout (in milliseconds) for fetching remote embeddings.\n',
                }),
              remote_embedding_num_tries: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'Number of times to retry fetching remote embeddings.\n' }),
              facet_strategy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).\n',
                }),
              stopwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.\n',
                }),
              facet_return_parent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated string of nested facet fields whose parent object should be returned in facet response.\n',
                }),
              facet_sample_percent: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Percentage of hits that will be used to estimate facet counts. Default: 100.\n',
                }),
              facet_sample_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Minimum number of hits above which the facet counts are sampled. Default: 0.\n',
                }),
              facet_sample_slope: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.\n',
                }),
              voice_query: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The base64 encoded audio file in 16 khz 16-bit WAV format.\n',
                }),
              conversation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable conversational search.\n' }),
              conversation_model_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Id of Conversation Model to be used.\n' }),
              conversation_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.\n',
                }),
            })
            .openapi({
              param: {
                name: 'searchParameters',
                required: true,
                in: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    q: {
                      description:
                        'The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.',
                      type: 'string',
                    },
                    query_by: {
                      description:
                        'A list of `string` fields that should be queried against. Multiple fields are separated with a comma.',
                      type: 'string',
                    },
                    validate_field_names: {
                      description:
                        'Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.\n',
                      type: 'boolean',
                    },
                    nl_query: {
                      description: 'Whether to use natural language processing to parse the query.',
                      type: 'boolean',
                    },
                    nl_model_id: {
                      description: 'The ID of the natural language model to use.',
                      type: 'string',
                    },
                    query_by_weights: {
                      description:
                        'The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.',
                      type: 'string',
                    },
                    text_match_type: {
                      description:
                        'In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.',
                      type: 'string',
                    },
                    prefix: {
                      description:
                        'Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.',
                      type: 'string',
                    },
                    infix: {
                      description:
                        'If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results',
                      type: 'string',
                    },
                    max_extra_prefix: {
                      description:
                        'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                      type: 'integer',
                    },
                    max_extra_suffix: {
                      description:
                        'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                      type: 'integer',
                    },
                    filter_by: {
                      description:
                        'Filter conditions for refining your open api validator search results. Separate multiple conditions with &&.',
                      type: 'string',
                      example: 'num_employees:>100 && country: [USA, UK]',
                    },
                    enable_lazy_filter: {
                      description:
                        'Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false\n',
                      type: 'boolean',
                    },
                    max_filter_by_candidates: {
                      description:
                        'Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.',
                      type: 'integer',
                    },
                    sort_by: {
                      description:
                        'A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`',
                      type: 'string',
                      example: 'num_employees:desc',
                    },
                    facet_by: {
                      description:
                        'A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.',
                      type: 'string',
                    },
                    max_facet_values: {
                      description: 'Maximum number of facet values to be returned.',
                      type: 'integer',
                    },
                    facet_query: {
                      description:
                        'Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".',
                      type: 'string',
                    },
                    facet_query_num_typos: {
                      description:
                        'Controls the fuzziness of the facet query filter. Default: 2.\n',
                      type: 'integer',
                    },
                    num_typos: {
                      description:
                        'The number of typographical errors (1 or 2) that would be tolerated. Default: 2\n',
                      type: 'string',
                    },
                    page: {
                      description: 'Results from this specific page number would be fetched.',
                      type: 'integer',
                    },
                    per_page: {
                      description: 'Number of results to fetch per page. Default: 10',
                      type: 'integer',
                    },
                    limit: {
                      description:
                        'Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.\n',
                      type: 'integer',
                    },
                    offset: {
                      description:
                        'Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.',
                      type: 'integer',
                    },
                    group_by: {
                      description:
                        'You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.',
                      type: 'string',
                    },
                    group_limit: {
                      description:
                        'Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3\n',
                      type: 'integer',
                    },
                    group_missing_values: {
                      description:
                        'Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true\n',
                      type: 'boolean',
                    },
                    group_max_candidates: {
                      description:
                        'Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.\n',
                      type: 'integer',
                    },
                    include_fields: {
                      description:
                        'List of fields from the document to include in the search result',
                      type: 'string',
                    },
                    exclude_fields: {
                      description:
                        'List of fields from the document to exclude in the search result',
                      type: 'string',
                    },
                    highlight_full_fields: {
                      description:
                        'List of fields which should be highlighted fully without snippeting',
                      type: 'string',
                    },
                    highlight_affix_num_tokens: {
                      description:
                        'The number of tokens that should surround the highlighted text on each side. Default: 4\n',
                      type: 'integer',
                    },
                    highlight_start_tag: {
                      description:
                        'The start tag used for the highlighted snippets. Default: `<mark>`\n',
                      type: 'string',
                    },
                    highlight_end_tag: {
                      description:
                        'The end tag used for the highlighted snippets. Default: `</mark>`\n',
                      type: 'string',
                    },
                    enable_highlight_v1: {
                      description:
                        'Flag for enabling/disabling the deprecated, old highlight structure in the response. Default: true\n',
                      type: 'boolean',
                      default: true,
                    },
                    enable_analytics: {
                      description:
                        'Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).\n',
                      type: 'boolean',
                      default: true,
                    },
                    snippet_threshold: {
                      description:
                        'Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30\n',
                      type: 'integer',
                    },
                    synonym_sets: {
                      type: 'string',
                      description: 'List of synonym set names to associate with this search query',
                      example: 'synonym_set_1,synonym_set_2',
                    },
                    drop_tokens_threshold: {
                      description:
                        'If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10\n',
                      type: 'integer',
                    },
                    drop_tokens_mode: { $ref: '#/components/schemas/DropTokensMode' },
                    typo_tokens_threshold: {
                      description:
                        'If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100\n',
                      type: 'integer',
                    },
                    enable_typos_for_alpha_numerical_tokens: {
                      type: 'boolean',
                      description:
                        'Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.\n',
                    },
                    filter_curated_hits: {
                      type: 'boolean',
                      description:
                        'Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false\n',
                    },
                    enable_synonyms: {
                      type: 'boolean',
                      description:
                        'If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true\n',
                    },
                    synonym_prefix: {
                      type: 'boolean',
                      description:
                        'Allow synonym resolution on word prefixes in the query. Default: false\n',
                    },
                    demote_synonym_match: {
                      type: 'boolean',
                      description:
                        'When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false\n',
                    },
                    synonym_num_typos: {
                      type: 'integer',
                      description:
                        'Allow synonym resolution on typo-corrected words in the query. Default: 0\n',
                    },
                    pinned_hits: {
                      description:
                        "A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                      type: 'string',
                    },
                    hidden_hits: {
                      description:
                        "A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                      type: 'string',
                    },
                    curation_tags: {
                      description:
                        'Comma separated list of tags to trigger the curations rules that match the tags.',
                      type: 'string',
                    },
                    highlight_fields: {
                      description:
                        "A list of custom fields that must be highlighted even if you don't query for them\n",
                      type: 'string',
                    },
                    rerank_hybrid_matches: {
                      type: 'boolean',
                      description:
                        'When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.\n',
                      default: false,
                    },
                    split_join_tokens: {
                      description:
                        'Treat space as typo: search for q=basket ball if q=basketball is not found or vice-versa. Splitting/joining of tokens will only be attempted if the original query produces no results. To always trigger this behavior, set value to `always``. To disable, set value to `off`. Default is `fallback`.\n',
                      type: 'string',
                    },
                    pre_segmented_query: {
                      description:
                        'You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.\nSet this parameter to true to do the same\n',
                      type: 'boolean',
                    },
                    preset: {
                      description:
                        'Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.\n',
                      type: 'string',
                    },
                    enable_curations: {
                      description:
                        'If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false\n',
                      type: 'boolean',
                      default: false,
                    },
                    prioritize_exact_match: {
                      description:
                        'Set this parameter to true to ensure that an exact match is ranked above the others\n',
                      type: 'boolean',
                      default: true,
                    },
                    max_candidates: {
                      description:
                        'Control the number of words that Typesense considers for typo and prefix searching.\n',
                      type: 'integer',
                    },
                    prioritize_token_position: {
                      description:
                        'Make Typesense prioritize documents where the query words appear earlier in the text.\n',
                      type: 'boolean',
                      default: false,
                    },
                    prioritize_num_matching_fields: {
                      description:
                        'Make Typesense prioritize documents where the query words appear in more number of fields.\n',
                      type: 'boolean',
                      default: true,
                    },
                    enable_typos_for_numerical_tokens: {
                      description: 'Make Typesense disable typos for numerical tokens.\n',
                      type: 'boolean',
                      default: true,
                    },
                    exhaustive_search: {
                      description:
                        'Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).\n',
                      type: 'boolean',
                    },
                    search_cutoff_ms: {
                      description:
                        'Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.\n',
                      type: 'integer',
                    },
                    limit_hits: {
                      description:
                        'Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.\n',
                      type: 'integer',
                    },
                    use_cache: {
                      description:
                        'Enable server side caching of search query results. By default, caching is disabled.\n',
                      type: 'boolean',
                    },
                    cache_ttl: {
                      description:
                        'The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.\n',
                      type: 'integer',
                    },
                    min_len_1typo: {
                      description:
                        'Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                      type: 'integer',
                    },
                    min_len_2typo: {
                      description:
                        'Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                      type: 'integer',
                    },
                    vector_query: {
                      description:
                        'Vector query expression for fetching documents "closest" to a given query/document vector.\n',
                      type: 'string',
                    },
                    remote_embedding_timeout_ms: {
                      description: 'Timeout (in milliseconds) for fetching remote embeddings.\n',
                      type: 'integer',
                    },
                    remote_embedding_num_tries: {
                      description: 'Number of times to retry fetching remote embeddings.\n',
                      type: 'integer',
                    },
                    facet_strategy: {
                      description:
                        'Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).\n',
                      type: 'string',
                    },
                    stopwords: {
                      description:
                        'Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.\n',
                      type: 'string',
                    },
                    facet_return_parent: {
                      description:
                        'Comma separated string of nested facet fields whose parent object should be returned in facet response.\n',
                      type: 'string',
                    },
                    facet_sample_percent: {
                      description:
                        'Percentage of hits that will be used to estimate facet counts. Default: 100.\n',
                      type: 'integer',
                    },
                    facet_sample_threshold: {
                      description:
                        'Minimum number of hits above which the facet counts are sampled. Default: 0.\n',
                      type: 'integer',
                    },
                    facet_sample_slope: {
                      description:
                        'Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.\n',
                      type: 'number',
                    },
                    voice_query: {
                      description: 'The base64 encoded audio file in 16 khz 16-bit WAV format.\n',
                      type: 'string',
                    },
                    conversation: {
                      description: 'Enable conversational search.\n',
                      type: 'boolean',
                    },
                    conversation_model_id: {
                      description: 'The Id of Conversation Model to be used.\n',
                      type: 'string',
                    },
                    conversation_id: {
                      description:
                        'The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.\n',
                      type: 'string',
                    },
                  },
                },
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Search results',
      content: { 'application/json': { schema: SearchResultSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'The collection or field was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getSynonymSetsRoute = createRoute({
  method: 'get',
  path: '/synonym_sets',
  tags: ['synonyms'],
  summary: 'List all synonym sets',
  description: 'Retrieve all synonym sets',
  operationId: 'retrieveSynonymSets',
  responses: {
    200: {
      description: 'List of all synonym sets',
      content: { 'application/json': { schema: z.array(SynonymSetSchemaSchema) } },
    },
  },
})

export const getSynonymSetsSynonymSetNameRoute = createRoute({
  method: 'get',
  path: '/synonym_sets/{synonymSetName}',
  tags: ['synonyms'],
  summary: 'Retrieve a synonym set',
  description: 'Retrieve a specific synonym set by its name',
  operationId: 'retrieveSynonymSet',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Synonym set fetched',
      content: { 'application/json': { schema: SynonymSetSchemaSchema } },
    },
    404: {
      description: 'Synonym set not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putSynonymSetsSynonymSetNameRoute = createRoute({
  method: 'put',
  path: '/synonym_sets/{synonymSetName}',
  tags: ['synonyms'],
  summary: 'Create or update a synonym set',
  description: 'Create or update a synonym set with the given name',
  operationId: 'upsertSynonymSet',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set to create/update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The synonym set to be created/updated',
      content: { 'application/json': { schema: SynonymSetCreateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Synonym set successfully created/updated',
      content: { 'application/json': { schema: SynonymSetSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteSynonymSetsSynonymSetNameRoute = createRoute({
  method: 'delete',
  path: '/synonym_sets/{synonymSetName}',
  tags: ['synonyms'],
  summary: 'Delete a synonym set',
  description: 'Delete a specific synonym set by its name',
  operationId: 'deleteSynonymSet',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Synonym set successfully deleted',
      content: { 'application/json': { schema: SynonymSetDeleteSchemaSchema } },
    },
    404: {
      description: 'Synonym set not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getSynonymSetsSynonymSetNameItemsRoute = createRoute({
  method: 'get',
  path: '/synonym_sets/{synonymSetName}/items',
  tags: ['synonyms'],
  summary: 'List items in a synonym set',
  description: 'Retrieve all synonym items in a set',
  operationId: 'retrieveSynonymSetItems',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set to retrieve items for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of synonym items',
      content: { 'application/json': { schema: z.array(SynonymItemSchemaSchema) } },
    },
    404: {
      description: 'Synonym set not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getSynonymSetsSynonymSetNameItemsItemIdRoute = createRoute({
  method: 'get',
  path: '/synonym_sets/{synonymSetName}/items/{itemId}',
  tags: ['synonyms'],
  summary: 'Retrieve a synonym set item',
  description: 'Retrieve a specific synonym item by its id',
  operationId: 'retrieveSynonymSetItem',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The id of the synonym item to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Synonym item fetched',
      content: { 'application/json': { schema: SynonymItemSchemaSchema } },
    },
    404: {
      description: 'Synonym item not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putSynonymSetsSynonymSetNameItemsItemIdRoute = createRoute({
  method: 'put',
  path: '/synonym_sets/{synonymSetName}/items/{itemId}',
  tags: ['synonyms'],
  summary: 'Create or update a synonym set item',
  description: 'Create or update a synonym set item with the given id',
  operationId: 'upsertSynonymSetItem',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The id of the synonym item to upsert',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The synonym item to be created/updated',
      content: { 'application/json': { schema: SynonymItemUpsertSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Synonym item successfully created/updated',
      content: { 'application/json': { schema: SynonymItemSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteSynonymSetsSynonymSetNameItemsItemIdRoute = createRoute({
  method: 'delete',
  path: '/synonym_sets/{synonymSetName}/items/{itemId}',
  tags: ['synonyms'],
  summary: 'Delete a synonym set item',
  description: 'Delete a specific synonym item by its id',
  operationId: 'deleteSynonymSetItem',
  request: {
    params: z.object({
      synonymSetName: z
        .string()
        .openapi({
          param: {
            name: 'synonymSetName',
            in: 'path',
            description: 'The name of the synonym set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The id of the synonym item to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Synonym item successfully deleted',
      content: { 'application/json': { schema: SynonymItemDeleteSchemaSchema } },
    },
    404: {
      description: 'Synonym item not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCurationSetsRoute = createRoute({
  method: 'get',
  path: '/curation_sets',
  tags: ['curation_sets'],
  summary: 'List all curation sets',
  description: 'Retrieve all curation sets',
  operationId: 'retrieveCurationSets',
  responses: {
    200: {
      description: 'List of all curation sets',
      content: { 'application/json': { schema: z.array(CurationSetSchemaSchema) } },
    },
  },
})

export const getCurationSetsCurationSetNameRoute = createRoute({
  method: 'get',
  path: '/curation_sets/{curationSetName}',
  tags: ['curation_sets'],
  summary: 'Retrieve a curation set',
  description: 'Retrieve a specific curation set by its name',
  operationId: 'retrieveCurationSet',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Curation set fetched',
      content: { 'application/json': { schema: CurationSetSchemaSchema } },
    },
    404: {
      description: 'Curation set not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putCurationSetsCurationSetNameRoute = createRoute({
  method: 'put',
  path: '/curation_sets/{curationSetName}',
  tags: ['curation_sets'],
  summary: 'Create or update a curation set',
  description: 'Create or update a curation set with the given name',
  operationId: 'upsertCurationSet',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set to create/update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The curation set to be created/updated',
      content: { 'application/json': { schema: CurationSetCreateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Curation set successfully created/updated',
      content: { 'application/json': { schema: CurationSetSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteCurationSetsCurationSetNameRoute = createRoute({
  method: 'delete',
  path: '/curation_sets/{curationSetName}',
  tags: ['curation_sets'],
  summary: 'Delete a curation set',
  description: 'Delete a specific curation set by its name',
  operationId: 'deleteCurationSet',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Curation set successfully deleted',
      content: { 'application/json': { schema: CurationSetDeleteSchemaSchema } },
    },
    404: {
      description: 'Curation set not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCurationSetsCurationSetNameItemsRoute = createRoute({
  method: 'get',
  path: '/curation_sets/{curationSetName}/items',
  tags: ['curation_sets'],
  summary: 'List items in a curation set',
  description: 'Retrieve all curation items in a set',
  operationId: 'retrieveCurationSetItems',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set to retrieve items for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'List of curation items',
      content: { 'application/json': { schema: z.array(CurationItemSchemaSchema) } },
    },
    404: {
      description: 'Curation set not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCurationSetsCurationSetNameItemsItemIdRoute = createRoute({
  method: 'get',
  path: '/curation_sets/{curationSetName}/items/{itemId}',
  tags: ['curation_sets'],
  summary: 'Retrieve a curation set item',
  description: 'Retrieve a specific curation item by its id',
  operationId: 'retrieveCurationSetItem',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The id of the curation item to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Curation item fetched',
      content: { 'application/json': { schema: CurationItemSchemaSchema } },
    },
    404: {
      description: 'Curation item not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putCurationSetsCurationSetNameItemsItemIdRoute = createRoute({
  method: 'put',
  path: '/curation_sets/{curationSetName}/items/{itemId}',
  tags: ['curation_sets'],
  summary: 'Create or update a curation set item',
  description: 'Create or update a curation set item with the given id',
  operationId: 'upsertCurationSetItem',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The id of the curation item to upsert',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The curation item to be created/updated',
      content: { 'application/json': { schema: CurationItemCreateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Curation item successfully created/updated',
      content: { 'application/json': { schema: CurationItemSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteCurationSetsCurationSetNameItemsItemIdRoute = createRoute({
  method: 'delete',
  path: '/curation_sets/{curationSetName}/items/{itemId}',
  tags: ['curation_sets'],
  summary: 'Delete a curation set item',
  description: 'Delete a specific curation item by its id',
  operationId: 'deleteCurationSetItem',
  request: {
    params: z.object({
      curationSetName: z
        .string()
        .openapi({
          param: {
            name: 'curationSetName',
            in: 'path',
            description: 'The name of the curation set',
            required: true,
            schema: { type: 'string' },
          },
        }),
      itemId: z
        .string()
        .openapi({
          param: {
            name: 'itemId',
            in: 'path',
            description: 'The id of the curation item to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Curation item successfully deleted',
      content: { 'application/json': { schema: CurationItemDeleteSchemaSchema } },
    },
    404: {
      description: 'Curation item not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameDocumentsExportRoute = createRoute({
  method: 'get',
  path: '/collections/{collectionName}/documents/export',
  tags: ['documents'],
  summary: 'Export all documents in a collection',
  description: 'Export all documents in a collection in JSON lines format.',
  operationId: 'exportDocuments',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['filter_by', ['exportDocumentsParameters']],
          ['include_fields', ['exportDocumentsParameters']],
          ['exclude_fields', ['exportDocumentsParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          exportDocumentsParameters: z
            .object({
              filter_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter conditions for refining your search results. Separate multiple conditions with &&.',
                }),
              include_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of fields from the document to include in the search result',
                }),
              exclude_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of fields from the document to exclude in the search result',
                }),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'exportDocumentsParameters',
                in: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    filter_by: {
                      description:
                        'Filter conditions for refining your search results. Separate multiple conditions with &&.',
                      type: 'string',
                    },
                    include_fields: {
                      description:
                        'List of fields from the document to include in the search result',
                      type: 'string',
                    },
                    exclude_fields: {
                      description:
                        'List of fields from the document to exclude in the search result',
                      type: 'string',
                    },
                  },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
  },
  responses: {
    200: {
      description: 'Exports all the documents in a given collection.',
      content: {
        'application/octet-stream': {
          schema: z
            .string()
            .openapi({
              example:
                '{"id": "124", "company_name": "Stark Industries", "num_employees": 5215, "country": "US"}\n{"id": "125", "company_name": "Future Technology", "num_employees": 1232,"country": "UK"}\n{"id": "126", "company_name": "Random Corp.", "num_employees": 531,"country": "AU"}\n',
            }),
        },
      },
    },
    404: {
      description: 'The collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameDocumentsImportRoute = createRoute({
  method: 'post',
  path: '/collections/{collectionName}/documents/import',
  tags: ['documents'],
  summary: 'Import documents into a collection',
  description:
    'The documents to be imported must be formatted in a newline delimited JSON structure. You can feed the output file from a Typesense export operation directly as import.',
  operationId: 'importDocuments',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['batch_size', ['importDocumentsParameters']],
          ['return_id', ['importDocumentsParameters']],
          ['remote_embedding_batch_size', ['importDocumentsParameters']],
          ['return_doc', ['importDocumentsParameters']],
          ['action', ['importDocumentsParameters']],
          ['dirty_values', ['importDocumentsParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          importDocumentsParameters: z
            .object({
              batch_size: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              return_id: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    "Returning the id of the imported documents. If you want the import response to return the ingested document's id in the response, you can use the return_id parameter.",
                }),
              remote_embedding_batch_size: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional(),
              return_doc: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional(),
              action: IndexActionSchema.exactOptional(),
              dirty_values: DirtyValuesSchema.exactOptional(),
            })
            .exactOptional()
            .openapi({
              param: {
                name: 'importDocumentsParameters',
                in: 'query',
                schema: {
                  type: 'object',
                  properties: {
                    batch_size: { type: 'integer' },
                    return_id: {
                      type: 'boolean',
                      description:
                        "Returning the id of the imported documents. If you want the import response to return the ingested document's id in the response, you can use the return_id parameter.",
                    },
                    remote_embedding_batch_size: { type: 'integer' },
                    return_doc: { type: 'boolean' },
                    action: { $ref: '#/components/schemas/IndexAction' },
                    dirty_values: { $ref: '#/components/schemas/DirtyValues' },
                  },
                },
                required: false,
              },
              required: [],
            }),
        }),
      ),
    body: {
      description: 'The json array of documents or the JSONL file to import',
      content: {
        'application/octet-stream': {
          schema: z.string().openapi({ description: 'The JSONL file to import' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Result of the import operation. Each line of the response indicates the result of each document present in the request body (in the same order). If the import of a single document fails, it does not affect the other documents. If there is a failure, the response line will include a corresponding error message and as well as the actual document content.',
      content: {
        'application/octet-stream': {
          schema: z
            .string()
            .openapi({
              example:
                '{"success": true}\n{"success": false, "error": "Bad JSON.", "document": "[bad doc"}\n',
            }),
        },
      },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'The collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/collections/{collectionName}/documents/{documentId}',
  tags: ['documents'],
  summary: 'Retrieve a document',
  description: 'Fetch an individual document from a collection by using its ID.',
  operationId: 'getDocument',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to search for the document under',
            required: true,
            schema: { type: 'string' },
          },
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            in: 'path',
            description: 'The Document ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The document referenced by the ID',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ description: 'Can be any key-value pair' }),
        },
      },
    },
    404: {
      description: 'The document or collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/collections/{collectionName}/documents/{documentId}',
  tags: ['documents'],
  summary: 'Delete a document',
  description: 'Delete an individual document from a collection by using its ID.',
  operationId: 'deleteDocument',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to search for the document under',
            required: true,
            schema: { type: 'string' },
          },
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            in: 'path',
            description: 'The Document ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The document referenced by the ID was deleted',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ description: 'Can be any key-value pair' }),
        },
      },
    },
    404: {
      description: 'The document or collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const patchCollectionsCollectionNameDocumentsDocumentIdRoute = createRoute({
  method: 'patch',
  path: '/collections/{collectionName}/documents/{documentId}',
  tags: ['documents'],
  summary: 'Update a document',
  description:
    'Update an individual document from a collection by using its ID. The update can be partial.',
  operationId: 'updateDocument',
  request: {
    params: z.object({
      collectionName: z
        .string()
        .openapi({
          param: {
            name: 'collectionName',
            in: 'path',
            description: 'The name of the collection to search for the document under',
            required: true,
            schema: { type: 'string' },
          },
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            in: 'path',
            description: 'The Document ID',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      dirty_values: DirtyValuesSchema.openapi({
        param: {
          name: 'dirty_values',
          in: 'query',
          description: 'Dealing with Dirty Data',
          schema: { $ref: '#/components/schemas/DirtyValues' },
          required: false,
        },
      }).exactOptional(),
    }),
    body: {
      description: 'The document object with fields to be updated',
      content: {
        'application/json': {
          schema: z
            .object({})
            .openapi({ description: 'Can be any key-value pair', 'x-go-type': 'interface{}' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The document referenced by the ID was updated',
      content: {
        'application/json': {
          schema: z.object({}).openapi({ description: 'Can be any key-value pair' }),
        },
      },
    },
    404: {
      description: 'The document or collection was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getConversationsModelsRoute = createRoute({
  method: 'get',
  path: '/conversations/models',
  tags: ['conversations'],
  summary: 'List all conversation models',
  description: 'Retrieve all conversation models',
  operationId: 'retrieveAllConversationModels',
  responses: {
    200: {
      description: 'List of all conversation models',
      content: {
        'application/json': {
          schema: z
            .array(ConversationModelSchemaSchema)
            .openapi({ 'x-go-type': '[]*ConversationModelSchema' }),
        },
      },
    },
  },
})

export const postConversationsModelsRoute = createRoute({
  method: 'post',
  path: '/conversations/models',
  tags: ['conversations'],
  summary: 'Create a conversation model',
  description: 'Create a Conversation Model',
  operationId: 'createConversationModel',
  request: {
    body: {
      content: { 'application/json': { schema: ConversationModelCreateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'Created Conversation Model',
      content: { 'application/json': { schema: ConversationModelSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getConversationsModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/conversations/models/{modelId}',
  tags: ['conversations'],
  summary: 'Retrieve a conversation model',
  description: 'Retrieve a conversation model',
  operationId: 'retrieveConversationModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            description: 'The id of the conversation model to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'A conversation model',
      content: { 'application/json': { schema: ConversationModelSchemaSchema } },
    },
  },
})

export const putConversationsModelsModelIdRoute = createRoute({
  method: 'put',
  path: '/conversations/models/{modelId}',
  tags: ['conversations'],
  summary: 'Update a conversation model',
  description: 'Update a conversation model',
  operationId: 'updateConversationModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            description: 'The id of the conversation model to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ConversationModelUpdateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The conversation model was successfully updated',
      content: { 'application/json': { schema: ConversationModelSchemaSchema } },
    },
  },
})

export const deleteConversationsModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/conversations/models/{modelId}',
  tags: ['conversations'],
  summary: 'Delete a conversation model',
  description: 'Delete a conversation model',
  operationId: 'deleteConversationModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            description: 'The id of the conversation model to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The conversation model was successfully deleted',
      content: { 'application/json': { schema: ConversationModelSchemaSchema } },
    },
  },
})

export const getKeysRoute = createRoute({
  method: 'get',
  path: '/keys',
  tags: ['keys'],
  summary: 'Retrieve (metadata about) all keys.',
  operationId: 'getKeys',
  responses: {
    200: {
      description: 'List of all keys',
      content: { 'application/json': { schema: ApiKeysResponseSchema } },
    },
  },
})

export const postKeysRoute = createRoute({
  method: 'post',
  path: '/keys',
  tags: ['keys'],
  summary: 'Create an API Key',
  description:
    'Create an API Key with fine-grain access control. You can restrict access on both a per-collection and per-action level. The generated key is returned only during creation. You want to store this key carefully in a secure place.',
  operationId: 'createKey',
  request: {
    body: {
      description: 'The object that describes API key scope',
      content: { 'application/json': { schema: ApiKeySchemaSchema } },
    },
  },
  responses: {
    201: {
      description: 'Created API key',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    409: {
      description: 'API key generation conflict',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getKeysKeyIdRoute = createRoute({
  method: 'get',
  path: '/keys/{keyId}',
  tags: ['keys'],
  summary: 'Retrieve (metadata about) a key',
  description:
    'Retrieve (metadata about) a key. Only the key prefix is returned when you retrieve a key. Due to security reasons, only the create endpoint returns the full API key.',
  operationId: 'getKey',
  request: {
    params: z.object({
      keyId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            description: 'The ID of the key to retrieve',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The key referenced by the ID',
      content: { 'application/json': { schema: ApiKeySchema } },
    },
    404: {
      description: 'The key was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteKeysKeyIdRoute = createRoute({
  method: 'delete',
  path: '/keys/{keyId}',
  tags: ['keys'],
  summary: 'Delete an API key given its ID.',
  operationId: 'deleteKey',
  request: {
    params: z.object({
      keyId: z
        .preprocess((val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        }, z.int64())
        .openapi({
          param: {
            name: 'keyId',
            in: 'path',
            description: 'The ID of the key to delete',
            required: true,
            schema: { type: 'integer', format: 'int64' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The key referenced by the ID',
      content: { 'application/json': { schema: ApiKeyDeleteResponseSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'Key not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getAliasesRoute = createRoute({
  method: 'get',
  path: '/aliases',
  tags: ['collections'],
  summary: 'List all aliases',
  description: 'List all aliases and the corresponding collections that they map to.',
  operationId: 'getAliases',
  responses: {
    200: {
      description: 'List of all collection aliases',
      content: { 'application/json': { schema: CollectionAliasesResponseSchema } },
    },
  },
})

export const getAliasesAliasNameRoute = createRoute({
  method: 'get',
  path: '/aliases/{aliasName}',
  tags: ['collections'],
  summary: 'Retrieve an alias',
  description: 'Find out which collection an alias points to by fetching it',
  operationId: 'getAlias',
  request: {
    params: z.object({
      aliasName: z
        .string()
        .openapi({
          param: {
            name: 'aliasName',
            in: 'path',
            description: 'The name of the alias to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection alias fetched',
      content: { 'application/json': { schema: CollectionAliasSchema } },
    },
    404: {
      description: 'The alias was not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putAliasesAliasNameRoute = createRoute({
  method: 'put',
  path: '/aliases/{aliasName}',
  tags: ['collections'],
  summary: 'Create or update a collection alias',
  description:
    "Create or update a collection alias. An alias is a virtual collection name that points to a real collection. If you're familiar with symbolic links on Linux, it's very similar to that. Aliases are useful when you want to reindex your data in the background on a new collection and switch your application to it without any changes to your code.",
  operationId: 'upsertAlias',
  request: {
    params: z.object({
      aliasName: z
        .string()
        .openapi({
          param: {
            name: 'aliasName',
            in: 'path',
            description: 'The name of the alias to create/update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Collection alias to be created/updated',
      content: { 'application/json': { schema: CollectionAliasSchemaSchema } },
    },
  },
  responses: {
    200: {
      description: 'The collection alias was created/updated',
      content: { 'application/json': { schema: CollectionAliasSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'Alias not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteAliasesAliasNameRoute = createRoute({
  method: 'delete',
  path: '/aliases/{aliasName}',
  tags: ['collections'],
  summary: 'Delete an alias',
  operationId: 'deleteAlias',
  request: {
    params: z.object({
      aliasName: z
        .string()
        .openapi({
          param: {
            name: 'aliasName',
            in: 'path',
            description: 'The name of the alias to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection alias was deleted',
      content: { 'application/json': { schema: CollectionAliasSchema } },
    },
    404: {
      description: 'Alias not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getDebugRoute = createRoute({
  method: 'get',
  path: '/debug',
  tags: ['debug'],
  summary: 'Print debugging information',
  description: 'Print debugging information',
  operationId: 'debug',
  responses: {
    200: {
      description: 'Debugging information',
      content: {
        'application/json': {
          schema: z.object({ version: z.string().exactOptional() }).openapi({ required: [] }),
        },
      },
    },
  },
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['health'],
  summary: 'Checks if Typesense server is ready to accept requests.',
  description: 'Checks if Typesense server is ready to accept requests.',
  operationId: 'health',
  responses: {
    200: {
      description: 'Search service is ready for requests.',
      content: { 'application/json': { schema: HealthStatusSchema } },
    },
  },
})

export const getOperationsSchemaChangesRoute = createRoute({
  method: 'get',
  path: '/operations/schema_changes',
  tags: ['operations'],
  summary: 'Get the status of in-progress schema change operations',
  description:
    'Returns the status of any ongoing schema change operations. If no schema changes are in progress, returns an empty response.',
  operationId: 'getSchemaChanges',
  responses: {
    200: {
      description: 'List of schema changes in progress',
      content: { 'application/json': { schema: z.array(SchemaChangeStatusSchema) } },
    },
  },
})

export const postOperationsSnapshotRoute = createRoute({
  method: 'post',
  path: '/operations/snapshot',
  tags: ['operations'],
  summary:
    "Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory.",
  description:
    "Creates a point-in-time snapshot of a Typesense node's state and data in the specified directory. You can then backup the snapshot directory that gets created and later restore it as a data directory, as needed.",
  operationId: 'takeSnapshot',
  request: {
    query: z.object({
      snapshot_path: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_path',
            in: 'query',
            description: 'The directory on the server where the snapshot should be saved.',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    201: {
      description: 'Snapshot is created.',
      content: { 'application/json': { schema: SuccessStatusSchema } },
    },
  },
})

export const postOperationsVoteRoute = createRoute({
  method: 'post',
  path: '/operations/vote',
  tags: ['operations'],
  summary:
    'Triggers a follower node to initiate the raft voting process, which triggers leader re-election.',
  description:
    'Triggers a follower node to initiate the raft voting process, which triggers leader re-election. The follower node that you run this operation against will become the new leader, once this command succeeds.',
  operationId: 'vote',
  responses: {
    200: {
      description: 'Re-election is performed.',
      content: { 'application/json': { schema: SuccessStatusSchema } },
    },
  },
})

export const postOperationsCacheClearRoute = createRoute({
  method: 'post',
  path: '/operations/cache/clear',
  tags: ['operations'],
  summary: 'Clear the cached responses of search requests in the LRU cache.',
  description:
    'Clear the cached responses of search requests that are sent with `use_cache` parameter in the LRU cache.',
  operationId: 'clearCache',
  responses: {
    200: {
      description: 'Clear cache succeeded.',
      content: { 'application/json': { schema: SuccessStatusSchema } },
    },
  },
})

export const postOperationsDbCompactRoute = createRoute({
  method: 'post',
  path: '/operations/db/compact',
  tags: ['operations'],
  summary: 'Compacting the on-disk database',
  description:
    'Typesense uses RocksDB to store your documents on the disk. If you do frequent writes or updates, you could benefit from running a compaction of the underlying RocksDB database. This could reduce the size of the database and decrease read latency. While the database will not block during this operation, we recommend running it during off-peak hours.',
  operationId: 'compactDb',
  responses: {
    200: {
      description: 'Compacting the on-disk database succeeded.',
      content: { 'application/json': { schema: SuccessStatusSchema } },
    },
  },
})

export const postConfigRoute = createRoute({
  method: 'post',
  path: '/config',
  tags: ['operations'],
  summary: 'Toggle Slow Request Log',
  description:
    'Enable logging of requests that take over a defined threshold of time. Default is `-1` which disables slow request logging. Slow requests are logged to the primary log file, with the prefix SLOW REQUEST.',
  operationId: 'toggleSlowRequestLog',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ 'log-slow-requests-time-ms': z.int() })
            .openapi({
              required: ['log-slow-requests-time-ms'],
              example: '{"log-slow-requests-time-ms": 2000}\n',
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Toggle Slow Request Log database succeeded.',
      content: { 'application/json': { schema: SuccessStatusSchema } },
    },
  },
})

export const postMultiSearchRoute = createRoute({
  method: 'post',
  path: '/multi_search',
  tags: ['documents'],
  summary: 'send multiple search requests in a single HTTP request',
  description:
    'This is especially useful to avoid round-trip network latencies incurred otherwise if each of these requests are sent in separate HTTP requests. You can also use this feature to do a federated search across multiple collections in a single HTTP request.',
  operationId: 'multiSearch',
  request: {
    query: z
      .looseObject({})
      .transform((val) => {
        const rest: [string, unknown][] = []
        const groups = new Map<string, Record<string, unknown>>()
        const group = (name: string) => {
          const found = groups.get(name)
          if (found !== undefined) return found
          const made: Record<string, unknown> = Object.create(null)
          groups.set(name, made)
          return made
        }
        const spread = new Map<string, string[]>([
          ['q', ['multiSearchParameters']],
          ['query_by', ['multiSearchParameters']],
          ['query_by_weights', ['multiSearchParameters']],
          ['text_match_type', ['multiSearchParameters']],
          ['prefix', ['multiSearchParameters']],
          ['infix', ['multiSearchParameters']],
          ['max_extra_prefix', ['multiSearchParameters']],
          ['max_extra_suffix', ['multiSearchParameters']],
          ['filter_by', ['multiSearchParameters']],
          ['enable_lazy_filter', ['multiSearchParameters']],
          ['max_filter_by_candidates', ['multiSearchParameters']],
          ['sort_by', ['multiSearchParameters']],
          ['facet_by', ['multiSearchParameters']],
          ['max_facet_values', ['multiSearchParameters']],
          ['facet_query', ['multiSearchParameters']],
          ['facet_query_num_typos', ['multiSearchParameters']],
          ['num_typos', ['multiSearchParameters']],
          ['page', ['multiSearchParameters']],
          ['per_page', ['multiSearchParameters']],
          ['limit', ['multiSearchParameters']],
          ['offset', ['multiSearchParameters']],
          ['group_by', ['multiSearchParameters']],
          ['group_limit', ['multiSearchParameters']],
          ['group_missing_values', ['multiSearchParameters']],
          ['group_max_candidates', ['multiSearchParameters']],
          ['include_fields', ['multiSearchParameters']],
          ['exclude_fields', ['multiSearchParameters']],
          ['highlight_full_fields', ['multiSearchParameters']],
          ['highlight_affix_num_tokens', ['multiSearchParameters']],
          ['highlight_start_tag', ['multiSearchParameters']],
          ['highlight_end_tag', ['multiSearchParameters']],
          ['snippet_threshold', ['multiSearchParameters']],
          ['drop_tokens_threshold', ['multiSearchParameters']],
          ['drop_tokens_mode', ['multiSearchParameters']],
          ['typo_tokens_threshold', ['multiSearchParameters']],
          ['enable_typos_for_alpha_numerical_tokens', ['multiSearchParameters']],
          ['filter_curated_hits', ['multiSearchParameters']],
          ['enable_synonyms', ['multiSearchParameters']],
          ['enable_analytics', ['multiSearchParameters']],
          ['synonym_prefix', ['multiSearchParameters']],
          ['demote_synonym_match', ['multiSearchParameters']],
          ['synonym_num_typos', ['multiSearchParameters']],
          ['pinned_hits', ['multiSearchParameters']],
          ['hidden_hits', ['multiSearchParameters']],
          ['curation_tags', ['multiSearchParameters']],
          ['highlight_fields', ['multiSearchParameters']],
          ['rerank_hybrid_matches', ['multiSearchParameters']],
          ['pre_segmented_query', ['multiSearchParameters']],
          ['preset', ['multiSearchParameters']],
          ['enable_curations', ['multiSearchParameters']],
          ['prioritize_exact_match', ['multiSearchParameters']],
          ['prioritize_token_position', ['multiSearchParameters']],
          ['prioritize_num_matching_fields', ['multiSearchParameters']],
          ['enable_typos_for_numerical_tokens', ['multiSearchParameters']],
          ['exhaustive_search', ['multiSearchParameters']],
          ['search_cutoff_ms', ['multiSearchParameters']],
          ['limit_hits', ['multiSearchParameters']],
          ['use_cache', ['multiSearchParameters']],
          ['cache_ttl', ['multiSearchParameters']],
          ['min_len_1typo', ['multiSearchParameters']],
          ['min_len_2typo', ['multiSearchParameters']],
          ['vector_query', ['multiSearchParameters']],
          ['remote_embedding_timeout_ms', ['multiSearchParameters']],
          ['remote_embedding_num_tries', ['multiSearchParameters']],
          ['facet_strategy', ['multiSearchParameters']],
          ['stopwords', ['multiSearchParameters']],
          ['facet_return_parent', ['multiSearchParameters']],
          ['facet_sample_percent', ['multiSearchParameters']],
          ['facet_sample_threshold', ['multiSearchParameters']],
          ['facet_sample_slope', ['multiSearchParameters']],
          ['voice_query', ['multiSearchParameters']],
          ['conversation', ['multiSearchParameters']],
          ['conversation_model_id', ['multiSearchParameters']],
          ['conversation_id', ['multiSearchParameters']],
          ['validate_field_names', ['multiSearchParameters']],
        ])
        for (const [key, item] of Object.entries(val)) {
          const owners = spread.get(key)
          if (owners !== undefined) {
            for (const owner of owners) {
              group(owner)[key] = item
            }
            continue
          }
          rest.push([key, item])
        }
        return Object.fromEntries([...rest, ...groups])
      })
      .pipe(
        z.object({
          multiSearchParameters: z
            .object({
              q: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.',
                }),
              query_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A list of `string` fields that should be queried against. Multiple fields are separated with a comma.',
                }),
              query_by_weights: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.',
                }),
              text_match_type: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.',
                }),
              prefix: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.',
                }),
              infix: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results',
                }),
              max_extra_prefix: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                }),
              max_extra_suffix: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                }),
              filter_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Filter conditions for refining youropen api validator search results. Separate multiple conditions with &&.',
                  example: 'num_employees:>100 && country: [USA, UK]',
                }),
              enable_lazy_filter: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false\n',
                }),
              max_filter_by_candidates: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.',
                }),
              sort_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`',
                }),
              facet_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.',
                }),
              max_facet_values: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'Maximum number of facet values to be returned.' }),
              facet_query: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".',
                }),
              facet_query_num_typos: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description: 'Controls the fuzziness of the facet query filter. Default: 2.\n',
                }),
              num_typos: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The number of typographical errors (1 or 2) that would be tolerated. Default: 2\n',
                }),
              page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description: 'Results from this specific page number would be fetched.',
                }),
              per_page: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'Number of results to fetch per page. Default: 10' }),
              limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.\n',
                }),
              offset: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.',
                }),
              group_by: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.',
                }),
              group_limit: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3\n',
                }),
              group_missing_values: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true\n',
                }),
              group_max_candidates: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.\n',
                }),
              include_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of fields from the document to include in the search result',
                }),
              exclude_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'List of fields from the document to exclude in the search result',
                }),
              highlight_full_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'List of fields which should be highlighted fully without snippeting',
                }),
              highlight_affix_num_tokens: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The number of tokens that should surround the highlighted text on each side. Default: 4\n',
                }),
              highlight_start_tag: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The start tag used for the highlighted snippets. Default: `<mark>`\n',
                }),
              highlight_end_tag: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The end tag used for the highlighted snippets. Default: `</mark>`\n',
                }),
              snippet_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30\n',
                }),
              drop_tokens_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10\n',
                }),
              drop_tokens_mode: DropTokensModeSchema.exactOptional(),
              typo_tokens_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100\n',
                }),
              enable_typos_for_alpha_numerical_tokens: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.\n',
                }),
              filter_curated_hits: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false\n',
                }),
              enable_synonyms: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true\n',
                }),
              enable_analytics: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).\n',
                }),
              synonym_prefix: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Allow synonym resolution on word prefixes in the query. Default: false\n',
                }),
              demote_synonym_match: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false\n',
                }),
              synonym_num_typos: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Allow synonym resolution on typo-corrected words in the query. Default: 0\n',
                }),
              pinned_hits: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                }),
              hidden_hits: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                }),
              curation_tags: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated list of tags to trigger the curations rules that match the tags.',
                }),
              highlight_fields: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    "A list of custom fields that must be highlighted even if you don't query for them\n",
                }),
              rerank_hybrid_matches: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.\n',
                }),
              pre_segmented_query: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.\nSet this parameter to true to do the same\n',
                }),
              preset: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.\n',
                }),
              enable_curations: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false\n',
                }),
              prioritize_exact_match: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Set this parameter to true to ensure that an exact match is ranked above the others\n',
                }),
              prioritize_token_position: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(false)
                .exactOptional()
                .openapi({
                  description:
                    'Make Typesense prioritize documents where the query words appear earlier in the text.\n',
                }),
              prioritize_num_matching_fields: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({
                  description:
                    'Make Typesense prioritize documents where the query words appear in more number of fields.\n',
                }),
              enable_typos_for_numerical_tokens: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .default(true)
                .exactOptional()
                .openapi({ description: 'Make Typesense disable typos for numerical tokens.\n' }),
              exhaustive_search: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).\n',
                }),
              search_cutoff_ms: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.\n',
                }),
              limit_hits: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.\n',
                }),
              use_cache: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Enable server side caching of search query results. By default, caching is disabled.\n',
                }),
              cache_ttl: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.\n',
                }),
              min_len_1typo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                }),
              min_len_2typo: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                }),
              vector_query: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Vector query expression for fetching documents "closest" to a given query/document vector.\n',
                }),
              remote_embedding_timeout_ms: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description: 'Timeout (in milliseconds) for fetching remote embeddings.\n',
                }),
              remote_embedding_num_tries: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({ description: 'Number of times to retry fetching remote embeddings.\n' }),
              facet_strategy: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).\n',
                }),
              stopwords: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.\n',
                }),
              facet_return_parent: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'Comma separated string of nested facet fields whose parent object should be returned in facet response.\n',
                }),
              facet_sample_percent: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Percentage of hits that will be used to estimate facet counts. Default: 100.\n',
                }),
              facet_sample_threshold: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.int(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Minimum number of hits above which the facet counts are sampled. Default: 0.\n',
                }),
              facet_sample_slope: z
                .preprocess(
                  (val) =>
                    typeof val === 'string' &&
                    /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                    (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                      ? Number(val)
                      : val,
                  z.number(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.\n',
                }),
              voice_query: z
                .string()
                .exactOptional()
                .openapi({
                  description: 'The base64 encoded audio file in 16 khz 16-bit WAV format.\n',
                }),
              conversation: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({ description: 'Enable conversational search.\n' }),
              conversation_model_id: z
                .string()
                .exactOptional()
                .openapi({ description: 'The Id of Conversation Model to be used.\n' }),
              conversation_id: z
                .string()
                .exactOptional()
                .openapi({
                  description:
                    'The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.\n',
                }),
              validate_field_names: z
                .preprocess(
                  ((read) => (val: unknown) => {
                    const result = read.safeParse(val)
                    return result.success ? result.data : val
                  })(z.stringbool()),
                  z.boolean(),
                )
                .exactOptional()
                .openapi({
                  description:
                    'Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.\n',
                }),
            })
            .openapi({
              param: {
                name: 'multiSearchParameters',
                required: true,
                in: 'query',
                schema: {
                  description: 'Parameters for the multi search API.\n',
                  type: 'object',
                  properties: {
                    q: {
                      description:
                        'The query text to search for in the collection. Use * as the search string to return all documents. This is typically useful when used in conjunction with filter_by.',
                      type: 'string',
                    },
                    query_by: {
                      description:
                        'A list of `string` fields that should be queried against. Multiple fields are separated with a comma.',
                      type: 'string',
                    },
                    query_by_weights: {
                      description:
                        'The relative weight to give each `query_by` field when ranking results. This can be used to boost fields in priority, when looking for matches. Multiple fields are separated with a comma.',
                      type: 'string',
                    },
                    text_match_type: {
                      description:
                        'In a multi-field matching context, this parameter determines how the representative text match score of a record is calculated. Possible values are max_score (default) or max_weight.',
                      type: 'string',
                    },
                    prefix: {
                      description:
                        'Boolean field to indicate that the last word in the query should be treated as a prefix, and not as a whole word. This is used for building autocomplete and instant search interfaces. Defaults to true.',
                      type: 'string',
                    },
                    infix: {
                      description:
                        'If infix index is enabled for this field, infix searching can be done on a per-field basis by sending a comma separated string parameter called infix to the search query. This parameter can have 3 values; `off` infix search is disabled, which is default `always` infix search is performed along with regular search `fallback` infix search is performed if regular search does not produce results',
                      type: 'string',
                    },
                    max_extra_prefix: {
                      description:
                        'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                      type: 'integer',
                    },
                    max_extra_suffix: {
                      description:
                        'There are also 2 parameters that allow you to control the extent of infix searching max_extra_prefix and max_extra_suffix which specify the maximum number of symbols before or after the query that can be present in the token. For example query "K2100" has 2 extra symbols in "6PK2100". By default, any number of prefixes/suffixes can be present for a match.',
                      type: 'integer',
                    },
                    filter_by: {
                      description:
                        'Filter conditions for refining youropen api validator search results. Separate multiple conditions with &&.',
                      type: 'string',
                      example: 'num_employees:>100 && country: [USA, UK]',
                    },
                    enable_lazy_filter: {
                      description:
                        'Applies the filtering operation incrementally / lazily. Set this to true when you are potentially filtering on large values but the tokens in the query are expected to match very few documents. Default: false\n',
                      type: 'boolean',
                    },
                    max_filter_by_candidates: {
                      description:
                        'Controls the number of similar words that Typesense considers during fuzzy search on filter_by values. Useful for controlling prefix matches like company_name:Acm*.',
                      type: 'integer',
                    },
                    sort_by: {
                      description:
                        'A list of numerical fields and their corresponding sort orders that will be used for ordering your results. Up to 3 sort fields can be specified. The text similarity score is exposed as a special `_text_match` field that you can use in the list of sorting fields. If no `sort_by` parameter is specified, results are sorted by `_text_match:desc,default_sorting_field:desc`',
                      type: 'string',
                    },
                    facet_by: {
                      description:
                        'A list of fields that will be used for faceting your results on. Separate multiple fields with a comma.',
                      type: 'string',
                    },
                    max_facet_values: {
                      description: 'Maximum number of facet values to be returned.',
                      type: 'integer',
                    },
                    facet_query: {
                      description:
                        'Facet values that are returned can now be filtered via this parameter. The matching facet text is also highlighted. For example, when faceting by `category`, you can set `facet_query=category:shoe` to return only facet values that contain the prefix "shoe".',
                      type: 'string',
                    },
                    facet_query_num_typos: {
                      description:
                        'Controls the fuzziness of the facet query filter. Default: 2.\n',
                      type: 'integer',
                    },
                    num_typos: {
                      description:
                        'The number of typographical errors (1 or 2) that would be tolerated. Default: 2\n',
                      type: 'string',
                    },
                    page: {
                      description: 'Results from this specific page number would be fetched.',
                      type: 'integer',
                    },
                    per_page: {
                      description: 'Number of results to fetch per page. Default: 10',
                      type: 'integer',
                    },
                    limit: {
                      description:
                        'Number of hits to fetch. Can be used as an alternative to the per_page parameter. Default: 10.\n',
                      type: 'integer',
                    },
                    offset: {
                      description:
                        'Identifies the starting point to return hits from a result set. Can be used as an alternative to the page parameter.',
                      type: 'integer',
                    },
                    group_by: {
                      description:
                        'You can aggregate search results into groups or buckets by specify one or more `group_by` fields. Separate multiple fields with a comma. To group on a particular field, it must be a faceted field.',
                      type: 'string',
                    },
                    group_limit: {
                      description:
                        'Maximum number of hits to be returned for every group. If the `group_limit` is set as `K` then only the top K hits in each group are returned in the response. Default: 3\n',
                      type: 'integer',
                    },
                    group_missing_values: {
                      description:
                        'Setting this parameter to true will place all documents that have a null value in the group_by field, into a single group. Setting this parameter to false, will cause each document with a null value in the group_by field to not be grouped with other documents. Default: true\n',
                      type: 'boolean',
                    },
                    group_max_candidates: {
                      description:
                        'Overrides the behavior of group_by queries where found value is an approximation. When group_max_candidates is passed, found will be accurate up until its value.\n',
                      type: 'integer',
                    },
                    include_fields: {
                      description:
                        'List of fields from the document to include in the search result',
                      type: 'string',
                    },
                    exclude_fields: {
                      description:
                        'List of fields from the document to exclude in the search result',
                      type: 'string',
                    },
                    highlight_full_fields: {
                      description:
                        'List of fields which should be highlighted fully without snippeting',
                      type: 'string',
                    },
                    highlight_affix_num_tokens: {
                      description:
                        'The number of tokens that should surround the highlighted text on each side. Default: 4\n',
                      type: 'integer',
                    },
                    highlight_start_tag: {
                      description:
                        'The start tag used for the highlighted snippets. Default: `<mark>`\n',
                      type: 'string',
                    },
                    highlight_end_tag: {
                      description:
                        'The end tag used for the highlighted snippets. Default: `</mark>`\n',
                      type: 'string',
                    },
                    snippet_threshold: {
                      description:
                        'Field values under this length will be fully highlighted, instead of showing a snippet of relevant portion. Default: 30\n',
                      type: 'integer',
                    },
                    drop_tokens_threshold: {
                      description:
                        'If the number of results found for a specific query is less than this number, Typesense will attempt to drop the tokens in the query until enough results are found. Tokens that have the least individual hits are dropped first. Set to 0 to disable. Default: 10\n',
                      type: 'integer',
                    },
                    drop_tokens_mode: { $ref: '#/components/schemas/DropTokensMode' },
                    typo_tokens_threshold: {
                      description:
                        'If the number of results found for a specific query is less than this number, Typesense will attempt to look for tokens with more typos until enough results are found. Default: 100\n',
                      type: 'integer',
                    },
                    enable_typos_for_alpha_numerical_tokens: {
                      type: 'boolean',
                      description:
                        'Set this parameter to false to disable typos on alphanumerical query tokens. Default: true.\n',
                    },
                    filter_curated_hits: {
                      type: 'boolean',
                      description:
                        'Whether the filter_by condition of the search query should be applicable to curated results (curation definitions, pinned hits, hidden hits, etc.). Default: false\n',
                    },
                    enable_synonyms: {
                      type: 'boolean',
                      description:
                        'If you have some synonyms defined but want to disable all of them for a particular search query, set enable_synonyms to false. Default: true\n',
                    },
                    enable_analytics: {
                      description:
                        'Flag for enabling/disabling analytics aggregation for specific search queries (for e.g. those originating from a test script).\n',
                      type: 'boolean',
                      default: true,
                    },
                    synonym_prefix: {
                      type: 'boolean',
                      description:
                        'Allow synonym resolution on word prefixes in the query. Default: false\n',
                    },
                    demote_synonym_match: {
                      type: 'boolean',
                      description:
                        'When set to true, search results that matched via synonyms will be demoted in ranking, appearing below results that have a direct match. Default: false\n',
                    },
                    synonym_num_typos: {
                      type: 'integer',
                      description:
                        'Allow synonym resolution on typo-corrected words in the query. Default: 0\n',
                    },
                    pinned_hits: {
                      description:
                        "A list of records to unconditionally include in the search results at specific positions. An example use case would be to feature or promote certain items on the top of search results. A list of `record_id:hit_position`. Eg: to include a record with ID 123 at Position 1 and another record with ID 456 at Position 5, you'd specify `123:1,456:5`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                      type: 'string',
                    },
                    hidden_hits: {
                      description:
                        "A list of records to unconditionally hide from search results. A list of `record_id`s to hide. Eg: to hide records with IDs 123 and 456, you'd specify `123,456`.\nYou could also use the Curation feature to override search results based on rules. Curations are applied first, followed by `pinned_hits` and finally `hidden_hits`.\n",
                      type: 'string',
                    },
                    curation_tags: {
                      description:
                        'Comma separated list of tags to trigger the curations rules that match the tags.',
                      type: 'string',
                    },
                    highlight_fields: {
                      description:
                        "A list of custom fields that must be highlighted even if you don't query for them\n",
                      type: 'string',
                    },
                    rerank_hybrid_matches: {
                      type: 'boolean',
                      description:
                        'When true, computes both text match and vector distance scores for all matches in hybrid search. Documents found only through keyword search will get a vector distance score, and documents found only through vector search will get a text match score.\n',
                      default: false,
                    },
                    pre_segmented_query: {
                      description:
                        'You can index content from any logographic language into Typesense if you are able to segment / split the text into space-separated words yourself before indexing and querying.\nSet this parameter to true to do the same\n',
                      type: 'boolean',
                      default: false,
                    },
                    preset: {
                      description:
                        'Search using a bunch of search parameters by setting this parameter to the name of the existing Preset.\n',
                      type: 'string',
                    },
                    enable_curations: {
                      description:
                        'If you have some curation sets defined but want to disable all of them during query time, you can do that by setting this parameter to false\n',
                      type: 'boolean',
                      default: false,
                    },
                    prioritize_exact_match: {
                      description:
                        'Set this parameter to true to ensure that an exact match is ranked above the others\n',
                      type: 'boolean',
                      default: true,
                    },
                    prioritize_token_position: {
                      description:
                        'Make Typesense prioritize documents where the query words appear earlier in the text.\n',
                      type: 'boolean',
                      default: false,
                    },
                    prioritize_num_matching_fields: {
                      description:
                        'Make Typesense prioritize documents where the query words appear in more number of fields.\n',
                      type: 'boolean',
                      default: true,
                    },
                    enable_typos_for_numerical_tokens: {
                      description: 'Make Typesense disable typos for numerical tokens.\n',
                      type: 'boolean',
                      default: true,
                    },
                    exhaustive_search: {
                      description:
                        'Setting this to true will make Typesense consider all prefixes and typo corrections of the words in the query without stopping early when enough results are found (drop_tokens_threshold and typo_tokens_threshold configurations are ignored).\n',
                      type: 'boolean',
                    },
                    search_cutoff_ms: {
                      description:
                        'Typesense will attempt to return results early if the cutoff time has elapsed. This is not a strict guarantee and facet computation is not bound by this parameter.\n',
                      type: 'integer',
                    },
                    limit_hits: {
                      description:
                        'Maximum number of hits that can be fetched from the collection. page * per_page should be less than this number for the search request to return results.\n',
                      type: 'integer',
                    },
                    use_cache: {
                      description:
                        'Enable server side caching of search query results. By default, caching is disabled.\n',
                      type: 'boolean',
                    },
                    cache_ttl: {
                      description:
                        'The duration (in seconds) that determines how long the search query is cached. This value can be set on a per-query basis. Default: 60.\n',
                      type: 'integer',
                    },
                    min_len_1typo: {
                      description:
                        'Minimum word length for 1-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                      type: 'integer',
                    },
                    min_len_2typo: {
                      description:
                        'Minimum word length for 2-typo correction to be applied. The value of num_typos is still treated as the maximum allowed typos.\n',
                      type: 'integer',
                    },
                    vector_query: {
                      description:
                        'Vector query expression for fetching documents "closest" to a given query/document vector.\n',
                      type: 'string',
                    },
                    remote_embedding_timeout_ms: {
                      description: 'Timeout (in milliseconds) for fetching remote embeddings.\n',
                      type: 'integer',
                    },
                    remote_embedding_num_tries: {
                      description: 'Number of times to retry fetching remote embeddings.\n',
                      type: 'integer',
                    },
                    facet_strategy: {
                      description:
                        'Choose the underlying faceting strategy used. Comma separated string of allows values: exhaustive, top_values or automatic (default).\n',
                      type: 'string',
                    },
                    stopwords: {
                      description:
                        'Name of the stopwords set to apply for this search, the keywords present in the set will be removed from the search query.\n',
                      type: 'string',
                    },
                    facet_return_parent: {
                      description:
                        'Comma separated string of nested facet fields whose parent object should be returned in facet response.\n',
                      type: 'string',
                    },
                    facet_sample_percent: {
                      description:
                        'Percentage of hits that will be used to estimate facet counts. Default: 100.\n',
                      type: 'integer',
                    },
                    facet_sample_threshold: {
                      description:
                        'Minimum number of hits above which the facet counts are sampled. Default: 0.\n',
                      type: 'integer',
                    },
                    facet_sample_slope: {
                      description:
                        'Controls how steeply facet_sample_percent falls as the collection grows. facet_sample_threshold should be non-zero for facet_sample_slope to be effective. Default: 0.\n',
                      type: 'number',
                    },
                    voice_query: {
                      description: 'The base64 encoded audio file in 16 khz 16-bit WAV format.\n',
                      type: 'string',
                    },
                    conversation: {
                      description: 'Enable conversational search.\n',
                      type: 'boolean',
                    },
                    conversation_model_id: {
                      description: 'The Id of Conversation Model to be used.\n',
                      type: 'string',
                    },
                    conversation_id: {
                      description:
                        'The Id of a previous conversation to continue, this tells Typesense to include prior context when communicating with the LLM.\n',
                      type: 'string',
                    },
                    validate_field_names: {
                      description:
                        'Controls whether Typesense should validate if the fields exist in the schema. When set to false, Typesense will not throw an error if a field is missing. This is useful for programmatic grouping where not all fields may exist.\n',
                      type: 'boolean',
                    },
                  },
                },
              },
              description: 'Parameters for the multi search API.\n',
              required: [],
            }),
        }),
      ),
    body: { content: { 'application/json': { schema: MultiSearchSearchesParameterSchema } } },
  },
  responses: {
    200: {
      description: 'Search results',
      content: { 'application/json': { schema: MultiSearchResultSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getAnalyticsEventsRoute = createRoute({
  method: 'get',
  path: '/analytics/events',
  tags: ['analytics'],
  summary: 'Retrieve analytics events',
  description: 'Retrieve the most recent events for a user and rule.',
  operationId: 'getAnalyticsEvents',
  request: {
    query: z.object({
      user_id: z
        .string()
        .openapi({
          param: { name: 'user_id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      name: z
        .string()
        .openapi({
          param: {
            name: 'name',
            in: 'query',
            description: 'Analytics rule name',
            required: true,
            schema: { type: 'string' },
          },
        }),
      n: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .openapi({
          param: {
            name: 'n',
            in: 'query',
            description: 'Number of events to return (max 1000)',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Events fetched',
      content: { 'application/json': { schema: AnalyticsEventsResponseSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postAnalyticsEventsRoute = createRoute({
  method: 'post',
  path: '/analytics/events',
  tags: ['analytics'],
  summary: 'Create an analytics event',
  description:
    'Submit a single analytics event. The event must correspond to an existing analytics rule by name.',
  operationId: 'createAnalyticsEvent',
  request: {
    body: {
      description: 'The analytics event to be created',
      content: { 'application/json': { schema: AnalyticsEventSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Analytics event successfully created',
      content: { 'application/json': { schema: AnalyticsEventCreateResponseSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postAnalyticsFlushRoute = createRoute({
  method: 'post',
  path: '/analytics/flush',
  tags: ['analytics'],
  summary: 'Flush in-memory analytics to disk',
  description: 'Triggers a flush of analytics data to persistent storage.',
  operationId: 'flushAnalytics',
  responses: {
    200: {
      description: 'Flush triggered',
      content: { 'application/json': { schema: AnalyticsEventCreateResponseSchema } },
    },
  },
})

export const getAnalyticsStatusRoute = createRoute({
  method: 'get',
  path: '/analytics/status',
  tags: ['analytics'],
  summary: 'Get analytics subsystem status',
  description: 'Returns sizes of internal analytics buffers and queues.',
  operationId: 'getAnalyticsStatus',
  responses: {
    200: {
      description: 'Status fetched',
      content: { 'application/json': { schema: AnalyticsStatusSchema } },
    },
  },
})

export const getAnalyticsRulesRoute = createRoute({
  method: 'get',
  path: '/analytics/rules',
  tags: ['analytics'],
  summary: 'Retrieve analytics rules',
  description:
    'Retrieve all analytics rules. Use the optional rule_tag filter to narrow down results.',
  operationId: 'retrieveAnalyticsRules',
  request: {
    query: z.object({
      rule_tag: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'rule_tag',
            schema: { type: 'string' },
            required: false,
            description: 'Filter rules by rule_tag',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Analytics rules fetched',
      content: { 'application/json': { schema: z.array(AnalyticsRuleSchema) } },
    },
  },
})

export const postAnalyticsRulesRoute = createRoute({
  method: 'post',
  path: '/analytics/rules',
  tags: ['analytics'],
  summary: 'Create analytics rule(s)',
  description:
    'Create one or more analytics rules. You can send a single rule object or an array of rule objects.',
  operationId: 'createAnalyticsRule',
  request: {
    body: {
      description: 'The analytics rule(s) to be created',
      content: {
        'application/json': {
          schema: z.xor([AnalyticsRuleCreateSchema, z.array(AnalyticsRuleCreateSchema)]),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Analytics rule(s) successfully created',
      content: {
        'application/json': {
          schema: z.xor([
            AnalyticsRuleSchema,
            z.array(
              z.xor([
                AnalyticsRuleSchema,
                z.object({ error: z.string().exactOptional() }).openapi({ required: [] }),
              ]),
            ),
          ]),
        },
      },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getAnalyticsRulesRuleNameRoute = createRoute({
  method: 'get',
  path: '/analytics/rules/{ruleName}',
  tags: ['analytics'],
  summary: 'Retrieves an analytics rule',
  description: "Retrieve the details of an analytics rule, given it's name",
  operationId: 'retrieveAnalyticsRule',
  request: {
    params: z.object({
      ruleName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleName',
            description: 'The name of the analytics rule to retrieve',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Analytics rule fetched',
      content: { 'application/json': { schema: AnalyticsRuleSchema } },
    },
    404: {
      description: 'Analytics rule not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putAnalyticsRulesRuleNameRoute = createRoute({
  method: 'put',
  path: '/analytics/rules/{ruleName}',
  tags: ['analytics'],
  summary: 'Upserts an analytics rule',
  description: 'Upserts an analytics rule with the given name.',
  operationId: 'upsertAnalyticsRule',
  request: {
    params: z.object({
      ruleName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleName',
            description: 'The name of the analytics rule to upsert',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
    body: {
      description: 'The Analytics rule to be upserted',
      content: { 'application/json': { schema: AnalyticsRuleUpdateSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Analytics rule successfully upserted',
      content: { 'application/json': { schema: AnalyticsRuleSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteAnalyticsRulesRuleNameRoute = createRoute({
  method: 'delete',
  path: '/analytics/rules/{ruleName}',
  tags: ['analytics'],
  summary: 'Delete an analytics rule',
  description: "Permanently deletes an analytics rule, given it's name",
  operationId: 'deleteAnalyticsRule',
  request: {
    params: z.object({
      ruleName: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'ruleName',
            description: 'The name of the analytics rule to delete',
            schema: { type: 'string' },
            required: true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Analytics rule deleted',
      content: { 'application/json': { schema: AnalyticsRuleSchema } },
    },
    404: {
      description: 'Analytics rule not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getMetricsJsonRoute = createRoute({
  method: 'get',
  path: '/metrics.json',
  tags: ['operations'],
  summary: 'Get current RAM, CPU, Disk & Network usage metrics.',
  description: 'Retrieve the metrics.',
  operationId: 'retrieveMetrics',
  responses: {
    200: {
      description: 'Metrics fetched.',
      content: { 'application/json': { schema: z.object({}) } },
    },
  },
})

export const getStatsJsonRoute = createRoute({
  method: 'get',
  path: '/stats.json',
  tags: ['operations'],
  summary: 'Get stats about API endpoints.',
  description: 'Retrieve the stats about API endpoints.',
  operationId: 'retrieveAPIStats',
  responses: {
    200: {
      description: 'Stats fetched.',
      content: { 'application/json': { schema: APIStatsResponseSchema } },
    },
  },
})

export const getStopwordsRoute = createRoute({
  method: 'get',
  path: '/stopwords',
  tags: ['stopwords'],
  summary: 'Retrieves all stopwords sets.',
  description: 'Retrieve the details of all stopwords sets',
  operationId: 'retrieveStopwordsSets',
  responses: {
    200: {
      description: 'Stopwords sets fetched.',
      content: { 'application/json': { schema: StopwordsSetsRetrieveAllSchemaSchema } },
    },
  },
})

export const getStopwordsSetIdRoute = createRoute({
  method: 'get',
  path: '/stopwords/{setId}',
  tags: ['stopwords'],
  summary: 'Retrieves a stopwords set.',
  description: "Retrieve the details of a stopwords set, given it's name.",
  operationId: 'retrieveStopwordsSet',
  request: {
    params: z.object({
      setId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'setId',
            description: 'The ID of the stopwords set to retrieve.',
            schema: { type: 'string' },
            required: true,
            example: 'countries',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Stopwords set fetched.',
      content: { 'application/json': { schema: StopwordsSetRetrieveSchemaSchema } },
    },
    404: {
      description: 'Stopwords set not found.',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putStopwordsSetIdRoute = createRoute({
  method: 'put',
  path: '/stopwords/{setId}',
  tags: ['stopwords'],
  summary: 'Upserts a stopwords set.',
  description:
    'When an analytics rule is created, we give it a name and describe the type, the source collections and the destination collection.',
  operationId: 'upsertStopwordsSet',
  request: {
    params: z.object({
      setId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'setId',
            description: 'The ID of the stopwords set to upsert.',
            schema: { type: 'string' },
            required: true,
            example: 'countries',
          },
        }),
    }),
    body: {
      description: 'The stopwords set to upsert.',
      content: { 'application/json': { schema: StopwordsSetUpsertSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Stopwords set successfully upserted.',
      content: { 'application/json': { schema: StopwordsSetSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details.',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteStopwordsSetIdRoute = createRoute({
  method: 'delete',
  path: '/stopwords/{setId}',
  tags: ['stopwords'],
  summary: 'Delete a stopwords set.',
  description: "Permanently deletes a stopwords set, given it's name.",
  operationId: 'deleteStopwordsSet',
  request: {
    params: z.object({
      setId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'setId',
            description: 'The ID of the stopwords set to delete.',
            schema: { type: 'string' },
            required: true,
            example: 'countries',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Stopwords set rule deleted.',
      content: {
        'application/json': {
          schema: z
            .object({ id: z.string() })
            .openapi({ required: ['id'], example: '{"id": "countries"}\n' }),
        },
      },
    },
    404: {
      description: 'Stopwords set not found.',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getPresetsRoute = createRoute({
  method: 'get',
  path: '/presets',
  tags: ['presets'],
  summary: 'Retrieves all presets.',
  description: 'Retrieve the details of all presets',
  operationId: 'retrieveAllPresets',
  responses: {
    200: {
      description: 'Presets fetched.',
      content: { 'application/json': { schema: PresetsRetrieveSchemaSchema } },
    },
  },
})

export const getPresetsPresetIdRoute = createRoute({
  method: 'get',
  path: '/presets/{presetId}',
  tags: ['presets'],
  summary: 'Retrieves a preset.',
  description: "Retrieve the details of a preset, given it's name.",
  operationId: 'retrievePreset',
  request: {
    params: z.object({
      presetId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'presetId',
            description: 'The ID of the preset to retrieve.',
            schema: { type: 'string' },
            required: true,
            example: 'listing_view',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preset fetched.',
      content: { 'application/json': { schema: PresetSchemaSchema } },
    },
    404: {
      description: 'Preset not found.',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putPresetsPresetIdRoute = createRoute({
  method: 'put',
  path: '/presets/{presetId}',
  tags: ['presets'],
  summary: 'Upserts a preset.',
  description: 'Create or update an existing preset.',
  operationId: 'upsertPreset',
  request: {
    params: z.object({
      presetId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'presetId',
            description: 'The name of the preset set to upsert.',
            schema: { type: 'string' },
            required: true,
            example: 'listing_view',
          },
        }),
    }),
    body: {
      description: 'The stopwords set to upsert.',
      content: { 'application/json': { schema: PresetUpsertSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Preset successfully upserted.',
      content: { 'application/json': { schema: PresetSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deletePresetsPresetIdRoute = createRoute({
  method: 'delete',
  path: '/presets/{presetId}',
  tags: ['presets'],
  summary: 'Delete a preset.',
  description: "Permanently deletes a preset, given it's name.",
  operationId: 'deletePreset',
  request: {
    params: z.object({
      presetId: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'presetId',
            description: 'The ID of the preset to delete.',
            schema: { type: 'string' },
            required: true,
            example: 'listing_view',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Preset deleted.',
      content: { 'application/json': { schema: PresetDeleteSchemaSchema } },
    },
    404: {
      description: 'Preset not found.',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getStemmingDictionariesRoute = createRoute({
  method: 'get',
  path: '/stemming/dictionaries',
  tags: ['stemming'],
  summary: 'List all stemming dictionaries',
  description: 'Retrieve a list of all available stemming dictionaries.',
  operationId: 'listStemmingDictionaries',
  responses: {
    200: {
      description: 'List of all dictionaries',
      content: {
        'application/json': {
          schema: z
            .object({
              dictionaries: z
                .array(z.string())
                .exactOptional()
                .openapi({ example: ['irregular-plurals', 'company-terms'] }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
})

export const getStemmingDictionariesDictionaryIdRoute = createRoute({
  method: 'get',
  path: '/stemming/dictionaries/{dictionaryId}',
  tags: ['stemming'],
  summary: 'Retrieve a stemming dictionary',
  description: 'Fetch details of a specific stemming dictionary.',
  operationId: 'getStemmingDictionary',
  request: {
    params: z.object({
      dictionaryId: z
        .string()
        .openapi({
          param: {
            name: 'dictionaryId',
            in: 'path',
            description: 'The ID of the dictionary to retrieve',
            required: true,
            schema: { type: 'string' },
            example: 'irregular-plurals',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Stemming dictionary details',
      content: { 'application/json': { schema: StemmingDictionarySchema } },
    },
    404: {
      description: 'Dictionary not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const postStemmingDictionariesImportRoute = createRoute({
  method: 'post',
  path: '/stemming/dictionaries/import',
  tags: ['stemming'],
  summary: 'Import a stemming dictionary',
  description:
    'Upload a JSONL file containing word mappings to create or update a stemming dictionary.',
  operationId: 'importStemmingDictionary',
  request: {
    query: z.object({
      id: z
        .string()
        .openapi({
          param: {
            name: 'id',
            in: 'query',
            description: 'The ID to assign to the dictionary',
            required: true,
            schema: { type: 'string' },
            example: 'irregular-plurals',
          },
        }),
    }),
    body: {
      description: 'The JSONL file containing word mappings',
      content: {
        'application/json': {
          schema: z
            .string()
            .openapi({
              example:
                '{"word": "people", "root": "person"}\n{"word": "children", "root": "child"}\n',
            }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Dictionary successfully imported',
      content: {
        'application/octet-stream': {
          schema: z
            .string()
            .openapi({
              example:
                '{"word": "people", "root": "person"} {"word": "children", "root": "child"}\n',
            }),
        },
      },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getNlSearchModelsRoute = createRoute({
  method: 'get',
  path: '/nl_search_models',
  tags: ['nl_search_models'],
  summary: 'List all NL search models',
  description: 'Retrieve all NL search models.',
  operationId: 'retrieveAllNLSearchModels',
  responses: {
    200: {
      description: 'List of all NL search models',
      content: { 'application/json': { schema: z.array(NLSearchModelSchemaSchema) } },
    },
  },
})

export const postNlSearchModelsRoute = createRoute({
  method: 'post',
  path: '/nl_search_models',
  tags: ['nl_search_models'],
  summary: 'Create a NL search model',
  description: 'Create a new NL search model.',
  operationId: 'createNLSearchModel',
  request: {
    body: {
      description: 'The NL search model to be created',
      content: { 'application/json': { schema: NLSearchModelCreateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    201: {
      description: 'NL search model successfully created',
      content: { 'application/json': { schema: NLSearchModelSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const getNlSearchModelsModelIdRoute = createRoute({
  method: 'get',
  path: '/nl_search_models/{modelId}',
  tags: ['nl_search_models'],
  summary: 'Retrieve a NL search model',
  description: 'Retrieve a specific NL search model by its ID.',
  operationId: 'retrieveNLSearchModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            description: 'The ID of the NL search model to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'NL search model fetched',
      content: { 'application/json': { schema: NLSearchModelSchemaSchema } },
    },
    404: {
      description: 'NL search model not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const putNlSearchModelsModelIdRoute = createRoute({
  method: 'put',
  path: '/nl_search_models/{modelId}',
  tags: ['nl_search_models'],
  summary: 'Update a NL search model',
  description: 'Update an existing NL search model.',
  operationId: 'updateNLSearchModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            description: 'The ID of the NL search model to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'The NL search model fields to update',
      content: { 'application/json': { schema: NLSearchModelCreateSchemaSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'NL search model successfully updated',
      content: { 'application/json': { schema: NLSearchModelSchemaSchema } },
    },
    400: {
      description: 'Bad request, see error message for details',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
    404: {
      description: 'NL search model not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})

export const deleteNlSearchModelsModelIdRoute = createRoute({
  method: 'delete',
  path: '/nl_search_models/{modelId}',
  tags: ['nl_search_models'],
  summary: 'Delete a NL search model',
  description: 'Delete a specific NL search model by its ID.',
  operationId: 'deleteNLSearchModel',
  request: {
    params: z.object({
      modelId: z
        .string()
        .openapi({
          param: {
            name: 'modelId',
            in: 'path',
            description: 'The ID of the NL search model to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'NL search model successfully deleted',
      content: { 'application/json': { schema: NLSearchModelDeleteSchemaSchema } },
    },
    404: {
      description: 'NL search model not found',
      content: { 'application/json': { schema: ApiResponseSchema } },
    },
  },
})
