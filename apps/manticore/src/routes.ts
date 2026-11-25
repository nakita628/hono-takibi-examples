import { createRoute, z } from '@hono/zod-openapi'

type GeoDistanceType = {
  location_anchor?: { lat?: number; lon?: number }
  location_source?: string
  distance_type?: 'adaptive' | 'haversine'
  distance?: string
}

const ChatSchema = z
  .strictObject({
    query: z
      .string()
      .openapi({
        description: 'User question to send to the chat model',
        example: 'What is vector search?',
      }),
    table: z
      .string()
      .openapi({ description: 'Vectorized table to retrieve context from', example: 'docs' }),
    model_name: z.string().openapi({ description: 'Name of the chat model', example: 'assistant' }),
    conversation_uuid: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Existing conversation id to continue the dialog, or an empty string to start a new conversation. If omitted, a new id is generated.\n',
        example: 'docs-chat-001',
      }),
    vector_field: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A specific vector field to search by. If omitted, Buddy uses the first `FLOAT_VECTOR` field from `SHOW CREATE TABLE`.\n',
        example: 'title_embedding',
      }),
    fields: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Legacy alias for `vector_field`. A request must not include both `vector_field` and `fields`.\n',
      }),
  })
  .openapi({
    description:
      'Conversational search request handled by Manticore Buddy via `CALL CHAT`. When this object is set, the `/search` endpoint answers through an LLM using KNN-retrieved rows as context instead of returning regular search hits.\nRequired fields are `query`, `table`, and `model_name`. Chat model management (`CREATE CHAT MODEL`, etc.) remains SQL-only.\nFor more information see [Conversational search](https://manual.manticoresearch.com/Searching/Conversational_search#HTTP-JSON-syntax)\n',
    required: ['query', 'table', 'model_name'],
    example: {
      query: 'What is vector search?',
      table: 'docs',
      model_name: 'assistant',
      conversation_uuid: 'docs-chat-001',
      vector_field: 'embedding',
    },
  })
  .openapi('Chat')

const QueryFilterSchema: z.ZodType<QueryFilterType> = z
  .lazy(() =>
    (() => {
      const Schema = FulltextFilterSchema.and(
        z
          .strictObject({
            bool: BoolFilterSchema.exactOptional(),
            equals: z
              .any()
              .exactOptional()
              .openapi({ description: 'Filter to match exact attribute values.' }),
            in: z
              .looseObject({})
              .exactOptional()
              .openapi({ description: 'Filter to match a given set of attribute values.' }),
            range: z
              .looseObject({})
              .exactOptional()
              .openapi({
                description:
                  'Filter to match a given range of attribute values passed in Range objects',
              }),
            geo_distance: GeoDistanceSchema.exactOptional(),
          })
          .openapi({ required: [] }),
      )
      return z.preprocess((val: z.input<typeof Schema>, ctx) => {
        ;((ctx) => {
          const o = ctx.value
          if (typeof o !== 'object' || o === null || Array.isArray(o)) return
          for (const k of Object.keys(o)) {
            if (!['query_string', 'match', 'match_phrase', 'match_all'].includes(k)) {
              ctx.issues.push({ code: 'custom', path: [k], input: o })
            }
          }
          for (const k of Object.keys(o)) {
            if (!['bool', 'equals', 'in', 'range', 'geo_distance'].includes(k)) {
              ctx.issues.push({ code: 'custom', path: [k], input: o })
            }
          }
        })(ctx)
        return val
      }, Schema)
    })().openapi({
      description:
        'Object used to apply various conditions, such as full-text matching or attribute filtering, to a search query',
    }),
  )
  .openapi('QueryFilter')

const HighlightFieldsSchema = z
  .xor([z.array(z.string()), z.looseObject({})])
  .openapi({ description: 'List of fields available for highlighting' })
  .openapi('HighlightFields')

const HighlightFieldOptionSchema = z
  .strictObject({
    fragment_size: z
      .int()
      .exactOptional()
      .openapi({
        description: 'Maximum size of the text fragments in highlighted snippets per field',
      }),
    limit: z.int().exactOptional().openapi({ description: 'Maximum size of snippets per field' }),
    limit_snippets: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of snippets per field' }),
    limit_words: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of words per field' }),
    number_of_fragments: z
      .int()
      .exactOptional()
      .openapi({ description: 'Total number of highlighted fragments per field' }),
  })
  .openapi({
    description: 'Options for controlling the behavior of highlighting on a per-field basis',
    required: [],
  })
  .openapi('HighlightFieldOption')

const HighlightSchema = (() => {
  const Schema = z
    .object({
      after_match: z
        .string()
        .default('</strong>')
        .exactOptional()
        .openapi({
          description: 'Text inserted after the matched term, typically used for HTML formatting',
        }),
      allow_empty: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Permits an empty string to be returned as the highlighting result. Otherwise, the beginning of the original text would be returned',
        }),
      around: z
        .int()
        .exactOptional()
        .openapi({ description: 'Number of words around the match to include in the highlight' }),
      before_match: z
        .string()
        .default('<strong>')
        .exactOptional()
        .openapi({
          description: 'Text inserted before the match, typically used for HTML formatting',
        }),
      emit_zones: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Emits an HTML tag with the enclosing zone name before each highlighted snippet',
        }),
      encoder: z
        .enum(['default', 'html'])
        .exactOptional()
        .openapi({ description: "If set to 'html', retains HTML markup when highlighting" }),
      fields: HighlightFieldsSchema.exactOptional(),
      force_all_words: z
        .boolean()
        .exactOptional()
        .openapi({
          description: 'Ignores the length limit until the result includes all keywords',
        }),
      force_snippets: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Forces snippet generation even if limits allow highlighting the entire text',
        }),
      highlight_query: z
        .xor([z.any(), QueryFilterSchema])
        .exactOptional()
        .openapi({ description: 'Optional query object to customize highlighting behavior' }),
      html_strip_mode: z
        .enum(['none', 'strip', 'index', 'retain'])
        .exactOptional()
        .openapi({ description: 'Defines the mode for handling HTML markup in the highlight' }),
      limits_per_field: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            "Determines whether the 'limit', 'limit_words', and 'limit_snippets' options operate as individual limits in each field of the document",
        }),
      no_match_size: z
        .union([z.literal(0), z.literal(1)])
        .exactOptional()
        .openapi({
          description:
            'If set to 1, allows an empty string to be returned as a highlighting result',
        }),
      order: z
        .enum(['asc', 'desc', 'score'])
        .exactOptional()
        .openapi({ description: 'Sets the sorting order of highlighted snippets' }),
      pre_tags: z
        .string()
        .default('<strong>')
        .exactOptional()
        .openapi({ description: 'Text inserted before each highlighted snippet' }),
      post_tags: z
        .string()
        .default('</strong>')
        .exactOptional()
        .openapi({ description: 'Text inserted after each highlighted snippet' }),
      start_snippet_id: z
        .int()
        .exactOptional()
        .openapi({ description: 'Sets the starting value of the %SNIPPET_ID% macro' }),
      use_boundaries: z
        .boolean()
        .exactOptional()
        .openapi({
          description:
            'Defines whether to additionally break snippets by phrase boundary characters',
        }),
    })
    .openapi({
      description: 'Defines a query HIGHLIGHT expression to emphasize matched results',
      required: [],
    })
    .and(HighlightFieldOptionSchema)
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (
          ![
            'fragment_size',
            'limit',
            'limit_snippets',
            'limit_words',
            'number_of_fragments',
          ].includes(k)
        ) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})().openapi('Highlight')

