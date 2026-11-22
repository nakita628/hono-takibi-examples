import { OpenAPIHono } from '@hono/zod-openapi'
import { getRestAtlassianConnect1ServiceRegistryRoute } from '../routes'

const app = new OpenAPIHono()

export const serviceRegistryHandler = app.openapi(
  getRestAtlassianConnect1ServiceRegistryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
