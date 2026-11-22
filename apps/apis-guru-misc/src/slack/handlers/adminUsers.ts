import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminUsersListRoute,
  postAdminUsersAssignRoute,
  postAdminUsersInviteRoute,
  postAdminUsersRemoveRoute,
  postAdminUsersSetAdminRoute,
  postAdminUsersSetExpirationRoute,
  postAdminUsersSetOwnerRoute,
  postAdminUsersSetRegularRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminUsersHandler = app
  .openapi(postAdminUsersAssignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersSetAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersSetExpirationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersSetOwnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersSetRegularRoute, (c) => {
    throw new Error('Not implemented')
  })
