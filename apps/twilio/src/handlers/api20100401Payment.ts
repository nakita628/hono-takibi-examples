import { OpenAPIHono } from '@hono/zod-openapi'
import {
  post20100401AccountsAccountSidCallsCallSidPaymentsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidPaymentsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401PaymentHandler = app
  .openapi(post20100401AccountsAccountSidCallsCallSidPaymentsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidCallsCallSidPaymentsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
