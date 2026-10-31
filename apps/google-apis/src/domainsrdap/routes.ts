import { createRoute, z } from '@hono/zod-openapi'

const HttpBodySchema = z
  .object({
    contentType: z
      .string()
      .exactOptional()
      .openapi({
        description: 'The HTTP Content-Type header value specifying the content type of the body.',
      }),
    data: z
      .string()
      .exactOptional()
      .openapi({ description: 'The HTTP request/response body as raw binary.' }),
    extensions: z
      .array(
        z.record(
          z.string(),
          z
            .any()
            .openapi({
              description: 'Properties of the object. Contains field @type with type URL.',
            }),
        ),
      )
      .exactOptional()
      .openapi({
        description:
          'Application specific response metadata. Must be set in the first response for streaming APIs.',
      }),
  })
  .openapi({
    description:
      "Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; } service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); } Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); } Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.",
    required: [],
  })
  .openapi('HttpBody')

const LinkSchema = z
  .object({
    href: z
      .string()
      .exactOptional()
      .openapi({ description: 'Target URL of a link. Example: "http://example.com/previous".' }),
    hreflang: z
      .string()
      .exactOptional()
      .openapi({ description: 'Language code of a link. Example: "en".' }),
    media: z
      .string()
      .exactOptional()
      .openapi({ description: 'Media type of the link destination. Example: "screen".' }),
    rel: z
      .string()
      .exactOptional()
      .openapi({ description: 'Relation type of a link. Example: "previous".' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of this link. Example: "title".' }),
    type: z
      .string()
      .exactOptional()
      .openapi({ description: 'Content type of the link. Example: "application/json".' }),
    value: z
      .string()
      .exactOptional()
      .openapi({
        description: 'URL giving context for the link. Example: "http://example.com/current".',
      }),
  })
  .openapi({
    description:
      'Links object defined in [section 4.2 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.2).',
    required: [],
  })
  .openapi('Link')

const NoticeSchema = z
  .object({
    description: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'Description of the notice.' }),
    links: z
      .array(LinkSchema)
      .exactOptional()
      .openapi({ description: 'Link to a document containing more information.' }),
    title: z
      .string()
      .exactOptional()
      .openapi({ description: 'Title of a notice. Example: "Terms of Service".' }),
    type: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Type values defined in [section 10.2.1 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-10.2.1) specific to a whole response: "result set truncated due to authorization", "result set truncated due to excessive load", "result set truncated due to unexplainable reasons".',
      }),
  })
  .openapi({
    description:
      'Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).',
    required: [],
  })
  .openapi('Notice')

const RdapResponseSchema = z
  .object({
    description: z.array(z.string()).exactOptional().openapi({ description: 'Error description.' }),
    errorCode: z
      .int32()
      .exactOptional()
      .openapi({ description: 'Error HTTP code. Example: "501".' }),
    jsonResponse: HttpBodySchema.exactOptional().openapi({
      description: 'HTTP response with content type set to "application/json+rdap".',
    }),
    lang: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Error language code. Error response info fields are defined in [section 6 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-6).',
      }),
    notices: z
      .array(NoticeSchema)
      .exactOptional()
      .openapi({ description: 'Notices applying to this response.' }),
    rdapConformance: z
      .array(z.string())
      .exactOptional()
      .openapi({ description: 'RDAP conformance level.' }),
    title: z.string().exactOptional().openapi({ description: 'Error title.' }),
  })
  .openapi({ description: 'Response to a general RDAP query.', required: [] })
  .openapi('RdapResponse')

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

export const getV1AutnumAutnumIdRoute = createRoute({
  method: 'get',
  path: '/v1/autnum/{autnumId}',
  tags: ['autnum'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.autnum.get',
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
      autnumId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'autnumId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})

export const getV1DomainDomainNameRoute = createRoute({
  method: 'get',
  path: '/v1/domain/{domainName}',
  tags: ['domain'],
  description: 'Look up RDAP information for a domain by name.',
  operationId: 'domainsrdap.domain.get',
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
      domainName: z
        .string()
        .openapi({
          param: {
            description: 'Full domain name to look up. Example: "example.com"',
            in: 'path',
            name: 'domainName',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
})

export const getV1DomainsRoute = createRoute({
  method: 'get',
  path: '/v1/domains',
  tags: ['v1'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.getDomains',
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
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})

export const getV1EntitiesRoute = createRoute({
  method: 'get',
  path: '/v1/entities',
  tags: ['v1'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.getEntities',
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
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})

export const getV1EntityEntityIdRoute = createRoute({
  method: 'get',
  path: '/v1/entity/{entityId}',
  tags: ['entity'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.entity.get',
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
      entityId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'entityId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})

export const getV1HelpRoute = createRoute({
  method: 'get',
  path: '/v1/help',
  tags: ['v1'],
  description: 'Get help information for the RDAP API, including links to documentation.',
  operationId: 'domainsrdap.getHelp',
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
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
})

export const getV1IpRoute = createRoute({
  method: 'get',
  path: '/v1/ip',
  tags: ['v1'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.getIp',
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
      content: { 'application/json': { schema: HttpBodySchema } },
    },
  },
})

export const getV1IpIpIdIpId1Route = createRoute({
  method: 'get',
  path: '/v1/ip/{ipId}/{ipId1}',
  tags: ['ip'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.ip.get',
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
      ipId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipId', required: true, schema: { type: 'string' } },
        }),
      ipId1: z
        .string()
        .openapi({
          param: { in: 'path', name: 'ipId1', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})

export const getV1NameserverNameserverIdRoute = createRoute({
  method: 'get',
  path: '/v1/nameserver/{nameserverId}',
  tags: ['nameserver'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.nameserver.get',
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
      nameserverId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'nameserverId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})

export const getV1NameserversRoute = createRoute({
  method: 'get',
  path: '/v1/nameservers',
  tags: ['v1'],
  description:
    'The RDAP API recognizes this command from the RDAP specification but does not support it. The response is a formatted 501 error.',
  operationId: 'domainsrdap.getNameservers',
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
      content: { 'application/json': { schema: RdapResponseSchema } },
    },
  },
})
