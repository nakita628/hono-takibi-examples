import { createRoute, z } from '@hono/zod-openapi'

const GoogleCloudPrivatecatalogV1beta1CatalogSchema = z
  .object({
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the catalog was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The description of the catalog.' }),
    displayName: z
      .string()
      .exactOptional()
      .openapi({
        description: 'Output only. The descriptive name of the catalog as it appears in UIs.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The resource name of the target catalog, in the format of\n`catalogs/{catalog_id}'.",
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the catalog was last updated.' }),
  })
  .openapi({
    description:
      'The readonly representation of a catalog computed with a given resource\ncontext.',
    required: [],
  })
  .openapi('GoogleCloudPrivatecatalogV1beta1Catalog')

const GoogleCloudPrivatecatalogV1beta1ProductSchema = z
  .object({
    assetType: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The type of the product asset. It can be one of the\nfollowing values:\n\n* `google.deploymentmanager.Template`\n* `google.cloudprivatecatalog.ListingOnly`',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the product was created.' }),
    displayMetadata: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Output only. The display metadata to describe the product.\nThe JSON schema of the metadata differs by Product.asset_type.\nWhen the type is `google.deploymentmanager.Template`, the schema is as\nfollows:\n\n```\n"$schema": http://json-schema.org/draft-04/schema#\ntype: object\nproperties:\n  name:\n    type: string\n    minLength: 1\n    maxLength: 64\n  description:\n    type: string\n    minLength: 1\n    maxLength: 2048\n  tagline:\n    type: string\n    minLength: 1\n    maxLength: 100\n  support_info:\n    type: string\n    minLength: 1\n    maxLength: 2048\n  creator:\n    type: string\n    minLength: 1\n    maxLength: 100\n  documentation:\n    type: array\n    items:\n      type: object\n      properties:\n        url:\n          type: string\n          pattern:\n          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"\n        title:\n          type: string\n          minLength: 1\n          maxLength: 64\n        description:\n          type: string\n          minLength: 1\n          maxLength: 2048\nrequired:\n- name\n- description\nadditionalProperties: false\n\n```\n\nWhen the asset type is `google.cloudprivatecatalog.ListingOnly`, the schema\nis as follows:\n\n```\n"$schema": http://json-schema.org/draft-04/schema#\ntype: object\nproperties:\n  name:\n    type: string\n    minLength: 1\n    maxLength: 64\n  description:\n    type: string\n    minLength: 1\n    maxLength: 2048\n  tagline:\n    type: string\n    minLength: 1\n    maxLength: 100\n  support_info:\n    type: string\n    minLength: 1\n    maxLength: 2048\n  creator:\n    type: string\n    minLength: 1\n    maxLength: 100\n  documentation:\n    type: array\n    items:\n      type: object\n      properties:\n        url:\n          type: string\n          pattern:\n          "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"\n        title:\n          type: string\n          minLength: 1\n          maxLength: 64\n        description:\n          type: string\n          minLength: 1\n          maxLength: 2048\n  signup_url:\n    type: string\n    pattern:\n    "^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]"\nrequired:\n- name\n- description\n- signup_url\nadditionalProperties: false\n```',
      }),
    iconUri: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The icon URI of the product.' }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The resource name of the target product, in the format of\n`products/a-z*[a-z0-9]'.\n\nA unique identifier for the product under a catalog.",
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the product was last updated.' }),
  })
  .openapi({
    description:
      'The readonly representation of a product computed with a given resource\ncontext.',
    required: [],
  })
  .openapi('GoogleCloudPrivatecatalogV1beta1Product')

const GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponseSchema = z
  .object({
    catalogs: z
      .array(GoogleCloudPrivatecatalogV1beta1CatalogSchema)
      .exactOptional()
      .openapi({ description: 'The `Catalog`s computed from the resource context.' }),
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to SearchCatalogs that\nindicates from where listing should continue.\nThis field is optional.',
      }),
  })
  .openapi({ description: 'Response message for PrivateCatalog.SearchCatalogs.', required: [] })
  .openapi('GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponse')

