import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApi1PurchaseRequestsIdRoute,
  getApi1PurchaseRequestsFormsIdRoute,
  getApi1PurchaseRequestsFormsRoute,
  getApi1PurchaseRequestsIdRoute,
  getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRoute,
  getApi1PurchaseRequestsRoute,
  postApi1PurchaseRequestsIdActionsRoute,
  postApi1PurchaseRequestsRoute,
  putApi1PurchaseRequestsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseRequestsHandler = app
  .openapi(getApi1PurchaseRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PurchaseRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApi1PurchaseRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApi1PurchaseRequestsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsFormsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsFormsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApi1PurchaseRequestsIdActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
