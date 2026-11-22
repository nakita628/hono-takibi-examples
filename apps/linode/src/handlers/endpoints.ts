import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiVersionObjectStorageEndpointsRoute } from '../routes'

const app = new OpenAPIHono()

export const endpointsHandler = app.openapi(getApiVersionObjectStorageEndpointsRoute, (c) => {
  throw new Error('Not implemented')
})
