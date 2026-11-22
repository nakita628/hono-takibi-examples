import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1NameLdapssettingsRoute,
  getV1alpha1NameLocationsRoute,
  getV1alpha1NameOperationsRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentBackupsRoute,
  getV1alpha1ParentDomainsRoute,
  getV1alpha1ParentPeeringsRoute,
  getV1alpha1ParentSqlIntegrationsRoute,
  getV1alpha1ResourceGetIamPolicyRoute,
  patchV1alpha1NameLdapssettingsRoute,
  patchV1alpha1NameRoute,
  postV1alpha1DomainCheckMigrationPermissionRoute,
  postV1alpha1DomainDisableMigrationRoute,
  postV1alpha1DomainDomainJoinMachineRoute,
  postV1alpha1DomainEnableMigrationRoute,
  postV1alpha1DomainExtendSchemaRoute,
  postV1alpha1NameAttachTrustRoute,
  postV1alpha1NameCancelRoute,
  postV1alpha1NameDetachTrustRoute,
  postV1alpha1NameReconfigureTrustRoute,
  postV1alpha1NameResetAdminPasswordRoute,
  postV1alpha1NameRestoreRoute,
  postV1alpha1NameValidateTrustRoute,
  postV1alpha1ParentBackupsRoute,
  postV1alpha1ParentDomainsRoute,
  postV1alpha1ParentPeeringsRoute,
  postV1alpha1ResourceSetIamPolicyRoute,
  postV1alpha1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1alpha1DomainCheckMigrationPermissionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1DomainDisableMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1DomainDomainJoinMachineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1DomainEnableMigrationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1DomainExtendSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameLdapssettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1alpha1NameLdapssettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameAttachTrustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameDetachTrustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameReconfigureTrustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameResetAdminPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1NameValidateTrustRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentBackupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentPeeringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ParentPeeringsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ParentSqlIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1alpha1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1alpha1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
