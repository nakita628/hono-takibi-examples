import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminInventoryItemsIdLocationLevelsLocationIdRoute,
  deleteAdminInventoryItemsIdRoute,
  getAdminInventoryItemsIdLocationLevelsRoute,
  getAdminInventoryItemsIdRoute,
  getAdminInventoryItemsRoute,
  postAdminInventoryItemsExportRoute,
  postAdminInventoryItemsIdLocationLevelsBatchRoute,
  postAdminInventoryItemsIdLocationLevelsLocationIdRoute,
  postAdminInventoryItemsIdLocationLevelsRoute,
  postAdminInventoryItemsIdRoute,
  postAdminInventoryItemsLocationLevelsBatchRoute,
  postAdminInventoryItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoryItemsHandler = app
  .openapi(getAdminInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsLocationLevelsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInventoryItemsIdLocationLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdLocationLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdLocationLevelsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdLocationLevelsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminInventoryItemsIdLocationLevelsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
