import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CartsCartIdGiftMessageItemIdRoute,
  postV1CartsCartIdGiftMessageItemIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdGiftMessageItemIdHandler = app
  .openapi(getV1CartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
