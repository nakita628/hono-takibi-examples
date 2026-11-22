import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdBulkSendListsBulkSendListIdRoute,
  getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesRoute,
  getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute,
  getV21AccountsAccountIdBulkSendBatchRoute,
  getV21AccountsAccountIdBulkSendListsBulkSendListIdRoute,
  getV21AccountsAccountIdBulkSendListsRoute,
  postV21AccountsAccountIdBulkSendListsBulkSendListIdSendRoute,
  postV21AccountsAccountIdBulkSendListsBulkSendListIdTestRoute,
  postV21AccountsAccountIdBulkSendListsRoute,
  putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionRoute,
  putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute,
  putV21AccountsAccountIdBulkSendListsBulkSendListIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const bulkSendHandler = app
  .openapi(getV21AccountsAccountIdBulkSendBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendBatchBulkSendBatchIdEnvelopesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBulkSendBatchBulkSendBatchIdBulkActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBulkSendListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdBulkSendListsBulkSendListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdBulkSendListsBulkSendListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdBulkSendListsBulkSendListIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBulkSendListsBulkSendListIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdBulkSendListsBulkSendListIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
