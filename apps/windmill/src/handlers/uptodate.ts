import { OpenAPIHono } from '@hono/zod-openapi'
import { getUptodateRoute } from '../routes'

const app = new OpenAPIHono()

export const uptodateHandler = app.openapi(getUptodateRoute, (c) => {
  throw new Error('Not implemented')
})
