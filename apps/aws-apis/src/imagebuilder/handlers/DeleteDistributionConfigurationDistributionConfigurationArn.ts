import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeleteDistributionConfigurationDistributionConfigurationArnRoute } from '../routes'

const app = new OpenAPIHono()

export const DeleteDistributionConfigurationDistributionConfigurationArnHandler = app.openapi(
  deleteDeleteDistributionConfigurationDistributionConfigurationArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
