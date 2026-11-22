import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2InventoryAdjustmentAdjustmentIdRoute,
  getV2InventoryAdjustmentsAdjustmentIdRoute,
  getV2InventoryCatalogObjectIdChangesRoute,
  getV2InventoryCatalogObjectIdRoute,
  getV2InventoryPhysicalCountPhysicalCountIdRoute,
  getV2InventoryPhysicalCountsPhysicalCountIdRoute,
  getV2InventoryTransfersTransferIdRoute,
  postV2InventoryBatchChangeRoute,
  postV2InventoryBatchRetrieveChangesRoute,
  postV2InventoryBatchRetrieveCountsRoute,
  postV2InventoryChangesBatchCreateRoute,
  postV2InventoryChangesBatchRetrieveRoute,
  postV2InventoryCountsBatchRetrieveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoryHandler = app
  .openapi(getV2InventoryAdjustmentAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryAdjustmentsAdjustmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryBatchChangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryBatchRetrieveChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryBatchRetrieveCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryChangesBatchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryChangesBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventoryCountsBatchRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryPhysicalCountPhysicalCountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryPhysicalCountsPhysicalCountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryTransfersTransferIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryCatalogObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventoryCatalogObjectIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
