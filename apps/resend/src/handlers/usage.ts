import { OpenAPIHono } from '@hono/zod-openapi'
import { getUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app.openapi(getUsageRoute, (c) => {
  throw new Error('Not implemented')
})
