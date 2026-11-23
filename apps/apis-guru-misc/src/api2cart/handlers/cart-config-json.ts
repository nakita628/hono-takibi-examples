import { OpenAPIHono } from '@hono/zod-openapi'
import { getCartConfigJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const cartConfigJsonHandler = app.openapi(getCartConfigJsonRoute, (c) => {
  throw new Error('Not implemented')
})
