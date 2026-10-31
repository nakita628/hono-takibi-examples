import { createRoute, z } from '@hono/zod-openapi'

const DefaultSecurityScheme = {
  flows: {
    implicit: { authorizationUrl: 'https://gateway.api.cloud.wso2.com/authorize', scopes: {} },
  },
  type: 'oauth2',
}

export const postJsontoxmlRoute = createRoute({
  method: 'post',
  path: '/jsontoxml',
  request: {
    body: {
      description: 'JSON payload',
      content: { 'application/json': { schema: z.string().default('{"foo":"bar"}') } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})

export const postXmltojsonRoute = createRoute({
  method: 'post',
  path: '/xmltojson',
  request: {
    body: {
      description: 'XML payload',
      content: { 'text/xml': { schema: z.string().default('<foo>bar</foo>') } },
      required: true,
    },
  },
  responses: { 200: { description: '' } },
})
