import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WarehouseSyncsRoute,
  getV1WarehouseSyncsWarehouseSyncKeyRoute,
  getV1WarehouseSyncsWarehouseSyncKeyRunsRoute,
  putV1WarehouseSyncsWarehouseSyncKeyRoute,
  putV1WarehouseSyncsWarehouseSyncKeyRunRoute,
  putV1WarehouseSyncsWarehouseSyncKeySettingsRoute,
  putV1WarehouseSyncsWarehouseSyncKeyValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const warehouseSyncsHandler = app
  .openapi(putV1WarehouseSyncsWarehouseSyncKeyRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehouseSyncsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehouseSyncsWarehouseSyncKeyRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeyValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehouseSyncsWarehouseSyncKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WarehouseSyncsWarehouseSyncKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
