import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute,
  getMerchantIdOrderreportsDisbursementsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderreportsHandler = app
  .openapi(getMerchantIdOrderreportsDisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
