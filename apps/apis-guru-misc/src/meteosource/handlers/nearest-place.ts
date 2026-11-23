import { OpenAPIHono } from '@hono/zod-openapi'
import { getNearestPlaceRoute } from '../routes'

const app = new OpenAPIHono()

export const nearestPlaceHandler = app.openapi(getNearestPlaceRoute, (c) => {
  throw new Error('Not implemented')
})
