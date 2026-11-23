import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdRoute,
  getAccountsRoute,
  patchAccountsAccountIdRoute,
  postAccountsAccountIdCloseRoute,
  postAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
