import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartGiftcardListJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartGiftcardListJsonHandler = app.openapi(getCartGiftcardListJsonRoute, (c) => {
  throw new Error('Not implemented')
})
