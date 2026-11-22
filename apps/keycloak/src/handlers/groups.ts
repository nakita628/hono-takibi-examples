import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminRealmsRealmGroupsGroupIdRoute,
  getAdminRealmsRealmGroupsCountRoute,
  getAdminRealmsRealmGroupsGroupIdChildrenRoute,
  getAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute,
  getAdminRealmsRealmGroupsGroupIdMembersRoute,
  getAdminRealmsRealmGroupsGroupIdRoute,
  getAdminRealmsRealmGroupsRoute,
  postAdminRealmsRealmGroupsGroupIdChildrenRoute,
  postAdminRealmsRealmGroupsRoute,
  putAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute,
  putAdminRealmsRealmGroupsGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getAdminRealmsRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRealmsRealmGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRealmsRealmGroupsGroupIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminRealmsRealmGroupsGroupIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRealmsRealmGroupsGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
