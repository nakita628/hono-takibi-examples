import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdBalancesRoute } from '../routes'

const app = new OpenAPIHono()

export const balancesHandler = app.openapi(getAccountsAccountIdBalancesRoute, (c) => {
  throw new Error('Not implemented')
})
