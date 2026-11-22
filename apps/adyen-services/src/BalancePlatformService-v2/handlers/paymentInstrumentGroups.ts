import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPaymentInstrumentGroupsIdRoute,
  getPaymentInstrumentGroupsIdTransactionRulesRoute,
  postPaymentInstrumentGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInstrumentGroupsHandler = app
  .openapi(postPaymentInstrumentGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPaymentInstrumentGroupsIdTransactionRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
