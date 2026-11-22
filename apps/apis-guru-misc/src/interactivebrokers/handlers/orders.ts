import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersCustomerOrderIdRoute,
  getAccountsAccountOrdersRoute,
  postAccountsAccountOrdersRoute,
  putAccountsAccountOrdersCustomerOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ordersHandler = app
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
