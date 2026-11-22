import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1EntitiesSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const entitiesHandler = app.openapi(getV1EntitiesSearchRoute, (c) => {
  throw new Error('Not implemented')
})
