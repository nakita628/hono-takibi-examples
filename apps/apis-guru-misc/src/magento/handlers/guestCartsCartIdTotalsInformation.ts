import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdTotalsInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdTotalsInformationHandler = app.openapi(
  postV1GuestCartsCartIdTotalsInformationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
