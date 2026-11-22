import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamIdentifierDownloadsDownloadTypeRoute,
  deleteAccountsAccountIdStreamIdentifierDownloadsRoute,
  getAccountsAccountIdStreamIdentifierDownloadsRoute,
  postAccountsAccountIdStreamIdentifierDownloadsDownloadTypeRoute,
  postAccountsAccountIdStreamIdentifierDownloadsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamMP4DownloadsHandler = app
  .openapi(deleteAccountsAccountIdStreamIdentifierDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamIdentifierDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamIdentifierDownloadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamIdentifierDownloadsDownloadTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamIdentifierDownloadsDownloadTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
