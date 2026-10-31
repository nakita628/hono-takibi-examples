import { createRoute, z } from '@hono/zod-openapi'

export const getApisRoute = createRoute({
  method: 'get',
  path: '/apis',
  tags: ['API'],
  summary: 'Get all APIs',
  description:
    'This call fetches all the APIs present in the specified workspace\n\nResponse contains an array named `apis` which would contain all the details of APIs present in the workspace.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getAllApIs',
  request: {
    query: z.object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Only return APIs that are inside the given workspace.',
            in: 'query',
            name: 'workspace',
            schema: { example: '{{workspaceId}}', type: 'string' },
            required: false,
          },
          example: '{{workspaceId}}',
        }),
      since: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs that have been updated after this time. Time is represented using the ISO 8601 date and time format.',
            in: 'query',
            name: 'since',
            schema: { example: '{{since}}', type: 'string' },
            required: false,
          },
          example: '{{since}}',
        }),
      until: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs that have been updated before this time. Time is represented using the ISO 8601 date and time format.',
            in: 'query',
            name: 'until',
            schema: { example: '{{until}}', type: 'string' },
            required: false,
          },
          example: '{{until}}',
        }),
      createdBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs that have been created by the user ID represented by the given value.',
            in: 'query',
            name: 'createdBy',
            schema: { example: '{{createdBy}}', type: 'string' },
            required: false,
          },
          example: '{{createdBy}}',
        }),
      updatedBy: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs that have been updated by the user ID represented by the given value.',
            in: 'query',
            name: 'updatedBy',
            schema: { example: '{{updatedBy}}', type: 'string' },
            required: false,
          },
          example: '{{updatedBy}}',
        }),
      isPublic: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs with the corresponding privacy state. Public APIs have the isPublic value true; private APIs have the isPublic value false.',
            in: 'query',
            name: 'isPublic',
            schema: { example: '{{isPublic}}', type: 'string' },
            required: false,
          },
          example: '{{isPublic}}',
        }),
      name: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs whose name includes the given value. Matching is case insensitive.',
            in: 'query',
            name: 'name',
            schema: { example: '{{name}}', type: 'string' },
            required: false,
          },
          example: '{{name}}',
        }),
      summary: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs whose summary includes the given value. Matching is case insensitive.',
            in: 'query',
            name: 'summary',
            schema: { example: '{{summary}}', type: 'string' },
            required: false,
          },
          example: '{{summary}}',
        }),
      description: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'Only return APIs whose description includes the given value. Matching is case insensitive.',
            in: 'query',
            name: 'description',
            schema: { example: '{{description}}', type: 'string' },
            required: false,
          },
          example: '{{description}}',
        }),
      sort: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The value of sort can be one of the names of the fields included in the response.',
            in: 'query',
            name: 'sort',
            schema: { example: '{{sort}}', type: 'string' },
            required: false,
          },
          example: '{{sort}}',
        }),
      direction: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description:
              'The sorting direction, which can be ascending or descending. The value can be asc to specify an ascending direction or desc to specify a descending direction. If none is specified, the default sorting direction is descending for timestamp and numeric fields and ascending otherwise. An ID is not considered a numeric field.',
            in: 'query',
            name: 'direction',
            schema: { example: '{{direction}}', type: 'string' },
            required: false,
          },
          example: '{{direction}}',
        }),
    }),
  },
  responses: { 200: { description: '' } },
})

