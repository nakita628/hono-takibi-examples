import { createRoute, z } from '@hono/zod-openapi'

const ConditionSchema: z.ZodType<ConditionType> = z
  .lazy(() =>
    z.union([
      FieldConditionSchema,
      IsEmptyConditionSchema,
      IsNullConditionSchema,
      HasIdConditionSchema,
      HasVectorConditionSchema,
      SliceConditionSchema,
      NestedConditionSchema,
      FilterSchema,
    ]),
  )
  .openapi('Condition')

const MinShouldSchema: z.ZodType<MinShouldType> = z
  .lazy(() =>
    z
      .object({ conditions: z.array(ConditionSchema), min_count: z.int().min(1) })
      .openapi({ required: ['conditions', 'min_count'] }),
  )
  .openapi('MinShould')

type FilterType = {
  should?:
    | z.infer<typeof ConditionSchema>
    | z.infer<typeof ConditionSchema>[]
    | ({ [key: string]: unknown } | null)
  min_should?: z.infer<typeof MinShouldSchema> | ({ [key: string]: unknown } | null)
  must?:
    | z.infer<typeof ConditionSchema>
    | z.infer<typeof ConditionSchema>[]
    | ({ [key: string]: unknown } | null)
  must_not?:
    | z.infer<typeof ConditionSchema>
    | z.infer<typeof ConditionSchema>[]
    | ({ [key: string]: unknown } | null)
}

const ValueVariantsSchema = z
  .union([
    z.string(),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    z.boolean(),
  ])
  .openapi('ValueVariants')

const MatchValueSchema = z
  .object({ value: ValueVariantsSchema })
  .openapi({ description: 'Exact match of the given value', required: ['value'] })
  .openapi('MatchValue')

const MatchTextSchema = z
  .object({ text: z.string() })
  .openapi({ description: 'Full-text match of the strings.', required: ['text'] })
  .openapi('MatchText')

const MatchTextAnySchema = z
  .object({ text_any: z.string() })
  .openapi({
    description: 'Full-text match of at least one token of the string.',
    required: ['text_any'],
  })
  .openapi('MatchTextAny')

const MatchPhraseSchema = z
  .object({ phrase: z.string() })
  .openapi({ description: 'Full-text phrase match of the string.', required: ['phrase'] })
  .openapi('MatchPhrase')

const MatchPrefixSchema = z
  .object({ prefix: z.string() })
  .openapi({
    description:
      'Match keyword values that start with the given string.\n\nByte-wise (hence, for valid UTF-8, character-wise) and case-sensitive, consistent with exact keyword matching. Served efficiently by a keyword index created with the `prefix` option.',
    required: ['prefix'],
  })
  .openapi('MatchPrefix')

const MatchSubstringSchema = z
  .object({ substring: z.string() })
  .openapi({
    description:
      'Match keyword values that contain the given string.\n\nByte-wise (hence, for valid UTF-8, character-wise) and case-sensitive, consistent with exact keyword and prefix matching. Served by a keyword index with the `prefix` option, through a scan of its key dictionary; without one, falls back to reading the payload.',
    required: ['substring'],
  })
  .openapi('MatchSubstring')

const AnyVariantsSchema = z
  .union([
    z.array(z.string()).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
    z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.int64(),
          )
          .openapi({ type: 'integer', format: 'int64' }),
      )
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      }),
  ])
  .openapi('AnyVariants')

const MatchAnySchema = z
  .object({ any: AnyVariantsSchema })
  .openapi({ description: 'Exact match on any of the given values', required: ['any'] })
  .openapi('MatchAny')

const MatchExceptSchema = z
  .object({ except: AnyVariantsSchema })
  .openapi({
    description: 'Should have at least one value not matching the any given values',
    required: ['except'],
  })
  .openapi('MatchExcept')

const MatchSchema = z
  .union([
    MatchValueSchema,
    MatchTextSchema,
    MatchTextAnySchema,
    MatchPhraseSchema,
    MatchPrefixSchema,
    MatchSubstringSchema,
    MatchAnySchema,
    MatchExceptSchema,
  ])
  .openapi({ description: 'Match filter request' })
  .openapi('Match')

const RangeSchema = z
  .object({
    lt: z.float64().nullable().exactOptional().openapi({ description: 'point.key < range.lt' }),
    gt: z.float64().nullable().exactOptional().openapi({ description: 'point.key > range.gt' }),
    gte: z.float64().nullable().exactOptional().openapi({ description: 'point.key >= range.gte' }),
    lte: z.float64().nullable().exactOptional().openapi({ description: 'point.key <= range.lte' }),
  })
  .openapi({ description: 'Range filter request', required: [] })
  .openapi('Range')

const DatetimeRangeSchema = z
  .object({
    lt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key < range.lt' }),
    gt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key > range.gt' }),
    gte: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key >= range.gte' }),
    lte: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key <= range.lte' }),
  })
  .openapi({ description: 'Range filter request', required: [] })
  .openapi('DatetimeRange')

const RangeInterfaceSchema = z.union([RangeSchema, DatetimeRangeSchema]).openapi('RangeInterface')

const GeoPointSchema = z
  .object({ lon: z.float64(), lat: z.float64() })
  .openapi({ description: 'Geo point payload schema', required: ['lat', 'lon'] })
  .openapi('GeoPoint')

const GeoBoundingBoxSchema = z
  .object({ top_left: GeoPointSchema, bottom_right: GeoPointSchema })
  .openapi({
    description:
      'Geo filter request\n\nMatches coordinates inside the rectangle, described by coordinates of lop-left and bottom-right edges',
    required: ['bottom_right', 'top_left'],
  })
  .openapi('GeoBoundingBox')

const GeoRadiusSchema = z
  .object({
    center: GeoPointSchema,
    radius: z.float64().openapi({ description: 'Radius of the area in meters' }),
  })
  .openapi({
    description:
      'Geo filter request\n\nMatches coordinates inside the circle of `radius` and center with coordinates `center`',
    required: ['center', 'radius'],
  })
  .openapi('GeoRadius')

const GeoLineStringSchema = z
  .object({ points: z.array(GeoPointSchema) })
  .openapi({
    description: 'Ordered sequence of GeoPoints representing the line',
    required: ['points'],
  })
  .openapi('GeoLineString')

const GeoPolygonSchema = z
  .object({
    exterior: GeoLineStringSchema,
    interiors: z
      .array(GeoLineStringSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Interior lines (if present) bound holes within the surface each GeoLineString must consist of a minimum of 4 points, and the first and last points must be the same.',
      }),
  })
  .openapi({
    description:
      'Geo filter request\n\nMatches coordinates inside the polygon, defined by `exterior` and `interiors`',
    required: ['exterior'],
  })
  .openapi('GeoPolygon')

const ValuesCountSchema = z
  .object({
    lt: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key.length() < values_count.lt' }),
    gt: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key.length() > values_count.gt' }),
    gte: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key.length() >= values_count.gte' }),
    lte: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'point.key.length() <= values_count.lte' }),
  })
  .openapi({ description: 'Values count filter request', required: [] })
  .openapi('ValuesCount')

type FieldConditionType = {
  key: string
  match?: z.infer<typeof MatchSchema> | ({ [key: string]: unknown } | null)
  range?: z.infer<typeof RangeInterfaceSchema> | ({ [key: string]: unknown } | null)
  geo_bounding_box?: z.infer<typeof GeoBoundingBoxSchema> | ({ [key: string]: unknown } | null)
  geo_radius?: z.infer<typeof GeoRadiusSchema> | ({ [key: string]: unknown } | null)
  geo_polygon?: z.infer<typeof GeoPolygonSchema> | ({ [key: string]: unknown } | null)
  values_count?: z.infer<typeof ValuesCountSchema> | ({ [key: string]: unknown } | null)
  is_empty?: boolean | null
  is_null?: boolean | null
}

const FieldConditionSchema: z.ZodType<FieldConditionType> = z
  .object({
    key: z.string().openapi({ description: 'Payload key' }),
    match: z
      .union([MatchSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Check if point has field with a given value' }),
    range: z
      .union([RangeInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Check if points value lies in a given range' }),
    geo_bounding_box: z
      .union([GeoBoundingBoxSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Check if points geolocation lies in a given area' }),
    geo_radius: z
      .union([GeoRadiusSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Check if geo point is within a given radius' }),
    geo_polygon: z
      .union([GeoPolygonSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Check if geo point is within a given polygon' }),
    values_count: z
      .union([ValuesCountSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Check number of values of the field' }),
    is_empty: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Check that the field is empty, alternative syntax for `is_empty: "field_name"`',
      }),
    is_null: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Check that the field is null, alternative syntax for `is_null: "field_name"`',
      }),
  })
  .openapi({ description: 'All possible payload filtering conditions', required: ['key'] })
  .openapi('FieldCondition')

const PayloadFieldSchema = z
  .object({ key: z.string().openapi({ description: 'Payload field name' }) })
  .openapi({ description: 'Payload field', required: ['key'] })
  .openapi('PayloadField')

type IsEmptyConditionType = { is_empty: z.infer<typeof PayloadFieldSchema> }

const IsEmptyConditionSchema: z.ZodType<IsEmptyConditionType> = z
  .object({ is_empty: PayloadFieldSchema })
  .openapi({
    description: 'Select points with empty payload for a specified field',
    required: ['is_empty'],
  })
  .openapi('IsEmptyCondition')

type IsNullConditionType = { is_null: z.infer<typeof PayloadFieldSchema> }

const IsNullConditionSchema: z.ZodType<IsNullConditionType> = z
  .object({ is_null: PayloadFieldSchema })
  .openapi({
    description: 'Select points with null payload for a specified field',
    required: ['is_null'],
  })
  .openapi('IsNullCondition')

const ExtendedPointIdSchema = z
  .union([
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, example: 42 }),
    z.uuid().openapi({ example: '550e8400-e29b-41d4-a716-446655440000' }),
  ])
  .openapi({ description: 'Type, used for specifying point ID in user interface' })
  .openapi('ExtendedPointId')

type HasIdConditionType = { has_id: z.infer<typeof ExtendedPointIdSchema>[] }

const HasIdConditionSchema: z.ZodType<HasIdConditionType> = z
  .object({
    has_id: z.array(ExtendedPointIdSchema).superRefine((items, ctx) => {
      const seen = new Map()
      for (const [i, val] of items.entries()) {
        const key = JSON.stringify(val)
        if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
        else seen.set(key, i)
      }
    }),
  })
  .openapi({ description: 'ID-based filtering condition', required: ['has_id'] })
  .openapi('HasIdCondition')

type HasVectorConditionType = { has_vector: string }

const HasVectorConditionSchema: z.ZodType<HasVectorConditionType> = z
  .object({ has_vector: z.string() })
  .openapi({
    description: 'Filter points which have specific vector assigned',
    required: ['has_vector'],
  })
  .openapi('HasVectorCondition')

const SliceSchema = z
  .object({
    total: z
      .uint32()
      .min(1)
      .openapi({ description: 'Total number of disjoint slices the id space is split into' }),
    index: z
      .uint32()
      .min(0)
      .openapi({ description: 'Which slice to select, must be in `0..total`' }),
  })
  .openapi({
    description:
      'One of `total` disjoint deterministic slices of the id space.\n\nA point belongs to the slice iff `hash(id) % total == index`, where `hash` is SipHash-2-4 with a zero key over the canonical id bytes: 8 little-endian bytes for numeric ids, the 16 RFC 4122 bytes for UUIDs. For a fixed `total`, slices `0..total` are disjoint and together cover all points; membership is uniform regardless of the id scheme and stable across queries, segments, platforms and Qdrant versions.\n\nSlices with different `total` values are correlated (same hash, no salt): e.g. slice `0` of `total: 4` is a strict subset of slice `0` of `total: 2`. This keeps a smaller sample contained in a larger one.',
    required: ['index', 'total'],
  })
  .openapi('Slice')

type SliceConditionType = { slice: z.infer<typeof SliceSchema> }

const SliceConditionSchema: z.ZodType<SliceConditionType> = z
  .object({ slice: SliceSchema })
  .openapi({
    description:
      'Select points that fall into one of `total` disjoint deterministic slices of the id space, for parallel scans and reproducible sampling.',
    required: ['slice'],
  })
  .openapi('SliceCondition')

const NestedConditionSchema: z.ZodType<NestedConditionType> = z
  .lazy(() => z.object({ nested: NestedSchema }).openapi({ required: ['nested'] }))
  .openapi('NestedCondition')

const FilterSchema: z.ZodType<FilterType> = z
  .lazy(() =>
    z
      .strictObject({
        should: z
          .union([ConditionSchema, z.array(ConditionSchema), z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'At least one of those conditions should match' }),
        min_should: z
          .union([MinShouldSchema, z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'At least minimum amount of given conditions should match' }),
        must: z
          .union([ConditionSchema, z.array(ConditionSchema), z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'All conditions must match' }),
        must_not: z
          .union([ConditionSchema, z.array(ConditionSchema), z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'All conditions must NOT match' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Filter')

type ConditionType =
  | z.infer<typeof FieldConditionSchema>
  | z.infer<typeof IsEmptyConditionSchema>
  | z.infer<typeof IsNullConditionSchema>
  | z.infer<typeof HasIdConditionSchema>
  | z.infer<typeof HasVectorConditionSchema>
  | z.infer<typeof SliceConditionSchema>
  | z.infer<typeof NestedConditionSchema>
  | z.infer<typeof FilterSchema>

const NestedSchema: z.ZodType<NestedType> = z
  .lazy(() =>
    z
      .object({ key: z.string(), filter: FilterSchema })
      .openapi({
        description: 'Select points with payload for a specified nested field',
        required: ['filter', 'key'],
      }),
  )
  .openapi('Nested')

type NestedConditionType = { nested: z.infer<typeof NestedSchema> }

type NestedType = { key: string; filter: z.infer<typeof FilterSchema> }

type MinShouldType = { conditions: z.infer<typeof ConditionSchema>[]; min_count: number }

const SparseVectorSchema = z
  .object({
    indices: z.array(z.uint32().min(0)).openapi({ description: 'Indices must be unique' }),
    values: z
      .array(z.float32())
      .openapi({ description: 'Values and indices must be the same length' }),
  })
  .openapi({ description: 'Sparse vector structure', required: ['indices', 'values'] })
  .openapi('SparseVector')

const TokenizerTypeSchema = z
  .enum(['prefix', 'whitespace', 'word', 'multilingual', 'code'])
  .openapi('TokenizerType')

const LanguageSchema = z
  .enum([
    'arabic',
    'azerbaijani',
    'basque',
    'bengali',
    'catalan',
    'chinese',
    'danish',
    'dutch',
    'english',
    'finnish',
    'french',
    'german',
    'greek',
    'hebrew',
    'hinglish',
    'hungarian',
    'indonesian',
    'italian',
    'japanese',
    'kazakh',
    'nepali',
    'norwegian',
    'portuguese',
    'romanian',
    'russian',
    'slovene',
    'spanish',
    'swedish',
    'tajik',
    'turkish',
  ])
  .openapi('Language')

const StopwordsSetSchema = z
  .object({
    languages: z
      .array(LanguageSchema)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Set of languages to use for stopwords. Multiple pre-defined lists of stopwords can be combined.',
      }),
    custom: z
      .array(z.string())
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom stopwords set. Will be merged with the languages set.' }),
  })
  .openapi({ required: [] })
  .openapi('StopwordsSet')

const StopwordsInterfaceSchema = z
  .union([LanguageSchema, StopwordsSetSchema])
  .openapi('StopwordsInterface')

const SnowballSchema = z.literal('snowball').openapi('Snowball')

const SnowballLanguageSchema = z
  .enum([
    'arabic',
    'armenian',
    'danish',
    'dutch',
    'english',
    'finnish',
    'french',
    'german',
    'greek',
    'hungarian',
    'italian',
    'norwegian',
    'portuguese',
    'romanian',
    'russian',
    'spanish',
    'swedish',
    'tamil',
    'turkish',
  ])
  .openapi({ description: 'Languages supported by snowball stemmer.' })
  .openapi('SnowballLanguage')

const SnowballParamsSchema = z
  .object({ type: SnowballSchema, language: SnowballLanguageSchema })
  .openapi({ required: ['language', 'type'] })
  .openapi('SnowballParams')

const NoStemmerSchema = z
  .literal('none')
  .openapi({ description: 'Tag selecting the explicit "no stemming" algorithm.' })
  .openapi('NoStemmer')

const DisabledStemmerParamsSchema = z
  .object({ type: NoStemmerSchema })
  .openapi({ required: ['type'] })
  .openapi('DisabledStemmerParams')

const StemmingAlgorithmSchema = z
  .union([SnowballParamsSchema, DisabledStemmerParamsSchema])
  .openapi({ description: 'Different stemming algorithms with their configs.' })
  .openapi('StemmingAlgorithm')

const Bm25ConfigSchema = z
  .object({
    k: z
      .float64()
      .default(1.2)
      .exactOptional()
      .openapi({
        description:
          'Controls term frequency saturation. Higher values mean term frequency has more impact. Default is 1.2',
      }),
    b: z
      .float64()
      .default(0.75)
      .exactOptional()
      .openapi({
        description:
          'Controls document length normalization. Ranges from 0 (no normalization) to 1 (full normalization). Higher values mean longer documents have less impact. Default is 0.75.',
      }),
    avg_len: z
      .float64()
      .default(256)
      .exactOptional()
      .openapi({
        description: 'Expected average document length in the collection. Default is 256.',
      }),
    tokenizer: TokenizerTypeSchema.exactOptional(),
    language: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines which language to use for text preprocessing. This parameter is used to construct default stopwords filter and stemmer. To disable language-specific processing, set `stemmer` to `{"type": "none"}` and configure an empty stopword set. The legacy `"language": "none"` hack is deprecated and may be rejected in a future release. If not specified, English is assumed.',
      }),
    lowercase: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Lowercase the text before tokenization. Default is `true`.' }),
    ascii_folding: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true, normalize tokens by folding accented characters to ASCII (e.g., "ação" -> "acao"). Default is `false`.',
      }),
    stopwords: z
      .union([StopwordsInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Configuration of the stopwords filter. Supports list of pre-defined languages and custom stopwords. Default: initialized for specified `language` or English if not specified.',
      }),
    stemmer: z
      .union([StemmingAlgorithmSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Configuration of the stemmer. Processes tokens to their root form. Default: initialized Snowball stemmer for specified `language` or English if not specified.',
      }),
    min_token_len: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Minimum token length to keep. If token is shorter than this, it will be discarded. Default is `None`, which means no minimum length.',
      }),
    max_token_len: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum token length to keep. If token is longer than this, it will be discarded. Default is `None`, which means no maximum length.',
      }),
  })
  .openapi({ description: 'Configuration of the local bm25 models.', required: [] })
  .openapi('Bm25Config')

const DocumentOptionsSchema = z
  .union([z.looseObject({}), Bm25ConfigSchema])
  .openapi({
    description:
      'Option variants for text documents. Ether general-purpose options or BM25-specific options. BM25-specific will only take effect if the `qdrant/bm25` is specified as a model.',
  })
  .openapi('DocumentOptions')

const DocumentSchema = z
  .object({
    text: z
      .string()
      .openapi({
        description:
          'Text of the document. This field will be used as input for the embedding model.',
        example: 'This is a document text',
      }),
    model: z
      .string()
      .min(1)
      .openapi({
        description:
          'Name of the model used to generate the vector. List of available models depends on a provider.',
        example: 'jinaai/jina-embeddings-v2-base-en',
      }),
    options: z
      .union([DocumentOptionsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Additional options for the model, will be passed to the inference service as-is. See model cards for available options.',
      }),
  })
  .openapi({
    description:
      'WARN: Work-in-progress, unimplemented\n\nText document for embedding. Requires inference infrastructure, unimplemented.',
    required: ['model', 'text'],
  })
  .openapi('Document')

const ImageSchema = z
  .object({
    image: z
      .any()
      .openapi({
        description: 'Image data: base64 encoded image or an URL',
        example: 'https://example.com/image.jpg',
      }),
    model: z
      .string()
      .min(1)
      .openapi({
        description:
          'Name of the model used to generate the vector. List of available models depends on a provider.',
        example: 'Qdrant/clip-ViT-B-32-vision',
      }),
    options: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Parameters for the model Values of the parameters are model-specific',
      }),
  })
  .openapi({
    description:
      'WARN: Work-in-progress, unimplemented\n\nImage object for embedding. Requires inference infrastructure, unimplemented.',
    required: ['image', 'model'],
  })
  .openapi('Image')

const InferenceObjectSchema = z
  .object({
    object: z
      .any()
      .openapi({
        description:
          'Arbitrary data, used as input for the embedding model. Used if the model requires more than one input or a custom input.',
      }),
    model: z
      .string()
      .min(1)
      .openapi({
        description:
          'Name of the model used to generate the vector. List of available models depends on a provider.',
        example: 'jinaai/jina-embeddings-v2-base-en',
      }),
    options: z
      .looseObject({})
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Parameters for the model Values of the parameters are model-specific',
      }),
  })
  .openapi({
    description:
      'WARN: Work-in-progress, unimplemented\n\nCustom object for embedding. Requires inference infrastructure, unimplemented.',
    required: ['model', 'object'],
  })
  .openapi('InferenceObject')

type VectorType =
  | number[]
  | z.infer<typeof SparseVectorSchema>
  | number[][]
  | z.infer<typeof DocumentSchema>
  | z.infer<typeof ImageSchema>
  | z.infer<typeof InferenceObjectSchema>

const VectorInputSchema = z
  .union([
    z.array(z.float32()),
    SparseVectorSchema,
    z.array(z.array(z.float32())),
    ExtendedPointIdSchema,
    DocumentSchema,
    ImageSchema,
    InferenceObjectSchema,
  ])
  .openapi('VectorInput')

const QuerySchema: z.ZodType<QueryType> = z
  .lazy(() =>
    z.union([
      NearestQuerySchema,
      RecommendQuerySchema,
      DiscoverQuerySchema,
      ContextQuerySchema,
      OrderByQuerySchema,
      FusionQuerySchema,
      RrfQuerySchema,
      FormulaQuerySchema,
      SampleQuerySchema,
      RelevanceFeedbackQuerySchema,
      TextQuerySchema,
    ]),
  )
  .openapi('Query')

const QueryInterfaceSchema = z.union([VectorInputSchema, QuerySchema]).openapi('QueryInterface')

const SearchParamsSchema: z.ZodType<SearchParamsType> = z
  .lazy(() =>
    z
      .object({
        hnsw_ef: z
          .int()
          .min(1)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Params relevant to HNSW index Size of the beam in a beam-search. Larger the value - more accurate the result, more time required for search.',
          }),
        exact: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'Search without approximation. If set to true, search may run long but with exact results.',
          }),
        quantization: z
          .union([QuantizationSearchParamsSchema, z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'Quantization params' }),
        indexed_only: z
          .boolean()
          .default(false)
          .exactOptional()
          .openapi({
            description:
              'If enabled, the engine will only perform search among indexed or small segments. Using this option prevents slow searches in case of delayed index, but does not guarantee that all uploaded vectors will be included in search results',
          }),
        acorn: z
          .union([AcornSearchParamsSchema, z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'ACORN search params' }),
        idf: z
          .union([IdfParamsSchema, z.any().nullable()])
          .exactOptional()
          .openapi({
            description:
              'Which population IDF statistics are computed over. By default (or with explicit `"global"`) statistics are collection-wide. Only applicable to sparse vectors with the IDF modifier enabled, and to BM25 over a text index.',
          }),
      })
      .openapi({ description: 'Additional parameters of the search', required: [] }),
  )
  .openapi('SearchParams')

const ShardKeySchema = z
  .union([
    z.string().openapi({ example: 'region_1' }),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, example: 12 }),
  ])
  .openapi('ShardKey')

const ShardKeyWithFallbackSchema = z
  .object({ target: ShardKeySchema, fallback: ShardKeySchema })
  .openapi({ required: ['fallback', 'target'] })
  .openapi('ShardKeyWithFallback')

const ShardKeySelectorSchema = z
  .union([ShardKeySchema, z.array(ShardKeySchema), ShardKeyWithFallbackSchema])
  .openapi('ShardKeySelector')

const LookupLocationSchema = z
  .object({
    collection: z.string().openapi({ description: 'Name of the collection used for lookup' }),
    vector: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Optional name of the vector field within the collection. If not provided, the default vector field will be used.',
      }),
    shard_key: z
      .union([ShardKeySelectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Specify in which shards to look for the points, if not specified - look in all shards',
      }),
  })
  .openapi({
    description:
      'Defines a location to use for looking up the vector. Specifies collection and vector field name.',
    required: ['collection'],
  })
  .openapi('LookupLocation')

type PrefetchType = {
  prefetch?: (PrefetchType | PrefetchType[] | ({ [key: string]: unknown } | null)) | null
  query?: z.infer<typeof QueryInterfaceSchema> | ({ [key: string]: unknown } | null)
  using?: string | null
  filter?: z.infer<typeof FilterSchema> | ({ [key: string]: unknown } | null)
  params?: z.infer<typeof SearchParamsSchema> | ({ [key: string]: unknown } | null)
  score_threshold?: number | null
  limit?: number | null
  lookup_from?: (z.infer<typeof LookupLocationSchema> | ({ [key: string]: unknown } | null)) | null
}

const MmrSchema = z
  .object({
    diversity: z
      .float32()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Tunable parameter for the MMR algorithm. Determines the balance between diversity and relevance.\n\nA higher value favors diversity (dissimilarity to selected results), while a lower value favors relevance (similarity to the query vector).\n\nMust be in the range [0, 1]. Default value is 0.5.',
      }),
    candidates_limit: z
      .int()
      .min(0)
      .max(16384)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The maximum number of candidates to consider for re-ranking.\n\nIf not specified, the `limit` value is used.',
      }),
  })
  .openapi({
    description: 'Maximal Marginal Relevance (MMR) algorithm for re-ranking the points.',
    required: [],
  })
  .openapi('Mmr')

const NearestQuerySchema = z
  .object({
    nearest: VectorInputSchema,
    mmr: z
      .union([MmrSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Perform MMR (Maximal Marginal Relevance) reranking after search, using the same vector in this query to calculate relevance.',
      }),
  })
  .openapi({ required: ['nearest'] })
  .openapi('NearestQuery')

const RecommendStrategySchema = z
  .enum(['average_vector', 'best_score', 'sum_scores'])
  .openapi({
    description:
      'How to use positive and negative examples to find the results, default is `average_vector`:\n\n* `average_vector` - Average positive and negative vectors and create a single query with the formula `query = avg_pos + avg_pos - avg_neg`. Then performs normal search.\n\n* `best_score` - Uses custom search objective. Each candidate is compared against all examples, its score is then chosen from the `max(max_pos_score, max_neg_score)`. If the `max_neg_score` is chosen then it is squared and negated, otherwise it is just the `max_pos_score`.\n\n* `sum_scores` - Uses custom search objective. Compares against all inputs, sums all the scores. Scores against positive vectors are added, against negatives are subtracted.',
  })
  .openapi('RecommendStrategy')

