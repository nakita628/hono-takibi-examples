import { createRoute, z } from '@hono/zod-openapi'

const EmptySchema = z
  .object({})
  .openapi({
    description:
      'A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }',
  })
  .openapi('Empty')

const LicenseAssignmentSchema = z
  .object({
    etags: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    kind: z
      .string()
      .default('licensing#licenseAssignment')
      .exactOptional()
      .openapi({
        description:
          'Identifies the resource as a LicenseAssignment, which is `licensing#licenseAssignment`.',
      }),
    productId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A product's unique identifier. For more information about products in this version of the API, see Product and SKU IDs.",
      }),
    productName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display Name of the product.' }),
    selfLink: z.string().exactOptional().openapi({ description: 'Link to this page.' }),
    skuId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
      }),
    skuName: z
      .string()
      .exactOptional()
      .openapi({ description: 'Display Name of the sku of the product.' }),
    userId: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.",
      }),
  })
  .openapi({ description: 'Representation of a license assignment.', required: [] })
  .openapi('LicenseAssignment')

const LicenseAssignmentInsertSchema = z
  .object({ userId: z.string().exactOptional().openapi({ description: 'Email id of the user' }) })
  .openapi({ description: 'Representation of a license assignment.', required: [] })
  .openapi('LicenseAssignmentInsert')

const LicenseAssignmentListSchema = z
  .object({
    etag: z.string().exactOptional().openapi({ description: 'ETag of the resource.' }),
    items: z
      .array(LicenseAssignmentSchema)
      .exactOptional()
      .openapi({ description: 'The LicenseAssignments in this page of results.' }),
    kind: z
      .string()
      .default('licensing#licenseAssignmentList')
      .exactOptional()
      .openapi({ description: 'Identifies the resource as a collection of LicenseAssignments.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'The token that you must submit in a subsequent request to retrieve additional license results matching your query parameters. The `maxResults` query string is related to the `nextPageToken` since `maxResults` determines how many entries are returned on each next page.',
      }),
  })
  .openapi({ required: [] })
  .openapi('LicenseAssignmentList')

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

const Oauth2SecurityScheme = {
  description: 'Oauth 2.0 implicit authentication',
  flows: {
    implicit: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/apps.licensing':
          'View and manage G Suite licenses for your domain',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 authorizationCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/apps.licensing':
          'View and manage G Suite licenses for your domain',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const postAppsLicensingV1ProductProductIdSkuSkuIdUserRoute = createRoute({
  method: 'post',
  path: '/apps/licensing/v1/product/{productId}/sku/{skuId}/user',
  tags: ['licenseAssignments'],
  description: 'Assign a license.',
  operationId: 'licensing.licenseAssignments.insert',
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
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LicenseAssignmentInsertSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LicenseAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})

export const getAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute = createRoute({
  method: 'get',
  path: '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}',
  tags: ['licenseAssignments'],
  description: "Get a specific user's license by product SKU.",
  operationId: 'licensing.licenseAssignments.get',
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
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LicenseAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})

export const putAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute = createRoute({
  method: 'put',
  path: '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}',
  tags: ['licenseAssignments'],
  description: "Reassign a user's product SKU with a different SKU in the same product.",
  operationId: 'licensing.licenseAssignments.update',
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
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LicenseAssignmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LicenseAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})

export const deleteAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute = createRoute({
  method: 'delete',
  path: '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}',
  tags: ['licenseAssignments'],
  description: 'Revoke a license.',
  operationId: 'licensing.licenseAssignments.delete',
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
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: EmptySchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})

export const patchAppsLicensingV1ProductProductIdSkuSkuIdUserUserIdRoute = createRoute({
  method: 'patch',
  path: '/apps/licensing/v1/product/{productId}/sku/{skuId}/user/{userId}',
  tags: ['licenseAssignments'],
  description:
    "Reassign a user's product SKU with a different SKU in the same product. This method supports patch semantics.",
  operationId: 'licensing.licenseAssignments.patch',
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
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      userId: z
        .string()
        .openapi({
          param: {
            description:
              "The user's current primary email address. If the user's email address changes, use the new email address in your API requests. Since a `userId` is subject to change, do not use a `userId` value as a key for persistent data. This key could break if the current user's email address changes. If the `userId` is suspended, the license status changes.",
            in: 'path',
            name: 'userId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: { content: { 'application/json': { schema: LicenseAssignmentSchema } } },
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LicenseAssignmentSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})

export const getAppsLicensingV1ProductProductIdSkuSkuIdUsersRoute = createRoute({
  method: 'get',
  path: '/apps/licensing/v1/product/{productId}/sku/{skuId}/users',
  tags: ['licenseAssignments'],
  description: 'List all users assigned licenses for a specific product SKU.',
  operationId: 'licensing.licenseAssignments.listForProductAndSku',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.",
            in: 'query',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      skuId: z
        .string()
        .openapi({
          param: {
            description:
              "A product SKU's unique identifier. For more information about available SKUs in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'skuId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LicenseAssignmentListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})

export const getAppsLicensingV1ProductProductIdUsersRoute = createRoute({
  method: 'get',
  path: '/apps/licensing/v1/product/{productId}/users',
  tags: ['licenseAssignments'],
  description: 'List all users assigned licenses for a specific product SKU.',
  operationId: 'licensing.licenseAssignments.listForProduct',
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
      customerId: z
        .string()
        .openapi({
          param: {
            description:
              "The customer's unique ID as defined in the Admin console, such as `C00000000`. If the customer is suspended, the server returns an error.",
            in: 'query',
            name: 'customerId',
            required: true,
            schema: { type: 'string' },
          },
        }),
      maxResults: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int().min(1).max(1000),
        )
        .exactOptional()
        .openapi({
          param: {
            description:
              'The `maxResults` query string determines how many entries are returned on each page of a large response. This is an optional parameter. The value must be a positive number.',
            in: 'query',
            name: 'maxResults',
            schema: { maximum: 1000, minimum: 1, type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Token to fetch the next page of data. The `maxResults` query string is related to the `pageToken` since `maxResults` determines how many entries are returned on each page. This is an optional query string. If not specified, the server returns the first page.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      productId: z
        .string()
        .openapi({
          param: {
            description:
              "A product's unique identifier. For more information about products in this version of the API, see Products and SKUs.",
            in: 'path',
            name: 'productId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { 'application/json': { schema: LicenseAssignmentListSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/apps.licensing'],
      Oauth2c: ['https://www.googleapis.com/auth/apps.licensing'],
    },
  ],
})
