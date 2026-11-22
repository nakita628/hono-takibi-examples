import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpEntriesEntryIdRoute,
  getAccountsAccountIdDlpEntriesEntryIdRoute,
  getAccountsAccountIdDlpEntriesRoute,
  postAccountsAccountIdDlpEntriesRoute,
  putAccountsAccountIdDlpEntriesCustomEntryIdRoute,
  putAccountsAccountIdDlpEntriesEntryIdRoute,
  putAccountsAccountIdDlpEntriesPredefinedEntryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpEntriesHandler = app
  .openapi(getAccountsAccountIdDlpEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpEntriesCustomEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpEntriesPredefinedEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpEntriesEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpEntriesEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpEntriesEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
