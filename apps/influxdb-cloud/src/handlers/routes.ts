import { OpenAPIHono } from '@hono/zod-openapi'
import { getRoute } from '../routes'

const app = new OpenAPIHono()

export const routesHandler = app.openapi(getRoute, (c) => {
  throw new Error('Not implemented')
})
