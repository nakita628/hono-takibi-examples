import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoShapefileFipsRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGeoShapefileFipsHandler = app.openapi(
  getRepositorySearchTypeGeoShapefileFipsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
