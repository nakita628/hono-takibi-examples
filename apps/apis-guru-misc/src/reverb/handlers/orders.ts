import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrdersOrderIdFeedbackBuyerRoute,
  getOrdersOrderIdFeedbackSellerRoute,
  postOrdersOrderIdFeedbackBuyerRoute,
  postOrdersOrderIdFeedbackSellerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
  .openapi(getOrdersOrderIdFeedbackBuyerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdFeedbackBuyerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrdersOrderIdFeedbackSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrdersOrderIdFeedbackSellerRoute, (c) => {
    throw new Error('Not implemented')
  })
