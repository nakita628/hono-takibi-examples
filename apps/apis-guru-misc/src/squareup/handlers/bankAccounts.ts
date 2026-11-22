import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BankAccountsBankAccountIdRoute,
  getV2BankAccountsByV1IdV1BankAccountIdRoute,
  getV2BankAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankAccountsHandler = app
  .openapi(getV2BankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BankAccountsByV1IdV1BankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BankAccountsBankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
