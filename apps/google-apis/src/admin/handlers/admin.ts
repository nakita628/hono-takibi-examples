import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesChromeosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosMoveDevicesToOuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdCommandsCommandIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosDeviceIdIssueCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosResourceIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesChromeosBatchChangeStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesMobileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdDevicesMobileResourceIdActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdOrgunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdOrgunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerIdOrgunitsOrgUnitPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerIdSchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerIdSchemasSchemaKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerDomainaliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerDomainaliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerDomainaliasesDomainAliasNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerDomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerDomainsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesBuildingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerResourcesBuildingsBuildingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesCalendarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerResourcesCalendarsCalendarResourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesFeaturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerResourcesFeaturesFeatureKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerResourcesFeaturesOldNameRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRoleassignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerRoleassignmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRoleassignmentsRoleAssignmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1CustomerCustomerRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRolesALLPrivilegesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomerCustomerRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1CustomersCustomerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1CustomersCustomerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1CustomersCustomerKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1GroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1GroupsGroupKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1GroupsGroupKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1GroupsGroupKeyAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyHasMemberMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1GroupsGroupKeyMembersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1GroupsGroupKeyMembersMemberKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1UsersUserKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyAliasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyAliasesWatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyAliasesAliasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyAspsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyAspsCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyAspsCodeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyMakeAdminRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdminDirectoryV1UsersUserKeyPhotosThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeySignOutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyTokensRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1UsersUserKeyTokensClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyTokensClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyTwoStepVerificationTurnOffRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyUndeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1UsersUserKeyVerificationCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyVerificationCodesGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1UsersUserKeyVerificationCodesInvalidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDirectoryV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdminDirectoryV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1ParentChromePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintServersBatchCreatePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintServersBatchDeletePrintServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1ParentChromePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintersBatchCreatePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ParentChromePrintersBatchDeletePrintersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDirectoryV1ParentChromePrintersListPrinterModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDirectoryV1ChannelsStopRoute, (c) => {
    throw new Error('Not implemented')
  })
