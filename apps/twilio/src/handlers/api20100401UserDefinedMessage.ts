import { OpenAPIHono } from '@hono/zod-openapi'
import { post20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401UserDefinedMessageHandler = app.openapi(
  post20100401AccountsAccountSidCallsCallSidUserDefinedMessagesJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
