import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute,
  deleteWorkspaceSlugMembersMemberSlugRoute,
  getWorkspaceSlugMembersFindRoute,
  getWorkspaceSlugMembersMemberSlugRoute,
  getWorkspaceSlugMembersRoute,
  getWorkspaceSlugOrganizationsOrganizationIdMembersRoute,
  postWorkspaceSlugMembersMemberSlugIdentitiesRoute,
  postWorkspaceSlugMembersRoute,
  putWorkspaceSlugMembersMemberSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const membersHandler = app
  .openapi(getWorkspaceSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersFindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugMembersMemberSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugMembersMemberSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugMembersMemberSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugMembersMemberSlugIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugMembersMemberSlugIdentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugOrganizationsOrganizationIdMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
