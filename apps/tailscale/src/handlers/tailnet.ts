import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTailnetTailnetKeysKeyIdRoute,
  deleteTailnetTailnetLoggingLogTypeStreamRoute,
  deleteTailnetTailnetOauthAppsAppIdRoute,
  deleteTailnetTailnetRoute,
  deleteTailnetTailnetServicesServiceNameRoute,
  getTailnetTailnetAclRoute,
  getTailnetTailnetContactsRoute,
  getTailnetTailnetDevicesRoute,
  getTailnetTailnetDnsConfigurationRoute,
  getTailnetTailnetDnsNameserversRoute,
  getTailnetTailnetDnsPreferencesRoute,
  getTailnetTailnetDnsSearchpathsRoute,
  getTailnetTailnetDnsSplitDnsRoute,
  getTailnetTailnetKeysKeyIdRoute,
  getTailnetTailnetKeysRoute,
  getTailnetTailnetLoggingConfigurationRoute,
  getTailnetTailnetLoggingLogTypeStreamRoute,
  getTailnetTailnetLoggingLogTypeStreamStatusRoute,
  getTailnetTailnetLoggingNetworkRoute,
  getTailnetTailnetOauthAppsAppIdRoute,
  getTailnetTailnetOauthAppsRoute,
  getTailnetTailnetPostureIntegrationsRoute,
  getTailnetTailnetServicesRoute,
  getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
  getTailnetTailnetServicesServiceNameDevicesRoute,
  getTailnetTailnetServicesServiceNameRoute,
  getTailnetTailnetSettingsRoute,
  getTailnetTailnetUserInvitesRoute,
  getTailnetTailnetUsersRoute,
  getTailnetTailnetWebhooksRoute,
  patchTailnetTailnetContactsContactTypeRoute,
  patchTailnetTailnetDeviceAttributesRoute,
  patchTailnetTailnetDnsSplitDnsRoute,
  patchTailnetTailnetSettingsRoute,
  postTailnetTailnetAclPreviewRoute,
  postTailnetTailnetAclRoute,
  postTailnetTailnetAclValidateRoute,
  postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute,
  postTailnetTailnetAwsExternalIdRoute,
  postTailnetTailnetContactsContactTypeResendVerificationEmailRoute,
  postTailnetTailnetDnsConfigurationRoute,
  postTailnetTailnetDnsNameserversRoute,
  postTailnetTailnetDnsPreferencesRoute,
  postTailnetTailnetDnsSearchpathsRoute,
  postTailnetTailnetKeysRoute,
  postTailnetTailnetOauthAppsRoute,
  postTailnetTailnetPostureIntegrationsRoute,
  postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute,
  postTailnetTailnetUserInvitesRoute,
  postTailnetTailnetWebhooksRoute,
  putTailnetTailnetDnsSplitDnsRoute,
  putTailnetTailnetKeysKeyIdRoute,
  putTailnetTailnetLoggingLogTypeStreamRoute,
  putTailnetTailnetOauthAppsAppIdRoute,
  putTailnetTailnetServicesServiceNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tailnetHandler = app
  .openapi(getTailnetTailnetDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetDeviceAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetUserInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetUserInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingLogTypeStreamStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetLoggingLogTypeStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetLoggingLogTypeStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetLoggingLogTypeStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAwsExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAwsExternalIdIdValidateAwsTrustPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsNameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsPreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsSearchpathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsSearchpathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsSplitDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetDnsSplitDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetDnsSplitDnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetDnsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetDnsConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAclRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAclPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetAclValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetPostureIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetPostureIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetContactsContactTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetContactsContactTypeResendVerificationEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTailnetTailnetSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetServicesServiceNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesServiceNameDevicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetServicesServiceNameDeviceDeviceIdApprovedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetOauthAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTailnetTailnetOauthAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTailnetTailnetOauthAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTailnetTailnetOauthAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTailnetTailnetOauthAppsAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
