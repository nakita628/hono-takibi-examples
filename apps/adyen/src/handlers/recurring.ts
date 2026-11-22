import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteStoredPaymentMethodsStoredPaymentMethodIdRoute,
  getStoredPaymentMethodsRoute,
  postForwardRoute,
  postStoredPaymentMethodsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const recurringHandler = app
  .openapi(postForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStoredPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStoredPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteStoredPaymentMethodsStoredPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
