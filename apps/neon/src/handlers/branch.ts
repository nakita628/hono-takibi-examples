import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
  deleteProjectsProjectIdBranchesBranchIdRoute,
  getProjectsProjectIdBranchesBranchIdCompareSchemaRoute,
  getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  getProjectsProjectIdBranchesBranchIdDatabasesRoute,
  getProjectsProjectIdBranchesBranchIdEndpointsRoute,
  getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRoute,
  getProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
  getProjectsProjectIdBranchesBranchIdRolesRoute,
  getProjectsProjectIdBranchesBranchIdRoute,
  getProjectsProjectIdBranchesBranchIdSchemaRoute,
  getProjectsProjectIdBranchesCountRoute,
  getProjectsProjectIdBranchesRoute,
  patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  patchProjectsProjectIdBranchesBranchIdRoute,
  postProjectsProjectIdBranchesBranchIdDatabasesRoute,
  postProjectsProjectIdBranchesBranchIdRestoreRoute,
  postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRoute,
  postProjectsProjectIdBranchesBranchIdRolesRoute,
  postProjectsProjectIdBranchesBranchIdSetAsDefaultRoute,
  postProjectsProjectIdBranchesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const branchHandler = app
  .openapi(postProjectsProjectIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdBranchesBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdBranchesBranchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdBranchesBranchIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdCompareSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdBranchesBranchIdSetAsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdBranchesBranchIdDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdBranchesBranchIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdBranchesBranchIdRolesRoleNameRevealPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
