import { createRoute, z } from '@hono/zod-openapi'

const DetectionsSchema = z
  .array(
    z
      .object({
        confidence: z
          .float32()
          .min(0)
          .max(1)
          .exactOptional()
          .openapi({ description: 'Confidence value', example: 0.6 }),
        language: z
          .string()
          .exactOptional()
          .openapi({ description: 'Language code', example: 'en' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Detections')

const ErrorResponseSchema = z
  .object({ error: z.string().exactOptional().openapi({ description: 'Error message' }) })
  .openapi({ required: [] })
  .openapi('ErrorResponse')

const ErrorSlowDownSchema = z
  .object({ error: z.string().exactOptional().openapi({ description: 'Reason for slow down' }) })
  .openapi({ required: [] })
  .openapi('ErrorSlowDown')

const FrontendSettingsSchema = z
  .object({
    apiKeys: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the API key database is enabled.' }),
    charLimit: z
      .int()
      .exactOptional()
      .openapi({ description: 'Character input limit for this language (-1 indicates no limit)' }),
    frontendTimeout: z
      .int()
      .exactOptional()
      .openapi({ description: 'Frontend translation timeout' }),
    keyRequired: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether an API key is required.' }),
    language: z
      .object({
        source: z
          .object({
            code: z.string().exactOptional().openapi({ description: 'Language code' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Human-readable language name (in English)' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
        target: z
          .object({
            code: z.string().exactOptional().openapi({ description: 'Language code' }),
            name: z
              .string()
              .exactOptional()
              .openapi({ description: 'Human-readable language name (in English)' }),
          })
          .exactOptional()
          .openapi({ required: [] }),
      })
      .exactOptional()
      .openapi({ required: [] }),
    suggestions: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether submitting suggestions is enabled.' }),
    supportedFilesFormat: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Supported files format' }),
  })
  .openapi({ required: [] })
  .openapi('FrontendSettings')

const LanguagesSchema = z
  .array(
    z
      .object({
        code: z.string().exactOptional().openapi({ description: 'Language code' }),
        name: z
          .string()
          .exactOptional()
          .openapi({ description: 'Human-readable language name (in English)' }),
        targets: z
          .array(z.string())
          .exactOptional()
          .openapi({ description: 'Supported target language codes' }),
      })
      .openapi({ required: [] }),
  )
  .openapi('Languages')

const SuggestResponseSchema = z
  .object({
    success: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether submission was successful' }),
  })
  .openapi({ required: [] })
  .openapi('SuggestResponse')

const TranslateSchema = z
  .object({
    translatedText: z
      .xor([z.string(), z.array(z.any())])
      .exactOptional()
      .openapi({ description: 'Translated text(s)' }),
  })
  .openapi({ required: [] })
  .openapi('Translate')

const TranslateFileSchema = z
  .object({
    translatedFileUrl: z.string().exactOptional().openapi({ description: 'Translated file url' }),
  })
  .openapi({ required: [] })
  .openapi('TranslateFile')

const PostDetectRequestBody = {
  content: {
    'application/x-www-form-urlencoded': {
      schema: z.string().openapi({ example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' }),
    },
  },
}

export const postDetectRoute = createRoute({
  method: 'post',
  path: '/detect',
  tags: ['translate'],
  summary: 'Detect the language of a single text',
  request: { body: PostDetectRequestBody },
  responses: {
    200: { description: 'Detections', content: { '*/*': { schema: DetectionsSchema } } },
    400: { description: 'Invalid request', content: { '*/*': { schema: ErrorResponseSchema } } },
    403: { description: 'Banned', content: { '*/*': { schema: ErrorResponseSchema } } },
    429: { description: 'Slow down', content: { '*/*': { schema: ErrorSlowDownSchema } } },
    500: { description: 'Detection error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const getFrontendSettingsRoute = createRoute({
  method: 'get',
  path: '/frontend/settings',
  tags: ['frontend'],
  summary: 'Retrieve frontend specific settings',
  responses: {
    200: {
      description: 'frontend settings',
      content: { '*/*': { schema: FrontendSettingsSchema } },
    },
  },
})

export const getLanguagesRoute = createRoute({
  method: 'get',
  path: '/languages',
  tags: ['translate'],
  summary: 'Retrieve list of supported languages',
  responses: {
    200: { description: 'List of languages', content: { '*/*': { schema: LanguagesSchema } } },
  },
})

export const postSuggestRoute = createRoute({
  method: 'post',
  path: '/suggest',
  tags: ['feedback'],
  summary: 'Submit a suggestion to improve a translation',
  request: {
    body: {
      content: {
        'application/x-www-form-urlencoded': { schema: z.string().openapi({ example: 'es' }) },
      },
    },
  },
  responses: {
    200: { description: 'Success', content: { '*/*': { schema: SuggestResponseSchema } } },
    403: { description: 'Not authorized', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const postTranslateRoute = createRoute({
  method: 'post',
  path: '/translate',
  tags: ['translate'],
  summary: 'Translate text from a language to another',
  request: { body: PostDetectRequestBody },
  responses: {
    200: { description: 'Translated text', content: { '*/*': { schema: TranslateSchema } } },
    400: { description: 'Invalid request', content: { '*/*': { schema: ErrorResponseSchema } } },
    403: { description: 'Banned', content: { '*/*': { schema: ErrorResponseSchema } } },
    429: { description: 'Slow down', content: { '*/*': { schema: ErrorSlowDownSchema } } },
    500: { description: 'Translation error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})

export const postTranslateFileRoute = createRoute({
  method: 'post',
  path: '/translate_file',
  tags: ['translate'],
  summary: 'Translate file from a language to another',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z.string().openapi({ example: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx' }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'Translated file', content: { '*/*': { schema: TranslateFileSchema } } },
    400: { description: 'Invalid request', content: { '*/*': { schema: ErrorResponseSchema } } },
    403: { description: 'Banned', content: { '*/*': { schema: ErrorResponseSchema } } },
    429: { description: 'Slow down', content: { '*/*': { schema: ErrorSlowDownSchema } } },
    500: { description: 'Translation error', content: { '*/*': { schema: ErrorResponseSchema } } },
  },
})
