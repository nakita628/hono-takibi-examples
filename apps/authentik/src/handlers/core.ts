import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCoreApplicationEntitlementsPbmUuidIndexRoute,
  deleteCoreApplicationsSlugIndexRoute,
  deleteCoreAuthenticatedSessionsBulkDeleteIndexRoute,
  deleteCoreAuthenticatedSessionsUuidIndexRoute,
  deleteCoreBrandsBrandUuidIndexRoute,
  deleteCoreGroupsGroupUuidIndexRoute,
  deleteCoreObjectAttributesAttributeIdIndexRoute,
  deleteCoreTokensIdentifierIndexRoute,
  deleteCoreUserConsentIdIndexRoute,
  deleteCoreUsersIdIndexRoute,
  getCoreApplicationEntitlementsIndexRoute,
  getCoreApplicationEntitlementsPbmUuidIndexRoute,
  getCoreApplicationEntitlementsPbmUuidUsedByIndexRoute,
  getCoreApplicationEntitlementsRequestableIndexRoute,
  getCoreApplicationsAccessibleIndexRoute,
  getCoreApplicationsIndexRoute,
  getCoreApplicationsRequestableIndexRoute,
  getCoreApplicationsSlugCheckAccessIndexRoute,
  getCoreApplicationsSlugIndexRoute,
  getCoreApplicationsSlugUsedByIndexRoute,
  getCoreAuthenticatedSessionsIndexRoute,
  getCoreAuthenticatedSessionsUuidIndexRoute,
  getCoreAuthenticatedSessionsUuidUsedByIndexRoute,
  getCoreBrandsBrandUuidIndexRoute,
  getCoreBrandsBrandUuidUsedByIndexRoute,
  getCoreBrandsCurrentIndexRoute,
  getCoreBrandsIndexRoute,
  getCoreGroupsGroupUuidIndexRoute,
  getCoreGroupsGroupUuidUsedByIndexRoute,
  getCoreGroupsIndexRoute,
  getCoreObjectAttributesAttributeIdIndexRoute,
  getCoreObjectAttributesIndexRoute,
  getCoreTokensIdentifierIndexRoute,
  getCoreTokensIdentifierUsedByIndexRoute,
  getCoreTokensIdentifierViewKeyIndexRoute,
  getCoreTokensIndexRoute,
  getCoreUserConsentIdIndexRoute,
  getCoreUserConsentIdUsedByIndexRoute,
  getCoreUserConsentIndexRoute,
  getCoreUsersIdIndexRoute,
  getCoreUsersIdUsedByIndexRoute,
  getCoreUsersImpersonateEndIndexRoute,
  getCoreUsersIndexRoute,
  getCoreUsersMeIndexRoute,
  getCoreUsersPathsIndexRoute,
  patchCoreApplicationEntitlementsPbmUuidIndexRoute,
  patchCoreApplicationsSlugIndexRoute,
  patchCoreBrandsBrandUuidIndexRoute,
  patchCoreGroupsGroupUuidIndexRoute,
  patchCoreObjectAttributesAttributeIdIndexRoute,
  patchCoreTokensIdentifierIndexRoute,
  patchCoreUsersIdIndexRoute,
  postCoreApplicationEntitlementsIndexRoute,
  postCoreApplicationsIndexRoute,
  postCoreBrandsIndexRoute,
  postCoreGroupsGroupUuidAddUserIndexRoute,
  postCoreGroupsGroupUuidRemoveUserIndexRoute,
  postCoreGroupsIndexRoute,
  postCoreObjectAttributesIndexRoute,
  postCoreTokensIdentifierSetKeyIndexRoute,
  postCoreTokensIndexRoute,
  postCoreUsersAccountLockdownIndexRoute,
  postCoreUsersExportIndexRoute,
  postCoreUsersIdImpersonateIndexRoute,
  postCoreUsersIdRecoveryEmailIndexRoute,
  postCoreUsersIdRecoveryIndexRoute,
  postCoreUsersIdSetPasswordHashIndexRoute,
  postCoreUsersIdSetPasswordIndexRoute,
  postCoreUsersIndexRoute,
  postCoreUsersServiceAccountIndexRoute,
  postCoreUsersSwitchIndexRoute,
  putCoreApplicationEntitlementsPbmUuidIndexRoute,
  putCoreApplicationsSlugIndexRoute,
  putCoreBrandsBrandUuidIndexRoute,
  putCoreGroupsGroupUuidIndexRoute,
  putCoreObjectAttributesAttributeIdIndexRoute,
  putCoreTokensIdentifierIndexRoute,
  putCoreTransactionalApplicationsIndexRoute,
  putCoreUsersIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const coreHandler = app
  .openapi(getCoreApplicationEntitlementsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreApplicationEntitlementsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationEntitlementsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreApplicationEntitlementsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreApplicationEntitlementsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreApplicationEntitlementsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationEntitlementsPbmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationEntitlementsRequestableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreApplicationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationsSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreApplicationsSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreApplicationsSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreApplicationsSlugIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationsSlugCheckAccessIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationsSlugUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationsAccessibleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreApplicationsRequestableIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreAuthenticatedSessionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreAuthenticatedSessionsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreAuthenticatedSessionsUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreAuthenticatedSessionsUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreAuthenticatedSessionsBulkDeleteIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreBrandsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreBrandsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreBrandsBrandUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreBrandsBrandUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreBrandsBrandUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreBrandsBrandUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreBrandsBrandUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreBrandsCurrentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreGroupsGroupUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreGroupsGroupUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreGroupsGroupUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreGroupsGroupUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreGroupsGroupUuidAddUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreGroupsGroupUuidRemoveUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreGroupsGroupUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreObjectAttributesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreObjectAttributesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreObjectAttributesAttributeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreObjectAttributesAttributeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreObjectAttributesAttributeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreObjectAttributesAttributeIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreTokensIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreTokensIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreTokensIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreTokensIdentifierIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreTokensIdentifierSetKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreTokensIdentifierUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreTokensIdentifierViewKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreTransactionalApplicationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUserConsentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUserConsentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreUserConsentIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUserConsentIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCoreUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCoreUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCoreUsersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersIdImpersonateIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersIdRecoveryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersIdRecoveryEmailIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersIdSetPasswordIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersIdSetPasswordHashIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUsersIdUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersAccountLockdownIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersExportIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUsersImpersonateEndIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUsersMeIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCoreUsersPathsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersServiceAccountIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCoreUsersSwitchIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
