import { OpenAPIHono } from '@hono/zod-openapi'
import { postCouponsRoute } from '../routes'

const app = new OpenAPIHono()

export const couponsHandler = app.openapi(postCouponsRoute, (c) => {
  throw new Error('Not implemented')
})
