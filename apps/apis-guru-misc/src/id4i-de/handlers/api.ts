import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
  deleteApiV1ApikeysKeyPrivilegesRoute,
  deleteApiV1ApikeysKeyRoute,
  deleteApiV1CollectionsId4nElementsRoute,
  deleteApiV1CollectionsId4nRoute,
  deleteApiV1DocumentsId4nOrganizationIdFileNameRoute,
  deleteApiV1Id4nsId4nAliasAliasTypeRoute,
  deleteApiV1Id4nsId4nPropertiesRoute,
  deleteApiV1OrganizationsOrganizationIdAddressesBillingRoute,
  deleteApiV1OrganizationsOrganizationIdLogoRoute,
  deleteApiV1OrganizationsOrganizationIdPartnerRoute,
  deleteApiV1OrganizationsOrganizationIdRoute,
  deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
  getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
  getApiV1ApikeysKeyPrivilegesRoute,
  getApiV1ApikeysKeyRoute,
  getApiV1ApikeysPrivilegesRoute,
  getApiV1ApikeysRoute,
  getApiV1BillingOrganizationIdPositionsRoute,
  getApiV1BillingOrganizationIdRoute,
  getApiV1ChangelogOrganizationOrganizationIdIndexRoute,
  getApiV1CollectionsId4nElementsRoute,
  getApiV1CollectionsId4nRoute,
  getApiV1CountriesRoute,
  getApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
  getApiV1DocumentsId4nOrganizationIdFileNameRoute,
  getApiV1DocumentsId4nOrganizationIdRoute,
  getApiV1DocumentsId4nRoute,
  getApiV1GuidsId4nRoute,
  getApiV1GuidsWithoutCollectionRoute,
  getApiV1HistoryId4nOrganizationIdRoute,
  getApiV1HistoryId4nOrganizationIdSequenceIdRoute,
  getApiV1HistoryId4nRoute,
  getApiV1Id4nsId4nAliasRoute,
  getApiV1Id4nsId4nCollectionsRoute,
  getApiV1Id4nsId4nPropertiesRoute,
  getApiV1Id4nsId4nRoute,
  getApiV1InfoRoute,
  getApiV1MicrostorageId4nOrganizationRoute,
  getApiV1MultipleId4nsPropertiesRoute,
  getApiV1OrganizationsOrganizationIdAddressesBillingRoute,
  getApiV1OrganizationsOrganizationIdAddressesDefaultRoute,
  getApiV1OrganizationsOrganizationIdCollectionsRoute,
  getApiV1OrganizationsOrganizationIdMessagingRoute,
  getApiV1OrganizationsOrganizationIdPartnerRoute,
  getApiV1OrganizationsOrganizationIdPrivilegesRoute,
  getApiV1OrganizationsOrganizationIdRolesRoute,
  getApiV1OrganizationsOrganizationIdRoute,
  getApiV1OrganizationsOrganizationIdUsersRoute,
  getApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
  getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRoute,
  getApiV1PublicDocumentsId4nOrganizationIdFileNameRoute,
  getApiV1PublicDocumentsId4nRoute,
  getApiV1PublicHistoryId4nRoute,
  getApiV1PublicImageImageIDRoute,
  getApiV1PublicOrganizationsOrganizationIdRoute,
  getApiV1PublicRoutesId4nRoute,
  getApiV1RolesRoute,
  getApiV1RoutingfilesId4nRoute,
  getApiV1RoutingfilesId4nRoutesTypeRoute,
  getApiV1RoutingfilesId4nRouteTypeRoute,
  getApiV1SearchGuidsAliasesTypesRoute,
  getApiV1SearchGuidsRoute,
  getApiV1TransfersId4nSendInfoRoute,
  getApiV1UserOrganizationsRoute,
  getApiV1UsersRoute,
  getApiV1UsersUsernameRoute,
  patchApiV1CollectionsId4nRoute,
  patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
  patchApiV1GuidsId4nRoute,
  patchApiV1HistoryId4nOrganizationIdSequenceIdRoute,
  patchApiV1Id4nsId4nPropertiesRoute,
  patchApiV1OrganizationsOrganizationIdMessagingRoute,
  postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
  postApiV1ApikeysKeyPrivilegesRoute,
  postApiV1ApikeysRoute,
  postApiV1CollectionsId4nElementsRoute,
  postApiV1CollectionsRoute,
  postApiV1DocumentsId4nOrganizationIdRoute,
  postApiV1GuidsRoute,
  postApiV1HistoryId4nRoute,
  postApiV1Id4nsId4nAliasAliasTypeRoute,
  postApiV1ImportGs1Route,
  postApiV1OrganizationsOrganizationIdLogoRoute,
  postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRoute,
  postApiV1OrganizationsOrganizationIdUsersInviteRoute,
  postApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
  postApiV1OrganizationsRoute,
  putApiV1ApikeysKeyRoute,
  putApiV1DocumentsId4nOrganizationIdRoute,
  putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRoute,
  putApiV1MicrostorageId4nOrganizationRoute,
  putApiV1OrganizationsOrganizationIdAddressesBillingRoute,
  putApiV1OrganizationsOrganizationIdAddressesDefaultRoute,
  putApiV1OrganizationsOrganizationIdPartnerRoute,
  putApiV1OrganizationsOrganizationIdRoute,
  putApiV1RoutingfilesId4nRoute,
  putApiV1TransfersId4nReceiveInfoRoute,
  putApiV1TransfersId4nSendInfoRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1ApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApikeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApikeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1ApikeysKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApikeysKeyPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysKeyPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApikeysKeyPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1BillingOrganizationIdPositionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ChangelogOrganizationOrganizationIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1CollectionsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1CollectionsId4nElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CollectionsId4nElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1CollectionsId4nElementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1CountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1DocumentsId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1DocumentsId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1DocumentsId4nOrganizationIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nOrganizationIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1GuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GuidsWithoutCollectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GuidsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1GuidsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1HistoryId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryId4nOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1HistoryId4nOrganizationIdSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1HistoryId4nOrganizationIdSequenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1Id4nsId4nAliasAliasTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1Id4nsId4nAliasAliasTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1Id4nsId4nPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1Id4nsId4nPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1Id4nsId4nPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1ImportGs1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1InfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MicrostorageId4nOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1MicrostorageId4nOrganizationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MultipleId4nsPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdAddressesBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdAddressesBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdAddressesBillingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdAddressesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdAddressesDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdLogoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV1OrganizationsOrganizationIdMessagingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrganizationsOrganizationIdPartnerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdUsersInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicDocumentsId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicDocumentsId4nOrganizationIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicHistoryId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicImageImageIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicOrganizationsOrganizationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PublicRoutesId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoutingfilesId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1RoutingfilesId4nRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoutingfilesId4nRouteTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1RoutingfilesId4nRoutesTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchGuidsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchGuidsAliasesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TransfersId4nReceiveInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1TransfersId4nSendInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1TransfersId4nSendInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UserOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersUsernameRoute, (c) => {
    throw new Error('Not implemented')
  })
