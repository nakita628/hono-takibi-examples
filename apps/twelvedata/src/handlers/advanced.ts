import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiUsageRoute, postBatchRoute } from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(getApiUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
