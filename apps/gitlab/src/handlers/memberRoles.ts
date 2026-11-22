import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4AdminMemberRolesMemberRoleIdRoute,
  deleteApiV4GroupsIdMemberRolesMemberRoleIdRoute,
  deleteApiV4MemberRolesMemberRoleIdRoute,
  getApiV4AdminMemberRolesRoute,
  getApiV4GroupsIdMemberRolesRoute,
  getApiV4MemberRolesRoute,
  postApiV4AdminMemberRolesRoute,
  postApiV4GroupsIdMemberRolesRoute,
  postApiV4MemberRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const memberRolesHandler = app
  .openapi(getApiV4GroupsIdMemberRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdMemberRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdMemberRolesMemberRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4MemberRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4MemberRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4MemberRolesMemberRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4AdminMemberRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4AdminMemberRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4AdminMemberRolesMemberRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
