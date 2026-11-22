import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDUsersUpnOrObjectIdRoute,
  getTenantIDUsersRoute,
  getTenantIDUsersUpnOrObjectIdRoute,
  patchTenantIDUsersUpnOrObjectIdRoute,
  postTenantIDUsersObjectIdGetMemberGroupsRoute,
  postTenantIDUsersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getTenantIDUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDUsersObjectIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDUsersUpnOrObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDUsersUpnOrObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTenantIDUsersUpnOrObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
