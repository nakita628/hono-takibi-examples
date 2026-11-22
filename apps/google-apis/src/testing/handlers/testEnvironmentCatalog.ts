import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TestEnvironmentCatalogEnvironmentTypeRoute } from '../routes'

const app = new OpenAPIHono()

export const testEnvironmentCatalogHandler = app.openapi(
  getV1TestEnvironmentCatalogEnvironmentTypeRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
