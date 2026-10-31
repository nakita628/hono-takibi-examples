import { createRoute, z } from '@hono/zod-openapi'

const ErrorParameterSchema = z
  .object({
    name: z.string().exactOptional().openapi({ description: 'The object of the error.' }),
    value: z.string().exactOptional().openapi({ description: 'The value of the object.' }),
  })
  .openapi({ required: [] })
  .openapi('ErrorParameter')

const ErrorSchema = z
  .object({
    category: z.string().exactOptional().openapi({ description: 'Identifies the type of erro.' }),
    domain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Name for the primary system where the error occurred. This is relevant for application errors.',
      }),
    errorId: z
      .int32()
      .exactOptional()
      .openapi({ description: 'A unique number to identify the error.' }),
    inputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    longMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'A more detailed explanation of the error.' }),
    message: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Information on how to correct the problem, in the end user's terms and language where applicable.",
      }),
    outputRefIds: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description: 'An array of request elements most closely associated to the error.',
      }),
    parameters: z
      .array(ErrorParameterSchema)
      .exactOptional()
      .openapi({
        description:
          'An array of name/value pairs that describe details the error condition. These are useful when multiple errors are returned.',
      }),
    subdomain: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Further helps indicate which subsystem the error is coming from. System subcategories include: Initialization, Serialization, Security, Monitoring, Rate Limiting, etc.',
      }),
  })
  .openapi({
    description: 'This type defines the fields that can be returned in an error.',
    required: [],
  })
  .openapi('Error')

const TranslateRequestSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>",
      }),
    text: z.array(z.string()).exactOptional().openapi({ description: 'The input text.' }),
    to: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>",
      }),
    translationContext: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The context of the translation. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/TranslationContextEnum.html'>eBay API documentation</a>",
      }),
  })
  .openapi({ required: [] })
  .openapi('TranslateRequest')

const TranslationSchema = z
  .object({
    from: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The language of the input text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>",
      }),
    originalText: z.string().exactOptional().openapi({ description: 'Original text.' }),
    to: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The language to use for the translation of th einput text. For implementation help, refer to <a href='https://developer.ebay.com/devzone/rest/api-ref/translation/types/LanguageEnum.html'>eBay API documentation</a>",
      }),
    translatedText: z.string().exactOptional().openapi({ description: 'Translated text.' }),
  })
  .openapi({ required: [] })
  .openapi('Translation')

const TranslateResponseSchema = z
  .object({
    translations: z
      .array(TranslationSchema)
      .exactOptional()
      .openapi({ description: 'The list of translations.' }),
  })
  .openapi({ required: [] })
  .openapi('TranslateResponse')

const ApiAuthSecurityScheme = {
  description:
    'The security definitions for this API. Please check individual operations for applicable scopes.',
  flows: {
    clientCredentials: {
      scopes: { 'https://api.ebay.com/oauth/api_scope': 'View public data from eBay' },
      tokenUrl: 'https://api.ebay.com/identity/v1/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postTranslateRoute = createRoute({
  method: 'post',
  path: '/translate',
  tags: ['language'],
  description: 'Translates input text inot a given language.',
  operationId: 'translate',
  request: {
    body: { content: { 'application/json': { schema: TranslateRequestSchema } }, required: true },
  },
  responses: {
    200: {
      description: 'OK',
      content: { 'application/json': { schema: TranslateResponseSchema } },
    },
    400: {
      description: 'Bad Request',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(ErrorSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
    500: {
      description: 'Internal Server Error',
      content: {
        'application/json': {
          schema: z
            .object({ errors: z.array(ErrorSchema).exactOptional() })
            .openapi({ required: [] }),
        },
      },
    },
  },
  security: [{ api_auth: ['https://api.ebay.com/oauth/api_scope'] }],
})
