import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetInfrastructureConfigurationInfrastructureConfigurationArnRoute } from '../routes'

const app = new OpenAPIHono()

export const GetInfrastructureConfigurationInfrastructureConfigurationArnHandler = app.openapi(
  getGetInfrastructureConfigurationInfrastructureConfigurationArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
