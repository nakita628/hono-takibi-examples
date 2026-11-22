import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuotasRoute, putQuotasRoute } from '../routes'

const app = new OpenAPIHono()

export const quotasHandler = app
  .openapi(getQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
