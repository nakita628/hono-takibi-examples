import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerInfoJsonHandler = app.openapi(getCustomerInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
