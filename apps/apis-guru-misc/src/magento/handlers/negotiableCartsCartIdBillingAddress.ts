import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NegotiableCartsCartIdBillingAddressRoute,
  postV1NegotiableCartsCartIdBillingAddressRoute,
} from '../routes'

const app = new OpenAPIHono()

export const negotiableCartsCartIdBillingAddressHandler = app
  .openapi(getV1NegotiableCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
