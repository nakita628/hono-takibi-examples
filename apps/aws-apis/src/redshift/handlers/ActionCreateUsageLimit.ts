import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateUsageLimitRoute, postActionCreateUsageLimitRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateUsageLimitHandler = app
  .openapi(getActionCreateUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateUsageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
