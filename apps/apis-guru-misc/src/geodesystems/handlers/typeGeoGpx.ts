import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoGpxRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGeoGpxHandler = app.openapi(getRepositorySearchTypeGeoGpxRoute, (c) => {
  throw new Error('Not implemented')
})
