import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute,
  deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute,
  deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute,
  deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute,
  deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRoute,
  deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  deleteAdminDirectoryV1GroupsGroupKeyRoute,
  deleteAdminDirectoryV1NameRoute,
  deleteAdminDirectoryV1UsersUserKeyAliasesAliasRoute,
  deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRoute,
  deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  deleteAdminDirectoryV1UsersUserKeyRoute,
  deleteAdminDirectoryV1UsersUserKeyTokensClientIdRoute,
  getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute,
  getAdminDirectoryV1CustomerCustomerDomainaliasesRoute,
  getAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute,
  getAdminDirectoryV1CustomerCustomerDomainsRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute,
  getAdminDirectoryV1CustomerCustomerIdDevicesMobileRoute,
  getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  getAdminDirectoryV1CustomerCustomerIdOrgunitsRoute,
  getAdminDirectoryV1CustomerCustomerIdSchemasRoute,
  getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  getAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute,
  getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  getAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute,
  getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  getAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute,
  getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute,
  getAdminDirectoryV1CustomerCustomerRoleassignmentsRoute,
  getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRoute,
  getAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  getAdminDirectoryV1CustomerCustomerRolesRoute,
  getAdminDirectoryV1CustomersCustomerKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyAliasesRoute,
  getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  getAdminDirectoryV1GroupsGroupKeyMembersRoute,
  getAdminDirectoryV1GroupsGroupKeyRoute,
  getAdminDirectoryV1GroupsRoute,
  getAdminDirectoryV1NameRoute,
  getAdminDirectoryV1ParentChromePrintersListPrinterModelsRoute,
  getAdminDirectoryV1ParentChromePrintersRoute,
  getAdminDirectoryV1ParentChromePrintServersRoute,
  getAdminDirectoryV1UsersRoute,
  getAdminDirectoryV1UsersUserKeyAliasesRoute,
  getAdminDirectoryV1UsersUserKeyAspsCodeIdRoute,
  getAdminDirectoryV1UsersUserKeyAspsRoute,
  getAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  getAdminDirectoryV1UsersUserKeyRoute,
  getAdminDirectoryV1UsersUserKeyTokensClientIdRoute,
  getAdminDirectoryV1UsersUserKeyTokensRoute,
  getAdminDirectoryV1UsersUserKeyVerificationCodesRoute,
  patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute,
  patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  patchAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  patchAdminDirectoryV1CustomersCustomerKeyRoute,
  patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  patchAdminDirectoryV1GroupsGroupKeyRoute,
  patchAdminDirectoryV1NameRoute,
  patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  patchAdminDirectoryV1UsersUserKeyRoute,
  postAdminDirectoryV1ChannelsStopRoute,
  postAdminDirectoryV1CustomerCustomerDomainaliasesRoute,
  postAdminDirectoryV1CustomerCustomerDomainsRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRoute,
  postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRoute,
  postAdminDirectoryV1CustomerCustomerIdOrgunitsRoute,
  postAdminDirectoryV1CustomerCustomerIdSchemasRoute,
  postAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute,
  postAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute,
  postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRoute,
  postAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute,
  postAdminDirectoryV1CustomerCustomerRoleassignmentsRoute,
  postAdminDirectoryV1CustomerCustomerRolesRoute,
  postAdminDirectoryV1GroupsGroupKeyAliasesRoute,
  postAdminDirectoryV1GroupsGroupKeyMembersRoute,
  postAdminDirectoryV1GroupsRoute,
  postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRoute,
  postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRoute,
  postAdminDirectoryV1ParentChromePrintersRoute,
  postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRoute,
  postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRoute,
  postAdminDirectoryV1ParentChromePrintServersRoute,
  postAdminDirectoryV1UsersRoute,
  postAdminDirectoryV1UsersUserKeyAliasesRoute,
  postAdminDirectoryV1UsersUserKeyAliasesWatchRoute,
  postAdminDirectoryV1UsersUserKeyMakeAdminRoute,
  postAdminDirectoryV1UsersUserKeySignOutRoute,
  postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRoute,
  postAdminDirectoryV1UsersUserKeyUndeleteRoute,
  postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRoute,
  postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRoute,
  postAdminDirectoryV1UsersWatchRoute,
  putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute,
  putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute,
  putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute,
  putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute,
  putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute,
  putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute,
  putAdminDirectoryV1CustomerCustomerRolesRoleIdRoute,
  putAdminDirectoryV1CustomersCustomerKeyRoute,
  putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute,
  putAdminDirectoryV1GroupsGroupKeyRoute,
  putAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute,
  putAdminDirectoryV1UsersUserKeyRoute,
} from '../routes'

