import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CartsMineBillingAddressRoute, postV1CartsMineBillingAddressRoute } from '../routes'

const app = new OpenAPIHono()

export const cartsMineBillingAddressHandler = app
  .openapi(getV1CartsMineBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
