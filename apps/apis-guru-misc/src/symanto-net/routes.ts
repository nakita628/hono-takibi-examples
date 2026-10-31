import { createRoute, z } from '@hono/zod-openapi'

const LanguageDetectionSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'id of the text.' }),
    text: z.string().openapi({ description: 'the text itself.' }),
  })
  .openapi({ required: ['text'] })
  .openapi('LanguageDetection')

const LanguageDetectionRequestSchema = z
  .array(LanguageDetectionSchema)
  .min(1)
  .max(64)
  .openapi('LanguageDetectionRequest')

const LanguagePredictedSchema = z
  .object({
    detected_language: z
      .string()
      .openapi({ description: 'the detected language_code corresponding to the input text.' }),
    id: z.string().exactOptional().openapi({ description: 'id of the post.' }),
  })
  .openapi({ required: ['detected_language'], title: 'LanguagePredicted' })
  .openapi('LanguagePredicted')

const LanguageDetectionResponseSchema = z
  .array(LanguagePredictedSchema)
  .openapi('LanguageDetectionResponse')

const PostSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'id of the post.', example: '1' }),
    language: z.string().openapi({ description: 'language_code of the text.', example: 'en' }),
    text: z
      .string()
      .openapi({ description: 'the text to be analysed.', example: 'I love the service' }),
  })
  .openapi({ required: ['language', 'text'], title: 'Post' })
  .openapi('Post')

const PredictionSchema = z
  .object({
    prediction: z.string().openapi({ description: 'the predicted label.', title: 'Prediction' }),
    probability: z
      .number()
      .openapi({ description: 'the probability of the predicted label.', title: 'Probability' }),
  })
  .openapi({ required: ['prediction', 'probability'], title: 'Prediction' })
  .openapi('Prediction')

const PostPredictedSchema = z
  .object({
    id: z.string().exactOptional().openapi({ description: 'id of the post.' }),
    predictions: z.array(PredictionSchema).openapi({ description: 'the list of predictions.' }),
  })
  .openapi({ required: ['predictions'], title: 'PostPredicted' })
  .openapi('PostPredicted')

const PostRequestSchema = z
  .array(PostSchema)
  .min(1)
  .max(32)
  .openapi({ title: 'Posts' })
  .openapi('PostRequest')

const PredictionResultsSchema = z
  .array(PostPredictedSchema)
  .openapi({ title: 'Prediction Results' })
  .openapi('PredictionResults')

const SentimentSchema = z
  .object({
    category: z.string().exactOptional(),
    end: z.int32().exactOptional(),
    negationTerm: z.string().exactOptional(),
    parentCategory: z.string().exactOptional(),
    positive: z.boolean().exactOptional(),
    scale: z.float64().exactOptional(),
    start: z.int32().exactOptional(),
    text: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Sentiment')

const TopicSchema = z
  .object({
    category: z.string().exactOptional(),
    end: z.int32().exactOptional(),
    polarity: z.float64().exactOptional(),
    start: z.int32().exactOptional(),
    text: z.string().exactOptional(),
    topic: z.string().exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('Topic')

const TopicSentimentSchema = z
  .object({
    sentence: z.string().exactOptional(),
    sentiment: SentimentSchema.exactOptional(),
    topic: TopicSchema.exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TopicSentiment')

const TopicSentimentOutputSchema = z
  .object({
    id: z.string().exactOptional(),
    language: z.string().exactOptional(),
    sentiments: z.array(SentimentSchema).exactOptional(),
    text: z.string().exactOptional(),
    topicSentiments: z.array(TopicSentimentSchema).exactOptional(),
    topics: z.array(TopicSchema).exactOptional(),
  })
  .openapi({ required: [] })
  .openapi('TopicSentimentOutput')

const TopicSentimentResponseSchema = z
  .array(TopicSentimentOutputSchema)
  .openapi('TopicSentimentResponse')

const ValidationErrorSchema = z
  .object({
    loc: z.array(z.string()).openapi({ title: 'Location' }),
    msg: z.string().openapi({ title: 'Message' }),
    type: z.string().openapi({ title: 'Error Type' }),
  })
  .openapi({ required: ['loc', 'msg', 'type'], title: 'ValidationError' })
  .openapi('ValidationError')

const ValidationErrorsSchema = z
  .object({ detail: z.array(ValidationErrorSchema).exactOptional().openapi({ title: 'Detail' }) })
  .openapi({ title: 'ValidationErrors', required: [] })
  .openapi('ValidationErrors')

const ApiKeyHeaderSecurityScheme = { in: 'header', name: 'x-api-key', type: 'apiKey' }

export const postCommunicationRoute = createRoute({
  method: 'post',
  path: '/communication',
  tags: ['Text Analysis'],
  summary: 'Communication & Tonality',
  description:
    'Identify the purpose and writing style of a written text.\n\nSupported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]\n\nReturned labels:\n* action-seeking\n* fact-oriented\n* information-seeking\n* self-revealing',
  operationId: 'communication',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'all',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PredictionResultsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: ValidationErrorsSchema } },
    },
  },
})

export const postEkmanEmotionRoute = createRoute({
  method: 'post',
  path: '/ekman-emotion',
  tags: ['Text Analysis'],
  summary: 'Emotion Analysis',
  description:
    'Detect the emotions of the text based on Ekman.\n\nSupported Langauges: [`en`, `de`, `es`]\n\nReturned labels:\n* anger\n* disgust\n* fear\n* joy\n* sadness\n* surprise\n* no-emotion',
  operationId: 'ekman-emotion',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'all',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PredictionResultsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: ValidationErrorsSchema } },
    },
  },
})

