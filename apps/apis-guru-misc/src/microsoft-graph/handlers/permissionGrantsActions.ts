import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPermissionGrantsMicrosoftGraphGetAvailableExtensionPropertiesRoute,
  postPermissionGrantsMicrosoftGraphGetByIdsRoute,
  postPermissionGrantsMicrosoftGraphValidatePropertiesRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberGroupsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberObjectsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberGroupsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberObjectsRoute,
  postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphRestoreRoute,
} from '../routes'

const app = new OpenAPIHono()

export const permissionGrantsActionsHandler = app
  .openapi(postPermissionGrantsMicrosoftGraphGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsMicrosoftGraphGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPermissionGrantsMicrosoftGraphValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphCheckMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphGetMemberObjectsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postPermissionGrantsResourceSpecificPermissionGrantIdMicrosoftGraphRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
