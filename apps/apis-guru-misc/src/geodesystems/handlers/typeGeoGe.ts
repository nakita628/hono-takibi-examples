import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoGeojsonRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGeoGeHandler = app.openapi(getRepositorySearchTypeGeoGeojsonRoute, (c) => {
  throw new Error('Not implemented')
})
