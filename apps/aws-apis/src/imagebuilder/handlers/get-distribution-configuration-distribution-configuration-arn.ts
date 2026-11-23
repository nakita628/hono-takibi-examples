import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetDistributionConfigurationDistributionConfigurationArnRoute } from '../routes'

const app = new OpenAPIHono()

export const getDistributionConfigurationDistributionConfigurationArnHandler = app.openapi(
  getGetDistributionConfigurationDistributionConfigurationArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
