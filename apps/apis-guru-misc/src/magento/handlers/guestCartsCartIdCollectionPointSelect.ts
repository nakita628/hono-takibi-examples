import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1GuestCartsCartIdCollectionPointSelectRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCollectionPointSelectHandler = app.openapi(
  postV1GuestCartsCartIdCollectionPointSelectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
