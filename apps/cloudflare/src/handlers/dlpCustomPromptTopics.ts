import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdDlpCustomPromptTopicsEntryIdRoute,
  getAccountsAccountIdDlpCustomPromptTopicsEntryIdRoute,
  getAccountsAccountIdDlpCustomPromptTopicsRoute,
  postAccountsAccountIdDlpCustomPromptTopicsRoute,
  putAccountsAccountIdDlpCustomPromptTopicsEntryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dlpCustomPromptTopicsHandler = app
  .openapi(getAccountsAccountIdDlpCustomPromptTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdDlpCustomPromptTopicsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdDlpCustomPromptTopicsEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdDlpCustomPromptTopicsEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdDlpCustomPromptTopicsEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
