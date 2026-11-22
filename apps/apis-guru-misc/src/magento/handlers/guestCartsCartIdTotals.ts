import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GuestCartsCartIdTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdTotalsHandler = app.openapi(getV1GuestCartsCartIdTotalsRoute, (c) => {
  throw new Error('Not implemented')
})
