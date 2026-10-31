import { createRoute, z } from '@hono/zod-openapi'

const ChangelogSchema = z
  .object({
    body: z.string().openapi({ description: 'Body content of the changelog' }),
    hidden: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Visibility of the changelog' }),
    title: z.string().openapi({ description: 'Title of the changelog' }),
    type: z
      .enum(['', 'added', 'fixed', 'improved', 'deprecated', 'removed'])
      .default('')
      .exactOptional(),
  })
  .openapi({ required: ['title', 'body'] })
  .openapi('Changelog')

const CustomPageSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({ description: 'Body formatted in Markdown (displayed by default).' }),
    hidden: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Visibility of the custom page' }),
    html: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Body formatted in HTML (sanitized, only displayed if `htmlmode` is **true**).',
      }),
    htmlmode: z
      .boolean()
      .default(false)
      .exactOptional()
      .openapi({
        description:
          '**true** if `html` should be displayed, **false** if `body` should be displayed.',
      }),
    title: z.string().openapi({ description: 'Title of the custom page' }),
  })
  .openapi({ required: ['title'] })
  .openapi('CustomPage')

const DocSchema = z
  .object({
    body: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'Body content of the page, formatted in ReadMe or Github flavored Markdown. Accepts long page content, for example, greater than 100k characters',
      }),
    category: z
      .string()
      .openapi({
        description:
          'Category ID of the page, which you can get through https://docs.readme.com/developers/reference/categories#getcategory ',
      }),
    hidden: z
      .boolean()
      .default(true)
      .exactOptional()
      .openapi({ description: 'Visibility of the page' }),
    parentDoc: z
      .string()
      .exactOptional()
      .openapi({
        description:
          'For a subpage, specify the parent doc ID, which you can get through https://docs.readme.com/developers/reference/docs#getdoc',
      }),
    title: z.string().openapi({ description: 'Title of the page' }),
    type: z
      .enum(['basic', 'error', 'link'])
      .exactOptional()
      .openapi({
        description:
          'Type of the page. The available types all show up under the /docs/ URL path of your docs project (also known as the "guides" section). Can be "basic" (most common), "error" (page desribing an API error), or "link" (page that redirects to an external link)',
      }),
  })
  .openapi({ required: ['title', 'category'] })
  .openapi('Doc')

const VersionSchema = z
  .object({
    codename: z.string().exactOptional().openapi({ description: 'Dubbed name of version' }),
    from: z.string().openapi({ description: 'Semantic Version to use as the base fork' }),
    is_beta: z.boolean().default(true).exactOptional(),
    is_deprecated: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should this be deprecated? Only allowed in PUT operations' }),
    is_hidden: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should this be publically accessible?' }),
    is_stable: z
      .boolean()
      .exactOptional()
      .openapi({ description: 'Should this be the **main** version' }),
    version: z.string().openapi({ description: 'Semantic Version' }),
  })
  .openapi({ required: ['version', 'from'] })
  .openapi('Version')

const PageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1),
  )
  .default(1)
  .exactOptional()
  .openapi({
    param: {
      description: 'Used to specify further pages (starts at 1)',
      in: 'query',
      name: 'page',
      schema: { default: 1, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const PerPageParamsSchema = z
  .preprocess(
    (val) =>
      typeof val === 'string' &&
      /^-?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$/.test(val) &&
      (!/^-?\d+$/.test(val) || Number.isSafeInteger(Number(val)))
        ? Number(val)
        : val,
    z.int().min(1).max(100),
  )
  .default(10)
  .exactOptional()
  .openapi({
    param: {
      description: 'Number of items to include in pagination (up to 100, defaults to 10)',
      in: 'query',
      name: 'perPage',
      schema: { default: 10, maximum: 100, minimum: 1, type: 'integer' },
      required: false,
    },
  })

const VersionIdParamsSchema = z
  .string()
  .openapi({
    param: {
      description: 'Semver version indentifier',
      in: 'path',
      name: 'versionId',
      required: true,
      schema: { type: 'string' },
    },
  })

const XReadmeVersionParamsSchema = z
  .string()
  .openapi({
    param: {
      description:
        'Version number of your docs project, for example, v3.0. To see all valid versions for your docs project call https://docs.readme.com/developers/reference/version#getversions.',
      example: 'v3.0',
      in: 'header',
      name: 'x-readme-version',
      required: true,
      schema: { type: 'string' },
    },
  })

const LinkHeaderSchema = z
  .string()
  .exactOptional()
  .openapi({
    description: 'Pagination information. See https://docs.readme.com/reference#pagination',
    param: { required: false },
  })

const ApiKeySecurityScheme = { scheme: 'basic', type: 'http' }

export const getRoute = createRoute({
  method: 'get',
  path: '/',
  tags: ['Projects'],
  summary: 'Get metadata about the current project',
  description: 'Returns project data for API key',
  operationId: 'getProject',
  responses: { 200: { description: 'Project data' } },
  security: [{ apiKey: [] }],
})

export const getApiSpecificationRoute = createRoute({
  method: 'get',
  path: '/api-specification',
  tags: ['API Specification'],
  description: 'Get API specification metadata',
  operationId: 'getAPISpecification',
  request: {
    query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: {
      description: 'Successfully retrieved API specification metadata.',
      headers: z.object({ Link: LinkHeaderSchema }),
    },
  },
  security: [{ apiKey: [] }],
})

export const postApiSpecificationRoute = createRoute({
  method: 'post',
  path: '/api-specification',
  tags: ['API Specification'],
  description:
    'Upload an API specification to ReadMe. Or, to use a newer solution see https://docs.readme.com/guides/docs/automatically-sync-api-specification-with-github',
  operationId: 'uploadAPISpecification',
  request: {
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              spec: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'OpenAPI/Swagger file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'The API specification successfully imported' },
    400: { description: 'There was a validation error during import' },
  },
  security: [{ apiKey: [] }],
})

export const putApiSpecificationIdRoute = createRoute({
  method: 'put',
  path: '/api-specification/{id}',
  tags: ['API Specification'],
  description: 'Update an API specification in ReadMe',
  operationId: 'updateAPISpecification',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              spec: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'OpenAPI/Swagger file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The API specification was updated' },
    400: { description: 'There was a validation error during import' },
    404: { description: 'There is no API specification with that ID' },
  },
  security: [{ apiKey: [] }],
})

export const deleteApiSpecificationIdRoute = createRoute({
  method: 'delete',
  path: '/api-specification/{id}',
  tags: ['API Specification'],
  description: 'Delete an API specification in ReadMe',
  operationId: 'deleteAPISpecification',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description:
              'ID of the API specification. The unique ID for each API can be found by navigating to your **API Definitions** page.',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The API specification was deleted' },
    404: { description: 'There is no API specification with that ID' },
  },
  security: [{ apiKey: [] }],
})

export const getCategoriesSlugRoute = createRoute({
  method: 'get',
  path: '/categories/{slug}',
  tags: ['Categories'],
  summary: 'Get category',
  description: 'Returns the category with this slug',
  operationId: 'getCategory',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description:
              'Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"',
            example: 'getting-started',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The category exists and has been returned' },
    404: { description: 'There is no category with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const getCategoriesSlugDocsRoute = createRoute({
  method: 'get',
  path: '/categories/{slug}/docs',
  tags: ['Categories'],
  summary: 'Get docs for category',
  description: 'Returns the docs and children docs within this category',
  operationId: 'getCategoryDocs',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description:
              'Slug of category. Slugs must be all lowercase, and replace spaces with hyphens. For example, for the the category "Getting Started", enter the slug "getting-started"',
            example: 'getting-started',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The category exists and all of the docs have been returned' },
    404: { description: 'There is no category with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const getChangelogsRoute = createRoute({
  method: 'get',
  path: '/changelogs',
  tags: ['Changelog'],
  summary: 'Get changelogs',
  description: 'Returns a list of changelogs associated with the project API key',
  operationId: 'getChangelogs',
  request: { query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }) },
  responses: { 200: { description: 'OK', headers: z.object({ Link: LinkHeaderSchema }) } },
  security: [{ apiKey: [] }],
})

export const postChangelogsRoute = createRoute({
  method: 'post',
  path: '/changelogs',
  tags: ['Changelog'],
  summary: 'Create changelog',
  description: 'Create a new changelog inside of this project',
  operationId: 'createChangelog',
  request: {
    body: {
      description: 'Changelog object',
      content: { 'application/json': { schema: ChangelogSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'The changelog has successfully been created' },
    400: { description: 'There was a validation error during creation' },
  },
  security: [{ apiKey: [] }],
})

export const getChangelogsSlugRoute = createRoute({
  method: 'get',
  path: '/changelogs/{slug}',
  tags: ['Changelog'],
  summary: 'Get changelog',
  description: 'Returns the changelog with this slug',
  operationId: 'getChangelog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Slug of changelog',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The changelog exists and has been returned' },
    404: { description: 'There is no changelog with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const putChangelogsSlugRoute = createRoute({
  method: 'put',
  path: '/changelogs/{slug}',
  tags: ['Changelog'],
  summary: 'Update changelog',
  description: 'Update a changelog with this slug',
  operationId: 'updateChangelog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Slug of changelog',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'Changelog object',
      content: { 'application/json': { schema: ChangelogSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'The changelog has successfully been updated' },
    400: { description: 'There was a validation error during update' },
    404: { description: 'There is no changelog with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const deleteChangelogsSlugRoute = createRoute({
  method: 'delete',
  path: '/changelogs/{slug}',
  tags: ['Changelog'],
  summary: 'Delete changelog',
  description: 'Delete the changelog with this slug',
  operationId: 'deleteChangelog',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Slug of changelog',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The changelog has successfully been updated' },
    404: { description: 'There is no changelog with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const getCustompagesRoute = createRoute({
  method: 'get',
  path: '/custompages',
  tags: ['Custom Pages'],
  summary: 'Get custom pages',
  description: 'Returns a list of custom pages associated with the project API key',
  operationId: 'getCustomPages',
  request: { query: z.object({ perPage: PerPageParamsSchema, page: PageParamsSchema }) },
  responses: { 200: { description: 'OK', headers: z.object({ Link: LinkHeaderSchema }) } },
  security: [{ apiKey: [] }],
})

export const postCustompagesRoute = createRoute({
  method: 'post',
  path: '/custompages',
  tags: ['Custom Pages'],
  summary: 'Create custom page',
  description: 'Create a new custom page inside of this project',
  operationId: 'createCustomPage',
  request: {
    body: {
      description: 'CustomPage object',
      content: { 'application/json': { schema: CustomPageSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'The custom page has successfully been created' },
    400: { description: 'There was a validation error during creation' },
  },
  security: [{ apiKey: [] }],
})

export const getCustompagesSlugRoute = createRoute({
  method: 'get',
  path: '/custompages/{slug}',
  tags: ['Custom Pages'],
  summary: 'Get custom page',
  description: 'Returns the custom page with this slug',
  operationId: 'getCustomPage',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Slug of custom page',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: { description: 'The custom page exists and has been returned' },
    404: { description: 'There is no custom page with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const putCustompagesSlugRoute = createRoute({
  method: 'put',
  path: '/custompages/{slug}',
  tags: ['Custom Pages'],
  summary: 'Update custom page',
  description: 'Update a custom page with this slug',
  operationId: 'updateCustomPage',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Slug of custom page',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      description: 'CustomPage object',
      content: { 'application/json': { schema: CustomPageSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'The custom page has successfully been updated' },
    400: { description: 'There was a validation error during update' },
    404: { description: 'There is no custom page with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const deleteCustompagesSlugRoute = createRoute({
  method: 'delete',
  path: '/custompages/{slug}',
  tags: ['Custom Pages'],
  summary: 'Delete custom page',
  description: 'Delete the custom page with this slug',
  operationId: 'deleteCustomPage',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description: 'Slug of custom page',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The custom page has successfully been updated' },
    404: { description: 'There is no custom page with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const postDocsRoute = createRoute({
  method: 'post',
  path: '/docs',
  tags: ['Docs'],
  summary: 'Create doc',
  description: 'Create a new doc inside of this project',
  operationId: 'createDoc',
  request: {
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: {
      description: 'Doc object',
      content: { 'application/json': { schema: DocSchema } },
      required: true,
    },
  },
  responses: {
    201: { description: 'The doc has successfully been created' },
    400: { description: 'There was a validation error during creation' },
  },
  security: [{ apiKey: [] }],
})

export const postDocsSearchRoute = createRoute({
  method: 'post',
  path: '/docs/search',
  tags: ['Docs'],
  summary: 'Search docs',
  description: 'Returns all docs that match the search',
  operationId: 'searchDocs',
  request: {
    query: z.object({
      search: z
        .string()
        .openapi({
          param: {
            description: 'Search string to look for',
            in: 'query',
            name: 'search',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The search was successful and results were returned' },
    500: { description: 'There is an internal error' },
  },
  security: [{ apiKey: [] }],
})

export const getDocsSlugRoute = createRoute({
  method: 'get',
  path: '/docs/{slug}',
  tags: ['Docs'],
  summary: 'Get doc',
  description: 'Returns the doc with this slug',
  operationId: 'getDoc',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description:
              'Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"',
            example: 'new-features',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    200: { description: 'The doc exists and has been returned' },
    404: { description: 'There is no doc with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const putDocsSlugRoute = createRoute({
  method: 'put',
  path: '/docs/{slug}',
  tags: ['Docs'],
  summary: 'Update doc',
  description: 'Update a doc with this slug',
  operationId: 'updateDoc',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description:
              'Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"',
            example: 'new-features',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
    body: {
      description: 'Doc object',
      content: { 'application/json': { schema: DocSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'The doc has successfully been updated' },
    400: { description: 'There was a validation error during update' },
    404: { description: 'There is no doc with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const deleteDocsSlugRoute = createRoute({
  method: 'delete',
  path: '/docs/{slug}',
  tags: ['Docs'],
  summary: 'Delete doc',
  description: 'Delete the doc with this slug',
  operationId: 'deleteDoc',
  request: {
    params: z.object({
      slug: z
        .string()
        .openapi({
          param: {
            description:
              'Slug of doc. must be lowercase, and replace spaces with hyphens. For example, for the page titled "New Features", enter the slug "new-features"',
            example: 'new-features',
            in: 'path',
            name: 'slug',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    headers: z.object({ 'x-readme-version': XReadmeVersionParamsSchema }),
  },
  responses: {
    204: { description: 'The doc has successfully been updated' },
    404: { description: 'There is no doc with that slug' },
  },
  security: [{ apiKey: [] }],
})

export const getErrorsRoute = createRoute({
  method: 'get',
  path: '/errors',
  tags: ['Errors'],
  summary: 'Get errors',
  description: 'Returns with all of the error page types for this project',
  operationId: 'getErrors',
  responses: { 200: { description: 'An array of the errors' } },
  security: [{ apiKey: [] }],
})

export const postSwaggerRoute = createRoute({
  method: 'post',
  path: '/swagger',
  tags: ['Swagger'],
  description:
    'DEPRECATED. Instead use https://docs.readme.com/developers/reference/api-specification#uploadapispecification to upload a Swagger file to ReadMe',
  operationId: 'uploadSwagger',
  request: {
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              swagger: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Swagger file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    201: { description: 'The Swagger file was successfully imported' },
    400: { description: 'There was a validation error during import' },
  },
  deprecated: true,
  security: [{ apiKey: [] }],
})

export const putSwaggerIdRoute = createRoute({
  method: 'put',
  path: '/swagger/{id}',
  tags: ['Swagger'],
  description:
    'DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#updateapispecification to update a Swagger file.',
  operationId: 'updateSwagger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of the Swagger file',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
    body: {
      content: {
        'multipart/form-data': {
          schema: z
            .object({
              swagger: z
                .file()
                .exactOptional()
                .openapi({ type: 'string', format: 'binary', description: 'Swagger file' }),
            })
            .openapi({ required: [] }),
        },
      },
      required: true,
    },
  },
  responses: {
    200: { description: 'The Swagger file was successfully updated' },
    400: { description: 'There was a validation error during import' },
    404: { description: 'There is no Swagger file with that ID' },
  },
  deprecated: true,
  security: [{ apiKey: [] }],
})

export const deleteSwaggerIdRoute = createRoute({
  method: 'delete',
  path: '/swagger/{id}',
  tags: ['Swagger'],
  description:
    'DEPRECATED. Instead, use https://docs.readme.com/developers/reference/api-specification#deleteapispecification to delete a Swagger file in ReadMe',
  operationId: 'deleteSwagger',
  request: {
    params: z.object({
      id: z
        .string()
        .openapi({
          param: {
            description: 'ID of swagger the file',
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    204: { description: 'The Swagger file was successfully deleted' },
    404: { description: 'There is no Swagger file with that ID' },
  },
  deprecated: true,
  security: [{ apiKey: [] }],
})

export const getVersionRoute = createRoute({
  method: 'get',
  path: '/version',
  tags: ['Version'],
  summary: 'Get versions',
  description: 'Retrieve a list of versions associated with a project API key',
  operationId: 'getVersions',
  responses: { 200: { description: 'JSON list of versions' } },
  security: [{ apiKey: [] }],
})

export const postVersionRoute = createRoute({
  method: 'post',
  path: '/version',
  tags: ['Version'],
  summary: 'Create version',
  description: 'Create a new version',
  operationId: 'createVersion',
  request: {
    body: {
      description: 'Version object',
      content: { 'application/json': { schema: VersionSchema } },
      required: true,
    },
  },
  responses: {
    200: {
      description: 'The model was successfully created and associated with the target project',
    },
    400: {
      description:
        'That version already exists in the project, or there are validation errors with the request',
    },
    404: { description: 'Could not find target fork in database' },
  },
  security: [{ apiKey: [] }],
})

export const getVersionVersionIdRoute = createRoute({
  method: 'get',
  path: '/version/{versionId}',
  tags: ['Version'],
  summary: 'Get version',
  description: 'Returns the version with this version ID',
  operationId: 'getVersion',
  request: { params: z.object({ versionId: VersionIdParamsSchema }) },
  responses: {
    200: { description: 'JSON version model' },
    404: { description: 'Could not find target version in database' },
  },
  security: [{ apiKey: [] }],
})

export const putVersionVersionIdRoute = createRoute({
  method: 'put',
  path: '/version/{versionId}',
  tags: ['Version'],
  summary: 'Update version',
  description: 'Update an existing version',
  operationId: 'updateVersion',
  request: {
    params: z.object({ versionId: VersionIdParamsSchema }),
    body: {
      description: 'Version object',
      content: { 'application/json': { schema: VersionSchema } },
      required: true,
    },
  },
  responses: {
    200: { description: 'The target version was successfully updated' },
    400: { description: 'Cannot demote a version through update' },
    404: { description: 'Could not find target version in database' },
  },
  security: [{ apiKey: [] }],
})

export const deleteVersionVersionIdRoute = createRoute({
  method: 'delete',
  path: '/version/{versionId}',
  tags: ['Version'],
  summary: 'Delete version',
  description: 'Delete a version',
  operationId: 'deleteVersion',
  request: { params: z.object({ versionId: VersionIdParamsSchema }) },
  responses: {
    200: { description: 'The target version was successfully deleted' },
    400: { description: 'Cannot delete the main version for a project' },
    404: { description: 'Could not find target version in database' },
  },
  security: [{ apiKey: [] }],
})
