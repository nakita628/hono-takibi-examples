import { createRoute, z } from '@hono/zod-openapi'

const IndexStatsSchema = z
  .object({
    numberOfDocuments: z.int().min(0).openapi({ description: 'Number of documents in the index' }),
    rawDocumentDbSize: z
      .int()
      .min(0)
      .openapi({ description: 'Size of the documents database, in bytes.' }),
    avgDocumentSize: z
      .int()
      .min(0)
      .openapi({ description: 'Average size of a document in the documents database.' }),
    isIndexing: z
      .boolean()
      .openapi({ description: 'Whether or not the index is currently ingesting document' }),
    numberOfEmbeddings: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of embeddings in the index' }),
    numberOfEmbeddedDocuments: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Number of embedded documents in the index' }),
    fieldDistribution: z
      .record(z.string(), z.int().min(0))
      .openapi({
        description:
          'Association of every field name with the number of times it occurs in the documents.',
      }),
  })
  .openapi({
    description: 'Stats of an `Index`, as known to the `stats` route.',
    required: [
      'numberOfDocuments',
      'rawDocumentDbSize',
      'avgDocumentSize',
      'isIndexing',
      'fieldDistribution',
    ],
  })
  .openapi('IndexStats')

type StatsType = {
  databaseSize: number
  usedDatabaseSize: number
  lastUpdate?: string | null
  indexes: { [key: string]: z.infer<typeof IndexStatsSchema> }
}

const ActionSchema = z
  .enum([
    '*',
    'search',
    'documents.*',
    'documents.add',
    'documents.get',
    'documents.delete',
    'indexes.*',
    'indexes.create',
    'indexes.get',
    'indexes.update',
    'indexes.delete',
    'indexes.swap',
    'tasks.*',
    'tasks.cancel',
    'tasks.delete',
    'tasks.get',
    'settings.*',
    'settings.get',
    'settings.update',
    'stats.*',
    'stats.get',
    'metrics.*',
    'metrics.get',
    'dumps.*',
    'dumps.create',
    'snapshots.*',
    'snapshots.create',
    'version',
    'keys.create',
    'keys.get',
    'keys.update',
    'keys.delete',
    'experimental.get',
    'experimental.update',
    'network.get',
    'network.update',
    'chatCompletions',
    'chats.*',
    'chats.get',
    'chats.delete',
    'chatsSettings.*',
    'chatsSettings.get',
    'chatsSettings.update',
  ])
  .openapi('Action')

const U32Schema = z.int().min(0).openapi('U32')

const ProgressStepViewSchema = z
  .object({ currentStep: z.string(), finished: z.int().min(0), total: z.int().min(0) })
  .openapi({ required: ['currentStep', 'finished', 'total'] })
  .openapi('ProgressStepView')

const ProgressViewSchema = z
  .object({ steps: z.array(ProgressStepViewSchema), percentage: z.float32() })
  .openapi({ required: ['steps', 'percentage'] })
  .openapi('ProgressView')

const AttributePatternsSchema = z
  .object({
    patterns: z.array(z.string()).openapi({ example: ['title', 'overview_*', 'release_date'] }),
  })
  .openapi({ required: ['patterns'] })
  .openapi('AttributePatterns')

const FilterFeaturesSchema = z
  .strictObject({ equality: z.boolean().exactOptional(), comparison: z.boolean().exactOptional() })
  .openapi({ required: [] })
  .openapi('FilterFeatures')

const FilterableAttributesFeaturesSchema = z
  .strictObject({
    facetSearch: z.boolean().exactOptional(),
    filter: FilterFeaturesSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('FilterableAttributesFeatures')

const FilterableAttributesPatternsSchema = z
  .strictObject({
    attributePatterns: AttributePatternsSchema,
    features: FilterableAttributesFeaturesSchema.exactOptional(),
  })
  .openapi({ required: ['attributePatterns'] })
  .openapi('FilterableAttributesPatterns')

const FilterableAttributesRuleSchema = z
  .xor([z.string(), FilterableAttributesPatternsSchema])
  .openapi('FilterableAttributesRule')

const MinWordSizeTyposSettingSchema = z
  .strictObject({
    oneTypo: z.int().min(0).nullable().exactOptional().openapi({ example: 5 }),
    twoTypos: z.int().min(0).nullable().exactOptional().openapi({ example: 9 }),
  })
  .openapi({ required: [] })
  .openapi('MinWordSizeTyposSetting')

const TypoSettingsSchema = z
  .strictObject({
    enabled: z.boolean().nullable().exactOptional().openapi({ example: true }),
    minWordSizeForTypos: z
      .xor([z.null().nullable(), MinWordSizeTyposSettingSchema])
      .exactOptional(),
    disableOnWords: z
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
      .openapi({ example: ['iPhone', 'phone'] }),
    disableOnAttributes: z
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
      .openapi({ example: ['uuid', 'url'] }),
    disableOnNumbers: z.boolean().nullable().exactOptional().openapi({ example: true }),
  })
  .openapi({ required: [] })
  .openapi('TypoSettings')

const FacetValuesSortSchema = z.enum(['alpha', 'count']).openapi('FacetValuesSort')

const FacetingSettingsSchema = z
  .strictObject({
    maxValuesPerFacet: z.int().min(0).nullable().exactOptional().openapi({ example: 10 }),
    sortFacetValuesBy: z
      .record(z.string(), FacetValuesSortSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: { genre: 'count' } }),
  })
  .openapi({ required: [] })
  .openapi('FacetingSettings')

const PaginationSettingsSchema = z
  .strictObject({
    maxTotalHits: z.int().min(0).nullable().exactOptional().openapi({ example: 250 }),
  })
  .openapi({ required: [] })
  .openapi('PaginationSettings')

const EmbedderSourceSchema = z
  .enum(['openAi', 'huggingFace', 'ollama', 'userProvided', 'rest', 'composite'])
  .openapi('EmbedderSource')

const OverridePoolingSchema = z
  .enum(['useModel', 'forceCls', 'forceMean'])
  .openapi('OverridePooling')

const SubEmbeddingSettingsSchema = z
  .strictObject({
    source: z
      .xor([
        z.null().nullable(),
        EmbedderSourceSchema.openapi({
          description:
            'The source used to provide the embeddings.\n\nWhich embedder parameters are available and mandatory is determined by the value of this setting.\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings.\n\n# Defaults\n\n- Defaults to `openAi`',
        }),
      ])
      .exactOptional(),
    model: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The name of the model to use.\n\n# Mandatory\n\n- This parameter is mandatory for source `ollama`\n\n# Availability\n\n- This parameter is available for sources `openAi`, `huggingFace`, `ollama`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings.\n\n# Defaults\n\n- For source `openAi`, defaults to `text-embedding-3-small`\n- For source `huggingFace`, defaults to `BAAI/bge-base-en-v1.5`',
      }),
    revision: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The revision (commit SHA1) of the model to use.\n\nIf unspecified, Meilisearch picks the latest revision of the model.\n\n# Availability\n\n- This parameter is available for source `huggingFace`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings\n\n# Defaults\n\n- When `model` is set to default, defaults to `617ca489d9e86b49b8167676d8220688b99db36e`\n- Otherwise, defaults to `null`',
      }),
    pooling: z
      .xor([
        z.null().nullable(),
        OverridePoolingSchema.openapi({
          description:
            'The pooling method to use.\n\n# Availability\n\n- This parameter is available for source `huggingFace`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings\n\n# Defaults\n\n- Defaults to `useModel`\n\n# Compatibility Note\n\n- Embedders created before this parameter was available default to `forceMean` to preserve the existing behavior.',
        }),
      ])
      .exactOptional(),
    apiKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The API key to pass to the remote embedder while making requests.\n\n# Availability\n\n- This parameter is available for source `openAi`, `ollama`, `rest`\n\n# 🔄 Reindexing\n\n- 🌱 Changing the value of this parameter never regenerates embeddings\n\n# Defaults\n\n- For source `openAi`, the key is read from `OPENAI_API_KEY`, then `MEILI_OPENAI_API_KEY`.\n- For other sources, no bearer token is sent if this parameter is not set.\n\n# Note\n\n- This setting is partially hidden when returned by the settings',
      }),
    dimensions: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The expected dimensions of the embeddings produced by this embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `userProvided`\n\n# Availability\n\n- This parameter is available for source `openAi`, `ollama`, `rest`, `userProvided`\n\n# 🔄 Reindexing\n\n- 🏗️ When the source is `openAi`, changing the value of this parameter always regenerates embeddings\n- 🌱 For other sources, changing the value of this parameter never regenerates embeddings\n\n# Defaults\n\n- For source `openAi`, the dimensions is the maximum allowed by the model.\n- For sources `ollama` and `rest`, the dimensions are inferred by embedding a sample text.',
      }),
    documentTemplate: z
      .boolean()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A liquid template used to render documents to a text that can be embedded.\n\nMeillisearch interpolates the template for each document and sends the resulting text to the embedder.\nThe embedder then generates document vectors based on this text.\n\n# Availability\n\n- This parameter is available for source `openAi`, `huggingFace`, `ollama` and `rest\n\n# 🔄 Reindexing\n\n- 🏗️ When modified, embeddings are regenerated for documents whose rendering through the template produces a different text.',
      }),
    documentTemplateMaxBytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Rendered texts are truncated to this size.\n\n# Availability\n\n- This parameter is available for source `openAi`, `huggingFace`, `ollama` and `rest`\n\n# 🔄 Reindexing\n\n- 🏗️ When increased, embeddings are regenerated for documents whose rendering through the template produces a different text.\n- 🌱 When decreased, embeddings are never regenerated\n\n# Default\n\n- Defaults to 400',
      }),
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'URL to reach the remote embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `rest`\n\n# Availability\n\n- This parameter is available for source `openAi`, `ollama` and `rest`\n\n# 🔄 Reindexing\n\n- 🌱 When modified for source `openAi`, embeddings are never regenerated\n- 🏗️ When modified for sources `ollama` and `rest`, embeddings are always regenerated',
      }),
    request: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Template request to send to the remote embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `rest`\n\n# Availability\n\n- This parameter is available for source `rest`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings',
      }),
    response: z
      .any()
      .exactOptional()
      .openapi({
        description:
          'Template response indicating how to find the embeddings in the response from the remote embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `rest`\n\n# Availability\n\n- This parameter is available for source `rest`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings',
      }),
    headers: z
      .record(z.string(), z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Additional headers to send to the remote embedder.\n\n# Availability\n\n- This parameter is available for source `rest`\n\n# 🔄 Reindexing\n\n- 🌱 Changing the value of this parameter never regenerates embeddings',
      }),
  })
  .openapi({ required: [] })
  .openapi('SubEmbeddingSettings')

const DistributionShiftSchema = z
  .object({
    current_mean: z
      .float32()
      .openapi({
        description:
          'Value where the results are "packed".\n\nSimilarity scores are translated so that they are packed around 0.5 instead',
      }),
    current_sigma: z
      .float32()
      .openapi({
        description:
          'standard deviation of a similarity score.\n\nSet below 0.4 to make the results less packed around the mean, and above 0.4 to make them more packed.',
      }),
  })
  .openapi({
    description:
      'Describes the mean and sigma of distribution of embedding similarity in the embedding space.\n\nThe intended use is to make the similarity score more comparable to the regular ranking score.\nThis allows to correct effects where results are too "packed" around a certain value.',
    required: ['current_mean', 'current_sigma'],
  })
  .openapi('DistributionShift')

const SettingEmbeddingSettingsSchema = z
  .object({
    inner: z
      .xor([
        z.null().nullable(),
        z
          .strictObject({
            source: z
              .xor([
                z.null().nullable(),
                EmbedderSourceSchema.openapi({
                  description:
                    'The source used to provide the embeddings.\n\nWhich embedder parameters are available and mandatory is determined by the value of this setting.\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings.\n\n# Defaults\n\n- Defaults to `openAi`',
                }),
              ])
              .exactOptional(),
            model: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The name of the model to use.\n\n# Mandatory\n\n- This parameter is mandatory for source `ollama`\n\n# Availability\n\n- This parameter is available for sources `openAi`, `huggingFace`, `ollama`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings.\n\n# Defaults\n\n- For source `openAi`, defaults to `text-embedding-3-small`\n- For source `huggingFace`, defaults to `BAAI/bge-base-en-v1.5`',
              }),
            revision: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The revision (commit SHA1) of the model to use.\n\nIf unspecified, Meilisearch picks the latest revision of the model.\n\n# Availability\n\n- This parameter is available for source `huggingFace`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings\n\n# Defaults\n\n- When `model` is set to default, defaults to `617ca489d9e86b49b8167676d8220688b99db36e`\n- Otherwise, defaults to `null`',
              }),
            pooling: z
              .xor([
                z.null().nullable(),
                OverridePoolingSchema.openapi({
                  description:
                    'The pooling method to use.\n\n# Availability\n\n- This parameter is available for source `huggingFace`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings\n\n# Defaults\n\n- Defaults to `useModel`\n\n# Compatibility Note\n\n- Embedders created before this parameter was available default to `forceMean` to preserve the existing behavior.',
                }),
              ])
              .exactOptional(),
            apiKey: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The API key to pass to the remote embedder while making requests.\n\n# Availability\n\n- This parameter is available for source `openAi`, `ollama`, `rest`\n\n# 🔄 Reindexing\n\n- 🌱 Changing the value of this parameter never regenerates embeddings\n\n# Defaults\n\n- For source `openAi`, the key is read from `OPENAI_API_KEY`, then `MEILI_OPENAI_API_KEY`.\n- For other sources, no bearer token is sent if this parameter is not set.\n\n# Note\n\n- This setting is partially hidden when returned by the settings',
              }),
            dimensions: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'The expected dimensions of the embeddings produced by this embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `userProvided`\n\n# Availability\n\n- This parameter is available for source `openAi`, `ollama`, `rest`, `userProvided`\n\n# 🔄 Reindexing\n\n- 🏗️ When the source is `openAi`, changing the value of this parameter always regenerates embeddings\n- 🌱 For other sources, changing the value of this parameter never regenerates embeddings\n\n# Defaults\n\n- For source `openAi`, the dimensions is the maximum allowed by the model.\n- For sources `ollama` and `rest`, the dimensions are inferred by embedding a sample text.',
              }),
            binaryQuantized: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Whether to binary quantize the embeddings of this embedder.\n\nBinary quantized embeddings are smaller than regular embeddings, which improves\ndisk usage and retrieval speed, at the cost of relevancy.\n\n# Availability\n\n- This parameter is available for all embedders\n\n# 🔄 Reindexing\n\n- 🏗️ When set to `true`, embeddings are not regenerated, but they are binary quantized, which takes time.\n\n# Defaults\n\n- Defaults to `false`\n\n# Note\n\nAs binary quantization is a destructive operation, it is not possible to disable again this setting after\nfirst enabling it. If you are unsure of whether the performance-relevancy tradeoff is right for you,\nwe recommend to use this parameter on a test index first.',
              }),
            documentTemplate: z
              .boolean()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'A liquid template used to render documents to a text that can be embedded.\n\nMeillisearch interpolates the template for each document and sends the resulting text to the embedder.\nThe embedder then generates document vectors based on this text.\n\n# Availability\n\n- This parameter is available for source `openAi`, `huggingFace`, `ollama` and `rest\n\n# 🔄 Reindexing\n\n- 🏗️ When modified, embeddings are regenerated for documents whose rendering through the template produces a different text.',
              }),
            documentTemplateMaxBytes: z
              .int()
              .min(0)
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Rendered texts are truncated to this size.\n\n# Availability\n\n- This parameter is available for source `openAi`, `huggingFace`, `ollama` and `rest`\n\n# 🔄 Reindexing\n\n- 🏗️ When increased, embeddings are regenerated for documents whose rendering through the template produces a different text.\n- 🌱 When decreased, embeddings are never regenerated\n\n# Default\n\n- Defaults to 400',
              }),
            url: z
              .string()
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'URL to reach the remote embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `rest`\n\n# Availability\n\n- This parameter is available for source `openAi`, `ollama` and `rest`\n\n# 🔄 Reindexing\n\n- 🌱 When modified for source `openAi`, embeddings are never regenerated\n- 🏗️ When modified for sources `ollama` and `rest`, embeddings are always regenerated',
              }),
            request: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'Template request to send to the remote embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `rest`\n\n# Availability\n\n- This parameter is available for source `rest`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings',
              }),
            response: z
              .any()
              .exactOptional()
              .openapi({
                description:
                  'Template response indicating how to find the embeddings in the response from the remote embedder.\n\n# Mandatory\n\n- This parameter is mandatory for source `rest`\n\n# Availability\n\n- This parameter is available for source `rest`\n\n# 🔄 Reindexing\n\n- 🏗️ Changing the value of this parameter always regenerates embeddings',
              }),
            headers: z
              .record(z.string(), z.string())
              .nullable()
              .exactOptional()
              .openapi({
                description:
                  'Additional headers to send to the remote embedder.\n\n# Availability\n\n- This parameter is available for source `rest`\n\n# 🔄 Reindexing\n\n- 🌱 Changing the value of this parameter never regenerates embeddings',
              }),
            searchEmbedder: z
              .xor([z.null().nullable(), SubEmbeddingSettingsSchema])
              .exactOptional(),
            indexingEmbedder: z
              .xor([z.null().nullable(), SubEmbeddingSettingsSchema])
              .exactOptional(),
            distribution: z
              .xor([
                z.null().nullable(),
                DistributionShiftSchema.openapi({
                  description:
                    'Affine transformation applied to the semantic score to make it more comparable to the ranking score.\n\n# Availability\n\n- This parameter is available for all embedders\n\n# 🔄 Reindexing\n\n- 🌱 Changing the value of this parameter never regenerates embeddings',
                }),
              ])
              .exactOptional(),
          })
          .openapi({ required: [] }),
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      '"Technical" type that is required due to utoipa.\n\nWe did not find a way to implement [`utoipa::ToSchema`] for the [`Setting`] enum,\nbut most types can use the `value_type` macro parameter to workaround that issue.\n\nHowever that type is used in the settings route, including through the macro that auto-generate\nall the settings route, so we can\'t remap the `value_type`.',
    required: [],
  })
  .openapi('SettingEmbeddingSettings')

