import { createRoute, z } from '@hono/zod-openapi'

const AcmeTxtRecordSchema = z
  .object({
    digest: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Holds the ACME challenge data put in the TXT record. This will be checked to be a valid TXT record data entry.',
      }),
    fqdn: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The domain/subdomain for the record. In a request, this MAY be Unicode or Punycode. In a response, this will be in Unicode. The fqdn MUST contain the root_domain field on the request.',
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The time when this record was last updated. This will be in UTC time.',
        readOnly: true,
      }),
  })
  .openapi({
    description: 'The TXT record message that represents an ACME DNS-01 challenge.',
    required: [],
  })
  .openapi('AcmeTxtRecord')

const AcmeChallengeSetSchema = z
  .object({
    record: z
      .array(AcmeTxtRecordSchema)
      .exactOptional()
      .openapi({
        description:
          'The ACME challenges on the requested domain represented as individual TXT records.',
      }),
  })
  .openapi({
    description:
      'The up-to-date ACME challenge set on a domain for an RPC. This contains all of the ACME TXT records that exist on the domain.',
    required: [],
  })
  .openapi('AcmeChallengeSet')

const RotateChallengesRequestSchema = z
  .object({
    accessToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Required. ACME DNS access token. This is a base64 token secret that is procured from the Google Domains website. It authorizes ACME TXT record updates for a domain.',
      }),
    keepExpiredRecords: z
      .boolean()
      .exactOptional()
      .openapi({
        description: 'Keep records older than 30 days that were used for previous requests.',
      }),
    recordsToAdd: z
      .array(AcmeTxtRecordSchema)
      .exactOptional()
      .openapi({
        description:
          'ACME TXT record challenges to add. Supports multiple challenges on the same FQDN.',
      }),
    recordsToRemove: z
      .array(AcmeTxtRecordSchema)
      .exactOptional()
      .openapi({ description: 'ACME TXT record challenges to remove.' }),
  })
  .openapi({
    description:
      'The request message for the RotateChallenges RPC. Requires an access token, a root domain, and either records_to_add or records_to_remove to be populated. Records may be set for multiple subdomains at once to support SAN requests for multiple subdomains in a single domain. By default, ACME TXT record challenges that are older than 30 days will be removed. Set `keep_expired_records` to false if this behavior is undesired. There is a record maximum of 100 records per domain including expired records. Any request sent that would exceed this maximum will result in a FAILED_PRECONDITION error. NEXT ID: 6',
    required: [],
  })
  .openapi('RotateChallengesRequest')

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

export const getV1AcmeChallengeSetsRootDomainRoute = createRoute({
  method: 'get',
  path: '/v1/acmeChallengeSets/{rootDomain}',
  tags: ['acmeChallengeSets'],
  description:
    'Gets the ACME challenge set for a given domain name. Domain names must be provided in Punycode.',
  operationId: 'acmedns.acmeChallengeSets.get',
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
      rootDomain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. SLD + TLD domain name to list challenges. For example, this would be "google.com" for any FQDN under "google.com". That includes challenges for "subdomain.google.com". This MAY be Unicode or Punycode.',
            in: 'path',
            name: 'rootDomain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AcmeChallengeSetSchema } },
    },
  },
})

export const postV1AcmeChallengeSetsRootDomainRotateChallengesRoute = createRoute({
  method: 'post',
  path: '/v1/acmeChallengeSets/{rootDomain}:rotateChallenges',
  tags: ['acmeChallengeSets'],
  description:
    'Rotate the ACME challenges for a given domain name. By default, removes any challenges that are older than 30 days. Domain names must be provided in Punycode.',
  operationId: 'acmedns.acmeChallengeSets.rotateChallenges',
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
      rootDomain: z
        .string()
        .openapi({
          param: {
            description:
              'Required. SLD + TLD domain name to update records for. For example, this would be "google.com" for any FQDN under "google.com". That includes challenges for "subdomain.google.com". This MAY be Unicode or Punycode.',
            in: 'path',
            name: 'rootDomain',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: RotateChallengesRequestSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: AcmeChallengeSetSchema } },
    },
  },
})
