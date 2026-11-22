import { OpenAPIHono } from '@hono/zod-openapi'
import { putUpdateInfrastructureConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const UpdateInfrastructureConfigurationHandler = app.openapi(
  putUpdateInfrastructureConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