const LocaleSchema = z
  .enum([
    'af',
    'ak',
    'am',
    'ar',
    'az',
    'be',
    'bn',
    'bg',
    'ca',
    'cs',
    'da',
    'de',
    'el',
    'en',
    'eo',
    'et',
    'fi',
    'fr',
    'gu',
    'he',
    'hi',
    'hr',
    'hu',
    'hy',
    'id',
    'it',
    'jv',
    'ja',
    'kn',
    'ka',
    'km',
    'ko',
    'la',
    'lv',
    'lt',
    'ml',
    'mr',
    'mk',
    'my',
    'ne',
    'nl',
    'nb',
    'or',
    'pa',
    'fa',
    'pl',
    'pt',
    'ro',
    'ru',
    'si',
    'sk',
    'sl',
    'sn',
    'es',
    'sr',
    'sv',
    'ta',
    'te',
    'tl',
    'th',
    'tk',
    'tr',
    'uk',
    'ur',
    'uz',
    'vi',
    'yi',
    'zh',
    'zu',
    'afr',
    'aka',
    'amh',
    'ara',
    'aze',
    'bel',
    'ben',
    'bul',
    'cat',
    'ces',
    'dan',
    'deu',
    'ell',
    'eng',
    'epo',
    'est',
    'fin',
    'fra',
    'guj',
    'heb',
    'hin',
    'hrv',
    'hun',
    'hye',
    'ind',
    'ita',
    'jav',
    'jpn',
    'kan',
    'kat',
    'khm',
    'kor',
    'lat',
    'lav',
    'lit',
    'mal',
    'mar',
    'mkd',
    'mya',
    'nep',
    'nld',
    'nob',
    'ori',
    'pan',
    'pes',
    'pol',
    'por',
    'ron',
    'rus',
    'sin',
    'slk',
    'slv',
    'sna',
    'spa',
    'srp',
    'swe',
    'tam',
    'tel',
    'tgl',
    'tha',
    'tuk',
    'tur',
    'ukr',
    'urd',
    'uzb',
    'vie',
    'yid',
    'zho',
    'zul',
    'cmn',
  ])
  .openapi('Locale')

const LocalizedAttributesRuleViewSchema = z
  .object({ attributePatterns: AttributePatternsSchema, locales: z.array(LocaleSchema) })
  .openapi({ required: ['attributePatterns', 'locales'] })
  .openapi('LocalizedAttributesRuleView')

const PrefixSearchSettingsSchema = z
  .enum(['indexingTime', 'disabled'])
  .openapi('PrefixSearchSettings')

const HybridQuerySchema = z
  .object({ semanticRatio: z.float32().exactOptional(), embedder: z.string() })
  .openapi({ required: ['embedder'] })
  .openapi('HybridQuery')

const MatchingStrategySchema = z
  .enum(['last', 'all', 'frequency'])
  .openapi({
    description:
      'This is unfortunately a duplication of the struct in <meilisearch/src/search/mod.rs>.\nThe reason why it is duplicated is because milli cannot depend on meilisearch. It would be cyclic imports.',
  })
  .openapi('MatchingStrategy')

const RankingScoreThresholdSchema = z.float64().openapi('RankingScoreThreshold')

const ChatSearchParamsSchema = z
  .strictObject({
    hybrid: z.xor([z.null().nullable(), HybridQuerySchema]).exactOptional(),
    limit: z.int().min(0).nullable().exactOptional(),
    sort: z.array(z.string()).nullable().exactOptional(),
    distinct: z.string().nullable().exactOptional(),
    matchingStrategy: z.xor([z.null().nullable(), MatchingStrategySchema]).exactOptional(),
    attributesToSearchOn: z.array(z.string()).nullable().exactOptional(),
    rankingScoreThreshold: z
      .xor([z.null().nullable(), RankingScoreThresholdSchema])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChatSearchParams')

const ChatSettingsSchema = z
  .strictObject({
    description: z.string().nullable().exactOptional(),
    documentTemplate: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'A liquid template used to render documents to a text that can be embedded.\n\nMeillisearch interpolates the template for each document and sends the resulting text to the embedder.\nThe embedder then generates document vectors based on this text.',
      }),
    documentTemplateMaxBytes: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Rendered texts are truncated to this size. Defaults to 400.' }),
    searchParameters: z
      .xor([
        z.null().nullable(),
        ChatSearchParamsSchema.openapi({
          description: 'The search parameters to use for the LLM.',
        }),
      ])
      .exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('ChatSettings')

const SettingsUncheckedSchema = z
  .strictObject({
    displayedAttributes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Fields displayed in the returned documents.',
        example: ['id', 'title', 'description', 'url'],
      }),
    searchableAttributes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Fields in which to search for matching query words sorted by order of importance.',
        example: ['title', 'description'],
      }),
    filterableAttributes: z
      .array(FilterableAttributesRuleSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Attributes to use for faceting and filtering. See [Filtering and Faceted Search](https://www.meilisearch.com/docs/learn/filtering_and_sorting/search_with_facet_filters).',
        example: ['release_date', 'genre'],
      }),
    sortableAttributes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Attributes to use when sorting search results.',
        example: ['release_date'],
      }),
    rankingRules: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of ranking rules sorted by order of importance. The order is customizable.\n[A list of ordered built-in ranking rules](https://www.meilisearch.com/docs/learn/relevancy/relevancy).',
        example: ['words', 'typo', 'proximity', 'attribute', 'exactness'],
      }),
    stopWords: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of words ignored when present in search queries.',
        example: ['the', 'a', 'them', 'their'],
      }),
    nonSeparatorTokens: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of characters not delimiting where one term begins and ends.',
        example: [' ', '\n'],
      }),
    separatorTokens: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of characters delimiting where one term begins and ends.',
        example: ['S'],
      }),
    dictionary: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of strings Meilisearch should parse as a single term.',
        example: ['iPhone pro'],
      }),
    synonyms: z
      .record(z.string(), z.array(z.string()))
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of associated words treated similarly. A word associated to an array of word as synonyms.',
        example: { he: ['she', 'they', 'them'], phone: ['iPhone', 'android'] },
      }),
    distinctAttribute: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Search returns documents with distinct (different) values of the given field.',
        example: 'sku',
      }),
    proximityPrecision: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Precision level when calculating the proximity ranking rule.',
        example: 'byAttribute',
      }),
    typoTolerance: z
      .xor([
        z.null().nullable(),
        TypoSettingsSchema.openapi({ description: 'Customize typo tolerance feature.' }),
      ])
      .exactOptional(),
    faceting: z
      .xor([
        z.null().nullable(),
        FacetingSettingsSchema.openapi({ description: 'Faceting settings.' }),
      ])
      .exactOptional(),
    pagination: z
      .xor([
        z.null().nullable(),
        PaginationSettingsSchema.openapi({ description: 'Pagination settings.' }),
      ])
      .exactOptional(),
    embedders: z
      .record(z.string(), SettingEmbeddingSettingsSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Embedder required for performing semantic search queries.' }),
    searchCutoffMs: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum duration of a search query.', example: 50 }),
    localizedAttributes: z
      .array(LocalizedAttributesRuleViewSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: 50 }),
    facetSearch: z.boolean().nullable().exactOptional().openapi({ example: true }),
    prefixSearch: z.xor([z.null().nullable(), PrefixSearchSettingsSchema]).exactOptional(),
    chat: z
      .xor([
        z.null().nullable(),
        ChatSettingsSchema.openapi({ description: 'Customize the chat prompting.' }),
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Holds all the settings for an index. `T` can either be `Checked` if they represents settings\nwhose validity is guaranteed, or `Unchecked` if they need to be validated. In the later case, a\ncall to `check` will return a `Settings<Checked>` from a `Settings<Unchecked>`.',
    required: [],
  })
  .openapi('SettingsUnchecked')

const IndexSwapSchema = z
  .object({
    indexes: z.array(z.unknown()).superRefine((arr, ctx) => {
      const Prefix = [z.string(), z.string()]
      for (const [i, Schema] of Prefix.slice(0, arr.length).entries()) {
        const result = Schema.safeParse(arr[i])
        if (!result.success) {
          for (const issue of result.error.issues) {
            ctx.addIssue({ ...issue, path: [i, ...issue.path] })
          }
        }
      }
      for (let i = Prefix.length; i < arr.length; i++) {
        ctx.addIssue({ code: 'custom', path: [i] })
      }
    }),
  })
  .openapi({ required: ['indexes'] })
  .openapi('IndexSwap')

const DetailsViewSchema = z
  .xor([
    z.null().nullable(),
    SettingsUncheckedSchema.openapi({
      description:
        '[Learn more about the settings in this guide](https://www.meilisearch.com/docs/reference/api/settings).',
    }),
  ])
  .and(
    z
      .object({
        receivedDocuments: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Number of documents received for documentAdditionOrUpdate task.',
          }),
        indexedDocuments: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Number of documents finally indexed for documentAdditionOrUpdate task or a documentAdditionOrUpdate batch of tasks.',
          }),
        editedDocuments: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Number of documents edited for editDocumentByFunction task.' }),
        primaryKey: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Value for the primaryKey field encountered if any for indexCreation or indexUpdate task.',
          }),
        providedIds: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Number of provided document ids for the documentDeletion task.',
          }),
        deletedDocuments: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Number of documents finally deleted for documentDeletion and indexDeletion tasks.',
          }),
        matchedTasks: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'Number of tasks that match the request for taskCancelation or taskDeletion tasks.',
          }),
        canceledTasks: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Number of tasks canceled for taskCancelation.' }),
        deletedTasks: z
          .int()
          .min(0)
          .nullable()
          .exactOptional()
          .openapi({ description: 'Number of tasks deleted for taskDeletion.' }),
        originalFilter: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({
            description: 'Original filter query for taskCancelation or taskDeletion tasks.',
          }),
        dumpUid: z
          .string()
          .nullable()
          .exactOptional()
          .openapi({ description: 'Identifier generated for the dump for dumpCreation task.' }),
        context: z.object({}).nullable().exactOptional(),
        function: z.string().nullable().exactOptional(),
        swaps: z.array(IndexSwapSchema).nullable().exactOptional(),
        upgradeFrom: z.string().nullable().exactOptional(),
        upgradeTo: z.string().nullable().exactOptional(),
      })
      .openapi({ required: [] }),
  )
  .openapi('DetailsView')

const BatchStatsSchema = z
  .object({
    totalNbTasks: U32Schema,
    status: z.record(z.string(), z.int().min(0)).superRefine((o, ctx) => {
      const allowed = ['enqueued', 'processing', 'succeeded', 'failed', 'canceled']
      for (const k of Object.keys(o)) {
        if (!allowed.includes(k)) {
          ctx.addIssue({ code: 'custom', path: [k] })
        }
      }
    }),
    types: z.record(z.string(), z.int().min(0)).superRefine((o, ctx) => {
      const allowed = [
        'documentAdditionOrUpdate',
        'documentEdition',
        'documentDeletion',
        'settingsUpdate',
        'indexCreation',
        'indexDeletion',
        'indexUpdate',
        'indexSwap',
        'taskCancelation',
        'taskDeletion',
        'dumpCreation',
        'snapshotCreation',
        'upgradeDatabase',
      ]
      for (const k of Object.keys(o)) {
        if (!allowed.includes(k)) {
          ctx.addIssue({ code: 'custom', path: [k] })
        }
      }
    }),
    indexUids: z.record(z.string(), z.int().min(0)),
    progressTrace: z.record(z.string(), z.any()).exactOptional(),
    writeChannelCongestion: z.record(z.string(), z.any()).nullable().exactOptional(),
    internalDatabaseSizes: z.record(z.string(), z.any()).exactOptional(),
  })
  .openapi({ required: ['totalNbTasks', 'status', 'types', 'indexUids'] })
  .openapi('BatchStats')

const BatchViewSchema = z
  .object({
    uid: U32Schema,
    progress: z.xor([z.null().nullable(), ProgressViewSchema]).exactOptional(),
    details: DetailsViewSchema,
    stats: BatchStatsSchema,
    duration: z.string().nullable().exactOptional(),
    startedAt: z.iso.datetime({ offset: true }).exactOptional(),
    finishedAt: z.iso.datetime({ offset: true }).nullable().exactOptional(),
    batchStrategy: z.string().exactOptional(),
  })
  .openapi({ required: ['uid', 'details', 'stats'] })
  .openapi('BatchView')

const AllBatchesSchema = z
  .object({
    results: z.array(BatchViewSchema),
    total: z.int().min(0),
    limit: z.int().min(0),
    from: z.int().min(0).nullable().exactOptional(),
    next: z.int().min(0).nullable().exactOptional(),
  })
  .openapi({ required: ['results', 'total', 'limit'] })
  .openapi('AllBatches')

const StatusSchema = z
  .enum(['enqueued', 'processing', 'succeeded', 'failed', 'canceled'])
  .openapi({ description: 'The status of a task.', example: 'processing' })
  .openapi('Status')

const KindSchema = z
  .enum([
    'documentAdditionOrUpdate',
    'documentEdition',
    'documentDeletion',
    'settingsUpdate',
    'indexCreation',
    'indexDeletion',
    'indexUpdate',
    'indexSwap',
    'taskCancelation',
    'taskDeletion',
    'dumpCreation',
    'snapshotCreation',
    'upgradeDatabase',
  ])
  .openapi({
    description: 'The type of the task.',
    example: [
      'documentAdditionOrUpdate',
      'documentEdition',
      'documentDeletion',
      'settingsUpdate',
      'indexCreation',
      'indexDeletion',
      'indexUpdate',
      'indexSwap',
      'taskCancelation',
      'taskDeletion',
      'dumpCreation',
      'snapshotCreation',
      'upgradeDatabase',
    ],
  })
  .openapi('Kind')

const CodeSchema = z
  .enum([
    'api_key_already_exists',
    'api_key_not_found',
    'bad_parameter',
    'bad_request',
    'database_size_limit_reached',
    'document_not_found',
    'dump_already_processing',
    'dump_not_found',
    'dump_process_failed',
    'duplicate_index_found',
    'immutable_api_key_actions',
    'immutable_api_key_created_at',
    'immutable_api_key_expires_at',
    'immutable_api_key_indexes',
    'immutable_api_key_key',
    'immutable_api_key_uid',
    'immutable_api_key_updated_at',
    'immutable_index_created_at',
    'immutable_index_uid',
    'immutable_index_updated_at',
    'index_already_exists',
    'index_creation_failed',
    'index_not_found',
    'index_primary_key_already_exists',
    'index_primary_key_multiple_candidates_found',
    'index_primary_key_no_candidate_found',
    'internal',
    'invalid_api_key',
    'invalid_api_key_actions',
    'invalid_api_key_description',
    'invalid_api_key_expires_at',
    'invalid_api_key_indexes',
    'invalid_api_key_limit',
    'invalid_api_key_name',
    'invalid_api_key_offset',
    'invalid_api_key_uid',
    'invalid_content_type',
    'invalid_document_csv_delimiter',
    'invalid_document_fields',
    'invalid_document_retrieve_vectors',
    'missing_document_filter',
    'missing_document_edition_function',
    'invalid_document_filter',
    'invalid_document_geo_field',
    'invalid_vector_dimensions',
    'invalid_vectors_type',
    'invalid_document_id',
    'invalid_document_ids',
    'invalid_document_limit',
    'invalid_document_offset',
    'invalid_search_embedder',
    'invalid_similar_embedder',
    'invalid_search_hybrid_query',
    'invalid_index_limit',
    'invalid_index_offset',
    'invalid_index_primary_key',
    'invalid_index_uid',
    'invalid_multi_search_facets',
    'invalid_multi_search_facets_by_index',
    'invalid_multi_search_facet_order',
    'invalid_multi_search_federated',
    'invalid_multi_search_federation_options',
    'invalid_multi_search_max_values_per_facet',
    'invalid_multi_search_merge_facets',
    'invalid_multi_search_query_facets',
    'invalid_multi_search_query_pagination',
    'invalid_multi_search_query_ranking_rules',
    'invalid_multi_search_query_position',
    'invalid_multi_search_remote',
    'invalid_multi_search_weight',
    'invalid_network_remotes',
    'invalid_network_self',
    'invalid_network_search_api_key',
    'invalid_network_url',
    'invalid_search_attributes_to_search_on',
    'invalid_search_attributes_to_crop',
    'invalid_search_attributes_to_highlight',
    'invalid_similar_attributes_to_retrieve',
    'invalid_similar_retrieve_vectors',
    'invalid_search_attributes_to_retrieve',
    'invalid_search_ranking_score_threshold',
    'invalid_similar_ranking_score_threshold',
    'invalid_search_retrieve_vectors',
    'invalid_search_crop_length',
    'invalid_search_crop_marker',
    'invalid_search_facets',
    'invalid_search_semantic_ratio',
    'invalid_search_locales',
    'invalid_facet_search_exhaustive_facet_count',
    'invalid_facet_search_facet_name',
    'invalid_similar_id',
    'invalid_search_filter',
    'invalid_similar_filter',
    'invalid_search_highlight_post_tag',
    'invalid_search_highlight_pre_tag',
    'invalid_search_hits_per_page',
    'invalid_similar_limit',
    'invalid_search_limit',
    'invalid_search_matching_strategy',
    'invalid_similar_offset',
    'invalid_search_offset',
    'invalid_search_page',
    'invalid_search_q',
    'invalid_facet_search_query',
    'invalid_facet_search_name',
    'facet_search_disabled',
    'invalid_search_vector',
    'invalid_search_show_matches_position',
    'invalid_search_show_ranking_score',
    'invalid_similar_show_ranking_score',
    'invalid_search_show_ranking_score_details',
    'invalid_similar_show_ranking_score_details',
    'invalid_search_sort',
    'invalid_search_distinct',
    'invalid_settings_displayed_attributes',
    'invalid_settings_distinct_attribute',
    'invalid_settings_proximity_precision',
    'invalid_settings_facet_search',
    'invalid_settings_prefix_search',
    'invalid_settings_faceting',
    'invalid_settings_filterable_attributes',
    'invalid_settings_pagination',
    'invalid_settings_search_cutoff_ms',
    'invalid_settings_embedders',
    'invalid_settings_ranking_rules',
    'invalid_settings_searchable_attributes',
    'invalid_settings_sortable_attributes',
    'invalid_settings_stop_words',
    'invalid_settings_non_separator_tokens',
    'invalid_settings_separator_tokens',
    'invalid_settings_dictionary',
    'invalid_settings_synonyms',
    'invalid_settings_typo_tolerance',
    'invalid_settings_localized_attributes',
    'invalid_state',
    'invalid_store_file',
    'invalid_swap_duplicate_index_found',
    'invalid_swap_indexes',
    'invalid_task_after_enqueued_at',
    'invalid_task_after_finished_at',
    'invalid_task_after_started_at',
    'invalid_task_before_enqueued_at',
    'invalid_task_before_finished_at',
    'invalid_task_before_started_at',
    'invalid_task_canceled_by',
    'invalid_task_from',
    'invalid_task_limit',
    'invalid_task_reverse',
    'invalid_task_statuses',
    'invalid_task_types',
    'invalid_task_uids',
    'invalid_batch_uids',
    'io_error',
    'feature_not_enabled',
    'malformed_payload',
    'max_fields_limit_exceeded',
    'missing_api_key_actions',
    'missing_api_key_expires_at',
    'missing_api_key_indexes',
    'missing_authorization_header',
    'missing_content_type',
    'missing_document_id',
    'missing_facet_search_facet_name',
    'missing_index_uid',
    'missing_master_key',
    'missing_network_url',
    'missing_payload',
    'missing_search_hybrid',
    'missing_swap_indexes',
    'missing_task_filters',
    'no_space_left_on_device',
    'payload_too_large',
    'remote_bad_response',
    'remote_bad_request',
    'remote_could_not_send_request',
    'remote_invalid_api_key',
    'remote_remote_error',
    'remote_timeout',
    'too_many_search_requests',
    'task_not_found',
    'task_file_not_found',
    'batch_not_found',
    'too_many_open_files',
    'too_many_vectors',
    'unretrievable_document',
    'unretrievable_error_code',
    'unsupported_media_type',
    'vector_embedding_error',
    'not_found_similar_id',
    'invalid_document_edition_context',
    'invalid_document_edition_function_filter',
    'edit_documents_by_function_error',
    'invalid_settings_index_chat',
    'unimplemented_external_function_calling',
    'unimplemented_non_streaming_chat_completions',
    'unimplemented_multi_choice_chat_completions',
    'chat_not_found',
    'invalid_chat_setting_document_template',
    'invalid_chat_completion_org_id',
    'invalid_chat_completion_project_id',
    'invalid_chat_completion_api_version',
    'invalid_chat_completion_deployment_id',
    'invalid_chat_completion_source',
    'invalid_chat_completion_base_api',
    'invalid_chat_completion_api_key',
    'invalid_chat_completion_prompts',
    'invalid_chat_completion_system_prompt',
    'invalid_chat_completion_search_description_prompt',
    'invalid_chat_completion_search_query_param_prompt',
    'invalid_chat_completion_search_index_uid_param_prompt',
    'invalid_chat_completion_pre_query_prompt',
  ])
  .openapi('Code')

