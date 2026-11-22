import { OpenAPIHono } from '@hono/zod-openapi'
import { postListDistributionConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListDistributionConfigurationsHandler = app.openapi(
  postListDistributionConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
