import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1GuestCartsCartIdSelectedPaymentMethodRoute,
  putV1GuestCartsCartIdSelectedPaymentMethodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const guestCartsCartIdSelectedPaymentMethodHandler = app
  .openapi(getV1GuestCartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