export const postApisRoute = createRoute({
  method: 'post',
  path: '/apis',
  tags: ['API'],
  summary: 'Create API',
  description:
    'This call creates a new API with a default API Version.  \n\nRequest body should contain an `api` object which should atleast have a property `name`.\n\nResponse contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description`, etc. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createApi',
  request: {
    query: z.object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workspace',
            schema: { example: '{{workspaceId}}', type: 'string' },
            required: false,
          },
          example: '{{workspaceId}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              api: z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'This is description.' }),
                  name: z.string().exactOptional().openapi({ example: 'Sync Service API' }),
                  summary: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'This is supposed to be a short summary.' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            api: {
              description: 'This is description.',
              name: 'Sync Service API',
              summary: 'This is supposed to be a short summary.',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create API',
      content: {
        'application/json': {
          schema: z
            .object({
              api: z
                .object({
                  createdAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'This is supposed to handle markdown *descriptions*.' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '387c2863-6ee3-4a56-8210-225f774edade' }),
                  name: z.string().exactOptional().openapi({ example: 'Sync API' }),
                  summary: z.string().exactOptional().openapi({ example: 'This is a summary' }),
                  updatedAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Create API': {
              value: {
                api: {
                  createdAt: '2019-02-12 19:34:49',
                  createdBy: '5665',
                  description: 'This is supposed to handle markdown *descriptions*.',
                  id: '387c2863-6ee3-4a56-8210-225f774edade',
                  name: 'Sync API',
                  summary: 'This is a summary',
                  updatedAt: '2019-02-12 19:34:49',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}',
  tags: ['API'],
  summary: 'Single API',
  description:
    'This call fetches a single API having the specified id.\n\nResponse contains an `api` object with all the details related to the queried API, namely, `id`, `name`, `summary`, `description` etc. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'singleApi',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get single API',
      content: {
        'application/json': {
          schema: z
            .object({
              api: z
                .object({
                  createdAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'This is a description.This is a description.' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '387c2863-6ee3-4a56-8210-225f774edade' }),
                  name: z.string().exactOptional().openapi({ example: 'Sync API' }),
                  summary: z.string().exactOptional().openapi({ example: 'This is a summary' }),
                  updatedAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Get single API': {
              value: {
                api: {
                  createdAt: '2019-02-12 19:34:49',
                  createdBy: '5665',
                  description: 'This is a description.This is a description.',
                  id: '387c2863-6ee3-4a56-8210-225f774edade',
                  name: 'Sync API',
                  summary: 'This is a summary',
                  updatedAt: '2019-02-12 19:34:49',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putApisApiIdRoute = createRoute({
  method: 'put',
  path: '/apis/{apiId}',
  tags: ['API'],
  summary: 'Update an API',
  description:
    'This call updates an existing API .  \n\nRequest body should contain an `api` object which should have the fields to be updated. Only `name`, `summary` and `description` fields can be edited for an API.\n\nResponse contains an `api` object with all the details related to the created API, namely, `id`, `name`, `summary`, `description` etc. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'updateAnApi',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              api: z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'This is an updated Description' }),
                  name: z.string().exactOptional().openapi({ example: 'New name' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { api: { description: 'This is an updated Description', name: 'New name' } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update an API',
      content: {
        'application/json': {
          schema: z
            .object({
              api: z
                .object({
                  createdAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'This is a description.' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '387c2863-6ee3-4a56-8210-225f774edade' }),
                  name: z.string().exactOptional().openapi({ example: 'Sync API' }),
                  summary: z.string().exactOptional().openapi({ example: 'This is a summary' }),
                  updatedAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Update an API': {
              value: {
                api: {
                  createdAt: '2019-02-12 19:34:49',
                  createdBy: '5665',
                  description: 'This is a description.',
                  id: '387c2863-6ee3-4a56-8210-225f774edade',
                  name: 'Sync API',
                  summary: 'This is a summary',
                  updatedAt: '2019-02-12 19:34:49',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteApisApiIdRoute = createRoute({
  method: 'delete',
  path: '/apis/{apiId}',
  tags: ['API'],
  summary: 'Delete an API',
  description:
    'This call deletes an existing API having the specified id.  \n\nResponse contains an `api` object with `id` of the API which was deleted.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteAnApi',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete an API',
      content: {
        'application/json': {
          schema: z
            .object({
              api: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '387c2863-6ee3-4a56-8210-225f774edade' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Delete an API': { value: { api: { id: '387c2863-6ee3-4a56-8210-225f774edade' } } },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions',
  tags: ['API', 'API Version'],
  summary: 'Get All API Versions',
  description:
    'This call fetches details about the all the API Versions in the specified API.\n\nThe response will contain an array `versions` object which would be a list of all the API Version along with their details.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getAllApiVersions',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get All API versions',
      content: {
        'application/json': {
          schema: z
            .object({
              versions: z
                .array(
                  z
                    .object({
                      createdAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-02-12 19:34:49' }),
                      createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                      description: z.string().exactOptional().openapi({ example: 'Description' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '024660a6-c837-46ca-91d8-7e8dd7c669de' }),
                      name: z.string().exactOptional().openapi({ example: '0.1' }),
                      summary: z.string().exactOptional().openapi({ example: 'Summary' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-02-12 19:34:49' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get All API versions': {
              value: {
                versions: [
                  {
                    createdAt: '2019-02-12 19:34:49',
                    createdBy: '5665',
                    description: 'Description',
                    id: '024660a6-c837-46ca-91d8-7e8dd7c669de',
                    name: '0.1',
                    summary: 'Summary',
                    updatedAt: '2019-02-12 19:34:49',
                  },
                  {
                    createdAt: '2019-02-12 19:34:49',
                    createdBy: '5665',
                    description: 'Description',
                    id: '00932d3b-20f1-454f-a77e-38b4023163ea',
                    name: '0.2',
                    summary: 'Summary',
                    updatedAt: '2019-02-12 19:34:49',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postApisApiIdVersionsRoute = createRoute({
  method: 'post',
  path: '/apis/{apiId}/versions',
  tags: ['API', 'API Version'],
  summary: 'Create API Version',
  description:
    'This call creates a new API version in the specified API.  \n\nRequest body should contain a `version` object which should have fields:\n\n<table>\n<tr>\n\t<td>name</td>\n\t<td>Required. Name of the API Version</td>\n</tr>\n<tr>\n\t<td>source</td>\n\t<td>\n\t\tIf specified, it will copy the contents of the specified api version to create a new api verison.\n\t\t<table>\n\t\t\t<tr>\n\t\t\t\t<td>id</td>\n\t\t\t\t<td>Required. Id of the apiversion from where the details are to be copied</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>schema</td>\n\t\t\t\t<td>Boolean. If true then copies the schema from the specified api version</td>\n\t\t\t</tr>\n\t\t\t<tr>\n\t\t\t\t<td>relations</td>\n\t\t\t\t<td>Object. {"&lt;relationType&gt;": true/false}.  \n\t\t\t\t\tAllowed relation types are `mock`, `monitor`, `documentation`, `contracttest`, `integrationtest`, `testsuite`, `environment`\n\t\t\t\tRelation types which should be copied over to the new api verison</td>\n\t\t\t</tr>\n\t\t</table>\n\t</td>\n</tr>\n</table>\n\nResponse contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createApiVersion',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({
                  name: z.string().exactOptional().openapi({ example: '1.0' }),
                  source: z
                    .object({
                      id: z.string().exactOptional().openapi({ example: '{{apiVersionId}}' }),
                      relations: z
                        .object({
                          documentation: z.boolean().exactOptional().openapi({ example: true }),
                          mock: z.boolean().exactOptional().openapi({ example: true }),
                          monitor: z.boolean().exactOptional().openapi({ example: true }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      schema: z.boolean().exactOptional().openapi({ example: true }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            version: {
              name: '1.0',
              source: {
                id: '{{apiVersionId}}',
                relations: { documentation: true, mock: true, monitor: true },
                schema: true,
              },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create API version',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({
                  api: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2b95d07c-8379-4bd1-924f-e7e1af185284' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'd71cf403-c549-4c7c-9dc6-a6a105acf67c' }),
                  name: z.string().exactOptional().openapi({ example: '1.0' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Create API version': {
              value: {
                version: {
                  api: '2b95d07c-8379-4bd1-924f-e7e1af185284',
                  id: 'd71cf403-c549-4c7c-9dc6-a6a105acf67c',
                  name: '1.0',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}',
  tags: ['API', 'API Version'],
  summary: 'Get an API Version',
  description:
    'This call fetches details about the specified API Version.\n\nThe response will contain a `version` object which would contain all the details of the API Version.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getAnApiVersion',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get an API version',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({
                  api: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '06e41ca3-8bea-4bc5-a726-70338b9f1940' }),
                  createdAt: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2019-07-21T16:31:15.000Z' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '03c17f53-7e2e-427d-b55a-006b244f29ff' }),
                  name: z.string().exactOptional().openapi({ example: '0.1' }),
                  schema: z
                    .array(z.string().openapi({ example: '3484cd1e-e00d-4c39-aea4-539663afe898' }))
                    .exactOptional(),
                  updatedAt: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2019-07-21T16:31:15.000Z' }),
                  updatedBy: z.string().exactOptional().openapi({ example: '5665' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Get an API version': {
              value: {
                version: {
                  api: '06e41ca3-8bea-4bc5-a726-70338b9f1940',
                  createdAt: '2019-07-21T16:31:15.000Z',
                  createdBy: '5665',
                  id: '03c17f53-7e2e-427d-b55a-006b244f29ff',
                  name: '0.1',
                  schema: ['3484cd1e-e00d-4c39-aea4-539663afe898'],
                  updatedAt: '2019-07-21T16:31:15.000Z',
                  updatedBy: '5665',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putApisApiIdVersionsApiVersionIdRoute = createRoute({
  method: 'put',
  path: '/apis/{apiId}/versions/{apiVersionId}',
  tags: ['API', 'API Version'],
  summary: 'Update an API Version',
  description:
    'This call updates an existing API Version.  \n\nRequest body should contain a `version` object with the fields which need to be updated. Only field which can be updated is `name`.\n\nResponse contains a `version` object with all the details related to the created API Version, namely, `id`, `name`, `api` etc.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'updateAnApiVersion',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({ name: z.string().exactOptional().openapi({ example: '2.0' }) })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { version: { name: '2.0' } },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update an API version',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({
                  api: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2b95d07c-8379-4bd1-924f-e7e1af185284' }),
                  createdAt: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2019-07-26T11:24:15.000Z' }),
                  createdBy: z.string().exactOptional().openapi({ example: '12' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'd71cf403-c549-4c7c-9dc6-a6a105acf67c' }),
                  name: z.string().exactOptional().openapi({ example: '2.0' }),
                  updatedAt: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2019-08-09T09:27:36.000Z' }),
                  updatedBy: z.string().exactOptional().openapi({ example: '5665' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Update an API version': {
              value: {
                version: {
                  api: '2b95d07c-8379-4bd1-924f-e7e1af185284',
                  createdAt: '2019-07-26T11:24:15.000Z',
                  createdBy: '12',
                  id: 'd71cf403-c549-4c7c-9dc6-a6a105acf67c',
                  name: '2.0',
                  updatedAt: '2019-08-09T09:27:36.000Z',
                  updatedBy: '5665',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteApisApiIdVersionsApiVersionIdRoute = createRoute({
  method: 'delete',
  path: '/apis/{apiId}/versions/{apiVersionId}',
  tags: ['API', 'API Version'],
  summary: 'Delete an API Version',
  description:
    'This call deletes an existing API Version having the specified id.  \n\nResponse contains an `version` object with `id` of the API Version which was deleted.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteAnApiVersion',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Delete an API version',
      content: {
        'application/json': {
          schema: z
            .object({
              version: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '03c17f53-7e2e-427d-b55a-006b244f29ff' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Delete an API version': {
              value: { version: { id: '03c17f53-7e2e-427d-b55a-006b244f29ff' } },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdContracttestRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/contracttest',
  tags: ['API', 'Relations'],
  summary: 'Get contract test relations',
  description:
    'This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getContractTestRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get contract test relations',
      content: {
        'application/json': {
          schema: z
            .object({
              contracttest: z
                .array(
                  z
                    .object({
                      collectionId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                      name: z.string().exactOptional().openapi({ example: 'C test' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get contract test relations': {
              value: {
                contracttest: [
                  {
                    collectionId: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745',
                    id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                    name: 'C test',
                    updatedAt: '2019-08-29T10:18:11.000Z',
                  },
                  {
                    collectionId: '7332157-a8bcd143-2b01-4b12-8c14-c7d05be77725',
                    id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                    name: 'C1',
                    updatedAt: '2019-08-29T11:40:39.000Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdDocumentationRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/documentation',
  tags: ['API', 'Relations'],
  summary: 'Get  documentation relations',
  description:
    'This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getDocumentationRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get documentation relations',
      content: {
        'application/json': {
          schema: z
            .object({
              documentation: z
                .array(
                  z
                    .object({
                      collectionId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                      name: z.string().exactOptional().openapi({ example: 'C test' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get documentation relations': {
              value: {
                documentation: [
                  {
                    collectionId: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745',
                    id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                    name: 'C test',
                    updatedAt: '2019-08-29T10:18:11.000Z',
                  },
                  {
                    collectionId: '7332157-a8bcd143-2b01-4b12-8c14-c7d05be77725',
                    id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                    name: 'C1',
                    updatedAt: '2019-08-29T11:40:39.000Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdEnvironmentRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/environment',
  tags: ['API', 'Relations'],
  summary: 'Get environment relations',
  description:
    'This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getEnvironmentRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get environment relations',
      content: {
        'application/json': {
          schema: z
            .object({
              environment: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                      name: z.string().exactOptional().openapi({ example: 'C test' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get environment relations': {
              value: {
                environment: [
                  {
                    id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                    name: 'C test',
                    updatedAt: '2019-08-29T10:18:11.000Z',
                  },
                  {
                    id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                    name: 'C1',
                    updatedAt: '2019-08-29T11:40:39.000Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdIntegrationtestRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/integrationtest',
  tags: ['API', 'Relations'],
  summary: 'Get integration test relations',
  description:
    'This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getIntegrationTestRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get integration test relations',
      content: {
        'application/json': {
          schema: z
            .object({
              integrationtest: z
                .array(
                  z
                    .object({
                      collectionId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                      name: z.string().exactOptional().openapi({ example: 'C test' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get integration test relations': {
              value: {
                integrationtest: [
                  {
                    collectionId: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745',
                    id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                    name: 'C test',
                    updatedAt: '2019-08-29T10:18:11.000Z',
                  },
                  {
                    collectionId: '7332157-a8bcd143-2b01-4b12-8c14-c7d05be77725',
                    id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                    name: 'C1',
                    updatedAt: '2019-08-29T11:40:39.000Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdMonitorRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/monitor',
  tags: ['API', 'Relations'],
  summary: 'Get monitor relations',
  description:
    'This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getMonitorRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get monitor relations',
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                      monitorId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745' }),
                      name: z.string().exactOptional().openapi({ example: 'C test' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get monitor relations': {
              value: {
                monitor: [
                  {
                    id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                    monitorId: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745',
                    name: 'C test',
                    updatedAt: '2019-08-29T10:18:11.000Z',
                  },
                  {
                    id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                    monitorId: '7332157-a8bcd143-2b01-4b12-8c14-c7d05be77725',
                    name: 'C1',
                    updatedAt: '2019-08-29T11:40:39.000Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdRelationsRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/relations',
  tags: ['API', 'Relations'],
  summary: 'Get linked relations',
  description:
    'This call fetches all the relations which are linked to the specified API version along with their details.\n\nThe response will contain a `relations` object which lists all the relation types which are linked to the API version. Each of the relation type will be an object which details the relations of this type. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getLinkedRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get linked relations for an API version',
      content: {
        'application/json': {
          schema: z
            .object({
              relations: z
                .object({
                  contracttest: z
                    .object({
                      '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2': z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                          name: z.string().exactOptional().openapi({ example: 'C test' }),
                          updatedAt: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  integrationtest: z
                    .object({
                      '521b0486-ab91-4d3a-9189-43c9380a0533': z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '521b0486-ab91-4d3a-9189-43c9380a0533' }),
                          name: z.string().exactOptional().openapi({ example: 'C1' }),
                          updatedAt: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '2019-08-29T11:40:39.000Z' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      'a236b715-e682-460b-97b6-c1db24f7612e': z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'a236b715-e682-460b-97b6-c1db24f7612e' }),
                          name: z.string().exactOptional().openapi({ example: 'C test' }),
                          updatedAt: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  mock: z
                    .object({
                      '4ccd755f-2c80-481b-a262-49b55e12f5e1': z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '4ccd755f-2c80-481b-a262-49b55e12f5e1' }),
                          name: z.string().exactOptional().openapi({ example: 'Mock' }),
                          updatedAt: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '2019-08-20T10:18:13.000Z' }),
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({
                              example:
                                'https://4ccd755f-2c80-481b-a262-49b55e12f5e1.mock-beta.pstmn.io',
                            }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Get linked relations for an API version': {
              value: {
                relations: {
                  contracttest: {
                    '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2': {
                      id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                      name: 'C test',
                      updatedAt: '2019-08-29T10:18:11.000Z',
                    },
                  },
                  integrationtest: {
                    '521b0486-ab91-4d3a-9189-43c9380a0533': {
                      id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                      name: 'C1',
                      updatedAt: '2019-08-29T11:40:39.000Z',
                    },
                    'a236b715-e682-460b-97b6-c1db24f7612e': {
                      id: 'a236b715-e682-460b-97b6-c1db24f7612e',
                      name: 'C test',
                      updatedAt: '2019-08-29T10:18:11.000Z',
                    },
                  },
                  mock: {
                    '4ccd755f-2c80-481b-a262-49b55e12f5e1': {
                      id: '4ccd755f-2c80-481b-a262-49b55e12f5e1',
                      name: 'Mock',
                      updatedAt: '2019-08-20T10:18:13.000Z',
                      url: 'https://4ccd755f-2c80-481b-a262-49b55e12f5e1.mock-beta.pstmn.io',
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postApisApiIdVersionsApiVersionIdRelationsRoute = createRoute({
  method: 'post',
  path: '/apis/{apiId}/versions/{apiVersionId}/relations',
  tags: ['API', 'Relations'],
  summary: 'Create relations',
  description:
    'This call allows you to add existing Postman entities as new relations to an API. The request body should contain the relations to be created along with an array of entity IDs. \n\n<table>\n  <tr>\n    <th>Relation</th>\n    <th>Entity ID type</th>\n  <tr>\n  <tr>\n    <td>contracttest</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>integrationtest</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>documentation</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>testsuite</td>\n    <td>Collection UIDs</td>\n  </tr>\n  <tr>\n    <td>environment</td>\n    <td>Environment UIDs</td>\n  </tr>\n  <tr>\n    <td>mock</td>\n    <td>Mock IDs</td>\n  </tr>\n  <tr>\n    <td>monitor</td>\n    <td>Monitor IDs</td>\n  </tr>\n</table>\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              contracttest: z
                .array(z.string().openapi({ example: 'collection-uid-1' }))
                .exactOptional(),
              documentation: z
                .array(z.string().openapi({ example: 'collection-uid-3' }))
                .exactOptional(),
              mock: z.array(z.string().openapi({ example: 'mock-uid-1' })).exactOptional(),
              testsuite: z
                .array(z.string().openapi({ example: 'collection-uid-1' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example: {
            contracttest: ['collection-uid-1'],
            documentation: ['collection-uid-3'],
            mock: ['mock-uid-1'],
            testsuite: ['collection-uid-1', 'collection-uid-2'],
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create multiple relations from existing collections',
      content: {
        'application/json': {
          schema: z
            .object({
              contracttest: z
                .array(z.string().openapi({ example: '5bcece87-ca4b-4e75-a967-2a6845626164' }))
                .exactOptional(),
              documentation: z
                .array(z.string().openapi({ example: '2084eba6-a17b-4751-8f03-ea60f30ba19c' }))
                .exactOptional(),
              testsuite: z
                .array(z.string().openapi({ example: 'e525fa71-035e-4620-acda-ce878524f1e7' }))
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Create multiple relations from existing collections': {
              value: {
                contracttest: ['5bcece87-ca4b-4e75-a967-2a6845626164'],
                documentation: ['2084eba6-a17b-4751-8f03-ea60f30ba19c'],
                testsuite: [
                  'e525fa71-035e-4620-acda-ce878524f1e7',
                  '17a974b2-ce79-4b95-9d3f-217d6ff7e979',
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postApisApiIdVersionsApiVersionIdSchemasRoute = createRoute({
  method: 'post',
  path: '/apis/{apiId}/versions/{apiVersionId}/schemas',
  tags: ['API', 'Schema'],
  summary: 'Create Schema',
  description:
    'This call creates a new schema.\n\nRequest body should contain a `schema` object which should atleast have these properties with `string` values:\n\n- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.\n- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.\n- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.\n\nResponse contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createSchema',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              schema: z
                .object({
                  language: z.string().exactOptional().openapi({ example: 'yaml' }),
                  schema: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example:
                        '{\n  "openapi": "3.0.0",\n  "info": null,\n  "version": "v1.0",\n  "title": "APi",\n  "servers": [\n    {\n      "url": "http://localhost:3000"\n    }\n  ],\n  "paths": {\n    "/user": {\n      "get": {\n        "summary": "Returns details about a particular user",\n        "operationId": "listUser",\n        "tags": [\n          "user"\n        ],\n        "parameters": [\n          {\n            "name": "id",\n            "in": "query",\n            "description": "ID of the user",\n            "required": true,\n            "schema": {\n              "type": "integer",\n              "format": "int32"\n            }\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "Details about a user by ID",\n            "headers": {\n              "x-next": {\n                "description": "A link to the next page of responses",\n                "schema": {\n                  "type": "string"\n                }\n              }\n            },\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/User\\\\\'"\n                }\n              }\n            }\n          },\n          "default": {\n            "description": "Unexpected error",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/Error\\\\\'"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "User": {\n        "type": "object",\n        "required": [\n          "id",\n          "name"\n        ],\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          },\n          "tag": {\n            "type": "string"\n          }\n        }\n      },\n      "Error": {\n        "type": "object",\n        "required": [\n          "code",\n          "message"\n        ],\n        "properties": {\n          "code": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "message": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  }\n}',
                    }),
                  type: z.string().exactOptional().openapi({ example: 'openapi3' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            schema: {
              language: 'yaml',
              schema:
                '{\n  "openapi": "3.0.0",\n  "info": null,\n  "version": "v1.0",\n  "title": "APi",\n  "servers": [\n    {\n      "url": "http://localhost:3000"\n    }\n  ],\n  "paths": {\n    "/user": {\n      "get": {\n        "summary": "Returns details about a particular user",\n        "operationId": "listUser",\n        "tags": [\n          "user"\n        ],\n        "parameters": [\n          {\n            "name": "id",\n            "in": "query",\n            "description": "ID of the user",\n            "required": true,\n            "schema": {\n              "type": "integer",\n              "format": "int32"\n            }\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "Details about a user by ID",\n            "headers": {\n              "x-next": {\n                "description": "A link to the next page of responses",\n                "schema": {\n                  "type": "string"\n                }\n              }\n            },\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/User\\\\\'"\n                }\n              }\n            }\n          },\n          "default": {\n            "description": "Unexpected error",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/Error\\\\\'"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "User": {\n        "type": "object",\n        "required": [\n          "id",\n          "name"\n        ],\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          },\n          "tag": {\n            "type": "string"\n          }\n        }\n      },\n      "Error": {\n        "type": "object",\n        "required": [\n          "code",\n          "message"\n        ],\n        "properties": {\n          "code": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "message": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  }\n}',
              type: 'openapi3',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create schema',
      content: {
        'application/json': {
          schema: z
            .object({
              schema: z
                .object({
                  apiVersion: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ad810c39-df60-434e-a76f-a2192cd8d81f' }),
                  createdAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'e3b3a0b7-34d5-4fc5-83e0-118bd9e8c822' }),
                  language: z.string().exactOptional().openapi({ example: 'yaml' }),
                  type: z.string().exactOptional().openapi({ example: 'openapi3' }),
                  updateBy: z.string().exactOptional().openapi({ example: '5665' }),
                  updatedAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Create schema': {
              value: {
                schema: {
                  apiVersion: 'ad810c39-df60-434e-a76f-a2192cd8d81f',
                  createdAt: '2019-02-12 19:34:49',
                  createdBy: '5665',
                  id: 'e3b3a0b7-34d5-4fc5-83e0-118bd9e8c822',
                  language: 'yaml',
                  type: 'openapi3',
                  updateBy: '5665',
                  updatedAt: '2019-02-12 19:34:49',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}',
  tags: ['API', 'Schema'],
  summary: 'Get Schema',
  description:
    'This call fetches a single schema having the specified id.\n\nResponse contains a `schema` object with all the details related to the schema, namely, `id`, `language`, `type`, `schema` etc. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getSchema',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
      schemaId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'schemaId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get schema',
      content: {
        'application/json': {
          schema: z
            .object({
              schema: z
                .object({
                  apiVersion: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ad810c39-df60-434e-a76f-a2192cd8d81f' }),
                  createdAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'e3b3a0b7-34d5-4fc5-83e0-118bd9e8c822' }),
                  language: z.string().exactOptional().openapi({ example: 'yaml' }),
                  type: z.string().exactOptional().openapi({ example: 'openapi3' }),
                  updateBy: z.string().exactOptional().openapi({ example: '5665' }),
                  updatedAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Get schema': {
              value: {
                schema: {
                  apiVersion: 'ad810c39-df60-434e-a76f-a2192cd8d81f',
                  createdAt: '2019-02-12 19:34:49',
                  createdBy: '5665',
                  id: 'e3b3a0b7-34d5-4fc5-83e0-118bd9e8c822',
                  language: 'yaml',
                  type: 'openapi3',
                  updateBy: '5665',
                  updatedAt: '2019-02-12 19:34:49',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putApisApiIdVersionsApiVersionIdSchemasSchemaIdRoute = createRoute({
  method: 'put',
  path: '/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}',
  tags: ['API', 'Schema'],
  summary: 'Update Schema',
  description:
    'This call updates an existing schema.\n\nRequest body should contain a `schema` object which should atleast have these properties with `string` values:\n\n- **`type`**: Allowed types are `openapi3`, `openapi2`, `openapi1`, `raml` and `graphql`.\n- **`language`** : Allowed languages are `json` and `yaml` for OpenAPI and RAML schema types. GraphQL schema type accepts only `graphql` language.\n- **`schema`**: Optional. If passed, must be the content of the schema as a `string`.\n\nResponse contains a `schema` object with all the details related to the created schema, namely, `id`, `language`, `type` etc. \n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'updateSchema',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
      schemaId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'schemaId', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              schema: z
                .object({
                  language: z.string().exactOptional().openapi({ example: 'json' }),
                  schema: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example:
                        '{\n  "openapi": "3.0.0",\n  "info": null,\n  "version": "v1.0",\n  "title": "APi",\n  "servers": [\n    {\n      "url": "http://localhost:3000"\n    }\n  ],\n  "paths": {\n    "/user": {\n      "get": {\n        "summary": "Returns details about a particular user",\n        "operationId": "listUser",\n        "tags": [\n          "user"\n        ],\n        "parameters": [\n          {\n            "name": "id",\n            "in": "query",\n            "description": "ID of the user",\n            "required": true,\n            "schema": {\n              "type": "integer",\n              "format": "int32"\n            }\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "Details about a user by ID",\n            "headers": {\n              "x-next": {\n                "description": "A link to the next page of responses",\n                "schema": {\n                  "type": "string"\n                }\n              }\n            },\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/User\\\\\'"\n                }\n              }\n            }\n          },\n          "default": {\n            "description": "Unexpected error",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/Error\\\\\'"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "User": {\n        "type": "object",\n        "required": [\n          "id",\n          "name"\n        ],\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          },\n          "tag": {\n            "type": "string"\n          }\n        }\n      },\n      "Error": {\n        "type": "object",\n        "required": [\n          "code",\n          "message"\n        ],\n        "properties": {\n          "code": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "message": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  }\n}',
                    }),
                  type: z.string().exactOptional().openapi({ example: 'openapi3' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            schema: {
              language: 'json',
              schema:
                '{\n  "openapi": "3.0.0",\n  "info": null,\n  "version": "v1.0",\n  "title": "APi",\n  "servers": [\n    {\n      "url": "http://localhost:3000"\n    }\n  ],\n  "paths": {\n    "/user": {\n      "get": {\n        "summary": "Returns details about a particular user",\n        "operationId": "listUser",\n        "tags": [\n          "user"\n        ],\n        "parameters": [\n          {\n            "name": "id",\n            "in": "query",\n            "description": "ID of the user",\n            "required": true,\n            "schema": {\n              "type": "integer",\n              "format": "int32"\n            }\n          }\n        ],\n        "responses": {\n          "200": {\n            "description": "Details about a user by ID",\n            "headers": {\n              "x-next": {\n                "description": "A link to the next page of responses",\n                "schema": {\n                  "type": "string"\n                }\n              }\n            },\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/User\\\\\'"\n                }\n              }\n            }\n          },\n          "default": {\n            "description": "Unexpected error",\n            "content": {\n              "application/json": {\n                "schema": {\n                  "$ref": "\\\\\'#/components/schemas/Error\\\\\'"\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  },\n  "components": {\n    "schemas": {\n      "User": {\n        "type": "object",\n        "required": [\n          "id",\n          "name"\n        ],\n        "properties": {\n          "id": {\n            "type": "integer",\n            "format": "int64"\n          },\n          "name": {\n            "type": "string"\n          },\n          "tag": {\n            "type": "string"\n          }\n        }\n      },\n      "Error": {\n        "type": "object",\n        "required": [\n          "code",\n          "message"\n        ],\n        "properties": {\n          "code": {\n            "type": "integer",\n            "format": "int32"\n          },\n          "message": {\n            "type": "string"\n          }\n        }\n      }\n    }\n  }\n}',
              type: 'openapi3',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Update schema',
      content: {
        'application/json': {
          schema: z
            .object({
              schema: z
                .object({
                  apiVersion: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'ad810c39-df60-434e-a76f-a2192cd8d81f' }),
                  createdAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                  createdBy: z.string().exactOptional().openapi({ example: '5665' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'e3b3a0b7-34d5-4fc5-83e0-118bd9e8c822' }),
                  language: z.string().exactOptional().openapi({ example: 'yaml' }),
                  type: z.string().exactOptional().openapi({ example: 'openapi3' }),
                  updateBy: z.string().exactOptional().openapi({ example: '5665' }),
                  updatedAt: z.string().exactOptional().openapi({ example: '2019-02-12 19:34:49' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Update schema': {
              value: {
                schema: {
                  apiVersion: 'ad810c39-df60-434e-a76f-a2192cd8d81f',
                  createdAt: '2019-02-12 19:34:49',
                  createdBy: '5665',
                  id: 'e3b3a0b7-34d5-4fc5-83e0-118bd9e8c822',
                  language: 'yaml',
                  type: 'openapi3',
                  updateBy: '5665',
                  updatedAt: '2019-02-12 19:34:49',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postApisApiIdVersionsApiVersionIdSchemasSchemaIdCollectionsRoute = createRoute({
  method: 'post',
  path: '/apis/{apiId}/versions/{apiVersionId}/schemas/{schemaId}/collections',
  tags: ['API', 'Schema'],
  summary: 'Create collection from schema',
  description:
    'This call creates a collection and links it to an API as one or multiple relations. \n\nRequest body requires two keys:\n- `name` - Name of the collection to be created.\n- `relations` - A list of relation(s) to be created.\n\nThe allowed relation types are `contracttest`, `integrationtest`, `testsuite`, and `documentation`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createCollectionFromSchema',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
      schemaId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'schemaId', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workspace',
            schema: { example: '{{workspaceId}}', type: 'string' },
            required: false,
          },
          example: '{{workspaceId}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              name: z.string().exactOptional().openapi({ example: 'My generated collection' }),
              relations: z
                .array(
                  z
                    .object({
                      type: z.string().exactOptional().openapi({ example: 'contracttest' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          example: { name: 'My generated collection', relations: [{ type: 'contracttest' }] },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create collection from schema',
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'e6b0d46a-8722-4f42-ab86-f5f473187ddf' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '112098-e6b0d46a-8722-4f42-ab86-f5f473187ddf' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
              relations: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '4b40f06a-5a6a-448f-bfcd-a6dbcb68da22' }),
                      type: z.string().exactOptional().openapi({ example: 'contracttest' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Create collection from schema': {
              value: {
                collection: {
                  id: 'e6b0d46a-8722-4f42-ab86-f5f473187ddf',
                  uid: '112098-e6b0d46a-8722-4f42-ab86-f5f473187ddf',
                },
                relations: [{ id: '4b40f06a-5a6a-448f-bfcd-a6dbcb68da22', type: 'contracttest' }],
              },
            },
          },
        },
      },
    },
  },
})

export const getApisApiIdVersionsApiVersionIdTestsuiteRoute = createRoute({
  method: 'get',
  path: '/apis/{apiId}/versions/{apiVersionId}/testsuite',
  tags: ['API', 'Relations'],
  summary: 'Get test suite relations',
  description:
    'This call fetches all the relations by type which are linked to the specified API version along with their details.\n\nThe response will contain an array with key `{{relationType}}`. Each of the item will consist of all the details related each of the relation.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'getTestSuiteRelations',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiId', required: true, schema: { type: 'string' } },
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: { in: 'path', name: 'apiVersionId', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Get test suite relations',
      content: {
        'application/json': {
          schema: z
            .object({
              testsuite: z
                .array(
                  z
                    .object({
                      collectionId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2' }),
                      name: z.string().exactOptional().openapi({ example: 'C test' }),
                      updatedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2019-08-29T10:18:11.000Z' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Get test suite relations': {
              value: {
                testsuite: [
                  {
                    collectionId: '7732157-a8bcd149-2b01-4b4c-8c14-c7d05be77745',
                    id: '2a9b8fa8-88b7-4b86-8372-8e3f6f6e07f2',
                    name: 'C test',
                    updatedAt: '2019-08-29T10:18:11.000Z',
                  },
                  {
                    collectionId: '7332157-a8bcd143-2b01-4b12-8c14-c7d05be77725',
                    id: '521b0486-ab91-4d3a-9189-43c9380a0533',
                    name: 'C1',
                    updatedAt: '2019-08-29T11:40:39.000Z',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const putApisApiIdVersionsApiVersionIdEntityTypeEntityIdSyncWithSchemaRoute = createRoute({
  method: 'put',
  path: '/apis/{apiId}/versions/{apiVersionId}/{entityType}/{entityId}/syncWithSchema',
  tags: ['API', 'Relations'],
  summary: 'Sync relations with schema',
  description:
    'This call allows you to keep the relation in sync with the API schema.\n\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'syncRelationsWithSchema',
  request: {
    params: z.object({
      apiId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the API',
            in: 'path',
            name: 'apiId',
            required: true,
            schema: { example: '{{apiId}}', type: 'string' },
          },
          example: '{{apiId}}',
        }),
      apiVersionId: z
        .string()
        .openapi({
          param: {
            description: 'Id of the API version',
            in: 'path',
            name: 'apiVersionId',
            required: true,
            schema: { example: '{{apiVersionId}}', type: 'string' },
          },
          example: '{{apiVersionId}}',
        }),
      entityType: z
        .string()
        .openapi({
          param: {
            description:
              'Relation type (e.g documentation, contracttest, integrationtest, testsuite, mock, monitor)',
            in: 'path',
            name: 'entityType',
            required: true,
            schema: { example: '{{entityType}}', type: 'string' },
          },
          example: '{{entityType}}',
        }),
      entityId: z
        .string()
        .openapi({
          param: {
            description: 'Relation id',
            in: 'path',
            name: 'entityId',
            required: true,
            schema: { example: '{{entityId}}', type: 'string' },
          },
          example: '{{entityId}}',
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful sync',
      content: {
        'application/json': {
          schema: z
            .object({ success: z.boolean().exactOptional().openapi({ example: true }) })
            .openapi({ required: [] }),
          examples: { 'Successful sync': { value: { success: true } } },
        },
      },
    },
    400: {
      description: 'Failed to sync',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example:
                        'Unable to validate. Only the OpenAPI 3.0 schema format is supported.',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'validationFailed' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Failed to sync': {
              value: {
                error: {
                  message: 'Unable to validate. Only the OpenAPI 3.0 schema format is supported.',
                  name: 'validationFailed',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getCollectionsRoute = createRoute({
  method: 'get',
  path: '/collections',
  tags: ['Collections'],
  summary: 'All Collections',
  description:
    'The `/collections` endpoint returns a list of all [collections](https://www.getpostman.com/docs/collections) that are accessible by you. The list includes your own collections and the collections that you have subscribed to.\n\nThe response contains an array of collection information containing the `name`, `id`, `owner` and `uid` of each collection.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'allCollections',
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              collections: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'dac5eac9-148d-a32e-b76b-3edee9da28f7' }),
                      name: z.string().exactOptional().openapi({ example: 'Cloud API' }),
                      owner: z.string().exactOptional().openapi({ example: '631643' }),
                      uid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '631643-dac5eac9-148d-a32e-b76b-3edee9da28f7' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                collections: [
                  {
                    id: 'dac5eac9-148d-a32e-b76b-3edee9da28f7',
                    name: 'Cloud API',
                    owner: '631643',
                    uid: '631643-dac5eac9-148d-a32e-b76b-3edee9da28f7',
                  },
                  {
                    id: 'f2e66c2e-5297-e4a5-739e-20cbb90900e3',
                    name: 'Sample Collection',
                    owner: '631643',
                    uid: '631643-f2e66c2e-5297-e4a5-739e-20cbb90900e3',
                  },
                  {
                    id: 'f695cab7-6878-eb55-7943-ad88e1ccfd65',
                    name: 'Postman Echo',
                    owner: '631643',
                    uid: '631643-f695cab7-6878-eb55-7943-ad88e1ccfd65',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postCollectionsRoute = createRoute({
  method: 'post',
  path: '/collections',
  tags: ['Collections'],
  summary: 'Create Collection',
  description:
    'This endpoint allows you to create collections using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).\n\nOn successful creation of the collection, the response returns the collection `name`, `id` and the `uid`.\n\nYou can also specify the context of a workspace to create a collection in directly by passing the `workspace` as a query param.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createCollection',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  info: z
                    .object({
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'This is just a sample collection.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Sample Collection {{$randomInt}}' }),
                      schema: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  item: z
                    .array(
                      z
                        .object({
                          item: z
                            .array(
                              z
                                .object({
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Sample POST Request' }),
                                  request: z
                                    .object({
                                      body: z
                                        .object({
                                          mode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: 'raw' }),
                                          raw: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: '{"data": "123"}' }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      description: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'This is a sample POST Request' }),
                                      header: z
                                        .array(
                                          z
                                            .object({
                                              key: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ example: 'Content-Type' }),
                                              value: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ example: 'application/json' }),
                                            })
                                            .openapi({ required: [] }),
                                        )
                                        .exactOptional(),
                                      method: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'POST' }),
                                      url: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'https://postman-echo.com/post' }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          name: z.string().exactOptional().openapi({ example: 'This is a folder' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            collection: {
              info: {
                description: 'This is just a sample collection.',
                name: 'Sample Collection {{$randomInt}}',
                schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
              },
              item: [
                {
                  item: [
                    {
                      name: 'Sample POST Request',
                      request: {
                        body: { mode: 'raw', raw: '{"data": "123"}' },
                        description: 'This is a sample POST Request',
                        header: [{ key: 'Content-Type', value: 'application/json' }],
                        method: 'POST',
                        url: 'https://postman-echo.com/post',
                      },
                    },
                  ],
                  name: 'This is a folder',
                },
                {
                  name: 'Sample GET Request',
                  request: {
                    description: 'This is a sample GET Request',
                    method: 'GET',
                    url: 'https://postman-echo/get',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create Collection in a Workspace',
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '2412a72c-1d8e-491b-aced-93809c0e94e9' }),
                  name: z.string().exactOptional().openapi({ example: 'Sample Collection' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-2412a72c-1d8e-491b-aced-93809c0e94e9' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Create Collection in a Workspace': {
              value: {
                collection: {
                  id: '2412a72c-1d8e-491b-aced-93809c0e94e9',
                  name: 'Sample Collection',
                  uid: '5852-2412a72c-1d8e-491b-aced-93809c0e94e9',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Malformed Request',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Missing required property: name at info' }),
                  name: z.string().exactOptional().openapi({ example: 'malformedRequestError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Malformed Request': {
              value: {
                error: {
                  message: 'Missing required property: name at info',
                  name: 'malformedRequestError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postCollectionsForkCollectionUidRoute = createRoute({
  method: 'post',
  path: '/collections/fork/{collection_uid}',
  tags: ['Collections'],
  summary: 'Create a Fork',
  description:
    'This endpoint allows you to create a fork from an existing collection.\n\nOn successful creation of the collection, the response returns the collection `name`, `id`, `uid` along with `fork` information.\n\nYou can also specify the context of a workspace to fork a collection in by passing the `workspace` as a query param.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createAFork',
  request: {
    params: z.object({
      collection_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    query: z.object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            description: 'Workspace ID is required to create a fork',
            in: 'query',
            name: 'workspace',
            schema: { example: '{{workspace_id}}', type: 'string' },
            required: false,
          },
          example: '{{workspace_id}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({ name: z.string().exactOptional().openapi({ example: 'Fork name' }) })
            .openapi({ required: [] }),
          example: { name: 'Fork name' },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const postCollectionsMergeRoute = createRoute({
  method: 'post',
  path: '/collections/merge',
  tags: ['Collections'],
  summary: 'Merge a Fork',
  description:
    'This endpoint allows you to merge a forked collection back to its destination collection.\n\nOn successful creation of the collection, the response returns the collection `name`, `id` and `uid`.\n\nYou need to specify the fork UID (as `source`) and destination collection UID (as `destination`) in the request body.\n\nOptionally, you can also specify the merge strategy as either `deleteSource` or `updateSourceWithDestination`. Following is an explanation of the merge strategies\n\n| Merge Strategy | Behaviour |\n| --- | --- |\n| deleteSource | Forked collection is deleted after merging |\n| updateSourceWithDestination | Forked collection is up to date with changes in destination collection |\n\nIf the collections cannot be merged (due to conflicts), appropriate error messages will be returned.\n\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'mergeAFork',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              destination: z
                .string()
                .exactOptional()
                .openapi({ example: '{{destination_collection_uid}}' }),
              source: z.string().exactOptional().openapi({ example: '{{source_collection_uid}}' }),
              strategy: z.string().exactOptional().openapi({ example: 'deleteSource' }),
            })
            .openapi({ required: [] }),
          example: {
            destination: '{{destination_collection_uid}}',
            source: '{{source_collection_uid}}',
            strategy: 'deleteSource',
          },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getCollectionsCollectionUidRoute = createRoute({
  method: 'get',
  path: '/collections/{collection_uid}',
  tags: ['Collections'],
  summary: 'Single Collection ',
  description:
    'Access the contents of a collection that is accessible to you using its unique id (`uid`).\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'singleCollection',
  request: {
    params: z.object({
      collection_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  info: z
                    .object({
                      _postman_id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'f2e66c2e-5297-e4a5-739e-20cbb90900e3' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'This is a sample collection that makes a tiny request to Postman Echo service to get the list of request headers sent by a HTTP client.',
                        }),
                      name: z.string().exactOptional().openapi({ example: 'Sample Collection' }),
                      schema: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://schema.getpostman.com/json/collection/v2.0.0/collection.json',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  item: z
                    .array(
                      z
                        .object({
                          event: z
                            .array(
                              z
                                .object({
                                  listen: z.string().exactOptional().openapi({ example: 'test' }),
                                  script: z
                                    .object({
                                      exec: z
                                        .string()
                                        .exactOptional()
                                        .openapi({
                                          example:
                                            'var responseJSON;\ntry {\n    tests["Body contains headers"] = responseBody.has("headers");\n    responseJSON = JSON.parse(responseBody);\n    tests["Header contains host"] = "host" in responseJSON.headers;\n    tests["Header contains test parameter sent as part of request header"] = "my-sample-header" in responseJSON.headers;\n}\ncatch (e) { }\n\n\n\n',
                                        }),
                                      type: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'text/javascript' }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '82ee981b-e19f-962a-401e-ea34ebfb4848' }),
                          name: z.string().exactOptional().openapi({ example: 'Request Headers' }),
                          request: z
                            .object({
                              body: z
                                .object({
                                  formdata: z.array(z.any()).exactOptional(),
                                  mode: z.string().exactOptional().openapi({ example: 'formdata' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              description: z.string().exactOptional().openapi({ example: '' }),
                              header: z
                                .array(
                                  z
                                    .object({
                                      description: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: '' }),
                                      key: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'my-sample-header' }),
                                      value: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'Lorem ipsum dolor sit amet' }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              method: z.string().exactOptional().openapi({ example: 'GET' }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'https://echo.getpostman.com/headers' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          response: z.array(z.any()).exactOptional(),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  variables: z.array(z.any()).exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                collection: {
                  info: {
                    _postman_id: 'f2e66c2e-5297-e4a5-739e-20cbb90900e3',
                    description:
                      'This is a sample collection that makes a tiny request to Postman Echo service to get the list of request headers sent by a HTTP client.',
                    name: 'Sample Collection',
                    schema: 'https://schema.getpostman.com/json/collection/v2.0.0/collection.json',
                  },
                  item: [
                    {
                      event: [
                        {
                          listen: 'test',
                          script: {
                            exec: 'var responseJSON;\ntry {\n    tests["Body contains headers"] = responseBody.has("headers");\n    responseJSON = JSON.parse(responseBody);\n    tests["Header contains host"] = "host" in responseJSON.headers;\n    tests["Header contains test parameter sent as part of request header"] = "my-sample-header" in responseJSON.headers;\n}\ncatch (e) { }\n\n\n\n',
                            type: 'text/javascript',
                          },
                        },
                      ],
                      id: '82ee981b-e19f-962a-401e-ea34ebfb4848',
                      name: 'Request Headers',
                      request: {
                        body: { formdata: [], mode: 'formdata' },
                        description: '',
                        header: [
                          {
                            description: '',
                            key: 'my-sample-header',
                            value: 'Lorem ipsum dolor sit amet',
                          },
                        ],
                        method: 'GET',
                        url: 'https://echo.getpostman.com/headers',
                      },
                      response: [],
                    },
                  ],
                  variables: [],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putCollectionsCollectionUidRoute = createRoute({
  method: 'put',
  path: '/collections/{collection_uid}',
  tags: ['Collections'],
  summary: 'Update Collection',
  description:
    'This endpoint allows you to update an existing collection using the Postman Collection v2 format. For more information about the v2 schema, check the format [here](https://schema.getpostman.com/json/collection/v2.0.0/docs/index.html).\n\nOn successful updation of the collection, the response returns the collection `name`, `id` and `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.\n\nNote: Please be careful when trying to update the collection, as the existing collection will be replaced by the request body.',
  operationId: 'updateCollection',
  request: {
    params: z.object({
      collection_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  info: z
                    .object({
                      _postman_id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '174bad7c-07e3-45f3-914f-36cf84e5586f' }),
                      description: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'This is just a sample collection.' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Sample Collection {{$randomInt}}' }),
                      schema: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example:
                            'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
                        }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  item: z
                    .array(
                      z
                        .object({
                          item: z
                            .array(
                              z
                                .object({
                                  name: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Sample POST Request' }),
                                  request: z
                                    .object({
                                      body: z
                                        .object({
                                          mode: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: 'raw' }),
                                          raw: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: '{"data": "123"}' }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      description: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'This is a sample POST Request' }),
                                      header: z
                                        .array(
                                          z
                                            .object({
                                              key: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ example: 'Content-Type' }),
                                              value: z
                                                .string()
                                                .exactOptional()
                                                .openapi({ example: 'application/json' }),
                                            })
                                            .openapi({ required: [] }),
                                        )
                                        .exactOptional(),
                                      method: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'POST' }),
                                      url: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'https://postman-echo.com/post' }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .openapi({ required: [] }),
                            )
                            .exactOptional(),
                          name: z.string().exactOptional().openapi({ example: 'This is a folder' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            collection: {
              info: {
                _postman_id: '174bad7c-07e3-45f3-914f-36cf84e5586f',
                description: 'This is just a sample collection.',
                name: 'Sample Collection {{$randomInt}}',
                schema: 'https://schema.getpostman.com/json/collection/v2.1.0/collection.json',
              },
              item: [
                {
                  item: [
                    {
                      name: 'Sample POST Request',
                      request: {
                        body: { mode: 'raw', raw: '{"data": "123"}' },
                        description: 'This is a sample POST Request',
                        header: [{ key: 'Content-Type', value: 'application/json' }],
                        method: 'POST',
                        url: 'https://postman-echo.com/post',
                      },
                    },
                  ],
                  name: 'This is a folder',
                },
                {
                  name: 'Sample GET Request',
                  request: {
                    description: 'This is a sample GET Request',
                    method: 'GET',
                    url: 'https://postman-echo/get',
                  },
                },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Collection Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1d3daef4-2037-4584-ab86-bafd8c8f8a55' }),
                  name: z.string().exactOptional().openapi({ example: 'Sample Collection' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-1d3daef4-2037-4584-ab86-bafd8c8f8a55' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Collection Updated': {
              value: {
                collection: {
                  id: '1d3daef4-2037-4584-ab86-bafd8c8f8a55',
                  name: 'Sample Collection',
                  uid: '5852-1d3daef4-2037-4584-ab86-bafd8c8f8a55',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Collection ID Mismatch',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example:
                        'The collection ID in the path does not match the collection ID in the request body.',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'collectionMismatchError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Collection ID Mismatch': {
              value: {
                error: {
                  message:
                    'The collection ID in the path does not match the collection ID in the request body.',
                  name: 'collectionMismatchError',
                },
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Not Enough Permissions',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'You do not have enough permissions to perform this action.',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'forbiddenError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Not Enough Permissions': {
              value: {
                error: {
                  message: 'You do not have enough permissions to perform this action.',
                  name: 'forbiddenError',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Collection Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  details: z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1d3daef4-2037-4584-ab86-bafd8c8f8a54' }),
                      item: z.string().exactOptional().openapi({ example: 'collection' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'The specified item does not exist.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Collection Not Found': {
              value: {
                error: {
                  details: { id: '1d3daef4-2037-4584-ab86-bafd8c8f8a54', item: 'collection' },
                  message: 'The specified item does not exist.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteCollectionsCollectionUidRoute = createRoute({
  method: 'delete',
  path: '/collections/{collection_uid}',
  tags: ['Collections'],
  summary: 'Delete Collection',
  description:
    'This endpoint allows you to delete an existing collection.\n\nOn successful deletion of the collection, the response returns the `id` and `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteCollection',
  request: {
    params: z.object({
      collection_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'collection_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Collection Deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              collection: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'a14c6da7-afba-4a84-bf22-4febbaaced6c' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-a14c6da7-afba-4a84-bf22-4febbaaced6c' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Collection Deleted': {
              value: {
                collection: {
                  id: 'a14c6da7-afba-4a84-bf22-4febbaaced6c',
                  uid: '5852-a14c6da7-afba-4a84-bf22-4febbaaced6c',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Collection Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  details: z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'a14c6da7-afba-4a84-bf22-4febbaaced6c' }),
                      item: z.string().exactOptional().openapi({ example: 'collection' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'The specified item does not exist.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Collection Not Found': {
              value: {
                error: {
                  details: { id: 'a14c6da7-afba-4a84-bf22-4febbaaced6c', item: 'collection' },
                  message: 'The specified item does not exist.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getEnvironmentsRoute = createRoute({
  method: 'get',
  path: '/environments',
  tags: ['Environments'],
  summary: 'All Environments',
  description:
    'The `/environments` endpoint returns a list of all [environments](https://www.getpostman.com/docs/environments) that belong to you..\n\nThe response contains an array of environments\' information containing the `name`, `id`, `owner` and `uid` of each environment.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'allEnvironments',
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              environments: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '357668d2-84f1-2264-438b-113095359f80' }),
                      name: z.string().exactOptional().openapi({ example: 'Postman Cloud API' }),
                      owner: z.string().exactOptional().openapi({ example: '631643' }),
                      uid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '631643-357668d2-84f1-2264-438b-113095359f80' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                environments: [
                  {
                    id: '357668d2-84f1-2264-438b-113095359f80',
                    name: 'Postman Cloud API',
                    owner: '631643',
                    uid: '631643-357668d2-84f1-2264-438b-113095359f80',
                  },
                  {
                    id: '84a119b6-f4b1-9120-5f11-a73b17818d70',
                    name: 'Postman Cloud API.template',
                    owner: '631643',
                    uid: '631643-84a119b6-f4b1-9120-5f11-a73b17818d70',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postEnvironmentsRoute = createRoute({
  method: 'post',
  path: '/environments',
  tags: ['Environments'],
  summary: 'Create Environment',
  description:
    'A sample body is added to the request that conforms to the following JSON schema:\n\n```json\n{\n  "type": "object",\n  "properties": {\n    "environment": {\n      "type": "object",\n      "properties": {\n        "name": {\n              "type": "string",\n              "maxLength": 254,\n              "minLength": 1\n            },\n        "values": {\n          "type": "array",\n          "maxItems": 100,\n          "additionalItems": false,\n          "items": {\n              "type": "object",\n              "properties": {\n                "key": {\n                  "type": "string",\n                  "maxLength": 254\n                  "minLength": 1\n                },\n                "value": { "type": "string" },\n                "enabled": { "type": "boolean" }\n              },\n              "required": ["key", "value"]\n            }\n        }\n      },\n      "required": ["name"]\n    }\n  },\n  "required": ["environment"]\n}\n```\n\nOn successful creation of the environment, the API returns the environment name and `id`.\n\nYou can also specify the context of a workspace to create an environment in directly by passing the `workspace` as a query param.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createEnvironment',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              environment: z
                .object({
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Sample Environment Name (required)' }),
                  values: z
                    .array(
                      z
                        .object({
                          key: z.string().exactOptional().openapi({ example: 'variable_name_1' }),
                          value: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'The value of the variable' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            environment: {
              name: 'Sample Environment Name (required)',
              values: [
                { key: 'variable_name_1', value: 'The value of the variable' },
                { key: 'variable_name_2', value: '' },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              environment: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'f158266e-306b-4702-a2b9-e4ede7878b7a' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Sample Environment Name (required)' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5665-f158266e-306b-4702-a2b9-e4ede7878b7a' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                environment: {
                  id: 'f158266e-306b-4702-a2b9-e4ede7878b7a',
                  name: 'Sample Environment Name (required)',
                  uid: '5665-f158266e-306b-4702-a2b9-e4ede7878b7a',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Failure Response',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Missing required property: environment' }),
                  name: z.string().exactOptional().openapi({ example: 'malformedRequestError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Failure Response': {
              value: {
                error: {
                  message: 'Missing required property: environment',
                  name: 'malformedRequestError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getEnvironmentsEnvironmentUidRoute = createRoute({
  method: 'get',
  path: '/environments/{environment_uid}',
  tags: ['Environments'],
  summary: 'Single Environment',
  description:
    'Access the contents of an environment that is accessible to you using its unique id (`uid`).\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'singleEnvironment',
  request: {
    params: z.object({
      environment_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'environment_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              environment: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '84a119b6-f4b1-9120-5f11-a73b17818d70' }),
                  name: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Postman Cloud API.template' }),
                  values: z
                    .array(
                      z
                        .object({
                          enabled: z.boolean().exactOptional().openapi({ example: true }),
                          hovered: z.boolean().exactOptional().openapi({ example: false }),
                          key: z.string().exactOptional().openapi({ example: 'postman_api_key' }),
                          type: z.string().exactOptional().openapi({ example: 'text' }),
                          value: z.string().exactOptional().openapi({ example: '' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                environment: {
                  id: '84a119b6-f4b1-9120-5f11-a73b17818d70',
                  name: 'Postman Cloud API.template',
                  values: [
                    {
                      enabled: true,
                      hovered: false,
                      key: 'postman_api_key',
                      type: 'text',
                      value: '',
                    },
                  ],
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putEnvironmentsEnvironmentUidRoute = createRoute({
  method: 'put',
  path: '/environments/{environment_uid}',
  tags: ['Environments'],
  summary: 'Update Environment',
  description:
    'This endpoint replaces an existing environment.\n\nA sample body is added to the request that conforms to the following JSON schema:\n\n```json\n{\n\t"type": "object",\n\t"properties": {\n\t\t"environment": {\n\t\t\t"type": "object",\n\t\t\t"properties": {\n\t\t\t\t"name": {\n\t\t\t\t\t"type": "string",\n\t\t\t\t\t"maxLength": 254,\n\t\t\t\t\t"minLength": 1\n\t\t\t\t},\n\t\t\t\t"values": {\n\t\t\t\t\t"type": "array",\n\t\t\t\t\t"maxItems": 100,\n\t\t\t\t\t"additionalItems": false,\n\t\t\t\t\t"items": {\n\t\t\t\t\t\t"type": "object",\n\t\t\t\t\t\t"properties": {\n\t\t\t\t\t\t\t"key": {\n\t\t\t\t\t\t\t\t"type": "string",\n\t\t\t\t\t\t\t\t"maxLength": 254,\n\t\t\t\t\t\t\t\t"minLength": 1\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t"value": {\n\t\t\t\t\t\t\t\t"type": "string",\n\t\t\t\t\t\t\t\t"maxLength": 254,\n\t\t\t\t\t\t\t\t"minLength": 1\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t"type": {\n\t\t\t\t\t\t\t\t"type": "string"\n\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t"enabled": {\n\t\t\t\t\t\t\t\t"type": "boolean"\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t},\n\t\t\t\t\t\t"required": [\n\t\t\t\t\t\t\t"key",\n\t\t\t\t\t\t\t"value"\n\t\t\t\t\t\t]\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t},\n\t"required": [\n\t\t"environment"\n\t]\n}\n```\n\nOn successful updation of the environment, the API returns the environment name and `id`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'updateEnvironment',
  request: {
    params: z.object({
      environment_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'environment_uid',
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
              environment: z
                .object({
                  name: z.string().exactOptional().openapi({ example: 'New Name' }),
                  values: z
                    .array(
                      z
                        .object({
                          key: z.string().exactOptional().openapi({ example: 'name' }),
                          value: z.string().exactOptional().openapi({ example: 'Bruce Wayne' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            environment: {
              name: 'New Name',
              values: [
                { key: 'name', value: 'Bruce Wayne' },
                { key: 'occupation', value: 'Vigilante' },
              ],
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              environment: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '357668d2-84f1-2264-438b-113095359f80' }),
                  name: z.string().exactOptional().openapi({ example: 'New Name' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '631643-357668d2-84f1-2264-438b-113095359f80' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                environment: {
                  id: '357668d2-84f1-2264-438b-113095359f80',
                  name: 'New Name',
                  uid: '631643-357668d2-84f1-2264-438b-113095359f80',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Failure Response',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'Invalid type: null (expected object) at environment.values.0',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'malformedRequestError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Failure Response': {
              value: {
                error: {
                  message: 'Invalid type: null (expected object) at environment.values.0',
                  name: 'malformedRequestError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteEnvironmentsEnvironmentUidRoute = createRoute({
  method: 'delete',
  path: '/environments/{environment_uid}',
  tags: ['Environments'],
  summary: 'Delete Environment',
  description:
    'This endpoint allows you to delete a single environment based on an environment\'s unique `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteEnvironment',
  request: {
    params: z.object({
      environment_uid: z
        .string()
        .openapi({
          param: {
            in: 'path',
            name: 'environment_uid',
            required: true,
            schema: { type: 'string' },
          },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Environment Deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              environment: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '4dfb28a4-9a6c-4ce4-b31a-17c26a8b2cce' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-4dfb28a4-9a6c-4ce4-b31a-17c26a8b2cce' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Environment Deleted': {
              value: {
                environment: {
                  id: '4dfb28a4-9a6c-4ce4-b31a-17c26a8b2cce',
                  uid: '5852-4dfb28a4-9a6c-4ce4-b31a-17c26a8b2cce',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Environment Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'The specified environment does not exist.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Environment Not Found': {
              value: {
                error: {
                  message: 'The specified environment does not exist.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postImportExportedRoute = createRoute({
  method: 'post',
  path: '/import/exported',
  tags: ['Import'],
  summary: 'Import exported data',
  description:
    'This endpoint allows you to import your exported Postman data.\nFor more information about how you can export your data, refer <a href="https://go.postman.co/me/export">Export your Postman data.</a>\n\nOn successful imports, the response will be an array with Each element contaning `id`, `name` and `uid` of entities created.\n\n**Note**: Refer to examples for different scenarios.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.',
  operationId: 'importExportedData',
  request: { body: { content: {} } },
  responses: {
    200: {
      description:
        'Success: Import to a specific workspace with workspace ID passed as a query parameter',
      content: {
        'application/json': {
          schema: z
            .object({
              collections: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'b31be584-1b1e-4444-b581-761edf88fe77' }),
                      name: z.string().exactOptional().openapi({ example: 'Swagger Petstore' }),
                      uid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2282-b31be584-1b1e-4444-b581-761edf88fe77' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success: Import to a specific workspace with workspace ID passed as a query parameter':
              {
                value: {
                  collections: [
                    {
                      id: 'b31be584-1b1e-4444-b581-761edf88fe77',
                      name: 'Swagger Petstore',
                      uid: '2282-b31be584-1b1e-4444-b581-761edf88fe77',
                    },
                  ],
                },
              },
          },
        },
      },
    },
    400: {
      description: 'Error: Param Missing',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  details: z
                    .object({ param: z.string().exactOptional().openapi({ example: 'type' }) })
                    .exactOptional()
                    .openapi({ required: [] }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example:
                        'The request body is missing a value for the type parameter. Check your request and try again.',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'paramMissingError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Error: Param Missing': {
              value: {
                error: {
                  details: { param: 'type' },
                  message:
                    'The request body is missing a value for the type parameter. Check your request and try again.',
                  name: 'paramMissingError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postImportOpenapiRoute = createRoute({
  method: 'post',
  path: '/import/openapi',
  tags: ['Import'],
  summary: 'Import external API specification',
  description:
    'This endpoint allows you to import external API specifications into Postman.\n\nCurrently, this endpoint only supports the <a href="https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.2.md">OpenAPI</a> specification, for which the `importType` will be `openapi`.\n\nOn a successful import, the response will be an array with each element contaning `id`, `name` and `uid` of entities created.\n\nSupported `type`s:\n\n- string\n- json\n- file\n\nThe `input` parameter should be defined based on the `type`.\n\n> To import a file, request body must be form-data with `type` param set to `file`.\n\n**Note**: Refer to examples for different scenarios.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header.',
  operationId: 'importExternalApiSpecification',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              input: z
                .object({
                  info: z
                    .object({
                      license: z
                        .object({ name: z.string().exactOptional().openapi({ example: 'MIT' }) })
                        .exactOptional()
                        .openapi({ required: [] }),
                      title: z.string().exactOptional().openapi({ example: 'Swagger Petstore' }),
                      version: z.string().exactOptional().openapi({ example: '1.0.0' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  openapi: z.string().exactOptional().openapi({ example: '3.0.0' }),
                  paths: z
                    .object({
                      '/pets': z
                        .object({
                          get: z
                            .object({
                              operationId: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'listPets' }),
                              parameters: z
                                .array(
                                  z
                                    .object({
                                      description: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'limit' }),
                                      in: z.string().exactOptional().openapi({ example: 'query' }),
                                      name: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'limit' }),
                                      required: z
                                        .boolean()
                                        .exactOptional()
                                        .openapi({ example: false }),
                                      schema: z
                                        .object({
                                          format: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: 'int32' }),
                                          type: z
                                            .string()
                                            .exactOptional()
                                            .openapi({ example: 'integer' }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                    })
                                    .openapi({ required: [] }),
                                )
                                .exactOptional(),
                              responses: z
                                .object({
                                  default: z
                                    .object({
                                      content: z
                                        .object({
                                          'application/json': z
                                            .object({
                                              schema: z
                                                .object({
                                                  properties: z
                                                    .object({
                                                      code: z
                                                        .object({
                                                          format: z
                                                            .string()
                                                            .exactOptional()
                                                            .openapi({ example: 'int32' }),
                                                          type: z
                                                            .string()
                                                            .exactOptional()
                                                            .openapi({ example: 'integer' }),
                                                        })
                                                        .exactOptional()
                                                        .openapi({ required: [] }),
                                                      message: z
                                                        .object({
                                                          type: z
                                                            .string()
                                                            .exactOptional()
                                                            .openapi({ example: 'string' }),
                                                        })
                                                        .exactOptional()
                                                        .openapi({ required: [] }),
                                                    })
                                                    .exactOptional()
                                                    .openapi({ required: [] }),
                                                  required: z
                                                    .array(z.string().openapi({ example: 'code' }))
                                                    .exactOptional(),
                                                })
                                                .exactOptional()
                                                .openapi({ required: [] }),
                                            })
                                            .exactOptional()
                                            .openapi({ required: [] }),
                                        })
                                        .exactOptional()
                                        .openapi({ required: [] }),
                                      description: z
                                        .string()
                                        .exactOptional()
                                        .openapi({ example: 'unexpected error' }),
                                    })
                                    .exactOptional()
                                    .openapi({ required: [] }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              summary: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'List all pets' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  servers: z
                    .array(
                      z
                        .object({
                          url: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'http://petstore.swagger.io/v1' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                })
                .exactOptional()
                .openapi({ required: [] }),
              type: z.string().exactOptional().openapi({ example: 'json' }),
            })
            .openapi({ required: [] }),
          example: {
            input: {
              info: { license: { name: 'MIT' }, title: 'Swagger Petstore', version: '1.0.0' },
              openapi: '3.0.0',
              paths: {
                '/pets': {
                  get: {
                    operationId: 'listPets',
                    parameters: [
                      {
                        description: 'limit',
                        in: 'query',
                        name: 'limit',
                        required: false,
                        schema: { format: 'int32', type: 'integer' },
                      },
                    ],
                    responses: {
                      default: {
                        content: {
                          'application/json': {
                            schema: {
                              properties: {
                                code: { format: 'int32', type: 'integer' },
                                message: { type: 'string' },
                              },
                              required: ['code', 'message'],
                            },
                          },
                        },
                        description: 'unexpected error',
                      },
                    },
                    summary: 'List all pets',
                  },
                },
              },
              servers: [{ url: 'http://petstore.swagger.io/v1' }],
            },
            type: 'json',
          },
        },
      },
    },
  },
  responses: {
    200: {
      description:
        'Success: Import to a specific workspace with workspace ID passed as a query parameter',
      content: {
        'application/json': {
          schema: z
            .object({
              collections: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'b31be584-1b1e-4444-b581-761edf88fe77' }),
                      name: z.string().exactOptional().openapi({ example: 'Swagger Petstore' }),
                      uid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2282-b31be584-1b1e-4444-b581-761edf88fe77' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Success: Import to a specific workspace with workspace ID passed as a query parameter':
              {
                value: {
                  collections: [
                    {
                      id: 'b31be584-1b1e-4444-b581-761edf88fe77',
                      name: 'Swagger Petstore',
                      uid: '2282-b31be584-1b1e-4444-b581-761edf88fe77',
                    },
                  ],
                },
              },
          },
        },
      },
    },
    400: {
      description: 'Error: Param Missing',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  details: z
                    .object({ param: z.string().exactOptional().openapi({ example: 'type' }) })
                    .exactOptional()
                    .openapi({ required: [] }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example:
                        'The request body is missing a value for the type parameter. Check your request and try again.',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'paramMissingError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Error: Param Missing': {
              value: {
                error: {
                  details: { param: 'type' },
                  message:
                    'The request body is missing a value for the type parameter. Check your request and try again.',
                  name: 'paramMissingError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getMeRoute = createRoute({
  method: 'get',
  path: '/me',
  tags: ['User'],
  summary: 'API Key Owner',
  description:
    'the `/me` Postman API endpoint lets you access information about the authenticated user. You can retrieve the authenticated user\'s username, full name, e-mail address, and any other available information.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'apiKeyOwner',
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              operations: z
                .array(
                  z
                    .object({
                      limit: z.number().exactOptional().openapi({ example: 1000000 }),
                      name: z.string().exactOptional().openapi({ example: 'mock_usage' }),
                      overage: z.number().exactOptional().openapi({ example: 0 }),
                      usage: z.number().exactOptional().openapi({ example: 2382 }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
              user: z
                .object({
                  avatar: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'https://www.gravatar.com/avatar/e1f3994f2632af3d1c8c2dcc168a10e6',
                    }),
                  email: z.string().exactOptional().openapi({ example: 'janedoe@example.com' }),
                  fullName: z.string().exactOptional().openapi({ example: 'Jane Doe' }),
                  id: z.string().exactOptional().openapi({ example: '631643' }),
                  isPublic: z.boolean().exactOptional().openapi({ example: false }),
                  username: z.string().exactOptional().openapi({ example: 'janedoe' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                operations: [
                  { limit: 1000000, name: 'mock_usage', overage: 0, usage: 2382 },
                  { limit: 10000000, name: 'monitor_request_runs', overage: 0, usage: 49492 },
                  { limit: 5000000, name: 'documenter_public_views', overage: 0, usage: 120232 },
                  { limit: 1000000, name: 'api_usage', overage: 0, usage: 1345 },
                  { limit: 25, name: 'custom_domains', overage: 0, usage: 1 },
                  { limit: 1, name: 'custom_authentication_methods', overage: 0, usage: 1 },
                  { limit: 10000, name: 'serverless_requests', overage: 0, usage: 0 },
                  { limit: 5000, name: 'integrations', overage: 0, usage: 145 },
                  { limit: 1000000, name: 'cloud_agent_requests', overage: 0, usage: 23823 },
                ],
                user: {
                  avatar: 'https://www.gravatar.com/avatar/e1f3994f2632af3d1c8c2dcc168a10e6',
                  email: 'janedoe@example.com',
                  fullName: 'Jane Doe',
                  id: '631643',
                  isPublic: false,
                  username: 'janedoe',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getMocksRoute = createRoute({
  method: 'get',
  path: '/mocks',
  tags: ['Mocks'],
  summary: 'All Mocks',
  description:
    'This endpoint fetches all the mocks that you have created.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'allMocks',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mocks: z
                .array(
                  z
                    .object({
                      collection: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc' }),
                      environment: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524' }),
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '0fca2246-c108-41f5-8454-cc032def329f' }),
                      mockUrl: z
                        .string()
                        .exactOptional()
                        .openapi({
                          example: 'https://0fca2246-c108-41f5-8454-cc032def329f.mock.pstmn.io',
                        }),
                      owner: z.string().exactOptional().openapi({ example: '1679925' }),
                      uid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1679925-0fca2246-c108-41f5-8454-cc032def329f' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                mocks: [
                  {
                    collection: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc',
                    environment: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524',
                    id: '0fca2246-c108-41f5-8454-cc032def329f',
                    mockUrl: 'https://0fca2246-c108-41f5-8454-cc032def329f.mock.pstmn.io',
                    owner: '1679925',
                    uid: '1679925-0fca2246-c108-41f5-8454-cc032def329f',
                  },
                  {
                    collection: '1679925-37294bb0-e27b-5e52-93ae-c07dd445216d',
                    id: '2c624389-705a-4e66-9777-05314b431796',
                    mockUrl: 'https://2c624389-705a-4e66-9777-05314b431796.mock.pstmn.io',
                    owner: '1679925',
                    uid: '1679925-2c624389-705a-4e66-9777-05314b431796',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postMocksRoute = createRoute({
  method: 'post',
  path: '/mocks',
  tags: ['Mocks'],
  summary: 'Create Mock',
  description:
    'This endpoint allows you to create a mock on a collection. You can also provide an environment UID to resolve any environment variables in the collection.\n\nYou can also specify the context of a workspace to create a mock in directly by passing the `workspace` as a query param.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createMock',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc' }),
                  environment: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            mock: {
              collection: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc',
              environment: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc' }),
                  environment: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '0fca2246-c108-41f5-8454-cc032def329f' }),
                  mockUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'https://0fca2246-c108-41f5-8454-cc032def329f.mock.pstmn.io',
                    }),
                  owner: z.string().exactOptional().openapi({ example: '1679925' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-0fca2246-c108-41f5-8454-cc032def329f' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                mock: {
                  collection: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc',
                  environment: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524',
                  id: '0fca2246-c108-41f5-8454-cc032def329f',
                  mockUrl: 'https://0fca2246-c108-41f5-8454-cc032def329f.mock.pstmn.io',
                  owner: '1679925',
                  uid: '1679925-0fca2246-c108-41f5-8454-cc032def329f',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getMocksMockUidRoute = createRoute({
  method: 'get',
  path: '/mocks/{mock_uid}',
  tags: ['Mocks'],
  summary: 'Single Mock',
  description:
    'This endpoint fetches you the basic information about a single mock using its `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'singleMock',
  request: {
    params: z.object({
      mock_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mock_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc' }),
                  environment: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '0fca2246-c108-41f5-8454-cc032def329f' }),
                  mockUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'https://0fca2246-c108-41f5-8454-cc032def329f.mock.pstmn.io',
                    }),
                  owner: z.string().exactOptional().openapi({ example: '1679925' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-0fca2246-c108-41f5-8454-cc032def329f' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                mock: {
                  collection: '1679925-39fee52f-b806-3ffa-1173-00a6f5b183dc',
                  environment: '1679925-0b9e9f15-3208-a2b1-22e0-d58392f01524',
                  id: '0fca2246-c108-41f5-8454-cc032def329f',
                  mockUrl: 'https://0fca2246-c108-41f5-8454-cc032def329f.mock.pstmn.io',
                  owner: '1679925',
                  uid: '1679925-0fca2246-c108-41f5-8454-cc032def329f',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putMocksMockUidRoute = createRoute({
  method: 'put',
  path: '/mocks/{mock_uid}',
  tags: ['Mocks'],
  summary: 'Update Mock',
  description:
    'This endpoint allows you to update a mock you have created using its `uid`. The endpoint allows you to edit fields,\n* name\n* environment\n* description\n* private\n* versionTag\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'updateMock',
  request: {
    params: z.object({
      mock_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mock_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  description: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'example describing update mock description' }),
                  environment: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19' }),
                  name: z.string().exactOptional().openapi({ example: 'My Mock Server' }),
                  private: z.boolean().exactOptional().openapi({ example: false }),
                  versionTag: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'abf07d3d-f8ec-47d4-8015-9fe83078b4ec' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            mock: {
              description: 'example describing update mock description',
              environment: '11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19',
              name: 'My Mock Server',
              private: false,
              versionTag: 'abf07d3d-f8ec-47d4-8015-9fe83078b4ec',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'success Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '11582779-fd6797e2-de6b-4699-975c-85290e4c2499' }),
                  config: z
                    .object({
                      headers: z.array(z.any()).exactOptional(),
                      matchBody: z.boolean().exactOptional().openapi({ example: false }),
                      matchQueryParams: z.boolean().exactOptional().openapi({ example: true }),
                      matchWildcards: z.boolean().exactOptional().openapi({ example: true }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  environment: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '06040138-dd6b-4cce-9a02-7e1c1ab59723' }),
                  mockUrl: z
                    .string()
                    .exactOptional()
                    .openapi({
                      example: 'https://06040138-dd6b-4cce-9a02-7e1c1ab59723.mock.pstmn.io',
                    }),
                  name: z.string().exactOptional().openapi({ example: 'My Mock Server' }),
                  owner: z.string().exactOptional().openapi({ example: '11582779' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '11582779-06040138-dd6b-4cce-9a02-7e1c1ab59723' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'success Response': {
              value: {
                mock: {
                  collection: '11582779-fd6797e2-de6b-4699-975c-85290e4c2499',
                  config: {
                    headers: [],
                    matchBody: false,
                    matchQueryParams: true,
                    matchWildcards: true,
                  },
                  environment: '11582779-ac1b6608-deb7-4c05-9d48-ee775aabfc19',
                  id: '06040138-dd6b-4cce-9a02-7e1c1ab59723',
                  mockUrl: 'https://06040138-dd6b-4cce-9a02-7e1c1ab59723.mock.pstmn.io',
                  name: 'My Mock Server',
                  owner: '11582779',
                  uid: '11582779-06040138-dd6b-4cce-9a02-7e1c1ab59723',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteMocksMockUidRoute = createRoute({
  method: 'delete',
  path: '/mocks/{mock_uid}',
  tags: ['Mocks'],
  summary: 'Delete Mock',
  description:
    'This endpoint allows you to delete an existing mock using its `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteMock',
  request: {
    params: z.object({
      mock_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mock_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '0fca2246-c108-41f5-8454-cc032def329f' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1679925-0fca2246-c108-41f5-8454-cc032def329f' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                mock: {
                  id: '0fca2246-c108-41f5-8454-cc032def329f',
                  uid: '1679925-0fca2246-c108-41f5-8454-cc032def329f',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postMocksMockUidPublishRoute = createRoute({
  method: 'post',
  path: '/mocks/{mock_uid}/publish',
  tags: ['Mocks'],
  summary: 'Publish Mock',
  description:
    'This endpoint publishes the mock you have created using its `uid`\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.',
  operationId: 'publishMock',
  request: {
    params: z.object({
      mock_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mock_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '06040138-dd6b-4cce-9a02-7e1c1ab59723' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Response': { value: { mock: { id: '06040138-dd6b-4cce-9a02-7e1c1ab59723' } } },
          },
        },
      },
    },
  },
})

export const deleteMocksMockUidUnpublishRoute = createRoute({
  method: 'delete',
  path: '/mocks/{mock_uid}/unpublish',
  tags: ['Mocks'],
  summary: 'Unpublish Mock',
  description:
    'This endpoint unpublishes the mock you have created using its `uid`\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key ` request header or `apikey` URL query parameter.',
  operationId: 'unpublishMock',
  request: {
    params: z.object({
      mock_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'mock_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Success Response',
      content: {
        'application/json': {
          schema: z
            .object({
              mock: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '06040138-dd6b-4cce-9a02-7e1c1ab59723' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Success Response': { value: { mock: { id: '06040138-dd6b-4cce-9a02-7e1c1ab59723' } } },
          },
        },
      },
    },
  },
})

export const getMonitorsRoute = createRoute({
  method: 'get',
  path: '/monitors',
  tags: ['Monitors'],
  summary: 'All Monitors',
  description:
    'The `/monitors` endpoint returns a list of all [monitors](https://monitor.getpostman.com/) that are accessible by you.\n\nThe response contains an array of monitors information containing the `name`, `id`, `owner` and `uid` of each monitor.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'allMonitors',
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              monitors: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1e6b6c77-2031-42d0-9948-76d7251b2dd1' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Batman & Sherlock Holmes Monitor' }),
                      owner: z.string().exactOptional().openapi({ example: '5852' }),
                      uid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '5852-1e6b6c77-2031-42d0-9948-76d7251b2dd1' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                monitors: [
                  {
                    id: '1e6b6c77-2031-42d0-9948-76d7251b2dd1',
                    name: 'Batman & Sherlock Holmes Monitor',
                    owner: '5852',
                    uid: '5852-1e6b6c77-2031-42d0-9948-76d7251b2dd1',
                  },
                  {
                    id: '1e6b6cb7-f13d-4000-acb7-0695757174a8',
                    name: 'Team Level Monitor',
                    owner: '5886',
                    uid: '5886-1e6b6cb7-f13d-4000-acb7-0695757174a8',
                  },
                  {
                    id: '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
                    name: 'Postman Echo Monitor',
                    owner: '5852',
                    uid: '5852-1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postMonitorsRoute = createRoute({
  method: 'post',
  path: '/monitors',
  tags: ['Monitors'],
  summary: 'Create Monitor',
  description:
    'This endpoint allows you to create a monitor.\n\nSome sample `cron` values are:\n\n| Frequency                  | Cron Pattern   |\n|-----------------------|----------------|\n| Every 5 minutes       | `*/5 * * * *`  |\n| Every 30 minutes     | `*/30 * * * *` |\n| Every Hour         | `0 */1 * * *`  |\n| Every 6 Hours      | `0 */6 * * *`  |\n| Every day at 5pm    | `0 17 * * *`   |\n| Every Monday at 12pm  | `0 12 * * MON` |\n| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |\n\nNote: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. \n\nFor more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\n\nYou can also specify the context of a workspace to create a monitor in directly by passing the `workspace` as a query param.\n\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createMonitor',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .object({
                  collection: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-8d05dd85-222c-1452-553b-e76a531b71ed' }),
                  environment: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef' }),
                  name: z.string().exactOptional().openapi({ example: 'This is a Monitor Name' }),
                  schedule: z
                    .object({
                      cron: z.string().exactOptional().openapi({ example: '0 0 * * *' }),
                      timezone: z.string().exactOptional().openapi({ example: 'Asia/Kolkata' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            monitor: {
              collection: '5852-8d05dd85-222c-1452-553b-e76a531b71ed',
              environment: '5852-8a4c21ea-2a36-40d1-a82d-d717fac9d6ef',
              name: 'This is a Monitor Name',
              schedule: { cron: '0 0 * * *', timezone: 'Asia/Kolkata' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Create Monitor in a Workspace',
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1e6b6dfd-7ba4-4590-9ee1-5948102d7797' }),
                  name: z.string().exactOptional().openapi({ example: 'Monitor Name' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-1e6b6dfd-7ba4-4590-9ee1-5948102d7797' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Create Monitor in a Workspace': {
              value: {
                monitor: {
                  id: '1e6b6dfd-7ba4-4590-9ee1-5948102d7797',
                  name: 'Monitor Name',
                  uid: '5852-1e6b6dfd-7ba4-4590-9ee1-5948102d7797',
                },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Parameter Missing',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  details: z
                    .object({ param: z.string().exactOptional().openapi({ example: 'monitor' }) })
                    .exactOptional()
                    .openapi({ required: [] }),
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Parameter is missing in the request.' }),
                  name: z.string().exactOptional().openapi({ example: 'paramMissingError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Parameter Missing': {
              value: {
                error: {
                  details: { param: 'monitor' },
                  message: 'Parameter is missing in the request.',
                  name: 'paramMissingError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getMonitorsMonitorUidRoute = createRoute({
  method: 'get',
  path: '/monitors/{monitor_uid}',
  tags: ['Monitors'],
  summary: 'Single Monitor',
  description:
    'This endpoint fetches you basic information about the monitor using its `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'singleMonitor',
  request: {
    params: z.object({
      monitor_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'monitor_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .object({
                  collectionUid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-8d05dd85-222c-1452-553b-e76a531b71ed' }),
                  distribution: z.array(z.any()).exactOptional(),
                  environmentUid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5851-8d05dd85-222c-1452-553b-e76a531b71ed' }),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1' }),
                  lastRun: z
                    .object({
                      finishedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2020-03-25T15:45:31.340Z' }),
                      startedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2020-03-25T15:45:29.218Z' }),
                      stats: z
                        .object({
                          assertions: z
                            .object({
                              failed: z.number().exactOptional().openapi({ example: 1 }),
                              total: z.number().exactOptional().openapi({ example: 8 }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          requests: z
                            .object({ total: z.number().exactOptional().openapi({ example: 4 }) })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      status: z.string().exactOptional().openapi({ example: 'failed' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  name: z.string().exactOptional().openapi({ example: 'Postman Echo Monitor' }),
                  notifications: z
                    .object({
                      onError: z
                        .array(
                          z
                            .object({
                              email: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'john.appleseed@example.com' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                      onFailure: z
                        .array(
                          z
                            .object({
                              email: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'john.appleseed@example.com' }),
                            })
                            .openapi({ required: [] }),
                        )
                        .exactOptional(),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  options: z
                    .object({
                      followRedirects: z.boolean().exactOptional().openapi({ example: true }),
                      requestDelay: z.number().exactOptional().openapi({ example: 0 }),
                      requestTimeout: z.number().exactOptional().openapi({ example: 3000 }),
                      strictSSL: z.boolean().exactOptional().openapi({ example: true }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  owner: z.string().exactOptional().openapi({ example: '5852' }),
                  schedule: z
                    .object({
                      cron: z.string().exactOptional().openapi({ example: '0 0 * * * *' }),
                      nextRun: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2016-11-30T09:30:00.000Z' }),
                      timezone: z.string().exactOptional().openapi({ example: 'Asia/Calcutta' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-1e6b6cc1-c760-48e0-968f-4bfaeeae9af1' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                monitor: {
                  collectionUid: '5852-8d05dd85-222c-1452-553b-e76a531b71ed',
                  distribution: [],
                  environmentUid: '5851-8d05dd85-222c-1452-553b-e76a531b71ed',
                  id: '1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
                  lastRun: {
                    finishedAt: '2020-03-25T15:45:31.340Z',
                    startedAt: '2020-03-25T15:45:29.218Z',
                    stats: { assertions: { failed: 1, total: 8 }, requests: { total: 4 } },
                    status: 'failed',
                  },
                  name: 'Postman Echo Monitor',
                  notifications: {
                    onError: [{ email: 'john.appleseed@example.com' }],
                    onFailure: [{ email: 'john.appleseed@example.com' }],
                  },
                  options: {
                    followRedirects: true,
                    requestDelay: 0,
                    requestTimeout: 3000,
                    strictSSL: true,
                  },
                  owner: '5852',
                  schedule: {
                    cron: '0 0 * * * *',
                    nextRun: '2016-11-30T09:30:00.000Z',
                    timezone: 'Asia/Calcutta',
                  },
                  uid: '5852-1e6b6cc1-c760-48e0-968f-4bfaeeae9af1',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Monitor Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'The specified monitor does not exist.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Monitor Not Found': {
              value: {
                error: {
                  message: 'The specified monitor does not exist.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putMonitorsMonitorUidRoute = createRoute({
  method: 'put',
  path: '/monitors/{monitor_uid}',
  tags: ['Monitors'],
  summary: 'Update Monitor',
  description:
    'This endpoint allows you to update a monitor using its `uid`. Only the monitor name and its schedule can be updated.\n\nSome example `cron` values are:\n\n| Frequency                  | Cron Pattern   |\n|-----------------------|----------------|\n| Every 5 minutes       | `*/5 * * * *`  |\n| Every 30 minutes     | `*/30 * * * *` |\n| Every Hour         | `0 */1 * * *`  |\n| Every 6 Hours      | `0 */6 * * *`  |\n| Every day at 5pm    | `0 17 * * *`   |\n| Every Monday at 12pm  | `0 12 * * MON` |\n| Every weekday (Monday - Friday) at 6am | `0 6 * * MON-FRI` |\n\nNote: Currently, you can only create monitors at some limited schedules. You can head to [Postman Monitors](https://monitor.getpostman.com) to see the allowed schedules. \n\nFor more information about the format of the `timezone` value, check this [list of time zones.](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'updateMonitor',
  request: {
    params: z.object({
      monitor_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'monitor_uid', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .object({
                  name: z.string().exactOptional().openapi({ example: 'Updated Monitor Name' }),
                  schedule: z
                    .object({
                      cron: z.string().exactOptional().openapi({ example: '*/5 * * * *' }),
                      timezone: z.string().exactOptional().openapi({ example: 'America/Chicago' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            monitor: {
              name: 'Updated Monitor Name',
              schedule: { cron: '*/5 * * * *', timezone: 'America/Chicago' },
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Monitor Updated',
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1e6b6e2a-c2ad-4090-b750-0df4e6624352' }),
                  name: z.string().exactOptional().openapi({ example: 'Updated Monitor Name' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-1e6b6e2a-c2ad-4090-b750-0df4e6624352' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Monitor Updated': {
              value: {
                monitor: {
                  id: '1e6b6e2a-c2ad-4090-b750-0df4e6624352',
                  name: 'Updated Monitor Name',
                  uid: '5852-1e6b6e2a-c2ad-4090-b750-0df4e6624352',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteMonitorsMonitorUidRoute = createRoute({
  method: 'delete',
  path: '/monitors/{monitor_uid}',
  tags: ['Monitors'],
  summary: 'Delete Monitor',
  description:
    'This endpoint can be used to delete an existing monitor using its `uid`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteMonitor',
  request: {
    params: z.object({
      monitor_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'monitor_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor Deleted',
      content: {
        'application/json': {
          schema: z
            .object({
              monitor: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '1e6b8957-35f9-42a0-8d2f-f03d7085b3d2' }),
                  uid: z
                    .string()
                    .exactOptional()
                    .openapi({ example: '5852-1e6b8957-35f9-42a0-8d2f-f03d7085b3d2' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Monitor Deleted': {
              value: {
                monitor: {
                  id: '1e6b8957-35f9-42a0-8d2f-f03d7085b3d2',
                  uid: '5852-1e6b8957-35f9-42a0-8d2f-f03d7085b3d2',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Monitor Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'The specified monitor does not exist.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Monitor Not Found': {
              value: {
                error: {
                  message: 'The specified monitor does not exist.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postMonitorsMonitorUidRunRoute = createRoute({
  method: 'post',
  path: '/monitors/{monitor_uid}/run',
  tags: ['Monitors'],
  summary: 'Run a Monitor',
  description:
    'This endpoint will run the monitor instantly and wait for the monitor to run completely. It responds with the run results.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'runAMonitor',
  request: {
    params: z.object({
      monitor_uid: z
        .string()
        .openapi({
          param: { in: 'path', name: 'monitor_uid', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Monitor Run with Errors',
      content: {
        'application/json': {
          schema: z
            .object({
              run: z
                .object({
                  executions: z
                    .array(
                      z
                        .object({
                          id: z.number().exactOptional().openapi({ example: 1 }),
                          item: z
                            .object({
                              id: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'b5e8d7dd-909c-4ba7-aef4-8609bc50b586' }),
                              name: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'Sample POST Request' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          request: z
                            .object({
                              body: z
                                .object({
                                  contentLength: z
                                    .number()
                                    .exactOptional()
                                    .openapi({ example: 18 }),
                                  mode: z.string().exactOptional().openapi({ example: 'raw' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              headers: z
                                .object({
                                  accept: z.string().exactOptional().openapi({ example: '*/*' }),
                                  'accept-encoding': z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'gzip, deflate' }),
                                  'content-length': z
                                    .number()
                                    .exactOptional()
                                    .openapi({ example: 18 }),
                                  'content-type': z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'application/json' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              method: z.string().exactOptional().openapi({ example: 'POST' }),
                              timestamp: z
                                .string()
                                .exactOptional()
                                .openapi({ example: '2016-12-04T14:30:26.025Z' }),
                              url: z
                                .string()
                                .exactOptional()
                                .openapi({ example: 'echo.getpostman.com/post' }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          response: z
                            .object({
                              body: z
                                .object({
                                  contentLength: z
                                    .number()
                                    .exactOptional()
                                    .openapi({ example: 298 }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              code: z.number().exactOptional().openapi({ example: 200 }),
                              headers: z
                                .object({
                                  connection: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'keep-alive' }),
                                  'content-encoding': z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'gzip' }),
                                  'content-type': z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'application/json' }),
                                  date: z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'Sun, 04 Dec 2016 14:30:26 GMT' }),
                                  'transfer-encoding': z
                                    .string()
                                    .exactOptional()
                                    .openapi({ example: 'chunked' }),
                                })
                                .exactOptional()
                                .openapi({ required: [] }),
                              responseSize: z.number().exactOptional().openapi({ example: 298 }),
                              responseTime: z.number().exactOptional().openapi({ example: 26 }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  failures: z
                    .array(
                      z
                        .object({
                          assertion: z
                            .object({
                              'Status code is 400': z
                                .boolean()
                                .exactOptional()
                                .openapi({ example: false }),
                            })
                            .exactOptional()
                            .openapi({ required: [] }),
                          executionId: z.number().exactOptional().openapi({ example: 2 }),
                          message: z
                            .string()
                            .exactOptional()
                            .openapi({ example: "Expected 'Status code is 400' to be truthy" }),
                          name: z.string().exactOptional().openapi({ example: 'AssertionError' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  info: z
                    .object({
                      collectionUid: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '5852-1d3daef4-2037-4584-ab86-bafd8c8f8a55' }),
                      finishedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2016-12-04T14:30:26.000Z' }),
                      jobId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1e6ba2e3-1aaf-4c10-bd5f-905943284b2a' }),
                      monitorId: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '1e6b8970-fd13-4480-b011-b3b3e3cd271d' }),
                      name: z
                        .string()
                        .exactOptional()
                        .openapi({ example: 'Sample Collection monitor 1 #56' }),
                      startedAt: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '2016-12-04T14:30:25.000Z' }),
                      status: z.string().exactOptional().openapi({ example: 'failed' }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                  stats: z
                    .object({
                      assertions: z
                        .object({
                          failed: z.number().exactOptional().openapi({ example: 1 }),
                          total: z.number().exactOptional().openapi({ example: 1 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                      requests: z
                        .object({
                          failed: z.number().exactOptional().openapi({ example: 1 }),
                          total: z.number().exactOptional().openapi({ example: 3 }),
                        })
                        .exactOptional()
                        .openapi({ required: [] }),
                    })
                    .exactOptional()
                    .openapi({ required: [] }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Monitor Run with Errors': {
              value: {
                run: {
                  executions: [
                    {
                      id: 1,
                      item: {
                        id: 'b5e8d7dd-909c-4ba7-aef4-8609bc50b586',
                        name: 'Sample POST Request',
                      },
                      request: {
                        body: { contentLength: 18, mode: 'raw' },
                        headers: {
                          accept: '*/*',
                          'accept-encoding': 'gzip, deflate',
                          'content-length': 18,
                          'content-type': 'application/json',
                        },
                        method: 'POST',
                        timestamp: '2016-12-04T14:30:26.025Z',
                        url: 'echo.getpostman.com/post',
                      },
                      response: {
                        body: { contentLength: 298 },
                        code: 200,
                        headers: {
                          connection: 'keep-alive',
                          'content-encoding': 'gzip',
                          'content-type': 'application/json',
                          date: 'Sun, 04 Dec 2016 14:30:26 GMT',
                          'transfer-encoding': 'chunked',
                        },
                        responseSize: 298,
                        responseTime: 26,
                      },
                    },
                    {
                      assertions: { 'Status code is 400': false },
                      id: 2,
                      item: {
                        id: 'f790d046-755d-44f5-a416-b825e18dfd9d',
                        name: 'Sample GET Request',
                      },
                      request: {
                        body: { contentLength: 0, mode: 'formdata' },
                        headers: { accept: '*/*', 'accept-encoding': 'gzip, deflate' },
                        method: 'GET',
                        timestamp: '2016-12-04T14:30:26.093Z',
                        url: 'echo.getpostman.com/get',
                      },
                      response: {
                        body: { contentLength: 280 },
                        code: 200,
                        headers: {
                          connection: 'keep-alive',
                          'content-encoding': 'gzip',
                          'content-type': 'application/json',
                          date: 'Sun, 04 Dec 2016 14:30:26 GMT',
                          'transfer-encoding': 'chunked',
                        },
                        responseSize: 280,
                        responseTime: 46,
                      },
                    },
                    {
                      id: 3,
                      item: {
                        id: '336e6e17-6d3e-4b8f-a48f-b7e75cf13afb',
                        name: 'This is the second request',
                      },
                      request: {
                        body: { contentLength: 0, mode: 'formdata' },
                        headers: {
                          accept: '*/*',
                          'accept-encoding': 'gzip, deflate',
                          'content-length': 18,
                        },
                        method: 'POST',
                        timestamp: '2016-12-04T14:30:26.477Z',
                        url: 'echo.getpostman.com/post',
                      },
                      response: {
                        body: { contentLength: 345 },
                        code: 200,
                        headers: {
                          connection: 'keep-alive',
                          'content-encoding': 'gzip',
                          'content-type': 'application/json',
                          date: 'Sun, 04 Dec 2016 14:30:26 GMT',
                          'transfer-encoding': 'chunked',
                        },
                        responseSize: 345,
                        responseTime: 9,
                      },
                    },
                  ],
                  failures: [
                    {
                      assertion: { 'Status code is 400': false },
                      executionId: 2,
                      message: "Expected 'Status code is 400' to be truthy",
                      name: 'AssertionError',
                    },
                  ],
                  info: {
                    collectionUid: '5852-1d3daef4-2037-4584-ab86-bafd8c8f8a55',
                    finishedAt: '2016-12-04T14:30:26.000Z',
                    jobId: '1e6ba2e3-1aaf-4c10-bd5f-905943284b2a',
                    monitorId: '1e6b8970-fd13-4480-b011-b3b3e3cd271d',
                    name: 'Sample Collection monitor 1 #56',
                    startedAt: '2016-12-04T14:30:25.000Z',
                    status: 'failed',
                  },
                  stats: { assertions: { failed: 1, total: 1 }, requests: { failed: 1, total: 3 } },
                },
              },
            },
          },
        },
      },
    },
  },
})

export const postWebhooksRoute = createRoute({
  method: 'post',
  path: '/webhooks',
  tags: ['Webhooks'],
  summary: 'Create Webhook',
  description:
    "Create a webhook that triggers a collection with your custom payload.\n\nYou can specify the webhook name and the collection to trigger by using the following attributes of the `webhook` object on your JSON body:\n\n* `name`: the name of the webhook that you're creating.\n* `collection`: the ID of the collection that you want to trigger once this webhook is called.\n\nOnce created, the webhook URL can be retrieved by accessing the `webhookUrl` attribute of the `webhook` object on the response JSON payload.",
  operationId: 'createWebhook',
  request: {
    query: z.object({
      workspace: z
        .string()
        .exactOptional()
        .openapi({
          param: {
            in: 'query',
            name: 'workspace',
            schema: { example: '{{workspace_id}}', type: 'string' },
            required: false,
          },
          example: '{{workspace_id}}',
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              webhook: z
                .object({
                  collection: z.string().exactOptional().openapi({ example: '{{collection_id}}' }),
                  name: z.string().exactOptional().openapi({ example: '{{webhook_name}}' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: { webhook: { collection: '{{collection_id}}', name: '{{webhook_name}}' } },
        },
      },
    },
  },
  responses: { 200: { description: '' } },
})

export const getWorkspacesRoute = createRoute({
  method: 'get',
  path: '/workspaces',
  tags: ['Workspaces'],
  summary: 'All workspaces',
  description:
    'The `/workspaces` endpoint returns a list of all [workspaces](https://www.getpostman.com/docs/v6/postman/workspaces/intro_to_workspaces) that is accessible by you. The list includes your own workspaces and the workspaces that you have access to.\n\nThe response contains an array of collection information containing the `name`, `id`, and `type` of each workspace.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'allWorkspaces',
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              workspaces: z
                .array(
                  z
                    .object({
                      id: z
                        .string()
                        .exactOptional()
                        .openapi({ example: '4e6d34c2-cfdb-4b33-8868-12a875bebda3' }),
                      name: z.string().exactOptional().openapi({ example: 'My Workspace' }),
                      type: z.string().exactOptional().openapi({ example: 'personal' }),
                    })
                    .openapi({ required: [] }),
                )
                .exactOptional(),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                workspaces: [
                  {
                    id: '4e6d34c2-cfdb-4b33-8868-12a875bebda3',
                    name: 'My Workspace',
                    type: 'personal',
                  },
                  {
                    id: 'f8801e9e-03a4-4c7b-b31e-5db5cd771696',
                    name: 'Team workspace',
                    type: 'team',
                  },
                ],
              },
            },
          },
        },
      },
    },
  },
})

export const postWorkspacesRoute = createRoute({
  method: 'post',
  path: '/workspaces',
  tags: ['Workspaces'],
  summary: 'Create Workspace',
  description:
    'This endpoint allows you to create a workspace and populate it with entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.\n\nOn successful creation of the workspace, the response returns the workspcae `name` and `id`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'createWorkspace',
  request: {
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              workspace: z
                .object({
                  collections: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d' }),
                          name: z.string().exactOptional().openapi({ example: 'Straw hats' }),
                          uid: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  description: z.string().exactOptional().openapi({ example: 'Some description' }),
                  environments: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '83a1aaa2-a204-4bd8-9b92-4d486918906b' }),
                          name: z.string().exactOptional().openapi({ example: 'env' }),
                          uid: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '8154-83a1aaa2-a204-4bd8-9b92-4d486918906b' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  mocks: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'cda672ef-1375-40e9-baee-e20ece8d7b65' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  monitors: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '1e889bd2-3862-4be0-b2c2-9b1fe9673aec' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  name: z.string().exactOptional().openapi({ example: 'New Workspace' }),
                  type: z.string().exactOptional().openapi({ example: 'personal' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            workspace: {
              collections: [
                {
                  id: 'e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d',
                  name: 'Straw hats',
                  uid: '8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d',
                },
              ],
              description: 'Some description',
              environments: [
                {
                  id: '83a1aaa2-a204-4bd8-9b92-4d486918906b',
                  name: 'env',
                  uid: '8154-83a1aaa2-a204-4bd8-9b92-4d486918906b',
                },
              ],
              mocks: [{ id: 'cda672ef-1375-40e9-baee-e20ece8d7b65' }],
              monitors: [{ id: '1e889bd2-3862-4be0-b2c2-9b1fe9673aec' }],
              name: 'New Workspace',
              type: 'personal',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              workspace: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'cfbcd9bf-cc8b-4d6f-b8ef-440a3e49e29f' }),
                  name: z.string().exactOptional().openapi({ example: 'New Workspace' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                workspace: { id: 'cfbcd9bf-cc8b-4d6f-b8ef-440a3e49e29f', name: 'New Workspace' },
              },
            },
          },
        },
      },
    },
    400: {
      description: 'Instance supplied not found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Instance not found in the database.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Instance supplied not found': {
              value: {
                error: {
                  message: 'Instance not found in the database.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const getWorkspacesWorkspaceIdRoute = createRoute({
  method: 'get',
  path: '/workspaces/{workspace_id}',
  tags: ['Workspaces'],
  summary: 'Single workspace',
  description:
    'Access the contents of a workspace that is accessible to you using its id (`id`). Includes the collections, environments, mocks and monitors of that workspace.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'singleWorkspace',
  request: {
    params: z.object({
      workspace_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Valid Response',
      content: {
        'application/json': {
          schema: z
            .object({
              workspace: z
                .object({
                  collections: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '7c31b469-bd43-4411-9283-6d397855ee0e' }),
                          name: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'Mock demo - collection' }),
                          uid: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '1234-7c31b469-bd43-4411-9283-6d397855ee0e' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  description: z.string().exactOptional().openapi({ example: 'Demos.' }),
                  environments: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '423fd955-a9c8-47cd-9ab0-09a6a575c4be' }),
                          name: z.string().exactOptional().openapi({ example: 'Mock demo - CNX' }),
                          uid: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '1234-423fd955-a9c8-47cd-9ab0-09a6a575c4be' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'f8801e9e-03a4-4c7b-b31e-5db5cd771696' }),
                  name: z.string().exactOptional().openapi({ example: 'Demo workspace' }),
                  type: z.string().exactOptional().openapi({ example: 'personal' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Valid Response': {
              value: {
                workspace: {
                  collections: [
                    {
                      id: '7c31b469-bd43-4411-9283-6d397855ee0e',
                      name: 'Mock demo - collection',
                      uid: '1234-7c31b469-bd43-4411-9283-6d397855ee0e',
                    },
                    {
                      id: '356fe068-a0f8-4f31-b34d-d12149eac681',
                      name: 'Mock demo - response code',
                      uid: '1234-356fe068-a0f8-4f31-b34d-d12149eac681',
                    },
                  ],
                  description: 'Demos.',
                  environments: [
                    {
                      id: '423fd955-a9c8-47cd-9ab0-09a6a575c4be',
                      name: 'Mock demo - CNX',
                      uid: '1234-423fd955-a9c8-47cd-9ab0-09a6a575c4be',
                    },
                    {
                      id: '24c45c84-5147-4c15-bb9a-c3186b81d3cc',
                      name: 'Mock Demo - response code',
                      uid: '1234-24c45c84-5147-4c15-bb9a-c3186b81d3cc',
                    },
                  ],
                  id: 'f8801e9e-03a4-4c7b-b31e-5db5cd771696',
                  name: 'Demo workspace',
                  type: 'personal',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Workspace Not Found',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'Instance not found in the database.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Workspace Not Found': {
              value: {
                error: {
                  message: 'Instance not found in the database.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const putWorkspacesWorkspaceIdRoute = createRoute({
  method: 'put',
  path: '/workspaces/{workspace_id}',
  tags: ['Workspaces'],
  summary: 'Update Workspace',
  description:
    'This endpoint allows you to update a workspace and update it\'s association to entities like `collections`, `environments`, `mocks` and `monitors` using their `uid`.\n\nOn successful updation of the workspace, the response returns the workspcae `name` and `id`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.\n\n**Note** : The endpoint expects you to send the desired state of the workspace in terms of the associated entities so be careful when trying to update these entities.\n\nFor eg. if your workspace has collections A and B, and in the update call, you send C\'s uid in the collections array, then A and B would be removed from the workspace and C would be added.',
  operationId: 'updateWorkspace',
  request: {
    params: z.object({
      workspace_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_id', required: true, schema: { type: 'string' } },
        }),
    }),
    body: {
      content: {
        'application/json': {
          schema: z
            .object({
              workspace: z
                .object({
                  collections: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d' }),
                          name: z.string().exactOptional().openapi({ example: 'Straw hats' }),
                          uid: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  description: z.string().exactOptional().openapi({ example: 'Some description' }),
                  environments: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '83a1aaa2-a204-4bd8-9b92-4d486918906b' }),
                          name: z.string().exactOptional().openapi({ example: 'env' }),
                          uid: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '8154-83a1aaa2-a204-4bd8-9b92-4d486918906b' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  mocks: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: 'cda672ef-1375-40e9-baee-e20ece8d7b65' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  monitors: z
                    .array(
                      z
                        .object({
                          id: z
                            .string()
                            .exactOptional()
                            .openapi({ example: '1e889bd2-3862-4be0-b2c2-9b1fe9673aec' }),
                        })
                        .openapi({ required: [] }),
                    )
                    .exactOptional(),
                  name: z.string().exactOptional().openapi({ example: 'New Workspace updated' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          example: {
            workspace: {
              collections: [
                {
                  id: 'e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d',
                  name: 'Straw hats',
                  uid: '8154-e1fc3c38-a0b8-44a3-bd44-d753a96b2e9d',
                },
              ],
              description: 'Some description',
              environments: [
                {
                  id: '83a1aaa2-a204-4bd8-9b92-4d486918906b',
                  name: 'env',
                  uid: '8154-83a1aaa2-a204-4bd8-9b92-4d486918906b',
                },
              ],
              mocks: [{ id: 'cda672ef-1375-40e9-baee-e20ece8d7b65' }],
              monitors: [{ id: '1e889bd2-3862-4be0-b2c2-9b1fe9673aec' }],
              name: 'New Workspace updated',
            },
          },
        },
      },
    },
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              workspace: z
                .object({
                  id: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'cfbcd9bf-cc8b-4d6f-b8ef-440a3e49e29f' }),
                  name: z.string().exactOptional().openapi({ example: 'New Workspace' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Successful Response': {
              value: {
                workspace: { id: 'cfbcd9bf-cc8b-4d6f-b8ef-440a3e49e29f', name: 'New Workspace' },
              },
            },
          },
        },
      },
    },
    403: {
      description: 'Not enough permissions',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'You do not have access to update this workspace.' }),
                  name: z.string().exactOptional().openapi({ example: 'forbiddenError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Not enough permissions': {
              value: {
                error: {
                  message: 'You do not have access to update this workspace.',
                  name: 'forbiddenError',
                },
              },
            },
          },
        },
      },
    },
    404: {
      description: 'Specified workspace/entities do not exist',
      content: {
        'application/json': {
          schema: z
            .object({
              error: z
                .object({
                  message: z
                    .string()
                    .exactOptional()
                    .openapi({ example: 'The specified workspace does not exist.' }),
                  name: z.string().exactOptional().openapi({ example: 'instanceNotFoundError' }),
                })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: {
            'Specified workspace/entities do not exist': {
              value: {
                error: {
                  message: 'The specified workspace does not exist.',
                  name: 'instanceNotFoundError',
                },
              },
            },
          },
        },
      },
    },
  },
})

export const deleteWorkspacesWorkspaceIdRoute = createRoute({
  method: 'delete',
  path: '/workspaces/{workspace_id}',
  tags: ['Workspaces'],
  summary: 'Delete Workspace',
  description:
    'This endpoint allows you to delete an existing workspace.\n\nOn successful deletion of the workspace, the response returns the `id`.\n\n> Requires <a href="#authentication">API Key</a> as `X-Api-Key` request header or `apikey` URL query parameter.',
  operationId: 'deleteWorkspace',
  request: {
    params: z.object({
      workspace_id: z
        .string()
        .openapi({
          param: { in: 'path', name: 'workspace_id', required: true, schema: { type: 'string' } },
        }),
    }),
  },
  responses: {
    200: {
      description: 'Successful Response',
      content: {
        'application/json': {
          schema: z
            .object({
              workspace: z
                .object({ id: z.string().exactOptional().openapi({ example: '{{workspace_id}}' }) })
                .exactOptional()
                .openapi({ required: [] }),
            })
            .openapi({ required: [] }),
          examples: { 'Successful Response': { value: { workspace: { id: '{{workspace_id}}' } } } },
        },
      },
    },
  },
})
