import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRoute,
  deleteV2InventorySourceGroupsInventorySourceGroupIdRoute,
  getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute,
  getV2InventorySourceGroupsInventorySourceGroupIdRoute,
  getV2InventorySourceGroupsRoute,
  postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRoute,
  postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute,
  postV2InventorySourceGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventorySourceGroupsHandler = app
  .openapi(getV2InventorySourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventorySourceGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2InventorySourceGroupsInventorySourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourceGroupsInventorySourceGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesAssignedInventorySourceIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2InventorySourceGroupsInventorySourceGroupIdAssignedInventorySourcesBulkEditRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
