import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectGidRoute,
  getProjectsProjectGidCustomFieldSettingsRoute,
  getProjectsProjectGidProjectMembershipsRoute,
  getProjectsProjectGidProjectStatusesRoute,
  getProjectsProjectGidRoute,
  getProjectsProjectGidSectionsRoute,
  getProjectsProjectGidTaskCountsRoute,
  getProjectsProjectGidTasksRoute,
  getProjectsRoute,
  postProjectsProjectGidAddCustomFieldSettingRoute,
  postProjectsProjectGidAddFollowersRoute,
  postProjectsProjectGidAddMembersRoute,
  postProjectsProjectGidDuplicateRoute,
  postProjectsProjectGidProjectBriefsRoute,
  postProjectsProjectGidProjectStatusesRoute,
  postProjectsProjectGidRemoveCustomFieldSettingRoute,
  postProjectsProjectGidRemoveFollowersRoute,
  postProjectsProjectGidRemoveMembersRoute,
  postProjectsProjectGidSaveAsTemplateRoute,
  postProjectsProjectGidSectionsInsertRoute,
  postProjectsProjectGidSectionsRoute,
  postProjectsRoute,
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
  .openapi(getProjectsProjectGidCustomFieldSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidDuplicateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidProjectBriefsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidProjectMembershipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidProjectStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidProjectStatusesRoute, (c) => {
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
  .openapi(getProjectsProjectGidSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidSectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectGidSectionsInsertRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidTaskCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectGidTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
