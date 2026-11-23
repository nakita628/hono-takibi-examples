import { OpenAPIHono } from '@hono/zod-openapi'
import { postBalanceinquiryRoute } from '../routes'

const app = new OpenAPIHono()

export const balanceinquiryHandler = app.openapi(postBalanceinquiryRoute, (c) => {
  throw new Error('Not implemented')
})
