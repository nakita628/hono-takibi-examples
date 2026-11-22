import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRoute,
  getUserprofilesProfileIdProjectsProjectIdInventoryItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inventoryItemsHandler = app
  .openapi(getUserprofilesProfileIdProjectsProjectIdInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdProjectsProjectIdInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
