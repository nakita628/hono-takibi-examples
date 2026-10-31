import { createRoute, z } from '@hono/zod-openapi'

export const postGlobalRoute = createRoute({
  method: 'post',
  path: '/global',
  tags: ['Global'],
  summary: 'Global servers + variables',
  description:
    'Support and handling of servers and server variables.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Server Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#serverObject)\n\n* [3.1.0 Server Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#serverObject)',
  responses: { 200: { description: 'OK' } },
})

export const postOperationRoute = createRoute({
  method: 'post',
  path: '/operation',
  tags: ['Operation'],
  summary: 'Operation-level servers + variables',
  description:
    'Support and handling of servers and server variables set at the operation level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#operationObject)\n\n* [3.1.0 Operation Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#operationObject)',
  responses: { 200: { description: 'OK' } },
  servers: [
    { url: 'https://httpbin.com/anything/{subpath}', variables: { subpath: { default: 'demo' } } },
    {
      url: 'http://httpbin.com/anything/alt/{subpath}',
      variables: { subpath: { default: 'demo' } },
    },
  ],
})

export const putPathRoute = createRoute({
  method: 'put',
  path: '/path',
  tags: ['Path'],
  summary: 'Path-common level operation servers',
  description:
    'Support and handling of servers and server variables set at the path level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject)\n\n* [3.1.0 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathItemObject)',
  responses: { 200: { description: 'OK' } },
})

export const putComboRoute = createRoute({
  method: 'put',
  path: '/combo',
  tags: ['Path'],
  summary: 'Path-common level and operation-level operation servers',
  description:
    'Support and handling of servers and server variables set at the path **and** operation level.\n\n📚 OpenAPI specification references:\n\n* [3.0.3 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.0.3.md#pathItemObject)\n\n* [3.1.0 Path Item Object](https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#pathItemObject)',
  responses: { 200: { description: 'OK' } },
  servers: [
    { url: 'https://httpbin.com/anything/{subpath}', variables: { subpath: { default: 'demo' } } },
    {
      url: 'http://httpbin.com/anything/alt/{subpath}',
      variables: { subpath: { default: 'demo' } },
    },
  ],
})
