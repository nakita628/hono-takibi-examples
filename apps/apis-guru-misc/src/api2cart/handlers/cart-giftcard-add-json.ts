import { OpenAPIHono } from '@hono/zod-openapi'
import { postCartGiftcardAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartGiftcardAddJsonHandler = app.openapi(postCartGiftcardAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
