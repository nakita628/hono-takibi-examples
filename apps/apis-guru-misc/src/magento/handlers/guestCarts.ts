import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsHandler = app.openapi(postV1GuestCartsRoute, (c) => {
  throw new Error('Not implemented')
})
