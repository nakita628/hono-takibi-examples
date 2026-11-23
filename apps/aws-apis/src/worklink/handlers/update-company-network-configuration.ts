import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateCompanyNetworkConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateCompanyNetworkConfigurationHandler = app.openapi(
  postUpdateCompanyNetworkConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
