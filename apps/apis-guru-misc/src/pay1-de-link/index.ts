import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1PaymentLinksLinkIdRoute,
  getV1PaymentLinksRoute,
  postV1PaymentLinksRoute,
  putV1PaymentLinksLinkIdRoute,
} from './routes'
import {
  getV1PaymentLinksLinkIdRouteHandler,
  getV1PaymentLinksRouteHandler,
  postV1PaymentLinksRouteHandler,
  putV1PaymentLinksLinkIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1PaymentLinksRoute, getV1PaymentLinksRouteHandler)
  .openapi(postV1PaymentLinksRoute, postV1PaymentLinksRouteHandler)
  .openapi(getV1PaymentLinksLinkIdRoute, getV1PaymentLinksLinkIdRouteHandler)
  .openapi(putV1PaymentLinksLinkIdRoute, putV1PaymentLinksLinkIdRouteHandler)

export default app
