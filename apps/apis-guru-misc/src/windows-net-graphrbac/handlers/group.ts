import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRoute,
  deleteTenantIDGroupsObjectIdRoute,
  getTenantIDGroupsObjectIdMembersRoute,
  getTenantIDGroupsObjectIdRoute,
  getTenantIDGroupsRoute,
  postTenantIDGroupsGroupObjectIdLinksMembersRoute,
  postTenantIDGroupsObjectIdGetMemberGroupsRoute,
  postTenantIDGroupsRoute,
  postTenantIDIsMemberOfRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupHandler = app
  .openapi(getTenantIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsGroupObjectIdLinksMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDGroupsGroupObjectIdLinksMembersMemberObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTenantIDGroupsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDGroupsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDGroupsObjectIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTenantIDGroupsObjectIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTenantIDIsMemberOfRoute, (c) => {
    throw new Error('Not implemented')
  })
