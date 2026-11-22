import { OpenAPIHono } from '@hono/zod-openapi'
import {
  changeSellerHandler,
  conversationHandler,
  exportOrderReportHandler,
  feedV2DeprecatedHandler,
  feedV3Handler,
  invoiceHandler,
  orderHookHandler,
  ordersHandler,
  paymentHandler,
  trackingHandler,
  userOrdersHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', changeSellerHandler)
  .route('/', exportOrderReportHandler)
  .route('/', feedV2DeprecatedHandler)
  .route('/', ordersHandler)
  .route('/', conversationHandler)
  .route('/', invoiceHandler)
  .route('/', trackingHandler)
  .route('/', paymentHandler)
  .route('/', userOrdersHandler)
  .route('/', feedV3Handler)
  .route('/', orderHookHandler)

export default app