const RecommendInputSchema = z
  .object({
    positive: z
      .array(VectorInputSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Look for vectors closest to the vectors from these points' }),
    negative: z
      .array(VectorInputSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Try to avoid vectors like the vector from these points' }),
    strategy: z
      .union([RecommendStrategySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'How to use the provided vectors to find the results' }),
  })
  .openapi({ required: [] })
  .openapi('RecommendInput')

const RecommendQuerySchema = z
  .object({ recommend: RecommendInputSchema })
  .openapi({ required: ['recommend'] })
  .openapi('RecommendQuery')

const ContextPairSchema = z
  .object({ positive: VectorInputSchema, negative: VectorInputSchema })
  .openapi({ required: ['negative', 'positive'] })
  .openapi('ContextPair')

const DiscoverInputSchema = z
  .object({
    target: VectorInputSchema,
    context: z
      .union([ContextPairSchema, z.array(ContextPairSchema), z.any().nullable()])
      .openapi({ description: 'Search space will be constrained by these pairs of vectors' }),
  })
  .openapi({ required: ['context', 'target'] })
  .openapi('DiscoverInput')

const DiscoverQuerySchema = z
  .object({ discover: DiscoverInputSchema })
  .openapi({ required: ['discover'] })
  .openapi('DiscoverQuery')

const ContextInputSchema = z
  .union([ContextPairSchema, z.array(ContextPairSchema), z.any().nullable()])
  .openapi('ContextInput')

const ContextQuerySchema = z
  .object({ context: ContextInputSchema })
  .openapi({ required: ['context'] })
  .openapi('ContextQuery')

const DirectionSchema = z.enum(['asc', 'desc']).openapi('Direction')

const StartFromSchema = z
  .union([
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    z.float64(),
    z.iso.datetime({ offset: true }),
  ])
  .openapi('StartFrom')

const OrderBySchema = z
  .object({
    key: z.string().openapi({ description: 'Payload key to order by' }),
    direction: z
      .union([DirectionSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Direction of ordering: `asc` or `desc`. Default is ascending.' }),
    start_from: z
      .union([StartFromSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Which payload value to start scrolling from. Default is the lowest value for `asc` and the highest for `desc`',
      }),
  })
  .openapi({ required: ['key'] })
  .openapi('OrderBy')

const OrderByInterfaceSchema = z.union([z.string(), OrderBySchema]).openapi('OrderByInterface')

const OrderByQuerySchema = z
  .object({ order_by: OrderByInterfaceSchema })
  .openapi({ required: ['order_by'] })
  .openapi('OrderByQuery')

const FusionSchema = z
  .enum(['rrf', 'dbsf'])
  .openapi({
    description:
      'Fusion algorithm allows to combine results of multiple prefetches.\n\nAvailable fusion algorithms:\n\n* `rrf` - Reciprocal Rank Fusion (with default parameters) * `dbsf` - Distribution-Based Score Fusion',
  })
  .openapi('Fusion')

const FusionQuerySchema = z
  .object({ fusion: FusionSchema })
  .openapi({ required: ['fusion'] })
  .openapi('FusionQuery')

const RrfSchema = z
  .object({
    k: z
      .int()
      .min(1)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'K parameter for reciprocal rank fusion' }),
    weights: z
      .array(z.float32())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Weights for each prefetch source. Higher weight gives more influence on the final ranking. If not specified, all prefetches are weighted equally. The number of weights should match the number of prefetches.',
      }),
  })
  .openapi({ description: 'Parameters for Reciprocal Rank Fusion', required: [] })
  .openapi('Rrf')

const RrfQuerySchema = z
  .object({ rrf: RrfSchema })
  .openapi({ required: ['rrf'] })
  .openapi('RrfQuery')

const ExpressionSchema: z.ZodType<ExpressionType> = z
  .lazy(() =>
    z.union([
      z.float32(),
      z.string(),
      ConditionSchema,
      GeoDistanceSchema,
      DatetimeExpressionSchema,
      DatetimeKeyExpressionSchema,
      MultExpressionSchema,
      SumExpressionSchema,
      MaxExpressionSchema,
      MinExpressionSchema,
      NegExpressionSchema,
      AbsExpressionSchema,
      DivExpressionSchema,
      SqrtExpressionSchema,
      PowExpressionSchema,
      ExpExpressionSchema,
      Log10ExpressionSchema,
      LnExpressionSchema,
      AcoshExpressionSchema,
      LinDecayExpressionSchema,
      ExpDecayExpressionSchema,
      GaussDecayExpressionSchema,
    ]),
  )
  .openapi('Expression')

const FormulaQuerySchema = z
  .object({ formula: ExpressionSchema, defaults: z.looseObject({}).default({}).exactOptional() })
  .openapi({ required: ['formula'] })
  .openapi('FormulaQuery')

const SampleSchema = z.literal('random').openapi('Sample')

const SampleQuerySchema = z
  .object({ sample: SampleSchema })
  .openapi({ required: ['sample'] })
  .openapi('SampleQuery')

const FeedbackItemSchema = z
  .object({ example: VectorInputSchema, score: z.float32() })
  .openapi({ required: ['example', 'score'] })
  .openapi('FeedbackItem')

const FeedbackStrategySchema: z.ZodType<FeedbackStrategyType> = z
  .lazy(() => z.union([NaiveFeedbackStrategySchema]))
  .openapi('FeedbackStrategy')

const RelevanceFeedbackInputSchema = z
  .object({
    target: VectorInputSchema,
    feedback: z.array(FeedbackItemSchema),
    strategy: FeedbackStrategySchema,
  })
  .openapi({ required: ['feedback', 'strategy', 'target'] })
  .openapi('RelevanceFeedbackInput')

const RelevanceFeedbackQuerySchema = z
  .object({ relevance_feedback: RelevanceFeedbackInputSchema })
  .openapi({ required: ['relevance_feedback'] })
  .openapi('RelevanceFeedbackQuery')

const Bm25ParamsSchema = z
  .object({
    k: z
      .float32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Term frequency saturation. Default is 1.2.' }),
    b: z
      .float32()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Document length normalization, from 0 (none) to 1 (full). Default is 0.75.',
      }),
  })
  .openapi({ required: [] })
  .openapi('Bm25Params')

const Bm25ScoringSchema = z
  .object({ bm25: Bm25ParamsSchema })
  .openapi({ required: ['bm25'] })
  .openapi('Bm25Scoring')

const TextQueryScoringSchema = z
  .union([Bm25ScoringSchema])
  .openapi({ description: 'Parameters of one scorer, keyed by its name.' })
  .openapi('TextQueryScoring')

const TextQueryInputSchema = z
  .object({
    query: z
      .string()
      .openapi({ description: "Text to search for, tokenized by the field's text index." }),
    scoring: z
      .union([TextQueryScoringSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          "Parameters of the scorer, keyed by its name. They must match the `scoring` type of the field's text index. If absent, the scorer runs with its defaults.",
      }),
  })
  .openapi({ required: ['query'] })
  .openapi('TextQueryInput')

const TextInterfaceSchema = z
  .union([z.string(), TextQueryInputSchema])
  .openapi({ description: 'The text to search for, or the text with scorer parameters.' })
  .openapi('TextInterface')

const TextQuerySchema = z
  .object({ text: TextInterfaceSchema })
  .openapi({
    description:
      "Rank by BM25 over the text index of the payload field named by `using`, which must have `scoring` set. A point scores when it holds any of the query's terms: required or excluded terms belong in the request's `filter`.",
    required: ['text'],
  })
  .openapi('TextQuery')

type QueryType =
  | z.infer<typeof NearestQuerySchema>
  | z.infer<typeof RecommendQuerySchema>
  | z.infer<typeof DiscoverQuerySchema>
  | z.infer<typeof ContextQuerySchema>
  | z.infer<typeof OrderByQuerySchema>
  | z.infer<typeof FusionQuerySchema>
  | z.infer<typeof RrfQuerySchema>
  | z.infer<typeof FormulaQuerySchema>
  | z.infer<typeof SampleQuerySchema>
  | z.infer<typeof RelevanceFeedbackQuerySchema>
  | z.infer<typeof TextQuerySchema>

const GeoDistanceParamsSchema = z
  .object({
    origin: GeoPointSchema,
    to: z.string().openapi({ description: 'Payload field with the destination geo point' }),
  })
  .openapi({ required: ['origin', 'to'] })
  .openapi('GeoDistanceParams')

type GeoDistanceType = { geo_distance: z.infer<typeof GeoDistanceParamsSchema> }

const GeoDistanceSchema: z.ZodType<GeoDistanceType> = z
  .object({ geo_distance: GeoDistanceParamsSchema })
  .openapi({ required: ['geo_distance'] })
  .openapi('GeoDistance')

type DatetimeExpressionType = { datetime: string }

const DatetimeExpressionSchema: z.ZodType<DatetimeExpressionType> = z
  .object({ datetime: z.string() })
  .openapi({ required: ['datetime'] })
  .openapi('DatetimeExpression')

type DatetimeKeyExpressionType = { datetime_key: string }

const DatetimeKeyExpressionSchema: z.ZodType<DatetimeKeyExpressionType> = z
  .object({ datetime_key: z.string() })
  .openapi({ required: ['datetime_key'] })
  .openapi('DatetimeKeyExpression')

const MultExpressionSchema: z.ZodType<MultExpressionType> = z
  .lazy(() => z.object({ mult: z.array(ExpressionSchema) }).openapi({ required: ['mult'] }))
  .openapi('MultExpression')

const SumExpressionSchema: z.ZodType<SumExpressionType> = z
  .lazy(() => z.object({ sum: z.array(ExpressionSchema) }).openapi({ required: ['sum'] }))
  .openapi('SumExpression')

const MaxExpressionSchema: z.ZodType<MaxExpressionType> = z
  .lazy(() =>
    z
      .object({ max: z.array(ExpressionSchema) })
      .openapi({
        description: 'Largest of the given expressions. Requires at least one operand.',
        required: ['max'],
      }),
  )
  .openapi('MaxExpression')

const MinExpressionSchema: z.ZodType<MinExpressionType> = z
  .lazy(() =>
    z
      .object({ min: z.array(ExpressionSchema) })
      .openapi({
        description: 'Smallest of the given expressions. Requires at least one operand.',
        required: ['min'],
      }),
  )
  .openapi('MinExpression')

const NegExpressionSchema: z.ZodType<NegExpressionType> = z
  .lazy(() => z.object({ neg: ExpressionSchema }).openapi({ required: ['neg'] }))
  .openapi('NegExpression')

const AbsExpressionSchema: z.ZodType<AbsExpressionType> = z
  .lazy(() => z.object({ abs: ExpressionSchema }).openapi({ required: ['abs'] }))
  .openapi('AbsExpression')

const DivExpressionSchema: z.ZodType<DivExpressionType> = z
  .lazy(() => z.object({ div: DivParamsSchema }).openapi({ required: ['div'] }))
  .openapi('DivExpression')

const SqrtExpressionSchema: z.ZodType<SqrtExpressionType> = z
  .lazy(() => z.object({ sqrt: ExpressionSchema }).openapi({ required: ['sqrt'] }))
  .openapi('SqrtExpression')

const PowExpressionSchema: z.ZodType<PowExpressionType> = z
  .lazy(() => z.object({ pow: PowParamsSchema }).openapi({ required: ['pow'] }))
  .openapi('PowExpression')

const ExpExpressionSchema: z.ZodType<ExpExpressionType> = z
  .lazy(() => z.object({ exp: ExpressionSchema }).openapi({ required: ['exp'] }))
  .openapi('ExpExpression')

const Log10ExpressionSchema: z.ZodType<Log10ExpressionType> = z
  .lazy(() => z.object({ log10: ExpressionSchema }).openapi({ required: ['log10'] }))
  .openapi('Log10Expression')

const LnExpressionSchema: z.ZodType<LnExpressionType> = z
  .lazy(() => z.object({ ln: ExpressionSchema }).openapi({ required: ['ln'] }))
  .openapi('LnExpression')

const AcoshExpressionSchema: z.ZodType<AcoshExpressionType> = z
  .lazy(() => z.object({ acosh: ExpressionSchema }).openapi({ required: ['acosh'] }))
  .openapi('AcoshExpression')

const LinDecayExpressionSchema: z.ZodType<LinDecayExpressionType> = z
  .lazy(() =>
    z.object({ lin_decay: DecayParamsExpressionSchema }).openapi({ required: ['lin_decay'] }),
  )
  .openapi('LinDecayExpression')

const ExpDecayExpressionSchema: z.ZodType<ExpDecayExpressionType> = z
  .lazy(() =>
    z.object({ exp_decay: DecayParamsExpressionSchema }).openapi({ required: ['exp_decay'] }),
  )
  .openapi('ExpDecayExpression')

const GaussDecayExpressionSchema: z.ZodType<GaussDecayExpressionType> = z
  .lazy(() =>
    z.object({ gauss_decay: DecayParamsExpressionSchema }).openapi({ required: ['gauss_decay'] }),
  )
  .openapi('GaussDecayExpression')

type ExpressionType =
  | number
  | string
  | z.infer<typeof ConditionSchema>
  | z.infer<typeof GeoDistanceSchema>
  | z.infer<typeof DatetimeExpressionSchema>
  | z.infer<typeof DatetimeKeyExpressionSchema>
  | z.infer<typeof MultExpressionSchema>
  | z.infer<typeof SumExpressionSchema>
  | z.infer<typeof MaxExpressionSchema>
  | z.infer<typeof MinExpressionSchema>
  | z.infer<typeof NegExpressionSchema>
  | z.infer<typeof AbsExpressionSchema>
  | z.infer<typeof DivExpressionSchema>
  | z.infer<typeof SqrtExpressionSchema>
  | z.infer<typeof PowExpressionSchema>
  | z.infer<typeof ExpExpressionSchema>
  | z.infer<typeof Log10ExpressionSchema>
  | z.infer<typeof LnExpressionSchema>
  | z.infer<typeof AcoshExpressionSchema>
  | z.infer<typeof LinDecayExpressionSchema>
  | z.infer<typeof ExpDecayExpressionSchema>
  | z.infer<typeof GaussDecayExpressionSchema>

type MultExpressionType = { mult: z.infer<typeof ExpressionSchema>[] }

type SumExpressionType = { sum: z.infer<typeof ExpressionSchema>[] }

type MaxExpressionType = { max: z.infer<typeof ExpressionSchema>[] }

type MinExpressionType = { min: z.infer<typeof ExpressionSchema>[] }

type NegExpressionType = { neg: z.infer<typeof ExpressionSchema> }

type AbsExpressionType = { abs: z.infer<typeof ExpressionSchema> }

const DivParamsSchema: z.ZodType<DivParamsType> = z
  .lazy(() =>
    z
      .object({
        left: ExpressionSchema,
        right: ExpressionSchema,
        by_zero_default: z.float32().nullable().exactOptional(),
      })
      .openapi({ required: ['left', 'right'] }),
  )
  .openapi('DivParams')

type DivExpressionType = { div: z.infer<typeof DivParamsSchema> }

type DivParamsType = {
  left: z.infer<typeof ExpressionSchema>
  right: z.infer<typeof ExpressionSchema>
  by_zero_default?: number | null
}

type SqrtExpressionType = { sqrt: z.infer<typeof ExpressionSchema> }

const PowParamsSchema: z.ZodType<PowParamsType> = z
  .lazy(() =>
    z
      .object({ base: ExpressionSchema, exponent: ExpressionSchema })
      .openapi({ required: ['base', 'exponent'] }),
  )
  .openapi('PowParams')

type PowExpressionType = { pow: z.infer<typeof PowParamsSchema> }

type PowParamsType = {
  base: z.infer<typeof ExpressionSchema>
  exponent: z.infer<typeof ExpressionSchema>
}

type ExpExpressionType = { exp: z.infer<typeof ExpressionSchema> }

type Log10ExpressionType = { log10: z.infer<typeof ExpressionSchema> }

type LnExpressionType = { ln: z.infer<typeof ExpressionSchema> }

type AcoshExpressionType = { acosh: z.infer<typeof ExpressionSchema> }

const DecayParamsExpressionSchema: z.ZodType<DecayParamsExpressionType> = z
  .lazy(() =>
    z
      .object({
        x: ExpressionSchema,
        target: z
          .union([ExpressionSchema, z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'The target value to start decaying from. Defaults to 0.' }),
        scale: z
          .float32()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The scale factor of the decay, in terms of `x`. Defaults to 1.0. Must be a non-zero positive number.',
          }),
        midpoint: z
          .float32()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The midpoint of the decay. Should be between 0 and 1.Defaults to 0.5. Output will be this value when `|x - target| == scale`.',
          }),
      })
      .openapi({ required: ['x'] }),
  )
  .openapi('DecayParamsExpression')

type LinDecayExpressionType = { lin_decay: z.infer<typeof DecayParamsExpressionSchema> }

type DecayParamsExpressionType = {
  x: z.infer<typeof ExpressionSchema>
  target?: z.infer<typeof ExpressionSchema> | ({ [key: string]: unknown } | null)
  scale?: number | null
  midpoint?: number | null
}

type ExpDecayExpressionType = { exp_decay: z.infer<typeof DecayParamsExpressionSchema> }

type GaussDecayExpressionType = { gauss_decay: z.infer<typeof DecayParamsExpressionSchema> }

const NaiveFeedbackStrategyParamsSchema = z
  .object({ a: z.float32(), b: z.float32().min(0), c: z.float32() })
  .openapi({ required: ['a', 'b', 'c'] })
  .openapi('NaiveFeedbackStrategyParams')

const NaiveFeedbackStrategySchema = z
  .object({ naive: NaiveFeedbackStrategyParamsSchema })
  .openapi({ required: ['naive'] })
  .openapi('NaiveFeedbackStrategy')

type FeedbackStrategyType = z.infer<typeof NaiveFeedbackStrategySchema>

const QuantizationSearchParamsSchema = z
  .object({
    ignore: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'If true, quantized vectors are ignored. Default is false.' }),
    rescore: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true, use original vectors to re-score top-k results. Might require more time in case if original vectors are stored on disk. If not set, qdrant decides automatically apply rescoring or not.',
      }),
    oversampling: z
      .float64()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Oversampling factor for quantization. Default is 1.0.\n\nDefines how many extra vectors should be preselected using quantized index, and then re-scored using original vectors.\n\nFor example, if `oversampling` is 2.4 and `limit` is 100, then 240 vectors will be preselected using quantized index, and then top-100 will be returned after re-scoring.',
      }),
  })
  .openapi({ description: 'Additional parameters of the search', required: [] })
  .openapi('QuantizationSearchParams')

const AcornSearchParamsSchema = z
  .object({
    enable: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'If true, then ACORN may be used for the HNSW search based on filters selectivity. Improves search recall for searches with multiple low-selectivity payload filters, at cost of performance.',
      }),
    max_selectivity: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum selectivity of filters to enable ACORN.\n\nIf estimated filters selectivity is higher than this value, ACORN will not be used. Selectivity is estimated as: `estimated number of points satisfying the filters / total number of points`.\n\n0.0 for never, 1.0 for always. Default is 0.4.',
      }),
  })
  .openapi({ description: 'ACORN-related search parameters', required: [] })
  .openapi('AcornSearchParams')

const IdfScopeSchema = z
  .literal('global')
  .openapi({ description: 'Named IDF scope without a corpus filter.' })
  .openapi('IdfScope')

const IdfCorpusParamsSchema = z
  .object({ corpus: FilterSchema })
  .openapi({
    description: 'IDF statistics computed over the points matching a corpus filter.',
    required: ['corpus'],
  })
  .openapi('IdfCorpusParams')

const IdfParamsSchema = z
  .union([IdfScopeSchema, IdfCorpusParamsSchema])
  .openapi({
    description:
      'Population over which IDF statistics are computed for scoring — the *IDF corpus*.\n\n- `"global"` — collection-wide statistics, same as omitting the parameter. - `{ "corpus": <filter> }` — document count and per-term document frequencies (and, for BM25 over a text index, the average document length) are computed over the points matching the corpus filter only. The corpus is independent of the retrieval filter and is usually broader than it.',
  })
  .openapi('IdfParams')

type SearchParamsType = {
  hnsw_ef?: number | null
  exact?: boolean
  quantization?:
    | z.infer<typeof QuantizationSearchParamsSchema>
    | ({ [key: string]: unknown } | null)
  indexed_only?: boolean
  acorn?: z.infer<typeof AcornSearchParamsSchema> | ({ [key: string]: unknown } | null)
  idf?: z.infer<typeof IdfParamsSchema> | ({ [key: string]: unknown } | null)
}

const HardwareUsageSchema = z
  .object({
    cpu: z.int().min(0),
    payload_io_read: z.int().min(0),
    payload_io_write: z.int().min(0),
    payload_index_io_read: z.int().min(0),
    payload_index_io_write: z.int().min(0),
    vector_io_read: z.int().min(0),
    vector_io_write: z.int().min(0),
  })
  .openapi({
    description: 'Usage of the hardware resources, spent to process the request',
    required: [
      'cpu',
      'payload_index_io_read',
      'payload_index_io_write',
      'payload_io_read',
      'payload_io_write',
      'vector_io_read',
      'vector_io_write',
    ],
  })
  .openapi('HardwareUsage')

const ModelUsageSchema = z
  .object({
    tokens: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
  })
  .openapi({ required: ['tokens'] })
  .openapi('ModelUsage')

const InferenceUsageSchema = z
  .object({ models: z.record(z.string(), ModelUsageSchema) })
  .openapi({ required: ['models'] })
  .openapi('InferenceUsage')

type UsageType = {
  hardware?: z.infer<typeof HardwareUsageSchema> | ({ [key: string]: unknown } | null)
  inference?: z.infer<typeof InferenceUsageSchema> | ({ [key: string]: unknown } | null)
}

type ProgressTreeType = {
  name: string
  started_at?: string | null
  finished_at?: string | null
  duration_sec?: number | null
  done?: bigint | null
  total?: bigint | null
  children?: ProgressTreeType[]
}

const DistanceSchema = z
  .enum(['Cosine', 'Euclid', 'Dot', 'Manhattan'])
  .openapi({
    description:
      'Type of internal tags, build from payload Distance function types used to compare vectors',
  })
  .openapi('Distance')

const MultiVectorComparatorSchema = z.literal('max_sim').openapi('MultiVectorComparator')

const MultiVectorConfigSchema = z
  .object({ comparator: MultiVectorComparatorSchema })
  .openapi({ required: ['comparator'] })
  .openapi('MultiVectorConfig')

const VectorStorageDatatypeSchema = z
  .enum(['float32', 'float16', 'uint8', 'turbo4', 'turbo8', 'turbo16'])
  .openapi({ description: 'Storage types for vectors' })
  .openapi('VectorStorageDatatype')

const DenseVectorConfigSchema = z
  .object({
    size: z.int().min(1).max(65536).openapi({ description: 'Dimensionality of the vectors' }),
    distance: DistanceSchema,
    multivector_config: z
      .union([MultiVectorConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Configuration for multi-vector points (e.g., ColBERT)' }),
    datatype: z
      .union([VectorStorageDatatypeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Element storage type (Float32, Float16, Uint8, Turbo4, Turbo8, Turbo16)',
      }),
  })
  .openapi({
    description:
      'Configuration for creating a new dense named vector.\n\nOnly includes properties that define the vector space and cannot be changed after creation. Storage type, index type, and quantization are inferred.',
    required: ['distance', 'size'],
  })
  .openapi('DenseVectorConfig')

const DenseVectorNameConfigSchema = z
  .object({ dense: DenseVectorConfigSchema })
  .openapi({ description: 'Wrapper for dense vector creation config.', required: ['dense'] })
  .openapi('DenseVectorNameConfig')

const ModifierSchema = z
  .enum(['none', 'idf'])
  .openapi({
    description:
      'If used, include weight modification, which will be applied to sparse vectors at query time: None - no modification (default) Idf - inverse document frequency, based on statistics of the collection',
  })
  .openapi('Modifier')

const SparseVectorConfigSchema = z
  .object({
    modifier: z
      .union([ModifierSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Value modifier for sparse vectors (e.g., IDF)' }),
    datatype: z
      .union([VectorStorageDatatypeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Datatype used to store weights in the index' }),
  })
  .openapi({
    description:
      'Configuration for creating a new sparse named vector.\n\nOnly includes properties that define the vector space and cannot be changed after creation.',
    required: [],
  })
  .openapi('SparseVectorConfig')

const SparseVectorNameConfigSchema = z
  .object({ sparse: SparseVectorConfigSchema })
  .openapi({ description: 'Wrapper for sparse vector creation config.', required: ['sparse'] })
  .openapi('SparseVectorNameConfig')

type VectorNameConfigType =
  | z.infer<typeof DenseVectorNameConfigSchema>
  | z.infer<typeof SparseVectorNameConfigSchema>

const ErrorResponseSchema = z
  .object({
    time: z
      .float32()
      .exactOptional()
      .openapi({ description: 'Time spent to process this request' }),
    status: z
      .object({
        error: z
          .string()
          .exactOptional()
          .openapi({ description: 'Description of the occurred error.' }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    result: z.object({}).nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const CollectionDescriptionSchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('CollectionDescription')

const CollectionsResponseSchema = z
  .object({ collections: z.array(CollectionDescriptionSchema) })
  .openapi({
    required: ['collections'],
    example: {
      collections: [
        { name: 'arxiv-title' },
        { name: 'arxiv-abstract' },
        { name: 'medium-title' },
        { name: 'medium-text' },
      ],
    },
  })
  .openapi('CollectionsResponse')

const CollectionStatusSchema = z
  .enum(['green', 'yellow', 'grey', 'red'])
  .openapi({
    description:
      "Current state of the collection. `Green` - all good. `Yellow` - optimization is running, 'Grey' - optimizations are possible but not triggered, `Red` - some operations failed and was not recovered",
  })
  .openapi('CollectionStatus')

const OptimizersStatusSchema = z
  .xor([
    z.literal('ok').openapi({ description: 'Optimizers are reporting as expected' }),
    z
      .strictObject({ error: z.string() })
      .openapi({ description: 'Something wrong happened with optimizers', required: ['error'] }),
  ])
  .openapi({ description: 'Current state of the collection' })
  .openapi('OptimizersStatus')

const CollectionWarningSchema = z
  .object({ message: z.string().openapi({ description: 'Warning message' }) })
  .openapi({ required: ['message'] })
  .openapi('CollectionWarning')

const MemorySchema = z
  .enum(['cold', 'cached', 'pinned'])
  .openapi({
    description:
      "Memory placement of a component's data.\n\nData is always persisted on disk regardless of this setting; it only controls how the data is held in RAM.\n\nOptions:\n\n* `Cold` - Data is not pre-loaded from disk to RAM. Preferred for rarely queried components or components larger than RAM size. First request might be slow, but data is cached with usage.\n\n* `Cached` - Data is pre-loaded into disk-cache RAM on start. First request is fast, but data may be evicted if there is not enough memory and some other component's data is used more frequently.\n\n* `Pinned` - Data is loaded in RAM and never evicted. First request is fast, but the component must fit in RAM at all times. Recommended for frequently queried small components like quantized vectors or primary indexes.",
  })
  .openapi('Memory')

const HnswConfigDiffSchema = z
  .object({
    m: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Number of edges per node in the index graph. Larger the value - more accurate the search, more space required. Set to 0 to disable the main HNSW graph. Additional payload-aware links may still be built when the effective payload M is positive (see payload_m). This setting alone does not guarantee exact search.',
      }),
    ef_construct: z
      .int()
      .min(4)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Number of neighbours to consider during the index building. Larger the value - more accurate the search, more time required to build the index.',
      }),
    full_scan_threshold: z
      .int()
      .min(10)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Minimal size threshold (in KiloBytes) below which full-scan is preferred over HNSW search. This measures the total size of vectors being queried against. When the maximum estimated amount of points that a condition satisfies is smaller than `full_scan_threshold_kb`, the query planner will use full-scan search instead of HNSW index traversal for better performance. Note: 1Kb = 1 vector of size 256',
      }),
    max_indexing_threads: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Number of parallel threads used for background index building. If 0 - automatically select from 8 to 16. Best to keep between 8 and 16 to prevent likelihood of building broken/inefficient HNSW graphs. On small CPUs, less threads are used.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. Store HNSW index on disk. If set to false, the index will be stored in RAM. Default: false',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the HNSW graph. Overrides the deprecated `on_disk` flag if both are set. Default: `cached` (`cold` if `on_disk` is set to true).',
      }),
    payload_m: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Number of additional payload-aware links per node. If unset, the value of m is used. An effective value of 0 disables these additional links. A positive value allows them for indexed payload fields with HNSW enabled, even when m is 0.',
      }),
    inline_storage: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Store copies of original and quantized vectors within the HNSW index file. Default: false. Enabling this option will trade the search speed for disk usage by reducing amount of random seeks during the search. Requires quantized vectors to be enabled. Multi-vectors are not supported.',
      }),
  })
  .openapi({ required: [] })
  .openapi('HnswConfigDiff')

