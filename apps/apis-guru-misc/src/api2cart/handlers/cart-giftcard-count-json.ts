import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartGiftcardCountJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartGiftcardCountJsonHandler = app.openapi(getCartGiftcardCountJsonRoute, (c) => {
  throw new Error('Not implemented')
})
