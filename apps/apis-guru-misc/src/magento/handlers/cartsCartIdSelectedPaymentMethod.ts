import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1CartsCartIdSelectedPaymentMethodRoute,
  putV1CartsCartIdSelectedPaymentMethodRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cartsCartIdSelectedPaymentMethodHandler = app
  .openapi(getV1CartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
