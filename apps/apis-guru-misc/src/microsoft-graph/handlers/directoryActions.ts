import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphCheckMemberGroupsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphCheckMemberObjectsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphGetMemberGroupsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphGetMemberObjectsRoute,
  postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphRestoreRoute,
  postDirectoryDeletedItemsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postDirectoryDeletedItemsMicrosoftGraphGetByIdsRoute,
  postDirectoryDeletedItemsMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryActionsHandler = app
  .openapi(postDirectoryDeletedItemsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryDeletedItemsDirectoryObjectIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
