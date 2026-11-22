import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpEntriesPredefinedEntryIdRoute,
  postAccountsAccountIdDlpEntriesPredefinedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpPredefinedEntriesHandler = app
  .openapi(postAccountsAccountIdDlpEntriesPredefinedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpEntriesPredefinedEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
