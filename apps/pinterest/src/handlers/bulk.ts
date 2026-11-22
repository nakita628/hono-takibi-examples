import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdAccountsAdAccountIdBulkBulkRequestIdRoute,
  postAdAccountsAdAccountIdBulkDownloadRoute,
  postAdAccountsAdAccountIdBulkUpsertRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkHandler = app
  .openapi(postAdAccountsAdAccountIdBulkDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdAccountsAdAccountIdBulkUpsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdAccountsAdAccountIdBulkBulkRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
