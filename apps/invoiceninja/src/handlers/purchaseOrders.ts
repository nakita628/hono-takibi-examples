import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1PurchaseOrderIdRoute,
  getApiV1PurchaseOrderInvitationKeyDownloadRoute,
  getApiV1PurchaseOrdersCreateRoute,
  getApiV1PurchaseOrdersIdActionRoute,
  getApiV1PurchaseOrdersIdEditRoute,
  getApiV1PurchaseOrdersIdRoute,
  getApiV1PurchaseOrdersRoute,
  postApiV1PurchaseOrdersBulkRoute,
  postApiV1PurchaseOrdersIdUploadRoute,
  postApiV1PurchaseOrdersRoute,
  putApiV1PurchaseOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseOrdersHandler = app
  .openapi(getApiV1PurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1PurchaseOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1PurchaseOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PurchaseOrdersBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrdersIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1PurchaseOrdersIdUploadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PurchaseOrderInvitationKeyDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
