import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1GuestCartsCartIdCollectionPointSearchRequestRoute,
  putV1GuestCartsCartIdCollectionPointSearchRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdCollectionPointSearchRequestHandler = app
  .openapi(deleteV1GuestCartsCartIdCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
