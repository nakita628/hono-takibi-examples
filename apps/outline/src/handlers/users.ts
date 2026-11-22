import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsersActivateRoute,
  postUsersDeleteRoute,
  postUsersInfoRoute,
  postUsersInviteRoute,
  postUsersListRoute,
  postUsersNotificationsSubscribeRoute,
  postUsersNotificationsUnsubscribeRoute,
  postUsersResendInviteRoute,
  postUsersSuspendRoute,
  postUsersUpdateRoleRoute,
  postUsersUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersHandler = app
  .openapi(postUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUpdateRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersResendInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersNotificationsSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersNotificationsUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
