import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPaymentsCancelRoute,
  postPaymentsConfirmRoute,
  postPaymentsDetailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentsHandler = app
  .openapi(postPaymentsCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPaymentsDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
