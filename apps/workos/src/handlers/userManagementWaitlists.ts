import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserManagementWaitlistEntriesIdRoute,
  getUserManagementWaitlistsIdEntriesRoute,
  getUserManagementWaitlistsIdRoute,
  getUserManagementWaitlistsRoute,
  postUserManagementWaitlistEntriesIdApproveRoute,
  postUserManagementWaitlistEntriesIdDenyRoute,
  postUserManagementWaitlistsIdEntriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userManagementWaitlistsHandler = app
  .openapi(deleteUserManagementWaitlistEntriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementWaitlistEntriesIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementWaitlistEntriesIdDenyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementWaitlistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementWaitlistsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserManagementWaitlistsIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserManagementWaitlistsIdEntriesRoute, (c) => {
    throw new Error('Not implemented')
  })
