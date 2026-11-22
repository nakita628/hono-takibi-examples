import { OpenAPIHono } from '@hono/zod-openapi'
import { get20100401AccountsAccountSidBalanceJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const api20100401BalanceHandler = app.openapi(
  get20100401AccountsAccountSidBalanceJsonRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