const ErrorTypeSchema = z
  .enum(['internal', 'invalid_request', 'auth', 'system'])
  .openapi('ErrorType')

const ResponseErrorSchema = z
  .object({
    message: z.string().openapi({ description: 'The error message.' }),
    code: CodeSchema.openapi({ description: 'The error code.' }),
    type: ErrorTypeSchema.openapi({ description: 'The error type.' }),
    link: z
      .string()
      .openapi({ description: 'A link to the documentation about this specific error.' }),
  })
  .openapi({ required: ['message', 'code', 'type', 'link'] })
  .openapi('ResponseError')

const TaskViewSchema = z
  .object({
    uid: z
      .int()
      .min(0)
      .openapi({ description: 'The unique sequential identifier of the task.', example: 4312 }),
    batchUid: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description: 'The unique identifier of the index where this task is operated.',
        example: 'movies',
      }),
    indexUid: z.string().nullable().exactOptional(),
    status: StatusSchema,
    type: KindSchema.openapi({ description: 'The type of the task.' }),
    canceledBy: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The uid of the task that performed the taskCancelation if the task has been canceled.',
        example: 4326,
      }),
    details: z.xor([z.null().nullable(), DetailsViewSchema]).exactOptional(),
    error: z.xor([z.null().nullable(), ResponseErrorSchema]).exactOptional(),
    duration: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Total elasped time the engine was in processing state expressed as a `ISO-8601` duration format.',
        example: null,
      }),
    enqueuedAt: z
      .string()
      .openapi({
        description: 'An `RFC 3339` format for date/time/duration.',
        example: '2024-08-08_14:12:09.393Z',
      }),
    startedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An `RFC 3339` format for date/time/duration.',
        example: '2024-08-08_14:12:09.393Z',
      }),
    finishedAt: z
      .string()
      .exactOptional()
      .openapi({
        description: 'An `RFC 3339` format for date/time/duration.',
        example: '2024-08-08_14:12:09.393Z',
      }),
  })
  .openapi({ required: ['uid', 'status', 'type', 'enqueuedAt'] })
  .openapi('TaskView')

const AllTasksSchema = z
  .object({
    results: z
      .array(TaskViewSchema)
      .openapi({ description: 'The list of tasks that matched the filter.' }),
    total: z
      .int()
      .min(0)
      .openapi({
        description:
          'Total number of browsable results using offset/limit parameters for the given resource.',
      }),
    limit: z
      .int()
      .min(0)
      .openapi({
        description:
          'Limit given for the query. If limit is not provided as a query parameter, this parameter displays the default limit value.',
      }),
    from: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'The first task uid returned.' }),
    next: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Represents the value to send in from to fetch the next slice of the results. The first item for the next slice starts at this exact number. When the returned value is null, it means that all the data have been browsed in the given order.',
      }),
  })
  .openapi({ required: ['results', 'total', 'limit'] })
  .openapi('AllTasks')

const BTreeMapSchema = z
  .record(
    z.string(),
    z.array(
      z
        .object({
          start: z.int().min(0),
          length: z.int().min(0),
          indices: z.array(z.int().min(0)).nullable().exactOptional(),
        })
        .openapi({ required: ['start', 'length'] }),
    ),
  )
  .openapi('BTreeMap')

const BrowseQuerySchema = z
  .object({
    offset: z.int().min(0).openapi({ example: 150 }),
    limit: z.int().min(0).default(20).openapi({ example: 1 }),
    fields: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['title, description'] }),
    retrieveVectors: z.boolean().openapi({ example: true }),
    ids: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({ example: ['cody', 'finn', 'brandy', 'gambit'] }),
    filter: z.any().exactOptional(),
  })
  .openapi({ required: ['offset', 'limit', 'retrieveVectors'] })
  .openapi('BrowseQuery')

const FacetStatsSchema = z
  .object({ min: z.float64(), max: z.float64() })
  .openapi({ required: ['min', 'max'] })
  .openapi('FacetStats')

const ComputedFacetsSchema = z
  .object({
    distribution: z.record(z.string(), z.record(z.string(), z.int().min(0))),
    stats: z.record(z.string(), FacetStatsSchema),
  })
  .openapi({ required: ['distribution', 'stats'] })
  .openapi('ComputedFacets')

const CreateApiKeySchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'A description for the key. `null` if empty.', example: null }),
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'A human-readable name for the key. `null` if empty.',
        example: 'Indexing Products API key',
      }),
    uid: z
      .uuid()
      .openapi({
        description:
          "A uuid v4 to identify the API Key. If not specified, it's generated by Meilisearch.",
        example: null,
      }),
    actions: z
      .array(ActionSchema)
      .openapi({
        description:
          'A list of actions permitted for the key. `["*"]` for all actions. The `*` character can be used as a wildcard when located at the last position. e.g. `documents.*` to authorize access on all documents endpoints.',
        example: ['documents.add'],
      }),
    indexes: z
      .array(z.string())
      .openapi({
        description:
          'A list of accessible indexes permitted for the key. `["*"]` for all indexes. The `*` character can be used as a wildcard when located at the last position. e.g. `products_*` to allow access to all indexes whose names start with `products_`.',
        example: ['products'],
      }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Represent the expiration date and time as RFC 3339 format. `null` equals to no expiration time.',
      }),
  })
  .openapi({ required: ['uid', 'actions', 'indexes'] })
  .openapi('CreateApiKey')

const DocumentDeletionByFilterSchema = z
  .object({ filter: z.any() })
  .openapi({ required: ['filter'] })
  .openapi('DocumentDeletionByFilter')

const DocumentEditionByFunctionSchema = z
  .object({
    filter: z
      .any()
      .exactOptional()
      .openapi({ description: 'A string containing a RHAI function.' }),
    context: z
      .any()
      .exactOptional()
      .openapi({ description: 'A string containing a filter expression.' }),
    function: z
      .string()
      .openapi({
        description:
          'An object with data Meilisearch should make available for the editing function.',
      }),
  })
  .openapi({ required: ['function'] })
  .openapi('DocumentEditionByFunction')

const FacetSearchQuerySchema = z
  .object({
    facet_query: z.string().nullable().exactOptional(),
    facet_name: z.string(),
    q: z.string().nullable().exactOptional(),
    vector: z.array(z.float32()).nullable().exactOptional(),
    hybrid: z.xor([z.null().nullable(), HybridQuerySchema]).exactOptional(),
    filter: z.any().exactOptional(),
    matching_strategy: MatchingStrategySchema,
    attributes_to_search_on: z.array(z.string()).nullable().exactOptional(),
    ranking_score_threshold: z
      .xor([z.null().nullable(), RankingScoreThresholdSchema])
      .exactOptional(),
    locales: z.array(LocaleSchema).nullable().exactOptional(),
    exhaustive_facet_count: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: ['facet_name', 'matching_strategy'] })
  .openapi('FacetSearchQuery')

const FederatedFacetsSchema = z.record(z.string(), ComputedFacetsSchema).openapi('FederatedFacets')

const IndexUidSchema = z
  .string()
  .openapi({
    description:
      'An index uid is composed of only ascii alphanumeric characters, - and _, between 1 and 400\nbytes long',
    example: 'movies',
  })
  .openapi('IndexUid')

const FederationOptionsSchema = z
  .object({
    weight: z.float64(),
    remote: z.string().nullable().exactOptional(),
    queryPosition: z.int().min(0).nullable().exactOptional(),
  })
  .openapi({ required: ['weight'] })
  .openapi('FederationOptions')

const SearchQueryWithIndexSchema = z
  .object({
    indexUid: IndexUidSchema,
    q: z.string().nullable().exactOptional(),
    vector: z.array(z.float32()).nullable().exactOptional(),
    hybrid: z.xor([z.null().nullable(), HybridQuerySchema]).exactOptional(),
    offset: z.int().min(0).nullable().exactOptional(),
    limit: z.int().min(0).nullable().exactOptional(),
    page: z.int().min(0).nullable().exactOptional(),
    hitsPerPage: z.int().min(0).nullable().exactOptional(),
    attributesToRetrieve: z
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
      .exactOptional(),
    retrieveVectors: z.boolean(),
    attributesToCrop: z.array(z.string()).nullable().exactOptional(),
    cropLength: z.int().min(0),
    attributesToHighlight: z
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
      .exactOptional(),
    showRankingScore: z.boolean(),
    showRankingScoreDetails: z.boolean(),
    showMatchesPosition: z.boolean(),
    filter: z.any().exactOptional(),
    sort: z.array(z.string()).nullable().exactOptional(),
    distinct: z.string().nullable().exactOptional(),
    facets: z.array(z.string()).nullable().exactOptional(),
    highlightPreTag: z.string(),
    highlightPostTag: z.string(),
    cropMarker: z.string(),
    matchingStrategy: MatchingStrategySchema,
    attributesToSearchOn: z.array(z.string()).nullable().exactOptional(),
    rankingScoreThreshold: z
      .xor([z.null().nullable(), RankingScoreThresholdSchema])
      .exactOptional(),
    locales: z.array(LocaleSchema).nullable().exactOptional(),
    federationOptions: z.xor([z.null().nullable(), FederationOptionsSchema]).exactOptional(),
  })
  .openapi({
    description: 'A `SearchQuery` + an index UID and optional FederationOptions.',
    required: [
      'indexUid',
      'retrieveVectors',
      'cropLength',
      'showRankingScore',
      'showRankingScoreDetails',
      'showMatchesPosition',
      'highlightPreTag',
      'highlightPostTag',
      'cropMarker',
      'matchingStrategy',
    ],
  })
  .openapi('SearchQueryWithIndex')

const MergeFacetsSchema = z
  .object({ maxValuesPerFacet: z.int().min(0).nullable().exactOptional() })
  .openapi({ required: [] })
  .openapi('MergeFacets')

const FederationSchema = z
  .object({
    limit: z.int().min(0),
    offset: z.int().min(0),
    facetsByIndex: z.record(z.string(), z.array(z.string()).nullable()),
    mergeFacets: z.xor([z.null().nullable(), MergeFacetsSchema]).exactOptional(),
  })
  .openapi({ required: ['limit', 'offset', 'facetsByIndex'] })
  .openapi('Federation')

const FederatedSearchSchema = z
  .object({
    queries: z.array(SearchQueryWithIndexSchema),
    federation: z.xor([z.null().nullable(), FederationSchema]).exactOptional(),
  })
  .openapi({ required: ['queries'] })
  .openapi('FederatedSearch')

const HitsInfoSchema = z
  .xor([
    z
      .object({
        hitsPerPage: z.int().min(0),
        page: z.int().min(0),
        totalPages: z.int().min(0),
        totalHits: z.int().min(0),
      })
      .openapi({ required: ['hitsPerPage', 'page', 'totalPages', 'totalHits'] }),
    z
      .object({ limit: z.int().min(0), offset: z.int().min(0), estimatedTotalHits: z.int().min(0) })
      .openapi({ required: ['limit', 'offset', 'estimatedTotalHits'] }),
  ])
  .openapi('HitsInfo')

const SearchHitSchema = z
  .object({
    _formatted: z.looseObject({}).exactOptional(),
    _matchesPosition: z.xor([z.null().nullable(), BTreeMapSchema]).exactOptional(),
    _rankingScore: z.float64().nullable().exactOptional(),
    _rankingScoreDetails: z.record(z.string(), z.any()).nullable().exactOptional(),
  })
  .catchall(z.any())
  .openapi('SearchHit')

const FederatedSearchResultSchema = HitsInfoSchema.and(
  z
    .object({
      hits: z.array(SearchHitSchema),
      processingTimeMs: z.int().min(0),
      semanticHitCount: z.int().min(0).nullable().exactOptional(),
      facetDistribution: z
        .record(z.string(), z.record(z.string(), z.int().min(0)))
        .nullable()
        .exactOptional(),
      facetStats: z.record(z.string(), FacetStatsSchema).nullable().exactOptional(),
      facetsByIndex: FederatedFacetsSchema.exactOptional(),
      remoteErrors: z.record(z.string(), ResponseErrorSchema).nullable().exactOptional(),
    })
    .openapi({ required: ['hits', 'processingTimeMs'] }),
).openapi('FederatedSearchResult')

const LogModeSchema = z.enum(['human', 'json', 'profile']).openapi('LogMode')

const GetLogsSchema = z
  .object({
    target: z
      .string()
      .default('info')
      .openapi({
        description:
          'Lets you specify which parts of the code you want to inspect and is formatted like that: code_part=log_level,code_part=log_level\n- If the `code_part` is missing, then the `log_level` will be applied to everything.\n- If the `log_level` is missing, then the `code_part` will be selected in `info` log level.',
        example: 'milli=trace,index_scheduler,actix_web=off',
      }),
    mode: z
      .xor([LogModeSchema.openapi({ description: 'Lets you customize the format of the logs.' })])
      .default('Human'),
    profileMemory: z
      .boolean()
      .default(false)
      .openapi({
        description:
          'A boolean to indicate if you want to profile the memory as well. This is only useful while using the `profile` mode.\nBe cautious, though; it slows down the engine a lot.',
      }),
  })
  .openapi({ required: ['target', 'mode', 'profileMemory'] })
  .openapi('GetLogs')

const HealthStatusSchema = z.literal('available').openapi('HealthStatus')

const HealthResponseSchema = z
  .object({ status: HealthStatusSchema.openapi({ description: 'The status of the instance.' }) })
  .openapi({ required: ['status'] })
  .openapi('HealthResponse')

const IndexCreateRequestSchema = z
  .object({
    uid: IndexUidSchema.openapi({ description: 'The name of the index' }),
    primaryKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The primary key of the index', example: 'id' }),
  })
  .openapi({ required: ['uid'] })
  .openapi('IndexCreateRequest')

const IndexViewSchema = z
  .object({
    uid: z.string().openapi({ description: 'Unique identifier for the index' }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'An `RFC 3339` format for date/time/duration.' }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'An `RFC 3339` format for date/time/duration.' }),
    primaryKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'Custom primaryKey for documents' }),
  })
  .openapi({ required: ['uid', 'createdAt', 'updatedAt'] })
  .openapi('IndexView')

const KeyViewSchema = z
  .object({
    name: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The name of the API Key if any' }),
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The description of the API Key if any' }),
    key: z.string().openapi({ description: 'The actual API Key you can send to Meilisearch' }),
    uid: z
      .uuid()
      .openapi({
        description: 'The `Uuid` specified while creating the key or autogenerated by Meilisearch.',
      }),
    actions: z
      .array(ActionSchema)
      .openapi({ description: 'The actions accessible with this key.' }),
    indexes: z.array(z.string()).openapi({ description: 'The indexes accessible with this key.' }),
    expiresAt: z.iso
      .datetime({ offset: true })
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The expiration date of the key. Once this timestamp is exceeded the key is not deleted but cannot be used anymore.',
      }),
    createdAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date of creation of this API Key.', readOnly: true }),
    updatedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date of the last update made on this key.', readOnly: true }),
  })
  .openapi({ required: ['key', 'uid', 'actions', 'indexes', 'createdAt', 'updatedAt'] })
  .openapi('KeyView')

