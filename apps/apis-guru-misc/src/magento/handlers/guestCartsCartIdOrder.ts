import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1GuestCartsCartIdOrderRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdOrderHandler = app.openapi(putV1GuestCartsCartIdOrderRoute, (c) => {
  throw new Error('Not implemented')
})