const ScalarTypeSchema = z.literal('int8').openapi('ScalarType')

const ScalarQuantizationConfigSchema = z
  .object({
    type: ScalarTypeSchema,
    quantile: z
      .float32()
      .min(0.5)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Quantile for quantization. Expected value range in [0.5, 1.0]. If not set - use the whole range of values',
      }),
    always_ram: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true - quantized vectors always will be stored in RAM, ignoring the config of main storage',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.',
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('ScalarQuantizationConfig')

const ScalarQuantizationSchema = z
  .object({ scalar: ScalarQuantizationConfigSchema })
  .openapi({ required: ['scalar'] })
  .openapi('ScalarQuantization')

const CompressionRatioSchema = z.enum(['x4', 'x8', 'x16', 'x32', 'x64']).openapi('CompressionRatio')

const ProductQuantizationConfigSchema = z
  .object({
    compression: CompressionRatioSchema,
    always_ram: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated: use `memory` instead.', deprecated: true }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.',
      }),
  })
  .openapi({ required: ['compression'] })
  .openapi('ProductQuantizationConfig')

const ProductQuantizationSchema = z
  .object({ product: ProductQuantizationConfigSchema })
  .openapi({ required: ['product'] })
  .openapi('ProductQuantization')

const BinaryQuantizationEncodingSchema = z
  .enum(['one_bit', 'two_bits', 'one_and_half_bits'])
  .openapi('BinaryQuantizationEncoding')

const BinaryQuantizationQueryEncodingSchema = z
  .enum(['default', 'binary', 'scalar4bits', 'scalar8bits'])
  .openapi('BinaryQuantizationQueryEncoding')

const BinaryQuantizationConfigSchema = z
  .object({
    always_ram: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated: use `memory` instead.', deprecated: true }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.',
      }),
    encoding: z.union([BinaryQuantizationEncodingSchema, z.any().nullable()]).exactOptional(),
    query_encoding: z
      .union([BinaryQuantizationQueryEncodingSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Asymmetric quantization configuration allows a query to have different quantization than stored vectors. It can increase the accuracy of search at the cost of performance.',
      }),
  })
  .openapi({ required: [] })
  .openapi('BinaryQuantizationConfig')

const BinaryQuantizationSchema = z
  .object({ binary: BinaryQuantizationConfigSchema })
  .openapi({ required: ['binary'] })
  .openapi('BinaryQuantization')

const TurboQuantBitSizeSchema = z
  .enum(['bits1', 'bits1_5', 'bits2', 'bits4', 'bits8'])
  .openapi('TurboQuantBitSize')

const TurboQuantQuantizationConfigSchema = z
  .object({
    always_ram: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deprecated: use `memory` instead.', deprecated: true }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of quantized vectors. Overrides the deprecated `always_ram` flag if both are set. Default: follow the memory placement of the original vector storage.',
      }),
    bits: z.union([TurboQuantBitSizeSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TurboQuantQuantizationConfig')

const TurboQuantizationSchema = z
  .object({ turbo: TurboQuantQuantizationConfigSchema })
  .openapi({ required: ['turbo'] })
  .openapi('TurboQuantization')

const QuantizationConfigSchema = z
  .union([
    ScalarQuantizationSchema,
    ProductQuantizationSchema,
    BinaryQuantizationSchema,
    TurboQuantizationSchema,
  ])
  .openapi('QuantizationConfig')

const DatatypeSchema = z
  .enum(['float32', 'uint8', 'float16', 'turbo4', 'turbo8', 'turbo16'])
  .openapi('Datatype')

const VectorParamsSchema = z
  .object({
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(1n).max(65536n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 1,
        maximum: 65536,
        description: 'Size of a vectors used',
      }),
    distance: DistanceSchema,
    hnsw_config: z
      .union([HnswConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for HNSW index. If none - values from collection configuration are used.',
      }),
    quantization_config: z
      .union([QuantizationConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for quantization. If none - values from collection configuration are used.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, vectors are served from disk, improving RAM usage at the cost of latency Default: false',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the original vector storage. Overrides the deprecated `on_disk` flag if both are set. `pinned` is not supported for dense vector storage. Default: `cached` (`cold` if `on_disk` is set to true).',
      }),
    datatype: z
      .union([DatatypeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Defines which datatype should be used to represent vectors in the storage. Choosing different datatypes allows to optimize memory usage and performance vs accuracy.\n\n- For `float32` datatype - vectors are stored as single-precision floating point numbers, 4 bytes. - For `float16` datatype - vectors are stored as half-precision floating point numbers, 2 bytes. - For `uint8` datatype - vectors are stored as unsigned 8-bit integers, 1 byte. It expects vector elements to be in range `[0, 255]`. - For `turbo4` datatype - vectors are quantized to 4 bits per element using the TurboQuant algorithm. - For `turbo8` datatype - vectors are quantized to 8 bits per element using the TurboQuant algorithm. - For `turbo16` datatype - vectors are quantized to 16 bits per element using the TurboQuant algorithm.',
      }),
    multivector_config: z.union([MultiVectorConfigSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ description: 'Params of single vector data storage', required: ['distance', 'size'] })
  .openapi('VectorParams')

const VectorsConfigSchema = z
  .union([VectorParamsSchema, z.record(z.string(), VectorParamsSchema)])
  .openapi({
    description:
      'Vector params separator for single and multiple vector modes Single mode:\n\n{ "size": 128, "distance": "Cosine" }\n\nor multiple mode:\n\n{ "default": { "size": 128, "distance": "Cosine" } }',
  })
  .openapi('VectorsConfig')

const ShardingMethodSchema = z.enum(['auto', 'custom']).openapi('ShardingMethod')

const PayloadStorageParamsSchema = z
  .object({
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the payload storage. Overrides the deprecated `on_disk_payload` flag if both are set. `pinned` is not supported for payload storage. Default: `cold` (`cached` if `on_disk_payload` is set to false).',
      }),
  })
  .openapi({ description: 'Params of the payload storage', required: [] })
  .openapi('PayloadStorageParams')

const IdTrackerParamsSchema = z
  .object({
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the point id mapping in indexed segments: `cold` keeps it on disk and reads it on demand, `cached` keeps it on disk but primes the page cache with it on load, `pinned` keeps it in RAM. Default: `pinned`.',
      }),
  })
  .openapi({ description: 'Params of the point id tracker', required: [] })
  .openapi('IdTrackerParams')

const SparseIndexParamsSchema = z
  .object({
    full_scan_threshold: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'We prefer a full scan search upto (excluding) this number of vectors.\n\nNote: this is number of vectors, not KiloBytes.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. Store index on disk. If set to false, the index will be stored in RAM. Default: false',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    datatype: z
      .union([DatatypeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Defines which datatype should be used for the index. Choosing different datatypes allows to optimize memory usage and performance vs accuracy.\n\n- For `float32` datatype - vectors are stored as single-precision floating point numbers, 4 bytes. - For `float16` datatype - vectors are stored as half-precision floating point numbers, 2 bytes. - For `uint8` datatype - vectors are quantized to unsigned 8-bit integers, 1 byte. Quantization to fit byte range `[0, 255]` happens during indexing automatically, so the actual vector data does not need to conform to this range.',
      }),
  })
  .openapi({ description: 'Configuration for sparse inverted index.', required: [] })
  .openapi('SparseIndexParams')

const SparseVectorParamsSchema = z
  .object({
    index: z
      .union([SparseIndexParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for index. If none - values from collection configuration are used.',
      }),
    modifier: z
      .union([ModifierSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Configures addition value modifications for sparse vectors. Default: none',
      }),
  })
  .openapi({ description: 'Params of single sparse vector data storage', required: [] })
  .openapi('SparseVectorParams')

const CollectionParamsSchema = z
  .object({
    vectors: VectorsConfigSchema.exactOptional(),
    shard_number: z
      .uint32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Number of shards the collection has' }),
    sharding_method: z
      .union([ShardingMethodSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Sharding method Default is Auto - points are distributed across all available shards Custom - points are distributed across shards according to shard key',
      }),
    replication_factor: z
      .uint32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Number of replicas for each shard' }),
    write_consistency_factor: z
      .uint32()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({
        description:
          'Defines how many replicas should apply the operation for us to consider it successful. Increasing this number will make the collection more resilient to inconsistencies, but will also make it fail if not enough replicas are available. Does not have any performance impact.',
      }),
    read_fan_out_factor: z
      .uint32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Defines how many additional replicas should be processing read request at the same time. Default value is Auto, which means that fan-out will be determined automatically based on the busyness of the local replica. Having more than 0 might be useful to smooth latency spikes of individual nodes.',
      }),
    read_fan_out_delay_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description:
          'Define number of milliseconds to wait before attempting to read from another replica. This setting can help to reduce latency spikes in case of occasional slow replicas. Default is 0, which means delayed fan out request is disabled.',
      }),
    on_disk_payload: z
      .boolean()
      .nullable()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          "Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.\n\nDefault: true",
        deprecated: true,
      }),
    payload: z
      .union([PayloadStorageParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Configuration of the payload storage' }),
    id_tracker: z
      .union([IdTrackerParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Configuration of the point id tracker' }),
    sparse_vectors: z
      .record(z.string(), SparseVectorParamsSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Configuration of the sparse vector storage' }),
  })
  .openapi({ required: [] })
  .openapi('CollectionParams')

const HnswConfigSchema = z
  .object({
    m: z
      .int()
      .min(0)
      .openapi({
        description:
          'Number of edges per node in the index graph. Larger the value - more accurate the search, more space required. Set to 0 to disable the main HNSW graph. Additional payload-aware links may still be built when the effective payload M is positive (see payload_m). This setting alone does not guarantee exact search.',
      }),
    ef_construct: z
      .int()
      .min(4)
      .openapi({
        description:
          'Number of neighbours to consider during the index building. Larger the value - more accurate the search, more time required to build index.',
      }),
    full_scan_threshold: z
      .int()
      .min(0)
      .openapi({
        description:
          'Minimal size threshold (in KiloBytes) below which full-scan is preferred over HNSW search. This measures the total size of vectors being queried against. When the maximum estimated amount of points that a condition satisfies is smaller than `full_scan_threshold_kb`, the query planner will use full-scan search instead of HNSW index traversal for better performance. Note: 1Kb = 1 vector of size 256',
      }),
    max_indexing_threads: z
      .int()
      .min(0)
      .default(0)
      .exactOptional()
      .openapi({
        description:
          'Number of parallel threads used for background index building. If 0 - automatically select from 8 to 16. Best to keep between 8 and 16 to prevent likelihood of slow building or broken/inefficient HNSW graphs. On small CPUs, less threads are used.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. Store HNSW index on disk. If set to false, index will be stored in RAM. Default: false',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the HNSW graph. Overrides the deprecated `on_disk` flag if both are set. Default: `cached` (`cold` if `on_disk` is set to true).',
      }),
    payload_m: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Number of additional payload-aware links per node. If unset, the value of m is used. An effective value of 0 disables these additional links. A positive value allows them for indexed payload fields with HNSW enabled, even when m is 0.',
      }),
    inline_storage: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Store copies of original and quantized vectors within the HNSW index file. Default: false. Enabling this option will trade the search speed for disk usage by reducing amount of random seeks during the search. Requires quantized vectors to be enabled. Multi-vectors are not supported.',
      }),
  })
  .openapi({
    description: 'Config of HNSW index',
    required: ['ef_construct', 'full_scan_threshold', 'm'],
  })
  .openapi('HnswConfig')

const OptimizersConfigSchema = z
  .object({
    deleted_threshold: z
      .float64()
      .min(0)
      .max(1)
      .default(0.2)
      .exactOptional()
      .openapi({
        description:
          'The minimal fraction of deleted vectors in a segment, required to perform segment optimization',
      }),
    vacuum_min_vector_number: z
      .int()
      .min(100)
      .default(1000)
      .exactOptional()
      .openapi({
        description:
          'The minimal number of vectors in a segment, required to perform segment optimization',
      }),
    default_segment_number: z
      .int()
      .min(0)
      .openapi({
        description:
          'Target amount of segments optimizer will try to keep. Real amount of segments may vary depending on multiple parameters: - Amount of stored points - Current write RPS\n\nIt is recommended to select default number of segments as a factor of the number of search threads, so that each segment would be handled evenly by one of the threads. If `default_segment_number = 0`, will be automatically selected by the number of available CPUs.',
      }),
    max_segment_size: z
      .int()
      .min(1)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Do not create segments larger than this size (in kilobytes). Large segments might require disproportionately long indexation times, therefore it makes sense to limit the size of segments.\n\nIf indexing speed is more important - make this parameter lower. If search speed is more important - make this parameter higher. Note: 1Kb = 1 vector of size 256 If not set, will be automatically selected considering the number of available CPUs.',
      }),
    memmap_threshold: z
      .int()
      .min(0)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Maximum size (in kilobytes) of vectors to store in-memory per segment. Segments larger than this threshold will be stored as read-only memmapped file.\n\nMemmap storage is disabled by default, to enable it, set this threshold to a reasonable value.\n\nTo disable memmap storage, set this to `0`. Internally it will use the largest threshold possible.\n\nNote: 1Kb = 1 vector of size 256',
        deprecated: true,
      }),
    indexing_threshold: z
      .int()
      .min(0)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Maximum size (in kilobytes) of vectors allowed for plain index, exceeding this threshold will enable vector indexing\n\nDefault value is 10,000, based on experiments and observations.\n\nTo disable vector indexing, set to `0`.\n\nNote: 1kB = 1 vector of size 256.',
      }),
    flush_interval_sec: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Minimum interval between forced flushes.',
      }),
    max_optimization_threads: z
      .int()
      .min(0)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Max number of threads (jobs) for running optimizations per shard. Note: each optimization job will also use `max_indexing_threads` threads by itself for index building. If null - have no limit and choose dynamically to saturate CPU. If 0 - no optimization threads, optimizations will be disabled.',
      }),
    prevent_unoptimized: z
      .boolean()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'If enabled, the service will try to prevent the creation of large unoptimized segments. When enabled, new points written to segments larger than the indexing threshold are stored as "deferred points": they are persisted in the WAL and segments, but excluded from read/search results until the corresponding segments are optimized (e.g. indexed, quantized, or moved to mmap storage). Update requests with `wait=true` will only return after the deferred points become visible, which may significantly increase the perceived latency between submitting an update and its completion. Update requests with `wait=false` are not affected. Default is disabled.',
      }),
  })
  .openapi({ required: ['default_segment_number', 'flush_interval_sec'] })
  .openapi('OptimizersConfig')

const WalConfigSchema = z
  .object({
    wal_capacity_mb: z.int().min(1).openapi({ description: 'Size of a single WAL segment in MB' }),
    wal_segments_ahead: z
      .int()
      .min(0)
      .openapi({ description: 'Number of WAL segments to create ahead of actually used ones' }),
    wal_retain_closed: z
      .int()
      .min(1)
      .default(1)
      .exactOptional()
      .openapi({ description: 'Number of closed WAL segments to keep' }),
  })
  .openapi({ required: ['wal_capacity_mb', 'wal_segments_ahead'] })
  .openapi('WalConfig')

const StrictModeMultivectorOutputSchema = z
  .object({
    max_vectors: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of vectors in a multivector' }),
  })
  .openapi({ required: [] })
  .openapi('StrictModeMultivectorOutput')

const StrictModeMultivectorConfigOutputSchema = z
  .record(z.string(), StrictModeMultivectorOutputSchema)
  .openapi('StrictModeMultivectorConfigOutput')

const StrictModeSparseOutputSchema = z
  .object({
    max_length: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max length of sparse vector' }),
  })
  .openapi({ required: [] })
  .openapi('StrictModeSparseOutput')

const StrictModeSparseConfigOutputSchema = z
  .record(z.string(), StrictModeSparseOutputSchema)
  .openapi('StrictModeSparseConfigOutput')

