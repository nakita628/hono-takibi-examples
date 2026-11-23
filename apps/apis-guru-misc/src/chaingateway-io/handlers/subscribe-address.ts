import { OpenAPIHono } from '@hono/zod-openapi'
import { postSubscribeAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const subscribeAddressHandler = app.openapi(postSubscribeAddressRoute, (c) => {
  throw new Error('Not implemented')
})
