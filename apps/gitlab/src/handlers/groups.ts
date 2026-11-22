import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV4GroupsIdRoute,
  deleteApiV4GroupsIdSharedProjectsProjectIdRoute,
  deleteApiV4GroupsIdShareGroupIdRoute,
  deleteApiV4GroupsIdUploadsSecretFilenameRoute,
  deleteApiV4GroupsIdUploadsUploadIdRoute,
  getApiV4GroupsIdAuditEventsAuditEventIdRoute,
  getApiV4GroupsIdBillableMembersRoute,
  getApiV4GroupsIdDescendantGroupsRoute,
  getApiV4GroupsIdGroupsSharedRoute,
  getApiV4GroupsIdInvitedGroupsRoute,
  getApiV4GroupsIdIssuesRoute,
  getApiV4GroupsIdIssuesStatisticsRoute,
  getApiV4GroupsIdPlaceholderReassignmentsRoute,
  getApiV4GroupsIdProjectsRoute,
  getApiV4GroupsIdProjectsSharedRoute,
  getApiV4GroupsIdProvisionedUsersRoute,
  getApiV4GroupsIdRoute,
  getApiV4GroupsIdSamlUsersRoute,
  getApiV4GroupsIdSubgroupsRoute,
  getApiV4GroupsIdTransferLocationsRoute,
  getApiV4GroupsIdUploadsRoute,
  getApiV4GroupsIdUploadsSecretFilenameRoute,
  getApiV4GroupsIdUploadsUploadIdRoute,
  getApiV4GroupsRoute,
  postApiV4GroupsIdArchiveRoute,
  postApiV4GroupsIdPlaceholderReassignmentsAuthorizeRoute,
  postApiV4GroupsIdPlaceholderReassignmentsRoute,
  postApiV4GroupsIdProjectsProjectIdRoute,
  postApiV4GroupsIdRestoreRoute,
  postApiV4GroupsIdShareRoute,
  postApiV4GroupsIdTransferRoute,
  postApiV4GroupsIdTransferToOrganizationRoute,
  postApiV4GroupsIdUnarchiveRoute,
  postApiV4GroupsIdUploadsAuthorizeRoute,
  postApiV4GroupsIdUploadsRoute,
  postApiV4GroupsRoute,
  putApiV4GroupsIdRoute,
  putApiV4GroupsIdSecuritySettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const groupsHandler = app
  .openapi(putApiV4GroupsIdSecuritySettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdBillableMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdUploadsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdUploadsUploadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdUploadsSecretFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdUploadsSecretFilenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdIssuesStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdPlaceholderReassignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdPlaceholderReassignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdPlaceholderReassignmentsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV4GroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdUnarchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdGroupsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdInvitedGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdProjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdProjectsSharedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdSubgroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdDescendantGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdTransferLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdTransferToOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4GroupsIdShareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdShareGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV4GroupsIdSharedProjectsProjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdAuditEventsAuditEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdSamlUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4GroupsIdProvisionedUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
