import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GuestCartsCartIdRoute, putV1GuestCartsCartIdRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdHandler = app
  .openapi(getV1GuestCartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
