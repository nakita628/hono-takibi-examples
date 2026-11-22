import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGidRoute,
  getProjectsProjectGidRoute,
  getProjectsProjectGidTaskCountsRoute,
  getProjectsRoute,
  getTasksTaskGidProjectsRoute,
  getTeamsTeamGidProjectsRoute,
  getWorkspacesWorkspaceGidProjectsRoute,
  postProjectsProjectGidAddCustomFieldSettingRoute,
  postProjectsProjectGidAddFollowersRoute,
  postProjectsProjectGidAddMembersRoute,
  postProjectsProjectGidDuplicateRoute,
  postProjectsProjectGidRemoveCustomFieldSettingRoute,
  postProjectsProjectGidRemoveFollowersRoute,
  postProjectsProjectGidRemoveMembersRoute,
  postProjectsProjectGidSaveAsTemplateRoute,
  postProjectsRoute,
  postTeamsTeamGidProjectsRoute,
  postWorkspacesWorkspaceGidProjectsRoute,
  putProjectsProjectGidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectGidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidAddCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidAddFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidAddMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidRemoveCustomFieldSettingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidRemoveFollowersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidRemoveMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidSaveAsTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidTaskCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTasksTaskGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsTeamGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTeamsTeamGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspacesWorkspaceGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspacesWorkspaceGidProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