const SearchQuerySchema = (() => {
  const Schema = QueryFilterSchema.and(
    z.strictObject({ highlight: HighlightSchema.exactOptional() }).openapi({ required: [] }),
  )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['highlight'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})()
  .openapi({ description: 'Defines a query structure for performing search operations' })
  .openapi('SearchQuery')

type FulltextFilterType = {
  query_string?: string
  match?: { [key: string]: unknown }
  match_phrase?: { [key: string]: unknown }
  match_all?: { [key: string]: unknown }
}

const FulltextFilterSchema: z.ZodType<FulltextFilterType> = z
  .strictObject({
    query_string: z
      .string()
      .exactOptional()
      .openapi({ description: 'Filter object defining a query string' }),
    match: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Filter object defining a match keyword passed as a string or in a Match object',
      }),
    match_phrase: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Filter object defining a match phrase' }),
    match_all: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Filter object to select all documents' }),
  })
  .openapi({ description: 'Defines a type of filter for full-text search queries', required: [] })
  .openapi('FulltextFilter')

const JoinCondSchema = z
  .strictObject({
    field: z.string().openapi({ description: 'Field to join on' }),
    table: z.string().openapi({ description: 'Joined table' }),
    query: FulltextFilterSchema.exactOptional(),
    type: z.any().exactOptional(),
  })
  .openapi({
    required: ['field', 'table'],
    description: 'Object representing the conditions used to perform the join operation',
  })
  .openapi('JoinCond')

const JoinOnSchema = (() => {
  const Schema = z
    .strictObject({ right: JoinCondSchema.exactOptional() })
    .openapi({ required: [] })
    .and(z.strictObject({ left: JoinCondSchema.exactOptional() }).openapi({ required: [] }))
    .and(
      z
        .strictObject({ operator: z.literal('eq').exactOptional() })
        .openapi({ description: 'Defines joined tables', required: [] }),
    )
  return z.preprocess((val: z.input<typeof Schema>, ctx) => {
    ;((ctx) => {
      const o = ctx.value
      if (typeof o !== 'object' || o === null || Array.isArray(o)) return
      for (const k of Object.keys(o)) {
        if (!['right'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['left'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
      for (const k of Object.keys(o)) {
        if (!['operator'].includes(k)) {
          ctx.issues.push({ code: 'custom', path: [k], input: o })
        }
      }
    })(ctx)
    return val
  }, Schema)
})().openapi('JoinOn')

const JoinSchema = z
  .strictObject({
    type: z.enum(['inner', 'left']).openapi({ description: 'Type of the join operation' }),
    on: z.array(JoinOnSchema).openapi({ description: 'List of objects defining joined tables' }),
    query: FulltextFilterSchema.exactOptional(),
    table: z.string().openapi({ description: 'Basic table of the join operation' }),
  })
  .openapi({
    required: ['type', 'on', 'table'],
    description: 'Object representing the join operation between two tables',
  })
  .openapi('Join')

const DocumentIdSchema = z
  .preprocess(
    (val) =>
      typeof val === 'number' && Number.isSafeInteger(val)
        ? BigInt(val)
        : typeof val === 'string' && /^-?\d+$/.test(val)
          ? BigInt(val)
          : val,
    z.uint64(),
  )
  .openapi({ type: 'integer', format: 'uint64' })
  .openapi('DocumentId')

const KnnSchema = z
  .object({
    field: z.string().openapi({ description: 'Field to perform the k-nearest neighbor search on' }),
    k: z
      .int()
      .exactOptional()
      .openapi({
        deprecated: true,
        description: 'Deprecated. Use the top-level `limit` parameter instead.',
      }),
    query: z.xor([z.string(), z.array(z.number())]).exactOptional(),
    query_vector: z
      .array(z.number())
      .exactOptional()
      .openapi({ description: 'The vector used as input for the KNN search' }),
    doc_id: DocumentIdSchema.exactOptional().openapi({
      description: 'The document ID used as input for the KNN search',
    }),
    ef: z
      .int()
      .exactOptional()
      .openapi({ description: 'Optional parameter controlling the accuracy of the search' }),
    rescore: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Optional parameter enabling KNN rescoring (disabled by default)' }),
    oversampling: z
      .number()
      .exactOptional()
      .openapi({
        description:
          'Optional parameter setting a factor by which k is multiplied when executing the KNN search',
      }),
    filter: QueryFilterSchema.exactOptional(),
  })
  .openapi({
    required: ['field'],
    description: 'Object representing a k-nearest neighbor search query',
  })
  .openapi('Knn')

const HybridSchema = z
  .strictObject({
    query: z.string().openapi({ description: 'Search query string', example: 'machine learning' }),
    field: z
      .string()
      .exactOptional()
      .openapi({ description: 'Vector field name.\n', example: 'vec' }),
  })
  .openapi({
    description:
      'Perform hybrid search on tables with auto-embeddings. Runs full-text and vector search and fuses results with RRF.  For more information see [Hybrid search](https://manual.manticoresearch.com/Searching/Hybrid_search#Simplified-JSON-syntax:-hybrid)\n',
    required: ['query'],
    example: { query: 'machine learning', field: 'vec' },
  })
  .openapi('Hybrid')

const FacetFilterModeSchema = z
  .enum(['strict', 'auto', 'max'])
  .openapi({
    description:
      'Controls how facets inherit attribute filters from the main query. [Faceted search](https://manual.manticoresearch.com/Searching/Faceted_search#HTTP-JSON)\n',
  })
  .openapi('FacetFilterMode')

const AggTermsSchema = z
  .strictObject({
    field: z
      .string()
      .openapi({ description: 'Name of attribute to aggregate by', example: 'field1' }),
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of buckets in the result', example: 1000 }),
  })
  .openapi({ required: ['field'], description: 'Object containing term fields to aggregate on' })
  .openapi('AggTerms')

const AggCompositeTermSchema = z
  .strictObject({
    field: z.string().openapi({ description: 'Name of field to operate with', example: 'field1' }),
  })
  .openapi({
    required: ['field'],
    description: 'Object representing a term to be used in composite aggregation.',
  })
  .openapi('AggCompositeTerm')

const AggCompositeSourceSchema = z
  .strictObject({ terms: AggCompositeTermSchema })
  .openapi({
    required: ['terms'],
    description: 'Object containing terms used for composite aggregation.',
  })
  .openapi('AggCompositeSource')

const AggCompositeSchema = z
  .strictObject({
    size: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of composite buckets in the result', example: 1000 }),
    sources: z
      .array(
        z
          .record(z.string(), AggCompositeSourceSchema)
          .openapi({
            description: 'List of objects that contain terms used for composite aggregation.',
          }),
      )
      .exactOptional(),
  })
  .openapi({
    description:
      'Object to perform composite aggregation, i.e., grouping search results by multiple fields',
    required: [],
  })
  .openapi('AggComposite')

const AggHistogramSchema = z
  .strictObject({
    field: z.string().openapi({ description: 'Field to group by', example: 'field' }),
    interval: z.int().openapi({ description: 'Interval of the histogram values', example: 10 }),
    offset: z
      .int()
      .exactOptional()
      .openapi({ description: 'Offset of the histogram values. Default value is 0.', example: 1 }),
    keyed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag that defines if a search response will be a dictionary with the bucket keys. Default value is false.',
        example: true,
      }),
  })
  .openapi({
    description:
      'Object to use histograms in aggregation, i.e., grouping search results by histogram values',
    required: ['field', 'interval'],
  })
  .openapi('AggHistogram')

const AggDateHistogramSchema = z
  .strictObject({
    field: z.string().openapi({ description: 'Field to group by', example: 'field' }),
    calendar_interval: z
      .int()
      .openapi({ description: 'Interval of the histogram values', example: 10 }),
    offset: z
      .int()
      .exactOptional()
      .openapi({ description: 'Offset of the histogram values. Default value is 0.', example: 1 }),
    keyed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Flag that defines if a search response will be a dictionary with the bucket keys. Default value is false.',
        example: true,
      }),
  })
  .openapi({
    description:
      'Object to use histograms in aggregation, i.e., grouping search results by histogram values',
    required: ['field', 'calendar_interval'],
  })
  .openapi('AggDateHistogram')

