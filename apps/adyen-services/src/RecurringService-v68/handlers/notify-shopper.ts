import { OpenAPIHono } from '@hono/zod-openapi'
import { postNotifyShopperRoute } from '../routes'

const app = new OpenAPIHono()

export const notifyShopperHandler = app.openapi(postNotifyShopperRoute, (c) => {
  throw new Error('Not implemented')
})
