import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateInfrastructureConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateInfrastructureConfigurationHandler = app.openapi(
  putCreateInfrastructureConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
