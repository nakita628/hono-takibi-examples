import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1OrdersIdEmailsRoute } from '../routes'

const app = new OpenAPIHono()

export const ordersIdEmailsHandler = app.openapi(postV1OrdersIdEmailsRoute, (c) => {
  throw new Error('Not implemented')
})
