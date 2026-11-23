import { OpenAPIHono } from '@hono/zod-openapi'
import { postListInfrastructureConfigurationsRoute } from '../routes'

const app = new OpenAPIHono()

export const listInfrastructureConfigurationsHandler = app.openapi(
  postListInfrastructureConfigurationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
