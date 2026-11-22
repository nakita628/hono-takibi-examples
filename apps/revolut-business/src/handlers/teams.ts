import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteDepartmentsDepartmentIdRoute,
  deleteTeamMembersTeamMemberIdDepartmentRoute,
  deleteTeamMembersTeamMemberIdManagerRoute,
  deleteTeamMembersTeamMemberIdRoute,
  getDepartmentsDepartmentIdRoute,
  getDepartmentsRoute,
  getRolesRoute,
  getTeamMembersRoute,
  getTeamMembersTeamMemberIdRoute,
  patchDepartmentsDepartmentIdRoute,
  postDepartmentsRoute,
  postTeamMembersRoute,
  postTeamMembersTeamMemberIdSuspendRoute,
  postTeamMembersTeamMemberIdUnsuspendRoute,
  putTeamMembersTeamMemberIdDepartmentRoute,
  putTeamMembersTeamMemberIdManagerRoute,
  putTeamMembersTeamMemberIdRoleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
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
  .openapi(getRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteDepartmentsDepartmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
