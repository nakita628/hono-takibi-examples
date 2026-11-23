import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  deleteProjectsProjectIdBranchesBranchIdRolesRoleNameRoute,
  deleteProjectsProjectIdBranchesBranchIdRoute,
  deleteProjectsProjectIdEndpointsEndpointIdRoute,
  deleteProjectsProjectIdJwksJwksIdRoute,
  deleteProjectsProjectIdPermissionsPermissionIdRoute,
  deleteProjectsProjectIdRoute,
  deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
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
  getProjectsProjectIdConnectionUriRoute,
  getProjectsProjectIdEndpointsEndpointIdRoute,
  getProjectsProjectIdEndpointsRoute,
  getProjectsProjectIdJwksRoute,
  getProjectsProjectIdOperationsOperationIdRoute,
  getProjectsProjectIdOperationsRoute,
  getProjectsProjectIdPermissionsRoute,
  getProjectsProjectIdRoute,
  getProjectsProjectIdVpcEndpointsRoute,
  getProjectsRoute,
  getProjectsSharedRoute,
  patchProjectsProjectIdBranchesBranchIdDatabasesDatabaseNameRoute,
  patchProjectsProjectIdBranchesBranchIdRoute,
  patchProjectsProjectIdEndpointsEndpointIdRoute,
  patchProjectsProjectIdRoute,
  postProjectsProjectIdBranchesBranchIdDatabasesRoute,
  postProjectsProjectIdBranchesBranchIdRestoreRoute,
  postProjectsProjectIdBranchesBranchIdRolesRoleNameResetPasswordRoute,
  postProjectsProjectIdBranchesBranchIdRolesRoute,
  postProjectsProjectIdBranchesBranchIdSetAsDefaultRoute,
  postProjectsProjectIdBranchesRoute,
  postProjectsProjectIdEndpointsEndpointIdRestartRoute,
  postProjectsProjectIdEndpointsEndpointIdStartRoute,
  postProjectsProjectIdEndpointsEndpointIdSuspendRoute,
  postProjectsProjectIdEndpointsRoute,
  postProjectsProjectIdJwksRoute,
  postProjectsProjectIdPermissionsRoute,
  postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute,
  postProjectsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(getProjectsProjectIdOperationsOperationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdPermissionsPermissionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdJwksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdJwksJwksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdConnectionUriRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getProjectsProjectIdVpcEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdVpcEndpointsVpcEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdEndpointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectIdEndpointsEndpointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsEndpointIdStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsEndpointIdSuspendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectIdEndpointsEndpointIdRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
