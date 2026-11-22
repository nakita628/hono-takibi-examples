import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDeviceManagementApplePushNotificationCertificateMicrosoftGraphDownloadApplePushNotificationCertificateSigningRequestRoute,
  getDeviceManagementAuditEventsMicrosoftGraphGetAuditActivityTypesCategoryCategoryRoute,
  getDeviceManagementAuditEventsMicrosoftGraphGetAuditCategoriesRoute,
  getDeviceManagementDeviceConfigurationsDeviceConfigurationIdMicrosoftGraphGetOmaSettingPlainTextValueSecretReferenceValueIdSecretReferenceValueIdRoute,
  getDeviceManagementMicrosoftGraphGetEffectivePermissionsScopeScopeRoute,
  getDeviceManagementMicrosoftGraphVerifyWindowsEnrollmentAutoDiscoveryDomainNameDomainNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviceManagementFunctionsHandler = app
  .openapi(
    getDeviceManagementApplePushNotificationCertificateMicrosoftGraphDownloadApplePushNotificationCertificateSigningRequestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getDeviceManagementAuditEventsMicrosoftGraphGetAuditActivityTypesCategoryCategoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementAuditEventsMicrosoftGraphGetAuditCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementDeviceConfigurationsDeviceConfigurationIdMicrosoftGraphGetOmaSettingPlainTextValueSecretReferenceValueIdSecretReferenceValueIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getDeviceManagementMicrosoftGraphGetEffectivePermissionsScopeScopeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getDeviceManagementMicrosoftGraphVerifyWindowsEnrollmentAutoDiscoveryDomainNameDomainNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
