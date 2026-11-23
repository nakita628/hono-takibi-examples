import { OpenAPIHono } from '@hono/zod-openapi'
import { getQuotaEntityRoute, getQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const quotaHandler = app
  .openapi(getQuotaEntityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
