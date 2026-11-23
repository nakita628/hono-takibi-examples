import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupsGroupIdMembershipsUserIdRoute,
  deleteGroupsIdRoute,
  getGroupsGroupIdPermissionsRoute,
  getGroupsGroupIdUsersRoute,
  getGroupsIdRoute,
  getGroupsRoute,
  patchGroupsGroupIdMembershipsUserIdRoute,
  patchGroupsIdRoute,
  postGroupsGroupIdUsersRoute,
  postGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsGroupIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsGroupIdMembershipsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGroupsGroupIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
