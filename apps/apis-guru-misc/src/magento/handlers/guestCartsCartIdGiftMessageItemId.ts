import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1GuestCartsCartIdGiftMessageItemIdRoute,
  postV1GuestCartsCartIdGiftMessageItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdGiftMessageItemIdHandler = app
  .openapi(getV1GuestCartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
