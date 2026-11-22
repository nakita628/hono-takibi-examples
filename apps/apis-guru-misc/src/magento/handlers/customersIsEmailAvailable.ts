import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomersIsEmailAvailableRoute } from '../routes'

const app = new OpenAPIHono()

export const customersIsEmailAvailableHandler = app.openapi(
  postV1CustomersIsEmailAvailableRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
