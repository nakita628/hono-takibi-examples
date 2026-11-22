import { OpenAPIHono } from '@hono/zod-openapi'
import { getAddressesRoute, postAddressesRoute } from '../routes'

const app = new OpenAPIHono()

export const addressesHandler = app
  .openapi(getAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
