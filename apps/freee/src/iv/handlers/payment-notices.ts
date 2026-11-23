import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentNoticesIdRoute,
  getPaymentNoticesRoute,
  getPaymentNoticesTemplatesRoute,
  postPaymentNoticesRoute,
  putPaymentNoticesIdCancelRoute,
  putPaymentNoticesIdRoute,
  putPaymentNoticesIdUncancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentNoticesHandler = app
  .openapi(getPaymentNoticesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentNoticesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentNoticesTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentNoticesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentNoticesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentNoticesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPaymentNoticesIdUncancelRoute, (c) => {
    throw new Error('Not implemented')
  })
