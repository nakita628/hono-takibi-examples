import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccessControlRolesRoleUIDRoute,
  deleteAccessControlTeamsTeamIdRolesRoleUIDRoute,
  deleteAccessControlUsersUserIdRolesRoleUIDRoute,
  getAccessControlResourceDescriptionRoute,
  getAccessControlResourceResourceIDRoute,
  getAccessControlRolesRoleUIDAssignmentsRoute,
  getAccessControlRolesRoleUIDRoute,
  getAccessControlRolesRoute,
  getAccessControlStatusRoute,
  getAccessControlTeamsTeamIdRolesRoute,
  getAccessControlUsersUserIdRolesRoute,
  postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRoute,
  postAccessControlResourceResourceIDRoute,
  postAccessControlResourceResourceIDTeamsTeamIDRoute,
  postAccessControlResourceResourceIDUsersUserIDRoute,
  postAccessControlRolesRoute,
  postAccessControlTeamsRolesSearchRoute,
  postAccessControlTeamsTeamIdRolesRoute,
  postAccessControlUsersRolesSearchRoute,
  postAccessControlUsersUserIdRolesRoute,
  putAccessControlRolesRoleUIDAssignmentsRoute,
  putAccessControlRolesRoleUIDRoute,
  putAccessControlTeamsTeamIdRolesRoute,
  putAccessControlUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessControlHandler = app
  .openapi(getAccessControlRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessControlRolesRoleUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlRolesRoleUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccessControlRolesRoleUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlRolesRoleUIDAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccessControlRolesRoleUIDAssignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlTeamsRolesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlTeamsTeamIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlTeamsTeamIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccessControlTeamsTeamIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessControlTeamsTeamIdRolesRoleUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlUsersRolesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccessControlUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccessControlUsersUserIdRolesRoleUIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlResourceDescriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccessControlResourceResourceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlResourceResourceIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlResourceResourceIDBuiltInRolesBuiltInRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlResourceResourceIDTeamsTeamIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccessControlResourceResourceIDUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
