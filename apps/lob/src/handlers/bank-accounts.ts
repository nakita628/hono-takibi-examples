import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBankAccountsBankIdRoute,
  getBankAccountsBankIdRoute,
  getBankAccountsRoute,
  postBankAccountsBankIdVerifyRoute,
  postBankAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bankAccountsHandler = app
  .openapi(postBankAccountsBankIdVerifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankAccountsBankIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteBankAccountsBankIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
