import { OpenAPIHono } from '@hono/zod-openapi'
import { postPaypalUpdateOrderRoute } from '../routes'

const app = new OpenAPIHono()

export const paypalHandler = app.openapi(postPaypalUpdateOrderRoute, (c) => {
  throw new Error('Not implemented')
})
