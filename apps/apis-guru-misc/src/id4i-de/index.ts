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
  getGoGuidRoute,
  getWhoisId4nRoute,
  patchApiV1CollectionsId4nRoute,
  patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
  patchApiV1GuidsId4nRoute,
  patchApiV1HistoryId4nOrganizationIdSequenceIdRoute,
  patchApiV1Id4nsId4nPropertiesRoute,
  patchApiV1OrganizationsOrganizationIdMessagingRoute,
  postAccountPasswordRoute,
  postAccountRegistrationRoute,
  postAccountVerificationRoute,
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
  postLoginRoute,
  putAccountPasswordRoute,
  putAccountRegistrationRoute,
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
} from './routes'
import {
  deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRouteHandler,
  deleteApiV1ApikeysKeyPrivilegesRouteHandler,
  deleteApiV1ApikeysKeyRouteHandler,
  deleteApiV1CollectionsId4nElementsRouteHandler,
  deleteApiV1CollectionsId4nRouteHandler,
  deleteApiV1DocumentsId4nOrganizationIdFileNameRouteHandler,
  deleteApiV1Id4nsId4nAliasAliasTypeRouteHandler,
  deleteApiV1Id4nsId4nPropertiesRouteHandler,
  deleteApiV1OrganizationsOrganizationIdAddressesBillingRouteHandler,
  deleteApiV1OrganizationsOrganizationIdLogoRouteHandler,
  deleteApiV1OrganizationsOrganizationIdPartnerRouteHandler,
  deleteApiV1OrganizationsOrganizationIdRouteHandler,
  deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRouteHandler,
  getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRouteHandler,
  getApiV1ApikeysKeyPrivilegesRouteHandler,
  getApiV1ApikeysKeyRouteHandler,
  getApiV1ApikeysPrivilegesRouteHandler,
  getApiV1ApikeysRouteHandler,
  getApiV1BillingOrganizationIdPositionsRouteHandler,
  getApiV1BillingOrganizationIdRouteHandler,
  getApiV1ChangelogOrganizationOrganizationIdIndexRouteHandler,
  getApiV1CollectionsId4nElementsRouteHandler,
  getApiV1CollectionsId4nRouteHandler,
  getApiV1CountriesRouteHandler,
  getApiV1DocumentsId4nOrganizationIdFileNameMetadataRouteHandler,
  getApiV1DocumentsId4nOrganizationIdFileNameRouteHandler,
  getApiV1DocumentsId4nOrganizationIdRouteHandler,
  getApiV1DocumentsId4nRouteHandler,
  getApiV1GuidsId4nRouteHandler,
  getApiV1GuidsWithoutCollectionRouteHandler,
  getApiV1HistoryId4nOrganizationIdRouteHandler,
  getApiV1HistoryId4nOrganizationIdSequenceIdRouteHandler,
  getApiV1HistoryId4nRouteHandler,
  getApiV1Id4nsId4nAliasRouteHandler,
  getApiV1Id4nsId4nCollectionsRouteHandler,
  getApiV1Id4nsId4nPropertiesRouteHandler,
  getApiV1Id4nsId4nRouteHandler,
  getApiV1InfoRouteHandler,
  getApiV1MicrostorageId4nOrganizationRouteHandler,
  getApiV1MultipleId4nsPropertiesRouteHandler,
  getApiV1OrganizationsOrganizationIdAddressesBillingRouteHandler,
  getApiV1OrganizationsOrganizationIdAddressesDefaultRouteHandler,
  getApiV1OrganizationsOrganizationIdCollectionsRouteHandler,
  getApiV1OrganizationsOrganizationIdMessagingRouteHandler,
  getApiV1OrganizationsOrganizationIdPartnerRouteHandler,
  getApiV1OrganizationsOrganizationIdPrivilegesRouteHandler,
  getApiV1OrganizationsOrganizationIdRolesRouteHandler,
  getApiV1OrganizationsOrganizationIdRouteHandler,
  getApiV1OrganizationsOrganizationIdUsersRouteHandler,
  getApiV1OrganizationsOrganizationIdUsersUsernameRolesRouteHandler,
  getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRouteHandler,
  getApiV1PublicDocumentsId4nOrganizationIdFileNameRouteHandler,
  getApiV1PublicDocumentsId4nRouteHandler,
  getApiV1PublicHistoryId4nRouteHandler,
  getApiV1PublicImageImageIDRouteHandler,
  getApiV1PublicOrganizationsOrganizationIdRouteHandler,
  getApiV1PublicRoutesId4nRouteHandler,
  getApiV1RolesRouteHandler,
  getApiV1RoutingfilesId4nRouteHandler,
  getApiV1RoutingfilesId4nRoutesTypeRouteHandler,
  getApiV1RoutingfilesId4nRouteTypeRouteHandler,
  getApiV1SearchGuidsAliasesTypesRouteHandler,
  getApiV1SearchGuidsRouteHandler,
  getApiV1TransfersId4nSendInfoRouteHandler,
  getApiV1UserOrganizationsRouteHandler,
  getApiV1UsersRouteHandler,
  getApiV1UsersUsernameRouteHandler,
  getGoGuidRouteHandler,
  getWhoisId4nRouteHandler,
  patchApiV1CollectionsId4nRouteHandler,
  patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRouteHandler,
  patchApiV1GuidsId4nRouteHandler,
  patchApiV1HistoryId4nOrganizationIdSequenceIdRouteHandler,
  patchApiV1Id4nsId4nPropertiesRouteHandler,
  patchApiV1OrganizationsOrganizationIdMessagingRouteHandler,
  postAccountPasswordRouteHandler,
  postAccountRegistrationRouteHandler,
  postAccountVerificationRouteHandler,
  postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRouteHandler,
  postApiV1ApikeysKeyPrivilegesRouteHandler,
  postApiV1ApikeysRouteHandler,
  postApiV1CollectionsId4nElementsRouteHandler,
  postApiV1CollectionsRouteHandler,
  postApiV1DocumentsId4nOrganizationIdRouteHandler,
  postApiV1GuidsRouteHandler,
  postApiV1HistoryId4nRouteHandler,
  postApiV1Id4nsId4nAliasAliasTypeRouteHandler,
  postApiV1ImportGs1RouteHandler,
  postApiV1OrganizationsOrganizationIdLogoRouteHandler,
  postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRouteHandler,
  postApiV1OrganizationsOrganizationIdUsersInviteRouteHandler,
  postApiV1OrganizationsOrganizationIdUsersUsernameRolesRouteHandler,
  postApiV1OrganizationsRouteHandler,
  postLoginRouteHandler,
  putAccountPasswordRouteHandler,
  putAccountRegistrationRouteHandler,
  putApiV1ApikeysKeyRouteHandler,
  putApiV1DocumentsId4nOrganizationIdRouteHandler,
  putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRouteHandler,
  putApiV1MicrostorageId4nOrganizationRouteHandler,
  putApiV1OrganizationsOrganizationIdAddressesBillingRouteHandler,
  putApiV1OrganizationsOrganizationIdAddressesDefaultRouteHandler,
  putApiV1OrganizationsOrganizationIdPartnerRouteHandler,
  putApiV1OrganizationsOrganizationIdRouteHandler,
  putApiV1RoutingfilesId4nRouteHandler,
  putApiV1TransfersId4nReceiveInfoRouteHandler,
  putApiV1TransfersId4nSendInfoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountPasswordRoute, postAccountPasswordRouteHandler)
  .openapi(putAccountPasswordRoute, putAccountPasswordRouteHandler)
  .openapi(postAccountRegistrationRoute, postAccountRegistrationRouteHandler)
  .openapi(putAccountRegistrationRoute, putAccountRegistrationRouteHandler)
  .openapi(postAccountVerificationRoute, postAccountVerificationRouteHandler)
  .openapi(getApiV1ApikeysRoute, getApiV1ApikeysRouteHandler)
  .openapi(postApiV1ApikeysRoute, postApiV1ApikeysRouteHandler)
  .openapi(getApiV1ApikeysPrivilegesRoute, getApiV1ApikeysPrivilegesRouteHandler)
  .openapi(deleteApiV1ApikeysKeyRoute, deleteApiV1ApikeysKeyRouteHandler)
  .openapi(getApiV1ApikeysKeyRoute, getApiV1ApikeysKeyRouteHandler)
  .openapi(putApiV1ApikeysKeyRoute, putApiV1ApikeysKeyRouteHandler)
  .openapi(deleteApiV1ApikeysKeyPrivilegesRoute, deleteApiV1ApikeysKeyPrivilegesRouteHandler)
  .openapi(getApiV1ApikeysKeyPrivilegesRoute, getApiV1ApikeysKeyPrivilegesRouteHandler)
  .openapi(postApiV1ApikeysKeyPrivilegesRoute, postApiV1ApikeysKeyPrivilegesRouteHandler)
  .openapi(
    deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
    deleteApiV1ApikeysKeyPrivilegesPrivilegeId4nsRouteHandler,
  )
  .openapi(
    getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
    getApiV1ApikeysKeyPrivilegesPrivilegeId4nsRouteHandler,
  )
  .openapi(
    postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRoute,
    postApiV1ApikeysKeyPrivilegesPrivilegeId4nsRouteHandler,
  )
  .openapi(getApiV1BillingOrganizationIdRoute, getApiV1BillingOrganizationIdRouteHandler)
  .openapi(
    getApiV1BillingOrganizationIdPositionsRoute,
    getApiV1BillingOrganizationIdPositionsRouteHandler,
  )
  .openapi(
    getApiV1ChangelogOrganizationOrganizationIdIndexRoute,
    getApiV1ChangelogOrganizationOrganizationIdIndexRouteHandler,
  )
  .openapi(postApiV1CollectionsRoute, postApiV1CollectionsRouteHandler)
  .openapi(deleteApiV1CollectionsId4nRoute, deleteApiV1CollectionsId4nRouteHandler)
  .openapi(getApiV1CollectionsId4nRoute, getApiV1CollectionsId4nRouteHandler)
  .openapi(patchApiV1CollectionsId4nRoute, patchApiV1CollectionsId4nRouteHandler)
  .openapi(deleteApiV1CollectionsId4nElementsRoute, deleteApiV1CollectionsId4nElementsRouteHandler)
  .openapi(getApiV1CollectionsId4nElementsRoute, getApiV1CollectionsId4nElementsRouteHandler)
  .openapi(postApiV1CollectionsId4nElementsRoute, postApiV1CollectionsId4nElementsRouteHandler)
  .openapi(getApiV1CountriesRoute, getApiV1CountriesRouteHandler)
  .openapi(getApiV1DocumentsId4nRoute, getApiV1DocumentsId4nRouteHandler)
  .openapi(
    getApiV1DocumentsId4nOrganizationIdRoute,
    getApiV1DocumentsId4nOrganizationIdRouteHandler,
  )
  .openapi(
    postApiV1DocumentsId4nOrganizationIdRoute,
    postApiV1DocumentsId4nOrganizationIdRouteHandler,
  )
  .openapi(
    putApiV1DocumentsId4nOrganizationIdRoute,
    putApiV1DocumentsId4nOrganizationIdRouteHandler,
  )
  .openapi(
    deleteApiV1DocumentsId4nOrganizationIdFileNameRoute,
    deleteApiV1DocumentsId4nOrganizationIdFileNameRouteHandler,
  )
  .openapi(
    getApiV1DocumentsId4nOrganizationIdFileNameRoute,
    getApiV1DocumentsId4nOrganizationIdFileNameRouteHandler,
  )
  .openapi(
    getApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
    getApiV1DocumentsId4nOrganizationIdFileNameMetadataRouteHandler,
  )
  .openapi(
    patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRoute,
    patchApiV1DocumentsId4nOrganizationIdFileNameMetadataRouteHandler,
  )
  .openapi(postApiV1GuidsRoute, postApiV1GuidsRouteHandler)
  .openapi(getApiV1GuidsWithoutCollectionRoute, getApiV1GuidsWithoutCollectionRouteHandler)
  .openapi(getApiV1GuidsId4nRoute, getApiV1GuidsId4nRouteHandler)
  .openapi(patchApiV1GuidsId4nRoute, patchApiV1GuidsId4nRouteHandler)
  .openapi(getApiV1HistoryId4nRoute, getApiV1HistoryId4nRouteHandler)
  .openapi(postApiV1HistoryId4nRoute, postApiV1HistoryId4nRouteHandler)
  .openapi(getApiV1HistoryId4nOrganizationIdRoute, getApiV1HistoryId4nOrganizationIdRouteHandler)
  .openapi(
    getApiV1HistoryId4nOrganizationIdSequenceIdRoute,
    getApiV1HistoryId4nOrganizationIdSequenceIdRouteHandler,
  )
  .openapi(
    patchApiV1HistoryId4nOrganizationIdSequenceIdRoute,
    patchApiV1HistoryId4nOrganizationIdSequenceIdRouteHandler,
  )
  .openapi(
    putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRoute,
    putApiV1HistoryId4nOrganizationIdSequenceIdVisibilityRouteHandler,
  )
  .openapi(getApiV1Id4nsId4nRoute, getApiV1Id4nsId4nRouteHandler)
  .openapi(getApiV1Id4nsId4nAliasRoute, getApiV1Id4nsId4nAliasRouteHandler)
  .openapi(deleteApiV1Id4nsId4nAliasAliasTypeRoute, deleteApiV1Id4nsId4nAliasAliasTypeRouteHandler)
  .openapi(postApiV1Id4nsId4nAliasAliasTypeRoute, postApiV1Id4nsId4nAliasAliasTypeRouteHandler)
  .openapi(getApiV1Id4nsId4nCollectionsRoute, getApiV1Id4nsId4nCollectionsRouteHandler)
  .openapi(deleteApiV1Id4nsId4nPropertiesRoute, deleteApiV1Id4nsId4nPropertiesRouteHandler)
  .openapi(getApiV1Id4nsId4nPropertiesRoute, getApiV1Id4nsId4nPropertiesRouteHandler)
  .openapi(patchApiV1Id4nsId4nPropertiesRoute, patchApiV1Id4nsId4nPropertiesRouteHandler)
  .openapi(postApiV1ImportGs1Route, postApiV1ImportGs1RouteHandler)
  .openapi(getApiV1InfoRoute, getApiV1InfoRouteHandler)
  .openapi(
    getApiV1MicrostorageId4nOrganizationRoute,
    getApiV1MicrostorageId4nOrganizationRouteHandler,
  )
  .openapi(
    putApiV1MicrostorageId4nOrganizationRoute,
    putApiV1MicrostorageId4nOrganizationRouteHandler,
  )
  .openapi(getApiV1MultipleId4nsPropertiesRoute, getApiV1MultipleId4nsPropertiesRouteHandler)
  .openapi(postApiV1OrganizationsRoute, postApiV1OrganizationsRouteHandler)
  .openapi(
    deleteApiV1OrganizationsOrganizationIdRoute,
    deleteApiV1OrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdRoute,
    getApiV1OrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    putApiV1OrganizationsOrganizationIdRoute,
    putApiV1OrganizationsOrganizationIdRouteHandler,
  )
  .openapi(
    deleteApiV1OrganizationsOrganizationIdAddressesBillingRoute,
    deleteApiV1OrganizationsOrganizationIdAddressesBillingRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdAddressesBillingRoute,
    getApiV1OrganizationsOrganizationIdAddressesBillingRouteHandler,
  )
  .openapi(
    putApiV1OrganizationsOrganizationIdAddressesBillingRoute,
    putApiV1OrganizationsOrganizationIdAddressesBillingRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdAddressesDefaultRoute,
    getApiV1OrganizationsOrganizationIdAddressesDefaultRouteHandler,
  )
  .openapi(
    putApiV1OrganizationsOrganizationIdAddressesDefaultRoute,
    putApiV1OrganizationsOrganizationIdAddressesDefaultRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdCollectionsRoute,
    getApiV1OrganizationsOrganizationIdCollectionsRouteHandler,
  )
  .openapi(
    deleteApiV1OrganizationsOrganizationIdLogoRoute,
    deleteApiV1OrganizationsOrganizationIdLogoRouteHandler,
  )
  .openapi(
    postApiV1OrganizationsOrganizationIdLogoRoute,
    postApiV1OrganizationsOrganizationIdLogoRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdMessagingRoute,
    getApiV1OrganizationsOrganizationIdMessagingRouteHandler,
  )
  .openapi(
    patchApiV1OrganizationsOrganizationIdMessagingRoute,
    patchApiV1OrganizationsOrganizationIdMessagingRouteHandler,
  )
  .openapi(
    postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRoute,
    postApiV1OrganizationsOrganizationIdMessagingEnqueueCustomMessageRouteHandler,
  )
  .openapi(
    deleteApiV1OrganizationsOrganizationIdPartnerRoute,
    deleteApiV1OrganizationsOrganizationIdPartnerRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdPartnerRoute,
    getApiV1OrganizationsOrganizationIdPartnerRouteHandler,
  )
  .openapi(
    putApiV1OrganizationsOrganizationIdPartnerRoute,
    putApiV1OrganizationsOrganizationIdPartnerRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdPrivilegesRoute,
    getApiV1OrganizationsOrganizationIdPrivilegesRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdRolesRoute,
    getApiV1OrganizationsOrganizationIdRolesRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdUsersRoute,
    getApiV1OrganizationsOrganizationIdUsersRouteHandler,
  )
  .openapi(
    postApiV1OrganizationsOrganizationIdUsersInviteRoute,
    postApiV1OrganizationsOrganizationIdUsersInviteRouteHandler,
  )
  .openapi(
    deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
    deleteApiV1OrganizationsOrganizationIdUsersUsernameRolesRouteHandler,
  )
  .openapi(
    getApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
    getApiV1OrganizationsOrganizationIdUsersUsernameRolesRouteHandler,
  )
  .openapi(
    postApiV1OrganizationsOrganizationIdUsersUsernameRolesRoute,
    postApiV1OrganizationsOrganizationIdUsersUsernameRolesRouteHandler,
  )
  .openapi(getApiV1PublicDocumentsId4nRoute, getApiV1PublicDocumentsId4nRouteHandler)
  .openapi(
    getApiV1PublicDocumentsId4nOrganizationIdFileNameRoute,
    getApiV1PublicDocumentsId4nOrganizationIdFileNameRouteHandler,
  )
  .openapi(
    getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRoute,
    getApiV1PublicDocumentsId4nOrganizationIdFileNameMetadataRouteHandler,
  )
  .openapi(getApiV1PublicHistoryId4nRoute, getApiV1PublicHistoryId4nRouteHandler)
  .openapi(getApiV1PublicImageImageIDRoute, getApiV1PublicImageImageIDRouteHandler)
  .openapi(
    getApiV1PublicOrganizationsOrganizationIdRoute,
    getApiV1PublicOrganizationsOrganizationIdRouteHandler,
  )
  .openapi(getApiV1PublicRoutesId4nRoute, getApiV1PublicRoutesId4nRouteHandler)
  .openapi(getApiV1RolesRoute, getApiV1RolesRouteHandler)
  .openapi(getApiV1RoutingfilesId4nRoute, getApiV1RoutingfilesId4nRouteHandler)
  .openapi(putApiV1RoutingfilesId4nRoute, putApiV1RoutingfilesId4nRouteHandler)
  .openapi(getApiV1RoutingfilesId4nRouteTypeRoute, getApiV1RoutingfilesId4nRouteTypeRouteHandler)
  .openapi(getApiV1RoutingfilesId4nRoutesTypeRoute, getApiV1RoutingfilesId4nRoutesTypeRouteHandler)
  .openapi(getApiV1SearchGuidsRoute, getApiV1SearchGuidsRouteHandler)
  .openapi(getApiV1SearchGuidsAliasesTypesRoute, getApiV1SearchGuidsAliasesTypesRouteHandler)
  .openapi(putApiV1TransfersId4nReceiveInfoRoute, putApiV1TransfersId4nReceiveInfoRouteHandler)
  .openapi(getApiV1TransfersId4nSendInfoRoute, getApiV1TransfersId4nSendInfoRouteHandler)
  .openapi(putApiV1TransfersId4nSendInfoRoute, putApiV1TransfersId4nSendInfoRouteHandler)
  .openapi(getApiV1UserOrganizationsRoute, getApiV1UserOrganizationsRouteHandler)
  .openapi(getApiV1UsersRoute, getApiV1UsersRouteHandler)
  .openapi(getApiV1UsersUsernameRoute, getApiV1UsersUsernameRouteHandler)
  .openapi(getGoGuidRoute, getGoGuidRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(getWhoisId4nRoute, getWhoisId4nRouteHandler)

export default app
