import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomersConfirmRoute } from '../routes'

const app = new OpenAPIHono()

export const customersConfirmHandler = app.openapi(postV1CustomersConfirmRoute, (c) => {
  throw new Error('Not implemented')
})
