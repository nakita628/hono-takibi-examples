import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdFieldExtractorsExtractorRoute,
  getAccountsAccountIdFieldExtractorsExtractorRoute,
  putAccountsAccountIdFieldExtractorsExtractorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fieldExtractorsHandler = app
  .openapi(deleteAccountsAccountIdFieldExtractorsExtractorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdFieldExtractorsExtractorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdFieldExtractorsExtractorRoute, (c) => {
    throw new Error('Not implemented')
  })
