import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeMappedResourceConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const describeMappedResourceConfigurationHandler = app.openapi(
  postDescribeMappedResourceConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
