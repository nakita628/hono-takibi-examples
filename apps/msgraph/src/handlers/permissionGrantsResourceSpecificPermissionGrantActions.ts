import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPermissionGrantsGetAvailableExtensionPropertiesRoute,
  postPermissionGrantsGetByIdsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdCheckMemberGroupsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdCheckMemberObjectsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdGetMemberGroupsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdGetMemberObjectsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdRestoreRoute,
  postPermissionGrantsValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionGrantsResourceSpecificPermissionGrantActionsHandler = app
  .openapi(postPermissionGrantsResourceSpecificPermissionGrantIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsResourceSpecificPermissionGrantIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsResourceSpecificPermissionGrantIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsResourceSpecificPermissionGrantIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsResourceSpecificPermissionGrantIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
