import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeGeoGeotiffRoute } from '../routes'

const app = new OpenAPIHono()

export const typeGeoGeotiffHandler = app.openapi(getRepositorySearchTypeGeoGeotiffRoute, (c) => {
  throw new Error('Not implemented')
})
