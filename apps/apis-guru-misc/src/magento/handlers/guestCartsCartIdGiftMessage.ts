import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1GuestCartsCartIdGiftMessageRoute,
  postV1GuestCartsCartIdGiftMessageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdGiftMessageHandler = app
  .openapi(getV1GuestCartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
