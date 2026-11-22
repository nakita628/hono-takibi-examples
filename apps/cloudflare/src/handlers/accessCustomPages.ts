import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdAccessCustomPagesCustomPageIdRoute,
  getAccountsAccountIdAccessCustomPagesCustomPageIdRoute,
  getAccountsAccountIdAccessCustomPagesRoute,
  postAccountsAccountIdAccessCustomPagesRoute,
  postAccountsAccountIdAccessCustomPagesValidateRoute,
  putAccountsAccountIdAccessCustomPagesCustomPageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessCustomPagesHandler = app
  .openapi(getAccountsAccountIdAccessCustomPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessCustomPagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAccessCustomPagesValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdAccessCustomPagesCustomPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessCustomPagesCustomPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdAccessCustomPagesCustomPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
