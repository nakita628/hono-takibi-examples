import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTeamMembersTeamMemberIdDepartmentRoute,
  deleteTeamMembersTeamMemberIdManagerRoute,
  deleteTeamMembersTeamMemberIdRoute,
  getTeamMembersRoute,
  getTeamMembersTeamMemberIdRoute,
  postTeamMembersRoute,
  postTeamMembersTeamMemberIdSuspendRoute,
  postTeamMembersTeamMemberIdUnsuspendRoute,
  putTeamMembersTeamMemberIdDepartmentRoute,
  putTeamMembersTeamMemberIdManagerRoute,
  putTeamMembersTeamMemberIdRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamMembersHandler = app
  .openapi(getTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamMembersTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamMembersTeamMemberIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamMembersTeamMemberIdDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamMembersTeamMemberIdDepartmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamMembersTeamMemberIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTeamMembersTeamMemberIdManagerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTeamMembersTeamMemberIdRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamMembersTeamMemberIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamMembersTeamMemberIdUnsuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
