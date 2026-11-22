import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryObjectsDirectoryObjectIdMicrosoftGraphCheckMemberGroupsRoute,
  postDirectoryObjectsDirectoryObjectIdMicrosoftGraphCheckMemberObjectsRoute,
  postDirectoryObjectsDirectoryObjectIdMicrosoftGraphGetMemberGroupsRoute,
  postDirectoryObjectsDirectoryObjectIdMicrosoftGraphGetMemberObjectsRoute,
  postDirectoryObjectsDirectoryObjectIdMicrosoftGraphRestoreRoute,
  postDirectoryObjectsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postDirectoryObjectsMicrosoftGraphGetByIdsRoute,
  postDirectoryObjectsMicrosoftGraphValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectsActionsHandler = app
  .openapi(postDirectoryObjectsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdMicrosoftGraphCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdMicrosoftGraphCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdMicrosoftGraphGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdMicrosoftGraphGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
