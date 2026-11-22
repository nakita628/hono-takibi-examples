import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdCustomerListsCustomerListIdRoute,
  getAdAccountsAdAccountIdCustomerListsRoute,
  patchAdAccountsAdAccountIdCustomerListsCustomerListIdRoute,
  postAdAccountsAdAccountIdCustomerListsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customerListsHandler = app
  .openapi(getAdAccountsAdAccountIdCustomerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdCustomerListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdCustomerListsCustomerListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdAccountsAdAccountIdCustomerListsCustomerListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
