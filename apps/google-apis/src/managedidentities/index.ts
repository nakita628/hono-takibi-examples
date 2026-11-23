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
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1NameLdapssettingsRouteHandler,
  getV1alpha1NameLocationsRouteHandler,
  getV1alpha1NameOperationsRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1ParentBackupsRouteHandler,
  getV1alpha1ParentDomainsRouteHandler,
  getV1alpha1ParentPeeringsRouteHandler,
  getV1alpha1ParentSqlIntegrationsRouteHandler,
  getV1alpha1ResourceGetIamPolicyRouteHandler,
  patchV1alpha1NameLdapssettingsRouteHandler,
  patchV1alpha1NameRouteHandler,
  postV1alpha1DomainCheckMigrationPermissionRouteHandler,
  postV1alpha1DomainDisableMigrationRouteHandler,
  postV1alpha1DomainDomainJoinMachineRouteHandler,
  postV1alpha1DomainEnableMigrationRouteHandler,
  postV1alpha1DomainExtendSchemaRouteHandler,
  postV1alpha1NameAttachTrustRouteHandler,
  postV1alpha1NameCancelRouteHandler,
  postV1alpha1NameDetachTrustRouteHandler,
  postV1alpha1NameReconfigureTrustRouteHandler,
  postV1alpha1NameResetAdminPasswordRouteHandler,
  postV1alpha1NameRestoreRouteHandler,
  postV1alpha1NameValidateTrustRouteHandler,
  postV1alpha1ParentBackupsRouteHandler,
  postV1alpha1ParentDomainsRouteHandler,
  postV1alpha1ParentPeeringsRouteHandler,
  postV1alpha1ResourceSetIamPolicyRouteHandler,
  postV1alpha1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1alpha1DomainCheckMigrationPermissionRoute,
    postV1alpha1DomainCheckMigrationPermissionRouteHandler,
  )
  .openapi(postV1alpha1DomainDisableMigrationRoute, postV1alpha1DomainDisableMigrationRouteHandler)
  .openapi(
    postV1alpha1DomainDomainJoinMachineRoute,
    postV1alpha1DomainDomainJoinMachineRouteHandler,
  )
  .openapi(postV1alpha1DomainEnableMigrationRoute, postV1alpha1DomainEnableMigrationRouteHandler)
  .openapi(postV1alpha1DomainExtendSchemaRoute, postV1alpha1DomainExtendSchemaRouteHandler)
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(patchV1alpha1NameRoute, patchV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameLdapssettingsRoute, getV1alpha1NameLdapssettingsRouteHandler)
  .openapi(patchV1alpha1NameLdapssettingsRoute, patchV1alpha1NameLdapssettingsRouteHandler)
  .openapi(getV1alpha1NameLocationsRoute, getV1alpha1NameLocationsRouteHandler)
  .openapi(getV1alpha1NameOperationsRoute, getV1alpha1NameOperationsRouteHandler)
  .openapi(postV1alpha1NameAttachTrustRoute, postV1alpha1NameAttachTrustRouteHandler)
  .openapi(postV1alpha1NameCancelRoute, postV1alpha1NameCancelRouteHandler)
  .openapi(postV1alpha1NameDetachTrustRoute, postV1alpha1NameDetachTrustRouteHandler)
  .openapi(postV1alpha1NameReconfigureTrustRoute, postV1alpha1NameReconfigureTrustRouteHandler)
  .openapi(postV1alpha1NameResetAdminPasswordRoute, postV1alpha1NameResetAdminPasswordRouteHandler)
  .openapi(postV1alpha1NameRestoreRoute, postV1alpha1NameRestoreRouteHandler)
  .openapi(postV1alpha1NameValidateTrustRoute, postV1alpha1NameValidateTrustRouteHandler)
  .openapi(getV1alpha1ParentBackupsRoute, getV1alpha1ParentBackupsRouteHandler)
  .openapi(postV1alpha1ParentBackupsRoute, postV1alpha1ParentBackupsRouteHandler)
  .openapi(getV1alpha1ParentDomainsRoute, getV1alpha1ParentDomainsRouteHandler)
  .openapi(postV1alpha1ParentDomainsRoute, postV1alpha1ParentDomainsRouteHandler)
  .openapi(getV1alpha1ParentPeeringsRoute, getV1alpha1ParentPeeringsRouteHandler)
  .openapi(postV1alpha1ParentPeeringsRoute, postV1alpha1ParentPeeringsRouteHandler)
  .openapi(getV1alpha1ParentSqlIntegrationsRoute, getV1alpha1ParentSqlIntegrationsRouteHandler)
  .openapi(getV1alpha1ResourceGetIamPolicyRoute, getV1alpha1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1alpha1ResourceSetIamPolicyRoute, postV1alpha1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1alpha1ResourceTestIamPermissionsRoute,
    postV1alpha1ResourceTestIamPermissionsRouteHandler,
  )

export default app
