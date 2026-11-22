import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2PaymentLinksPaymentLinkIdRoute,
  getV2PaymentLinksPaymentLinkIdPaymentsRoute,
  getV2PaymentLinksPaymentLinkIdRoute,
  getV2PaymentLinksRoute,
  patchV2PaymentLinksPaymentLinkIdRoute,
  postV2PaymentLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentLinksAPIHandler = app
  .openapi(postV2PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PaymentLinksPaymentLinkIdPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