const RemoteSchema = z
  .object({
    url: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        example: {
          'ms-0': { url: 'http://localhost:7700', searchApiKey: null },
          'ms-1': { url: 'http://localhost:7701', searchApiKey: 'foo' },
          'ms-2': { url: 'http://localhost:7702', searchApiKey: 'bar' },
        },
      }),
    searchApiKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'XWnBI8QHUc-4IlqbKPLUDuhftNq19mQtjc6JvmivzJU' }),
  })
  .openapi({ required: [] })
  .openapi('Remote')

const NetworkSchema = z
  .object({
    remotes: z
      .record(z.string(), RemoteSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: 'http://localhost:7700' }),
    self: z.string().nullable().exactOptional().openapi({ example: 'ms-00' }),
  })
  .openapi({ required: [] })
  .openapi('Network')

const PaginationViewIndexViewSchema = z
  .object({
    results: z.array(
      z
        .object({
          uid: z.string().openapi({ description: 'Unique identifier for the index' }),
          createdAt: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'An `RFC 3339` format for date/time/duration.' }),
          updatedAt: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'An `RFC 3339` format for date/time/duration.' }),
          primaryKey: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'Custom primaryKey for documents' }),
        })
        .openapi({ required: ['uid', 'createdAt', 'updatedAt'] }),
    ),
    offset: z.int().min(0),
    limit: z.int().min(0),
    total: z.int().min(0),
  })
  .openapi({ required: ['results', 'offset', 'limit', 'total'] })
  .openapi('PaginationViewIndexView')

const PaginationViewKeyViewSchema = z
  .object({
    results: z.array(
      z
        .object({
          name: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'The name of the API Key if any' }),
          description: z
            .string()
            .nullable()
            .exactOptional()
            .openapi({ description: 'The description of the API Key if any' }),
          key: z
            .string()
            .openapi({ description: 'The actual API Key you can send to Meilisearch' }),
          uid: z
            .uuid()
            .openapi({
              description:
                'The `Uuid` specified while creating the key or autogenerated by Meilisearch.',
            }),
          actions: z
            .array(ActionSchema)
            .openapi({ description: 'The actions accessible with this key.' }),
          indexes: z
            .array(z.string())
            .openapi({ description: 'The indexes accessible with this key.' }),
          expiresAt: z.iso
            .datetime({ offset: true })
            .nullable()
            .exactOptional()
            .openapi({
              description:
                'The expiration date of the key. Once this timestamp is exceeded the key is not deleted but cannot be used anymore.',
            }),
          createdAt: z.iso
            .datetime({ offset: true })
            .openapi({ description: 'The date of creation of this API Key.', readOnly: true }),
          updatedAt: z.iso
            .datetime({ offset: true })
            .openapi({
              description: 'The date of the last update made on this key.',
              readOnly: true,
            }),
        })
        .openapi({ required: ['key', 'uid', 'actions', 'indexes', 'createdAt', 'updatedAt'] }),
    ),
    offset: z.int().min(0),
    limit: z.int().min(0),
    total: z.int().min(0),
  })
  .openapi({ required: ['results', 'offset', 'limit', 'total'] })
  .openapi('PaginationViewKeyView')

const PaginationViewValueSchema = z
  .object({
    results: z.array(z.any()),
    offset: z.int().min(0),
    limit: z.int().min(0),
    total: z.int().min(0),
  })
  .openapi({ required: ['results', 'offset', 'limit', 'total'] })
  .openapi('PaginationViewValue')

const PatchApiKeySchema = z
  .object({
    description: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ example: 'This key is used to update documents in the products index' }),
    name: z.string().nullable().exactOptional().openapi({ example: 'Indexing Products API key' }),
  })
  .openapi({ required: [] })
  .openapi('PatchApiKey')

const ProximityPrecisionViewSchema = z
  .enum(['byWord', 'byAttribute'])
  .openapi('ProximityPrecisionView')

const RankingRuleViewSchema = z
  .xor([
    z
      .literal('Words')
      .openapi({
        description:
          'Sorted by decreasing number of matched query terms.\nQuery words at the front of an attribute is considered better than if it was at the back.',
      }),
    z.literal('Typo').openapi({ description: 'Sorted by increasing number of typos.' }),
    z
      .literal('Proximity')
      .openapi({ description: 'Sorted by increasing distance between matched query terms.' }),
    z
      .literal('Attribute')
      .openapi({
        description:
          'Documents with quey words contained in more important\nattributes are considered better.',
      }),
    z
      .literal('Sort')
      .openapi({
        description:
          'Dynamically sort at query time the documents. None, one or multiple Asc/Desc sortable\nattributes can be used in place of this criterion at query time.',
      }),
    z
      .literal('Exactness')
      .openapi({
        description: 'Sorted by the similarity of the matched words with the query words.',
      }),
    z
      .object({
        Asc: z
          .string()
          .openapi({ description: 'Sorted by the increasing value of the field specified.' }),
      })
      .openapi({
        description: 'Sorted by the increasing value of the field specified.',
        required: ['Asc'],
      }),
    z
      .object({
        Desc: z
          .string()
          .openapi({ description: 'Sorted by the decreasing value of the field specified.' }),
      })
      .openapi({
        description: 'Sorted by the decreasing value of the field specified.',
        required: ['Desc'],
      }),
  ])
  .openapi('RankingRuleView')

const RuntimeTogglableFeaturesSchema = z
  .object({
    metrics: z.boolean().nullable().exactOptional(),
    logsRoute: z.boolean().nullable().exactOptional(),
    editDocumentsByFunction: z.boolean().nullable().exactOptional(),
    containsFilter: z.boolean().nullable().exactOptional(),
    network: z.boolean().nullable().exactOptional(),
    getTaskDocumentsRoute: z.boolean().nullable().exactOptional(),
    compositeEmbedders: z.boolean().nullable().exactOptional(),
    chatCompletions: z.boolean().nullable().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('RuntimeTogglableFeatures')

const SearchQuerySchema = z
  .object({
    q: z.string().nullable().exactOptional(),
    vector: z.array(z.float32()).nullable().exactOptional(),
    hybrid: z.xor([z.null().nullable(), HybridQuerySchema]).exactOptional(),
    offset: z.int().min(0).default(0),
    limit: z.int().min(0).default(20),
    page: z.int().min(0).nullable().exactOptional(),
    hits_per_page: z.int().min(0).nullable().exactOptional(),
    attributes_to_retrieve: z
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
      .exactOptional(),
    retrieve_vectors: z.boolean(),
    attributes_to_crop: z.array(z.string()).nullable().exactOptional(),
    crop_length: z.int().min(0).default(10),
    attributes_to_highlight: z
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
      .exactOptional(),
    show_matches_position: z.boolean(),
    show_ranking_score: z.boolean(),
    show_ranking_score_details: z.boolean(),
    filter: z.any().exactOptional(),
    sort: z.array(z.string()).nullable().exactOptional(),
    distinct: z.string().nullable().exactOptional(),
    facets: z.array(z.string()).nullable().exactOptional(),
    highlight_pre_tag: z.string().default('<em>'),
    highlight_post_tag: z.string().default('</em>'),
    crop_marker: z.string().default('…'),
    matching_strategy: MatchingStrategySchema,
    attributes_to_search_on: z.array(z.string()).nullable().exactOptional(),
    ranking_score_threshold: z
      .xor([z.null().nullable(), RankingScoreThresholdSchema])
      .exactOptional(),
    locales: z.array(LocaleSchema).nullable().exactOptional(),
  })
  .openapi({
    required: [
      'offset',
      'limit',
      'retrieve_vectors',
      'crop_length',
      'show_matches_position',
      'show_ranking_score',
      'show_ranking_score_details',
      'highlight_pre_tag',
      'highlight_post_tag',
      'crop_marker',
      'matching_strategy',
    ],
  })
  .openapi('SearchQuery')

const SearchResultSchema = HitsInfoSchema.and(
  z
    .object({
      hits: z.array(SearchHitSchema),
      query: z.string(),
      processingTimeMs: z.int().min(0),
      facetDistribution: z.record(z.string(), z.any()).nullable().exactOptional(),
      facetStats: z.record(z.string(), FacetStatsSchema).nullable().exactOptional(),
      semanticHitCount: z.int().min(0).nullable().exactOptional(),
    })
    .openapi({ required: ['hits', 'query', 'processingTimeMs'] }),
).openapi('SearchResult')

const SearchResultWithIndexSchema = SearchResultSchema.and(
  z.object({ indexUid: z.string() }).openapi({ required: ['indexUid'] }),
).openapi('SearchResultWithIndex')

const SearchResultsSchema = z
  .object({ results: z.array(SearchResultWithIndexSchema) })
  .openapi({ required: ['results'] })
  .openapi('SearchResults')

const SettingsCheckedSchema = z
  .strictObject({
    displayedAttributes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Fields displayed in the returned documents.',
        example: ['id', 'title', 'description', 'url'],
      }),
    searchableAttributes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Fields in which to search for matching query words sorted by order of importance.',
        example: ['title', 'description'],
      }),
    filterableAttributes: z
      .array(FilterableAttributesRuleSchema)
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Attributes to use for faceting and filtering. See [Filtering and Faceted Search](https://www.meilisearch.com/docs/learn/filtering_and_sorting/search_with_facet_filters).',
        example: ['release_date', 'genre'],
      }),
    sortableAttributes: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Attributes to use when sorting search results.',
        example: ['release_date'],
      }),
    rankingRules: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of ranking rules sorted by order of importance. The order is customizable.\n[A list of ordered built-in ranking rules](https://www.meilisearch.com/docs/learn/relevancy/relevancy).',
        example: ['words', 'typo', 'proximity', 'attribute', 'exactness'],
      }),
    stopWords: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of words ignored when present in search queries.',
        example: ['the', 'a', 'them', 'their'],
      }),
    nonSeparatorTokens: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of characters not delimiting where one term begins and ends.',
        example: [' ', '\n'],
      }),
    separatorTokens: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of characters delimiting where one term begins and ends.',
        example: ['S'],
      }),
    dictionary: z
      .array(z.string())
      .nullable()
      .exactOptional()
      .openapi({
        description: 'List of strings Meilisearch should parse as a single term.',
        example: ['iPhone pro'],
      }),
    synonyms: z
      .record(z.string(), z.array(z.string()))
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'List of associated words treated similarly. A word associated to an array of word as synonyms.',
        example: { he: ['she', 'they', 'them'], phone: ['iPhone', 'android'] },
      }),
    distinctAttribute: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'Search returns documents with distinct (different) values of the given field.',
        example: 'sku',
      }),
    proximityPrecision: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description: 'Precision level when calculating the proximity ranking rule.',
        example: 'byAttribute',
      }),
    typoTolerance: z
      .xor([
        z.null().nullable(),
        TypoSettingsSchema.openapi({ description: 'Customize typo tolerance feature.' }),
      ])
      .exactOptional(),
    faceting: z
      .xor([
        z.null().nullable(),
        FacetingSettingsSchema.openapi({ description: 'Faceting settings.' }),
      ])
      .exactOptional(),
    pagination: z
      .xor([
        z.null().nullable(),
        PaginationSettingsSchema.openapi({ description: 'Pagination settings.' }),
      ])
      .exactOptional(),
    embedders: z
      .record(z.string(), SettingEmbeddingSettingsSchema)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Embedder required for performing semantic search queries.' }),
    searchCutoffMs: z
      .int()
      .min(0)
      .nullable()
      .exactOptional()
      .openapi({ description: 'Maximum duration of a search query.', example: 50 }),
    localizedAttributes: z
      .array(LocalizedAttributesRuleViewSchema)
      .nullable()
      .exactOptional()
      .openapi({ example: 50 }),
    facetSearch: z.boolean().nullable().exactOptional().openapi({ example: true }),
    prefixSearch: z.xor([z.null().nullable(), PrefixSearchSettingsSchema]).exactOptional(),
    chat: z
      .xor([
        z.null().nullable(),
        ChatSettingsSchema.openapi({ description: 'Customize the chat prompting.' }),
      ])
      .exactOptional(),
  })
  .openapi({
    description:
      'Holds all the settings for an index. `T` can either be `Checked` if they represents settings\nwhose validity is guaranteed, or `Unchecked` if they need to be validated. In the later case, a\ncall to `check` will return a `Settings<Checked>` from a `Settings<Unchecked>`.',
    required: [],
  })
  .openapi('SettingsChecked')

const SimilarQuerySchema = z
  .object({
    id: z.string(),
    offset: z.int().min(0),
    limit: z.int().min(0),
    filter: z.any().exactOptional(),
    embedder: z.string(),
    attributes_to_retrieve: z
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
      .exactOptional(),
    retrieve_vectors: z.boolean(),
    show_ranking_score: z.boolean(),
    show_ranking_score_details: z.boolean(),
    ranking_score_threshold: z.float64(),
  })
  .openapi({
    required: [
      'id',
      'offset',
      'limit',
      'embedder',
      'retrieve_vectors',
      'show_ranking_score',
      'show_ranking_score_details',
      'ranking_score_threshold',
    ],
  })
  .openapi('SimilarQuery')

const SimilarResultSchema = HitsInfoSchema.and(
  z
    .object({ hits: z.array(SearchHitSchema), id: z.string(), processingTimeMs: z.int().min(0) })
    .openapi({ required: ['hits', 'id', 'processingTimeMs'] }),
).openapi('SimilarResult')

const StatsSchema: z.ZodType<StatsType> = z
  .lazy(() =>
    z
      .object({
        databaseSize: z
          .int()
          .min(0)
          .openapi({ description: 'The disk space used by the database, in bytes.' }),
        usedDatabaseSize: z
          .int()
          .min(0)
          .openapi({ description: 'The size of the database, in bytes.' }),
        lastUpdate: z.iso
          .datetime({ offset: true })
          .nullable()
          .exactOptional()
          .openapi({
            description:
              'The date of the last update in the RFC 3339 formats. Can be `null` if no update has ever been processed.',
          }),
        indexes: z
          .record(z.string(), IndexStatsSchema)
          .openapi({
            description: 'The stats of every individual index your API key lets you access.',
          }),
      })
      .openapi({ required: ['databaseSize', 'usedDatabaseSize', 'indexes'] }),
  )
  .openapi('Stats')

const SummarizedTaskViewSchema = z
  .object({
    taskUid: z.int().min(0).openapi({ description: 'The task unique identifier.' }),
    indexUid: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({
        description:
          'The index affected by this task. May be `null` if the task is not linked to any index.',
      }),
    status: StatusSchema.openapi({ description: 'The status of the task.' }),
    type: KindSchema.openapi({ description: 'The type of the task.' }),
    enqueuedAt: z.iso
      .datetime({ offset: true })
      .openapi({ description: 'The date on which the task was enqueued.' }),
  })
  .openapi({ required: ['taskUid', 'status', 'type', 'enqueuedAt'] })
  .openapi('SummarizedTaskView')

const SwapIndexesPayloadSchema = z
  .object({
    indexes: z
      .array(IndexUidSchema)
      .openapi({ description: 'Array of the two indexUids to be swapped' }),
  })
  .openapi({ required: ['indexes'] })
  .openapi('SwapIndexesPayload')

const UncheckedSchema = z.any().nullable().default(null).openapi('Unchecked')

const UpdateIndexRequestSchema = z
  .object({
    primaryKey: z
      .string()
      .nullable()
      .exactOptional()
      .openapi({ description: 'The new primary key of the index' }),
  })
  .openapi({ required: [] })
  .openapi('UpdateIndexRequest')

const UpdateStderrLogsSchema = z
  .object({
    target: z
      .string()
      .default('info')
      .openapi({
        description:
          'Lets you specify which parts of the code you want to inspect and is formatted like that: code_part=log_level,code_part=log_level\n- If the `code_part` is missing, then the `log_level` will be applied to everything.\n- If the `log_level` is missing, then the `code_part` will be selected in `info` log level.',
        example: 'milli=trace,index_scheduler,actix_web=off',
      }),
  })
  .openapi({ required: ['target'] })
  .openapi('UpdateStderrLogs')

const VersionResponseSchema = z
  .object({
    commitSha: z
      .string()
      .openapi({ description: 'The commit used to compile this build of Meilisearch.' }),
    commitDate: z.string().openapi({ description: 'The date of this build.' }),
    pkgVersion: z.string().openapi({ description: 'The version of Meilisearch.' }),
  })
  .openapi({ required: ['commitSha', 'commitDate', 'pkgVersion'] })
  .openapi('VersionResponse')

const BearerSecurityScheme = {
  type: 'http',
  scheme: 'bearer',
  bearerFormat: 'Uuidv4, string or JWT',
  description:
    'An API key is a token that you provide when making API calls. Include the token in a header parameter called `Authorization`.\nExample: `Authorization: Bearer 8fece4405662dd830e4cb265e7e047aab2e79672a760a12712d2a263c9003509`',
}

