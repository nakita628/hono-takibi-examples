import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGroupMembershipsGroupMembershipIdRoute,
  getGroupMembershipsGroupMembershipIdRoute,
  getGroupsGroupIdMembershipsRoute,
  getUsersUserIdMembershipsRoute,
  postGroupMembershipsRoute,
  putGroupMembershipsGroupMembershipIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupMembershipsHandler = app
  .openapi(postGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
