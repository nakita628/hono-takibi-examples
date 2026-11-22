import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1WarehousesWarehouseIdRoute,
  getV1WarehousesRoute,
  getV1WarehousesWarehouseIdRoute,
  postV1WarehousesRoute,
  putV1WarehousesWarehouseIdRoute,
  putV1WarehousesWarehouseIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const warehousesHandler = app
  .openapi(getV1WarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1WarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehousesWarehouseIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
