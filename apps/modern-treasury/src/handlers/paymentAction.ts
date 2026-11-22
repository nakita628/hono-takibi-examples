import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPaymentActionsIdRoute,
  getApiPaymentActionsRoute,
  patchApiPaymentActionsIdRoute,
  postApiPaymentActionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentActionHandler = app
  .openapi(getApiPaymentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiPaymentActionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
