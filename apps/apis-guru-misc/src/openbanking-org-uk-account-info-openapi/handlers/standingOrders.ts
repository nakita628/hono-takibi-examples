import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdStandingOrdersRoute, getStandingOrdersRoute } from '../routes'

const app = new OpenAPIHono()

export const standingOrdersHandler = app
  .openapi(getAccountsAccountIdStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStandingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
