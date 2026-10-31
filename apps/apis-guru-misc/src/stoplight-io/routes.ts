import { createRoute, z } from '@hono/zod-openapi'

const SharedUserSchema = z
  .object({ '': z.string().exactOptional(), username: z.string().exactOptional() })
  .openapi({ title: 'Shared User', required: [] })
  .openapi('SharedUser')

const StandarderrorSchema = z.any().openapi('Standarderror')

const TraitStandardErrors_400Response = {
  description: '',
  content: { 'application/json': { schema: StandarderrorSchema } },
}

const TraitStandardErrors_401Response = {
  description: '',
  content: { 'application/json': { schema: StandarderrorSchema } },
}

const TraitStandardErrors_404Response = {
  description: '',
  content: { 'application/json': { schema: StandarderrorSchema } },
}

const TraitStandardErrors_500Response = {
  description: '',
  content: { 'application/json': { schema: StandarderrorSchema } },
}

const AuthorizationSecurityScheme = { in: 'header', name: 'Authorization', type: 'apiKey' }

export const postVersionsPublishAnonRoute = createRoute({
  method: 'post',
  path: '/versions/publish/anon',
  summary: 'Publish Anonymous',
  description:
    'Anonymously publish to API Docs.\n\nThis endpoint will take a JSON spec or a URL to a swagger or raml spec.\n\n```\n{\n  "specData": {...}\n}\n```\n\nor\n\n```\n{\n  "url": "http://petstore.swagger.io/v2/swagger.json"\n}\n```\n\nThe spec will be published to api-docs.io anonymously, which means you will not be able to update or remove this documentation.\n\nThe response will contain a url to the published documentation.\n\n```\n{\n  "url": "https://swagger-petstore.api-docs.io/v1.0.0"\n}\n```\n\n\nThe limitations of anonymous publishing\n* Cannot update/remove the documentation\n* Cannot choose the subdomain\n* Cannot choose the version\n* Cannot add theming',
  operationId: 'POST_versions-publish-anon',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              specData: z.xor([z.object({}), z.string()]).exactOptional(),
              url: z.string().exactOptional(),
            })
            .openapi({ required: [] }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ url: z.string() }).openapi({ required: ['url'] }),
          examples: { response: { value: { url: 'https://stoplight.api-docs.io/api-v1' } } },
        },
      },
    },
    400: { description: '', content: { 'application/json': { schema: StandarderrorSchema } } },
    401: { description: '', content: { 'application/json': { schema: StandarderrorSchema } } },
    404: { description: '', content: { 'application/json': { schema: StandarderrorSchema } } },
    500: { description: '', content: { 'application/json': { schema: StandarderrorSchema } } },
  },
})

