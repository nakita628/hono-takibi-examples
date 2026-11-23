import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPurchaseOrdersIdRoute,
  getPurchaseOrdersRoute,
  getPurchaseOrdersTemplatesRoute,
  postPurchaseOrdersRoute,
  putPurchaseOrdersIdCancelRoute,
  putPurchaseOrdersIdRoute,
  putPurchaseOrdersIdUncancelRoute,
} from '../routes'

const app = new OpenAPIHono()

export const purchaseOrdersHandler = app
  .openapi(getPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPurchaseOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPurchaseOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putPurchaseOrdersIdUncancelRoute, (c) => {
    throw new Error('Not implemented')
  })
