import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidCallsCallSidEventsJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401EventHandler = app.openapi(
  get20100401AccountsAccountSidCallsCallSidEventsJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