export const getVersionsVersionIdExportFormatRoute = createRoute({
  method: 'get',
  path: '/versions/{versionId}/export/{format}',
  tags: ['Versions'],
  summary: 'Export',
  description:
    'Export a version to your choice of API specification.\n\n### Allowed Formats:\n\n- oas.json\n- oas.yaml\n- raml08.yaml\n- raml10.yaml\n- stoplight.json\n- stoplight.yaml\n\nThe stoplight format actually returns OAS (Swagger 2) with x-stoplight annotations. If you are exporting with the intent on importing back into Stoplight, this export format preserves the most information.\n\n### Example URL:\n\n`https://api.stoplight.io/v1/versions/123/export/oas.json`',
  operationId: 'GET_versions-versionId-export-format',
  request: {
    params: z.object({
      versionId: z
        .string()
        .default('')
        .openapi({
          param: {
            description: 'This is the unique identifier for the version.',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { default: '', type: 'string' },
          },
        }),
      format: z
        .enum([
          'oas.json',
          'oas.yaml',
          'raml08.yaml',
          'raml10.yaml',
          'stoplight.json',
          'stoplight.yaml',
        ])
        .default('oas.json')
        .openapi({
          param: {
            description: 'The specification / format that you want to export.',
            in: 'path',
            name: 'format',
            required: true,
            schema: {
              default: 'oas.json',
              enum: [
                'oas.json',
                'oas.yaml',
                'raml08.yaml',
                'raml10.yaml',
                'stoplight.json',
                'stoplight.yaml',
              ],
              type: 'string',
            },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'text/yaml': {
          schema: z
            .xor([z.object({}), z.string()])
            .openapi({
              description: 'The specification. Returned as a string when YAML, object when JSON.',
            }),
        },
      },
    },
    401: TraitStandardErrors_401Response,
    404: TraitStandardErrors_404Response,
  },
})

export const putVersionsVersionIdImportRoute = createRoute({
  method: 'put',
  path: '/versions/{versionId}/import',
  tags: ['Versions'],
  summary: 'Import',
  description:
    'Import the given specification into an existing version. \n\n**Warning, this is a destructive action! Any resources present in both the existing version, and the specification being imported, will be overwritten.**\n\nThis endpoint is particularly useful when you manage a specification file (Swagger or RAML) outside of Stoplight, and want to keep your Stoplight API version up to date as that specification changes.\n\nBy default, a "merge" is performed when importing. If a resource exists in the specification that you are importing, and in the Stoplight API, the resource will be overwritten. If a resource exists in the Stoplight API, but not in the spefication that you are importing, the resource will be left alone (and not deleted).\n\nYou can include an optional `options` property in the request body, to indicate if you would like to perform more of a replacement (instead of a merge). The options are documented in full in the response definition below these notes.\n\nTake this request + request body for example:\n\n`PUT https://api.stoplight.io/v1/versions/123/import`\n```json\n{\n  "url": "http://petstore.swagger.io/v2/swagger.json",\n  "options": {\n    "removeExtraEndpoints": true,\n    "removeExtraSchemas": true\n  }\n}\n```\n\nThis request will grab the swagger specification described at `http://petstore.swagger.io/v2/swagger.json`, and import it into the Stoplight API version with id `123`. Additionally, it will delete any existing endpoints or models that are not described in the petstore swagger being imported.\n\nInstead of a URL, you can provide the actual specification to be imported, either as a string (in the case of YAML) or an object (in the case of JSON). That request would look something like this:\n\n`PUT https://api.stoplight.io/v1/versions/123/import`\n```json\n{\n  "specData": {\n    "swagger": "2.0",\n    "info": {}\n    ... rest of spec\n  }\n}\n```',
  operationId: 'PUT_versions-versionId-import',
  request: {
    params: z.object({
      versionId: z
        .string()
        .openapi({
          param: {
            description: 'This is the unique identifier for the version.',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              options: z
                .object({
                  removeExtraEndpoints: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Default: false.', default: '' }),
                  removeExtraSchemas: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Default: false.', default: '' }),
                  removeExtraTextSections: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Default: false.', default: '' }),
                  removeExtraTraits: z
                    .boolean()
                    .exactOptional()
                    .openapi({ description: 'Default: false.', default: '' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              specData: z.xor([z.object({}), z.string()]).exactOptional(),
              url: z.string().exactOptional(),
            })
            .openapi({
              example: {
                options: { removeExtraEndpoints: true, removeExtraModels: true },
                url: 'http://petstore.swagger.io/v2/swagger.json',
              },
              required: [],
            }),
        },
      },
    },
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({
              data: z
                .object({
                  endpointCount: z.number(),
                  format: z.enum(['RAML08', 'RAML10', 'SWAGGER', 'STOPLIGHTX']),
                  projectId: z.string(),
                  schemaCount: z.number(),
                  testCount: z.number(),
                  textSectionCount: z.number(),
                  traitCount: z.number(),
                  versionId: z.string(),
                  workspaceId: z.string(),
                })
                .openapi({
                  required: [
                    'workspaceId',
                    'projectId',
                    'versionId',
                    'schemaCount',
                    'textSectionCount',
                    'traitCount',
                    'endpointCount',
                    'testCount',
                    'format',
                  ],
                }),
            })
            .openapi({ required: ['data'] }),
        },
      },
    },
    401: TraitStandardErrors_401Response,
    404: TraitStandardErrors_404Response,
  },
  security: [{ Authorization: [] }],
})

export const postVersionsVersionIdPublishRoute = createRoute({
  method: 'post',
  path: '/versions/{versionId}/publish',
  tags: ['Versions'],
  summary: 'Publish',
  description:
    'Re-publish an API version in Stoplight. This will re-publish the given API version, with whatever publish settings have already been setup in the app.\n\nThis will only work with APIs that have previously been published at least once.\n\nThis works well with the #endpoint:957qEfc97BB5XGAeZ endpoint to augment your continuous integration processes, and automatically re-publish your documentation when certain events happen. Once such scenario is:\n\n1. Swagger is generated from your codebase, and pushed up to Github.\n2. A simple script that you write sends a request to the Stoplight API to import the new specification, passing in the URL to the swagger file on Github.\n3. After the import succeeds, and your API in Stoplight is up to date, the script sends a request to the Stoplight API (this endpoint) to re-publish your documentation.',
  operationId: 'POST_versions-versionId-publish',
  request: {
    params: z.object({
      versionId: z
        .string()
        .openapi({
          param: {
            description: 'This is the unique identifier for the version.',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z
            .object({ customDomain: z.string().exactOptional(), url: z.string() })
            .openapi({ required: ['url'] }),
          examples: {
            response: {
              value: {
                customDomain: 'https://help.stoplight.io/api-v1',
                url: 'https://stoplight.api-docs.io/api-v1',
              },
            },
          },
        },
      },
    },
    401: TraitStandardErrors_401Response,
    404: TraitStandardErrors_404Response,
  },
  security: [{ Authorization: [] }],
})

export const putVersionsVersionIdUnpublishRoute = createRoute({
  method: 'put',
  path: '/versions/{versionId}/unpublish',
  tags: ['Versions'],
  summary: 'Unpublish',
  description: 'Unpublish the documentation associated with the given API version.',
  operationId: 'PUT_versions-versionId-unpublish',
  request: {
    params: z.object({
      versionId: z
        .string()
        .openapi({
          param: {
            description: 'This is the unique identifier for the version.',
            in: 'path',
            name: 'versionId',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: '',
      content: {
        'application/json': {
          schema: z.object({ data: z.object({}).exactOptional() }).openapi({ required: [] }),
          examples: { response: { value: { data: {} } } },
        },
      },
    },
    401: TraitStandardErrors_401Response,
    404: TraitStandardErrors_404Response,
  },
  security: [{ Authorization: [] }],
})