const StrictModeConfigOutputSchema = z
  .object({
    enabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether strict mode is enabled for a collection or not.' }),
    max_query_limit: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Max allowed `limit` parameter for all APIs that don't have their own max limit.",
      }),
    max_timeout: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max allowed `timeout` parameter.' }),
    unindexed_filtering_retrieve: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Allow usage of unindexed fields in retrieval based (e.g. search) filters.',
      }),
    unindexed_filtering_update: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Allow usage of unindexed fields in filtered updates (e.g. delete by payload).',
      }),
    search_max_hnsw_ef: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max HNSW value allowed in search parameters.' }),
    search_allow_exact: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether exact search is allowed or not.' }),
    search_max_oversampling: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max oversampling value allowed in search.' }),
    upsert_max_batchsize: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max batchsize when upserting' }),
    search_max_batchsize: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max batchsize when searching' }),
    max_collection_vector_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Max size of a collections vector storage in bytes, ignoring replicas.',
      }),
    read_rate_limit: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of read operations per minute per replica' }),
    write_rate_limit: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of write operations per minute per replica' }),
    max_collection_payload_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max size of a collections payload storage in bytes' }),
    max_points_count: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of points estimated in a collection' }),
    filter_max_conditions: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max conditions a filter can have.' }),
    condition_max_size: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max size of a condition, eg. items in `MatchAny`.' }),
    multivector_config: z
      .union([StrictModeMultivectorConfigOutputSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Multivector configuration' }),
    sparse_config: z
      .union([StrictModeSparseConfigOutputSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Sparse vector configuration' }),
    max_payload_index_count: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of payload indexes in a collection' }),
    max_resident_memory_percent: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use the node-wide quota config instead. Reject memory-consuming update operations when resident memory exceeds this percentage of total RAM (1-100)',
        deprecated: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('StrictModeConfigOutput')

const PayloadSchema = z
  .looseObject({})
  .openapi({ example: { city: 'London', color: 'green' } })
  .openapi('Payload')

const CollectionConfigSchema = z
  .object({
    params: CollectionParamsSchema,
    hnsw_config: HnswConfigSchema,
    optimizer_config: OptimizersConfigSchema,
    wal_config: z.union([WalConfigSchema, z.any().nullable()]).exactOptional(),
    quantization_config: z
      .union([QuantizationConfigSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional(),
    strict_mode_config: z.union([StrictModeConfigOutputSchema, z.any().nullable()]).exactOptional(),
    metadata: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Arbitrary JSON metadata for the collection This can be used to store application-specific information such as creation time, migration data, inference model info, etc.',
      }),
  })
  .openapi({
    description: 'Information about the collection configuration',
    required: ['hnsw_config', 'optimizer_config', 'params'],
  })
  .openapi('CollectionConfig')

const PayloadSchemaTypeSchema = z
  .enum(['keyword', 'integer', 'float', 'geo', 'text', 'bool', 'datetime', 'uuid'])
  .openapi({ description: 'All possible names of payload types' })
  .openapi('PayloadSchemaType')

const KeywordIndexTypeSchema = z.literal('keyword').openapi('KeywordIndexType')

const KeywordIndexParamsSchema = z
  .object({
    type: KeywordIndexTypeSchema,
    is_tenant: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If true - used for tenant optimization. Default: false.' }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    prefix: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true, enable prefix matching (`match: { "prefix": ... }`) on this field. Default: false.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('KeywordIndexParams')

const IntegerIndexTypeSchema = z.literal('integer').openapi('IntegerIndexType')

const IntegerIndexParamsSchema = z
  .object({
    type: IntegerIndexTypeSchema,
    lookup: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If true - support direct lookups. Default is true.' }),
    range: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If true - support ranges filters. Default is true.' }),
    is_principal: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true - use this key to organize storage of the collection data. This option assumes that this key will be used in majority of filtered requests. Default is false.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('IntegerIndexParams')

const FloatIndexTypeSchema = z.literal('float').openapi('FloatIndexType')

const FloatIndexParamsSchema = z
  .object({
    type: FloatIndexTypeSchema,
    is_principal: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true - use this key to organize storage of the collection data. This option assumes that this key will be used in majority of filtered requests.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('FloatIndexParams')

const GeoIndexTypeSchema = z.literal('geo').openapi('GeoIndexType')

const GeoIndexParamsSchema = z
  .object({
    type: GeoIndexTypeSchema,
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('GeoIndexParams')

const TextIndexTypeSchema = z.literal('text').openapi('TextIndexType')

const TextScoringTypeSchema = z
  .literal('bm25')
  .openapi({ description: 'How a text index ranks documents.' })
  .openapi('TextScoringType')

const TextScoringParamsSchema = z
  .object({ type: TextScoringTypeSchema })
  .openapi({
    description:
      'Parameters of ranking over a text index. The index records the length of each document, which BM25 normalizes by. `k1` and `b` are set per query.',
    required: ['type'],
  })
  .openapi('TextScoringParams')

const TextScoringInterfaceSchema = z
  .union([z.boolean(), TextScoringParamsSchema])
  .openapi({
    description:
      'BM25 scoring for a text index: `true` for the default parameters, `false` to disable it, or the parameters themselves.',
  })
  .openapi('TextScoringInterface')

const TextIndexParamsSchema = z
  .object({
    type: TextIndexTypeSchema,
    tokenizer: TokenizerTypeSchema.exactOptional(),
    min_token_len: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Minimum characters to be tokenized.' }),
    max_token_len: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum characters to be tokenized.' }),
    lowercase: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If true, lowercase all tokens. Default: true.' }),
    ascii_folding: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true, normalize tokens by folding accented characters to ASCII (e.g., "ação" -> "acao"). Default: false.',
      }),
    phrase_matching: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If true, support phrase matching. Default: false.' }),
    stopwords: z
      .union([StopwordsInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Ignore this set of tokens. Can select from predefined languages and/or provide a custom set.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    stemmer: z
      .union([StemmingAlgorithmSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Algorithm for stemming. Default: disabled.' }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    scoring: z
      .union([TextScoringInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Enable ranking points by BM25 over this field; `true` for the defaults. Changing it rebuilds the index. Default: disabled.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].title`. The field must be inside the array's elements. Every query on the field, not only nested filters, treats each element as its own document: a condition matches a point when a single element matches it, and BM25 scores elements separately. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('TextIndexParams')

const BoolIndexTypeSchema = z.literal('bool').openapi('BoolIndexType')

const BoolIndexParamsSchema = z
  .object({
    type: BoolIndexTypeSchema,
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('BoolIndexParams')

const DatetimeIndexTypeSchema = z.literal('datetime').openapi('DatetimeIndexType')

const DatetimeIndexParamsSchema = z
  .object({
    type: DatetimeIndexTypeSchema,
    is_principal: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'If true - use this key to organize storage of the collection data. This option assumes that this key will be used in majority of filtered requests.',
      }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('DatetimeIndexParams')

const UuidIndexTypeSchema = z.literal('uuid').openapi('UuidIndexType')

const UuidIndexParamsSchema = z
  .object({
    type: UuidIndexTypeSchema,
    is_tenant: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'If true - used for tenant optimization.' }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, store the index on disk. Default: false.',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the index. Overrides the deprecated `on_disk` flag if both are set. Default: `pinned` (`cold` if `on_disk` is set to true).',
      }),
    enable_hnsw: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW graph building for this payload field. If true, builds additional HNSW links (Need payload_m > 0). Default: true.',
      }),
    nested: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Index every object of this array as a separate entry, e.g. `offers` for the field `offers[].price`. The field must be inside the array's elements. `is_empty` on the field matches a point when one of its elements lacks the field, and never a point without elements. Default: disabled.",
      }),
  })
  .openapi({ required: ['type'] })
  .openapi('UuidIndexParams')

const PayloadSchemaParamsSchema = z
  .union([
    KeywordIndexParamsSchema,
    IntegerIndexParamsSchema,
    FloatIndexParamsSchema,
    GeoIndexParamsSchema,
    TextIndexParamsSchema,
    BoolIndexParamsSchema,
    DatetimeIndexParamsSchema,
    UuidIndexParamsSchema,
  ])
  .openapi({ description: 'Payload type with parameters' })
  .openapi('PayloadSchemaParams')

const PayloadIndexInfoSchema = z
  .object({
    data_type: PayloadSchemaTypeSchema,
    params: z.union([PayloadSchemaParamsSchema, z.any().nullable()]).exactOptional(),
    points: z.int().min(0).openapi({ description: 'Number of points indexed with this index' }),
  })
  .openapi({
    description: 'Display payload field type & index information',
    required: ['data_type', 'points'],
  })
  .openapi('PayloadIndexInfo')

const UpdateQueueInfoSchema = z
  .object({
    length: z.int().min(0).openapi({ description: 'Number of elements in the queue' }),
    deferred_points: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Number of points that are deferred (i.e hidden from search as they're not yet optimized).",
      }),
  })
  .openapi({ required: ['length'] })
  .openapi('UpdateQueueInfo')

const CollectionInfoSchema = z
  .object({
    status: CollectionStatusSchema,
    optimizer_status: OptimizersStatusSchema,
    warnings: z
      .array(CollectionWarningSchema)
      .exactOptional()
      .openapi({ description: 'Warnings related to the collection' }),
    indexed_vectors_count: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Approximate number of indexed vectors in the collection. Indexed vectors in large segments are faster to query, as it is stored in a specialized vector index.',
      }),
    points_count: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Approximate number of points (vectors + payloads) in collection. Each point could be accessed by unique id.',
      }),
    segments_count: z
      .int()
      .min(0)
      .openapi({
        description:
          'Number of segments in collection. Each segment has independent vector as payload indexes',
      }),
    config: CollectionConfigSchema,
    payload_schema: z
      .record(z.string(), PayloadIndexInfoSchema)
      .openapi({ description: 'Types of stored payload' }),
    update_queue: z
      .union([UpdateQueueInfoSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Update queue info' }),
    created_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Time of the collection creation. Absent for collections created before Qdrant started recording it.',
      }),
  })
  .openapi({
    description: 'Current statistics and configuration of the collection',
    required: ['config', 'optimizer_status', 'payload_schema', 'segments_count', 'status'],
  })
  .openapi('CollectionInfo')

const PayloadSelectorIncludeSchema = z
  .strictObject({
    include: z.array(z.string()).openapi({ description: 'Only include this payload keys' }),
  })
  .openapi({ required: ['include'] })
  .openapi('PayloadSelectorInclude')

const PayloadSelectorExcludeSchema = z
  .strictObject({
    exclude: z
      .array(z.string())
      .openapi({ description: 'Exclude this fields from returning payload' }),
  })
  .openapi({ required: ['exclude'] })
  .openapi('PayloadSelectorExclude')

const PayloadSelectorSchema = z
  .union([PayloadSelectorIncludeSchema, PayloadSelectorExcludeSchema])
  .openapi({ description: 'Specifies how to treat payload selector' })
  .openapi('PayloadSelector')

const WithPayloadInterfaceSchema = z
  .union([
    z
      .boolean()
      .openapi({
        description: 'If `true` - return all payload, If `false` - do not return payload',
      }),
    z.array(z.string()).openapi({ description: 'Specify which fields to return' }),
    PayloadSelectorSchema,
  ])
  .openapi({ description: 'Options for specifying which payload to include or not' })
  .openapi('WithPayloadInterface')

const WithVectorSchema = z
  .union([
    z
      .boolean()
      .openapi({ description: 'If `true` - return all vector, If `false` - do not return vector' }),
    z.array(z.string()).openapi({ description: 'Specify which vector to return' }),
  ])
  .openapi({ description: 'Options for specifying which vector to include' })
  .openapi('WithVector')

const PointRequestSchema = z
  .object({
    shard_key: z
      .union([ShardKeySelectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Specify in which shards to look for the points, if not specified - look in all shards',
      }),
    ids: z.array(ExtendedPointIdSchema).openapi({ description: 'Look for points with ids' }),
    with_payload: z
      .union([WithPayloadInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Select which payload to return with the response. Default is true.',
      }),
    with_vector: WithVectorSchema.exactOptional(),
  })
  .openapi({ required: ['ids'] })
  .openapi('PointRequest')

const VectorOutputSchema = z
  .union([z.array(z.float32()), SparseVectorSchema, z.array(z.array(z.float32()))])
  .openapi({ description: 'Vector Data stored in Point' })
  .openapi('VectorOutput')

const VectorStructOutputSchema = z
  .union([
    z.array(z.float32()).openapi({ example: [0.875, 0.140625, 0.897599995136261] }),
    z.array(z.array(z.float32())).openapi({
      example: [
        [0.875, 0.140625, 0.11020000278949738],
        [0.7580000162124634, 0.28126001358032227, 0.9687100052833557],
        [0.6209999918937683, 0.42187801003456116, 0.9375],
      ],
    }),
    z
      .record(z.string(), VectorOutputSchema)
      .openapi({
        example: { 'image-embeddings': [0.8730000257492065, 0.140625, 0.897599995136261] },
      }),
  ])
  .openapi({ description: 'Vector data stored in Point' })
  .openapi('VectorStructOutput')

const OrderValueSchema = z
  .union([
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64', example: 42 }),
    z.float64().openapi({ example: 42.5 }),
  ])
  .openapi('OrderValue')

const RecordSchema = z
  .object({
    id: ExtendedPointIdSchema,
    payload: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Payload - values assigned to the point' }),
    vector: z
      .union([VectorStructOutputSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Vector of the point' }),
    shard_key: z
      .union([ShardKeySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Shard Key' }),
    order_value: z.union([OrderValueSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ description: 'Point data', required: ['id'] })
  .openapi('Record')

const ScoredPointSchema = z
  .object({
    id: ExtendedPointIdSchema,
    version: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Point version',
        example: 3,
      }),
    score: z
      .float32()
      .openapi({ description: 'Points vector distance to the query vector', example: 0.75 }),
    payload: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Payload - values assigned to the point' }),
    vector: z
      .union([VectorStructOutputSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Vector of the point' }),
    shard_key: z
      .union([ShardKeySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Shard Key' }),
    order_value: z
      .union([OrderValueSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Order-by value' }),
  })
  .openapi({ description: 'Search result', required: ['id', 'score', 'version'] })
  .openapi('ScoredPoint')

const UpdateStatusSchema = z
  .enum(['acknowledged', 'completed', 'wait_timeout'])
  .openapi({
    description:
      '`Acknowledged` - Request is saved to WAL and will be process in a queue. `Completed` - Request is completed, changes are actual. `WaitTimeout` - Request is waiting for timeout.',
  })
  .openapi('UpdateStatus')

const UpdateResultSchema = z
  .object({
    operation_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description: 'Sequential number of the operation',
      }),
    status: UpdateStatusSchema,
  })
  .openapi({ required: ['status'] })
  .openapi('UpdateResult')

const ScrollRequestSchema = z
  .object({
    shard_key: z
      .union([ShardKeySelectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Specify in which shards to look for the points, if not specified - look in all shards',
      }),
    offset: z
      .union([ExtendedPointIdSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Start ID to read points from.' }),
    limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Page size. Default: 10' }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Look only for points which satisfies this conditions. If not provided - all points.',
      }),
    with_payload: z
      .union([WithPayloadInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Select which payload to return with the response. Default is true.',
      }),
    with_vector: WithVectorSchema.exactOptional(),
    order_by: z
      .union([OrderByInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Order the records by a payload field.' }),
  })
  .openapi({
    description: 'Scroll request - paginate over all points which matches given condition',
    required: [],
  })
  .openapi('ScrollRequest')

const ScrollResultSchema = z
  .object({
    points: z.array(RecordSchema).openapi({
      description: 'List of retrieved points',
      example: [
        {
          id: 40,
          payload: { city: 'London', color: 'green' },
          vector: [0.875, 0.140625, 0.897599995136261],
          shard_key: 'region_1',
        },
        {
          id: 41,
          payload: { city: 'Paris', color: 'red' },
          vector: [0.75, 0.640625, 0.8945000171661377],
          shard_key: 'region_1',
        },
      ],
    }),
    next_page_offset: z
      .union([ExtendedPointIdSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Offset which should be used to retrieve a next page result' }),
  })
  .openapi({ description: 'Result of the points read request', required: ['points'] })
  .openapi('ScrollResult')

const WalConfigDiffSchema = z
  .object({
    wal_capacity_mb: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Size of a single WAL segment in MB' }),
    wal_segments_ahead: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of WAL segments to create ahead of actually used ones' }),
    wal_retain_closed: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of closed WAL segments to retain' }),
  })
  .openapi({ required: [] })
  .openapi('WalConfigDiff')

const MaxOptimizationThreadsSettingSchema = z
  .literal('auto')
  .openapi('MaxOptimizationThreadsSetting')

const MaxOptimizationThreadsSchema = z
  .union([MaxOptimizationThreadsSettingSchema, z.int().min(0)])
  .openapi('MaxOptimizationThreads')

const OptimizersConfigDiffSchema = z
  .object({
    deleted_threshold: z
      .float64()
      .min(0)
      .max(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimal fraction of deleted vectors in a segment, required to perform segment optimization',
      }),
    vacuum_min_vector_number: z
      .int()
      .min(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The minimal number of vectors in a segment, required to perform segment optimization',
      }),
    default_segment_number: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Target amount of segments optimizer will try to keep. Real amount of segments may vary depending on multiple parameters: - Amount of stored points - Current write RPS\n\nIt is recommended to select default number of segments as a factor of the number of search threads, so that each segment would be handled evenly by one of the threads If `default_segment_number = 0`, will be automatically selected by the number of available CPUs',
      }),
    max_segment_size: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Do not create segments larger than this size (in kilobytes). Large segments might require disproportionately long indexation times, therefore it makes sense to limit the size of segments.\n\nIf indexation speed have more priority for your - make this parameter lower. If search speed is more important - make this parameter higher. Note: 1Kb = 1 vector of size 256',
      }),
    memmap_threshold: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum size (in kilobytes) of vectors to store in-memory per segment. Segments larger than this threshold will be stored as read-only memmapped file.\n\nMemmap storage is disabled by default, to enable it, set this threshold to a reasonable value.\n\nTo disable memmap storage, set this to `0`.\n\nNote: 1Kb = 1 vector of size 256\n\nDeprecated since Qdrant 1.15.0',
        deprecated: true,
      }),
    indexing_threshold: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Maximum size (in kilobytes) of vectors allowed for plain index, exceeding this threshold will enable vector indexing\n\nDefault value is 20,000, based on <https://github.com/google-research/google-research/blob/master/scann/docs/algorithms.md>.\n\nTo disable vector indexing, set to `0`.\n\nNote: 1kB = 1 vector of size 256.',
      }),
    flush_interval_sec: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description: 'Minimum interval between forced flushes.',
      }),
    max_optimization_threads: z
      .union([MaxOptimizationThreadsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Max number of threads (jobs) for running optimizations per shard. Note: each optimization job will also use `max_indexing_threads` threads by itself for index building. If "auto" - have no limit and choose dynamically to saturate CPU. If 0 - no optimization threads, optimizations will be disabled.',
      }),
    prevent_unoptimized: z
      .boolean()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'If enabled, the service will try to prevent the creation of large unoptimized segments. When enabled, new points written to segments larger than the indexing threshold are stored as "deferred points": they are persisted in the WAL and segments, but excluded from read/search results until the corresponding segments are optimized (e.g. indexed, quantized, or moved to mmap storage). Update requests with `wait=true` will only return after the deferred points become visible, which may significantly increase the perceived latency between submitting an update and its completion. Update requests with `wait=false` are not affected. Default is disabled.',
      }),
  })
  .openapi({ required: [] })
  .openapi('OptimizersConfigDiff')

const StrictModeMultivectorSchema = z
  .object({
    max_vectors: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of vectors in a multivector' }),
  })
  .openapi({ required: [] })
  .openapi('StrictModeMultivector')

const StrictModeMultivectorConfigSchema = z
  .record(z.string(), StrictModeMultivectorSchema)
  .openapi('StrictModeMultivectorConfig')

const StrictModeSparseSchema = z
  .object({
    max_length: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max length of sparse vector' }),
  })
  .openapi({ required: [] })
  .openapi('StrictModeSparse')

const StrictModeSparseConfigSchema = z
  .record(z.string(), StrictModeSparseSchema)
  .openapi('StrictModeSparseConfig')

const StrictModeConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether strict mode is enabled for a collection or not.' }),
    max_query_limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Max allowed `limit` parameter for all APIs that don't have their own max limit.",
      }),
    max_timeout: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max allowed `timeout` parameter.' }),
    unindexed_filtering_retrieve: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Allow usage of unindexed fields in retrieval based (e.g. search) filters.',
      }),
    unindexed_filtering_update: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Allow usage of unindexed fields in filtered updates (e.g. delete by payload).',
      }),
    search_max_hnsw_ef: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max HNSW ef value allowed in search parameters.' }),
    search_allow_exact: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Whether exact search is allowed.' }),
    search_max_oversampling: z
      .float64()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max oversampling value allowed in search.' }),
    upsert_max_batchsize: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max batchsize when upserting' }),
    search_max_batchsize: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max batchsize when searching' }),
    max_collection_vector_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Max size of a collections vector storage in bytes, ignoring replicas.',
      }),
    read_rate_limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of read operations per minute per replica' }),
    write_rate_limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of write operations per minute per replica' }),
    max_collection_payload_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max size of a collections payload storage in bytes' }),
    max_points_count: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of points estimated in a collection' }),
    filter_max_conditions: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max conditions a filter can have.' }),
    condition_max_size: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max size of a condition, eg. items in `MatchAny`.' }),
    multivector_config: z
      .union([StrictModeMultivectorConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Multivector strict mode configuration' }),
    sparse_config: z
      .union([StrictModeSparseConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Sparse vector strict mode configuration' }),
    max_payload_index_count: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of payload indexes in a collection' }),
    max_resident_memory_percent: z
      .int()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use the node-wide quota config (`PUT /quotas`) instead, which caps the same resource for every collection. Scheduled for removal in 1.21.\n\nReject memory-consuming update operations (e.g. upsert, set payload) when the process resident memory exceeds this percentage of total system memory (or cgroup limit). Value in [1, 100]. Memory is a node-wide resource, so this only tightens the quota for one collection; it cannot lift it. Delete operations are not affected, so callers can still free memory.',
        deprecated: true,
      }),
  })
  .openapi({ required: [] })
  .openapi('StrictModeConfig')

const CreateCollectionSchema = z
  .object({
    vectors: VectorsConfigSchema.exactOptional(),
    shard_number: z
      .uint32()
      .min(1)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'For auto sharding: Number of shards in collection. - If not specified, selected automatically - Minimum is 1\n\nFor custom sharding: Number of shards in collection per shard group. - Default is 1, meaning that each shard key will be mapped to a single shard - Minimum is 1',
      }),
    sharding_method: z
      .union([ShardingMethodSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Sharding method Default is Auto - points are distributed across all available shards Custom - points are distributed across shards according to shard key',
      }),
    replication_factor: z
      .uint32()
      .min(1)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Number of shards replicas. Default is 1 Minimum is 1' }),
    write_consistency_factor: z
      .uint32()
      .min(1)
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Defines how many replicas should apply the operation for us to consider it successful. Increasing this number will make the collection more resilient to inconsistencies, but will also make it fail if not enough replicas are available. Does not have any performance impact.',
      }),
    on_disk_payload: z
      .boolean()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.\n\nDefault: true",
        deprecated: true,
      }),
    payload: z
      .union([PayloadStorageParamsSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Configuration of the payload storage' }),
    id_tracker: z
      .union([IdTrackerParamsSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Configuration of the point id tracker' }),
    hnsw_config: z
      .union([HnswConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for HNSW index. If none - values from service configuration file are used.',
      }),
    wal_config: z
      .union([WalConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for WAL. If none - values from service configuration file are used.',
      }),
    optimizers_config: z
      .union([OptimizersConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for Optimizers.  If none - values from service configuration file are used.',
      }),
    quantization_config: z
      .union([QuantizationConfigSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Quantization parameters. If none - quantization is disabled.' }),
    sparse_vectors: z
      .record(z.string(), SparseVectorParamsSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Sparse vector data config.' }),
    strict_mode_config: z
      .union([StrictModeConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Strict-mode config.' }),
    metadata: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Arbitrary JSON metadata for the collection This can be used to store application-specific information such as creation time, migration data, inference model info, etc.',
      }),
  })
  .openapi({
    description: 'Operation for creating new collection and (optionally) specify index params',
    required: [],
  })
  .openapi('CreateCollection')

const DisabledSchema = z.literal('Disabled').openapi('Disabled')

const QuantizationConfigDiffSchema = z
  .union([
    ScalarQuantizationSchema,
    ProductQuantizationSchema,
    BinaryQuantizationSchema,
    TurboQuantizationSchema,
    DisabledSchema,
  ])
  .openapi('QuantizationConfigDiff')

const VectorParamsDiffSchema = z
  .object({
    hnsw_config: z
      .union([HnswConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Update params for HNSW index. If empty object - it will be unset.',
      }),
    quantization_config: z
      .union([QuantizationConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Update params for quantization. If none - it is left unchanged.' }),
    on_disk: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Deprecated: use `memory` instead. If true, vectors are served from disk, improving RAM usage at the cost of latency',
        deprecated: true,
      }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the original vector storage. Overrides the deprecated `on_disk` flag if both are set. `pinned` is not supported for dense vector storage.',
      }),
  })
  .openapi({ required: [] })
  .openapi('VectorParamsDiff')

const VectorsConfigDiffSchema = z
  .record(z.string(), VectorParamsDiffSchema)
  .openapi({
    description:
      'Vector update params for multiple vectors\n\n{ "vector_name": { "hnsw_config": { "m": 8 } } }',
  })
  .openapi('VectorsConfigDiff')

const CollectionParamsDiffSchema = z
  .object({
    replication_factor: z
      .uint32()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of replicas for each shard' }),
    write_consistency_factor: z
      .uint32()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Minimal number successful responses from replicas to consider operation successful',
      }),
    read_fan_out_factor: z
      .uint32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Fan-out every read request to these many additional remote nodes (and return first available response)',
      }),
    read_fan_out_delay_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description: 'Delay in milliseconds before sending read requests to remote nodes',
      }),
    on_disk_payload: z
      .boolean()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "Deprecated: use `payload.memory` instead. If true - point's payload will not be stored in memory. It will be read from the disk every time it is requested. This setting saves RAM by (slightly) increasing the response time. Note: those payload values that are involved in filtering and are indexed - remain in RAM.",
        deprecated: true,
      }),
    payload: z
      .union([PayloadStorageParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Update params of the payload storage. If none - it is left unchanged.',
      }),
    id_tracker: z
      .union([IdTrackerParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Update params of the point id tracker. If none - it is left unchanged.',
      }),
  })
  .openapi({ required: [] })
  .openapi('CollectionParamsDiff')

const SparseVectorsConfigSchema = z
  .record(z.string(), SparseVectorParamsSchema)
  .openapi('SparseVectorsConfig')

const UpdateCollectionSchema = z
  .object({
    vectors: z
      .union([VectorsConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Map of vector data parameters to update for each named vector. To update parameters in a collection having a single unnamed vector, use an empty string as name.',
      }),
    optimizers_config: z
      .union([OptimizersConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom params for Optimizers.  If none - it is left unchanged. This operation is blocking, it will only proceed once all current optimizations are complete',
      }),
    params: z
      .union([CollectionParamsDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Collection base params. If none - it is left unchanged.' }),
    hnsw_config: z
      .union([HnswConfigDiffSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'HNSW parameters to update for the collection index. If none - it is left unchanged.',
      }),
    quantization_config: z
      .union([QuantizationConfigDiffSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'Quantization parameters to update. If none - it is left unchanged.',
      }),
    sparse_vectors: z
      .union([SparseVectorsConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Map of sparse vector data parameters to update for each sparse vector.',
      }),
    strict_mode_config: z.union([StrictModeConfigSchema, z.any().nullable()]).exactOptional(),
    metadata: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Metadata to update for the collection. If provided, this will merge with existing metadata. Individual keys can be removed by setting their value to `null`.',
      }),
  })
  .openapi({
    description: 'Operation for updating parameters of the existing collection',
    required: [],
  })
  .openapi('UpdateCollection')

const CreateAliasSchema = z
  .object({ collection_name: z.string(), alias_name: z.string() })
  .openapi({
    description:
      'Create alternative name for a collection. Collection will be available under both names for search, retrieve,',
    required: ['alias_name', 'collection_name'],
  })
  .openapi('CreateAlias')

const CreateAliasOperationSchema = z
  .object({ create_alias: CreateAliasSchema })
  .openapi({ required: ['create_alias'] })
  .openapi('CreateAliasOperation')

const DeleteAliasSchema = z
  .object({ alias_name: z.string() })
  .openapi({ description: 'Delete alias if exists', required: ['alias_name'] })
  .openapi('DeleteAlias')

const DeleteAliasOperationSchema = z
  .object({ delete_alias: DeleteAliasSchema })
  .openapi({ description: 'Delete alias if exists', required: ['delete_alias'] })
  .openapi('DeleteAliasOperation')

const RenameAliasSchema = z
  .object({ old_alias_name: z.string(), new_alias_name: z.string() })
  .openapi({
    description: 'Change alias to a new one',
    required: ['new_alias_name', 'old_alias_name'],
  })
  .openapi('RenameAlias')

const RenameAliasOperationSchema = z
  .object({ rename_alias: RenameAliasSchema })
  .openapi({ description: 'Change alias to a new one', required: ['rename_alias'] })
  .openapi('RenameAliasOperation')

const AliasOperationsSchema = z
  .union([CreateAliasOperationSchema, DeleteAliasOperationSchema, RenameAliasOperationSchema])
  .openapi({ description: 'Group of all the possible operations related to collection aliases' })
  .openapi('AliasOperations')

const ChangeAliasesOperationSchema = z
  .object({ actions: z.array(AliasOperationsSchema) })
  .openapi({
    description:
      'Operation for performing changes of collection aliases. Alias changes are atomic, meaning that no collection modifications can happen between alias operations.',
    required: ['actions'],
  })
  .openapi('ChangeAliasesOperation')

const PayloadFieldSchemaSchema = z
  .union([PayloadSchemaTypeSchema, PayloadSchemaParamsSchema])
  .openapi('PayloadFieldSchema')

const CreateFieldIndexSchema = z
  .object({
    field_name: z.string(),
    field_schema: z.union([PayloadFieldSchemaSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['field_name'] })
  .openapi('CreateFieldIndex')

const PointIdsListSchema = z
  .object({
    points: z.array(ExtendedPointIdSchema),
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['points'] })
  .openapi('PointIdsList')

const FilterSelectorSchema = z
  .object({
    filter: FilterSchema,
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['filter'] })
  .openapi('FilterSelector')

const PointsSelectorSchema = z
  .union([PointIdsListSchema, FilterSelectorSchema])
  .openapi('PointsSelector')

const VectorSchema: z.ZodType<VectorType> = z
  .lazy(() =>
    z
      .union([
        z.array(z.float32()),
        SparseVectorSchema,
        z.array(z.array(z.float32())),
        DocumentSchema,
        ImageSchema,
        InferenceObjectSchema,
      ])
      .openapi({
        description:
          'Vector Data Vectors can be described directly with values Or specified with source "objects" for inference',
      }),
  )
  .openapi('Vector')

const BatchVectorStructSchema = z
  .union([
    z.array(z.array(z.float32())),
    z.array(z.array(z.array(z.float32()))),
    z.record(z.string(), z.array(VectorSchema)),
    z.array(DocumentSchema),
    z.array(ImageSchema),
    z.array(InferenceObjectSchema),
  ])
  .openapi('BatchVectorStruct')

const BatchSchema = z
  .object({
    ids: z.array(ExtendedPointIdSchema),
    vectors: BatchVectorStructSchema,
    payloads: z
      .array(z.union([PayloadSchema, z.any().nullable()]))
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: ['ids', 'vectors'] })
  .openapi('Batch')

const UpdateModeSchema = z
  .enum(['upsert', 'insert_only', 'update_only'])
  .openapi({
    description:
      'Defines the mode of the upsert operation\n\n* `upsert` - default mode, insert new points, update existing points * `insert_only` - only insert new points, do not update existing points * `update_only` - only update existing points, do not insert new points',
  })
  .openapi('UpdateMode')

const PointsBatchSchema = z
  .object({
    batch: BatchSchema,
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    update_filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          "Filter to apply when updating existing points. Only points matching this filter will be updated. Points that don't match will keep their current state. New points will be inserted regardless of the filter.",
      }),
    update_mode: z
      .union([UpdateModeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Mode of the upsert operation: insert_only, upsert (default), update_only',
      }),
  })
  .openapi({ required: ['batch'] })
  .openapi('PointsBatch')

const VectorStructSchema = z
  .union([
    z.array(z.float32()).openapi({ example: [0.875, 0.140625, 0.897599995136261] }),
    z.array(z.array(z.float32())).openapi({
      example: [
        [0.875, 0.140625, 0.11020000278949738],
        [0.7580000162124634, 0.28126001358032227, 0.9687100052833557],
        [0.6209999918937683, 0.42187801003456116, 0.9375],
      ],
    }),
    z
      .record(z.string(), VectorSchema)
      .openapi({
        example: { 'image-embeddings': [0.8730000257492065, 0.140625, 0.897599995136261] },
      }),
    DocumentSchema,
    ImageSchema,
    InferenceObjectSchema,
  ])
  .openapi({
    description: 'Full vector data per point separator with single and multiple vector modes',
  })
  .openapi('VectorStruct')

const PointStructSchema = z
  .object({
    id: ExtendedPointIdSchema,
    vector: VectorStructSchema,
    payload: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Payload values (optional)' }),
  })
  .openapi({ required: ['id', 'vector'] })
  .openapi('PointStruct')

const PointsListSchema = z
  .object({
    points: z.array(PointStructSchema),
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    update_filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          "Filter to apply when updating existing points. Only points matching this filter will be updated. Points that don't match will keep their current state. New points will be inserted regardless of the filter.",
      }),
    update_mode: z
      .union([UpdateModeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Mode of the upsert operation: insert_only, upsert (default), update_only',
      }),
  })
  .openapi({ required: ['points'] })
  .openapi('PointsList')

const PointInsertOperationsSchema = z
  .union([PointsBatchSchema, PointsListSchema])
  .openapi('PointInsertOperations')

const SetPayloadSchema = z
  .object({
    payload: PayloadSchema,
    points: z
      .array(ExtendedPointIdSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Assigns payload to each point in this list' }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Assigns payload to each point that satisfy this filter condition' }),
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    key: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Assigns payload to each point that satisfy this path of property' }),
  })
  .openapi({
    description: 'This data structure is used in API interface and applied across multiple shards',
    required: ['payload'],
  })
  .openapi('SetPayload')

const DeletePayloadSchema = z
  .object({
    keys: z
      .array(z.string())
      .openapi({ description: 'List of payload keys to remove from payload' }),
    points: z
      .array(ExtendedPointIdSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deletes values from each point in this list' }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Deletes values from points that satisfy this filter condition' }),
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({
    description: 'This data structure is used in API interface and applied across multiple shards',
    required: ['keys'],
  })
  .openapi('DeletePayload')

const PeerInfoSchema = z
  .object({ uri: z.string() })
  .openapi({ description: 'Information of a peer in the cluster', required: ['uri'] })
  .openapi('PeerInfo')

const StateRoleSchema = z
  .enum(['Follower', 'Candidate', 'Leader', 'PreCandidate'])
  .openapi({ description: 'Role of the peer in the consensus' })
  .openapi('StateRole')

const RaftInfoSchema = z
  .object({
    term: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description:
          'Raft divides time into terms of arbitrary length, each beginning with an election. If a candidate wins the election, it remains the leader for the rest of the term. The term number increases monotonically. Each server stores the current term number which is also exchanged in every communication.',
      }),
    commit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description:
          'The index of the latest committed (finalized) operation that this peer is aware of.',
      }),
    pending_operations: z
      .int()
      .min(0)
      .openapi({
        description: 'Number of consensus operations pending to be applied on this peer',
      }),
    leader: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description: 'Leader of the current term',
      }),
    role: z
      .union([StateRoleSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Role of this peer in the current term' }),
    is_voter: z.boolean().openapi({ description: 'Is this peer a voter or a learner' }),
  })
  .openapi({
    description: 'Summary information about the current raft state',
    required: ['commit', 'is_voter', 'pending_operations', 'term'],
  })
  .openapi('RaftInfo')

const ConsensusThreadStatusSchema = z
  .xor([
    z
      .object({
        consensus_thread_status: z.literal('working'),
        last_update: z.iso.datetime({ offset: true }),
      })
      .openapi({ required: ['consensus_thread_status', 'last_update'] }),
    z
      .object({ consensus_thread_status: z.literal('stopped') })
      .openapi({ required: ['consensus_thread_status'] }),
    z
      .object({ consensus_thread_status: z.literal('stopped_with_err'), err: z.string() })
      .openapi({ required: ['consensus_thread_status', 'err'] }),
  ])
  .openapi({ description: 'Information about current consensus thread status' })
  .openapi('ConsensusThreadStatus')

const MessageSendErrorsSchema = z
  .object({
    count: z.int().min(0),
    latest_error: z.string().nullable().exactOptional(),
    latest_error_timestamp: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'Timestamp of the latest error' }),
  })
  .openapi({ description: 'Message send failures for a particular peer', required: ['count'] })
  .openapi('MessageSendErrors')

const ClusterStatusSchema = z
  .xor([
    z.object({ status: z.literal('disabled') }).openapi({ required: ['status'] }),
    z
      .object({
        status: z.literal('enabled'),
        peer_id: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({
            type: 'integer',
            format: 'uint64',
            minimum: 0,
            description: 'ID of this peer',
          }),
        peers: z
          .record(z.string(), PeerInfoSchema)
          .openapi({ description: 'Peers composition of the cluster with main information' }),
        raft_info: RaftInfoSchema,
        consensus_thread_status: ConsensusThreadStatusSchema,
        message_send_failures: z
          .record(z.string(), MessageSendErrorsSchema)
          .openapi({
            description:
              'Consequent failures of message send operations in consensus by peer address. On the first success to send to that peer - entry is removed from this hashmap.',
          }),
      })
      .openapi({
        description: 'Description of enabled cluster',
        required: [
          'consensus_thread_status',
          'message_send_failures',
          'peer_id',
          'peers',
          'raft_info',
          'status',
        ],
      }),
  ])
  .openapi({ description: 'Information about current cluster status and structure' })
  .openapi('ClusterStatus')

const SnapshotDescriptionSchema = z
  .object({
    name: z.string(),
    creation_time: z.string().nullable().exactOptional(),
    size: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    checksum: z.string().nullable().exactOptional(),
  })
  .openapi({
    required: ['name', 'size'],
    example: {
      name: 'my-collection-3766212330831337-2024-07-22-08-31-55.snapshot',
      creation_time: '2022-08-04T10:49:10',
      size: 1000000,
      checksum: 'a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0',
    },
  })
  .openapi('SnapshotDescription')

const CountRequestSchema = z
  .object({
    shard_key: z
      .union([ShardKeySelectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Specify in which shards to look for the points, if not specified - look in all shards',
      }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Look only for points which satisfies this conditions' }),
    exact: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'If true, count exact number of points. If false, count approximate number of points faster. Approximate count might be unreliable during the indexing process. Default: true',
      }),
  })
  .openapi({
    description:
      'Count Request Counts the number of points which satisfy the given filter. If filter is not provided, the count of all points in the collection will be returned.',
    required: [],
  })
  .openapi('CountRequest')

const CountResultSchema = z
  .object({
    count: z.int().min(0).openapi({ description: 'Number of points which satisfy the conditions' }),
  })
  .openapi({ required: ['count'] })
  .openapi('CountResult')

const ReplicaStateSchema = z
  .enum([
    'Active',
    'Dead',
    'Partial',
    'Initializing',
    'Listener',
    'PartialSnapshot',
    'Recovery',
    'Resharding',
    'ReshardingScaleDown',
    'ActiveRead',
    'ManualRecovery',
  ])
  .openapi({ description: 'State of the single shard within a replica set.' })
  .openapi('ReplicaState')

const LocalShardInfoSchema = z
  .object({
    shard_id: z.uint32().min(0).openapi({ description: 'Local shard id' }),
    shard_key: z
      .union([ShardKeySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'User-defined sharding key' }),
    points_count: z.int().min(0).openapi({ description: 'Number of points in the shard' }),
    state: ReplicaStateSchema,
  })
  .openapi({ required: ['points_count', 'shard_id', 'state'] })
  .openapi('LocalShardInfo')

const RemoteShardInfoSchema = z
  .object({
    shard_id: z.uint32().min(0).openapi({ description: 'Remote shard id' }),
    shard_key: z
      .union([ShardKeySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'User-defined sharding key' }),
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, description: 'Remote peer id' }),
    state: ReplicaStateSchema,
  })
  .openapi({ required: ['peer_id', 'shard_id', 'state'] })
  .openapi('RemoteShardInfo')

const ShardTransferMethodSchema = z
  .enum(['stream_records', 'snapshot', 'wal_delta', 'resharding_stream_records'])
  .openapi({
    description:
      'Methods for transferring a shard from one node to another.\n\n- `stream_records` - Stream all shard records in batches until the whole shard is transferred.\n\n- `snapshot` - Snapshot the shard, transfer and restore it on the receiver.\n\n- `wal_delta` - Attempt to transfer shard difference by WAL delta.\n\n- `resharding_stream_records` - Shard transfer for resharding: stream all records in batches until all points are transferred.',
  })
  .openapi('ShardTransferMethod')

const ShardTransferInfoSchema = z
  .object({
    shard_id: z.uint32().min(0),
    to_shard_id: z
      .uint32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Target shard ID if different than source shard ID\n\nUsed exclusively with `ReshardingStreamRecords` transfer method.',
      }),
    from: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, description: 'Source peer id' }),
    to: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Destination peer id',
      }),
    sync: z
      .boolean()
      .openapi({
        description:
          'If `true` transfer is a synchronization of a replicas If `false` transfer is a moving of a shard from one peer to another',
      }),
    method: z.union([ShardTransferMethodSchema, z.any().nullable()]).exactOptional(),
    comment: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A human-readable report of the transfer progress. Available only on the source peer, and on the target peer during snapshot recovery.',
      }),
  })
  .openapi({ required: ['from', 'shard_id', 'sync', 'to'] })
  .openapi('ShardTransferInfo')

const ReshardingDirectionSchema = z
  .enum(['up', 'down'])
  .openapi({
    description:
      'Resharding direction, scale up or down in number of shards\n\n- `up` - Scale up, add a new shard\n\n- `down` - Scale down, remove a shard',
  })
  .openapi('ReshardingDirection')

const ReshardingInfoSchema = z
  .object({
    direction: ReshardingDirectionSchema,
    shard_id: z.uint32().min(0),
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    shard_key: z.union([ShardKeySchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['direction', 'peer_id', 'shard_id'] })
  .openapi('ReshardingInfo')

const CollectionClusterInfoSchema = z
  .object({
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, description: 'ID of this peer' }),
    shard_count: z.int().min(0).openapi({ description: 'Total number of shards' }),
    local_shards: z.array(LocalShardInfoSchema).openapi({ description: 'Local shards' }),
    remote_shards: z.array(RemoteShardInfoSchema).openapi({ description: 'Remote shards' }),
    shard_transfers: z.array(ShardTransferInfoSchema).openapi({ description: 'Shard transfers' }),
    resharding_operations: z
      .array(ReshardingInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Resharding operations' }),
  })
  .openapi({
    description: 'Current clustering distribution for the collection',
    required: ['local_shards', 'peer_id', 'remote_shards', 'shard_count', 'shard_transfers'],
  })
  .openapi('CollectionClusterInfo')

const AppFeaturesTelemetrySchema = z
  .object({
    debug: z.boolean(),
    service_debug_feature: z.boolean(),
    recovery_mode: z.boolean(),
    gpu: z.boolean(),
    rocksdb: z.boolean(),
    staging: z.boolean(),
  })
  .openapi({
    required: ['debug', 'gpu', 'recovery_mode', 'rocksdb', 'service_debug_feature', 'staging'],
  })
  .openapi('AppFeaturesTelemetry')

const FeatureFlagsSchema = z
  .object({
    all: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Magic feature flag that enables all features.\n\nNote that this will only be applied to all flags when passed into [`init_feature_flags`].',
      }),
    incremental_hnsw_building: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description: 'Use incremental HNSW building.\n\nEnabled by default in Qdrant 1.14.1.',
      }),
    appendable_quantization: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Use appendable quantization in appendable plain segments.\n\nEnabled by default in Qdrant 1.16.0.',
      }),
    single_file_mmap_vector_storage: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Use single-file mmap in-ram vector storage (InRamMmap)\n\nEnabled by default in Qdrant 1.18.3+',
      }),
    async_payload_storage: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Allow the io_uring-based payload storage implementation. When disabled, io_uring payload storage is *never* used. When enabled, payload storage backend is decided based on `storage.performance.io_uring` option and payload storage type.',
      }),
    async_hnsw_graph: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Allow the batched io_uring-based HNSW graph search. When disabled, the HNSW graph is *never* opened on io_uring. When enabled, the graph backend is decided based on `storage.performance.io_uring` option and links placement.',
      }),
    write_segment_manifest: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          "Write a segment manifest (`segments_manifest.json`, next to the `segments/` directory) listing the shard's segments and their state, so out-of-process readers can discover segments without scanning the filesystem.",
      }),
    append_only_mutations: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Build new segments in append-only mode: in-place point mutations become clone-and-tombstone appends instead. Intended for testing the append-only storage path.',
      }),
    compact_bitmask: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Persist write-once bitmasks in the compact `StoredBitmask` format instead of raw dense bitslices. Only gates writing: both formats are always readable.',
      }),
    append_only_storages: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Create Blobstore-backed storages (payload storage, appendable field indexes, sparse vectors) in the append-only Logstore mode. Gates creation only: an existing storage keeps its persisted mode, and both modes are always readable.\n\nImplies [`Self::append_only_mutations`], enforced by [`init_feature_flags`].',
      }),
    compact_logstore_tracker: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'In non-appendable segments built by the optimizer, store the tracker of an append-only payload storage in the compacted format: read into RAM whole on open instead of one lookup per value. Only has an effect together with [`Self::append_only_storages`]. Gates creation only: both formats are always readable.',
      }),
    transfer_raw_points: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Transfer points as storage-native bytes (raw points), for every collection rather than only those whose vector storage would lose precision in a decode-encode round-trip (TurboQuant).\n\nRead on the sending side only, where the transfer batch is prepared: nodes accept raw points regardless.',
      }),
    transfer_raw_payloads: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'Send the payload of a raw point as the byte blob it is stored as, so the sending node does not parse it and neither node builds a protobuf value tree for it. The receiving node still parses the blob, once, when the operation is applied. Only has an effect on points transferred raw, see [`Self::transfer_raw_points`].\n\nRead on the sending side only: nodes accept raw payloads regardless.',
      }),
    persist_proxy_segments: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Persist proxy segment changes on disk. Prevents pinning the WAL while proxy segments are open. Replays the persisted changes on startup to guarantee data consistency. Required for serverless deployments where storage and compute is separated.',
      }),
    combined_vector_storage: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({
        description:
          'When `hnsw_config.inline_storage` enabled, use the `GraphInline` vector storage (aka inline-storage without standalone vector storage) for new segments.\n\nExisting `GraphInline` segments are always readable, regardless of this flag.',
      }),
    serverless_compatible: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          'Serverless-compatible deployment mode. Implies [`Self::write_segment_manifest`], [`Self::append_only_mutations`], [`Self::compact_bitmask`], [`Self::append_only_storages`], [`Self::compact_logstore_tracker`] and [`Self::persist_proxy_segments`].\n\nNote that this will only be applied when passed into [`init_feature_flags`].',
      }),
  })
  .openapi({ required: [] })
  .openapi('FeatureFlags')

const LowMemoryModeSchema = z
  .xor([
    z
      .literal('disabled')
      .openapi({ description: 'No special handling. Every component loads as persisted.' }),
    z
      .literal('no_resident')
      .openapi({
        description:
          'Load RAM-friendly components as their on-disk variants where possible:\n\n* Quantization is loaded as if `always_ram = false`. * Payload field indexes are loaded as if `on_disk = true`. * Payload storage is loaded as the mmap variant (lazy populate).',
      }),
    z
      .literal('no_populate')
      .openapi({
        description:
          'Same as [`LowMemoryMode::NoResident`], plus mmap page population is skipped on load (for original vectors, HNSW graph and payload storage).',
      }),
  ])
  .openapi({
    description:
      'Controls how segments are loaded on startup to reduce memory pressure.\n\nConfigured via `storage.low_memory_mode` in the configuration file.\n\nThis setting only affects *loading* — it never modifies the persisted configuration of any segment. The same data directory will behave differently depending on how this mode is set at startup, which makes it safe to toggle for recovery from out-of-memory crash loops.',
  })
  .openapi('LowMemoryMode')

const HnswGlobalConfigSchema = z
  .object({
    healing_threshold: z
      .float64()
      .min(0)
      .max(1)
      .default(0.3)
      .exactOptional()
      .openapi({
        description:
          'Enable HNSW healing if the ratio of missing points is no more than this value. To disable healing completely, set this value to `0.0`.',
      }),
  })
  .openapi({ required: [] })
  .openapi('HnswGlobalConfig')

const ContainerRuntimeSchema = z
  .enum(['none', 'docker', 'kubernetes', 'other'])
  .openapi({ description: 'Container runtime Qdrant is running under (`none` if bare metal).' })
  .openapi('ContainerRuntime')

const CpuEndianSchema = z.enum(['little', 'big', 'other']).openapi('CpuEndian')

const GpuDeviceTelemetrySchema = z
  .object({ name: z.string() })
  .openapi({ required: ['name'] })
  .openapi('GpuDeviceTelemetry')

const RunningEnvironmentTelemetrySchema = z
  .object({
    distribution: z.string().nullable().exactOptional(),
    distribution_version: z.string().nullable().exactOptional(),
    is_docker: z.boolean(),
    container_runtime: ContainerRuntimeSchema,
    cores: z.int().min(0).nullable().exactOptional(),
    cpu_cores_used: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Average number of CPU cores used by this process over roughly the last two seconds. `None` on unsupported platforms, before two samples are collected, or on transient failures reading process CPU time.',
      }),
    ram_size: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Effective total memory for this process in KiB (cgroup limit or host RAM).',
      }),
    disk_size: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Size in KiB of the filesystem hosting Qdrant's /storage path (if not available, fallback to host disk size)",
      }),
    cpu_flags: z.string(),
    cpu_endian: z.union([CpuEndianSchema, z.any().nullable()]).exactOptional(),
    gpu_devices: z.array(GpuDeviceTelemetrySchema).nullable().exactOptional(),
  })
  .openapi({ required: ['container_runtime', 'cpu_flags', 'is_docker'] })
  .openapi('RunningEnvironmentTelemetry')

const AuditTelemetrySchema = z
  .object({
    dir: z.string(),
    rotation: z.string(),
    max_log_files: z.int().min(0),
    trust_forwarded_headers: z.boolean(),
    log_api: z.boolean(),
    output: z.string(),
    dir_size_bytes: z.int().min(0).nullable().exactOptional(),
  })
  .openapi({
    required: ['dir', 'log_api', 'max_log_files', 'output', 'rotation', 'trust_forwarded_headers'],
  })
  .openapi('AuditTelemetry')

const AppBuildTelemetrySchema = z
  .object({
    name: z.string(),
    version: z.string(),
    features: z.union([AppFeaturesTelemetrySchema, z.any().nullable()]).exactOptional(),
    runtime_features: z.union([FeatureFlagsSchema, z.any().nullable()]).exactOptional(),
    low_memory_mode: z.union([LowMemoryModeSchema, z.any().nullable()]).exactOptional(),
    hnsw_global_config: z.union([HnswGlobalConfigSchema, z.any().nullable()]).exactOptional(),
    system: z.union([RunningEnvironmentTelemetrySchema, z.any().nullable()]).exactOptional(),
    jwt_rbac: z.boolean().nullable().exactOptional(),
    hide_jwt_dashboard: z.boolean().nullable().exactOptional(),
    audit: z.union([AuditTelemetrySchema, z.any().nullable()]).exactOptional(),
    startup: z.iso.datetime({ offset: true }),
  })
  .openapi({ required: ['name', 'startup', 'version'] })
  .openapi('AppBuildTelemetry')

const CollectionConfigTelemetrySchema = z
  .object({
    params: CollectionParamsSchema,
    hnsw_config: HnswConfigSchema,
    optimizer_config: OptimizersConfigSchema,
    wal_config: WalConfigSchema,
    quantization_config: z
      .union([QuantizationConfigSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional(),
    strict_mode_config: z.union([StrictModeConfigOutputSchema, z.any().nullable()]).exactOptional(),
    uuid: z.uuid().nullable().default(null).exactOptional(),
    metadata: z
      .union([PayloadSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Arbitrary JSON metadata for the collection' }),
  })
  .openapi({ required: ['hnsw_config', 'optimizer_config', 'params', 'wal_config'] })
  .openapi('CollectionConfigTelemetry')

const ShardStatusSchema = z
  .enum(['green', 'yellow', 'grey', 'red'])
  .openapi({
    description:
      "Current state of the shard (supports same states as the collection)\n\n`Green` - all good. `Yellow` - optimization is running, 'Grey' - optimizations are possible but not triggered, `Red` - some operations failed and was not recovered",
  })
  .openapi('ShardStatus')

const SegmentTypeSchema = z
  .enum(['plain', 'indexed', 'special'])
  .openapi({ description: 'Type of segment' })
  .openapi('SegmentType')

const IoBackendSchema = z
  .enum(['mmap', 'io_uring'])
  .openapi({
    description:
      'Universal I/O backend that is used to read files.\n\nDecided when the component is opened based on `storage.performance.io_uring` option, component memory placement and kernel io_uring support.\n\nOptions:\n\n* `Mmap` - Reads are served by the page cache through a memory mapping.\n\n* `IoUring` - Reads are submitted to the kernel with io_uring.',
  })
  .openapi('IoBackend')

const VectorDataInfoSchema = z
  .object({
    num_vectors: z.int().min(0),
    num_indexed_vectors: z.int().min(0),
    num_deleted_vectors: z.int().min(0),
    io_backend: z
      .union([IoBackendSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Universal I/O backend that this vector storage reads files with. Absent if vector storage does not support configurable backends or only supports a single backend type.',
      }),
  })
  .openapi({ required: ['num_deleted_vectors', 'num_indexed_vectors', 'num_vectors'] })
  .openapi('VectorDataInfo')

const SegmentInfoSchema = z
  .object({
    uuid: z.uuid(),
    segment_type: SegmentTypeSchema,
    num_vectors: z.int().min(0),
    num_points: z.int().min(0),
    num_deferred_points: z.int().min(0).nullable().exactOptional(),
    num_deleted_deferred_points: z.int().min(0).nullable().exactOptional(),
    num_indexed_vectors: z.int().min(0),
    num_deleted_vectors: z.int().min(0),
    vectors_size_bytes: z
      .int()
      .min(0)
      .openapi({
        description:
          'An ESTIMATION of effective amount of bytes used for vectors Do NOT rely on this number unless you know what you are doing',
      }),
    payloads_size_bytes: z
      .int()
      .min(0)
      .openapi({ description: 'An estimation of the effective amount of bytes used for payloads' }),
    ram_usage_bytes: z.int().min(0),
    disk_usage_bytes: z.int().min(0),
    is_appendable: z.boolean(),
    index_schema: z.record(z.string(), PayloadIndexInfoSchema),
    vector_data: z.record(z.string(), VectorDataInfoSchema),
    payload_storage_io_backend: z
      .union([IoBackendSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Universal I/O backend that payload storage reads files with. Absent if payload storage does not support configurable backends or only supports a single backend type.',
      }),
    deferred_internal_id: z
      .uint32()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Internal ID from which points are deferred (hidden from reads). Only set for appendable segments.',
      }),
  })
  .openapi({
    description: 'Aggregated information about segment',
    required: [
      'disk_usage_bytes',
      'index_schema',
      'is_appendable',
      'num_deleted_vectors',
      'num_indexed_vectors',
      'num_points',
      'num_vectors',
      'payloads_size_bytes',
      'ram_usage_bytes',
      'segment_type',
      'uuid',
      'vector_data',
      'vectors_size_bytes',
    ],
  })
  .openapi('SegmentInfo')

const VectorStorageTypeSchema = z
  .xor([
    z
      .literal('Memory')
      .openapi({
        description:
          'Storage in memory (RAM)\n\nWill be very fast at the cost of consuming a lot of memory.',
      }),
    z
      .literal('Mmap')
      .openapi({
        description:
          'Storage in mmap file, not appendable\n\nSearch performance is defined by disk speed and the fraction of vectors that fit in memory.',
      }),
    z
      .literal('ChunkedMmap')
      .openapi({
        description:
          'Storage in chunked mmap files, appendable\n\nSearch performance is defined by disk speed and the fraction of vectors that fit in memory.',
      }),
    z
      .literal('InRamChunkedMmap')
      .openapi({
        description:
          'Same as `ChunkedMmap`, but vectors are forced to be locked in RAM In this way we avoid cold requests to disk, but risk to run out of memory',
      }),
    z
      .literal('InRamMmap')
      .openapi({
        description: 'Storage in a single mmap file, not appendable Pre-fetched into RAM on load',
      }),
    z
      .literal('GraphInline')
      .openapi({
        description:
          'Vectors are inlined in the HNSW links file, not in a dedicated storage. Not appendable.',
      }),
  ])
  .openapi({ description: 'Storage types for vectors' })
  .openapi('VectorStorageType')

const IndexesSchema = z
  .xor([
    z
      .object({ type: z.literal('plain'), options: z.object({}) })
      .openapi({
        description:
          'Do not use any index, scan whole vector collection during search. Guarantee 100% precision, but may be time consuming on large collections.',
        required: ['options', 'type'],
      }),
    z
      .object({ type: z.literal('hnsw'), options: HnswConfigSchema })
      .openapi({
        description:
          'Use filterable HNSW index for approximate search. Is very fast even on a very huge collections, but require additional space to store index and additional time to build it.',
        required: ['options', 'type'],
      }),
  ])
  .openapi({ description: 'Vector index configuration' })
  .openapi('Indexes')

const VectorDataConfigSchema = z
  .object({
    size: z.int().min(0).openapi({ description: 'Size/dimensionality of the vectors used' }),
    distance: DistanceSchema,
    storage_type: VectorStorageTypeSchema,
    index: IndexesSchema,
    quantization_config: z
      .union([QuantizationConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Vector specific quantization config that overrides collection config',
      }),
    multivector_config: z
      .union([MultiVectorConfigSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Vector specific configuration to enable multiple vectors per point',
      }),
    datatype: z
      .union([VectorStorageDatatypeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Vector specific configuration to set specific storage element type',
      }),
  })
  .openapi({
    description: 'Config of single vector data storage',
    required: ['distance', 'index', 'size', 'storage_type'],
  })
  .openapi('VectorDataConfig')

const SparseIndexTypeSchema = z
  .xor([
    z.literal('MutableRam').openapi({ description: 'Mutable RAM sparse index' }),
    z.literal('ImmutableRam').openapi({ description: 'Immutable RAM sparse index' }),
    z.literal('Mmap').openapi({ description: 'Mmap sparse index' }),
  ])
  .openapi({ description: 'Sparse index types' })
  .openapi('SparseIndexType')

const SparseIndexConfigSchema = z
  .object({
    full_scan_threshold: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'We prefer a full scan search upto (excluding) this number of vectors.\n\nNote: this is number of vectors, not KiloBytes.',
      }),
    index_type: SparseIndexTypeSchema,
    datatype: z
      .union([VectorStorageDatatypeSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Datatype used to store weights in the index.' }),
    memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Requested memory placement of the index.\n\nThe structural decision is carried by `index_type`; this field additionally distinguishes `cold` from `cached` for the mmap index variant.',
      }),
  })
  .openapi({ description: 'Configuration for sparse inverted index.', required: ['index_type'] })
  .openapi('SparseIndexConfig')

const SparseVectorStorageTypeSchema = z
  .xor([z.literal('mmap').openapi({ description: 'Storage in memory maps (gridstore storage)' })])
  .openapi('SparseVectorStorageType')

const SparseVectorDataConfigSchema = z
  .object({
    index: SparseIndexConfigSchema,
    storage_type: SparseVectorStorageTypeSchema.exactOptional(),
    modifier: z
      .union([ModifierSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Configures addition value modifications for sparse vectors. Default: none',
      }),
  })
  .openapi({ description: 'Config of single sparse vector data storage', required: ['index'] })
  .openapi('SparseVectorDataConfig')

const PayloadStorageTypeSchema = z
  .xor([
    z.object({ type: z.literal('mmap') }).openapi({ required: ['type'] }),
    z.object({ type: z.literal('in_ram_mmap') }).openapi({ required: ['type'] }),
  ])
  .openapi({ description: 'Type of payload storage' })
  .openapi('PayloadStorageType')

const SegmentConfigSchema = z
  .object({
    vector_data: z.record(z.string(), VectorDataConfigSchema).default({}).exactOptional(),
    sparse_vector_data: z.record(z.string(), SparseVectorDataConfigSchema).exactOptional(),
    payload_storage_type: PayloadStorageTypeSchema,
    id_tracker_memory: z
      .union([MemorySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Memory placement of the id tracker in non-appendable segments. Unset means the deployment default: `cold` in serverless-compatible mode, `pinned` otherwise.',
      }),
  })
  .openapi({ required: ['payload_storage_type'] })
  .openapi('SegmentConfig')

const OperationDurationStatisticsSchema = z
  .object({
    count: z.int().min(0),
    fail_count: z.int().min(0).nullable().exactOptional(),
    avg_duration_micros: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The average time taken by 128 latest operations, calculated as a weighted mean.',
      }),
    min_duration_micros: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The minimum duration of the operations across all the measurements.',
      }),
    max_duration_micros: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The maximum duration of the operations across all the measurements.',
      }),
    total_duration_micros: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description: 'The total duration of all operations in microseconds.',
      }),
    last_responded: z.iso.datetime({ offset: true }).nullable().exactOptional(),
  })
  .openapi({ required: ['count'] })
  .openapi('OperationDurationStatistics')

const VectorIndexSearchesTelemetrySchema = z
  .object({
    index_name: z.string().nullable().exactOptional(),
    unfiltered_plain: OperationDurationStatisticsSchema,
    unfiltered_hnsw: OperationDurationStatisticsSchema,
    unfiltered_sparse: OperationDurationStatisticsSchema,
    filtered_plain: OperationDurationStatisticsSchema,
    filtered_small_cardinality: OperationDurationStatisticsSchema,
    filtered_large_cardinality: OperationDurationStatisticsSchema,
    filtered_acorn: OperationDurationStatisticsSchema.exactOptional(),
    filtered_exact: OperationDurationStatisticsSchema,
    filtered_sparse: OperationDurationStatisticsSchema,
    unfiltered_exact: OperationDurationStatisticsSchema,
  })
  .openapi({
    required: [
      'filtered_exact',
      'filtered_large_cardinality',
      'filtered_plain',
      'filtered_small_cardinality',
      'filtered_sparse',
      'unfiltered_exact',
      'unfiltered_hnsw',
      'unfiltered_plain',
      'unfiltered_sparse',
    ],
  })
  .openapi('VectorIndexSearchesTelemetry')

const PayloadIndexTelemetrySchema = z
  .object({
    field_name: z.string().nullable().exactOptional(),
    index_type: z.string(),
    points_values_count: z
      .int()
      .min(0)
      .openapi({ description: 'The amount of values indexed for all points.' }),
    points_count: z
      .int()
      .min(0)
      .openapi({ description: 'The amount of points that have at least one value indexed.' }),
    histogram_bucket_size: z.int().min(0).nullable().exactOptional(),
  })
  .openapi({ required: ['index_type', 'points_count', 'points_values_count'] })
  .openapi('PayloadIndexTelemetry')

const SegmentTelemetrySchema = z
  .object({
    info: SegmentInfoSchema,
    config: SegmentConfigSchema,
    vector_index_searches: z.array(VectorIndexSearchesTelemetrySchema),
    payload_field_indices: z.array(PayloadIndexTelemetrySchema),
  })
  .openapi({ required: ['config', 'info', 'payload_field_indices', 'vector_index_searches'] })
  .openapi('SegmentTelemetry')

const TrackerStatusSchema = z
  .xor([
    z.enum(['optimizing', 'done']),
    z.strictObject({ cancelled: z.string() }).openapi({ required: ['cancelled'] }),
    z.strictObject({ error: z.string() }).openapi({ required: ['error'] }),
  ])
  .openapi({ description: 'Represents the current state of the optimizer being tracked' })
  .openapi('TrackerStatus')

const TrackerTelemetrySchema = z
  .object({
    name: z.string().openapi({ description: 'Name of the optimizer' }),
    uuid: z
      .uuid()
      .openapi({ description: 'UUID of the upcoming segment being created by the optimizer' }),
    segment_ids: z
      .array(z.int().min(0))
      .openapi({
        description:
          'Internal segment IDs being optimized. These are local and in-memory, meaning that they can refer to different segments after a service restart.',
      }),
    segment_uuids: z
      .array(z.uuid())
      .openapi({
        description:
          'Segment UUIDs being optimized. Refers to same segments as in `segment_ids`, but trackable across restarts, and reflect their directory name.',
      }),
    status: TrackerStatusSchema,
    start_at: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'Start time of the optimizer' }),
    end_at: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({ description: 'End time of the optimizer' }),
  })
  .openapi({
    description: 'Tracker object used in telemetry',
    required: ['name', 'segment_ids', 'segment_uuids', 'start_at', 'status', 'uuid'],
  })
  .openapi('TrackerTelemetry')

const OptimizerTelemetrySchema = z
  .object({
    status: OptimizersStatusSchema,
    optimizations: OperationDurationStatisticsSchema,
    log: z.array(TrackerTelemetrySchema).nullable().exactOptional(),
  })
  .openapi({ required: ['optimizations', 'status'] })
  .openapi('OptimizerTelemetry')

const ShardUpdateQueueInfoSchema = z
  .object({
    length: z.int().min(0).openapi({ description: 'Number of elements in the queue' }),
    op_num: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'last operation number processed' }),
    deferred_points: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Number of points that are deferred (i.e hidden from search as they're not yet optimized).",
      }),
  })
  .openapi({ required: ['length'] })
  .openapi('ShardUpdateQueueInfo')

const LocalShardTelemetrySchema = z
  .object({
    variant_name: z.string().nullable().exactOptional(),
    status: z.union([ShardStatusSchema, z.any().nullable()]).exactOptional(),
    total_optimized_points: z
      .int()
      .min(0)
      .openapi({ description: 'Total number of optimized points since the last start.' }),
    vectors_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An ESTIMATION of effective amount of bytes used for vectors Do NOT rely on this number unless you know what you are doing',
      }),
    payloads_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'An estimation of the effective amount of bytes used for payloads Do NOT rely on this number unless you know what you are doing',
      }),
    num_points: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sum of segment points This is an approximate number Do NOT rely on this number unless you know what you are doing',
      }),
    num_vectors: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sum of number of vectors in all segments This is an approximate number Do NOT rely on this number unless you know what you are doing',
      }),
    num_vectors_by_name: z
      .record(z.string(), z.int().min(0))
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Sum of number of vectors across all segments, grouped by their name. This is an approximate number. Do NOT rely on this number unless you know what you are doing',
      }),
    segments: z.array(SegmentTelemetrySchema).nullable().exactOptional(),
    optimizations: z.union([OptimizerTelemetrySchema, z.any().nullable()]).exactOptional(),
    async_scorer: z.boolean().nullable().exactOptional(),
    indexed_only_excluded_vectors: z.record(z.string(), z.int().min(0)).nullable().exactOptional(),
    update_queue: z
      .union([ShardUpdateQueueInfoSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Update queue status' }),
  })
  .openapi({ required: ['total_optimized_points'] })
  .openapi('LocalShardTelemetry')

const RemoteShardTelemetrySchema = z
  .object({
    shard_id: z.uint32().min(0),
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    searches: z.union([OperationDurationStatisticsSchema, z.any().nullable()]).exactOptional(),
    updates: z.union([OperationDurationStatisticsSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['peer_id', 'shard_id'] })
  .openapi('RemoteShardTelemetry')

const PartialSnapshotTelemetrySchema = z
  .object({
    ongoing_create_snapshot_requests: z.int().min(0),
    is_recovering: z.boolean(),
    recovery_timestamp: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
  })
  .openapi({
    required: ['is_recovering', 'ongoing_create_snapshot_requests', 'recovery_timestamp'],
  })
  .openapi('PartialSnapshotTelemetry')

const ReplicaSetTelemetrySchema = z
  .object({
    id: z.uint32().min(0),
    key: z.union([ShardKeySchema, z.any().nullable()]).exactOptional(),
    local: z.union([LocalShardTelemetrySchema, z.any().nullable()]).exactOptional(),
    remote: z.array(RemoteShardTelemetrySchema),
    replicate_states: z.record(z.string(), ReplicaStateSchema),
    partial_snapshot: z.union([PartialSnapshotTelemetrySchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['id', 'remote', 'replicate_states'] })
  .openapi('ReplicaSetTelemetry')

const ReshardingStageSchema = z
  .enum(['migrating_points', 'read_hash_ring_committed', 'write_hash_ring_committed'])
  .openapi({ description: 'Resharding stages' })
  .openapi('ReshardingStage')

const ReshardingTelemetrySchema = z
  .object({
    stage: ReshardingStageSchema,
    direction: ReshardingDirectionSchema,
    shard_id: z.uint32().min(0),
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    shard_key: z.union([ShardKeySchema, z.any().nullable()]).exactOptional(),
    uuid: z.uuid(),
  })
  .openapi({ required: ['direction', 'peer_id', 'shard_id', 'stage', 'uuid'] })
  .openapi('ReshardingTelemetry')

const ShardCleanStatusProgressTelemetrySchema = z
  .object({ deleted_points: z.int().min(0) })
  .openapi({ required: ['deleted_points'] })
  .openapi('ShardCleanStatusProgressTelemetry')

const ShardCleanStatusFailedTelemetrySchema = z
  .object({ reason: z.string() })
  .openapi({ required: ['reason'] })
  .openapi('ShardCleanStatusFailedTelemetry')

const ShardCleanStatusTelemetrySchema = z
  .xor([
    z.enum(['started', 'done', 'cancelled']),
    z
      .strictObject({ progress: ShardCleanStatusProgressTelemetrySchema })
      .openapi({ required: ['progress'] }),
    z
      .strictObject({ failed: ShardCleanStatusFailedTelemetrySchema })
      .openapi({ required: ['failed'] }),
  ])
  .openapi('ShardCleanStatusTelemetry')

const CollectionTelemetrySchema = z
  .object({
    id: z.string(),
    init_time_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'uint64', minimum: 0 }),
    config: z.union([CollectionConfigTelemetrySchema, z.any().nullable()]).exactOptional(),
    shards: z.array(ReplicaSetTelemetrySchema).nullable().exactOptional(),
    transfers: z.array(ShardTransferInfoSchema).nullable().exactOptional(),
    resharding: z.array(ReshardingTelemetrySchema).nullable().exactOptional(),
    shard_clean_tasks: z
      .record(z.string(), ShardCleanStatusTelemetrySchema)
      .nullable()
      .exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('CollectionTelemetry')

const CollectionsAggregatedTelemetrySchema = z
  .object({
    vectors: z.int().min(0),
    optimizers_status: OptimizersStatusSchema,
    params: CollectionParamsSchema,
  })
  .openapi({ required: ['optimizers_status', 'params', 'vectors'] })
  .openapi('CollectionsAggregatedTelemetry')

const CollectionTelemetryEnumSchema = z
  .union([CollectionTelemetrySchema, CollectionsAggregatedTelemetrySchema])
  .openapi('CollectionTelemetryEnum')

const CollectionSnapshotTelemetrySchema = z
  .object({
    id: z.string(),
    running_snapshots: z.int().min(0).nullable().exactOptional(),
    running_snapshot_recovery: z.int().min(0).nullable().exactOptional(),
    total_snapshot_creations: z.int().min(0).nullable().exactOptional(),
  })
  .openapi({ required: ['id'] })
  .openapi('CollectionSnapshotTelemetry')

const CollectionsTelemetrySchema = z
  .object({
    number_of_collections: z.int().min(0),
    max_collections: z.int().min(0).nullable().exactOptional(),
    collections: z.array(CollectionTelemetryEnumSchema).nullable().exactOptional(),
    snapshots: z.array(CollectionSnapshotTelemetrySchema).nullable().exactOptional(),
  })
  .openapi({ required: ['number_of_collections'] })
  .openapi('CollectionsTelemetry')

const ClusterStatusTelemetrySchema = z
  .object({
    number_of_peers: z.int().min(0),
    term: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    commit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    pending_operations: z.int().min(0),
    role: z.union([StateRoleSchema, z.any().nullable()]).exactOptional(),
    is_voter: z.boolean(),
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'uint64', minimum: 0 }),
    consensus_thread_status: ConsensusThreadStatusSchema,
  })
  .openapi({
    required: [
      'commit',
      'consensus_thread_status',
      'is_voter',
      'number_of_peers',
      'pending_operations',
      'term',
    ],
  })
  .openapi('ClusterStatusTelemetry')

const P2pConfigTelemetrySchema = z
  .object({ connection_pool_size: z.int().min(0) })
  .openapi({ required: ['connection_pool_size'] })
  .openapi('P2pConfigTelemetry')

const ConsensusConfigTelemetrySchema = z
  .object({
    max_message_queue_size: z.int().min(0),
    tick_period_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    bootstrap_timeout_sec: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
  })
  .openapi({ required: ['bootstrap_timeout_sec', 'max_message_queue_size', 'tick_period_ms'] })
  .openapi('ConsensusConfigTelemetry')

const ClusterConfigTelemetrySchema = z
  .object({
    grpc_timeout_ms: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    p2p: P2pConfigTelemetrySchema,
    consensus: ConsensusConfigTelemetrySchema,
  })
  .openapi({ required: ['consensus', 'grpc_timeout_ms', 'p2p'] })
  .openapi('ClusterConfigTelemetry')

const PeerMetadataSchema = z
  .object({ version: z.string().openapi({ description: 'Peer Qdrant version' }) })
  .openapi({
    description: 'Metadata describing extra properties for each peer',
    required: ['version'],
  })
  .openapi('PeerMetadata')

const ClusterTelemetrySchema = z
  .object({
    enabled: z.boolean(),
    status: z.union([ClusterStatusTelemetrySchema, z.any().nullable()]).exactOptional(),
    config: z.union([ClusterConfigTelemetrySchema, z.any().nullable()]).exactOptional(),
    peers: z.record(z.string(), PeerInfoSchema).nullable().exactOptional(),
    peer_metadata: z.record(z.string(), PeerMetadataSchema).nullable().exactOptional(),
    metadata: z.looseObject({}).nullable().exactOptional(),
    resharding_enabled: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: ['enabled'] })
  .openapi('ClusterTelemetry')

const WebApiTelemetrySchema = z
  .object({
    responses: z.record(z.string(), z.record(z.string(), OperationDurationStatisticsSchema)),
    per_collection_responses: z
      .record(
        z.string(),
        z.record(z.string(), z.record(z.string(), OperationDurationStatisticsSchema)),
      )
      .exactOptional(),
  })
  .openapi({ required: ['responses'] })
  .openapi('WebApiTelemetry')

const GrpcTelemetrySchema = z
  .object({
    responses: z.record(z.string(), z.record(z.string(), OperationDurationStatisticsSchema)),
    per_collection_responses: z
      .record(
        z.string(),
        z.record(z.string(), z.record(z.string(), OperationDurationStatisticsSchema)),
      )
      .exactOptional(),
  })
  .openapi({ required: ['responses'] })
  .openapi('GrpcTelemetry')

const RequestsTelemetrySchema = z
  .object({ rest: WebApiTelemetrySchema, grpc: GrpcTelemetrySchema })
  .openapi({ required: ['grpc', 'rest'] })
  .openapi('RequestsTelemetry')

const MemoryTelemetrySchema = z
  .object({
    active_bytes: z
      .int()
      .min(0)
      .openapi({
        description: 'Total number of bytes in active pages allocated by the application',
      }),
    allocated_bytes: z
      .int()
      .min(0)
      .openapi({ description: 'Total number of bytes allocated by the application' }),
    metadata_bytes: z
      .int()
      .min(0)
      .openapi({ description: 'Total number of bytes dedicated to metadata' }),
    resident_bytes: z
      .int()
      .min(0)
      .openapi({ description: 'Maximum number of bytes in physically resident data pages mapped' }),
    retained_bytes: z
      .int()
      .min(0)
      .openapi({ description: 'Total number of bytes in virtual memory mappings' }),
  })
  .openapi({
    required: [
      'active_bytes',
      'allocated_bytes',
      'metadata_bytes',
      'resident_bytes',
      'retained_bytes',
    ],
  })
  .openapi('MemoryTelemetry')

const HardwareTelemetrySchema = z
  .object({ collection_data: z.record(z.string(), HardwareUsageSchema) })
  .openapi({ required: ['collection_data'] })
  .openapi('HardwareTelemetry')

const SearchThreadPoolTelemetrySchema = z
  .object({
    mode: z.string().openapi({ description: 'Currently active mode (`high_cpu` or `high_io`).' }),
    high_cpu_threads: z
      .int()
      .min(0)
      .openapi({ description: 'Blocking-thread count of the high-CPU runtime.' }),
    high_io_threads: z
      .int()
      .min(0)
      .openapi({ description: 'Blocking-thread count of the high-IO runtime.' }),
  })
  .openapi({
    description:
      'Live snapshot of the adaptive search routing.\n\n`mode` is the runtime currently selected by [`SearchMode`]; `high_cpu_threads` and `high_io_threads` are the blocking-thread budgets of the two underlying runtimes that the adaptive handle routes between.',
    required: ['high_cpu_threads', 'high_io_threads', 'mode'],
  })
  .openapi('SearchThreadPoolTelemetry')

const QuotaConfigSchema = z
  .object({
    enabled: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({ description: 'Whether the limits below are enforced.' }),
    max_resident_memory_percent: z
      .int()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reject memory-consuming updates once process resident memory reaches this percentage of total system memory (or of the cgroup limit, if one applies).',
      }),
    max_disk_usage_percent: z
      .int()
      .min(1)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Reject disk-consuming updates once the filesystem hosting the storage directory is filled to this percentage of its capacity.',
      }),
    release_margin_percent: z
      .int()
      .min(0)
      .max(100)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'How many percentage points below its limit a resource has to fall before this node starts accepting work again.\n\nWithout a margin, a resource resting on its limit crosses it in both directions on the noise between two readings, putting the node in and out of service each time — and restarting a shard recovery with it. Raise it where usage is volatile; `0` disables the margin and releases as soon as usage is back under the limit.\n\nUnset leaves the built-in default in force, so a config written today does not pin a number that a later release may want to revise.',
      }),
  })
  .openapi({
    description:
      'Cluster-wide limits on node resources.\n\nAn unset limit means the corresponding resource is not capped. Limits are only enforced while `enabled` is true.',
    required: [],
  })
  .openapi('QuotaConfig')

const QuotaExceededSchema = z
  .object({
    resident_memory: z.boolean().nullable().exactOptional(),
    disk_usage: z.boolean().nullable().exactOptional(),
  })
  .openapi({
    description:
      'Which of the enforced limits a node is currently refusing work over.\n\nReported per resource because they are freed by different actions: disk by deleting or optimizing, memory by unloading. A single flag would not say which one to go and fix.\n\n`true` outlasts the reading that caused it: a resource that reaches its limit stays flagged until it has fallen a margin below, so that one resting near the limit does not flip the node in and out of service. Expect to see it set while the reported utilization is already back under the configured limit.\n\nA field is `null` when the node is not enforcing that resource — the quota is disabled, no limit is set for it, or it cannot be measured here. That is deliberately distinct from `false`: a resource that can never trip must not be reported as one that is within its limits, or it invites an alert that can never fire.',
    required: [],
  })
  .openapi('QuotaExceeded')

const QuotaTelemetrySchema = z
  .object({ config: QuotaConfigSchema, exceeded: QuotaExceededSchema })
  .openapi({
    description:
      'What a node reports about the quota it is enforcing.\n\nCarries the verdict rather than the raw utilization, because the point of reporting it is to know whether this node is currently refusing writes — which depends on the limits as well as the readings.',
    required: ['config', 'exceeded'],
  })
  .openapi('QuotaTelemetry')

const TelemetryDataSchema = z
  .object({
    id: z.string(),
    app: z.union([AppBuildTelemetrySchema, z.any().nullable()]).exactOptional(),
    collections: CollectionsTelemetrySchema,
    cluster: z.union([ClusterTelemetrySchema, z.any().nullable()]).exactOptional(),
    requests: z.union([RequestsTelemetrySchema, z.any().nullable()]).exactOptional(),
    memory: z.union([MemoryTelemetrySchema, z.any().nullable()]).exactOptional(),
    hardware: z.union([HardwareTelemetrySchema, z.any().nullable()]).exactOptional(),
    search_pool: z.union([SearchThreadPoolTelemetrySchema, z.any().nullable()]).exactOptional(),
    quota: z
      .union([QuotaTelemetrySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Resource quota this node is enforcing, and whether it is currently over it. The config is whatever this node last persisted, so a peer that missed a consensus update reports what it is actually applying rather than what the cluster agreed on. Absent for a token without global access, which `GET /quotas` requires as well.',
      }),
  })
  .openapi({ required: ['collections', 'id'] })
  .openapi('TelemetryData')

const MoveShardSchema = z
  .object({
    shard_id: z.uint32().min(0),
    to_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    from_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    method: z
      .union([ShardTransferMethodSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Method for transferring the shard from one node to another' }),
  })
  .openapi({ required: ['from_peer_id', 'shard_id', 'to_peer_id'] })
  .openapi('MoveShard')

const MoveShardOperationSchema = z
  .object({ move_shard: MoveShardSchema })
  .openapi({ required: ['move_shard'] })
  .openapi('MoveShardOperation')

const ReplicateShardSchema = z
  .object({
    shard_id: z.uint32().min(0),
    to_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    from_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    method: z
      .union([ShardTransferMethodSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Method for transferring the shard from one node to another' }),
  })
  .openapi({ required: ['from_peer_id', 'shard_id', 'to_peer_id'] })
  .openapi('ReplicateShard')

const ReplicateShardOperationSchema = z
  .object({ replicate_shard: ReplicateShardSchema })
  .openapi({ required: ['replicate_shard'] })
  .openapi('ReplicateShardOperation')

const AbortShardTransferSchema = z
  .object({
    shard_id: z.uint32().min(0),
    to_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    from_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
  })
  .openapi({ required: ['from_peer_id', 'shard_id', 'to_peer_id'] })
  .openapi('AbortShardTransfer')

const AbortTransferOperationSchema = z
  .object({ abort_transfer: AbortShardTransferSchema })
  .openapi({ required: ['abort_transfer'] })
  .openapi('AbortTransferOperation')

const ReplicaSchema = z
  .object({
    shard_id: z.uint32().min(0),
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
  })
  .openapi({ required: ['peer_id', 'shard_id'] })
  .openapi('Replica')

const DropReplicaOperationSchema = z
  .object({ drop_replica: ReplicaSchema })
  .openapi({ required: ['drop_replica'] })
  .openapi('DropReplicaOperation')

const CreateShardingKeySchema = z
  .object({
    shard_key: ShardKeySchema,
    shards_number: z
      .uint32()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'How many shards to create for this key If not specified, will use the default value from config',
      }),
    replication_factor: z
      .uint32()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'How many replicas to create for each shard If not specified, will use the default value from config',
      }),
    placement: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
      )
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Placement of shards for this key List of peer ids, that can be used to place shards for this key If not specified, will be randomly placed among all peers',
      }),
    initial_state: z
      .union([ReplicaStateSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Initial state of the shards for this key If not specified, will be `Initializing` first and then `Active` Warning: do not change this unless you know what you are doing',
      }),
  })
  .openapi({ required: ['shard_key'] })
  .openapi('CreateShardingKey')

const CreateShardingKeyOperationSchema = z
  .object({ create_sharding_key: CreateShardingKeySchema })
  .openapi({ required: ['create_sharding_key'] })
  .openapi('CreateShardingKeyOperation')

const DropShardingKeySchema = z
  .object({ shard_key: ShardKeySchema })
  .openapi({ required: ['shard_key'] })
  .openapi('DropShardingKey')

const DropShardingKeyOperationSchema = z
  .object({ drop_sharding_key: DropShardingKeySchema })
  .openapi({ required: ['drop_sharding_key'] })
  .openapi('DropShardingKeyOperation')

const RestartTransferSchema = z
  .object({
    shard_id: z.uint32().min(0),
    from_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    to_peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    method: ShardTransferMethodSchema,
  })
  .openapi({ required: ['from_peer_id', 'method', 'shard_id', 'to_peer_id'] })
  .openapi('RestartTransfer')

const RestartTransferOperationSchema = z
  .object({ restart_transfer: RestartTransferSchema })
  .openapi({ required: ['restart_transfer'] })
  .openapi('RestartTransferOperation')

const StartReshardingSchema = z
  .object({
    direction: ReshardingDirectionSchema,
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({
        type: ['integer', 'null'],
        format: 'uint64',
        minimum: 0,
        description:
          'Peer to create the new shard on, or to migrate points away from when scaling down. If not specified, the least loaded peer is picked when scaling up, a peer holding the removed shard when scaling down.',
      }),
    shard_key: z
      .union([ShardKeySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Custom shard key to reshard, must already exist. If not specified, shards without a shard key are resharded.',
      }),
  })
  .openapi({ required: ['direction'] })
  .openapi('StartResharding')

const StartReshardingOperationSchema = z
  .object({ start_resharding: StartReshardingSchema })
  .openapi({ required: ['start_resharding'] })
  .openapi('StartReshardingOperation')

const AbortReshardingSchema = z.object({}).openapi('AbortResharding')

const AbortReshardingOperationSchema = z
  .object({ abort_resharding: AbortReshardingSchema })
  .openapi({ required: ['abort_resharding'] })
  .openapi('AbortReshardingOperation')

const ReplicatePointsSchema = z
  .object({
    filter: z.union([FilterSchema, z.any().nullable()]).exactOptional(),
    from_shard_key: ShardKeySchema,
    to_shard_key: ShardKeySchema,
  })
  .openapi({ required: ['from_shard_key', 'to_shard_key'] })
  .openapi('ReplicatePoints')

const ReplicatePointsOperationSchema = z
  .object({ replicate_points: ReplicatePointsSchema })
  .openapi({ required: ['replicate_points'] })
  .openapi('ReplicatePointsOperation')

const ClusterOperationsSchema = z
  .union([
    MoveShardOperationSchema,
    ReplicateShardOperationSchema,
    AbortTransferOperationSchema,
    DropReplicaOperationSchema,
    CreateShardingKeyOperationSchema,
    DropShardingKeyOperationSchema,
    RestartTransferOperationSchema,
    StartReshardingOperationSchema,
    AbortReshardingOperationSchema,
    ReplicatePointsOperationSchema,
  ])
  .openapi('ClusterOperations')

const SnapshotPrioritySchema = z
  .enum(['no_sync', 'snapshot', 'replica'])
  .openapi({
    description:
      'Defines source of truth for snapshot recovery:\n\n`NoSync` means - restore snapshot without *any* additional synchronization. `Snapshot` means - prefer snapshot data over the current state. `Replica` means - prefer existing data over the snapshot.',
  })
  .openapi('SnapshotPriority')

const SnapshotRecoverSchema = z
  .object({
    location: z
      .url()
      .openapi({
        description:
          'Examples: - URL `http://localhost:8080/collections/my_collection/snapshots/my_snapshot` - Local path `file:///qdrant/snapshots/test_collection-2022-08-04-10-49-10.snapshot`',
      }),
    priority: z
      .union([SnapshotPrioritySchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Defines which data should be used as a source of truth if there are other replicas in the cluster. If set to `Snapshot`, the snapshot will be used as a source of truth, and the current state will be overwritten. If set to `Replica`, the current state will be used as a source of truth, and after recovery it will be synchronized from other replicas.',
      }),
    checksum: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'Optional SHA256 checksum to verify snapshot integrity before recovery.',
      }),
    api_key: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'Optional API key used when fetching the snapshot from a remote URL.',
      }),
  })
  .openapi({ required: ['location'] })
  .openapi('SnapshotRecover')

const AliasDescriptionSchema = z
  .object({ alias_name: z.string(), collection_name: z.string() })
  .openapi({
    required: ['alias_name', 'collection_name'],
    example: { alias_name: 'blogs-title', collection_name: 'arivx-title' },
  })
  .openapi('AliasDescription')

const CollectionsAliasesResponseSchema = z
  .object({ aliases: z.array(AliasDescriptionSchema) })
  .openapi({ required: ['aliases'] })
  .openapi('CollectionsAliasesResponse')

const WriteOrderingSchema = z
  .enum(['weak', 'medium', 'strong'])
  .openapi({
    description:
      'Defines write ordering guarantees for collection operations\n\n* `weak` - write operations may be reordered, works faster, default\n\n* `medium` - write operations go through dynamically selected leader, may be inconsistent for a short period of time in case of leader change\n\n* `strong` - Write operations go through the permanent leader, consistent, but may be unavailable if leader is down',
  })
  .openapi('WriteOrdering')

const ReadConsistencyTypeSchema = z
  .enum(['majority', 'quorum', 'all'])
  .openapi({
    description:
      '* `majority` - send N/2+1 random request and return points, which present on all of them\n\n* `quorum` - send requests to all nodes and return points which present on majority of nodes\n\n* `all` - send requests to all nodes and return points which present on all nodes',
  })
  .openapi('ReadConsistencyType')

const ReadConsistencySchema = z
  .union([z.int().min(1), ReadConsistencyTypeSchema])
  .openapi({
    description:
      'Read consistency parameter\n\nDefines how many replicas should be queried to get the result\n\n* `N` - send N random request and return points, which present on all of them\n\n* `majority` - send N/2+1 random request and return points, which present on all of them\n\n* `quorum` - send requests to all nodes and return points which present on majority of them\n\n* `all` - send requests to all nodes and return points which present on all of them\n\nDefault value is `Factor(1)`',
  })
  .openapi('ReadConsistency')

const PointVectorsSchema = z
  .object({ id: ExtendedPointIdSchema, vector: VectorStructSchema })
  .openapi({ required: ['id', 'vector'] })
  .openapi('PointVectors')

const UpdateVectorsSchema = z
  .object({
    points: z
      .array(PointVectorsSchema)
      .min(1)
      .openapi({ description: 'Points with named vectors' }),
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    update_filter: z.union([FilterSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['points'] })
  .openapi('UpdateVectors')

const DeleteVectorsSchema = z
  .object({
    points: z
      .array(ExtendedPointIdSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Deletes values from each point in this list' }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Deletes values from points that satisfy this filter condition' }),
    vector: z
      .array(z.string())
      .min(1)
      .superRefine((items, ctx) => {
        const seen = new Map()
        for (const [i, val] of items.entries()) {
          const key = JSON.stringify(val)
          if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
          else seen.set(key, i)
        }
      })
      .openapi({ description: 'Vector names' }),
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['vector'] })
  .openapi('DeleteVectors')

const GroupIdSchema = z
  .union([
    z.string(),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
  ])
  .openapi({ description: 'Value of the group_by key, shared across all the hits in the group' })
  .openapi('GroupId')

const PointGroupSchema = z
  .object({
    hits: z
      .array(ScoredPointSchema)
      .openapi({ description: 'Scored points that have the same value of the group_by key' }),
    id: GroupIdSchema,
    lookup: z
      .union([RecordSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Record that has been looked up using the group id' }),
  })
  .openapi({ required: ['hits', 'id'] })
  .openapi('PointGroup')

const GroupsResultSchema = z
  .object({ groups: z.array(PointGroupSchema) })
  .openapi({ required: ['groups'] })
  .openapi('GroupsResult')

const UpsertOperationSchema = z
  .object({ upsert: PointInsertOperationsSchema })
  .openapi({ required: ['upsert'] })
  .openapi('UpsertOperation')

const DeleteOperationSchema = z
  .object({ delete: PointsSelectorSchema })
  .openapi({ required: ['delete'] })
  .openapi('DeleteOperation')

const SetPayloadOperationSchema = z
  .object({ set_payload: SetPayloadSchema })
  .openapi({ required: ['set_payload'] })
  .openapi('SetPayloadOperation')

const OverwritePayloadOperationSchema = z
  .object({ overwrite_payload: SetPayloadSchema })
  .openapi({ required: ['overwrite_payload'] })
  .openapi('OverwritePayloadOperation')

const DeletePayloadOperationSchema = z
  .object({ delete_payload: DeletePayloadSchema })
  .openapi({ required: ['delete_payload'] })
  .openapi('DeletePayloadOperation')

const ClearPayloadOperationSchema = z
  .object({ clear_payload: PointsSelectorSchema })
  .openapi({ required: ['clear_payload'] })
  .openapi('ClearPayloadOperation')

const UpdateVectorsOperationSchema = z
  .object({ update_vectors: UpdateVectorsSchema })
  .openapi({ required: ['update_vectors'] })
  .openapi('UpdateVectorsOperation')

const DeleteVectorsOperationSchema = z
  .object({ delete_vectors: DeleteVectorsSchema })
  .openapi({ required: ['delete_vectors'] })
  .openapi('DeleteVectorsOperation')

const UpdateOperationSchema = z
  .union([
    UpsertOperationSchema,
    DeleteOperationSchema,
    SetPayloadOperationSchema,
    OverwritePayloadOperationSchema,
    DeletePayloadOperationSchema,
    ClearPayloadOperationSchema,
    UpdateVectorsOperationSchema,
    DeleteVectorsOperationSchema,
  ])
  .openapi('UpdateOperation')

const UpdateOperationsSchema = z
  .object({ operations: z.array(UpdateOperationSchema) })
  .openapi({ required: ['operations'] })
  .openapi('UpdateOperations')

const ShardSnapshotLocationSchema = z.union([z.url(), z.string()]).openapi('ShardSnapshotLocation')

const ShardSnapshotRecoverSchema = z
  .object({
    location: ShardSnapshotLocationSchema,
    priority: z
      .union([SnapshotPrioritySchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional(),
    checksum: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'Optional SHA256 checksum to verify snapshot integrity before recovery.',
      }),
    api_key: z
      .string()
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description: 'Optional API key used when fetching the snapshot from a remote URL.',
      }),
  })
  .openapi({ required: ['location'] })
  .openapi('ShardSnapshotRecover')

const VersionInfoSchema = z
  .object({ title: z.string(), version: z.string(), commit: z.string().nullable().exactOptional() })
  .openapi({ required: ['title', 'version'] })
  .openapi('VersionInfo')

const CollectionExistenceSchema = z
  .object({ exists: z.boolean() })
  .openapi({
    description: 'State of existence of a collection, true = exists, false = does not exist',
    required: ['exists'],
  })
  .openapi('CollectionExistence')

const PrefetchSchema: z.ZodType<PrefetchType> = z
  .lazy(() =>
    z
      .object({
        prefetch: z
          .union([PrefetchSchema, z.array(PrefetchSchema), z.any().nullable()])
          .nullable()
          .default(null)
          .exactOptional()
          .openapi({
            description:
              'Sub-requests to perform first. If present, the query will be performed on the results of the prefetches.',
          }),
        query: z
          .union([QueryInterfaceSchema, z.any().nullable()])
          .exactOptional()
          .openapi({
            description:
              'Query to perform. If missing without prefetches, returns points ordered by their IDs.',
          }),
        using: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.',
          }),
        filter: z
          .union([FilterSchema, z.any().nullable()])
          .exactOptional()
          .openapi({
            description:
              'Filter conditions - return only those points that satisfy the specified conditions.',
          }),
        params: z
          .union([SearchParamsSchema, z.any().nullable()])
          .exactOptional()
          .openapi({ description: 'Search params for when there is no prefetch' }),
        score_threshold: z
          .float32()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Return points with scores better than this threshold.' }),
        limit: z
          .int()
          .min(1)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Max number of points to return. Default is 10.' }),
        lookup_from: z
          .union([LookupLocationSchema, z.any().nullable()])
          .nullable()
          .default(null)
          .exactOptional()
          .openapi({
            description:
              "The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection",
          }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Prefetch')

const QueryRequestSchema = z
  .object({
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    prefetch: z
      .union([PrefetchSchema, z.array(PrefetchSchema), z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).',
      }),
    query: z
      .union([QueryInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Query to perform. If missing without prefetches, returns points ordered by their IDs.',
      }),
    using: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.',
      }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Filter conditions - return only those points that satisfy the specified conditions.',
      }),
    params: z
      .union([SearchParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Search params for when there is no prefetch' }),
    score_threshold: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Return points with scores better than this threshold.' }),
    limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of points to return. Default is 10.' }),
    offset: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Offset of the result. Skip this many points. Default is 0' }),
    with_vector: z
      .union([WithVectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Options for specifying which vectors to include into the response. Default is false.',
      }),
    with_payload: z
      .union([WithPayloadInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Options for specifying which payload to include or not. Default is false.',
      }),
    lookup_from: z
      .union([LookupLocationSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection",
      }),
  })
  .openapi({ required: [] })
  .openapi('QueryRequest')

const QueryRequestBatchSchema = z
  .object({ searches: z.array(QueryRequestSchema) })
  .openapi({ required: ['searches'] })
  .openapi('QueryRequestBatch')

const QueryResponseSchema = z
  .object({ points: z.array(ScoredPointSchema) })
  .openapi({ required: ['points'] })
  .openapi('QueryResponse')

const WithLookupSchema = z
  .object({
    collection: z
      .string()
      .openapi({ description: 'Name of the collection to use for points lookup' }),
    with_payload: z
      .union([WithPayloadInterfaceSchema, z.any().nullable()])
      .default(true)
      .exactOptional()
      .openapi({ description: 'Options for specifying which payload to include (or not)' }),
    with_vectors: z
      .union([WithVectorSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({ description: 'Options for specifying which vectors to include (or not)' }),
  })
  .openapi({ required: ['collection'] })
  .openapi('WithLookup')

const WithLookupInterfaceSchema = z
  .union([z.string(), WithLookupSchema])
  .openapi('WithLookupInterface')

const QueryGroupsRequestSchema = z
  .object({
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    prefetch: z
      .union([PrefetchSchema, z.array(PrefetchSchema), z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          'Sub-requests to perform first. If present, the query will be performed on the results of the prefetch(es).',
      }),
    query: z
      .union([QueryInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Query to perform. If missing without prefetches, returns points ordered by their IDs.',
      }),
    using: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Define which vector name to use for querying. If missing, the default vector is used. For a `text` query, the payload field whose text index to search.',
      }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Filter conditions - return only those points that satisfy the specified conditions.',
      }),
    params: z
      .union([SearchParamsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Search params for when there is no prefetch' }),
    score_threshold: z
      .float32()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Return points with scores better than this threshold.' }),
    with_vector: z
      .union([WithVectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Options for specifying which vectors to include into the response. Default is false.',
      }),
    with_payload: z
      .union([WithPayloadInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Options for specifying which payload to include or not. Default is false.',
      }),
    lookup_from: z
      .union([LookupLocationSchema, z.any().nullable()])
      .nullable()
      .default(null)
      .exactOptional()
      .openapi({
        description:
          "The location to use for IDs lookup, if not specified - use the current collection and the 'using' vector Note: the other collection vectors should have the same vector size as the 'using' vector in the current collection",
      }),
    group_by: z
      .string()
      .min(1)
      .openapi({
        description:
          'Payload field to group by, must be a string or number field. If the field contains more than 1 value, all values will be used for grouping. One point can be in multiple groups.',
      }),
    group_size: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum amount of points to return per group. Default is 3.' }),
    limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum amount of groups to return. Default is 10.' }),
    with_lookup: z
      .union([WithLookupInterfaceSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Look for points in another collection using the group ids' }),
  })
  .openapi({ required: ['group_by'] })
  .openapi('QueryGroupsRequest')

const SearchMatrixRequestSchema = z
  .object({
    shard_key: z
      .union([ShardKeySelectorSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Specify in which shards to look for the points, if not specified - look in all shards',
      }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Look only for points which satisfies this conditions' }),
    sample: z
      .int()
      .min(2)
      .nullable()
      .exactOptional()
      .openapi({ description: 'How many points to select and search within. Default is 10.' }),
    limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'How many neighbours per sample to find. Default is 3.' }),
    using: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Define which vector name to use for querying. If missing, the default vector is used.',
      }),
  })
  .openapi({ required: [] })
  .openapi('SearchMatrixRequest')

const SearchMatrixOffsetsResponseSchema = z
  .object({
    offsets_row: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
      )
      .openapi({ description: 'Row indices of the matrix' }),
    offsets_col: z
      .array(
        z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .openapi({ type: 'integer', format: 'uint64', minimum: 0 }),
      )
      .openapi({ description: 'Column indices of the matrix' }),
    scores: z
      .array(z.float32())
      .openapi({ description: 'Scores associated with matrix coordinates' }),
    ids: z.array(ExtendedPointIdSchema).openapi({ description: 'Ids of the points in order' }),
  })
  .openapi({ required: ['ids', 'offsets_col', 'offsets_row', 'scores'] })
  .openapi('SearchMatrixOffsetsResponse')

const SearchMatrixPairSchema = z
  .object({ a: ExtendedPointIdSchema, b: ExtendedPointIdSchema, score: z.float32() })
  .openapi({ description: 'Pair of points (a, b) with score', required: ['a', 'b', 'score'] })
  .openapi('SearchMatrixPair')

const SearchMatrixPairsResponseSchema = z
  .object({
    pairs: z
      .array(SearchMatrixPairSchema)
      .openapi({ description: 'List of pairs of points with scores' }),
  })
  .openapi({ required: ['pairs'] })
  .openapi('SearchMatrixPairsResponse')

const FacetRequestSchema = z
  .object({
    shard_key: z.union([ShardKeySelectorSchema, z.any().nullable()]).exactOptional(),
    key: z.string().openapi({ description: 'Payload key to use for faceting.' }),
    limit: z
      .int()
      .min(1)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Max number of hits to return. Default is 10.' }),
    filter: z
      .union([FilterSchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description: 'Filter conditions - only consider points that satisfy these conditions.',
      }),
    exact: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Whether to do a more expensive exact count for each of the values in the facet. Default is false.',
      }),
  })
  .openapi({ required: ['key'] })
  .openapi('FacetRequest')

const FacetValueSchema = z
  .union([
    z.string(),
    z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.int64(),
      )
      .openapi({ type: 'integer', format: 'int64' }),
    z.boolean(),
  ])
  .openapi('FacetValue')

const FacetValueHitSchema = z
  .object({ value: FacetValueSchema, count: z.int().min(0) })
  .openapi({ required: ['count', 'value'] })
  .openapi('FacetValueHit')

const FacetResponseSchema = z
  .object({ hits: z.array(FacetValueHitSchema) })
  .openapi({ required: ['hits'] })
  .openapi('FacetResponse')

const UsageSchema: z.ZodType<UsageType> = z
  .lazy(() =>
    z
      .object({
        hardware: z.union([HardwareUsageSchema, z.any().nullable()]).exactOptional(),
        inference: z.union([InferenceUsageSchema, z.any().nullable()]).exactOptional(),
      })
      .openapi({
        description: 'Usage of the hardware resources, spent to process the request',
        required: [],
      }),
  )
  .openapi('Usage')

const ShardKeyDescriptionSchema = z
  .object({ key: ShardKeySchema })
  .openapi({ required: ['key'] })
  .openapi('ShardKeyDescription')

const ShardKeysResponseSchema = z
  .object({
    shard_keys: z
      .array(ShardKeyDescriptionSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The existing shard keys. Only available when sharding method is `custom`',
      }),
  })
  .openapi({ required: [] })
  .openapi('ShardKeysResponse')

const OptimizationsSummarySchema = z
  .object({
    queued_optimizations: z
      .int()
      .min(0)
      .openapi({
        description:
          'Number of pending optimizations in the queue. Each optimization will take one or more unoptimized segments and produce one optimized segment.',
      }),
    queued_segments: z
      .int()
      .min(0)
      .openapi({ description: 'Number of unoptimized segments in the queue.' }),
    queued_points: z
      .int()
      .min(0)
      .openapi({ description: 'Number of points in unoptimized segments in the queue.' }),
    idle_segments: z
      .int()
      .min(0)
      .openapi({ description: "Number of segments that don't require optimization." }),
  })
  .openapi({
    required: ['idle_segments', 'queued_optimizations', 'queued_points', 'queued_segments'],
  })
  .openapi('OptimizationsSummary')

const OptimizationSegmentInfoSchema = z
  .object({
    uuid: z.uuid().openapi({ description: 'Unique identifier of the segment.' }),
    points_count: z
      .int()
      .min(0)
      .openapi({ description: 'Number of non-deleted points in the segment.' }),
  })
  .openapi({ required: ['points_count', 'uuid'] })
  .openapi('OptimizationSegmentInfo')

const ProgressTreeSchema: z.ZodType<ProgressTreeType> = z
  .lazy(() =>
    z
      .object({
        name: z.string().openapi({ description: 'Name of the operation.' }),
        started_at: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({ description: 'When the operation started.' }),
        finished_at: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({ description: 'When the operation finished.' }),
        duration_sec: z
          .float64()
          .nullable()
          .exactOptional()
          .openapi({ description: 'For finished operations, how long they took, in seconds.' }),
        done: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'uint64',
            minimum: 0,
            description: 'Number of completed units of work, if applicable.',
          }),
        total: z
          .preprocess(
            (val) =>
              typeof val === 'number' && Number.isSafeInteger(val)
                ? BigInt(val)
                : typeof val === 'string' && /^-?\d+$/.test(val)
                  ? BigInt(val)
                  : val,
            z.uint64().min(0n),
          )
          .nullable()
          .exactOptional()
          .openapi({
            type: ['integer', 'null'],
            format: 'uint64',
            minimum: 0,
            description: 'Total number of units of work, if applicable and known.',
          }),
        children: z
          .array(ProgressTreeSchema)
          .exactOptional()
          .openapi({ description: 'Child operations.' }),
      })
      .openapi({ required: ['name'] }),
  )
  .openapi('ProgressTree')

const OptimizationSchema = z
  .object({
    uuid: z
      .uuid()
      .openapi({
        description:
          'Unique identifier of the optimization process.\n\nAfter the optimization is complete, a new segment will be created with this UUID.',
      }),
    optimizer: z
      .string()
      .openapi({ description: 'Name of the optimizer that performed this optimization.' }),
    status: TrackerStatusSchema,
    segments: z
      .array(OptimizationSegmentInfoSchema)
      .openapi({
        description:
          'Segments being optimized.\n\nAfter the optimization is complete, these segments will be replaced by the new optimized segment.',
      }),
    progress: ProgressTreeSchema,
  })
  .openapi({ required: ['optimizer', 'progress', 'segments', 'status', 'uuid'] })
  .openapi('Optimization')

const PendingOptimizationSchema = z
  .object({
    optimizer: z
      .string()
      .openapi({ description: 'Name of the optimizer that scheduled this optimization.' }),
    segments: z
      .array(OptimizationSegmentInfoSchema)
      .openapi({ description: 'Segments that will be optimized.' }),
  })
  .openapi({ required: ['optimizer', 'segments'] })
  .openapi('PendingOptimization')

const OptimizationsResponseSchema = z
  .object({
    summary: OptimizationsSummarySchema,
    running: z
      .array(OptimizationSchema)
      .openapi({ description: 'Currently running optimizations.' }),
    queued: z
      .array(PendingOptimizationSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'An estimated queue of pending optimizations. Requires `?with=queued`.',
      }),
    completed: z
      .array(OptimizationSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Completed optimizations. Requires `?with=completed`. Limited by `?completed_limit=N`.',
      }),
    idle_segments: z
      .array(OptimizationSegmentInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description: "Segments that don't require optimization. Requires `?with=idle_segments`.",
      }),
  })
  .openapi({
    description: 'Optimizations progress for the collection',
    required: ['running', 'summary'],
  })
  .openapi('OptimizationsResponse')

