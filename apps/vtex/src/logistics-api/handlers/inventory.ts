import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedRoute,
  getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdRoute,
  getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdRoute,
  getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdRoute,
  getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsRoute,
  getApiLogisticsPvtInventorySkusSkuIdRoute,
  postApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferRoute,
  putApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdRoute,
  putApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoryHandler = app
  .openapi(getApiLogisticsPvtInventoryItemsItemIdWarehousesWarehouseIdDispatchedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdDocksDockIdWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    putApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postApiLogisticsPvtInventoryItemsSkuIdWarehousesWarehouseIdSupplyLotsSupplyLotIdTransferRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiLogisticsPvtInventorySkusSkuIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiLogisticsPvtInventorySkusSkuIdWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
