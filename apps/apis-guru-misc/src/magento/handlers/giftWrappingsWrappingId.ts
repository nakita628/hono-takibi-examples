import { OpenAPIHono } from '@hono/zod-openapi'
import { putV1GiftWrappingsWrappingIdRoute } from '../routes'

const app = new OpenAPIHono()

export const giftWrappingsWrappingIdHandler = app.openapi(
  putV1GiftWrappingsWrappingIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
