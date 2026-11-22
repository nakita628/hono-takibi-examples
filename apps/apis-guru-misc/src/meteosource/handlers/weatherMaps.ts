import { OpenAPIHono } from '@hono/zod-openapi'
import { getMapRoute } from '../routes'

const app = new OpenAPIHono()

export const weatherMapsHandler = app.openapi(getMapRoute, (c) => {
  throw new Error('Not implemented')
})
