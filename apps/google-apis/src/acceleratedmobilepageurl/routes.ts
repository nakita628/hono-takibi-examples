import { createRoute, z } from '@hono/zod-openapi'

const AmpUrlSchema = z
  .object({
    ampUrl: z
      .string()
      .exactOptional()
      .openapi({ description: "The AMP URL pointing to the publisher's web server." }),
    cdnAmpUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The [AMP Cache URL](/amp/cache/overview#amp-cache-url-format) pointing to the cached document in the Google AMP Cache.',
      }),
    originalUrl: z.string().exactOptional().openapi({ description: 'The original non-AMP URL.' }),
  })
  .openapi({ description: 'AMP URL response for a requested URL.', required: [] })
  .openapi('AmpUrl')

const AmpUrlErrorSchema = z
  .object({
    errorCode: z
      .enum([
        'ERROR_CODE_UNSPECIFIED',
        'INPUT_URL_NOT_FOUND',
        'NO_AMP_URL',
        'APPLICATION_ERROR',
        'URL_IS_VALID_AMP',
        'URL_IS_INVALID_AMP',
      ])
      .exactOptional()
      .openapi({ description: 'The error code of an API call.' }),
    errorMessage: z
      .string()
      .exactOptional()
      .openapi({ description: 'An optional descriptive error message.' }),
    originalUrl: z.string().exactOptional().openapi({ description: 'The original non-AMP URL.' }),
  })
  .openapi({
    description: "AMP URL Error resource for a requested URL that couldn't be found.",
    required: [],
  })
  .openapi('AmpUrlError')

const BatchGetAmpUrlsRequestSchema = z
  .object({
    lookupStrategy: z
      .enum(['FETCH_LIVE_DOC', 'IN_INDEX_DOC'])
      .exactOptional()
      .openapi({ description: 'The lookup_strategy being requested.' }),
    urls: z
      .array(z.string())
      .exactOptional()
      .openapi({
        description:
          'List of URLs to look up for the paired AMP URLs. The URLs are case-sensitive. Up to 50 URLs per lookup (see [Usage Limits](/amp/cache/reference/limits)).',
      }),
  })
  .openapi({ description: 'AMP URL request for a batch of URLs.', required: [] })
  .openapi('BatchGetAmpUrlsRequest')

const BatchGetAmpUrlsResponseSchema = z
  .object({
    ampUrls: z
      .array(AmpUrlSchema)
      .exactOptional()
      .openapi({
        description:
          'For each URL in BatchAmpUrlsRequest, the URL response. The response might not be in the same order as URLs in the batch request. If BatchAmpUrlsRequest contains duplicate URLs, AmpUrl is generated only once.',
      }),
    urlErrors: z
      .array(AmpUrlErrorSchema)
      .exactOptional()
      .openapi({ description: 'The errors for requested URLs that have no AMP URL.' }),
  })
  .openapi({ description: 'Batch AMP URL response.', required: [] })
  .openapi('BatchGetAmpUrlsResponse')

const XgafvParamsSchema = z
  .enum(['1', '2'])
  .exactOptional()
  .openapi({
    param: {
      description: 'V1 error format.',
      in: 'query',
      name: '$.xgafv',
      schema: { enum: ['1', '2'], type: 'string' },
      required: false,
    },
  })

const AccessTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth access token.',
      in: 'query',
      name: 'access_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const AltParamsSchema = z
  .enum(['json', 'media', 'proto'])
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { enum: ['json', 'media', 'proto'], type: 'string' },
      required: false,
    },
  })

const CallbackParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'JSONP',
      in: 'query',
      name: 'callback',
      schema: { type: 'string' },
      required: false,
    },
  })

const FieldsParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Selector specifying which fields to include in a partial response.',
      in: 'query',
      name: 'fields',
      schema: { type: 'string' },
      required: false,
    },
  })

const KeyParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.',
      in: 'query',
      name: 'key',
      schema: { type: 'string' },
      required: false,
    },
  })

const OauthTokenParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'OAuth 2.0 token for the current user.',
      in: 'query',
      name: 'oauth_token',
      schema: { type: 'string' },
      required: false,
    },
  })

const PrettyPrintParamsSchema = z
  .stringbool()
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { type: 'boolean' },
      required: false,
    },
  })

const QuotaUserParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description:
        'Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.',
      in: 'query',
      name: 'quotaUser',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadTypeParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Legacy upload protocol for media (e.g. "media", "multipart").',
      in: 'query',
      name: 'uploadType',
      schema: { type: 'string' },
      required: false,
    },
  })

const UploadProtocolParamsSchema = z
  .string()
  .exactOptional()
  .openapi({
    param: {
      description: 'Upload protocol for media (e.g. "raw", "multipart").',
      in: 'query',
      name: 'upload_protocol',
      schema: { type: 'string' },
      required: false,
    },
  })

export const postV1AmpUrlsBatchGetRoute = createRoute({
  method: 'post',
  path: '/v1/ampUrls:batchGet',
  tags: ['ampUrls'],
  description:
    'Returns AMP URL(s) and equivalent [AMP Cache URL(s)](/amp/cache/overview#amp-cache-url-format).',
  operationId: 'acceleratedmobilepageurl.ampUrls.batchGet',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      access_token: AccessTokenParamsSchema,
      alt: AltParamsSchema,
      callback: CallbackParamsSchema,
      fields: FieldsParamsSchema,
      key: KeyParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      uploadType: UploadTypeParamsSchema,
    }),
    body: { content: { 'application/json': { schema: BatchGetAmpUrlsRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: BatchGetAmpUrlsResponseSchema } },
    },
  },
})
