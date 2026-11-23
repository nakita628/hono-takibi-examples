import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getUserGroupsRoute,
  getUserGroupsUserGroupIdMembersRoute,
  getUserGroupsUserGroupIdMembersUserIdRoute,
  getUserGroupsUserGroupIdSubgroupsRoute,
  patchUserGroupsUserGroupIdRoute,
  postUserGroupsCreateRoute,
  postUserGroupsUserGroupIdDeactivateRoute,
  postUserGroupsUserGroupIdMembersRoute,
  postUserGroupsUserGroupIdSubgroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userGroupsHandler = app
  .openapi(postUserGroupsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsUserGroupIdSubgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsUserGroupIdSubgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserGroupsUserGroupIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserGroupsUserGroupIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
