import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiPaymentlinkAllRoute,
  getApiPaymentlinkUriRoute,
  postApiPaymentlinkDeleteRoute,
  postApiPaymentlinkNewRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentLinkHandler = app
  .openapi(getApiPaymentlinkAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentlinkDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPaymentlinkNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPaymentlinkUriRoute, (c) => {
    throw new Error('Not implemented')
  })
