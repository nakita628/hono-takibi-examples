import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBankAccountsIdRoute,
  getBankAccountsIdRoute,
  getBankAccountsRoute,
  postBankAccountsRoute,
  putBankAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankAccountHandler = app
  .openapi(getBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putBankAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