const RangeSchema = z
  .strictObject({
    from: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Lower bound (inclusive). Numeric for `range`; date math expression for `date_range`.\n',
      }),
    to: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Upper bound (exclusive). Numeric for `range`; date math expression for `date_range`.\n',
      }),
  })
  .openapi({ description: 'An aggregation range.\n', required: [] })
  .openapi('Range')

const AggRangeSchema = z
  .strictObject({
    field: z.string().openapi({ description: 'Attribute to group by', example: 'price' }),
    ranges: z.array(RangeSchema).min(1).openapi({ description: 'Ordered list of ranges' }),
    keyed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Return buckets as an object keyed by range label when true, or as an array when false. Default is false.\n',
      }),
  })
  .openapi({
    description:
      'Group documents into custom numeric or date ranges. Use with the `range` or `date_range` aggregation type.\n',
    required: ['field', 'ranges'],
  })
  .openapi('AggRange')

const AggTDigestSchema = z
  .strictObject({
    compression: z
      .number()
      .exactOptional()
      .openapi({ description: 'Accuracy/memory trade-off. Default is 200.', example: 200 }),
  })
  .openapi({
    description: 'T-Digest settings for approximate statistical aggregations',
    required: [],
  })
  .openapi('AggTDigest')

const AggPercentilesSchema = z
  .strictObject({
    field: z
      .string()
      .openapi({ description: 'Numeric field to calculate percentiles for', example: 'latency' }),
    values: z
      .array(z.number())
      .exactOptional()
      .openapi({
        description:
          'Percentile points to compute (0-100). Defaults to 1, 5, 25, 50, 75, 95, and 99 when omitted.\n',
        example: [5, 50, 95],
      }),
    keyed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Return an object keyed by percentile when true, or an array when false. Default is false.\n',
      }),
    tdigest: AggTDigestSchema.exactOptional(),
  })
  .openapi({
    description:
      'Object to use percentile values in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILES(),-PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())\n',
    required: ['field'],
  })
  .openapi('AggPercentiles')

const AggPercentileRanksSchema = z
  .strictObject({
    field: z
      .string()
      .openapi({
        description: 'Numeric field to calculate percentile ranks for',
        example: 'latency',
      }),
    values: z
      .array(z.number())
      .openapi({ description: 'Input values to rank', example: [10, 150, 1500] }),
    keyed: z
      .boolean()
      .exactOptional()
      .openapi({
        description:
          'Return an object keyed by input value when true, or an array when false. Default is false.\n',
      }),
    tdigest: AggTDigestSchema.exactOptional(),
  })
  .openapi({
    description:
      'Object to use percentile ranks in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())\n',
    required: ['field', 'values'],
  })
  .openapi('AggPercentileRanks')

const AggMedianAbsoluteDeviationSchema = z
  .strictObject({
    field: z
      .string()
      .openapi({ description: 'Numeric field to calculate MAD for', example: 'latency' }),
    tdigest: AggTDigestSchema.exactOptional(),
  })
  .openapi({
    description:
      'Object to use median absolute deviation in aggregation. For more information see [Grouping](https://manual.manticoresearch.com/Searching/Grouping#PERCENTILES(),-PERCENTILE_RANKS(),-MEDIAN_ABSOLUTE_DEVIATION())\n',
    required: ['field'],
  })
  .openapi('AggMedianAbsoluteDeviation')

const AggMetricSchema = z
  .strictObject({
    field: z
      .string()
      .openapi({ description: 'Numeric field to aggregate', example: 'rental_rate' }),
  })
  .openapi({ description: 'Metric aggregation over a numeric field', required: ['field'] })
  .openapi('AggMetric')

const AggregationSchema = z
  .object({
    terms: AggTermsSchema.exactOptional(),
    sort: z.array(z.any()).exactOptional(),
    composite: AggCompositeSchema.exactOptional(),
    histogram: AggHistogramSchema.exactOptional(),
    date_histogram: AggDateHistogramSchema.exactOptional(),
    range: AggRangeSchema.exactOptional(),
    date_range: AggRangeSchema.exactOptional(),
    percentiles: AggPercentilesSchema.exactOptional(),
    percentile_ranks: AggPercentileRanksSchema.exactOptional(),
    median_absolute_deviation: AggMedianAbsoluteDeviationSchema.exactOptional(),
    min: AggMetricSchema.exactOptional(),
    max: AggMetricSchema.exactOptional(),
    sum: AggMetricSchema.exactOptional(),
    avg: AggMetricSchema.exactOptional(),
  })
  .openapi({ description: 'Object used for grouping search results', required: [] })
  .openapi('Aggregation')

const ScriptFieldScriptSchema = z
  .strictObject({
    inline: z
      .string()
      .openapi({ description: 'Expression to compute (same syntax as SQL expressions)' }),
  })
  .openapi({
    description: 'Inline script used to compute a search expression',
    required: ['inline'],
  })
  .openapi('ScriptFieldScript')

const ScriptFieldSchema = z
  .strictObject({ script: ScriptFieldScriptSchema })
  .openapi({ description: 'Named expression computed at search time', required: ['script'] })
  .openapi('ScriptField')

type SearchRequestType = {
  table?: string
  chat?: z.infer<typeof ChatSchema>
  query?: z.infer<typeof SearchQuerySchema>
  join?: z.infer<typeof JoinSchema>[]
  highlight?: z.infer<typeof HighlightSchema>
  limit?: number
  knn?: z.infer<typeof KnnSchema>
  hybrid?: z.infer<typeof HybridSchema>
  facet_filter_mode?: z.infer<typeof FacetFilterModeSchema>
  aggs?: { [key: string]: z.infer<typeof AggregationSchema> }
  expressions?: { [key: string]: string }
  script_fields?: { [key: string]: z.infer<typeof ScriptFieldSchema> }
  max_matches?: number
  offset?: number
  options?: { [key: string]: unknown }
  profile?: boolean
  sort?: any
  _source?: any
  track_scores?: boolean
}

type BoolFilterType = {
  must?: z.infer<typeof QueryFilterSchema>[]
  must_not?: z.infer<typeof QueryFilterSchema>[]
  should?: z.infer<typeof QueryFilterSchema>[]
}

