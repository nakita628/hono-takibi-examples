import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1beta1GroupsLookupRoute,
  getV1beta1GroupsRoute,
  getV1beta1GroupsSearchRoute,
  getV1beta1ParentMembershipsCheckTransitiveMembershipRoute,
  getV1beta1ParentMembershipsGetMembershipGraphRoute,
  getV1beta1ParentMembershipsLookupRoute,
  getV1beta1ParentMembershipsSearchDirectGroupsRoute,
  getV1beta1ParentMembershipsSearchTransitiveGroupsRoute,
  getV1beta1ParentMembershipsSearchTransitiveMembershipsRoute,
  postV1beta1GroupsRoute,
  postV1beta1NameModifyMembershipRolesRoute,
  postV1beta1ParentMembershipsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(getV1beta1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1GroupsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1GroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameModifyMembershipRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsCheckTransitiveMembershipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsGetMembershipGraphRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsLookupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsSearchDirectGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsSearchTransitiveGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentMembershipsSearchTransitiveMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
