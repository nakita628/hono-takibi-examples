import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSwaggerIdRoute, postSwaggerRoute, putSwaggerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const swaggerHandler = app
  .openapi(postSwaggerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSwaggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSwaggerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
