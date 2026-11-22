import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrgsOrgIDUsageRoute } from '../routes'

const app = new OpenAPIHono()

export const usageHandler = app.openapi(getOrgsOrgIDUsageRoute, (c) => {
  throw new Error('Not implemented')
})
