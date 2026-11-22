import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteModerationBanRoute,
  deleteUsersUserIdRoute,
  getConnectRoute,
  getLongpollRoute,
  getQueryBannedUsersRoute,
  getUsersRoute,
  getUsersUserIdExportRoute,
  patchUsersRoute,
  postExportUsersRoute,
  postGuestRoute,
  postModerationBanRoute,
  postModerationMuteRoute,
  postModerationUnmuteRoute,
  postUsersDeactivateRoute,
  postUsersDeleteRoute,
  postUsersReactivateRoute,
  postUsersRestoreRoute,
  postUsersRoute,
  postUsersUserIdDeactivateRoute,
  postUsersUserIdReactivateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(getConnectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGuestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLongpollRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteModerationBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationBanRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationMuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationUnmuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getQueryBannedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdReactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