const BoolFilterSchema: z.ZodType<BoolFilterType> = z
  .lazy(() =>
    z
      .strictObject({
        must: z
          .array(QueryFilterSchema)
          .exactOptional()
          .openapi({
            description: 'Query clauses that must match for the document to be included',
          }),
        must_not: z
          .array(QueryFilterSchema)
          .exactOptional()
          .openapi({
            description: 'Query clauses that must not match for the document to be included',
          }),
        should: z
          .array(QueryFilterSchema)
          .exactOptional()
          .openapi({ description: 'Query clauses that should be matched, but are not required' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('BoolFilter')

const GeoDistanceSchema: z.ZodType<GeoDistanceType> = z
  .strictObject({
    location_anchor: z
      .strictObject({
        lat: z.number().exactOptional().openapi({ description: 'Latitude of the anchor point' }),
        lon: z.number().exactOptional().openapi({ description: 'Longitude of the anchor point' }),
      })
      .exactOptional()
      .openapi({
        description: 'Specifies the location of the pin point used for search',
        required: [],
      }),
    location_source: z
      .string()
      .exactOptional()
      .openapi({ description: 'Field name in the document that contains location data' }),
    distance_type: z
      .enum(['adaptive', 'haversine'])
      .exactOptional()
      .openapi({ description: 'Algorithm used to calculate the distance' }),
    distance: z
      .string()
      .regex(
        /\/^\.+(km|m|cm|mm|mi|yd|ft|in|NM|nmi|kilometers|meters|centimeters|millimeters|miles|yards|foots|inches|nauticalmiles|)$\//,
      )
      .exactOptional()
      .openapi({ description: 'The distance from the anchor point to filter results by' }),
  })
  .openapi({
    description: 'Object to perform geo-distance based filtering on queries',
    required: [],
  })
  .openapi('GeoDistance')

type QueryFilterType = z.infer<typeof FulltextFilterSchema> & {
  bool?: z.infer<typeof BoolFilterSchema>
  equals?: any
  in?: { [key: string]: unknown }
  range?: { [key: string]: unknown }
  geo_distance?: z.infer<typeof GeoDistanceSchema>
}

const SearchRequestSchema: z.ZodType<SearchRequestType> = z
  .object({
    table: z
      .string()
      .exactOptional()
      .openapi({ description: 'The table to perform the search on' }),
    chat: ChatSchema.exactOptional(),
    query: SearchQuerySchema.exactOptional(),
    join: z
      .array(JoinSchema)
      .exactOptional()
      .openapi({ description: 'Join clause to combine search data from multiple tables' }),
    highlight: HighlightSchema.exactOptional(),
    limit: z.int().exactOptional().openapi({ description: 'Maximum number of results to return' }),
    knn: KnnSchema.exactOptional().openapi({
      description:
        'K-nearest neighbor search settings. Pass a single `knn` object or an array of objects for multi-vector search.\n',
    }),
    hybrid: HybridSchema.exactOptional(),
    facet_filter_mode: FacetFilterModeSchema.exactOptional(),
    aggs: z
      .record(z.string(), AggregationSchema)
      .exactOptional()
      .openapi({
        'x-java-json-include-non-empty': true,
        example: {
          agg1: { terms: { field: 'field1', size: 1000, sort: [{ field1: null, order: 'asc' }] } },
        },
        description: 'Defines aggregation settings for grouping results',
      }),
    expressions: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        example: { title_len: 'crc32(title)' },
        description:
          'Expressions to calculate additional values for the result. Simpler alternative to `script_fields`; expression names must be lowercase.\n',
      }),
    script_fields: z
      .record(z.string(), ScriptFieldSchema)
      .exactOptional()
      .openapi({
        description:
          'Named expressions computed at search time. Each value defines an inline script whose result is stored under the field name. For more information see [Expressions](https://manual.manticoresearch.com/Searching/Expressions#script_fields)\n',
        example: {
          add_all: { script: { inline: '( gid * 10 ) | crc32(title)' } },
          title_len: { script: { inline: 'crc32(title)' } },
        },
      }),
    max_matches: z
      .int()
      .exactOptional()
      .openapi({ description: 'Maximum number of matches allowed in the result' }),
    offset: z
      .int()
      .exactOptional()
      .openapi({ description: 'Starting point for pagination of the result' }),
    options: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Additional search options' }),
    profile: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable profiling of the search request' }),
    sort: z
      .any()
      .exactOptional()
      .openapi({ description: 'Sorting criteria for the search results' }),
    _source: z
      .any()
      .exactOptional()
      .openapi({ description: 'Specify which fields to include or exclude in the response' }),
    track_scores: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Enable or disable result weight calculation used for sorting' }),
  })
  .superRefine((o, ctx) => {
    const If = z
      .any()
      .refine(
        (val) =>
          !z
            .unknown()
            .superRefine((val, ctx) => {
              if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
                if (!Object.hasOwn(val, 'table')) {
                  ctx.addIssue({ code: 'custom' })
                }
              }
            })
            .openapi({ required: ['table'] })
            .safeParse(val).success,
      )
      .openapi({ not: { required: ['table'] } })
    const ifOk = If.safeParse(o).success
    const Branch = ifOk
      ? z
          .unknown()
          .superRefine((val, ctx) => {
            if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
              if (!Object.hasOwn(val, 'chat')) {
                ctx.addIssue({ code: 'custom' })
              }
            }
          })
          .openapi({ required: ['chat'] })
      : undefined
    if (!Branch) {
      return
    }
    const result = Branch.safeParse(o)
    if (!result.success) {
      for (const issue of result.error.issues) {
        ctx.addIssue({ ...issue, path: issue.path })
      }
    }
  })
  .openapi({
    description:
      'Request object for search operation. Either `table` (regular search) or `chat` (conversational search) must be provided.\n',
    example: { table: 'your_table', query: { query_string: 'your_query' } },
    required: [],
  })
  .openapi('SearchRequest')

const QueryFilterAlias1Schema = QueryFilterSchema.openapi('QueryFilterAlias1')

const QueryFilterAlias2Schema = QueryFilterSchema.openapi('QueryFilterAlias2')

const AutocompleteRequestSchema = z
  .object({
    table: z.string().openapi({ description: 'The table to perform the search on' }),
    query: z.string().openapi({ description: 'The beginning of the string to autocomplete' }),
    options: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'Autocomplete options\n  - layouts: A comma-separated string of keyboard layout codes to validate and check for spell correction. Available options - us, ru, ua, se, pt, no, it, gr, uk, fr, es, dk, de, ch, br, bg, be. By default, all are enabled.\n  - fuzziness: (0,1 or 2) Maximum Levenshtein distance for finding typos. Set to 0 to disable fuzzy matching. Default is 2\n  - prepend: true/false If true, adds an asterisk before the last word for prefix expansion (e.g., *word )\n  - append:  true/false If true, adds an asterisk after the last word for prefix expansion (e.g., word* )\n  - expansion_len: Number of characters to expand in the last word. Default is 10.\n',
      }),
  })
  .openapi({
    description: 'Object containing the data for performing an autocomplete search.',
    required: ['table', 'query'],
    example: { table: 'test', query: 'Start', options: { layouts: 'us,uk', fuzziness: 0 } },
  })
  .openapi('AutocompleteRequest')

const BulkResponseSchema = z
  .object({
    items: z.array(z.looseObject({})).exactOptional().openapi({ description: 'List of results' }),
    errors: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Errors occurred during the bulk operation' }),
    error: z
      .string()
      .exactOptional()
      .openapi({ description: 'Error message describing an error if such occurred' }),
    current_line: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of the row returned in the response' }),
    skipped_lines: z
      .int()
      .exactOptional()
      .openapi({ description: 'Number of rows skipped in the response' }),
  })
  .openapi({ description: 'Success response for bulk search requests', required: [] })
  .openapi('BulkResponse')

const DeleteDocumentRequestSchema = z
  .object({
    table: z.string().openapi({ description: 'Table name' }),
    cluster: z.string().exactOptional().openapi({ description: 'Cluster name' }),
    id: DocumentIdSchema.exactOptional().openapi({
      description: 'The ID of document for deletion',
    }),
    query: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Defines the criteria to match documents for deletion' }),
  })
  .openapi({
    description:
      'Payload for delete request.\nDocuments can be deleted either one by one by specifying the document id or by providing a query object.\nFor more information see  [Delete API](https://manual.manticoresearch.com/Deleting_documents)\n',
    required: ['table'],
    example: { table: 'test', id: 1 },
  })
  .openapi('DeleteDocumentRequest')

