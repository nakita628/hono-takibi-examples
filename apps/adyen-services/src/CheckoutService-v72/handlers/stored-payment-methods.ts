import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoredPaymentMethodsStoredPaymentMethodIdRoute,
  getStoredPaymentMethodsRoute,
  postStoredPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storedPaymentMethodsHandler = app
  .openapi(getStoredPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoredPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoredPaymentMethodsStoredPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
