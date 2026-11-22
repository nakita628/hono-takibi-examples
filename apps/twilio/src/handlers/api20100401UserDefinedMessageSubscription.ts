import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonRoute,
  post20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401UserDefinedMessageSubscriptionHandler = app
  .openapi(
    post20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    delete20100401AccountsAccountSidCallsCallSidUserDefinedMessageSubscriptionsSidJsonRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
