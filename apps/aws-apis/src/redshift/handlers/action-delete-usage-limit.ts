import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteUsageLimitRoute, postActionDeleteUsageLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteUsageLimitHandler = app
  .openapi(getActionDeleteUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
