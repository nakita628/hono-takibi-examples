import { OpenAPIHono } from '@hono/zod-openapi'
import { postBasketItemAddJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const basketItemAddJsonHandler = app.openapi(postBasketItemAddJsonRoute, (c) => {
  throw new Error('Not implemented')
})
