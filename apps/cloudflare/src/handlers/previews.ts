import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute,
  getAccountsAccountIdWorkersWorkersWorkerIdPreviewsRoute,
  patchAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute,
  postAccountsAccountIdWorkersWorkersWorkerIdPreviewsRoute,
  putAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const previewsHandler = app
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersWorkersWorkerIdPreviewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersWorkersWorkerIdPreviewsPreviewIdRoute, (c) => {
    throw new Error('Not implemented')
  })
