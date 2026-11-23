import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdGroupsGroupIdRolesRoleIdRoute,
  deleteProjectsProjectIdRolesRoleIdRoute,
  deleteProjectsProjectIdUsersUserIdRolesRoleIdRoute,
  getProjectsProjectIdGroupsGroupIdRolesRoleIdRoute,
  getProjectsProjectIdGroupsGroupIdRolesRoute,
  getProjectsProjectIdRolesRoleIdRoute,
  getProjectsProjectIdRolesRoute,
  getProjectsProjectIdUsersUserIdRolesRoleIdRoute,
  getProjectsProjectIdUsersUserIdRolesRoute,
  postProjectsProjectIdGroupsGroupIdRolesRoute,
  postProjectsProjectIdRolesRoleIdRoute,
  postProjectsProjectIdRolesRoute,
  postProjectsProjectIdUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdGroupsGroupIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdUsersUserIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
