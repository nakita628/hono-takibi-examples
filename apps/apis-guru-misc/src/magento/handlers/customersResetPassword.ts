import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomersResetPasswordRoute } from '../routes'

const app = new OpenAPIHono()

export const customersResetPasswordHandler = app.openapi(postV1CustomersResetPasswordRoute, (c) => {
  throw new Error('Not implemented')
})
