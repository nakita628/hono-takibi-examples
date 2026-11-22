import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1GuestCartsCartIdCollectTotalsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCollectTotalsHandler = app.openapi(
  putV1GuestCartsCartIdCollectTotalsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
