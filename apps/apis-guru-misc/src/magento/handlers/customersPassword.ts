import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1CustomersPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const customersPasswordHandler = app.openapi(putV1CustomersPasswordRoute, (c) => {
  throw new Error('Not implemented')
})
