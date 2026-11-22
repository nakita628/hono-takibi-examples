import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdStreamIdentifierRoute,
  getAccountsAccountIdStreamIdentifierEmbedRoute,
  getAccountsAccountIdStreamIdentifierRoute,
  getAccountsAccountIdStreamRoute,
  getAccountsAccountIdStreamStorageUsageRoute,
  postAccountsAccountIdStreamCopyRoute,
  postAccountsAccountIdStreamDirectUploadRoute,
  postAccountsAccountIdStreamIdentifierRoute,
  postAccountsAccountIdStreamIdentifierTokenRoute,
  postAccountsAccountIdStreamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const streamVideosHandler = app
  .openapi(getAccountsAccountIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamDirectUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamStorageUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdStreamIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamIdentifierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdStreamIdentifierEmbedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdStreamIdentifierTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