const DeleteResponseSchema = z
  .object({
    table: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the table from which the document was deleted' }),
    deleted: z.int().exactOptional().openapi({ description: 'Number of documents deleted' }),
    id: DocumentIdSchema.exactOptional().openapi({
      description:
        'The ID of the deleted document. If multiple documents are deleted, the ID of the first deleted document is returned\n',
    }),
    found: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether any documents to be deleted were found' }),
    result: z
      .string()
      .exactOptional()
      .openapi({ description: "Result of the delete operation, typically 'deleted'" }),
  })
  .openapi({
    description: 'Response object for successful delete request',
    example: { table: 'test', deleted: 29 },
    required: [],
  })
  .openapi('DeleteResponse')

const HitsHitsSchema = z
  .looseObject({
    _id: DocumentIdSchema.exactOptional().openapi({
      description: 'The ID of the matched document',
    }),
    _score: z.int().exactOptional().openapi({ description: 'The score of the matched document' }),
    _source: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'The source data of the matched document' }),
    _knn_dist: z
      .number()
      .exactOptional()
      .openapi({
        description: 'The knn distance of the matched document returned for knn queries',
      }),
    highlight: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'The highlighting-related data of the matched document' }),
    table: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The table name of the matched document returned for percolate queries',
      }),
    '_type:': z
      .string()
      .exactOptional()
      .openapi({ description: 'The type of the matched document returned for percolate queries' }),
    fields: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description:
          'The percolate-related fields of the matched document returned for percolate queries',
      }),
  })
  .openapi({ description: 'Search hit representing a matched document', required: [] })
  .openapi('HitsHits')

const InsertDocumentRequestSchema = z
  .object({
    table: z.string().openapi({ description: 'Name of the table to insert the document into' }),
    cluster: z
      .string()
      .exactOptional()
      .openapi({ description: 'Name of the cluster to insert the document into' }),
    id: DocumentIdSchema.exactOptional().openapi({
      description: 'Document ID. If not provided, an ID will be auto-generated\n',
    }),
    doc: z.looseObject({}).openapi({ description: 'Object containing document data\n' }),
  })
  .openapi({
    description: 'Object containing data for inserting a new document into the table\n',
    required: ['table', 'doc'],
    example: { table: 'test', doc: { title: 'This is some title', gid: 100 } },
  })
  .openapi('InsertDocumentRequest')

const MatchSchema = z
  .object({
    query: z.string(),
    operator: z.enum(['or', 'and']).exactOptional(),
    boost: z.number().exactOptional(),
  })
  .openapi({
    required: ['query'],
    description: 'Filter helper object defining a match keyword and match options',
  })
  .openapi('Match')

const MatchAllSchema = z
  .object({ _all: z.literal('{}') })
  .openapi({
    required: ['_all'],
    description: "Filter helper object defining the 'match all'' condition",
  })
  .openapi('MatchAll')

const RangeFilterSchema = z
  .object({
    lt: z.any().exactOptional().openapi({ description: '<Less than> condition value' }),
    lte: z.any().exactOptional().openapi({ description: '<Less than or equal> condition value' }),
    gt: z.any().exactOptional().openapi({ description: '<Greater than> condition value' }),
    gte: z
      .any()
      .exactOptional()
      .openapi({ description: '<Greater than or equal> condition value' }),
  })
  .openapi({ description: "Filter helper object defining the 'range' condition", required: [] })
  .openapi('RangeFilter')

const ReplaceDocumentRequestSchema = z
  .object({
    doc: z
      .looseObject({})
      .openapi({
        description: 'Object containing the new document data to replace the existing one.',
      }),
  })
  .openapi({
    description:
      'Object containing the document data for replacing an existing document in a table.',
    required: ['doc'],
    example: { doc: { title: 'This is some title', gid: 100 } },
  })
  .openapi('ReplaceDocumentRequest')

const SourceRulesSchema = z
  .strictObject({
    includes: z
      .array(z.string())
      .default([])
      .exactOptional()
      .openapi({ description: 'List of fields to include in the response' }),
    excludes: z
      .array(z.string())
      .default([''])
      .exactOptional()
      .openapi({ description: 'List of fields to exclude from the response' }),
  })
  .refine((val) => Object.keys(val).length >= 1)
  .openapi({
    description: 'Defines which fields to include or exclude in the response for a search query',
    example: { includes: ['attr1', 'attri*'], excludes: ['desc*'] },
    required: [],
  })
  .openapi('SourceRules')

const SuccessResponseSchema = z
  .object({
    table: z.string().exactOptional().openapi({ description: 'Name of the document table' }),
    id: DocumentIdSchema.exactOptional().openapi({
      description: 'ID of the document affected by the request operation',
    }),
    created: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Indicates whether the document was created as a result of the operation',
      }),
    result: z
      .string()
      .exactOptional()
      .openapi({
        description: "Result of the operation, typically 'created', 'updated', or 'deleted'",
      }),
    found: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the document was found in the table' }),
    status: z
      .int()
      .exactOptional()
      .openapi({ description: 'HTTP status code representing the result of the operation' }),
  })
  .openapi({
    description:
      'Response object indicating the success of an operation, such as inserting or updating a document',
    example: { table: 'test', id: 1, result: 'created', created: true, status: 201 },
    required: [],
  })
  .openapi('SuccessResponse')

const PercolateRequestSchema = z
  .object({
    query: z
      .looseObject({
        percolate: z
          .looseObject({})
          .openapi({ description: 'Object representing the document to percolate' }),
      })
      .openapi({
        required: ['percolate'],
        example: { percolate: { document: { title: 'some text to match' } } },
      }),
  })
  .openapi({
    description:
      'Object containing the query for percolating documents against stored queries in a percolate table',
    required: ['query'],
  })
  .openapi('PercolateRequest')

const FacetBucketStatusSchema = z
  .enum(['selected', 'available', 'unavailable'])
  .openapi({
    description:
      'Facet bucket availability marker returned when `facet_filter_mode` is `auto` or `max`. `selected` means the bucket value is already present in a same-facet value filter. `available` means selecting the bucket can produce results. `unavailable` means the bucket exists in the broad max count scope but selecting it would produce no results.\n',
  })
  .openapi('FacetBucketStatus')

const AggBucketSchema = z
  .looseObject({
    key: z.any().exactOptional().openapi({ description: 'Aggregated bucket value' }),
    doc_count: z.int().openapi({ description: 'Number of documents in the bucket' }),
    status: FacetBucketStatusSchema.exactOptional(),
  })
  .openapi({ description: 'Single bucket in an aggregation result', required: ['doc_count'] })
  .openapi('AggBucket')

const AggBucketsResultSchema = z
  .looseObject({
    buckets: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Bucket list when `keyed` is false (array of bucket objects), or a keyed map of bucket objects when `keyed` is true. Each bucket has `key` and `doc_count`, plus `from`/`to` for `range` and `date_range`, `key_as_string` for `date_histogram`, and an optional `status`. Returned by `terms`, `histogram`, `date_histogram`, `range`, `date_range` and `composite`.\n',
      }),
    after_key: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Pagination cursor returned by composite aggregations' }),
    value: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Returned by `min`, `max`, `sum`, `avg` and `median_absolute_deviation`. Untyped like `buckets` and `values`, because the JSON type follows the aggregation: an integer one returns an exact integer, which for `sum` or `max` over an int64 attribute can exceed what a double holds exactly, while a float one returns a floating-point number. `value_as_string` carries the exact rendering when the engine sends it.\n',
      }),
    value_as_string: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'String rendering of `value`, returned alongside it by `median_absolute_deviation`.\n',
      }),
    values: z
      .any()
      .exactOptional()
      .openapi({
        description:
          "Returned by `percentiles` and `percentile_ranks`. Like `buckets`, the shape follows the request's `keyed` flag: an array of `{key, value, value_as_string}` objects when false, a map of requested point to value when true.\n",
      }),
  })
  .openapi({
    description:
      'One aggregation result. It is either BUCKET-shaped or METRIC-shaped, never both: which one depends on the aggregation that was requested.\n',
    required: [],
  })
  .openapi('AggBucketsResult')

