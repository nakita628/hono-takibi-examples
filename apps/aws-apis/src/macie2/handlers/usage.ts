import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsageRoute, postUsageStatisticsRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app
  .openapi(postUsageStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
