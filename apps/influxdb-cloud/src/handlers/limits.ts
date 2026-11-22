import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrgsOrgIDLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const limitsHandler = app.openapi(getOrgsOrgIDLimitsRoute, (c) => {
  throw new Error('Not implemented')
})