const SearchResponseSchema = z
  .object({
    took: z.int().exactOptional().openapi({ description: 'Time taken to execute the search' }),
    timed_out: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Indicates whether the search operation timed out' }),
    aggregations: z
      .record(z.string(), AggBucketsResultSchema)
      .exactOptional()
      .openapi({
        description:
          'Aggregated search results, keyed by aggregation name. A bucket aggregation contributes a `buckets` array (or keyed map) of bucket objects; a metric aggregation contributes a `value` or `values` instead. See `aggBucketsResult`.\n',
        example: {
          sizes: {
            buckets: [
              { key: 'small', doc_count: 1, status: 'selected' },
              { key: 'large', doc_count: 1, status: 'available' },
            ],
          },
          colors: {
            buckets: [
              { key: 10, doc_count: 1019 },
              { key: 9, doc_count: 954, status: 'unavailable' },
            ],
          },
          avg_price: { value: 30.5 },
          price_percentiles: { values: [{ key: 50, value: 30.5, value_as_string: '30.5' }] },
        },
      }),
    hits: z
      .object({
        max_score: z
          .int()
          .exactOptional()
          .openapi({ description: 'Maximum score among the matched documents' }),
        total: z
          .int()
          .exactOptional()
          .openapi({ description: 'Total number of matched documents' }),
        total_relation: z
          .string()
          .exactOptional()
          .openapi({
            description: 'Indicates whether the total number of hits is accurate or an estimate',
          }),
        hits: z
          .array(HitsHitsSchema)
          .exactOptional()
          .openapi({ description: 'Array of hit objects, each representing a matched document' }),
      })
      .exactOptional()
      .openapi({
        description:
          'Object containing the search hits, which represent the documents that matched the query.',
        example: {
          total: 2,
          hits: [
            { _id: 1, _score: 1, _source: { gid: 11 } },
            { _id: 2, _score: 1, _source: { gid: 20 } },
          ],
        },
        required: [],
      }),
    profile: z
      .looseObject({})
      .exactOptional()
      .openapi({
        description: 'Profile information about the search execution, if profiling is enabled',
      }),
    scroll: z
      .string()
      .exactOptional()
      .openapi({ description: 'Scroll token to be used fo pagination' }),
    warning: z
      .looseObject({})
      .exactOptional()
      .openapi({ description: 'Warnings encountered during the search operation' }),
    conversation_uuid: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Existing or generated conversation id (conversational search)',
        example: 'docs-chat-001',
      }),
    user_query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Original user query (conversational search)',
        example: 'What is vector search?',
      }),
    search_query: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Standalone search query used for KNN retrieval (conversational search)',
        example: 'vector search, embeddings, similarity search',
      }),
    response: z
      .string()
      .exactOptional()
      .openapi({
        description: 'LLM answer as generated (conversational search)',
        example: 'Vector search finds similar items by comparing embeddings...',
      }),
    sources: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'JSON string containing retrieved source rows used as LLM context (conversational search).\n',
        example: '[{"id":1,"title":"Vector Search","content":"...","knn_dist":0.12}]',
      }),
  })
  .openapi({
    description:
      'Response object containing search results. For conversational search requests that include a `chat` object, the optional chat fields below are also populated.\nFor conversational search response fields see [Conversational search](https://manual.manticoresearch.com/Searching/Conversational_search#Response)\n',
    required: [],
  })
  .openapi('SearchResponse')

const ResponseErrorDetailsSchema = z
  .object({
    type: z.string().openapi({ description: 'Type or category of the error' }),
    reason: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Detailed explanation of why the error occurred' }),
    table: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The table related to the error, if applicable' }),
  })
  .openapi({
    description: 'Detailed error information returned in case of an error response',
    required: ['type'],
  })
  .openapi('ResponseErrorDetails')

const ResponseErrorTextSchema = z
  .string()
  .openapi({ description: 'Error message text returned in case of an error' })
  .openapi('ResponseErrorText')

const ResponseErrorSchema = z
  .xor([ResponseErrorDetailsSchema, ResponseErrorTextSchema])
  .openapi('ResponseError')

const ErrorResponseSchema = z
  .object({
    error: ResponseErrorSchema,
    status: z
      .int()
      .default(500)
      .exactOptional()
      .openapi({ description: 'HTTP status code of the error response' }),
  })
  .openapi({
    description: 'Error response object containing information about the error and a status code',
    required: ['error'],
    example: { status: 500, error: 'an error occured' },
  })
  .openapi('ErrorResponse')

const SqlRawResponseSchema = z.array(z.looseObject({})).openapi('SqlRawResponse')

const SqlObjResponseSchema = z
  .object({
    hits: z.looseObject({}),
    took: z.number().exactOptional(),
    timed_out: z.boolean().exactOptional(),
  })
  .openapi({ required: ['hits'] })
  .openapi('SqlObjResponse')

const SqlResponseSchema = z
  .xor([SqlRawResponseSchema, SqlObjResponseSchema])
  .openapi({
    description: 'List of responses from executed SQL queries',
    example: [{ total: 0, error: null }],
  })
  .openapi('SqlResponse')

const TokenRequestSchema = z
  .strictObject({})
  .openapi({
    description:
      'Empty request body. Used to create or rotate a bearer token for the authenticated HTTP user.\n',
    example: {},
  })
  .openapi('TokenRequest')

const TokenResponseSchema = z
  .string()
  .openapi({
    description: 'Raw bearer token string.\n',
    example: '115za1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a7b8c9d0e1f2',
  })
  .openapi('TokenResponse')

const UpdateDocumentRequestSchema = z
  .object({
    table: z.string().openapi({ description: 'Name of the document table' }),
    cluster: z.string().exactOptional().openapi({ description: 'Name of the document cluster' }),
    doc: z
      .looseObject({})
      .openapi({
        description: 'Object containing the document fields to update',
        example: { gid: 10 },
      }),
    id: DocumentIdSchema.exactOptional().openapi({ description: 'Document ID' }),
    query: z
      .xor([z.any(), QueryFilterSchema])
      .exactOptional()
      .openapi({
        description: 'Object defining conditions to perform the updates',
        example: { query: { match: { title: 'match me' } } },
      }),
  })
  .openapi({
    description: 'Payload for updating a document or multiple documents in a table',
    required: ['table', 'doc'],
  })
  .openapi('UpdateDocumentRequest')

const UpdateResponseSchema = z
  .object({
    table: z.string().exactOptional().openapi({ description: 'Name of the document table' }),
    updated: z.int().exactOptional().openapi({ description: 'Number of documents updated' }),
    id: DocumentIdSchema.exactOptional().openapi({ description: 'Document ID' }),
    result: z
      .string()
      .exactOptional()
      .openapi({ description: "Result of the update operation, typically 'updated'" }),
  })
  .openapi({
    description: 'Success response returned after updating one or more documents',
    example: { table: 'test', updated: 29 },
    required: [],
  })
  .openapi('UpdateResponse')

const ObjectExampleExample = { value: 'www', summary: 'A sample object' }

const BasicAuthSecurityScheme = {
  type: 'http',
  scheme: 'basic',
  description:
    'HTTP Basic authentication with a Manticore user name and password. Required for `POST /token` when authentication and authorization is enabled.\n',
}

const BearerAuthSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  description: 'Bearer authentication. The token is returned by the `POST /token` endpoint.\n',
}

