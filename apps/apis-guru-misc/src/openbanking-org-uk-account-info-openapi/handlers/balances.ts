import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdBalancesRoute, getBalancesRoute } from '../routes'

const app = new OpenAPIHono()

export const balancesHandler = app
  .openapi(getAccountsAccountIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
