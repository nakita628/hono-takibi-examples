import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CartsCartIdBillingAddressRoute,
  postV1CartsCartIdBillingAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdBillingAddressHandler = app
  .openapi(getV1CartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
