import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2AccountsIdBalancesIndexRoute,
  getApiV2AccountsIdDetailsIndexRoute,
  getApiV2AccountsIdIndexRoute,
  getApiV2AccountsIdTransactionsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getApiV2AccountsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdBalancesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdDetailsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AccountsIdTransactionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
