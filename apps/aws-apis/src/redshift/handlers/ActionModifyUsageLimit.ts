import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyUsageLimitRoute, postActionModifyUsageLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyUsageLimitHandler = app
  .openapi(getActionModifyUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
