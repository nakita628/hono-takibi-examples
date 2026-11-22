import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoKmlRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGeoKmlHandler = app.openapi(getRepositorySearchTypeGeoKmlRoute, (c) => {
  throw new Error('Not implemented')
})
