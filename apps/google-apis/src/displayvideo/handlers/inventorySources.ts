import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2InventorySourcesInventorySourceIdRoute,
  getV2InventorySourcesRoute,
  patchV2InventorySourcesInventorySourceIdRoute,
  postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRoute,
  postV2InventorySourcesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventorySourcesHandler = app
  .openapi(getV2InventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourcesInventorySourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2InventorySourcesInventorySourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2InventorySourcesInventorySourceIdEditInventorySourceReadWriteAccessorsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
