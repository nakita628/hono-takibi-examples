import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRealmGroupsIdRoute,
  getRealmGroupsCountRoute,
  getRealmGroupsIdManagementPermissionsRoute,
  getRealmGroupsIdMembersRoute,
  getRealmGroupsIdRoute,
  getRealmGroupsRoute,
  postRealmGroupsIdChildrenRoute,
  postRealmGroupsRoute,
  putRealmGroupsIdManagementPermissionsRoute,
  putRealmGroupsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRealmGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealmGroupsIdChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRealmGroupsIdManagementPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRealmGroupsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
