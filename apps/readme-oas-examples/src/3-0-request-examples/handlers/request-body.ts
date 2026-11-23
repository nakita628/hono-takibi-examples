import { OpenAPIHono } from '@hono/zod-openapi'
import { patchRequestBodyRoute, postRequestBodyRoute, putRequestBodyRoute } from '../routes'

const app = new OpenAPIHono()

export const requestBodyHandler = app
  .openapi(postRequestBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchRequestBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRequestBodyRoute, (c) => {
    throw new Error('Not implemented')
  })
