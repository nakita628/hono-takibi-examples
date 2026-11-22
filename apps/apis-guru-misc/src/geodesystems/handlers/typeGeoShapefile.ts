import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoShapefileRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGeoShapefileHandler = app.openapi(
  getRepositorySearchTypeGeoShapefileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
