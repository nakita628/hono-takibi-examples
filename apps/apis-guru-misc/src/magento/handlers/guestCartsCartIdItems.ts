import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GuestCartsCartIdItemsRoute, postV1GuestCartsCartIdItemsRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdItemsHandler = app
  .openapi(getV1GuestCartsCartIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
