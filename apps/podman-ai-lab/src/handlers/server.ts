import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const serverHandler = app.openapi(getApiVersionRoute, (c) => {
  throw new Error('Not implemented')
})
