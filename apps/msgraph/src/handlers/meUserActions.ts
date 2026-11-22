import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postMeAssignLicenseRoute,
  postMeChangePasswordRoute,
  postMeCheckMemberGroupsRoute,
  postMeCheckMemberObjectsRoute,
  postMeExportPersonalDataRoute,
  postMeFindMeetingTimesRoute,
  postMeGetMailTipsRoute,
  postMeGetMemberGroupsRoute,
  postMeGetMemberObjectsRoute,
  postMeRemoveAllDevicesFromManagementRoute,
  postMeReprocessLicenseAssignmentRoute,
  postMeRestoreRoute,
  postMeRetryServiceProvisioningRoute,
  postMeRevokeSignInSessionsRoute,
  postMeSendMailRoute,
  postMeTranslateExchangeIdsRoute,
  postMeWipeManagedAppRegistrationsByDeviceTagRoute,
} from '../routes'

const app = new OpenAPIHono()

export const meUserActionsHandler = app
  .openapi(postMeAssignLicenseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCheckMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeCheckMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeExportPersonalDataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeFindMeetingTimesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeGetMailTipsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeGetMemberGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeGetMemberObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeRemoveAllDevicesFromManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeReprocessLicenseAssignmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeRestoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeRetryServiceProvisioningRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeRevokeSignInSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeSendMailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeTranslateExchangeIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMeWipeManagedAppRegistrationsByDeviceTagRoute, (c) => {
    throw new Error('Not implemented')
  })
