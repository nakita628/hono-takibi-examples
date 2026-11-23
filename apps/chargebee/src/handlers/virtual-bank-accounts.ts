import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVirtualBankAccountsRoute,
  getVirtualBankAccountsVirtualBankAccountIdRoute,
  postVirtualBankAccountsCreateUsingPermanentTokenRoute,
  postVirtualBankAccountsRoute,
  postVirtualBankAccountsVirtualBankAccountIdDeleteLocalRoute,
  postVirtualBankAccountsVirtualBankAccountIdDeleteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const virtualBankAccountsHandler = app
  .openapi(postVirtualBankAccountsVirtualBankAccountIdDeleteLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualBankAccountsVirtualBankAccountIdDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualBankAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVirtualBankAccountsVirtualBankAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVirtualBankAccountsCreateUsingPermanentTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
