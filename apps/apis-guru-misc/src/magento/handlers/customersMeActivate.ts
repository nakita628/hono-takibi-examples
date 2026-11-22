import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CustomersMeActivateRoute } from '../routes'

const app = new OpenAPIHono()

export const customersMeActivateHandler = app.openapi(putV1CustomersMeActivateRoute, (c) => {
  throw new Error('Not implemented')
})