export const getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdDevicesMobileRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdDevicesMobileRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdOrgunitsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdOrgunitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdOrgunitsRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdOrgunitsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdSchemasRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerIdSchemasRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerIdSchemasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerDomainaliasesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerDomainaliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerDomainaliasesRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerDomainaliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerDomainsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerDomainsRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerDomainsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerDomainsDomainNameRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerResourcesBuildingsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerResourcesBuildingsRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerResourcesCalendarsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerResourcesCalendarsRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerResourcesFeaturesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerResourcesFeaturesRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerRoleassignmentsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerRoleassignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerRoleassignmentsRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerRoleassignmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerRolesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1CustomerCustomerRolesRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1CustomerCustomerRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomerCustomerRolesRoleIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomerCustomerRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomerCustomerRolesRoleIdRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomerCustomerRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomerCustomerRolesRoleIdRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomerCustomerRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1CustomersCustomerKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1CustomersCustomerKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1CustomersCustomerKeyRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1CustomersCustomerKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1CustomersCustomerKeyRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1CustomersCustomerKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1GroupsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1GroupsRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1GroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1GroupsGroupKeyRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1GroupsGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1GroupsGroupKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1GroupsGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1GroupsGroupKeyRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1GroupsGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1GroupsGroupKeyRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1GroupsGroupKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1GroupsGroupKeyAliasesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1GroupsGroupKeyAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1GroupsGroupKeyAliasesRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1GroupsGroupKeyAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1GroupsGroupKeyMembersRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1GroupsGroupKeyMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1GroupsGroupKeyMembersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1GroupsGroupKeyMembersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersWatchRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersWatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1UsersUserKeyRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1UsersUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1UsersUserKeyRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1UsersUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1UsersUserKeyRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1UsersUserKeyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyAliasesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyAliasesRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyAliasesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyAliasesWatchRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyAliasesWatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1UsersUserKeyAliasesAliasRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1UsersUserKeyAliasesAliasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyAspsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyAspsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyAspsCodeIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyAspsCodeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyMakeAdminRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyMakeAdminRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyPhotosThumbnailRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putAdminDirectoryV1UsersUserKeyPhotosThumbnailRouteHandler: RouteHandler<
  typeof putAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeySignOutRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeySignOutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyTokensRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyTokensRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1UsersUserKeyTokensClientIdRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1UsersUserKeyTokensClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyTokensClientIdRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyTokensClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyUndeleteRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyUndeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1UsersUserKeyVerificationCodesRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1UsersUserKeyVerificationCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDirectoryV1NameRouteHandler: RouteHandler<
  typeof deleteAdminDirectoryV1NameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1NameRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1NameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchAdminDirectoryV1NameRouteHandler: RouteHandler<
  typeof patchAdminDirectoryV1NameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1ParentChromePrintServersRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1ParentChromePrintServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ParentChromePrintServersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ParentChromePrintServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1ParentChromePrintersRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1ParentChromePrintersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ParentChromePrintersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ParentChromePrintersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDirectoryV1ParentChromePrintersListPrinterModelsRouteHandler: RouteHandler<
  typeof getAdminDirectoryV1ParentChromePrintersListPrinterModelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDirectoryV1ChannelsStopRouteHandler: RouteHandler<
  typeof postAdminDirectoryV1ChannelsStopRoute
> = async (c) => {
  throw new Error('Not implemented')
}
