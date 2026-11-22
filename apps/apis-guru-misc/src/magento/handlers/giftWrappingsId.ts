import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1GiftWrappingsIdRoute, getV1GiftWrappingsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const giftWrappingsIdHandler = app
  .openapi(deleteV1GiftWrappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GiftWrappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
