import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1GuestCartsCartIdItemsItemIdRoute,
  putV1GuestCartsCartIdItemsItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdItemsItemIdHandler = app
  .openapi(deleteV1GuestCartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
