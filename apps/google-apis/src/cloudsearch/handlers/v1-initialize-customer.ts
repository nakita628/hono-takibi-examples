import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1InitializeCustomerRoute } from '../routes'

const app = new OpenAPIHono()

export const v1InitializeCustomerHandler = app.openapi(postV1InitializeCustomerRoute, (c) => {
  throw new Error('Not implemented')
})
