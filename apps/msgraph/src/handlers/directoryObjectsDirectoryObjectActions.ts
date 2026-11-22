import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDirectoryObjectsDirectoryObjectIdCheckMemberGroupsRoute,
  postDirectoryObjectsDirectoryObjectIdCheckMemberObjectsRoute,
  postDirectoryObjectsDirectoryObjectIdGetMemberGroupsRoute,
  postDirectoryObjectsDirectoryObjectIdGetMemberObjectsRoute,
  postDirectoryObjectsDirectoryObjectIdRestoreRoute,
  postDirectoryObjectsGetAvailableExtensionPropertiesRoute,
  postDirectoryObjectsGetByIdsRoute,
  postDirectoryObjectsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryObjectsDirectoryObjectActionsHandler = app
  .openapi(postDirectoryObjectsDirectoryObjectIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsDirectoryObjectIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDirectoryObjectsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
