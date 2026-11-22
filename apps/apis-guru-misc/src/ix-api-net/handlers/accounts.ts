import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsIdRoute,
  getAccountsIdRoute,
  getAccountsRoute,
  patchAccountsIdRoute,
  postAccountsRoute,
  putAccountsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
