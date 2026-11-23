import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentmethodPaymentMethodNumberRoute,
  getPaymentmethodRoute,
  postPaymentmethodPaymentMethodNumberRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentmethodHandler = app
  .openapi(getPaymentmethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentmethodPaymentMethodNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentmethodPaymentMethodNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
