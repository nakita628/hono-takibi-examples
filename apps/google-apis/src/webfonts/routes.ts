import { createRoute, z } from '@hono/zod-openapi'

const AxisSchema = z
  .object({
    end: z.float32().exactOptional().openapi({ description: 'maximum value' }),
    start: z.float32().exactOptional().openapi({ description: 'minimum value' }),
    tag: z.string().exactOptional().openapi({ description: 'tag name.' }),
  })
  .openapi({ description: 'Metadata for a variable font axis.', required: [] })
  .openapi('Axis')

const WebfontSchema = z
  .object({
    axes: z.array(AxisSchema).exactOptional().openapi({ description: 'Axis for variable fonts.' }),
    category: z.string().exactOptional().openapi({ description: 'The category of the font.' }),
    family: z.string().exactOptional().openapi({ description: 'The name of the font.' }),
    files: z
      .record(z.string(), z.string())
      .exactOptional()
      .openapi({
        description:
          'The font files (with all supported scripts) for each one of the available variants, as a key : value map.',
      }),
    kind: z
      .string()
      .exactOptional()
      .openapi({ description: 'This kind represents a webfont object in the webfonts service.' }),
    lastModified: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The date (format "yyyy-MM-dd") the font was modified for the last time.',
      }),
    menu: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Font URL for menu subset, a subset of the font that is enough to display the font name',
      }),
    subsets: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The scripts supported by the font.' }),
    variants: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'The available variants for the font.' }),
    version: z.string().exactOptional().openapi({ description: 'The font version.' }),
  })
  .openapi({ description: 'Metadata describing a family of fonts.', required: [] })
  .openapi('Webfont')

const WebfontListSchema = z
  .object({
    items: z
      .array(WebfontSchema)
      .exactOptional()
      .openapi({ description: 'The list of fonts currently served by the Google Fonts API.' }),
    kind: z
      .string()
      .exactOptional()
      .openapi({
        description: 'This kind represents a list of webfont objects in the webfonts service.',
      }),
  })
  .openapi({
    description: 'Response containing the list of fonts currently served by the Google Fonts API.',
    required: [],
  })
  .openapi('WebfontList')

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

export const getV1WebfontsRoute = createRoute({
  method: 'get',
  path: '/v1/webfonts',
  tags: ['webfonts'],
  description: 'Retrieves the list of fonts currently served by the Google Fonts Developer API.',
  operationId: 'webfonts.webfonts.list',
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
      capability: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.enum(['CAPABILITY_UNSPECIFIED', 'WOFF2', 'VF'])),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Controls the font urls in `Webfont.files`, by default, static ttf fonts are sent.',
            explode: true,
            in: 'query',
            name: 'capability',
            schema: {
              items: { enum: ['CAPABILITY_UNSPECIFIED', 'WOFF2', 'VF'], type: 'string' },
              type: 'array',
            },
            style: 'form',
            required: false,
          },
        }),
      family: z
        .preprocess(
          (val) => (val === undefined || Array.isArray(val) ? val : [val]),
          z.array(z.string()),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters by Webfont.family, using literal match. If not set, returns all families',
            explode: true,
            in: 'query',
            name: 'family',
            schema: { items: { type: 'string' }, type: 'array' },
            style: 'form',
            required: false,
          },
        }),
      sort: z
        .enum(['SORT_UNDEFINED', 'ALPHA', 'DATE', 'POPULARITY', 'STYLE', 'TRENDING'])
        .exactOptional()
        .openapi({
          param: {
            description: 'Enables sorting of the list.',
            in: 'query',
            name: 'sort',
            schema: {
              enum: ['SORT_UNDEFINED', 'ALPHA', 'DATE', 'POPULARITY', 'STYLE', 'TRENDING'],
              type: 'string',
            },
            required: false,
          },
        }),
      subset: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Filters by Webfont.subset, if subset is found in Webfont.subsets. If not set, returns all families.',
            in: 'query',
            name: 'subset',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: WebfontListSchema } },
    },
  },
})
