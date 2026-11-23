import { OpenAPIHono } from '@hono/zod-openapi'
import { getNearbyRoute } from '../routes'

const app = new OpenAPIHono()

export const nearbyHandler = app.openapi(getNearbyRoute, (c) => {
  throw new Error('Not implemented')
})
