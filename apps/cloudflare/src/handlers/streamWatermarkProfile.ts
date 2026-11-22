import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamWatermarksIdentifierRoute,
  getAccountsAccountIdStreamWatermarksIdentifierRoute,
  getAccountsAccountIdStreamWatermarksRoute,
  postAccountsAccountIdStreamWatermarksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamWatermarkProfileHandler = app
  .openapi(getAccountsAccountIdStreamWatermarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamWatermarksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamWatermarksIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamWatermarksIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