const DistributedReplicaTelemetrySchema = z
  .object({
    peer_id: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Peer ID hosting this replica',
      }),
    state: ReplicaStateSchema,
    status: z
      .union([ShardStatusSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Shard status' }),
    total_optimized_points: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Total optimized points' }),
    vectors_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Estimated vectors size in bytes' }),
    payloads_size_bytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Estimated payloads size in bytes' }),
    num_points: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Approximate number of points' }),
    num_vectors: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Approximate number of vectors' }),
    num_vectors_by_name: z
      .record(z.string(), z.int().min(0))
      .nullable()
      .exactOptional()
      .openapi({ description: 'Approximate number of vectors by name' }),
    shard_cleaning_status: z
      .union([ShardCleanStatusTelemetrySchema, z.any().nullable()])
      .exactOptional()
      .openapi({
        description:
          'Shard cleaning task status. After a resharding, a cleanup task is performed to remove outdated points from this shard.',
      }),
    partial_snapshot: z
      .union([PartialSnapshotTelemetrySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Partial snapshot telemetry' }),
  })
  .openapi({ required: ['peer_id', 'state'] })
  .openapi('DistributedReplicaTelemetry')

const DistributedShardTelemetrySchema = z
  .object({
    id: z.uint32().min(0).openapi({ description: 'Shard ID' }),
    key: z
      .union([ShardKeySchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Optional shard key' }),
    replicas: z
      .array(DistributedReplicaTelemetrySchema)
      .openapi({ description: 'Replica information' }),
  })
  .openapi({ required: ['id', 'replicas'] })
  .openapi('DistributedShardTelemetry')

const DistributedCollectionTelemetrySchema = z
  .object({
    id: z.string().openapi({ description: 'Collection name' }),
    shards: z
      .array(DistributedShardTelemetrySchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Shards topology' }),
    reshardings: z
      .array(ReshardingInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Ongoing resharding operations' }),
    shard_transfers: z
      .array(ShardTransferInfoSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Ongoing shard transfers' }),
  })
  .openapi({ required: ['id'] })
  .openapi('DistributedCollectionTelemetry')

const DistributedPeerDetailsSchema = z
  .object({
    version: z.string().openapi({ description: 'Qdrant version' }),
    role: z
      .union([StateRoleSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'Consensus role for the peer' }),
    is_voter: z
      .boolean()
      .openapi({ description: 'Whether it can participate in leader elections' }),
    term: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({ type: 'integer', format: 'uint64', minimum: 0, description: 'Election term' }),
    commit: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Latest accepted commit',
      }),
    num_pending_operations: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .openapi({
        type: 'integer',
        format: 'uint64',
        minimum: 0,
        description: 'Number of operations pending for being applied',
      }),
    consensus_thread_status: ConsensusThreadStatusSchema,
  })
  .openapi({
    required: [
      'commit',
      'consensus_thread_status',
      'is_voter',
      'num_pending_operations',
      'term',
      'version',
    ],
  })
  .openapi('DistributedPeerDetails')

const DistributedPeerInfoSchema = z
  .object({
    uri: z.string().openapi({ description: 'URI of the peer' }),
    responsive: z
      .boolean()
      .openapi({ description: 'Whether this peer responded for this request' }),
    details: z
      .union([DistributedPeerDetailsSchema, z.any().nullable()])
      .exactOptional()
      .openapi({ description: 'If responsive, these details should be available' }),
  })
  .openapi({ required: ['responsive', 'uri'] })
  .openapi('DistributedPeerInfo')

const DistributedClusterTelemetrySchema = z
  .object({
    enabled: z.boolean(),
    number_of_peers: z
      .preprocess(
        (val) =>
          typeof val === 'number' && Number.isSafeInteger(val)
            ? BigInt(val)
            : typeof val === 'string' && /^-?\d+$/.test(val)
              ? BigInt(val)
              : val,
        z.uint64().min(0n),
      )
      .nullable()
      .exactOptional()
      .openapi({ type: ['integer', 'null'], format: 'uint64', minimum: 0 }),
    peers: z.record(z.string(), DistributedPeerInfoSchema),
  })
  .openapi({ required: ['enabled', 'peers'] })
  .openapi('DistributedClusterTelemetry')

const DistributedTelemetryDataSchema = z
  .object({
    collections: z.record(z.string(), DistributedCollectionTelemetrySchema),
    cluster: z.union([DistributedClusterTelemetrySchema, z.any().nullable()]).exactOptional(),
  })
  .openapi({ required: ['collections'] })
  .openapi('DistributedTelemetryData')

const VectorNameConfigSchema: z.ZodType<VectorNameConfigType> = z
  .lazy(() =>
    z
      .union([DenseVectorNameConfigSchema, SparseVectorNameConfigSchema])
      .openapi({
        description:
          'Configuration for creating a new named vector.\n\nContains only the immutable properties that define a vector space. Storage type, index, and quantization are determined automatically based on the segment type and can be configured separately later.\n\nExample JSON for a dense vector: ```json { "dense": { "size": 768, "distance": "Cosine" } } ```\n\nExample JSON for a sparse vector: ```json { "sparse": { "modifier": "Idf" } } ```',
      }),
  )
  .openapi('VectorNameConfig')

const QuotaUsageSchema = z
  .object({
    resident_memory_percent: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Resident memory of this node's process, as a percentage of the memory available to it (cgroup limit if one applies, else total system memory).",
      }),
    disk_usage_percent: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Used space of this node's storage filesystem, as a percentage of its capacity.",
      }),
  })
  .openapi({
    description:
      'Utilization of the quota-managed resources **on this node alone** — memory and disk are node-local, so a peer under its limit says nothing about the rest of the cluster.\n\nA field is `null` when the platform does not expose the underlying stat.',
    required: [],
  })
  .openapi('QuotaUsage')

const PeerQuotaUsageSchema = z
  .object({
    exceeded: z
      .boolean()
      .openapi({
        description:
          'Whether this peer is at or over one of the enforced limits, and so is currently refusing updates. Always false while the quota is disabled.',
      }),
    resident_memory_percent: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Resident memory of this node's process, as a percentage of the memory available to it (cgroup limit if one applies, else total system memory).",
      }),
    disk_usage_percent: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          "Used space of this node's storage filesystem, as a percentage of its capacity.",
      }),
  })
  .openapi({
    description: 'What one peer reports about the quota it is enforcing.',
    required: ['exceeded'],
  })
  .openapi('PeerQuotaUsage')

