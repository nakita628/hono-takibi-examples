import { OpenAPIHono } from '@hono/zod-openapi'
import { postNewAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const newAddressHandler = app.openapi(postNewAddressRoute, (c) => {
  throw new Error('Not implemented')
})
