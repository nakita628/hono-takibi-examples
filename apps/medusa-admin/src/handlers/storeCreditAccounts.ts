import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminStoreCreditAccountsIdRoute,
  getAdminStoreCreditAccountsIdTransactionsRoute,
  getAdminStoreCreditAccountsRoute,
  postAdminStoreCreditAccountsIdCreditRoute,
  postAdminStoreCreditAccountsIdDebitRoute,
  postAdminStoreCreditAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const storeCreditAccountsHandler = app
  .openapi(getAdminStoreCreditAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoreCreditAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoreCreditAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoreCreditAccountsIdCreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoreCreditAccountsIdDebitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoreCreditAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
