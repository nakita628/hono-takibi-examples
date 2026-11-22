import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionProfileGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const grantsHandler = app.openapi(getApiVersionProfileGrantsRoute, (c) => {
  throw new Error('Not implemented')
})
