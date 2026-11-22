import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsCartIdGiftMessageRoute, postV1CartsCartIdGiftMessageRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdGiftMessageHandler = app
  .openapi(getV1CartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
