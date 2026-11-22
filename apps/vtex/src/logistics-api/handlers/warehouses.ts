import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute,
  getApiLogisticsPvtConfigurationWarehousesRoute,
  getApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute,
  postApiLogisticsPvtConfigurationWarehousesRoute,
  postApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationRoute,
  postApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const warehousesHandler = app
  .openapi(getApiLogisticsPvtConfigurationWarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationWarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiLogisticsPvtConfigurationWarehousesWarehouseIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationWarehousesWarehouseIdActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiLogisticsPvtConfigurationWarehousesWarehouseIdDeactivationRoute, (c) => {
    throw new Error('Not implemented')
  })
