import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuotasRoute } from '../routes'

const app = new OpenAPIHono()

export const quotasHandler = app.openapi(getQuotasRoute, (c) => {
  throw new Error('Not implemented')
})
