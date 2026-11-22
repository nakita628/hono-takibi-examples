import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute,
  postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderinvoicesHandler = app
  .openapi(postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
