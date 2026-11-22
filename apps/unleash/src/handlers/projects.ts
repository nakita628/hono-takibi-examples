import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiAdminProjectsProjectIdApiTokensTokenRoute,
  deleteApiAdminProjectsProjectIdEnvironmentsEnvironmentRoute,
  deleteApiAdminProjectsProjectIdGroupsGroupIdRolesRoute,
  deleteApiAdminProjectsProjectIdRoute,
  deleteApiAdminProjectsProjectIdUsersUserIdRolesRoute,
  getApiAdminPersonalDashboardProjectIdRoute,
  getApiAdminPersonalDashboardRoute,
  getApiAdminProjectsProjectIdAccessRoute,
  getApiAdminProjectsProjectIdApiTokensRoute,
  getApiAdminProjectsProjectIdApplicationsRoute,
  getApiAdminProjectsProjectIdDoraRoute,
  getApiAdminProjectsProjectIdFlagCreatorsRoute,
  getApiAdminProjectsProjectIdHealthReportRoute,
  getApiAdminProjectsProjectIdInsightsRoute,
  getApiAdminProjectsProjectIdOverviewRoute,
  getApiAdminProjectsProjectIdSdksOutdatedRoute,
  getApiAdminProjectsProjectIdStatusRoute,
  getApiAdminProjectsRolesRoleIdAccessRoute,
  getApiAdminProjectsRoute,
  postApiAdminProjectsArchiveProjectIdRoute,
  postApiAdminProjectsProjectIdAccessRoute,
  postApiAdminProjectsProjectIdApiTokensRoute,
  postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyRoute,
  postApiAdminProjectsProjectIdEnvironmentsRoute,
  postApiAdminProjectsReviveProjectIdRoute,
  postApiAdminProjectsRoute,
  postApiAdminProjectsValidateRoute,
  putApiAdminProjectsProjectIdAccessRoute,
  putApiAdminProjectsProjectIdGroupsGroupIdRolesRoute,
  putApiAdminProjectsProjectIdRoute,
  putApiAdminProjectsProjectIdSettingsRoute,
  putApiAdminProjectsProjectIdUsersUserIdRolesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getApiAdminProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsArchiveProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsReviveProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsRolesRoleIdAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdUsersUserIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiAdminProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdGroupsGroupIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdOverviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdDoraRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdApplicationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdFlagCreatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdSdksOutdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdEnvironmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdEnvironmentsEnvironmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdEnvironmentsEnvironmentDefaultStrategyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdHealthReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiAdminProjectsProjectIdApiTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiAdminProjectsProjectIdApiTokensTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminProjectsProjectIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminPersonalDashboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiAdminPersonalDashboardProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
