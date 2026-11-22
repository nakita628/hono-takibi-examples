import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminFeatureFlagsRoute } from '../routes'

const app = new OpenAPIHono()

export const featureFlagsHandler = app.openapi(getAdminFeatureFlagsRoute, (c) => {
  throw new Error('Not implemented')
})
