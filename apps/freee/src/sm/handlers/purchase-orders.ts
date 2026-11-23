import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPurchaseOrdersIdRoute,
  getPurchaseOrdersRoute,
  patchPurchaseOrdersIdRoute,
  postPurchaseOrdersIdCancellationRoute,
  postPurchaseOrdersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseOrdersHandler = app
  .openapi(getPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPurchaseOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersIdCancellationRoute, (c) => {
    throw new Error('Not implemented')
  })
