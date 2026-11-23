import { OpenAPIHono } from '@hono/zod-openapi'
import { postListDistributionConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listDistributionConfigurationsHandler = app.openapi(
  postListDistributionConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
