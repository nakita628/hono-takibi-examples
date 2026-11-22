import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpDataClassesDataClassIdRoute,
  getAccountsAccountIdDlpDataClassesDataClassIdRoute,
  getAccountsAccountIdDlpDataClassesRoute,
  postAccountsAccountIdDlpDataClassesRoute,
  putAccountsAccountIdDlpDataClassesDataClassIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpDataClassesHandler = app
  .openapi(getAccountsAccountIdDlpDataClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpDataClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpDataClassesDataClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpDataClassesDataClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpDataClassesDataClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
