import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CustomersValidateRoute } from '../routes'

const app = new OpenAPIHono()

export const customersValidateHandler = app.openapi(putV1CustomersValidateRoute, (c) => {
  throw new Error('Not implemented')
})
