import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteAddressHandler = app.openapi(postDeleteAddressRoute, (c) => {
  throw new Error('Not implemented')
})
