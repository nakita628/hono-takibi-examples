import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsDatatableRolesIdRoute,
  deleteSettingsExternalInstancePgDatabasesNameRoute,
  getSettingsAuditLogsS3BackfillStatusRoute,
  getSettingsAuditLogsS3StatusRoute,
  getSettingsCriticalAlertsRoute,
  getSettingsDatatableRolesRoute,
  getSettingsExternalInstancePgDatabasesRoute,
  getSettingsExternalInstancePgStatusRoute,
  getSettingsGetStatsRoute,
  getSettingsGithubAppStaleWebhooksRoute,
  getSettingsGlobalKeyRoute,
  getSettingsInstanceConfigRoute,
  getSettingsInstanceHashRoute,
  getSettingsInstanceUiRoute,
  getSettingsLatestKeyRenewalAttemptRoute,
  getSettingsListGlobalRoute,
  getSettingsLocalRoute,
  getSettingsLogCleanupStatusRoute,
  getSettingsObjectStorageUsageRoute,
  getSettingsOfflineLicenseStatusRoute,
  getSettingsSmtpConfiguredRoute,
  postSettingsAuditLogsS3BackfillRoute,
  postSettingsCriticalAlertsAcknowledgeAllRoute,
  postSettingsCriticalAlertsIdAcknowledgeRoute,
  postSettingsCustomerPortalRoute,
  postSettingsDatatableRolesIdRoute,
  postSettingsDatatableRolesRoute,
  postSettingsDropCustomInstancePgDatabaseNameRoute,
  postSettingsExternalInstancePgDatabasesNameRoute,
  postSettingsExternalInstancePgSetupRoute,
  postSettingsGlobalKeyRoute,
  postSettingsListCustomInstancePgDatabasesRoute,
  postSettingsMigrateSecretsFromAwsSmRoute,
  postSettingsMigrateSecretsFromAzureKvRoute,
  postSettingsMigrateSecretsFromHttpStoreRoute,
  postSettingsMigrateSecretsToAwsSmRoute,
  postSettingsMigrateSecretsToAzureKvRoute,
  postSettingsMigrateSecretsToDatabaseRoute,
  postSettingsMigrateSecretsToVaultRoute,
  postSettingsObjectStorageUsageRoute,
  postSettingsRefreshCustomInstanceUserPwdRoute,
  postSettingsRenewLicenseKeyRoute,
  postSettingsRestartWorkerGroupWorkerGroupRoute,
  postSettingsRunLogCleanupRoute,
  postSettingsSendStatsRoute,
  postSettingsSetupCustomInstancePgDatabaseNameRoute,
  postSettingsTestAwsSmBackendRoute,
  postSettingsTestAzureKvBackendRoute,
  postSettingsTestCriticalChannelsRoute,
  postSettingsTestHttpStoreBackendRoute,
  postSettingsTestLicenseKeyRoute,
  postSettingsTestObjectStorageConfigRoute,
  postSettingsTestSecretBackendRoute,
  postSettingsTestSmtpRoute,
  putSettingsInstanceConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(postSettingsRefreshCustomInstanceUserPwdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsExternalInstancePgStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsExternalInstancePgSetupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsExternalInstancePgDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsExternalInstancePgDatabasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsExternalInstancePgDatabasesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsListCustomInstancePgDatabasesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsDatatableRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsDatatableRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsDatatableRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsDatatableRolesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsSetupCustomInstancePgDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsDropCustomInstancePgDatabaseNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsGlobalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsGlobalKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsInstanceUiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsLocalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsSmtpConfiguredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestSmtpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestCriticalChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCriticalAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCriticalAlertsIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCriticalAlertsAcknowledgeAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestLicenseKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestObjectStorageConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsObjectStorageUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsObjectStorageUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRunLogCleanupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsLogCleanupStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsAuditLogsS3StatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsAuditLogsS3BackfillRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsAuditLogsS3BackfillStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsSendStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRestartWorkerGroupWorkerGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsGetStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsLatestKeyRenewalAttemptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRenewLicenseKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsOfflineLicenseStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsInstanceHashRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCustomerPortalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsListGlobalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsGithubAppStaleWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsInstanceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsInstanceConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestSecretBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsToVaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsToDatabaseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestAzureKvBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsToAzureKvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsFromAzureKvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestAwsSmBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsToAwsSmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsFromAwsSmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTestHttpStoreBackendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMigrateSecretsFromHttpStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