const GoogleCloudPrivatecatalogV1beta1SearchProductsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to SearchProducts that\nindicates from where listing should continue.\nThis field is optional.',
      }),
    products: z
      .array(GoogleCloudPrivatecatalogV1beta1ProductSchema)
      .exactOptional()
      .openapi({ description: 'The `Product` resources computed from the resource context.' }),
  })
  .openapi({ description: 'Response message for PrivateCatalog.SearchProducts.', required: [] })
  .openapi('GoogleCloudPrivatecatalogV1beta1SearchProductsResponse')

const GoogleCloudPrivatecatalogV1beta1VersionSchema = z
  .object({
    asset: z
      .record(z.string(), z.any().openapi({ description: 'Properties of the object.' }))
      .exactOptional()
      .openapi({
        description:
          'Output only. The asset which has been validated and is ready to be\nprovisioned. See\ngoogle.cloud.privatecatalogproducer.v1beta.Version.asset for details.',
      }),
    createTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the version was created.' }),
    description: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Output only. The user-supplied description of the version. Maximum of 256\ncharacters.',
      }),
    name: z
      .string()
      .exactOptional()
      .openapi({
        description:
          "Output only. The resource name of the version, in the format\n`catalogs/{catalog_id}/products/{product_id}/versions/a-z*[a-z0-9]'.\n\nA unique identifier for the version under a product.",
      }),
    updateTime: z
      .string()
      .exactOptional()
      .openapi({ description: 'Output only. The time when the version was last updated.' }),
  })
  .openapi({
    description:
      'The consumer representation of a version which is a child resource under a\n`Product` with asset data.',
    required: [],
  })
  .openapi('GoogleCloudPrivatecatalogV1beta1Version')

const GoogleCloudPrivatecatalogV1beta1SearchVersionsResponseSchema = z
  .object({
    nextPageToken: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'A pagination token returned from a previous call to SearchVersions that\nindicates from where the listing should continue.\nThis field is optional.',
      }),
    versions: z
      .array(GoogleCloudPrivatecatalogV1beta1VersionSchema)
      .exactOptional()
      .openapi({ description: 'The `Version` resources computed from the resource context.' }),
  })
  .openapi({ description: 'Response message for PrivateCatalog.SearchVersions.', required: [] })
  .openapi('GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse')

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
  .default('json')
  .exactOptional()
  .openapi({
    param: {
      description: 'Data format for response.',
      in: 'query',
      name: 'alt',
      schema: { default: 'json', enum: ['json', 'media', 'proto'], type: 'string' },
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
  .default(true)
  .exactOptional()
  .openapi({
    param: {
      description: 'Returns response with indentations and line breaks.',
      in: 'query',
      name: 'prettyPrint',
      schema: { default: true, type: 'boolean' },
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
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
      },
    },
  },
  type: 'oauth2',
}

const Oauth2cSecurityScheme = {
  description: 'Oauth 2.0 accessCode authentication',
  flows: {
    authorizationCode: {
      authorizationUrl: 'https://accounts.google.com/o/oauth2/auth',
      scopes: {
        'https://www.googleapis.com/auth/cloud-platform':
          'View and manage your data across Google Cloud Platform services',
      },
      tokenUrl: 'https://accounts.google.com/o/oauth2/token',
    },
  },
  type: 'oauth2',
}

export const getV1beta1ResourceCatalogsSearchRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}/catalogs:search',
  tags: ['organizations'],
  description:
    'Search Catalog resources that consumers have access to, within the\nscope of the consumer cloud resource hierarchy context.',
  operationId: 'cloudprivatecatalog.organizations.catalogs.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      callback: CallbackParamsSchema,
      alt: AltParamsSchema,
      key: KeyParamsSchema,
      access_token: AccessTokenParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries that are requested.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A pagination token returned from a previous call to SearchCatalogs that\nindicates where this listing should continue from.\nThis field is optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The query to filter the catalogs. The supported queries are:\n\n* Get a single catalog: `name=catalogs/{catalog_id}`',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the resource context. It can be in following formats:\n\n* `projects/{project_id}`\n* `folders/{folder_id}`\n* `organizations/{organization_id}`',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudPrivatecatalogV1beta1SearchCatalogsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceProductsSearchRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}/products:search',
  tags: ['organizations'],
  description:
    'Search Product resources that consumers have access to, within the\nscope of the consumer cloud resource hierarchy context.',
  operationId: 'cloudprivatecatalog.organizations.products.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      callback: CallbackParamsSchema,
      alt: AltParamsSchema,
      key: KeyParamsSchema,
      access_token: AccessTokenParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries that are requested.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A pagination token returned from a previous call to SearchProducts that\nindicates where this listing should continue from.\nThis field is optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The query to filter the products.\n\nThe supported queries are:\n* List products of all catalogs: empty\n* List products under a catalog: `parent=catalogs/{catalog_id}`\n* Get a product by name:\n`name=catalogs/{catalog_id}/products/{product_id}`',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the resource context. See\nSearchCatalogsRequest.resource for details.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudPrivatecatalogV1beta1SearchProductsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})

