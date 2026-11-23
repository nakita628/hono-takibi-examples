import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerCountJsonHandler = app.openapi(getCustomerCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
