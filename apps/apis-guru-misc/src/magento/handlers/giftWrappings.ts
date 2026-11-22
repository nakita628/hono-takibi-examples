import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1GiftWrappingsRoute, postV1GiftWrappingsRoute } from '../routes'

const app = new OpenAPIHono()

export const giftWrappingsHandler = app
  .openapi(getV1GiftWrappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GiftWrappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
