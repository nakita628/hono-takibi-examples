import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
  getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
  getCommercePaymentLinks202609PaymentLinksRoute,
  patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
  postCommercePaymentLinks202609PaymentLinksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCommercePaymentLinks202609PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCommercePaymentLinks202609PaymentLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute, (c) => {
    throw new Error('Not implemented')
  })