export const postSearchRoute = createRoute({
  method: 'post',
  path: '/search',
  tags: ['Search'],
  summary: 'Performs a search on a table',
  description:
    "\nThe method expects an object with the following mandatory properties:\n* the name of the table to search\n* the match query object\nFor details, see the documentation on [**SearchRequest**](SearchRequest.md)\nThe method returns an object with the following properties:\n- took: the time taken to execute the search query. - timed_out: a boolean indicating whether the query timed out. - hits: an object with the following properties:\n   - total: the total number of hits found.\n   - hits: an array of hit objects, where each hit object represents a matched document. Each hit object has the following properties:\n     - _id: the ID of the matched document.\n     - _score: the score of the matched document.\n     - _source: the source data of the matched document.\n\nIn addition, if profiling is enabled, the response will include an additional array with profiling information attached. Also, if pagination is enabled, the response will include an additional 'scroll' property with a scroll token to use for pagination\nHere is an example search response:\n\n  ```\n  {\n    'took':10,\n    'timed_out':false,\n    'hits':\n    {\n      'total':2,\n      'hits':\n      [\n        {'_id':'1','_score':1,'_source':{'gid':11}},\n        {'_id':'2','_score':1,'_source':{'gid':12}}\n      ]\n    }\n  }\n  ```\n\nFor conversational search, include a `chat` object instead of `table` and `query`. The response then includes the optional conversational fields on `searchResponse` (`conversation_uuid`, `user_query`, `search_query`, `response`, `sources`).\nFor more information about the match query syntax and additional parameters that can be added to request and response, please see the documentation [here](https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON).\n",
  externalDocs: {
    url: 'https://manual.manticoresearch.com/Searching/Full_text_matching/Basic_usage#HTTP-JSON',
  },
  operationId: 'search',
  request: {
    body: {
      content: {
        'application/json': {
          schema: SearchRequestSchema,
          example: ['\'request=SearchRequest(table="test",query=Query(query_string="abc"))\''],
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'Ok. Returns `searchResponse`. For conversational search requests that include a `chat` object, the optional conversational fields are also set.\n',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postAutocompleteRoute = createRoute({
  method: 'post',
  path: '/autocomplete',
  tags: ['Search'],
  summary: 'Performs an autocomplete search on a table',
  description:
    '\nThe method expects an object with the following mandatory properties:\n* the name of the table to search\n* the query string to autocomplete\nFor details, see the documentation on [**Autocomplete**](Autocomplete.md)\nAn example: ``` {\n  "table":"table_name",\n  "query":"query_beginning"\n}         ```\nAn example of the method\'s response:\n\n ```\n [\n   {\n     "total": 3,\n     "error": "",\n     "warning": "",\n     "columns": [\n       {\n         "query": {\n           "type": "string"\n         }\n       }\n     ],\n     "data": [\n       {\n         "query": "hello"\n       },\n       {\n         "query": "helio"\n       },\n       {\n         "query": "hell"\n       }\n     ]\n   }\n ] \n ```\n\nFor more detailed information about the autocomplete queries, please refer to the documentation [here](https://manual.manticoresearch.com/Searching/Autocomplete).\n',
  externalDocs: {
    url: 'https://manual.manticoresearch.com/dev/Searching/Autocomplete?client=JSON',
  },
  operationId: 'autocomplete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: AutocompleteRequestSchema,
          example: ['\'request=AutocompleteRequest(table="test",query="abc")\''],
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Ok', content: { 'application/json': { schema: SqlRawResponseSchema } } },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postBulkRoute = createRoute({
  method: 'post',
  path: '/bulk',
  tags: ['Index'],
  summary: 'Bulk table operations',
  description:
    'Sends multiple operatons like inserts, updates, replaces or deletes. \nFor each operation it\'s object must have same format as in their dedicated method. \nThe method expects a raw string as the batch in NDJSON.\n Each operation object needs to be serialized to \n JSON and separated by endline (\\n). \n \n  An example of raw input:\n  \n  ```\n  {"insert": {"table": "movies", "doc": {"plot": "A secret team goes to North Pole", "rating": 9.5, "language": [2, 3], "title": "This is an older movie", "lon": 51.99, "meta": {"keywords":["travel","ice"],"genre":["adventure"]}, "year": 1950, "lat": 60.4, "advise": "PG-13"}}}\n  \\n\n  {"delete": {"table": "movies","id":700}}\n  ```\n  \n  Responds with an object telling whenever any errors occured and an array with status for each operation:\n  \n  ```\n  {\n    \'items\':\n    [\n      {\n        \'update\':{\'table\':\'products\',\'id\':1,\'result\':\'updated\'}\n      },\n      {\n        \'update\':{\'table\':\'products\',\'id\':2,\'result\':\'updated\'}\n      }\n    ],\n    \'errors\':false\n  }\n  ```\n',
  externalDocs: { url: 'https://manual.manticoresearch.com/Updating_documents/UPDATE' },
  operationId: 'bulk',
  request: {
    body: { content: { 'application/x-ndjson': { schema: z.string() } }, required: true },
  },
  responses: {
    200: {
      description: 'item updated',
      content: { 'application/json': { schema: BulkResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postDeleteRoute = createRoute({
  method: 'post',
  path: '/delete',
  tags: ['Index'],
  summary: 'Delete a document in a table',
  description:
    "Delete one or several documents.\nThe method has 2 ways of deleting: either by id, in case only one document is deleted or by using a  match query, in which case multiple documents can be delete .\nExample of input to delete by id:\n\n  ```\n  {'table':'movies','id':100}\n  ```\n\nExample of input to delete using a query:\n\n  ```\n  {\n    'table':'movies',\n    'query':\n    {\n      'bool':\n      {\n        'must':\n        [\n          {'query_string':'new movie'}\n        ]\n      }\n    }\n  }\n  ```\n\nThe match query has same syntax as in for searching.\nResponds with an object telling how many documents got deleted: \n\n  ```\n  {'table':'products','updated':1}\n  ```\n",
  externalDocs: { url: 'https://manual.manticoresearch.com/Updating_documents/UPDATE' },
  operationId: 'delete',
  request: {
    body: {
      content: {
        'application/json': {
          schema: DeleteDocumentRequestSchema,
          example: { table: 'test', query: { match: { title: 'apple' } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'item updated',
      content: { 'application/json': { schema: DeleteResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postInsertRoute = createRoute({
  method: 'post',
  path: '/insert',
  tags: ['Index'],
  summary: 'Create a new document in a table',
  description:
    "Insert a document. \nExpects an object like:\n \n  ```\n  {\n    'table':'movies',\n    'id':701,\n    'doc':\n    {\n      'title':'This is an old movie',\n      'plot':'A secret team goes to North Pole',\n      'year':1950,\n      'rating':9.5,\n      'lat':60.4,\n      'lon':51.99,\n      'advise':'PG-13',\n      'meta':'{\"keywords\":{\"travel\",\"ice\"},\"genre\":{\"adventure\"}}',\n      'language':[2,3]\n    }\n  }\n  ```\n \nThe document id can also be missing, in which case an autogenerated one will be used:\n         \n  ```\n  {\n    'table':'movies',\n    'doc':\n    {\n      'title':'This is a new movie',\n      'plot':'A secret team goes to North Pole',\n      'year':2020,\n      'rating':9.5,\n      'lat':60.4,\n      'lon':51.99,\n      'advise':'PG-13',\n      'meta':'{\"keywords\":{\"travel\",\"ice\"},\"genre\":{\"adventure\"}}',\n      'language':[2,3]\n    }\n  }\n  ```\n \nIt responds with an object in format:\n  \n  ```\n  {'table':'products','id':701,'created':true,'result':'created','status':201}\n  ```\n",
  externalDocs: {
    url: 'https://manual.manticoresearch.com/Adding_documents_to_a_table/Adding_documents_to_a_real-time_table#Adding-documents-to-a-real-time-table',
  },
  operationId: 'insert',
  request: {
    body: {
      content: {
        'application/json': {
          schema: InsertDocumentRequestSchema,
          example: { table: 'test', id: 1, doc: { title: 'sample title', gid: 10 } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SuccessResponseSchema } } },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postPqTableSearchRoute = createRoute({
  method: 'post',
  path: '/pq/{table}/search',
  tags: ['Search'],
  summary: 'Perform reverse search on a percolate table',
  description:
    "Performs a percolate search.\nThis method must be used only on percolate tables.\nExpects two parameters: the table name and an object with array of documents to be tested.\nAn example of the documents object: ```\n  {\n    \"query\" {\n      \"percolate\": {\n        \"document\": {\n          \"content\":\"sample content\"\n        }\n      }\n    }\n  }\n```\nResponds with an object with matched stored queries:  ```\n  {\n    'timed_out':false,\n    'hits': {\n      'total':2,\n      'max_score':1,\n      'hits': [\n        {\n          'table':'idx_pq_1',\n          '_type':'doc',\n          '_id':'2',\n          '_score':'1',\n          '_source': {\n            'query': {\n              'match':{'title':'some'}\n            }\n          }\n        },\n        {\n          'table':'idx_pq_1',\n          '_type':'doc',\n          '_id':'5',\n          '_score':'1',\n          '_source': {\n            'query': {\n              'ql':'some | none'\n            }\n          }\n        }\n      ]\n    }\n  }\n```\n",
  externalDocs: { url: 'https://manual.manticoresearch.com/Updating_documents/UPDATE' },
  operationId: 'percolate',
  request: {
    params: z.object({
      table: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'table',
            schema: { type: 'string' },
            required: true,
            description: 'Name of the percolate table',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: PercolateRequestSchema,
          example: { query: { percolate: { document: { title: 'some text to match' } } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'items found',
      content: { 'application/json': { schema: SearchResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postReplaceRoute = createRoute({
  method: 'post',
  path: '/replace',
  tags: ['Index'],
  summary: 'Replace new document in a table',
  description:
    "Replace an existing document. Input has same format as `insert` operation.\nResponds with an object in format:\n\n  ```\n  {'table':'products','id':1,'created':false,'result':'updated','status':200}\n  ```\n",
  externalDocs: {
    url: 'https://manual.manticoresearch.com/Adding_documents_to_a_table/Adding_documents_to_a_real-time_table#Adding-documents-to-a-real-time-table',
  },
  operationId: 'replace',
  request: {
    body: {
      content: {
        'application/json': {
          schema: InsertDocumentRequestSchema,
          example: { table: 'test', id: 1, doc: { title: 'updated title', gid: 15 } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'OK', content: { 'application/json': { schema: SuccessResponseSchema } } },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postSqlRoute = createRoute({
  method: 'post',
  path: '/sql',
  tags: ['Utils'],
  summary: 'Perform SQL requests',
  description:
    'Run a query in SQL format.\nExpects a query string passed through `body` parameter and optional `raw_response` parameter that defines a format of response.\n`raw_response` can be set to `False` for Select queries only, e.g., `SELECT * FROM mytable`\nThe query string must stay as it is, no URL encoding is needed.\nThe response object depends on the query executed. In select mode the response has same format as `/search` operation.\n',
  externalDocs: { url: 'https://manual.manticoresearch.com/Connecting_to_the_server/HTTP#sql-api' },
  operationId: 'sql',
  request: {
    query: z.object({
      raw_response: z
        .stringbool()
        .default(true)
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'raw_response',
            description:
              "Optional parameter, defines a format of response. Can be set to `False` for Select only queries and set to `True` for any type of queries. Default value is 'True'.\n",
            schema: { type: 'boolean', default: true },
            required: false,
          },
        }),
    }),
    body: {
      description: 'A query parameter string.\n',
      content: { 'text/plain': { schema: z.string(), example: 'SHOW TABLES' } },
      required: true,
    },
  },
  responses: {
    200: {
      description:
        'In case of SELECT-only in mode none the response schema is the same as of `search`.\nIn case of `mode=raw` or `raw_response=true` the response depends on the query executed.\n',
      content: { 'application/json': { schema: SqlResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postTokenRoute = createRoute({
  method: 'post',
  path: '/token',
  tags: ['Utils'],
  summary: 'Create or rotate a bearer token',
  description:
    'Create or rotate a bearer token for the authenticated HTTP user.\nRequires HTTP Basic authentication with a Manticore user name and password. The endpoint returns the raw token.\nExample:\n\n  ```\n  curl -u admin:password -X POST http://127.0.0.1:9308/token -d "{}"\n  ```\n',
  externalDocs: {
    url: 'https://manual.manticoresearch.com/Security/Authentication_and_authorization',
  },
  operationId: 'token',
  request: {
    body: {
      content: { 'application/json': { schema: TokenRequestSchema, example: {} } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Bearer token created or rotated successfully',
      content: {
        'application/json': { schema: TokenResponseSchema },
        'text/plain': { schema: TokenResponseSchema },
      },
    },
    401: {
      description: 'Missing or invalid credentials',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
  security: [{ basicAuth: [] }],
})

export const postUpdateRoute = createRoute({
  method: 'post',
  path: '/update',
  tags: ['Index'],
  summary: 'Update a document in a table',
  description:
    "Update one or several documents.\nThe update can be made by passing the id or by using a match query in case multiple documents can be updated.  For example update a document using document id:\n\n  ```\n  {'table':'movies','doc':{'rating':9.49},'id':100}\n  ```\n\nAnd update by using a match query:\n\n  ```\n  {\n    'table':'movies',\n    'doc':{'rating':9.49},\n    'query':\n    {\n      'bool':\n      {\n        'must':\n        [\n          {'query_string':'new movie'}\n        ]\n      }\n    }\n  }\n  ``` \n\nThe match query has same syntax as for searching.\nResponds with an object that tells how many documents where updated in format: \n\n  ```\n  {'table':'products','updated':1}\n  ```\n",
  externalDocs: { url: 'https://manual.manticoresearch.com/Updating_documents/UPDATE' },
  operationId: 'update',
  request: {
    body: {
      content: {
        'application/json': {
          schema: UpdateDocumentRequestSchema,
          example: { table: 'test', doc: { gid: 20 }, query: { equals: { cat_id: 2 } } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'item updated',
      content: { 'application/json': { schema: UpdateResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postTableUpdateIdRoute = createRoute({
  method: 'post',
  path: '/{table}/_update/{id}',
  tags: ['Index'],
  summary: 'Partially replaces a document in a table',
  description:
    "Partially replaces a document with given id in a table\nResponds with an object of the following format: \n\n  ```\n  {'table':'products','updated':1}\n  ```\n",
  externalDocs: {
    url: 'https://manual.manticoresearch.com/Updating_documents/REPLACE#JSON-REPLACE',
  },
  operationId: 'partial_replace',
  request: {
    params: z.object({
      table: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'table',
            schema: { type: 'string' },
            required: true,
            description: 'Name of the percolate table',
          },
        }),
      id: z.preprocess(
        (val) => {
          if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
            return val
          if (/^-?\d+$/.test(val)) return BigInt(val)
          const num = Number(val)
          return Number.isSafeInteger(num) ? BigInt(num) : val
        },
        DocumentIdSchema.openapi({
          param: {
            in: 'path',
            name: 'id',
            schema: { allOf: [{ $ref: '#/components/schemas/documentId' }] },
            required: true,
            description: 'Id of the document to replace',
          },
        }),
      ),
    }),
    body: {
      content: {
        'application/json': {
          schema: ReplaceDocumentRequestSchema,
          example: { doc: { price: 20 } },
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'item updated',
      content: { 'application/json': { schema: UpdateResponseSchema } },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
