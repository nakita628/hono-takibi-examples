import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateDistributionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const createDistributionConfigurationHandler = app.openapi(
  putCreateDistributionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
