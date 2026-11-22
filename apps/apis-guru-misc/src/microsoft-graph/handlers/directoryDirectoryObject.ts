import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDirectoryDeletedItemsDirectoryObjectIdRoute,
  getDirectoryDeletedItemsDirectoryObjectIdRoute,
  getDirectoryDeletedItemsRoute,
  patchDirectoryDeletedItemsDirectoryObjectIdRoute,
  postDirectoryDeletedItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryDirectoryObjectHandler = app
  .openapi(getDirectoryDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDirectoryDeletedItemsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryDeletedItemsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDirectoryDeletedItemsDirectoryObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
