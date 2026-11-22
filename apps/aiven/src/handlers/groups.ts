import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdUserGroupsUserGroupIdRoute,
  getOrganizationOrganizationIdUserGroupsRoute,
  getOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute,
  getOrganizationOrganizationIdUserGroupsUserGroupIdRoute,
  patchOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute,
  patchOrganizationOrganizationIdUserGroupsUserGroupIdRoute,
  postOrganizationOrganizationIdUserGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(postOrganizationOrganizationIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUserGroupsUserGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUserGroupsUserGroupIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
