import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountBalancesRoute,
  getAccountMovementsRoute,
  getAccountTransactionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountDataHandler = app
  .openapi(getAccountBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountMovementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
