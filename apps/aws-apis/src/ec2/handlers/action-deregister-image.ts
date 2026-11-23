import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeregisterImageRoute, postActionDeregisterImageRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeregisterImageHandler = app
  .openapi(getActionDeregisterImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeregisterImageRoute, (c) => {
    throw new Error('Not implemented')
  })
