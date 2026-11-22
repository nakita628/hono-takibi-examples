import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1BankAccountsIdRoute,
  getV1BankAccountsIdRoute,
  getV1BankAccountsRoute,
  postV1BankAccountsRoute,
  putV1BankAccountsBatchRoute,
  putV1BankAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankAccountsHandler = app
  .openapi(getV1BankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BankAccountsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
