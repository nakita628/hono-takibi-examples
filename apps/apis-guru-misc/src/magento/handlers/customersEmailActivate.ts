import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CustomersEmailActivateRoute } from '../routes'

const app = new OpenAPIHono()

export const customersEmailActivateHandler = app.openapi(putV1CustomersEmailActivateRoute, (c) => {
  throw new Error('Not implemented')
})
