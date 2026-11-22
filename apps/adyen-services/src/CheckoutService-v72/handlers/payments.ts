import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getSessionsSessionIdRoute,
  patchSessionsSessionIdRoute,
  postCardDetailsRoute,
  postPaymentMethodsRoute,
  postPaymentsDetailsRoute,
  postPaymentsRoute,
  postSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postCardDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSessionsSessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
