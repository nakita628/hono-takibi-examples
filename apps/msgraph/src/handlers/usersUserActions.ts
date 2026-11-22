import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postUsersGetAvailableExtensionPropertiesRoute,
  postUsersGetByIdsRoute,
  postUsersUserIdAssignLicenseRoute,
  postUsersUserIdChangePasswordRoute,
  postUsersUserIdCheckMemberGroupsRoute,
  postUsersUserIdCheckMemberObjectsRoute,
  postUsersUserIdExportPersonalDataRoute,
  postUsersUserIdFindMeetingTimesRoute,
  postUsersUserIdGetMailTipsRoute,
  postUsersUserIdGetMemberGroupsRoute,
  postUsersUserIdGetMemberObjectsRoute,
  postUsersUserIdRemoveAllDevicesFromManagementRoute,
  postUsersUserIdReprocessLicenseAssignmentRoute,
  postUsersUserIdRestoreRoute,
  postUsersUserIdRetryServiceProvisioningRoute,
  postUsersUserIdRevokeSignInSessionsRoute,
  postUsersUserIdSendMailRoute,
  postUsersUserIdTranslateExchangeIdsRoute,
  postUsersUserIdWipeManagedAppRegistrationsByDeviceTagRoute,
  postUsersValidatePropertiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usersUserActionsHandler = app
  .openapi(postUsersUserIdAssignLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdExportPersonalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdFindMeetingTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdGetMailTipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRemoveAllDevicesFromManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdReprocessLicenseAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRetryServiceProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdRevokeSignInSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdSendMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdTranslateExchangeIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersUserIdWipeManagedAppRegistrationsByDeviceTagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersGetAvailableExtensionPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersGetByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersValidatePropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