const QuotaStatusSchema = z
  .object({
    config: QuotaConfigSchema,
    usage: QuotaUsageSchema,
    peers: z
      .record(z.string(), PeerQuotaUsageSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Utilization reported by each peer, keyed by peer ID, including the one that served the request.\n\nOnly peers that answered are listed: a peer missing from the map could not be reached, which is itself worth seeing. Absent entirely outside distributed mode, where there are no peers to ask.',
      }),
  })
  .openapi({
    description:
      'Quota configuration in effect, and how close each peer is to it.\n\nThe configuration is cluster-wide; the utilization is not. `usage` is the node that served the request, and `peers` is what every peer that answered reports about itself — memory and disk are node-local, so one peer being under its limit says nothing about the others.',
    required: ['config', 'usage'],
  })
  .openapi('QuotaStatus')

const ApiKeySecurityScheme = {
  type: 'apiKey',
  in: 'header',
  name: 'api-key',
  description: 'Authorization key, either read-write or read-only',
}

const BearerAuthSecurityScheme = { type: 'http', scheme: 'bearer' }

export const getCollectionsCollectionNameShardsRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/shards',
  tags: ['Distributed'],
  summary: 'List shard keys',
  operationId: 'list_shard_keys',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to list shard keys for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: ShardKeysResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNameShardsRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/shards',
  tags: ['Distributed'],
  summary: 'Create shard key',
  operationId: 'create_shard_key',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to create shards for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Shard key configuration',
      content: { 'application/json': { schema: CreateShardingKeySchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameShardsDeleteRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/shards/delete',
  tags: ['Distributed'],
  summary: 'Delete shard key',
  operationId: 'delete_shard_key',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to create shards for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Select shard key to delete',
      content: { 'application/json': { schema: DropShardingKeySchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Service'],
  summary: 'Returns information about the running Qdrant instance',
  description: 'Returns information about the running Qdrant instance like version and commit id',
  operationId: 'root',
  responses: {
    200: {
      description: 'Qdrant server version information',
      content: { 'application/json': { schema: VersionInfoSchema } },
    },
    '4XX': { description: 'error' },
  },
})

export const getTelemetryRoute = createRoute({
  method: 'get',
  path: '/telemetry',
  tags: ['Service'],
  summary: 'Collect telemetry data',
  description:
    'Collect telemetry data including app info, system info, collections info, cluster info, configs and statistics',
  operationId: 'telemetry',
  request: {
    query: z.object({
      anonymize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'anonymize',
            in: 'query',
            description: 'If true, anonymize result',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      details_level: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'details_level',
            in: 'query',
            description:
              'Level of details in telemetry data. Minimal level is 0, maximal is infinity',
            required: false,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      per_collection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'per_collection',
            in: 'query',
            description: 'If true, include per-collection request statistics in the response',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for this request',
            required: false,
            schema: { type: 'integer', minimum: 1, default: 60 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: TelemetryDataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Service'],
  summary: 'Collect Prometheus metrics data',
  description:
    'Collect metrics data including app info, collections info, cluster info and statistics',
  operationId: 'metrics',
  request: {
    query: z.object({
      anonymize: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'anonymize',
            in: 'query',
            description: 'If true, anonymize result',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      per_collection: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'per_collection',
            in: 'query',
            description:
              'If true, include per-collection request metrics with a collection label instead of global request metrics',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for this request',
            required: false,
            schema: { type: 'integer', minimum: 1, default: 60 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Metrics data in Prometheus format',
      content: {
        'text/plain': {
          schema: z
            .string()
            .openapi({
              example:
                '# HELP app_info information about qdrant server\n# TYPE app_info gauge\napp_info{name="qdrant",version="0.11.1"} 1\n# HELP cluster_enabled is cluster support enabled\n# TYPE cluster_enabled gauge\ncluster_enabled 0\n# HELP collections_total number of collections\n# TYPE collections_total gauge\ncollections_total 1\n',
            }),
        },
      },
    },
    '4XX': { description: 'error' },
  },
})

export const getHealthzRoute = createRoute({
  method: 'get',
  path: '/healthz',
  tags: ['Service'],
  summary: 'Kubernetes healthz endpoint',
  description:
    'Liveness-style health check. Returns 200 as soon as the HTTP API is serving requests. It does not inspect collections, shards or consensus state, and is identical to `/livez`. Use it only to detect whether the process is up and responsive.',
  operationId: 'healthz',
  responses: {
    200: {
      description: 'Healthz response',
      content: {
        'text/plain': { schema: z.string().openapi({ example: 'healthz check passed' }) },
      },
    },
    '4XX': { description: 'error' },
  },
})

export const getLivezRoute = createRoute({
  method: 'get',
  path: '/livez',
  tags: ['Service'],
  summary: 'Kubernetes livez endpoint',
  description:
    'Kubernetes liveness probe. Returns 200 as soon as the HTTP API is serving requests. It does not inspect collections, shards or consensus state, and is identical to `/healthz`. A failure indicates the process is unresponsive and should be restarted.',
  operationId: 'livez',
  responses: {
    200: {
      description: 'Healthz response',
      content: {
        'text/plain': { schema: z.string().openapi({ example: 'healthz check passed' }) },
      },
    },
    '4XX': { description: 'error' },
  },
})

export const getReadyzRoute = createRoute({
  method: 'get',
  path: '/readyz',
  tags: ['Service'],
  summary: 'Kubernetes readyz endpoint',
  description:
    'Kubernetes readiness probe. Checks the instance and waits out pending data operations to see when it can start accepting traffic. In a distributed deployment it returns 200 only once the node has caught up with the cluster consensus commit and its local shards are healthy; otherwise it returns 503. In a single-node deployment it always returns 200 once the API is up. Use it to decide when to route traffic to the instance.',
  operationId: 'readyz',
  responses: {
    200: {
      description: 'The instance is ready to accept traffic',
      content: {
        'text/plain': { schema: z.string().openapi({ example: 'all shards are ready' }) },
      },
    },
    503: {
      description: 'The instance is not ready to accept traffic yet',
      content: {
        'text/plain': { schema: z.string().openapi({ example: 'some shards are not ready' }) },
      },
    },
    '4XX': { description: 'error' },
  },
})

export const getIssuesRoute = createRoute({
  method: 'get',
  path: '/issues',
  tags: ['Beta'],
  summary: 'Get issues',
  description: 'Get a report of performance issues and configuration suggestions',
  operationId: 'get_issues',
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: z.object({}) } },
    },
    '4XX': { description: 'error' },
  },
})

export const deleteIssuesRoute = createRoute({
  method: 'delete',
  path: '/issues',
  tags: ['Beta'],
  summary: 'Clear issues',
  description: 'Removes all issues reported so far',
  operationId: 'clear_issues',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getClusterRoute = createRoute({
  method: 'get',
  path: '/cluster',
  tags: ['Distributed'],
  summary: 'Get cluster status info',
  description: 'Get information about the current state and composition of the cluster',
  operationId: 'cluster_status',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: ClusterStatusSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getClusterTelemetryRoute = createRoute({
  method: 'get',
  path: '/cluster/telemetry',
  tags: ['Distributed'],
  summary: 'Collect cluster telemetry data',
  description:
    'Get telemetry data, from the point of view of the cluster. This includes peers info, collections info, shard transfers, and resharding status',
  operationId: 'cluster_telemetry',
  request: {
    query: z.object({
      details_level: z
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
          param: {
            name: 'details_level',
            in: 'query',
            description: 'The level of detail to include in the response',
            required: false,
            schema: { type: 'integer' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .default(60)
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for this request',
            required: false,
            schema: { type: 'integer', minimum: 1, default: 60 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: DistributedTelemetryDataSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postClusterRecoverRoute = createRoute({
  method: 'post',
  path: '/cluster/recover',
  tags: ['Distributed'],
  summary: 'Tries to recover current peer Raft state.',
  operationId: 'recover_current_peer',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteClusterPeerPeerIdRoute = createRoute({
  method: 'delete',
  path: '/cluster/peer/{peer_id}',
  tags: ['Distributed'],
  summary: 'Remove peer from the cluster',
  description:
    'Tries to remove peer from the cluster. Will return an error if peer has shards on it.',
  operationId: 'remove_peer',
  request: {
    params: z.object({
      peer_id: z
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
            name: 'peer_id',
            in: 'path',
            description: 'Id of the peer',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
      force: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'force',
            in: 'query',
            description: 'If true - removes peer even if it has shards/replicas on it.',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getQuotasRoute = createRoute({
  method: 'get',
  path: '/quotas',
  tags: ['Quotas'],
  summary: 'Get global quotas',
  description:
    'Get the cluster-wide resource quota configuration, together with the current utilization it is measured against.\nThe configuration is the same on every peer, but the reported utilization is for the node serving this request only -\nmemory and disk are node-local, so query each peer to see where the whole cluster stands.\n',
  operationId: 'get_quotas',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: QuotaStatusSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putQuotasRoute = createRoute({
  method: 'put',
  path: '/quotas',
  tags: ['Quotas'],
  summary: 'Set global quotas',
  description:
    'Replace the cluster-wide resource quota configuration. The new configuration is propagated to every peer through consensus and persisted, so it survives restarts',
  operationId: 'update_quotas',
  request: {
    query: z.object({
      wait: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait until the new configuration is confirmed by consensus on this peer.\nIf false - the request returns as soon as the change is proposed.\n',
            schema: { type: 'boolean', default: false },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Quota configuration to apply',
      content: { 'application/json': { schema: QuotaConfigSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Collections'],
  summary: 'List collections',
  description: 'Get list name of all existing collections',
  operationId: 'get_collections',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CollectionsResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}',
  tags: ['Collections'],
  summary: 'Collection info',
  description: 'Get detailed information about specified existing collection',
  operationId: 'get_collection',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to retrieve',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CollectionInfoSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNameRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}',
  tags: ['Collections'],
  summary: 'Create collection',
  description: 'Create new collection with given parameters',
  operationId: 'create_collection',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the new collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Parameters of a new collection',
      content: { 'application/json': { schema: CreateCollectionSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_name}',
  tags: ['Collections'],
  summary: 'Delete collection',
  description: 'Drop collection and all associated data',
  operationId: 'delete_collection',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const patchCollectionsCollectionNameRoute = createRoute({
  method: 'patch',
  path: '/collections/{collection_name}',
  tags: ['Collections'],
  summary: 'Update collection parameters',
  description: 'Update parameters of the existing collection',
  operationId: 'update_collection',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to update',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
    body: {
      description: 'New parameters',
      content: { 'application/json': { schema: UpdateCollectionSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsAliasesRoute = createRoute({
  method: 'post',
  path: '/collections/aliases',
  tags: ['Aliases'],
  summary: 'Update aliases of the collections',
  operationId: 'update_aliases',
  request: {
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Alias update operations',
      content: { 'application/json': { schema: ChangeAliasesOperationSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNameIndexRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/index',
  tags: ['Indexes'],
  summary: 'Create index for field in collection',
  description: 'Create index for field in collection',
  operationId: 'create_field_index',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Field name',
      content: { 'application/json': { schema: CreateFieldIndexSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameExistsRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/exists',
  tags: ['Collections'],
  summary: 'Check the existence of a collection',
  description: 'Returns "true" if the given collection name exists, and "false" otherwise',
  operationId: 'collection_exists',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CollectionExistenceSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameIndexFieldNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_name}/index/{field_name}',
  tags: ['Indexes'],
  summary: 'Delete index for field in collection',
  description: 'Delete field index for collection',
  operationId: 'delete_field_index',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      field_name: z
        .string()
        .openapi({
          param: {
            name: 'field_name',
            in: 'path',
            description: 'Name of the field where to delete the index',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNameVectorsVectorNameRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/vectors/{vector_name}',
  tags: ['Collections'],
  summary: 'Create named vector',
  description: 'Create a new named vector on an existing collection',
  operationId: 'create_vector_name',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      vector_name: z
        .string()
        .openapi({
          param: {
            name: 'vector_name',
            in: 'path',
            description: 'Name of the vector to create',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Vector configuration - dense or sparse',
      content: { 'application/json': { schema: VectorNameConfigSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameVectorsVectorNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_name}/vectors/{vector_name}',
  tags: ['Collections'],
  summary: 'Delete named vector',
  description: 'Delete a named vector from a collection',
  operationId: 'delete_vector_name',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      vector_name: z
        .string()
        .openapi({
          param: {
            name: 'vector_name',
            in: 'path',
            description: 'Name of the vector to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameClusterRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/cluster',
  tags: ['Distributed'],
  summary: 'Collection cluster info',
  description: 'Get cluster information for a collection',
  operationId: 'collection_cluster_info',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to retrieve the cluster info for',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CollectionClusterInfoSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameClusterRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/cluster',
  tags: ['Distributed'],
  summary: 'Update collection cluster setup',
  operationId: 'update_collection_cluster',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection on which to to apply the cluster update operation',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description:
              'Wait for operation commit timeout in seconds.\nIf timeout is reached - request will return with service error.\n',
            schema: { type: 'integer', minimum: 1 },
            required: false,
          },
        }),
    }),
    body: {
      description: 'Collection cluster update operations',
      content: { 'application/json': { schema: ClusterOperationsSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameOptimizationsRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/optimizations',
  tags: ['Collections'],
  summary: 'Get optimization progress',
  description: 'Get progress of ongoing and completed optimizations for a collection',
  operationId: 'get_optimizations',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      with: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'with',
            in: 'query',
            description:
              'Comma-separated list of optional fields to include in the response.\nPossible values: queued, completed, idle_segments.',
            required: false,
            schema: { type: 'string' },
          },
        }),
      completed_limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(16)
        .exactOptional()
        .openapi({
          param: {
            name: 'completed_limit',
            in: 'query',
            description:
              'Maximum number of completed optimizations to return.\nIgnored if `completed` is not in the `with` parameter.',
            required: false,
            schema: { type: 'integer', minimum: 0, default: 16 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: OptimizationsResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameAliasesRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/aliases',
  tags: ['Aliases'],
  summary: 'List aliases for collection',
  description: 'Get list of all aliases for a collection',
  operationId: 'get_collection_aliases',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CollectionsAliasesResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getAliasesRoute = createRoute({
  method: 'get',
  path: '/aliases',
  tags: ['Aliases'],
  summary: 'List collections aliases',
  description: 'Get list of all existing collections aliases',
  operationId: 'get_collections_aliases',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CollectionsAliasesResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameSnapshotsUploadRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/snapshots/upload',
  tags: ['Snapshots'],
  summary: 'Recover from an uploaded snapshot',
  description:
    'Recover local collection data from an uploaded snapshot. This will overwrite any data, stored on this node, for the collection. If collection does not exist - it will be created.',
  operationId: 'recover_from_uploaded_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      priority: SnapshotPrioritySchema.openapi({
        param: {
          name: 'priority',
          in: 'query',
          description: 'Defines source of truth for snapshot recovery',
          required: false,
          schema: { $ref: '#/components/schemas/SnapshotPriority' },
        },
      }).exactOptional(),
      checksum: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'checksum',
            in: 'query',
            description: 'Optional SHA256 checksum to verify snapshot integrity before recovery.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Snapshot to recover from',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              snapshot: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNameSnapshotsRecoverRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/snapshots/recover',
  tags: ['Snapshots'],
  summary: 'Recover from a snapshot',
  description:
    'Recover local collection data from a snapshot. This will overwrite any data, stored on this node, for the collection. If collection does not exist - it will be created.',
  operationId: 'recover_from_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description: 'Snapshot to recover from',
      content: { 'application/json': { schema: SnapshotRecoverSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameSnapshotsRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/snapshots',
  tags: ['Snapshots'],
  summary: 'List collection snapshots',
  description: 'Get list of snapshots for a collection',
  operationId: 'list_snapshots',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.array(SnapshotDescriptionSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameSnapshotsRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/snapshots',
  tags: ['Snapshots'],
  summary: 'Create collection snapshot',
  description: 'Create new snapshot for a collection',
  operationId: 'create_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection for which to create a snapshot',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: SnapshotDescriptionSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameSnapshotsSnapshotNameRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/snapshots/{snapshot_name}',
  tags: ['Snapshots'],
  summary: 'Download collection snapshot',
  description: 'Download specified snapshot from a collection as a file',
  operationId: 'get_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshot_name: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_name',
            in: 'path',
            description: 'Name of the snapshot to download',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameSnapshotsSnapshotNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_name}/snapshots/{snapshot_name}',
  tags: ['Snapshots'],
  summary: 'Delete collection snapshot',
  description: 'Delete snapshot for a collection',
  operationId: 'delete_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection for which to delete a snapshot',
            required: true,
            schema: { type: 'string' },
          },
        }),
      snapshot_name: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_name',
            in: 'path',
            description: 'Name of the snapshot to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getSnapshotsRoute = createRoute({
  method: 'get',
  path: '/snapshots',
  tags: ['Snapshots'],
  summary: 'List of storage snapshots',
  description: 'Get list of snapshots of the whole storage',
  operationId: 'list_full_snapshots',
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.array(SnapshotDescriptionSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postSnapshotsRoute = createRoute({
  method: 'post',
  path: '/snapshots',
  tags: ['Snapshots'],
  summary: 'Create storage snapshot',
  description: 'Create new snapshot of the whole storage',
  operationId: 'create_full_snapshot',
  request: {
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: SnapshotDescriptionSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getSnapshotsSnapshotNameRoute = createRoute({
  method: 'get',
  path: '/snapshots/{snapshot_name}',
  tags: ['Snapshots'],
  summary: 'Download storage snapshot',
  description: 'Download specified snapshot of the whole storage as a file',
  operationId: 'get_full_snapshot',
  request: {
    params: z.object({
      snapshot_name: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_name',
            in: 'path',
            description: 'Name of the snapshot to download',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteSnapshotsSnapshotNameRoute = createRoute({
  method: 'delete',
  path: '/snapshots/{snapshot_name}',
  tags: ['Snapshots'],
  summary: 'Delete storage snapshot',
  description: 'Delete snapshot of the whole storage',
  operationId: 'delete_full_snapshot',
  request: {
    params: z.object({
      snapshot_name: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_name',
            in: 'path',
            description: 'Name of the full snapshot to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameShardsShardIdSnapshotRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshot',
  tags: ['Snapshots'],
  summary: 'Download shard snapshot',
  description: 'Stream the current state of a shard as a snapshot file',
  operationId: 'stream_shard_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameShardsShardIdSnapshotsUploadRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshots/upload',
  tags: ['Snapshots'],
  summary: 'Recover shard from an uploaded snapshot',
  description:
    'Recover shard of a local collection from an uploaded snapshot. This will overwrite any data, stored on this node, for the collection shard.',
  operationId: 'recover_shard_from_uploaded_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard to recover',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      priority: SnapshotPrioritySchema.openapi({
        param: {
          name: 'priority',
          in: 'query',
          description: 'Defines source of truth for snapshot recovery',
          required: false,
          schema: { $ref: '#/components/schemas/SnapshotPriority' },
        },
      }).exactOptional(),
      checksum: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'checksum',
            in: 'query',
            description: 'Optional SHA256 checksum to verify snapshot integrity before recovery.',
            required: false,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Snapshot to recover from',
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              snapshot: z.file().exactOptional().openapi({ type: 'string', format: 'binary' }),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNameShardsShardIdSnapshotsRecoverRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshots/recover',
  tags: ['Snapshots'],
  summary: 'Recover from a snapshot',
  description:
    'Recover shard of a local collection data from a snapshot. This will overwrite any data, stored in this shard, for the collection.',
  operationId: 'recover_shard_from_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard to recover',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
    body: {
      description: 'Snapshot to recover from',
      content: { 'application/json': { schema: ShardSnapshotRecoverSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameShardsShardIdSnapshotsRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshots',
  tags: ['Snapshots'],
  summary: 'List shards snapshots for a collection',
  description: 'Get list of snapshots for a shard of a collection',
  operationId: 'list_shard_snapshots',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.array(SnapshotDescriptionSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameShardsShardIdSnapshotsRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshots',
  tags: ['Snapshots'],
  summary: 'Create shard snapshot',
  description: 'Create new snapshot of a shard for a collection',
  operationId: 'create_shard_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection for which to create a snapshot',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard',
            required: true,
            schema: { type: 'integer' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: SnapshotDescriptionSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name}',
  tags: ['Snapshots'],
  summary: 'Download collection snapshot',
  description: 'Download specified snapshot of a shard from a collection as a file',
  operationId: 'get_shard_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      snapshot_name: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_name',
            in: 'path',
            description: 'Name of the snapshot to download',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Snapshot file',
      content: {
        'application/octet-stream': {
          schema: z.file().openapi({ type: 'string', format: 'binary' }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const deleteCollectionsCollectionNameShardsShardIdSnapshotsSnapshotNameRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_name}/shards/{shard_id}/snapshots/{snapshot_name}',
  tags: ['Snapshots'],
  summary: 'Delete shard snapshot',
  description: 'Delete snapshot of a shard for a collection',
  operationId: 'delete_shard_snapshot',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection for which to delete a snapshot',
            required: true,
            schema: { type: 'string' },
          },
        }),
      shard_id: z
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
            name: 'shard_id',
            in: 'path',
            description: 'Id of the shard',
            required: true,
            schema: { type: 'integer' },
          },
        }),
      snapshot_name: z
        .string()
        .openapi({
          param: {
            name: 'snapshot_name',
            in: 'path',
            description: 'Name of the snapshot to delete',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description:
              'If true, wait for changes to actually happen. If false - let changes happen in background. Default is true.',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.boolean().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    202: {
      description: 'operation is accepted',
      content: {
        'application/json': {
          schema: z
            .object({
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request' }),
              status: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const getCollectionsCollectionNamePointsIdRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_name}/points/{id}',
  tags: ['Points'],
  summary: 'Get point',
  description: 'Retrieve full information of single point by id',
  operationId: 'get_point',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to retrieve from',
            required: true,
            schema: { type: 'string' },
          },
        }),
      id: ((schema) =>
        z.union([
          z.preprocess((val) => {
            if (typeof val !== 'string' || !/^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val))
              return val
            if (/^-?\d+$/.test(val)) return BigInt(val)
            const num = Number(val)
            return Number.isSafeInteger(num) ? BigInt(num) : val
          }, schema),
          schema,
        ]))(ExtendedPointIdSchema).openapi({
        param: {
          name: 'id',
          in: 'path',
          description: 'Id of the point',
          required: true,
          schema: { $ref: '#/components/schemas/ExtendedPointId' },
        },
      }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: RecordSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNamePointsRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/points',
  tags: ['Points'],
  summary: 'Upsert points',
  description:
    'Perform insert + updates on points. If point with given ID already exists - it will be overwritten.',
  operationId: 'upsert_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to update from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Operation to perform on points',
      content: { 'application/json': { schema: PointInsertOperationsSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points',
  tags: ['Points'],
  summary: 'Get points',
  description: 'Retrieve multiple points by specified IDs',
  operationId: 'get_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to retrieve from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'List of points to retrieve',
      content: { 'application/json': { schema: PointRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.array(RecordSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsDeleteRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/delete',
  tags: ['Points'],
  summary: 'Delete points',
  description: 'Delete points',
  operationId: 'delete_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to delete from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Operation to perform on points',
      content: { 'application/json': { schema: PointsSelectorSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNamePointsVectorsRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/points/vectors',
  tags: ['Points'],
  summary: 'Update vectors',
  description: 'Update specified named vectors on points, keep unspecified vectors intact.',
  operationId: 'update_vectors',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to update from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Update named vectors on points',
      content: { 'application/json': { schema: UpdateVectorsSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsVectorsDeleteRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/vectors/delete',
  tags: ['Points'],
  summary: 'Delete vectors',
  description: 'Delete named vectors from the given points.',
  operationId: 'delete_vectors',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to delete from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Delete named vectors from points',
      content: { 'application/json': { schema: DeleteVectorsSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const putCollectionsCollectionNamePointsPayloadRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_name}/points/payload',
  tags: ['Points'],
  summary: 'Overwrite payload',
  description: 'Replace full payload of points with new one',
  operationId: 'overwrite_payload',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to set from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Payload and points selector',
      content: { 'application/json': { schema: SetPayloadSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsPayloadRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/payload',
  tags: ['Points'],
  summary: 'Set payload',
  description: 'Set payload values for points',
  operationId: 'set_payload',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to set from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Set payload on points',
      content: { 'application/json': { schema: SetPayloadSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsPayloadDeleteRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/payload/delete',
  tags: ['Points'],
  summary: 'Delete payload',
  description: 'Delete specified key payload for points',
  operationId: 'delete_payload',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to delete from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'delete payload on points',
      content: { 'application/json': { schema: DeletePayloadSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsPayloadClearRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/payload/clear',
  tags: ['Points'],
  summary: 'Clear payload',
  description: 'Remove all payload for specified points',
  operationId: 'clear_payload',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to clear payload from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'clear payload on points',
      content: { 'application/json': { schema: PointsSelectorSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: UpdateResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsBatchRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/batch',
  tags: ['Points'],
  summary: 'Batch update points',
  description: 'Apply a series of update operations for points, vectors and payloads',
  operationId: 'batch_update',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to apply operations on',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      wait: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'wait',
            in: 'query',
            description: 'If true, wait for changes to actually happen',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ordering: WriteOrderingSchema.openapi({
        param: {
          name: 'ordering',
          in: 'query',
          description: 'define ordering guarantees for the operation',
          required: false,
          schema: { $ref: '#/components/schemas/WriteOrdering' },
        },
      }).exactOptional(),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'Timeout for the operation',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'update operations',
      content: { 'application/json': { schema: UpdateOperationsSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.array(UpdateResultSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsScrollRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/scroll',
  tags: ['Points'],
  summary: 'Scroll points',
  description: 'Scroll request - paginate over all points which matches given filtering condition',
  operationId: 'scroll_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to retrieve from',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Pagination and filter parameters',
      content: { 'application/json': { schema: ScrollRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: ScrollResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsCountRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/count',
  tags: ['Points'],
  summary: 'Count points',
  description: 'Count points which matches given filtering condition',
  operationId: 'count_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to count in',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Request counts of points which matches given filtering condition',
      content: { 'application/json': { schema: CountRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: CountResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNameFacetRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/facet',
  tags: ['Points'],
  summary: 'Facet a payload key with a given filter.',
  description: 'Count points that satisfy the given filter for each unique value of a payload key.',
  operationId: 'facet',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to facet in',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Request counts of points for each unique value of a payload key',
      content: { 'application/json': { schema: FacetRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: FacetResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsQueryRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/query',
  tags: ['Search'],
  summary: 'Query points',
  description:
    'Universally query points. This endpoint covers all capabilities of search, recommend, discover, filters. But also enables hybrid and multi-stage queries.',
  operationId: 'query_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Describes the query to make to the collection',
      content: { 'application/json': { schema: QueryRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: QueryResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsQueryBatchRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/query/batch',
  tags: ['Search'],
  summary: 'Query points in batch',
  description:
    'Universally query points in batch. This endpoint covers all capabilities of search, recommend, discover, filters. But also enables hybrid and multi-stage queries.',
  operationId: 'query_batch_points',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Describes the queries to make to the collection',
      content: { 'application/json': { schema: QueryRequestBatchSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: z.array(QueryResponseSchema).exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsQueryGroupsRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/query/groups',
  tags: ['Search'],
  summary: 'Query points, grouped by a given payload field',
  description: 'Universally query points, grouped by a given payload field',
  operationId: 'query_points_groups',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to query',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Describes the query to make to the collection',
      content: { 'application/json': { schema: QueryGroupsRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: GroupsResultSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsSearchMatrixPairsRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/search/matrix/pairs',
  tags: ['Search'],
  summary: 'Search points matrix distance pairs',
  description: 'Compute distance matrix for sampled points with a pair based output format',
  operationId: 'search_matrix_pairs',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to search in',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Search matrix request with optional filtering',
      content: { 'application/json': { schema: SearchMatrixRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: SearchMatrixPairsResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})

export const postCollectionsCollectionNamePointsSearchMatrixOffsetsRoute = createRoute({
  method: 'post',
  path: '/collections/{collection_name}/points/search/matrix/offsets',
  tags: ['Search'],
  summary: 'Search points matrix distance offsets',
  description: 'Compute distance matrix for sampled points with an offset based output format',
  operationId: 'search_matrix_offsets',
  request: {
    params: z.object({
      collection_name: z
        .string()
        .openapi({
          param: {
            name: 'collection_name',
            in: 'path',
            description: 'Name of the collection to search in',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    query: z.object({
      consistency: ((schema) =>
        z.union([
          z.preprocess(
            (val) =>
              typeof val === 'string' &&
              /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
              (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                ? Number(val)
                : val,
            schema,
          ),
          schema,
        ]))(ReadConsistencySchema)
        .exactOptional()
        .openapi({
          param: {
            name: 'consistency',
            in: 'query',
            description: 'Define read consistency guarantees for the operation',
            required: false,
            schema: { $ref: '#/components/schemas/ReadConsistency' },
          },
        }),
      timeout: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'timeout',
            in: 'query',
            description: 'If set, overrides global timeout for this request. Unit is seconds.',
            required: false,
            schema: { type: 'integer', minimum: 1 },
          },
        }),
    }),
    body: {
      description: 'Search matrix request with optional filtering',
      content: { 'application/json': { schema: SearchMatrixRequestSchema } },
    },
  },
  responses: {
    200: {
      description: 'successful operation',
      content: {
        'application/json': {
          schema: z
            .object({
              usage: z
                .union([UsageSchema, z.any().nullable()])
                .nullable()
                .default(null)
                .exactOptional(),
              time: z
                .float32()
                .exactOptional()
                .openapi({ description: 'Time spent to process this request', example: 0.002 }),
              status: z.string().exactOptional().openapi({ example: 'ok' }),
              result: SearchMatrixOffsetsResponseSchema.exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
    default: {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
    '4XX': {
      description: 'error',
      content: { 'application/json': { schema: ErrorResponseSchema } },
    },
  },
})
