import { OpenAPIHono } from '@hono/zod-openapi'
import { putUpdateDistributionConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateDistributionConfigurationHandler = app.openapi(
  putUpdateDistributionConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
