import { OpenAPIHono } from '@hono/zod-openapi'
import { postUnsubscribeAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const unsubscribeAddressHandler = app.openapi(postUnsubscribeAddressRoute, (c) => {
  throw new Error('Not implemented')
})