export const postEmotionRoute = createRoute({
  method: 'post',
  path: '/emotion',
  tags: ['Text Analysis'],
  summary: 'Emotion Analysis',
  description:
    'Detect the emotions of the text.\n\nSupported Langauges: [`en`, `de`, `es`]\n\nReturned labels:\n* anger\n* joy\n* love\n* sadness\n* surprise\n* uncategorized',
  operationId: 'emotion',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'all',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PredictionResultsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: ValidationErrorsSchema } },
    },
  },
})

export const postLanguageDetectionRoute = createRoute({
  method: 'post',
  path: '/language-detection',
  tags: ['Text Analysis'],
  summary: 'Language Detection',
  description:
    'Identifies what language a text is written in. Only languages that our API supports can be analyzed.\n\nReturned labels:\n* language_code of the detected language',
  operationId: 'language-detection',
  request: {
    body: { content: { 'application/json': { schema: LanguageDetectionRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: LanguageDetectionResponseSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: ValidationErrorsSchema } },
    },
  },
})

export const postPersonalityRoute = createRoute({
  method: 'post',
  path: '/personality',
  tags: ['Text Analysis'],
  summary: 'Personality Traits',
  description:
    'Predict the personality trait of author of any written text.\n\nSupported Languages: [`ar`, `de`, `en`, `es`, `fr`, `it`, `nl`, `pt`, `ru`, `tr`, `zh`]\n\nReturned labels:\n\n* emotional\n* rational',
  operationId: 'personality',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'all',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PredictionResultsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: ValidationErrorsSchema } },
    },
  },
})

export const postSentimentRoute = createRoute({
  method: 'post',
  path: '/sentiment',
  tags: ['Text Analysis'],
  summary: 'Sentiment Analysis',
  description:
    'Evaluate the overall tonality of the text.\n\nSupported Languages: [`en`, `de`, `es`]\n\nReturned labels:\n* positive\n* negative',
  operationId: 'sentiment',
  request: {
    query: z.object({
      all: z
        .stringbool()
        .default(false)
        .exactOptional()
        .openapi({
          param: {
            explode: true,
            in: 'query',
            name: 'all',
            required: false,
            schema: { default: false, type: 'boolean' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: { 'application/json': { schema: PredictionResultsSchema } },
    },
    422: {
      description: 'Validation Error',
      content: { 'application/json': { schema: ValidationErrorsSchema } },
    },
  },
})

export const postTopicSentimentRoute = createRoute({
  method: 'post',
  path: '/topic-sentiment',
  tags: ['Text Analysis'],
  summary: 'Extracts topics and sentiments and relates them.',
  operationId: 'topic-sentiment',
  request: {
    query: z.object({
      domain: z
        .enum(['Ecom', 'Employee', 'Hotel', 'Restaurant'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Provide analysis domain for better extraction (optional)',
            explode: true,
            in: 'query',
            name: 'domain',
            required: false,
            schema: { enum: ['Ecom', 'Employee', 'Hotel', 'Restaurant'], type: 'string' },
            style: 'form',
          },
        }),
    }),
    body: { content: { 'application/json': { schema: PostRequestSchema } } },
  },
  responses: {
    200: {
      description: '',
      content: { 'application/json': { schema: TopicSentimentResponseSchema } },
    },
  },
})
