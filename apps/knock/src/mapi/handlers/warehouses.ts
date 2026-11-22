import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1WarehousesRoute, getV1WarehousesWarehouseKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const warehousesHandler = app
  .openapi(getV1WarehousesWarehouseKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WarehousesRoute, (c) => {
    throw new Error('Not implemented')
  })
