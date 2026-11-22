import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdBillableMembersUserIdRoute,
  deleteApiV4GroupsIdMembersUserIdOverrideRoute,
  deleteApiV4GroupsIdMembersUserIdRoute,
  deleteApiV4ProjectsIdMembersUserIdRoute,
  getApiV4GroupsIdBillableMembersUserIdIndirectRoute,
  getApiV4GroupsIdBillableMembersUserIdMembershipsRoute,
  getApiV4GroupsIdMembersAllRoute,
  getApiV4GroupsIdMembersAllUserIdRoute,
  getApiV4GroupsIdMembersRoute,
  getApiV4GroupsIdMembersUserIdRoute,
  getApiV4GroupsIdPendingMembersRoute,
  getApiV4ProjectsIdMembersAllRoute,
  getApiV4ProjectsIdMembersAllUserIdRoute,
  getApiV4ProjectsIdMembersRoute,
  getApiV4ProjectsIdMembersUserIdRoute,
  postApiV4GroupsIdMembersApproveAllRoute,
  postApiV4GroupsIdMembersRoute,
  postApiV4GroupsIdMembersUserIdOverrideRoute,
  postApiV4ProjectsIdMembersRoute,
  putApiV4GroupsIdMembersMemberIdApproveRoute,
  putApiV4GroupsIdMembersUserIdRoute,
  putApiV4GroupsIdMembersUserIdStateRoute,
  putApiV4ProjectsIdMembersUserIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getApiV4GroupsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMembersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdMembersAllUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMembersAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4ProjectsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4ProjectsIdMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdMembersAllUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdMembersUserIdOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdMembersUserIdOverrideRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdMembersMemberIdApproveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdMembersApproveAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdPendingMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdMembersUserIdStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBillableMembersUserIdMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBillableMembersUserIdIndirectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdBillableMembersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
