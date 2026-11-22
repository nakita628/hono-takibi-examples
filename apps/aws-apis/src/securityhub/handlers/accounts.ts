import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsRoute,
  getAccountsRoute,
  patchAccountsRoute,
  postAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
