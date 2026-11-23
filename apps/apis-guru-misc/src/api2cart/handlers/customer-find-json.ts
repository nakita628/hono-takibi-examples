import { OpenAPIHono } from '@hono/zod-openapi'
import { getCustomerFindJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const customerFindJsonHandler = app.openapi(getCustomerFindJsonRoute, (c) => {
  throw new Error('Not implemented')
})
