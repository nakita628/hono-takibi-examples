import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteInfrastructureConfigurationInfrastructureConfigurationArnHandler = app.openapi(
  deleteDeleteInfrastructureConfigurationInfrastructureConfigurationArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
