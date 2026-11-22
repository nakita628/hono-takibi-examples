import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2GroupMembershipsDestroyManyRoute,
  deleteApiV2GroupMembershipsGroupMembershipIdRoute,
  deleteApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute,
  getApiV2GroupMembershipsAssignableRoute,
  getApiV2GroupMembershipsGroupMembershipIdRoute,
  getApiV2GroupMembershipsRoute,
  getApiV2GroupsGroupIdMembershipsAssignableRoute,
  getApiV2GroupsGroupIdMembershipsRoute,
  getApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute,
  getApiV2UsersUserIdGroupMembershipsRoute,
  postApiV2GroupMembershipsCreateManyRoute,
  postApiV2GroupMembershipsRoute,
  postApiV2UsersUserIdGroupMembershipsRoute,
  putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefaultRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupMembershipsHandler = app
  .openapi(getApiV2GroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupMembershipsAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GroupMembershipsCreateManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2GroupMembershipsDestroyManyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GroupsGroupIdMembershipsAssignableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsersUserIdGroupMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsersUserIdGroupMembershipsGroupMembershipIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2UsersUserIdGroupMembershipsGroupMembershipIdMakeDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