export const getBatchesRoute = createRoute({
  method: 'get',
  path: '/batches',
  tags: ['Batches'],
  summary: 'Get batches',
  description:
    'List all batches, regardless of index. The batch objects are contained in the results array.\nBatches are always returned in descending order of uid. This means that by default, the most recently created batch objects appear first.\nBatch results are paginated and can be filtered with query parameters.',
  operationId: 'get_batches',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of results to return.',
            required: false,
            schema: { type: 'integer', format: 'u-int32', default: 20, minimum: 0 },
            example: 12,
          },
        }),
      from: z
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
            name: 'from',
            in: 'query',
            description: 'Fetch the next set of results from the given uid.',
            required: false,
            schema: { type: 'integer', format: 'u-int32', minimum: 0 },
            example: 12421,
          },
        }),
      reverse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reverse',
            in: 'query',
            description: 'The order you want to retrieve the objects.',
            required: false,
            schema: { type: 'boolean' },
            example: true,
          },
        }),
      batchUids: z
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
            name: 'batchUids',
            in: 'query',
            description:
              "Permits to filter tasks by their batch uid. By default, when the `batchUids` query parameter is not set, all task uids are returned. It's possible to specify several batch uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'integer', format: 'u-int32', minimum: 0 },
            example: 12421,
          },
        }),
      uids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'uids',
            in: 'query',
            description:
              "Permits to filter tasks by their uid. By default, when the uids query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [231, 423, 598, '*'],
          },
        }),
      canceledBy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'canceledBy',
            in: 'query',
            description:
              "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [374, '*'],
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            description:
              "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['documentAdditionOrUpdate', '*'],
          },
        }),
      statuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            description:
              "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Status' } },
            example: ['succeeded', 'failed', 'canceled', 'enqueued', 'processing', '*'],
          },
        }),
      indexUids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexUids',
            in: 'query',
            description:
              'Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['movies', 'theater', '*'],
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return the batches',
      content: {
        'application/json': {
          schema: AllBatchesSchema,
          example: {
            results: [
              {
                uid: 2,
                details: { stopWords: ['of', 'the'] },
                progress: null,
                stats: {
                  totalNbTasks: 1,
                  status: { succeeded: 1 },
                  types: { settingsUpdate: 1 },
                  indexUids: { INDEX_NAME: 1 },
                },
                duration: 'PT0.110083S',
                startedAt: '2024-12-10T15:49:04.995321Z',
                finishedAt: '2024-12-10T15:49:05.105404Z',
              },
            ],
            total: 3,
            limit: 1,
            from: 2,
            next: 1,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['tasks.get', 'tasks.*', '*'] }],
})

export const getBatchesBatchUidRoute = createRoute({
  method: 'get',
  path: '/batches/{batchUid}',
  tags: ['Batches'],
  summary: 'Get one batch',
  description: 'Get a single batch.',
  operationId: 'get_batch',
  request: {
    params: z.object({
      batchUid: z
        .string()
        .openapi({
          param: {
            name: 'batchUid',
            in: 'path',
            description: 'The unique batch id',
            required: true,
            schema: { type: 'string' },
            example: '8685',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Return the batch',
      content: {
        'application/json': {
          schema: BatchViewSchema,
          example: {
            uid: 1,
            details: { receivedDocuments: 1, indexedDocuments: 1 },
            progress: null,
            stats: {
              totalNbTasks: 1,
              status: { succeeded: 1 },
              types: { documentAdditionOrUpdate: 1 },
              indexUids: { INDEX_NAME: 1 },
            },
            duration: 'PT0.364788S',
            startedAt: '2024-12-10T15:48:49.672141Z',
            finishedAt: '2024-12-10T15:48:50.036929Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['tasks.get', 'tasks.*', '*'] }],
})

export const postDumpsRoute = createRoute({
  method: 'post',
  path: '/dumps',
  tags: ['Dumps'],
  summary: 'Create a dump',
  description:
    'Triggers a dump creation process. Once the process is complete, a dump is created in the\n[dump directory](https://www.meilisearch.com/docs/learn/self_hosted/configure_meilisearch_at_launch#dump-directory).\nIf the dump directory does not exist yet, it will be created.',
  operationId: 'create_dump',
  responses: {
    202: {
      description: 'Dump is being created',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 0,
            indexUid: null,
            status: 'enqueued',
            type: 'DumpCreation',
            enqueuedAt: '2021-01-01T09:39:00.000000Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['dumps.create', 'dumps.*', '*'] }],
})

export const getExperimentalFeaturesRoute = createRoute({
  method: 'get',
  path: '/experimental-features',
  tags: ['Experimental features'],
  summary: 'Get all experimental features',
  description:
    'Get a list of all experimental features that can be activated via the /experimental-features route and whether or not they are currently activated.',
  operationId: 'get_features',
  responses: {
    200: {
      description: 'Experimental features are returned',
      content: {
        'application/json': {
          schema: RuntimeTogglableFeaturesSchema,
          example: {
            metrics: true,
            logsRoute: false,
            editDocumentsByFunction: false,
            containsFilter: false,
            network: false,
            getTaskDocumentsRoute: false,
            compositeEmbedders: false,
            chatCompletions: false,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['experimental_features.get', 'experimental_features.*', '*'] }],
})

export const patchExperimentalFeaturesRoute = createRoute({
  method: 'patch',
  path: '/experimental-features',
  tags: ['Experimental features'],
  summary: 'Configure experimental features',
  description: 'Activate or deactivate experimental features.',
  operationId: 'patch_features',
  responses: {
    200: {
      description: 'Experimental features are returned',
      content: {
        'application/json': {
          schema: RuntimeTogglableFeaturesSchema,
          example: {
            metrics: true,
            logsRoute: false,
            editDocumentsByFunction: false,
            containsFilter: false,
            network: false,
            getTaskDocumentsRoute: false,
            compositeEmbedders: false,
            chatCompletions: false,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['experimental_features.update', 'experimental_features.*', '*'] }],
})

export const getHealthRoute = createRoute({
  method: 'get',
  path: '/health',
  tags: ['Health'],
  summary: 'Get Health',
  description:
    'The health check endpoint enables you to periodically test the health of your Meilisearch instance.',
  operationId: 'get_health',
  responses: {
    200: {
      description: 'Instance is healthy',
      content: {
        'application/json': { schema: HealthResponseSchema, example: { status: 'available' } },
      },
    },
  },
})

export const getIndexesRoute = createRoute({
  method: 'get',
  path: '/indexes',
  tags: ['Indexes'],
  summary: 'List indexes',
  description: 'List all indexes.',
  operationId: 'list_indexes',
  request: {
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            description: 'The number of indexes to skip before starting to retrieve anything',
            required: false,
            schema: { type: 'integer', minimum: 0 },
            example: 100,
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'The number of indexes to retrieve',
            required: false,
            schema: { type: 'integer', default: 20, minimum: 0 },
            example: 1,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Indexes are returned',
      content: {
        'application/json': {
          schema: PaginationViewIndexViewSchema,
          example: {
            results: [
              {
                uid: 'movies',
                primaryKey: 'movie_id',
                createdAt: '2019-11-20T09:40:33.711324Z',
                updatedAt: '2019-11-20T09:40:33.711324Z',
              },
            ],
            limit: 1,
            offset: 0,
            total: 1,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['indexes.get', 'indexes.*', '*'] }],
})

export const postIndexesRoute = createRoute({
  method: 'post',
  path: '/indexes',
  tags: ['Indexes'],
  summary: 'Create index',
  description: 'Create an index.',
  operationId: 'create_index',
  request: {
    body: { content: { 'application/json': { schema: IndexCreateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'indexCreation',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['indexes.create', 'indexes.*', '*'] }],
})

export const getIndexesIndexUidRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}',
  tags: ['Indexes'],
  summary: 'Get index',
  description: 'Get information about an index.',
  operationId: 'get_index',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The index is returned',
      content: {
        'application/json': {
          schema: IndexViewSchema,
          example: {
            uid: 'movies',
            primaryKey: 'movie_id',
            createdAt: '2019-11-20T09:40:33.711324Z',
            updatedAt: '2019-11-20T09:40:33.711324Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['indexes.get', 'indexes.*', '*'] }],
})

export const deleteIndexesIndexUidRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}',
  tags: ['Indexes'],
  summary: 'Delete index',
  description: 'Delete an index.',
  operationId: 'delete_index',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 0,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'indexDeletion',
            enqueuedAt: '2021-01-01T09:39:00.000000Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['indexes.delete', 'indexes.*', '*'] }],
})

export const patchIndexesIndexUidRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexUid}',
  tags: ['Indexes'],
  summary: 'Update index',
  description:
    "Update the `primaryKey` of an index.\nReturn an error if the index doesn't exists yet or if it contains documents.",
  operationId: 'update_index',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: UpdateIndexRequestSchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 0,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'indexUpdate',
            enqueuedAt: '2021-01-01T09:39:00.000000Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['indexes.update', 'indexes.*', '*'] }],
})

export const postIndexesIndexUidDeleteBatchRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/delete-batch',
  tags: ['Documents'],
  summary: 'Delete documents by batch',
  description: 'Delete a set of documents based on an array of document ids.',
  operationId: 'delete_documents_batch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.any()) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentAdditionOrUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.delete', 'documents.*', '*'] }],
})

export const getIndexesIndexUidDocumentsRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/documents',
  tags: ['Documents'],
  summary: 'Get documents',
  description: 'Get documents by batches.',
  operationId: 'get_documents',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    query: z.object({
      offset: z
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
            name: 'offset',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      limit: z
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
            name: 'limit',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      retrieveVectors: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'retrieveVectors',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
      ids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ids',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'filter',
            in: 'query',
            required: false,
            schema: { type: 'string' },
            example: 'popularity > 1000',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The documents are returned',
      content: {
        'application/json': {
          schema: PaginationViewValueSchema,
          example: {
            results: [
              {
                id: 25684,
                title: 'American Ninja 5',
                poster: 'https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg',
                overview:
                  'When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja.',
                release_date: 725846400,
              },
              {
                id: 45881,
                title: 'The Bridge of San Luis Rey',
                poster: 'https://image.tmdb.org/t/p/w500/4X7quIcdkc24Cveg5XdpfRqxtYA.jpg',
                overview:
                  "The Bridge of San Luis Rey is American author Thornton Wilder's second novel, first published in 1927 to worldwide acclaim. It tells the story of several interrelated people who die in the collapse of an Inca rope-fiber suspension bridge in Peru, and the events that lead up to their being on the bridge.[ A friar who has witnessed the tragic accident then goes about inquiring into the lives of the victims, seeking some sort of cosmic answer to the question of why each had to die. The novel won the Pulitzer Prize in 1928.",
                release_date: 1072915200,
              },
            ],
            limit: 20,
            offset: 0,
            total: 2,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.get', 'documents.*', '*'] }],
})

export const putIndexesIndexUidDocumentsRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/documents',
  tags: ['Documents'],
  summary: 'Add or update documents',
  description:
    'Add a list of documents or update them if they already exist.\nIf you send an already existing document (same id) the old document will be only partially updated according to the fields of the new document. Thus, any fields not present in the new document are kept and remained unchanged.\nTo completely overwrite a document, see Add or replace documents route.\n> info\n> If the provided index does not exist, it will be created.\n> info\n> Use the reserved `_geo` object to add geo coordinates to a document. `_geo` is an object made of `lat` and `lng` field.\n>\n> When the vectorStore feature is enabled you can use the reserved `_vectors` field in your documents.\n> It can accept an array of floats, multiple arrays of floats in an outer array or an object.\n> This object accepts keys corresponding to the different embedders defined your index settings.',
  operationId: 'update_documents',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    query: z.object({
      primaryKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primaryKey',
            in: 'query',
            description:
              'The primary key of the documents. primaryKey is optional. If you want to set the primary key of your index through this route,\nit only has to be done the first time you add documents to the index. After which it will be ignored if given.',
            required: false,
            schema: { type: 'string' },
            example: 'id',
          },
        }),
      csvDelimiter: z
        .string()
        .default(',')
        .openapi({
          param: {
            name: 'csvDelimiter',
            in: 'query',
            description: 'Customize the csv delimiter when importing CSV documents.',
            required: true,
            schema: { type: 'string', default: ',' },
            example: ';',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.any() } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentAdditionOrUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.add', 'documents.*', '*'] }],
})

export const postIndexesIndexUidDocumentsRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/documents',
  tags: ['Documents'],
  summary: 'Add or replace documents',
  description:
    'Add a list of documents or replace them if they already exist.\n\nIf you send an already existing document (same id) the whole existing document will be overwritten by the new document. Fields previously in the document not present in the new document are removed.\n\nFor a partial update of the document see Add or update documents route.\n> info\n> If the provided index does not exist, it will be created.\n> info\n> Use the reserved `_geo` object to add geo coordinates to a document. `_geo` is an object made of `lat` and `lng` field.\n>\n> When the vectorStore feature is enabled you can use the reserved `_vectors` field in your documents.\n> It can accept an array of floats, multiple arrays of floats in an outer array or an object.\n> This object accepts keys corresponding to the different embedders defined your index settings.',
  operationId: 'replace_documents',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    query: z.object({
      primaryKey: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'primaryKey',
            in: 'query',
            description:
              'The primary key of the documents. primaryKey is optional. If you want to set the primary key of your index through this route,\nit only has to be done the first time you add documents to the index. After which it will be ignored if given.',
            required: false,
            schema: { type: 'string' },
            example: 'id',
          },
        }),
      csvDelimiter: z
        .string()
        .default(',')
        .openapi({
          param: {
            name: 'csvDelimiter',
            in: 'query',
            description: 'Customize the csv delimiter when importing CSV documents.',
            required: true,
            schema: { type: 'string', default: ',' },
            example: ';',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.any() } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentAdditionOrUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.add', 'documents.*', '*'] }],
})

export const deleteIndexesIndexUidDocumentsRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/documents',
  tags: ['Documents'],
  summary: 'Delete all documents',
  description: 'Delete all documents in the specified index.',
  operationId: 'clear_all_documents',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentDeletion',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.delete', 'documents.*', '*'] }],
})

export const postIndexesIndexUidDocumentsDeleteRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/documents/delete',
  tags: ['Documents'],
  summary: 'Delete documents by filter',
  description: 'Delete a set of documents based on a filter.',
  operationId: 'delete_documents_by_filter',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DocumentDeletionByFilterSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentDeletion',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.delete', 'documents.*', '*'] }],
})

export const postIndexesIndexUidDocumentsEditRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/documents/edit',
  tags: ['Documents'],
  summary: 'Edit documents by function.',
  description:
    'Use a [RHAI function](https://rhai.rs/book/engine/hello-world.html) to edit one or more documents directly in Meilisearch.',
  operationId: 'edit_documents_by_function',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: DocumentEditionByFunctionSchema } },
      required: true,
    },
  },
  responses: {
    202: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentDeletion',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.*', '*'] }],
})

export const postIndexesIndexUidDocumentsFetchRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/documents/fetch',
  tags: ['Documents'],
  summary: 'Get documents with POST',
  description: 'Get a set of documents.',
  operationId: 'documents_by_query_post',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: BrowseQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: PaginationViewValueSchema,
          example: {
            results: [
              {
                title: 'The Travels of Ibn Battuta',
                genres: ['Travel', 'Adventure'],
                language: 'English',
                rating: 4.5,
              },
              {
                title: 'Pride and Prejudice',
                genres: ['Classics', 'Fiction', 'Romance', 'Literature'],
                language: 'English',
                rating: 4,
              },
            ],
            offset: 0,
            limit: 2,
            total: 5,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.delete', 'documents.*', '*'] }],
})

