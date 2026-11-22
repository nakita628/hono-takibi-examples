import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionLkeClustersClusterIdApiEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const lkeapiEndpointsHandler = app.openapi(
  getApiVersionLkeClustersClusterIdApiEndpointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
