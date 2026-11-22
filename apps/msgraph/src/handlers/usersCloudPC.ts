import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUsersUserIdCloudPCsCloudPCIdRoute,
  getUsersUserIdCloudPCsCloudPCIdRetrieveCloudPcLaunchDetailRoute,
  getUsersUserIdCloudPCsCloudPCIdRoute,
  getUsersUserIdCloudPCsCountRoute,
  getUsersUserIdCloudPCsRoute,
  patchUsersUserIdCloudPCsCloudPCIdRoute,
  postUsersUserIdCloudPCsCloudPCIdEndGracePeriodRoute,
  postUsersUserIdCloudPCsCloudPCIdRebootRoute,
  postUsersUserIdCloudPCsCloudPCIdRenameRoute,
  postUsersUserIdCloudPCsCloudPCIdReprovisionRoute,
  postUsersUserIdCloudPCsCloudPCIdResizeRoute,
  postUsersUserIdCloudPCsCloudPCIdRestoreRoute,
  postUsersUserIdCloudPCsCloudPCIdTroubleshootRoute,
  postUsersUserIdCloudPCsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersCloudPCHandler = app
  .openapi(getUsersUserIdCloudPCsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersUserIdCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCloudPCsCloudPCIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdEndGracePeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdRebootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdReprovisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdResizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCloudPCsCloudPCIdRetrieveCloudPcLaunchDetailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCloudPCsCloudPCIdTroubleshootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCloudPCsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
