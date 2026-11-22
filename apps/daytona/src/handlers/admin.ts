import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute,
  deleteAdminRunnersIdRoute,
  getAdminAuditRoute,
  getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute,
  getAdminRunnersIdRoute,
  getAdminRunnersRoute,
  getAdminSnapshotsCanCleanupImageRoute,
  getAdminUsersIdRoute,
  getAdminUsersRoute,
  getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRoute,
  getAdminWebhooksStatusRoute,
  patchAdminOrganizationsOrganizationIdQuotaRegionIdRoute,
  patchAdminRunnersIdSchedulingRoute,
  patchAdminSnapshotsIdGeneralRoute,
  postAdminDockerRegistryIdSetDefaultRoute,
  postAdminOrganizationsOrganizationIdQuotaRegionIdRoute,
  postAdminRunnersRoute,
  postAdminSandboxSandboxIdRecoverRoute,
  postAdminUsersIdRegenerateKeyPairRoute,
  postAdminUsersRoute,
  postAdminWebhooksOrganizationsOrganizationIdInitializeRoute,
  postAdminWebhooksOrganizationsOrganizationIdSendRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRunnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRunnersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminRunnersIdSchedulingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSandboxSandboxIdRecoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRegenerateKeyPairRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWebhooksOrganizationsOrganizationIdSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWebhooksOrganizationsOrganizationIdMessagesMessageIdAttemptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWebhooksStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWebhooksOrganizationsOrganizationIdInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDockerRegistryIdSetDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSnapshotsCanCleanupImageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminSnapshotsIdGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminAuditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminOrganizationsOrganizationIdQuotaRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrganizationsOrganizationIdQuotaRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrganizationsOrganizationIdQuotaRegionIdSandboxClassRoute, (c) => {
    throw new Error('Not implemented')
  })
