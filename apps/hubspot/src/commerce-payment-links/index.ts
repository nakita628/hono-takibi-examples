import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
  getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
  getCommercePaymentLinks202609PaymentLinksRoute,
  patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
  postCommercePaymentLinks202609PaymentLinksRoute,
} from './routes'
import {
  deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRouteHandler,
  getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRouteHandler,
  getCommercePaymentLinks202609PaymentLinksRouteHandler,
  patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRouteHandler,
  postCommercePaymentLinks202609PaymentLinksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCommercePaymentLinks202609PaymentLinksRoute,
    getCommercePaymentLinks202609PaymentLinksRouteHandler,
  )
  .openapi(
    postCommercePaymentLinks202609PaymentLinksRoute,
    postCommercePaymentLinks202609PaymentLinksRouteHandler,
  )
  .openapi(
    getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
    getCommercePaymentLinks202609PaymentLinksPaymentLinkIdRouteHandler,
  )
  .openapi(
    deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
    deleteCommercePaymentLinks202609PaymentLinksPaymentLinkIdRouteHandler,
  )
  .openapi(
    patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRoute,
    patchCommercePaymentLinks202609PaymentLinksPaymentLinkIdRouteHandler,
  )

export default app
