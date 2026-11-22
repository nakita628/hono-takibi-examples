import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdRoute,
  getAccountsAccountIdOrganizationsRoute,
  getAccountsAccountIdProfileRoute,
  getAccountsAccountIdRoute,
  getAccountsRoute,
  postAccountsAccountIdMoveRoute,
  postAccountsRoute,
  putAccountsAccountIdProfileRoute,
  putAccountsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accountsHandler = app
  .openapi(getAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
