import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersRoute,
  getAccountsAccountPositionsRoute,
  getAccountsAccountSummaryRoute,
  getAccountsAccountTradesRoute,
  getAccountsRoute,
  postAccountsAccountOrderImpactRoute,
  postAccountsAccountOrdersRoute,
  putAccountsAccountOrdersCustomerOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountOrderImpactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountOrdersCustomerOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountOrdersCustomerOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountOrdersCustomerOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountTradesRoute, (c) => {
    throw new Error('Not implemented')
  })
