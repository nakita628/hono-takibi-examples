import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GuestCartsCartIdCollectionPointSearchResultRoute } from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCollectionPointSearchResultHandler = app.openapi(
  getV1GuestCartsCartIdCollectionPointSearchResultRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