export const getV1beta1ResourceVersionsSearchRoute = createRoute({
  method: 'get',
  path: '/v1beta1/{resource}/versions:search',
  tags: ['organizations'],
  description:
    'Search Version resources that consumers have access to, within the\nscope of the consumer cloud resource hierarchy context.',
  operationId: 'cloudprivatecatalog.organizations.versions.search',
  request: {
    query: z.object({
      '$.xgafv': XgafvParamsSchema,
      oauth_token: OauthTokenParamsSchema,
      callback: CallbackParamsSchema,
      alt: AltParamsSchema,
      key: KeyParamsSchema,
      access_token: AccessTokenParamsSchema,
      upload_protocol: UploadProtocolParamsSchema,
      prettyPrint: PrettyPrintParamsSchema,
      quotaUser: QuotaUserParamsSchema,
      fields: FieldsParamsSchema,
      uploadType: UploadTypeParamsSchema,
      pageSize: z
        .preprocess(
          (val) =>
            typeof val === 'string' &&
            /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
            (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
              ? Number(val)
              : val,
          z.int(),
        )
        .exactOptional()
        .openapi({
          param: {
            description: 'The maximum number of entries that are requested.',
            in: 'query',
            name: 'pageSize',
            schema: { type: 'integer' },
            required: false,
          },
        }),
      pageToken: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'A pagination token returned from a previous call to SearchVersions\nthat indicates where this listing should continue from.\nThis field is optional.',
            in: 'query',
            name: 'pageToken',
            schema: { type: 'string' },
            required: false,
          },
        }),
      query: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The query to filter the versions. Required.\n\nThe supported queries are:\n* List versions under a product:\n`parent=catalogs/{catalog_id}/products/{product_id}`\n* Get a version by name:\n`name=catalogs/{catalog_id}/products/{product_id}/versions/{version_id}`',
            in: 'query',
            name: 'query',
            schema: { type: 'string' },
            required: false,
          },
        }),
    }),
    params: z.object({
      resource: z
        .string()
        .openapi({
          param: {
            description:
              'Required. The name of the resource context. See\nSearchCatalogsRequest.resource for details.',
            in: 'path',
            name: 'resource',
            required: true,
            schema: { type: 'string' },
            'x-reservedExpansion': true,
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful response',
      content: { '*/*': { schema: GoogleCloudPrivatecatalogV1beta1SearchVersionsResponseSchema } },
    },
  },
  security: [
    {
      Oauth2: ['https://www.googleapis.com/auth/cloud-platform'],
      Oauth2c: ['https://www.googleapis.com/auth/cloud-platform'],
    },
  ],
})
