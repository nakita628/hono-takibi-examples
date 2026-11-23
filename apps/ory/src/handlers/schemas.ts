import { OpenAPIHono } from '@hono/zod-openapi'
import { getSchemasIdRoute, getSchemasRoute } from '../routes'

const app = new OpenAPIHono()

export const schemasHandler = app
  .openapi(getSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSchemasIdRoute, (c) => {
    throw new Error('Not implemented')
  })
