import { createRoute, z } from '@hono/zod-openapi'

const PlatformSummarySchema = z
  .object({
    betterAdsStatus: z
      .enum(['UNKNOWN', 'PASSING', 'WARNING', 'FAILING'])
      .exactOptional()
      .openapi({ description: "The site's Ad Experience Report status on this platform." }),
    enforcementTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF.',
      }),
    filterStatus: z
      .enum(['UNKNOWN', 'ON', 'OFF', 'PAUSED', 'PENDING'])
      .exactOptional()
      .openapi({
        description:
          "The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform.",
      }),
    lastChangeTime: z
      .string()
      .exactOptional()
      .openapi({
        description: "The time at which the site's status last changed on this platform.",
      }),
    region: z
      .array(z.enum(['REGION_UNKNOWN', 'REGION_A', 'REGION_B', 'REGION_C']))
      .exactOptional()
      .openapi({
        description:
          "The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions.",
      }),
    reportUrl: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.',
      }),
    underReview: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Whether the site is currently under review on this platform.' }),
  })
  .openapi({
    description: "A site's Ad Experience Report summary on a single platform.",
    required: [],
  })
  .openapi('PlatformSummary')

const SiteSummaryResponseSchema = z
  .object({
    desktopSummary: PlatformSummarySchema.exactOptional().openapi({
      description: "The site's Ad Experience Report summary on desktop.",
    }),
    mobileSummary: PlatformSummarySchema.exactOptional().openapi({
      description: "The site's Ad Experience Report summary on mobile.",
    }),
    reviewedSite: z
      .string()
      .exactOptional()
      .openapi({ description: 'The name of the reviewed site, e.g. `google.com`.' }),
  })
  .openapi({ description: 'Response message for GetSiteSummary.', required: [] })
  .openapi('SiteSummaryResponse')

const ViolatingSitesResponseSchema = z
  .object({
    violatingSites: z
      .array(SiteSummaryResponseSchema)
      .exactOptional()
      .openapi({ description: 'The list of violating sites.' }),
  })
  .openapi({ description: 'Response message for ListViolatingSites.', required: [] })
  .openapi('ViolatingSitesResponse')

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

export const getV1ViolatingSitesRoute = createRoute({
  method: 'get',
  path: '/v1/violatingSites',
  tags: ['violatingSites'],
  description: 'Lists sites that are failing in the Ad Experience Report on at least one platform.',
  operationId: 'adexperiencereport.violatingSites.list',
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
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: ViolatingSitesResponseSchema } },
    },
  },
})

export const getV1NameRoute = createRoute({
  method: 'get',
  path: '/v1/{name}',
  tags: ['sites'],
  description: "Gets a site's Ad Experience Report summary.",
  operationId: 'adexperiencereport.sites.get',
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
    params: z.object({
      name: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site}`',
            in: 'path',
            name: 'name',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: SiteSummaryResponseSchema } },
    },
  },
})