export const getIndexesIndexUidDocumentsDocumentIdRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/documents/{documentId}',
  tags: ['Documents'],
  summary: 'Get one document',
  description: 'Get one document from its primary key.',
  operationId: 'get_document',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            in: 'path',
            description: 'The document identifier',
            required: true,
            schema: { type: 'string' },
            example: '85087',
          },
        }),
    }),
    query: z.object({
      fields: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'fields',
            in: 'query',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      retrieveVectors: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'retrieveVectors',
            in: 'query',
            required: false,
            schema: { type: 'boolean' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The document is returned',
      content: {
        'application/json': {
          schema: z.any(),
          example: {
            id: 25684,
            title: 'American Ninja 5',
            poster: 'https://image.tmdb.org/t/p/w1280/iuAQVI4mvjI83wnirpD8GVNRVuY.jpg',
            overview:
              'When a scientists daughter is kidnapped, American Ninja, attempts to find her, but this time he teams up with a youngster he has trained in the ways of the ninja.',
            release_date: 725846400,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Document not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Document `a` not found.',
            code: 'document_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#document_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.get', 'documents.*', '*'] }],
})

export const deleteIndexesIndexUidDocumentsDocumentIdRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/documents/{documentId}',
  tags: ['Documents'],
  summary: 'Delete a document',
  description: 'Delete a single document by id.',
  operationId: 'delete_document',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
      documentId: z
        .string()
        .openapi({
          param: {
            name: 'documentId',
            in: 'path',
            description: 'Document Identifier',
            required: true,
            schema: { type: 'string' },
            example: '853',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'documentAdditionOrUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['documents.delete', 'documents.*', '*'] }],
})

export const postIndexesIndexUidFacetSearchRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/facet-search',
  tags: ['Facet Search'],
  summary: 'Perform a facet search',
  description: 'Search for a facet value within a given facet.',
  operationId: 'search',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FacetSearchQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The documents are returned',
      content: {
        'application/json': {
          schema: SearchResultSchema,
          example: {
            hits: [
              {
                id: 2770,
                title: 'American Pie 2',
                poster: 'https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg',
                overview:
                  'The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…',
                release_date: 997405200,
              },
              {
                id: 190859,
                title: 'American Sniper',
                poster: 'https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg',
                overview:
                  'U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…',
                release_date: 1418256000,
              },
            ],
            offset: 0,
            limit: 2,
            estimatedTotalHits: 976,
            processingTimeMs: 35,
            query: 'american ',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const getIndexesIndexUidSearchRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/search',
  tags: ['Indexes', 'Search'],
  summary: 'Search an index with GET',
  description: 'Search for documents matching a specific query in the given index.',
  operationId: 'search_with_url_query',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    query: z.object({
      q: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'q', in: 'query', required: false, schema: { type: 'string' } },
        }),
      vector: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.float32(),
            ),
          ),
        )
        .openapi({
          param: {
            name: 'vector',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'number', format: 'float' } },
            explode: false,
          },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 0, minimum: 0 },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 20, minimum: 0 },
          },
        }),
      page: z
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
            name: 'page',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      hitsPerPage: z
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
            name: 'hitsPerPage',
            in: 'query',
            required: false,
            schema: { type: 'integer', minimum: 0 },
          },
        }),
      attributesToRetrieve: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'attributesToRetrieve',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
            explode: false,
          },
        }),
      retrieveVectors: z
        .stringbool()
        .openapi({
          param: {
            name: 'retrieveVectors',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      attributesToCrop: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'attributesToCrop',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
            explode: false,
          },
        }),
      cropLength: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(10)
        .openapi({
          param: {
            name: 'cropLength',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 10, minimum: 0 },
          },
        }),
      attributesToHighlight: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'attributesToHighlight',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
            explode: false,
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filter', in: 'query', required: false, schema: { type: 'string' } },
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'sort', in: 'query', required: false, schema: { type: 'string' } },
        }),
      distinct: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'distinct', in: 'query', required: false, schema: { type: 'string' } },
        }),
      showMatchesPosition: z
        .stringbool()
        .openapi({
          param: {
            name: 'showMatchesPosition',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      showRankingScore: z
        .stringbool()
        .openapi({
          param: {
            name: 'showRankingScore',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      showRankingScoreDetails: z
        .stringbool()
        .openapi({
          param: {
            name: 'showRankingScoreDetails',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      facets: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'facets',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
            explode: false,
          },
        }),
      highlightPreTag: z
        .string()
        .default('<em>')
        .openapi({
          param: {
            name: 'highlightPreTag',
            in: 'query',
            required: true,
            schema: { type: 'string', default: '<em>' },
          },
        }),
      highlightPostTag: z
        .string()
        .default('</em>')
        .openapi({
          param: {
            name: 'highlightPostTag',
            in: 'query',
            required: true,
            schema: { type: 'string', default: '</em>' },
          },
        }),
      cropMarker: z
        .string()
        .default('…')
        .openapi({
          param: {
            name: 'cropMarker',
            in: 'query',
            required: true,
            schema: { type: 'string', default: '…' },
          },
        }),
      matchingStrategy: MatchingStrategySchema.openapi({
        param: {
          name: 'matchingStrategy',
          in: 'query',
          required: true,
          schema: { $ref: '#/components/schemas/MatchingStrategy' },
        },
      }),
      attributesToSearchOn: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'attributesToSearchOn',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
            explode: false,
          },
        }),
      hybridEmbedder: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'hybridEmbedder',
            in: 'query',
            required: false,
            schema: { type: 'string' },
          },
        }),
      hybridSemanticRatio: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            name: 'hybridSemanticRatio',
            in: 'query',
            required: true,
            schema: { type: 'number', format: 'float' },
          },
        }),
      rankingScoreThreshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .openapi({
          param: {
            name: 'rankingScoreThreshold',
            in: 'query',
            required: true,
            schema: { type: 'number', format: 'float' },
          },
        }),
      locales: z
        .preprocess(
          (val) =>
            val === undefined
              ? val
              : (Array.isArray(val) ? val : [val]).flatMap((item) =>
                  typeof item === 'string' ? item.split(',') : [item],
                ),
          z.array(LocaleSchema),
        )
        .openapi({
          param: {
            name: 'locales',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Locale' } },
            explode: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The documents are returned',
      content: {
        'application/json': {
          schema: SearchResultSchema,
          example: {
            hits: [
              {
                id: 2770,
                title: 'American Pie 2',
                poster: 'https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg',
                overview:
                  'The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…',
                release_date: 997405200,
              },
              {
                id: 190859,
                title: 'American Sniper',
                poster: 'https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg',
                overview:
                  'U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…',
                release_date: 1418256000,
              },
            ],
            offset: 0,
            limit: 2,
            estimatedTotalHits: 976,
            processingTimeMs: 35,
            query: 'american ',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const postIndexesIndexUidSearchRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/search',
  tags: ['Indexes', 'Search'],
  summary: 'Search with POST',
  description: 'Search for documents matching a specific query in the given index.',
  operationId: 'search_with_post',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SearchQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The documents are returned',
      content: {
        'application/json': {
          schema: SearchResultSchema,
          example: {
            hits: [
              {
                id: 2770,
                title: 'American Pie 2',
                poster: 'https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg',
                overview:
                  'The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…',
                release_date: 997405200,
              },
              {
                id: 190859,
                title: 'American Sniper',
                poster: 'https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg',
                overview:
                  'U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…',
                release_date: 1418256000,
              },
            ],
            offset: 0,
            limit: 2,
            estimatedTotalHits: 976,
            processingTimeMs: 35,
            query: 'american ',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const getIndexesIndexUidSettingsRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings',
  tags: ['Settings'],
  summary: 'All settings',
  description:
    "This route allows you to retrieve, configure, or reset all of an index's settings at once.",
  operationId: 'get_all',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Settings are returned',
      content: { 'application/json': { schema: SettingsUncheckedSchema, example: {} } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings',
  tags: ['Settings'],
  summary: 'Reset settings',
  description: 'Reset all the settings of an index to their default value.',
  operationId: 'delete_all',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const patchIndexesIndexUidSettingsRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexUid}/settings',
  tags: ['Settings'],
  summary: 'Update settings',
  description:
    'Update the settings of an index.\nPassing null to an index setting will reset it to its default value.\nUpdates in the settings route are partial. This means that any parameters not provided in the body will be left unchanged.\nIf the provided index does not exist, it will be created.',
  operationId: 'update_all',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SettingsUncheckedSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsChatRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/chat',
  tags: ['Settings'],
  summary: 'Get chat',
  description: 'Get an user defined chat',
  operationId: 'getchat',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'chat is returned',
      content: { 'application/json': { schema: ChatSettingsSchema, example: {} } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsChatRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/chat',
  tags: ['Settings'],
  summary: 'Update chat',
  description: "Update an index's user defined chat",
  operationId: 'putchat',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChatSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsChatRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/chat',
  tags: ['Settings'],
  summary: 'Reset chat',
  description: "Reset an index's chat to its default value",
  operationId: 'deletechat',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: ChatSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsDictionaryRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/dictionary',
  tags: ['Settings'],
  summary: 'Get dictionary',
  description: 'Get an user defined dictionary',
  operationId: 'getdictionary',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'dictionary is returned',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: [],
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsDictionaryRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/dictionary',
  tags: ['Settings'],
  summary: 'Update dictionary',
  description: "Update an index's user defined dictionary",
  operationId: 'putdictionary',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsDictionaryRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/dictionary',
  tags: ['Settings'],
  summary: 'Reset dictionary',
  description: "Reset an index's dictionary to its default value",
  operationId: 'deletedictionary',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsDisplayedAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/displayed-attributes',
  tags: ['Settings'],
  summary: 'Get displayedAttributes',
  description: 'Get an user defined displayedAttributes',
  operationId: 'getdisplayedAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'displayedAttributes is returned',
      content: { 'application/json': { schema: z.array(z.string()), example: [] } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsDisplayedAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/displayed-attributes',
  tags: ['Settings'],
  summary: 'Update displayedAttributes',
  description: "Update an index's user defined displayedAttributes",
  operationId: 'putdisplayedAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsDisplayedAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/displayed-attributes',
  tags: ['Settings'],
  summary: 'Reset displayedAttributes',
  description: "Reset an index's displayedAttributes to its default value",
  operationId: 'deletedisplayedAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsDistinctAttributeRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/distinct-attribute',
  tags: ['Settings'],
  summary: 'Get distinctAttribute',
  description: 'Get an user defined distinctAttribute',
  operationId: 'getdistinctAttribute',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'distinctAttribute is returned',
      content: { 'application/json': { schema: z.string(), example: '' } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsDistinctAttributeRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/distinct-attribute',
  tags: ['Settings'],
  summary: 'Update distinctAttribute',
  description: "Update an index's user defined distinctAttribute",
  operationId: 'putdistinctAttribute',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsDistinctAttributeRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/distinct-attribute',
  tags: ['Settings'],
  summary: 'Reset distinctAttribute',
  description: "Reset an index's distinctAttribute to its default value",
  operationId: 'deletedistinctAttribute',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.string() } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsEmbeddersRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/embedders',
  tags: ['Settings'],
  summary: 'Get embedders',
  description: 'Get an user defined embedders',
  operationId: 'getembedders',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'embedders is returned',
      content: {
        'application/json': {
          schema: z.record(z.string(), SettingEmbeddingSettingsSchema),
          example: {},
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsEmbeddersRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/embedders',
  tags: ['Settings'],
  summary: 'Reset embedders',
  description: "Reset an index's embedders to its default value",
  operationId: 'deleteembedders',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.record(z.string(), SettingEmbeddingSettingsSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const patchIndexesIndexUidSettingsEmbeddersRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexUid}/settings/embedders',
  tags: ['Settings'],
  summary: 'Update embedders',
  description: "Update an index's user defined embedders",
  operationId: 'patchembedders',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': { schema: z.record(z.string(), SettingEmbeddingSettingsSchema) },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsFacetSearchRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/facet-search',
  tags: ['Settings'],
  summary: 'Get facetSearch',
  description: 'Get an user defined facetSearch',
  operationId: 'getfacetSearch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'facetSearch is returned',
      content: { 'application/json': { schema: z.boolean(), example: false } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsFacetSearchRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/facet-search',
  tags: ['Settings'],
  summary: 'Update facetSearch',
  description: "Update an index's user defined facetSearch",
  operationId: 'putfacetSearch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.boolean() } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsFacetSearchRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/facet-search',
  tags: ['Settings'],
  summary: 'Reset facetSearch',
  description: "Reset an index's facetSearch to its default value",
  operationId: 'deletefacetSearch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.boolean() } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsFacetingRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/faceting',
  tags: ['Settings'],
  summary: 'Get faceting',
  description: 'Get an user defined faceting',
  operationId: 'getfaceting',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'faceting is returned',
      content: { 'application/json': { schema: FacetingSettingsSchema, example: {} } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsFacetingRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/faceting',
  tags: ['Settings'],
  summary: 'Reset faceting',
  description: "Reset an index's faceting to its default value",
  operationId: 'deletefaceting',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FacetingSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const patchIndexesIndexUidSettingsFacetingRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexUid}/settings/faceting',
  tags: ['Settings'],
  summary: 'Update faceting',
  description: "Update an index's user defined faceting",
  operationId: 'patchfaceting',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: FacetingSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsFilterableAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/filterable-attributes',
  tags: ['Settings'],
  summary: 'Get filterableAttributes',
  description: 'Get an user defined filterableAttributes',
  operationId: 'getfilterableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'filterableAttributes is returned',
      content: {
        'application/json': { schema: z.array(FilterableAttributesRuleSchema), example: [] },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsFilterableAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/filterable-attributes',
  tags: ['Settings'],
  summary: 'Update filterableAttributes',
  description: "Update an index's user defined filterableAttributes",
  operationId: 'putfilterableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(FilterableAttributesRuleSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsFilterableAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/filterable-attributes',
  tags: ['Settings'],
  summary: 'Reset filterableAttributes',
  description: "Reset an index's filterableAttributes to its default value",
  operationId: 'deletefilterableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(FilterableAttributesRuleSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsLocalizedAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/localized-attributes',
  tags: ['Settings'],
  summary: 'Get localizedAttributes',
  description: 'Get an user defined localizedAttributes',
  operationId: 'getlocalizedAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'localizedAttributes is returned',
      content: {
        'application/json': { schema: z.array(LocalizedAttributesRuleViewSchema), example: [] },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsLocalizedAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/localized-attributes',
  tags: ['Settings'],
  summary: 'Update localizedAttributes',
  description: "Update an index's user defined localizedAttributes",
  operationId: 'putlocalizedAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(LocalizedAttributesRuleViewSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsLocalizedAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/localized-attributes',
  tags: ['Settings'],
  summary: 'Reset localizedAttributes',
  description: "Reset an index's localizedAttributes to its default value",
  operationId: 'deletelocalizedAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(LocalizedAttributesRuleViewSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsNonSeparatorTokensRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/non-separator-tokens',
  tags: ['Settings'],
  summary: 'Get nonSeparatorTokens',
  description: 'Get an user defined nonSeparatorTokens',
  operationId: 'getnonSeparatorTokens',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'nonSeparatorTokens is returned',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: [],
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsNonSeparatorTokensRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/non-separator-tokens',
  tags: ['Settings'],
  summary: 'Update nonSeparatorTokens',
  description: "Update an index's user defined nonSeparatorTokens",
  operationId: 'putnonSeparatorTokens',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsNonSeparatorTokensRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/non-separator-tokens',
  tags: ['Settings'],
  summary: 'Reset nonSeparatorTokens',
  description: "Reset an index's nonSeparatorTokens to its default value",
  operationId: 'deletenonSeparatorTokens',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsPaginationRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/pagination',
  tags: ['Settings'],
  summary: 'Get pagination',
  description: 'Get an user defined pagination',
  operationId: 'getpagination',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'pagination is returned',
      content: { 'application/json': { schema: PaginationSettingsSchema, example: {} } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsPaginationRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/pagination',
  tags: ['Settings'],
  summary: 'Reset pagination',
  description: "Reset an index's pagination to its default value",
  operationId: 'deletepagination',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PaginationSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const patchIndexesIndexUidSettingsPaginationRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexUid}/settings/pagination',
  tags: ['Settings'],
  summary: 'Update pagination',
  description: "Update an index's user defined pagination",
  operationId: 'patchpagination',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PaginationSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsPrefixSearchRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/prefix-search',
  tags: ['Settings'],
  summary: 'Get prefixSearch',
  description: 'Get an user defined prefixSearch',
  operationId: 'getprefixSearch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'prefixSearch is returned',
      content: {
        'application/json': { schema: PrefixSearchSettingsSchema, example: 'indexingTime' },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsPrefixSearchRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/prefix-search',
  tags: ['Settings'],
  summary: 'Update prefixSearch',
  description: "Update an index's user defined prefixSearch",
  operationId: 'putprefixSearch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PrefixSearchSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsPrefixSearchRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/prefix-search',
  tags: ['Settings'],
  summary: 'Reset prefixSearch',
  description: "Reset an index's prefixSearch to its default value",
  operationId: 'deleteprefixSearch',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: PrefixSearchSettingsSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsProximityPrecisionRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/proximity-precision',
  tags: ['Settings'],
  summary: 'Get proximityPrecision',
  description: 'Get an user defined proximityPrecision',
  operationId: 'getproximityPrecision',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'proximityPrecision is returned',
      content: { 'application/json': { schema: ProximityPrecisionViewSchema, example: 'byWord' } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsProximityPrecisionRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/proximity-precision',
  tags: ['Settings'],
  summary: 'Update proximityPrecision',
  description: "Update an index's user defined proximityPrecision",
  operationId: 'putproximityPrecision',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProximityPrecisionViewSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsProximityPrecisionRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/proximity-precision',
  tags: ['Settings'],
  summary: 'Reset proximityPrecision',
  description: "Reset an index's proximityPrecision to its default value",
  operationId: 'deleteproximityPrecision',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: ProximityPrecisionViewSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsRankingRulesRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/ranking-rules',
  tags: ['Settings'],
  summary: 'Get rankingRules',
  description: 'Get an user defined rankingRules',
  operationId: 'getrankingRules',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'rankingRules is returned',
      content: { 'application/json': { schema: z.array(RankingRuleViewSchema), example: [] } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsRankingRulesRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/ranking-rules',
  tags: ['Settings'],
  summary: 'Update rankingRules',
  description: "Update an index's user defined rankingRules",
  operationId: 'putrankingRules',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RankingRuleViewSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsRankingRulesRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/ranking-rules',
  tags: ['Settings'],
  summary: 'Reset rankingRules',
  description: "Reset an index's rankingRules to its default value",
  operationId: 'deleterankingRules',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.array(RankingRuleViewSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsSearchCutoffMsRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/search-cutoff-ms',
  tags: ['Settings'],
  summary: 'Get searchCutoffMs',
  description: 'Get an user defined searchCutoffMs',
  operationId: 'getsearchCutoffMs',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'searchCutoffMs is returned',
      content: { 'application/json': { schema: z.int().min(0), example: 0 } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsSearchCutoffMsRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/search-cutoff-ms',
  tags: ['Settings'],
  summary: 'Update searchCutoffMs',
  description: "Update an index's user defined searchCutoffMs",
  operationId: 'putsearchCutoffMs',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.int().min(0) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsSearchCutoffMsRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/search-cutoff-ms',
  tags: ['Settings'],
  summary: 'Reset searchCutoffMs',
  description: "Reset an index's searchCutoffMs to its default value",
  operationId: 'deletesearchCutoffMs',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'text/plain': { schema: z.int().min(0) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsSearchableAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/searchable-attributes',
  tags: ['Settings'],
  summary: 'Get searchableAttributes',
  description: 'Get an user defined searchableAttributes',
  operationId: 'getsearchableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'searchableAttributes is returned',
      content: { 'application/json': { schema: z.array(z.string()), example: [] } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsSearchableAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/searchable-attributes',
  tags: ['Settings'],
  summary: 'Update searchableAttributes',
  description: "Update an index's user defined searchableAttributes",
  operationId: 'putsearchableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsSearchableAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/searchable-attributes',
  tags: ['Settings'],
  summary: 'Reset searchableAttributes',
  description: "Reset an index's searchableAttributes to its default value",
  operationId: 'deletesearchableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: z.array(z.string()) } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsSeparatorTokensRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/separator-tokens',
  tags: ['Settings'],
  summary: 'Get separatorTokens',
  description: 'Get an user defined separatorTokens',
  operationId: 'getseparatorTokens',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'separatorTokens is returned',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: [],
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsSeparatorTokensRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/separator-tokens',
  tags: ['Settings'],
  summary: 'Update separatorTokens',
  description: "Update an index's user defined separatorTokens",
  operationId: 'putseparatorTokens',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsSeparatorTokensRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/separator-tokens',
  tags: ['Settings'],
  summary: 'Reset separatorTokens',
  description: "Reset an index's separatorTokens to its default value",
  operationId: 'deleteseparatorTokens',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsSortableAttributesRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/sortable-attributes',
  tags: ['Settings'],
  summary: 'Get sortableAttributes',
  description: 'Get an user defined sortableAttributes',
  operationId: 'getsortableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'sortableAttributes is returned',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: [],
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsSortableAttributesRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/sortable-attributes',
  tags: ['Settings'],
  summary: 'Update sortableAttributes',
  description: "Update an index's user defined sortableAttributes",
  operationId: 'putsortableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsSortableAttributesRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/sortable-attributes',
  tags: ['Settings'],
  summary: 'Reset sortableAttributes',
  description: "Reset an index's sortableAttributes to its default value",
  operationId: 'deletesortableAttributes',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsStopWordsRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/stop-words',
  tags: ['Settings'],
  summary: 'Get stopWords',
  description: 'Get an user defined stopWords',
  operationId: 'getstopWords',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'stopWords is returned',
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
          example: [],
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsStopWordsRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/stop-words',
  tags: ['Settings'],
  summary: 'Update stopWords',
  description: "Update an index's user defined stopWords",
  operationId: 'putstopWords',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsStopWordsRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/stop-words',
  tags: ['Settings'],
  summary: 'Reset stopWords',
  description: "Reset an index's stopWords to its default value",
  operationId: 'deletestopWords',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z.array(z.string()).superRefine((items, ctx) => {
            const seen = new Map()
            for (const [i, val] of items.entries()) {
              const key = JSON.stringify(val)
              if (seen.has(key)) ctx.addIssue({ code: 'custom', path: [i] })
              else seen.set(key, i)
            }
          }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsSynonymsRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/synonyms',
  tags: ['Settings'],
  summary: 'Get synonyms',
  description: 'Get an user defined synonyms',
  operationId: 'getsynonyms',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'synonyms is returned',
      content: {
        'application/json': { schema: z.record(z.string(), z.array(z.string())), example: {} },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const putIndexesIndexUidSettingsSynonymsRoute = createRoute({
  method: 'put',
  path: '/indexes/{indexUid}/settings/synonyms',
  tags: ['Settings'],
  summary: 'Update synonyms',
  description: "Update an index's user defined synonyms",
  operationId: 'putsynonyms',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.record(z.string(), z.array(z.string())) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsSynonymsRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/synonyms',
  tags: ['Settings'],
  summary: 'Reset synonyms',
  description: "Reset an index's synonyms to its default value",
  operationId: 'deletesynonyms',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: {
      content: { 'application/json': { schema: z.record(z.string(), z.array(z.string())) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSettingsTypoToleranceRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/settings/typo-tolerance',
  tags: ['Settings'],
  summary: 'Get typoTolerance',
  description: 'Get an user defined typoTolerance',
  operationId: 'gettypoTolerance',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'typoTolerance is returned',
      content: { 'application/json': { schema: TypoSettingsSchema, example: {} } },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.get', 'settings.*', '*'] }],
})

export const deleteIndexesIndexUidSettingsTypoToleranceRoute = createRoute({
  method: 'delete',
  path: '/indexes/{indexUid}/settings/typo-tolerance',
  tags: ['Settings'],
  summary: 'Reset typoTolerance',
  description: "Reset an index's typoTolerance to its default value",
  operationId: 'deletetypoTolerance',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TypoSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const patchIndexesIndexUidSettingsTypoToleranceRoute = createRoute({
  method: 'patch',
  path: '/indexes/{indexUid}/settings/typo-tolerance',
  tags: ['Settings'],
  summary: 'Update typoTolerance',
  description: "Update an index's user defined typoTolerance",
  operationId: 'patchtypoTolerance',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: TypoSettingsSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: 'movies',
            status: 'enqueued',
            type: 'settingsUpdate',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['settings.update', 'settings.*', '*'] }],
})

export const getIndexesIndexUidSimilarRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/similar',
  tags: ['Similar documents'],
  summary: 'Get similar documents with GET',
  description: 'Retrieve documents similar to a specific search result.',
  operationId: 'similar_get',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    query: z.object({
      id: z
        .string()
        .openapi({
          param: { name: 'id', in: 'query', required: true, schema: { type: 'string' } },
        }),
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 0, minimum: 0 },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 20, minimum: 0 },
          },
        }),
      attributes_to_retrieve: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .openapi({
          param: {
            name: 'attributes_to_retrieve',
            in: 'query',
            required: true,
            schema: { type: 'array', items: { type: 'string' } },
          },
        }),
      retrieve_vectors: z
        .stringbool()
        .openapi({
          param: {
            name: 'retrieve_vectors',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      filter: z
        .string()
        .exactOptional()
        .openapi({
          param: { name: 'filter', in: 'query', required: false, schema: { type: 'string' } },
        }),
      show_ranking_score: z
        .stringbool()
        .openapi({
          param: {
            name: 'show_ranking_score',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      show_ranking_score_details: z
        .stringbool()
        .openapi({
          param: {
            name: 'show_ranking_score_details',
            in: 'query',
            required: true,
            schema: { type: 'boolean' },
          },
        }),
      ranking_score_threshold: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.float32(),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'ranking_score_threshold',
            in: 'query',
            required: false,
            schema: { type: 'number', format: 'float' },
          },
        }),
      embedder: z
        .string()
        .openapi({
          param: { name: 'embedder', in: 'query', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The documents are returned',
      content: {
        'application/json': {
          schema: SimilarResultSchema,
          example: {
            hits: [
              {
                id: 2770,
                title: 'American Pie 2',
                poster: 'https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg',
                overview:
                  'The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…',
                release_date: 997405200,
              },
              {
                id: 190859,
                title: 'American Sniper',
                poster: 'https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg',
                overview:
                  'U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…',
                release_date: 1418256000,
              },
            ],
            offset: 0,
            limit: 2,
            estimatedTotalHits: 976,
            processingTimeMs: 35,
            query: 'american ',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const postIndexesIndexUidSimilarRoute = createRoute({
  method: 'post',
  path: '/indexes/{indexUid}/similar',
  tags: ['Similar documents'],
  summary: 'Get similar documents with POST',
  description: 'Retrieve documents similar to a specific search result.',
  operationId: 'similar_post',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: SimilarQuerySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The documents are returned',
      content: {
        'application/json': {
          schema: SimilarResultSchema,
          example: {
            hits: [
              {
                id: 2770,
                title: 'American Pie 2',
                poster: 'https://image.tmdb.org/t/p/w1280/q4LNgUnRfltxzp3gf1MAGiK5LhV.jpg',
                overview:
                  'The whole gang are back and as close as ever. They decide to get even closer by spending the summer together at a beach house. They decide to hold the biggest…',
                release_date: 997405200,
              },
              {
                id: 190859,
                title: 'American Sniper',
                poster: 'https://image.tmdb.org/t/p/w1280/svPHnYE7N5NAGO49dBmRhq0vDQ3.jpg',
                overview:
                  'U.S. Navy SEAL Chris Kyle takes his sole mission—protect his comrades—to heart and becomes one of the most lethal snipers in American history. His pinpoint accuracy not only saves countless lives but also makes him a prime…',
                release_date: 1418256000,
              },
            ],
            offset: 0,
            limit: 2,
            estimatedTotalHits: 976,
            processingTimeMs: 35,
            query: 'american ',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const getIndexesIndexUidStatsRoute = createRoute({
  method: 'get',
  path: '/indexes/{indexUid}/stats',
  tags: ['Stats'],
  summary: 'Get stats of index',
  description: 'Get the stats of an index.',
  operationId: 'get_index_stats',
  request: {
    params: z.object({
      indexUid: z
        .string()
        .openapi({
          param: {
            name: 'indexUid',
            in: 'path',
            description: 'Index Unique Identifier',
            required: true,
            schema: { type: 'string' },
            example: 'movies',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The stats of the index',
      content: {
        'application/json': {
          schema: IndexStatsSchema,
          example: {
            numberOfDocuments: 10,
            rawDocumentDbSize: 10,
            avgDocumentSize: 10,
            numberOfEmbeddings: 10,
            numberOfEmbeddedDocuments: 10,
            isIndexing: true,
            fieldDistribution: { genre: 10, author: 9 },
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'Index not found',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Index `movies` not found.',
            code: 'index_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#index_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['stats.get', 'stats.*', '*'] }],
})

export const getKeysRoute = createRoute({
  method: 'get',
  path: '/keys',
  tags: ['Keys'],
  summary: 'Get API Keys',
  description: 'List all API Keys',
  operationId: 'list_api_keys',
  request: {
    query: z.object({
      offset: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(0)
        .openapi({
          param: {
            name: 'offset',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 0, minimum: 0 },
          },
        }),
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            required: true,
            schema: { type: 'integer', default: 20, minimum: 0 },
          },
        }),
    }),
  },
  responses: {
    202: {
      description: 'List of keys',
      content: {
        'application/json': {
          schema: PaginationViewKeyViewSchema,
          example: {
            results: [
              {
                uid: '01b4bc42-eb33-4041-b481-254d00cce834',
                key: 'd0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4',
                name: 'An API Key',
                description: null,
                actions: ['documents.add'],
                indexes: ['movies'],
                expiresAt: '2022-11-12T10:00:00Z',
                createdAt: '2021-11-12T10:00:00Z',
                updatedAt: '2021-11-12T10:00:00Z',
              },
            ],
            limit: 20,
            offset: 0,
            total: 1,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['keys.get', 'keys.*', '*'] }],
})

export const postKeysRoute = createRoute({
  method: 'post',
  path: '/keys',
  tags: ['Keys'],
  summary: 'Create an API Key',
  description: 'Create an API Key.',
  operationId: 'create_api_key',
  request: {
    body: { content: { 'application/json': { schema: CreateApiKeySchema } }, required: true },
  },
  responses: {
    202: {
      description: 'Key has been created',
      content: {
        'application/json': {
          schema: KeyViewSchema,
          example: {
            uid: '01b4bc42-eb33-4041-b481-254d00cce834',
            key: 'd0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4',
            name: 'Indexing Products API key',
            description: null,
            actions: ['documents.add'],
            indexes: ['products'],
            expiresAt: '2021-11-13T00:00:00Z',
            createdAt: '2021-11-12T10:00:00Z',
            updatedAt: '2021-11-12T10:00:00Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['keys.create', 'keys.*', '*'] }],
})

export const getKeysUidOrKeyRoute = createRoute({
  method: 'get',
  path: '/keys/{uidOrKey}',
  tags: ['Keys'],
  summary: 'Get an API Key',
  description: 'Get an API key from its `uid` or its `key` field.',
  operationId: 'get_api_key',
  request: {
    params: z.object({
      uidOrKey: z
        .string()
        .openapi({
          param: {
            name: 'uidOrKey',
            in: 'path',
            description: 'The `uid` or `key` field of an existing API key',
            required: true,
            schema: { type: 'string', format: 'password' },
            example: '7b198a7f-52a0-4188-8762-9ad93cd608b2',
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'The key is returned',
      content: {
        'application/json': {
          schema: KeyViewSchema,
          example: {
            uid: '01b4bc42-eb33-4041-b481-254d00cce834',
            key: 'd0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4',
            name: 'An API Key',
            description: null,
            actions: ['documents.add'],
            indexes: ['movies'],
            expiresAt: '2022-11-12T10:00:00Z',
            createdAt: '2021-11-12T10:00:00Z',
            updatedAt: '2021-11-12T10:00:00Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['keys.get', 'keys.*', '*'] }],
})

export const deleteKeysUidOrKeyRoute = createRoute({
  method: 'delete',
  path: '/keys/{uidOrKey}',
  tags: ['Keys'],
  summary: 'Delete a key',
  description: 'Delete the specified API key.',
  operationId: 'delete_api_key',
  request: {
    params: z.object({
      uidOrKey: z
        .string()
        .openapi({
          param: {
            name: 'uidOrKey',
            in: 'path',
            description: 'The `uid` or `key` field of an existing API key',
            required: true,
            schema: { type: 'string', format: 'password' },
            example: '7b198a7f-52a0-4188-8762-9ad93cd608b2',
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The key have been removed' },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['keys.delete', 'keys.*', '*'] }],
})

export const patchKeysUidOrKeyRoute = createRoute({
  method: 'patch',
  path: '/keys/{uidOrKey}',
  tags: ['Keys'],
  summary: 'Update a Key',
  description:
    'Update the name and description of an API key.\nUpdates to keys are partial. This means you should provide only the fields you intend to update, as any fields not present in the payload will remain unchanged.',
  operationId: 'patch_api_key',
  request: {
    params: z.object({
      uidOrKey: z
        .string()
        .openapi({
          param: {
            name: 'uidOrKey',
            in: 'path',
            description: 'The `uid` or `key` field of an existing API key',
            required: true,
            schema: { type: 'string', format: 'password' },
            example: '7b198a7f-52a0-4188-8762-9ad93cd608b2',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PatchApiKeySchema } }, required: true },
  },
  responses: {
    200: {
      description: 'The key have been updated',
      content: {
        'application/json': {
          schema: KeyViewSchema,
          example: {
            uid: '01b4bc42-eb33-4041-b481-254d00cce834',
            key: 'd0552b41536279a0ad88bd595327b96f01176a60c2243e906c52ac02375f9bc4',
            name: 'An API Key',
            description: null,
            actions: ['documents.add'],
            indexes: ['movies'],
            expiresAt: '2022-11-12T10:00:00Z',
            createdAt: '2021-11-12T10:00:00Z',
            updatedAt: '2021-11-12T10:00:00Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['keys.update', 'keys.*', '*'] }],
})

export const postLogsStderrRoute = createRoute({
  method: 'post',
  path: '/logs/stderr',
  tags: ['Logs'],
  summary: 'Update target of the console logs',
  description:
    'This route lets you specify at runtime the level of the console logs outputted on stderr.',
  operationId: 'update_stderr_target',
  request: {
    body: { content: { 'application/json': { schema: UpdateStderrLogsSchema } }, required: true },
  },
  responses: {
    204: { description: 'The console logs have been updated' },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['metrics.get', 'metrics.*', '*'] }],
})

export const postLogsStreamRoute = createRoute({
  method: 'post',
  path: '/logs/stream',
  tags: ['Logs'],
  summary: 'Retrieve logs',
  description:
    "Stream logs over HTTP. The format of the logs depends on the configuration specified in the payload.\nThe logs are sent as multi-part, and the stream never stops, so make sure your clients correctly handle that.\nTo make the server stop sending you logs, you can call the `DELETE /logs/stream` route.\n\nThere can only be one listener at a timeand an error will be returned if you call this route while it's being used by another client.",
  operationId: 'get_logs',
  request: { body: { content: { 'application/json': { schema: GetLogsSchema } }, required: true } },
  responses: {
    200: {
      description: 'Logs are being returned',
      content: {
        'application/json': {
          schema: z.string(),
          example:
            '\n2024-10-08T13:35:02.643750Z  WARN HTTP request{method=GET host="localhost:7700" route=/metrics query_parameters= user_agent=HTTPie/3.2.3 status_code=400 error=Getting metrics requires enabling the `metrics` experimental feature. See https://github.com/meilisearch/product/discussions/625}: tracing_actix_web::middleware: Error encountered while processing the incoming HTTP request: ResponseError { code: 400, message: "Getting metrics requires enabling the `metrics` experimental feature. See https://github.com/meilisearch/product/discussions/625", error_code: "feature_not_enabled", error_type: "invalid_request", error_link: "https://docs.meilisearch.com/errors#feature_not_enabled" }\n2024-10-08T13:35:02.644191Z  INFO HTTP request{method=GET host="localhost:7700" route=/metrics query_parameters= user_agent=HTTPie/3.2.3 status_code=400 error=Getting metrics requires enabling the `metrics` experimental feature. See https://github.com/meilisearch/product/discussions/625}: meilisearch: close time.busy=1.66ms time.idle=658µs\n2024-10-08T13:35:18.564152Z  INFO HTTP request{method=PATCH host="localhost:7700" route=/experimental-features query_parameters= user_agent=curl/8.6.0 status_code=200}: meilisearch: close time.busy=1.17ms time.idle=127µs\n2024-10-08T13:35:23.094987Z  INFO HTTP request{method=GET host="localhost:7700" route=/metrics query_parameters= user_agent=HTTPie/3.2.3 status_code=200}: meilisearch: close time.busy=2.12ms time.idle=595µs\n',
        },
      },
    },
    400: {
      description: 'The route is already being used',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'The `/logs/stream` route is currently in use by someone else.',
            code: 'bad_request',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#bad_request',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['metrics.get', 'metrics.*', '*'] }],
})

export const deleteLogsStreamRoute = createRoute({
  method: 'delete',
  path: '/logs/stream',
  tags: ['Logs'],
  summary: 'Stop retrieving logs',
  description:
    'Call this route to make the engine stops sending logs through the `POST /logs/stream` route.',
  operationId: 'cancel_logs',
  responses: {
    204: { description: 'Logs are being returned' },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['metrics.get', 'metrics.*', '*'] }],
})

export const getMetricsRoute = createRoute({
  method: 'get',
  path: '/metrics',
  tags: ['Stats'],
  summary: 'Get prometheus metrics',
  description:
    'Retrieve metrics on the engine. See https://www.meilisearch.com/docs/learn/experimental/metrics\nCurrently, [the feature is experimental](https://www.meilisearch.com/docs/learn/experimental/overview)\nwhich means it must be enabled.',
  operationId: 'get_metrics',
  responses: {
    200: {
      description: 'The metrics of the instance',
      content: {
        'text/plain': {
          schema: z.string(),
          example:
            '\n# HELP meilisearch_db_size_bytes Meilisearch DB Size In Bytes\n# TYPE meilisearch_db_size_bytes gauge\nmeilisearch_db_size_bytes 1130496\n# HELP meilisearch_http_requests_total Meilisearch HTTP requests total\n# TYPE meilisearch_http_requests_total counter\nmeilisearch_http_requests_total{method="GET",path="/metrics",status="400"} 1\nmeilisearch_http_requests_total{method="PATCH",path="/experimental-features",status="200"} 1\n# HELP meilisearch_http_response_time_seconds Meilisearch HTTP response times\n# TYPE meilisearch_http_response_time_seconds histogram\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.005"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.01"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.025"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.05"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.075"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.1"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.25"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.5"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="0.75"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="1"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="2.5"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="5"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="7.5"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="10"} 0\nmeilisearch_http_response_time_seconds_bucket{method="GET",path="/metrics",le="+Inf"} 0\nmeilisearch_http_response_time_seconds_sum{method="GET",path="/metrics"} 0\nmeilisearch_http_response_time_seconds_count{method="GET",path="/metrics"} 0\n# HELP meilisearch_index_count Meilisearch Index Count\n# TYPE meilisearch_index_count gauge\nmeilisearch_index_count 1\n# HELP meilisearch_index_docs_count Meilisearch Index Docs Count\n# TYPE meilisearch_index_docs_count gauge\nmeilisearch_index_docs_count{index="mieli"} 2\n# HELP meilisearch_is_indexing Meilisearch Is Indexing\n# TYPE meilisearch_is_indexing gauge\nmeilisearch_is_indexing 0\n# HELP meilisearch_last_update Meilisearch Last Update\n# TYPE meilisearch_last_update gauge\nmeilisearch_last_update 1726675964\n# HELP meilisearch_nb_tasks Meilisearch Number of tasks\n# TYPE meilisearch_nb_tasks gauge\nmeilisearch_nb_tasks{kind="indexes",value="mieli"} 39\nmeilisearch_nb_tasks{kind="statuses",value="canceled"} 0\nmeilisearch_nb_tasks{kind="statuses",value="enqueued"} 0\nmeilisearch_nb_tasks{kind="statuses",value="failed"} 4\nmeilisearch_nb_tasks{kind="statuses",value="processing"} 0\nmeilisearch_nb_tasks{kind="statuses",value="succeeded"} 35\nmeilisearch_nb_tasks{kind="types",value="documentAdditionOrUpdate"} 9\nmeilisearch_nb_tasks{kind="types",value="documentDeletion"} 0\nmeilisearch_nb_tasks{kind="types",value="documentEdition"} 0\nmeilisearch_nb_tasks{kind="types",value="dumpCreation"} 0\nmeilisearch_nb_tasks{kind="types",value="indexCreation"} 0\nmeilisearch_nb_tasks{kind="types",value="indexDeletion"} 8\nmeilisearch_nb_tasks{kind="types",value="indexSwap"} 0\nmeilisearch_nb_tasks{kind="types",value="indexUpdate"} 0\nmeilisearch_nb_tasks{kind="types",value="settingsUpdate"} 22\nmeilisearch_nb_tasks{kind="types",value="snapshotCreation"} 0\nmeilisearch_nb_tasks{kind="types",value="taskCancelation"} 0\nmeilisearch_nb_tasks{kind="types",value="taskDeletion"} 0\n# HELP meilisearch_used_db_size_bytes Meilisearch Used DB Size In Bytes\n# TYPE meilisearch_used_db_size_bytes gauge\nmeilisearch_used_db_size_bytes 409600\n',
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['metrics.get', 'metrics.*', '*'] }],
})

export const postMultiSearchRoute = createRoute({
  method: 'post',
  path: '/multi-search',
  tags: ['Multi-search'],
  summary: 'Perform a multi-search',
  description:
    'Bundle multiple search queries in a single API request. Use this endpoint to search through multiple indexes at once.',
  operationId: 'multi_search_with_post',
  request: {
    body: { content: { 'application/json': { schema: FederatedSearchSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'Federated multi-search',
      content: {
        'application/json': {
          schema: FederatedSearchResultSchema,
          example: {
            hits: [
              {
                id: 42,
                title: 'Batman returns',
                overview: 'The overview of batman returns',
                _federation: { indexUid: 'movies', queriesPosition: 0 },
              },
              {
                comicsId: 'batman-killing-joke',
                description: 'This comic is really awesome',
                title: 'Batman: the killing joke',
                _federation: { indexUid: 'comics', queriesPosition: 1 },
              },
            ],
            processingTimeMs: 0,
            limit: 20,
            offset: 0,
            estimatedTotalHits: 2,
            semanticHitCount: 0,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const getNetworkRoute = createRoute({
  method: 'get',
  path: '/network',
  tags: ['Network'],
  summary: 'Get network topology',
  description: 'Get a list of all Meilisearch instances currently known to this instance.',
  operationId: 'get_network',
  responses: {
    200: {
      description: 'Known nodes are returned',
      content: {
        'application/json': {
          schema: NetworkSchema,
          example: {
            self: 'ms-0',
            remotes: {
              'ms-0': { url: 'http://localhost:7700', searchApiKey: null },
              'ms-1': { url: 'http://localhost:7701', searchApiKey: 'foo' },
              'ms-2': { url: 'http://localhost:7702', searchApiKey: 'bar' },
            },
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['network.get', 'network.*', '*'] }],
})

export const patchNetworkRoute = createRoute({
  method: 'patch',
  path: '/network',
  tags: ['Network'],
  summary: 'Configure Network',
  description: 'Add or remove nodes from network.',
  operationId: 'patch_network',
  request: { body: { content: { 'application/json': { schema: NetworkSchema } }, required: true } },
  responses: {
    200: {
      description: 'New network state is returned',
      content: {
        'application/json': {
          schema: NetworkSchema,
          example: {
            self: 'ms-0',
            remotes: {
              'ms-0': { url: 'http://localhost:7700', searchApiKey: null },
              'ms-1': { url: 'http://localhost:7701', searchApiKey: 'foo' },
              'ms-2': { url: 'http://localhost:7702', searchApiKey: 'bar' },
            },
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['network.update', 'network.*', '*'] }],
})

export const postSnapshotsRoute = createRoute({
  method: 'post',
  path: '/snapshots',
  tags: ['Snapshots'],
  summary: 'Create a snapshot',
  description:
    'Triggers a snapshot creation process. Once the process is complete, a snapshot is created in the snapshot directory. If the snapshot directory does not exist yet, it will be created.',
  operationId: 'create_snapshot',
  responses: {
    202: {
      description: 'Snapshot is being created',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 0,
            indexUid: null,
            status: 'enqueued',
            type: 'snapshotCreation',
            enqueuedAt: '2021-01-01T09:39:00.000000Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['snapshots.create', 'snapshots.*', '*'] }],
})

export const getStatsRoute = createRoute({
  method: 'get',
  path: '/stats',
  tags: ['Stats'],
  summary: 'Get stats of all indexes.',
  description: 'Get stats of all indexes.',
  operationId: 'get_stats',
  responses: {
    200: {
      description: 'The stats of the instance',
      content: {
        'application/json': {
          schema: StatsSchema,
          example: {
            databaseSize: 567,
            usedDatabaseSize: 456,
            lastUpdate: '2019-11-20T09:40:33.711324Z',
            indexes: {
              movies: {
                numberOfDocuments: 10,
                rawDocumentDbSize: 100,
                maxDocumentSize: 16,
                avgDocumentSize: 10,
                isIndexing: true,
                fieldDistribution: { genre: 10, author: 9 },
              },
            },
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['stats.get', 'stats.*', '*'] }],
})

export const postSwapIndexesRoute = createRoute({
  method: 'post',
  path: '/swap-indexes',
  tags: ['Indexes'],
  summary: 'Swap indexes',
  description:
    'Swap the documents, settings, and task history of two or more indexes. You can only swap indexes in pairs. However, a single request can swap as many index pairs as you wish.\nSwapping indexes is an atomic transaction: either all indexes are successfully swapped, or none are.\nSwapping indexA and indexB will also replace every mention of indexA by indexB and vice-versa in the task history. enqueued tasks are left unmodified.',
  operationId: 'swap_indexes',
  request: {
    body: {
      content: { 'application/json': { schema: z.array(SwapIndexesPayloadSchema) } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 3,
            indexUid: null,
            status: 'enqueued',
            type: 'indexSwap',
            enqueuedAt: '2021-08-12T10:00:00.000000Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['search', '*'] }],
})

export const getTasksRoute = createRoute({
  method: 'get',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Get all tasks',
  description:
    'Get all [tasks](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html)',
  operationId: 'get_tasks',
  request: {
    query: z.object({
      limit: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(0),
        )
        .default(20)
        .exactOptional()
        .openapi({
          param: {
            name: 'limit',
            in: 'query',
            description: 'Maximum number of results to return.',
            required: false,
            schema: { type: 'integer', format: 'u-int32', default: 20, minimum: 0 },
            example: 12,
          },
        }),
      from: z
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
            name: 'from',
            in: 'query',
            description: 'Fetch the next set of results from the given uid.',
            required: false,
            schema: { type: 'integer', format: 'u-int32', minimum: 0 },
            example: 12421,
          },
        }),
      reverse: z
        .stringbool()
        .exactOptional()
        .openapi({
          param: {
            name: 'reverse',
            in: 'query',
            description: 'The order you want to retrieve the objects.',
            required: false,
            schema: { type: 'boolean' },
            example: true,
          },
        }),
      batchUids: z
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
            name: 'batchUids',
            in: 'query',
            description:
              "Permits to filter tasks by their batch uid. By default, when the `batchUids` query parameter is not set, all task uids are returned. It's possible to specify several batch uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'integer', format: 'u-int32', minimum: 0 },
            example: 12421,
          },
        }),
      uids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'uids',
            in: 'query',
            description:
              "Permits to filter tasks by their uid. By default, when the uids query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [231, 423, 598, '*'],
          },
        }),
      canceledBy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'canceledBy',
            in: 'query',
            description:
              "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [374, '*'],
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            description:
              "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['documentAdditionOrUpdate', '*'],
          },
        }),
      statuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            description:
              "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Status' } },
            example: ['succeeded', 'failed', 'canceled', 'enqueued', 'processing', '*'],
          },
        }),
      indexUids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexUids',
            in: 'query',
            description:
              'Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['movies', 'theater', '*'],
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get all tasks',
      content: {
        'application/json': {
          schema: AllTasksSchema,
          example: {
            results: [
              {
                uid: 144,
                indexUid: 'mieli',
                status: 'succeeded',
                type: 'settingsUpdate',
                canceledBy: null,
                details: { settings: { filterableAttributes: ['play_count'] } },
                error: null,
                duration: 'PT0.009330S',
                enqueuedAt: '2024-08-08T09:01:13.348471Z',
                startedAt: '2024-08-08T09:01:13.349442Z',
                finishedAt: '2024-08-08T09:01:13.358772Z',
              },
            ],
            total: 1,
            limit: 1,
            from: 144,
            next: null,
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['tasks.get', 'tasks.*', '*'] }],
})

export const deleteTasksRoute = createRoute({
  method: 'delete',
  path: '/tasks',
  tags: ['Tasks'],
  summary: 'Delete tasks',
  description:
    'Delete [tasks](https://docs.meilisearch.com/learn/advanced/asynchronous_operations.html) on filter',
  operationId: 'delete_tasks',
  request: {
    query: z.object({
      uids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'uids',
            in: 'query',
            description:
              "Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [231, 423, 598, '*'],
          },
        }),
      batchUids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'batchUids',
            in: 'query',
            description: 'Lets you filter tasks by their `batchUid`.',
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [231, 423, 598, '*'],
          },
        }),
      canceledBy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'canceledBy',
            in: 'query',
            description:
              "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [374, '*'],
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(KindSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            description:
              "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Kind' } },
            example: ['documentDeletion', '*'],
          },
        }),
      statuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            description:
              "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Status' } },
            example: ['succeeded', 'failed', 'canceled', '*'],
          },
        }),
      indexUids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexUids',
            in: 'query',
            description:
              'Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['movies', 'theater', '*'],
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'taskDeletion',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    400: {
      description: 'A filter is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'Query parameters to filter the tasks to delete are missing. Available query parameters are: `uids`, `indexUids`, `statuses`, `types`, `canceledBy`, `beforeEnqueuedAt`, `afterEnqueuedAt`, `beforeStartedAt`, `afterStartedAt`, `beforeFinishedAt`, `afterFinishedAt`.',
            code: 'missing_task_filters',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#missing_task_filters',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'The task uid does not exists',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Task :taskUid not found.',
            code: 'task_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors/#task_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['tasks.delete', 'tasks.*', '*'] }],
})

export const postTasksCancelRoute = createRoute({
  method: 'post',
  path: '/tasks/cancel',
  tags: ['Tasks'],
  summary: 'Cancel tasks',
  description:
    'Cancel enqueued and/or processing [tasks](https://www.meilisearch.com/docs/learn/async/asynchronous_operations)',
  operationId: 'cancel_tasks',
  request: {
    query: z.object({
      uids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'uids',
            in: 'query',
            description:
              "Permits to filter tasks by their uid. By default, when the `uids` query parameter is not set, all task uids are returned. It's possible to specify several uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [231, 423, 598, '*'],
          },
        }),
      batchUids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'batchUids',
            in: 'query',
            description: 'Lets you filter tasks by their `batchUid`.',
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [231, 423, 598, '*'],
          },
        }),
      canceledBy: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(
            z.preprocess(
              (val) =>
                typeof val === 'string' &&
                /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
                (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
                  ? Number(val)
                  : val,
              z.int().min(0),
            ),
          ),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'canceledBy',
            in: 'query',
            description:
              "Permits to filter tasks using the uid of the task that canceled them. It's possible to specify several task uids by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { type: 'integer', format: 'u-int32', minimum: 0 } },
            example: [374, '*'],
          },
        }),
      types: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(KindSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'types',
            in: 'query',
            description:
              "Permits to filter tasks by their related type. By default, when `types` query parameter is not set, all task types are returned. It's possible to specify several types by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Kind' } },
            example: ['documentDeletion', '*'],
          },
        }),
      statuses: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(StatusSchema),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'statuses',
            in: 'query',
            description:
              "Permits to filter tasks by their status. By default, when `statuses` query parameter is not set, all task statuses are returned. It's possible to specify several statuses by separating them with the `,` character.",
            required: false,
            schema: { type: 'array', items: { $ref: '#/components/schemas/Status' } },
            example: ['succeeded', 'failed', 'canceled', '*'],
          },
        }),
      indexUids: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            name: 'indexUids',
            in: 'query',
            description:
              'Permits to filter tasks by their related index. By default, when `indexUids` query parameter is not set, the tasks of all the indexes are returned. It is possible to specify several indexes by separating them with the `,` character.',
            required: false,
            schema: { type: 'array', items: { type: 'string' } },
            example: ['movies', 'theater', '*'],
          },
        }),
      afterEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeEnqueuedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeEnqueuedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their enqueuedAt time. Matches tasks enqueued before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeStartedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeStartedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their startedAt time. Matches tasks started before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      afterFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'afterFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished after the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
      beforeFinishedAt: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            name: 'beforeFinishedAt',
            in: 'query',
            description:
              'Permits to filter tasks based on their finishedAt time. Matches tasks finished before the given date. Supports RFC 3339 date format.',
            required: false,
            schema: { type: 'string' },
            example: ['2024-08-08T16:37:09.971Z', '*'],
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task successfully enqueued',
      content: {
        'application/json': {
          schema: SummarizedTaskViewSchema,
          example: {
            taskUid: 147,
            indexUid: null,
            status: 'enqueued',
            type: 'taskCancelation',
            enqueuedAt: '2024-08-08T17:05:55.791772Z',
          },
        },
      },
    },
    400: {
      description: 'A filter is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'Query parameters to filter the tasks to cancel are missing. Available query parameters are: `uids`, `indexUids`, `statuses`, `types`, `canceledBy`, `beforeEnqueuedAt`, `afterEnqueuedAt`, `beforeStartedAt`, `afterStartedAt`, `beforeFinishedAt`, `afterFinishedAt`.',
            code: 'missing_task_filters',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors#missing_task_filters',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'The task uid does not exists',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Task :taskUid not found.',
            code: 'task_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors/#task_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['tasks.cancel', 'tasks.*', '*'] }],
})

export const getTasksTaskUidRoute = createRoute({
  method: 'get',
  path: '/tasks/{taskUid}',
  tags: ['Tasks'],
  summary: 'Get a task',
  description: 'Get a [task](https://www.meilisearch.com/docs/learn/async/asynchronous_operations)',
  operationId: 'get_task',
  request: {
    params: z.object({
      taskUid: z
        .string()
        .openapi({
          param: {
            name: 'taskUid',
            in: 'path',
            description: 'The task identifier',
            required: true,
            schema: { type: 'string', format: 'u-int32' },
            example: 0,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Task successfully retrieved',
      content: {
        'application/json': {
          schema: TaskViewSchema,
          example: {
            uid: 1,
            indexUid: 'movies',
            status: 'succeeded',
            type: 'documentAdditionOrUpdate',
            canceledBy: null,
            details: { receivedDocuments: 79000, indexedDocuments: 79000 },
            error: null,
            duration: 'PT1S',
            enqueuedAt: '2021-01-01T09:39:00.000000Z',
            startedAt: '2021-01-01T09:39:01.000000Z',
            finishedAt: '2021-01-01T09:39:02.000000Z',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
    404: {
      description: 'The task uid does not exists',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message: 'Task :taskUid not found.',
            code: 'task_not_found',
            type: 'invalid_request',
            link: 'https://docs.meilisearch.com/errors/#task_not_found',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['tasks.get', 'tasks.*', '*'] }],
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['Version'],
  summary: 'Get version',
  description: 'Current version of Meilisearch.',
  operationId: 'get_version',
  responses: {
    200: {
      description: 'Instance is healthy',
      content: {
        'application/json': {
          schema: VersionResponseSchema,
          example: {
            commitSha: 'b46889b5f0f2f8b91438a08a358ba8f05fc09fc1',
            commitDate: '2021-07-08',
            pkgVersion: '0.23.0',
          },
        },
      },
    },
    401: {
      description: 'The authorization header is missing',
      content: {
        'application/json': {
          schema: ResponseErrorSchema,
          example: {
            message:
              'The Authorization header is missing. It must use the bearer authorization method.',
            code: 'missing_authorization_header',
            type: 'auth',
            link: 'https://docs.meilisearch.com/errors#missing_authorization_header',
          },
        },
      },
    },
  },
  security: [{ Bearer: ['version', '*'] }],
})
