import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1TerritoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const territoriesHandler = app.openapi(getV1TerritoriesRoute, (c) => {
  throw new Error('Not implemented')
})
