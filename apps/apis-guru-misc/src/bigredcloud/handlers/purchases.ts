import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PurchasesIdRoute,
  getV1PurchasesIdRoute,
  getV1PurchasesRoute,
  postV1PurchasesRoute,
  putV1PurchasesBatchRoute,
  putV1PurchasesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchasesHandler = app
  .openapi(getV1PurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PurchasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PurchasesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PurchasesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
