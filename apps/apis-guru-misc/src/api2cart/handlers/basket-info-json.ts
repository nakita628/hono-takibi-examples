import { OpenAPIHono } from '@hono/zod-openapi'
import { getBasketInfoJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const basketInfoJsonHandler = app.openapi(getBasketInfoJsonRoute, (c) => {
  throw new Error('Not implemented')
})
