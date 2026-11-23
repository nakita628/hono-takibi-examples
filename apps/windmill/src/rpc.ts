import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}

export async function getHealthStatus(
  args: InferRequestType<typeof client.health.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.health.status.$get(args, options))
}

export async function getHealthDetailed(options?: ClientRequestOptions) {
  return await parseResponse(client.health.detailed.$get(undefined, options))
}

export async function getUptodate(options?: ClientRequestOptions) {
  return await parseResponse(client.uptodate.$get(undefined, options))
}

export async function getEeLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.ee_license.$get(undefined, options))
}

export async function getDocsSearch(
  args: InferRequestType<typeof client.docs.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs.search.$get(args, options))
}

export async function getDocsPage(
  args: InferRequestType<typeof client.docs.page.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docs.page.$get(args, options))
}

export async function getOpenapiYaml(options?: ClientRequestOptions) {
  return await parseResponse(client['openapi.yaml'].$get(undefined, options))
}

export async function getWWorkspaceAuditGetId(
  args: InferRequestType<(typeof client.w)[':workspace']['audit']['get'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].audit.get[':id'].$get(args, options))
}

export async function getWWorkspaceAuditList(
  args: InferRequestType<(typeof client.w)[':workspace']['audit']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].audit.list.$get(args, options))
}

export async function getWWorkspaceTrashList(
  args: InferRequestType<(typeof client.w)[':workspace']['trash']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].trash.list.$get(args, options))
}

export async function getWWorkspaceTrashGetId(
  args: InferRequestType<(typeof client.w)[':workspace']['trash']['get'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].trash.get[':id'].$get(args, options))
}

export async function postWWorkspaceTrashRestoreId(
  args: InferRequestType<(typeof client.w)[':workspace']['trash']['restore'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].trash.restore[':id'].$post(args, options))
}

export async function deleteWWorkspaceTrashDeleteId(
  args: InferRequestType<(typeof client.w)[':workspace']['trash']['delete'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].trash.delete[':id'].$delete(args, options))
}

export async function postWWorkspaceTrashEmpty(
  args: InferRequestType<(typeof client.w)[':workspace']['trash']['empty']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].trash.empty.$post(args, options))
}

export async function postAuthLogin(
  args: InferRequestType<typeof client.auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.login.$post(args, options))
}

export async function postAuthLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.logout.$post(undefined, options))
}

export async function getAuthIsSmtpConfigured(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.is_smtp_configured.$get(undefined, options))
}

export async function getAuthIsPasswordLoginDisabled(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.is_password_login_disabled.$get(undefined, options))
}

export async function postAuthRequestPasswordReset(
  args: InferRequestType<typeof client.auth.request_password_reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.request_password_reset.$post(args, options))
}

export async function getAuthLoginLinkToken(
  args: InferRequestType<(typeof client.auth.login_link)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.login_link[':token'].$get(args, options))
}

export async function postAuthResetPassword(
  args: InferRequestType<typeof client.auth.reset_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.reset_password.$post(args, options))
}

export async function getWWorkspaceUsersGetUsername(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['get'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.get[':username'].$get(args, options))
}

export async function postWWorkspaceUsersUpdateUsername(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['update'][':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.update[':username'].$post(args, options))
}

export async function getWWorkspaceUsersIsOwnerPath(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['is_owner'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.is_owner[':path'].$get(args, options))
}

export async function postUsersSetpassword(
  args: InferRequestType<typeof client.users.setpassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.setpassword.$post(args, options))
}

export async function postUsersSetPasswordOfUser(
  args: InferRequestType<(typeof client.users.set_password_of)[':user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.set_password_of[':user'].$post(args, options))
}

export async function postUsersSetLoginTypeUser(
  args: InferRequestType<(typeof client.users.set_login_type)[':user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.set_login_type[':user'].$post(args, options))
}

export async function postUsersCreate(
  args: InferRequestType<typeof client.users.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.create.$post(args, options))
}

export async function postUsersUpdateEmail(
  args: InferRequestType<(typeof client.users.update)[':email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.update[':email'].$post(args, options))
}

export async function getUsersUsernameInfoEmail(
  args: InferRequestType<(typeof client.users.username_info)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.username_info[':email'].$get(args, options))
}

export async function postUsersRenameEmail(
  args: InferRequestType<(typeof client.users.rename)[':email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.rename[':email'].$post(args, options))
}

export async function postUsersChangeEmailEmail(
  args: InferRequestType<(typeof client.users.change_email)[':email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.change_email[':email'].$post(args, options))
}

export async function deleteUsersDeleteEmail(
  args: InferRequestType<(typeof client.users.delete)[':email']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.delete[':email'].$delete(args, options))
}

export async function postUsersOverwrite(
  args: InferRequestType<typeof client.users.overwrite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.overwrite.$post(args, options))
}

export async function getUsersExport(options?: ClientRequestOptions) {
  return await parseResponse(client.users.export.$get(undefined, options))
}

export async function getUsersExtJwtTokens(
  args: InferRequestType<typeof client.users.ext_jwt_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.ext_jwt_tokens.$get(args, options))
}

export async function getUsersGuests(
  args: InferRequestType<typeof client.users.guests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.guests.$get(args, options))
}

export async function postUsersOnboarding(
  args: InferRequestType<typeof client.users.onboarding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.onboarding.$post(args, options))
}

export async function deleteWWorkspaceUsersDeleteUsername(
  args: InferRequestType<
    (typeof client.w)[':workspace']['users']['delete'][':username']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].users.delete[':username'].$delete(args, options),
  )
}

export async function getWWorkspaceUsersOffboardPreviewUsername(
  args: InferRequestType<
    (typeof client.w)[':workspace']['users']['offboard_preview'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].users.offboard_preview[':username'].$get(args, options),
  )
}

export async function postWWorkspaceUsersOffboardUsername(
  args: InferRequestType<
    (typeof client.w)[':workspace']['users']['offboard'][':username']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].users.offboard[':username'].$post(args, options),
  )
}

export async function getUsersOffboardPreviewEmail(
  args: InferRequestType<(typeof client.users.offboard_preview)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.offboard_preview[':email'].$get(args, options))
}

export async function postUsersOffboardEmail(
  args: InferRequestType<(typeof client.users.offboard)[':email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.offboard[':email'].$post(args, options))
}

export async function postWWorkspaceUsersConvertToGroupUsername(
  args: InferRequestType<
    (typeof client.w)[':workspace']['users']['convert_to_group'][':username']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].users.convert_to_group[':username'].$post(args, options),
  )
}

export async function getGithubAppConnectedRepositories(
  args: InferRequestType<typeof client.github_app.connected_repositories.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github_app.connected_repositories.$get(args, options))
}

export async function getWorkspacesList(options?: ClientRequestOptions) {
  return await parseResponse(client.workspaces.list.$get(undefined, options))
}

export async function getWorkspacesAllowedDomainAutoInvite(options?: ClientRequestOptions) {
  return await parseResponse(client.workspaces.allowed_domain_auto_invite.$get(undefined, options))
}

export async function getWorkspacesUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.workspaces.users.$get(undefined, options))
}

export async function postWorkspacesSessionWorkspaceStatus(
  args: InferRequestType<typeof client.workspaces.session_workspace_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.session_workspace_status.$post(args, options))
}

export async function postWorkspacesSessionWorkspaceRetention(
  args: InferRequestType<typeof client.workspaces.session_workspace_retention.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.session_workspace_retention.$post(args, options))
}

export async function getWWorkspaceWorkspacesGetAsSuperadmin(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_as_superadmin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_as_superadmin.$get(args, options),
  )
}

export async function getWorkspacesListAsSuperadmin(
  args: InferRequestType<typeof client.workspaces.list_as_superadmin.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.list_as_superadmin.$get(args, options))
}

export async function postWorkspacesCreate(
  args: InferRequestType<typeof client.workspaces.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.create.$post(args, options))
}

export async function postWWorkspaceWorkspacesCreateWorkspaceForkBranch(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['create_workspace_fork_branch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.create_workspace_fork_branch.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesCreateFork(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['create_fork']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.create_fork.$post(args, options))
}

export async function getWWorkspaceWorkspacesForkCreationStatusCreationId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['fork_creation_status'][':creation_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.fork_creation_status[':creation_id'].$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesAttachDevWorkspace(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['attach_dev_workspace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.attach_dev_workspace.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesDetachDevWorkspace(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['detach_dev_workspace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.detach_dev_workspace.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetDevWorkspace(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_dev_workspace']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_dev_workspace.$get(args, options),
  )
}

export async function postWorkspacesExists(
  args: InferRequestType<typeof client.workspaces.exists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.exists.$post(args, options))
}

export async function postWorkspacesExistsUsername(
  args: InferRequestType<typeof client.workspaces.exists_username.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.exists_username.$post(args, options))
}

export async function postSettingsRefreshCustomInstanceUserPwd(options?: ClientRequestOptions) {
  return await parseResponse(
    client.settings.refresh_custom_instance_user_pwd.$post(undefined, options),
  )
}

export async function getSettingsExternalInstancePgStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.external_instance_pg.status.$get(undefined, options))
}

export async function postSettingsExternalInstancePgSetup(
  args: InferRequestType<typeof client.settings.external_instance_pg.setup.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.external_instance_pg.setup.$post(args, options))
}

export async function getSettingsExternalInstancePgDatabases(options?: ClientRequestOptions) {
  return await parseResponse(
    client.settings.external_instance_pg.databases.$get(undefined, options),
  )
}

export async function postSettingsExternalInstancePgDatabasesName(
  args: InferRequestType<(typeof client.settings.external_instance_pg.databases)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.external_instance_pg.databases[':name'].$post(args, options),
  )
}

export async function deleteSettingsExternalInstancePgDatabasesName(
  args: InferRequestType<
    (typeof client.settings.external_instance_pg.databases)[':name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.external_instance_pg.databases[':name'].$delete(args, options),
  )
}

export async function postSettingsListCustomInstancePgDatabases(options?: ClientRequestOptions) {
  return await parseResponse(
    client.settings.list_custom_instance_pg_databases.$post(undefined, options),
  )
}

export async function getSettingsDatatableRoles(
  args: InferRequestType<typeof client.settings.datatable_roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.datatable_roles.$get(args, options))
}

export async function postSettingsDatatableRoles(
  args: InferRequestType<typeof client.settings.datatable_roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.datatable_roles.$post(args, options))
}

export async function postSettingsDatatableRolesId(
  args: InferRequestType<(typeof client.settings.datatable_roles)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.datatable_roles[':id'].$post(args, options))
}

export async function deleteSettingsDatatableRolesId(
  args: InferRequestType<(typeof client.settings.datatable_roles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.datatable_roles[':id'].$delete(args, options))
}

export async function postSettingsSetupCustomInstancePgDatabaseName(
  args: InferRequestType<
    (typeof client.settings.setup_custom_instance_pg_database)[':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.setup_custom_instance_pg_database[':name'].$post(args, options),
  )
}

export async function postSettingsDropCustomInstancePgDatabaseName(
  args: InferRequestType<
    (typeof client.settings.drop_custom_instance_pg_database)[':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.drop_custom_instance_pg_database[':name'].$post(args, options),
  )
}

export async function getSettingsGlobalKey(
  args: InferRequestType<(typeof client.settings.global)[':key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.global[':key'].$get(args, options))
}

export async function postSettingsGlobalKey(
  args: InferRequestType<(typeof client.settings.global)[':key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.global[':key'].$post(args, options))
}

export async function getSettingsInstanceUi(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.instance_ui.$get(undefined, options))
}

export async function getSettingsURuffConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.settings_u.ruff_config.$get(undefined, options))
}

export async function getSettingsLocal(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.local.$get(undefined, options))
}

export async function getSettingsSmtpConfigured(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.smtp_configured.$get(undefined, options))
}

export async function postSettingsTestSmtp(
  args: InferRequestType<typeof client.settings.test_smtp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_smtp.$post(args, options))
}

export async function postSettingsTestCriticalChannels(
  args: InferRequestType<typeof client.settings.test_critical_channels.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_critical_channels.$post(args, options))
}

export async function getSettingsCriticalAlerts(
  args: InferRequestType<typeof client.settings.critical_alerts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.critical_alerts.$get(args, options))
}

export async function postSettingsCriticalAlertsIdAcknowledge(
  args: InferRequestType<(typeof client.settings.critical_alerts)[':id']['acknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.critical_alerts[':id'].acknowledge.$post(args, options),
  )
}

export async function postSettingsCriticalAlertsAcknowledgeAll(options?: ClientRequestOptions) {
  return await parseResponse(
    client.settings.critical_alerts.acknowledge_all.$post(undefined, options),
  )
}

export async function postSettingsTestLicenseKey(
  args: InferRequestType<typeof client.settings.test_license_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_license_key.$post(args, options))
}

export async function postSettingsTestObjectStorageConfig(
  args: InferRequestType<typeof client.settings.test_object_storage_config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_object_storage_config.$post(args, options))
}

export async function getSettingsObjectStorageUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.object_storage_usage.$get(undefined, options))
}

export async function postSettingsObjectStorageUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.object_storage_usage.$post(undefined, options))
}

export async function postSettingsRunLogCleanup(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.run_log_cleanup.$post(undefined, options))
}

export async function getSettingsLogCleanupStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.log_cleanup_status.$get(undefined, options))
}

export async function getSettingsAuditLogsS3Status(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.audit_logs_s3_status.$get(undefined, options))
}

export async function postSettingsAuditLogsS3Backfill(
  args: InferRequestType<typeof client.settings.audit_logs_s3_backfill.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.audit_logs_s3_backfill.$post(args, options))
}

export async function getSettingsAuditLogsS3BackfillStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.audit_logs_s3_backfill_status.$get(undefined, options))
}

export async function postSettingsSendStats(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.send_stats.$post(undefined, options))
}

export async function postSettingsRestartWorkerGroupWorkerGroup(
  args: InferRequestType<(typeof client.settings.restart_worker_group)[':worker_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.settings.restart_worker_group[':worker_group'].$post(args, options),
  )
}

export async function getSettingsGetStats(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.get_stats.$get(undefined, options))
}

export async function getSettingsLatestKeyRenewalAttempt(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.latest_key_renewal_attempt.$get(undefined, options))
}

export async function postSettingsRenewLicenseKey(
  args: InferRequestType<typeof client.settings.renew_license_key.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.renew_license_key.$post(args, options))
}

export async function getSettingsOfflineLicenseStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.offline_license_status.$get(undefined, options))
}

export async function getSettingsInstanceHash(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.instance_hash.$get(undefined, options))
}

export async function postSettingsCustomerPortal(
  args: InferRequestType<typeof client.settings.customer_portal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.customer_portal.$post(args, options))
}

export async function postSamlTestMetadata(
  args: InferRequestType<typeof client.saml.test_metadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.saml.test_metadata.$post(args, options))
}

export async function getSettingsListGlobal(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.list_global.$get(undefined, options))
}

export async function getSettingsGithubAppStaleWebhooks(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.github_app_stale_webhooks.$get(undefined, options))
}

export async function getSettingsInstanceConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.instance_config.$get(undefined, options))
}

export async function putSettingsInstanceConfig(
  args: InferRequestType<typeof client.settings.instance_config.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.instance_config.$put(args, options))
}

export async function getMinKeepAliveVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.min_keep_alive_version.$get(undefined, options))
}

export async function getWellKnownJwksJson(options?: ClientRequestOptions) {
  return await parseResponse(client['.well-known']['jwks.json'].$get(undefined, options))
}

export async function postSettingsTestSecretBackend(
  args: InferRequestType<typeof client.settings.test_secret_backend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_secret_backend.$post(args, options))
}

export async function postSettingsMigrateSecretsToVault(
  args: InferRequestType<typeof client.settings.migrate_secrets_to_vault.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_to_vault.$post(args, options))
}

export async function postSettingsMigrateSecretsToDatabase(
  args: InferRequestType<typeof client.settings.migrate_secrets_to_database.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_to_database.$post(args, options))
}

export async function postSettingsTestAzureKvBackend(
  args: InferRequestType<typeof client.settings.test_azure_kv_backend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_azure_kv_backend.$post(args, options))
}

export async function postSettingsMigrateSecretsToAzureKv(
  args: InferRequestType<typeof client.settings.migrate_secrets_to_azure_kv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_to_azure_kv.$post(args, options))
}

export async function postSettingsMigrateSecretsFromAzureKv(
  args: InferRequestType<typeof client.settings.migrate_secrets_from_azure_kv.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_from_azure_kv.$post(args, options))
}

export async function postSettingsTestAwsSmBackend(
  args: InferRequestType<typeof client.settings.test_aws_sm_backend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_aws_sm_backend.$post(args, options))
}

export async function postSettingsMigrateSecretsToAwsSm(
  args: InferRequestType<typeof client.settings.migrate_secrets_to_aws_sm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_to_aws_sm.$post(args, options))
}

export async function postSettingsMigrateSecretsFromAwsSm(
  args: InferRequestType<typeof client.settings.migrate_secrets_from_aws_sm.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_from_aws_sm.$post(args, options))
}

export async function postSettingsTestHttpStoreBackend(
  args: InferRequestType<typeof client.settings.test_http_store_backend.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.test_http_store_backend.$post(args, options))
}

export async function postSettingsMigrateSecretsFromHttpStore(
  args: InferRequestType<typeof client.settings.migrate_secrets_from_http_store.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.migrate_secrets_from_http_store.$post(args, options))
}

export async function getUsersEmail(options?: ClientRequestOptions) {
  return await parseResponse(client.users.email.$get(undefined, options))
}

export async function getUsersRefreshToken(
  args: InferRequestType<typeof client.users.refresh_token.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.refresh_token.$get(args, options))
}

export async function getUsersTutorialProgress(options?: ClientRequestOptions) {
  return await parseResponse(client.users.tutorial_progress.$get(undefined, options))
}

export async function postUsersTutorialProgress(
  args: InferRequestType<typeof client.users.tutorial_progress.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tutorial_progress.$post(args, options))
}

export async function postUsersLeaveInstance(options?: ClientRequestOptions) {
  return await parseResponse(client.users.leave_instance.$post(undefined, options))
}

export async function getUsersUsage(options?: ClientRequestOptions) {
  return await parseResponse(client.users.usage.$get(undefined, options))
}

export async function getUsersAllRunnables(options?: ClientRequestOptions) {
  return await parseResponse(client.users.all_runnables.$get(undefined, options))
}

export async function getUsersWhoami(options?: ClientRequestOptions) {
  return await parseResponse(client.users.whoami.$get(undefined, options))
}

export async function getUsersListInvites(options?: ClientRequestOptions) {
  return await parseResponse(client.users.list_invites.$get(undefined, options))
}

export async function getWWorkspaceUsersWhoami(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['whoami']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.whoami.$get(args, options))
}

export async function postWWorkspaceGithubAppToken(
  args: InferRequestType<(typeof client.w)[':workspace']['github_app']['token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].github_app.token.$post(args, options))
}

export async function getWWorkspaceGithubAppRepoArchivePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['github_app']['repo_archive'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].github_app.repo_archive[':path'].$get(args, options),
  )
}

export async function postWWorkspaceGithubAppInstallFromWorkspace(
  args: InferRequestType<
    (typeof client.w)[':workspace']['github_app']['install_from_workspace']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].github_app.install_from_workspace.$post(args, options),
  )
}

export async function deleteWWorkspaceGithubAppInstallationInstallationId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['github_app']['installation'][':installation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].github_app.installation[':installation_id'].$delete(args, options),
  )
}

export async function getWWorkspaceGithubAppExportInstallationId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['github_app']['export'][':installationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].github_app.export[':installationId'].$get(args, options),
  )
}

export async function postWWorkspaceGithubAppImport(
  args: InferRequestType<(typeof client.w)[':workspace']['github_app']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].github_app.import.$post(args, options))
}

export async function postWWorkspaceGitSyncGitlabProjects(
  args: InferRequestType<
    (typeof client.w)[':workspace']['git_sync']['gitlab']['projects']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].git_sync.gitlab.projects.$post(args, options))
}

export async function getWWorkspaceGitSyncCredentialOrigin(
  args: InferRequestType<
    (typeof client.w)[':workspace']['git_sync']['credential']['origin']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].git_sync.credential.origin.$get(args, options))
}

export async function postWWorkspaceGitSyncCredential(
  args: InferRequestType<(typeof client.w)[':workspace']['git_sync']['credential']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].git_sync.credential.$post(args, options))
}

export async function postWWorkspaceGithubAppGhesInstallationCallback(
  args: InferRequestType<
    (typeof client.w)[':workspace']['github_app']['ghes_installation_callback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].github_app.ghes_installation_callback.$post(args, options),
  )
}

export async function getGithubAppGhesConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.github_app.ghes_config.$get(undefined, options))
}

export async function getGithubAppGhesDiscover(options?: ClientRequestOptions) {
  return await parseResponse(client.github_app.ghes.discover.$get(undefined, options))
}

export async function postGithubAppGhesAssign(
  args: InferRequestType<typeof client.github_app.ghes.assign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.github_app.ghes.assign.$post(args, options))
}

export async function deleteGithubAppGhesAssignWorkspaceIdInstallationId(
  args: InferRequestType<
    (typeof client.github_app.ghes.assign)[':workspace_id'][':installation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.github_app.ghes.assign[':workspace_id'][':installation_id'].$delete(args, options),
  )
}

export async function postUsersAcceptInvite(
  args: InferRequestType<typeof client.users.accept_invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.accept_invite.$post(args, options))
}

export async function postUsersDeclineInvite(
  args: InferRequestType<typeof client.users.decline_invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.decline_invite.$post(args, options))
}

export async function postWWorkspaceWorkspacesInviteUser(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['invite_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.invite_user.$post(args, options))
}

export async function postWWorkspaceWorkspacesAddUser(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['add_user']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.add_user.$post(args, options))
}

export async function postWWorkspaceWorkspacesCreateServiceAccount(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['create_service_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.create_service_account.$post(args, options),
  )
}

export async function postWWorkspaceUsersImpersonateServiceAccount(
  args: InferRequestType<
    (typeof client.w)[':workspace']['users']['impersonate_service_account']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].users.impersonate_service_account.$post(args, options),
  )
}

export async function postWWorkspaceUsersExitImpersonation(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['exit_impersonation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.exit_impersonation.$post(args, options))
}

export async function postWWorkspaceWorkspacesDeleteInvite(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['delete_invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.delete_invite.$post(args, options))
}

export async function postWWorkspaceWorkspacesArchive(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['archive']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.archive.$post(args, options))
}

export async function postWorkspacesUnarchiveWorkspace(
  args: InferRequestType<(typeof client.workspaces.unarchive)[':workspace']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.unarchive[':workspace'].$post(args, options))
}

export async function deleteWorkspacesDeleteWorkspace(
  args: InferRequestType<(typeof client.workspaces.delete)[':workspace']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workspaces.delete[':workspace'].$delete(args, options))
}

export async function postWWorkspaceWorkspacesLeave(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['leave']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.leave.$post(args, options))
}

export async function getWWorkspaceWorkspacesGetWorkspaceName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_workspace_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_workspace_name.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesChangeWorkspaceName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['change_workspace_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.change_workspace_name.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesChangeWorkspaceId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['change_workspace_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.change_workspace_id.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesChangeWorkspaceColor(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['change_workspace_color']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.change_workspace_color.$post(args, options),
  )
}

export async function getWWorkspaceUsersWhoisUsername(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['whois'][':username']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.whois[':username'].$get(args, options))
}

export async function postWWorkspaceWorkspacesOperatorSettings(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['operator_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.operator_settings.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesRoles(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.roles.$get(args, options))
}

export async function postWWorkspaceWorkspacesRoleOverrides(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['role_overrides']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.role_overrides.$post(args, options))
}

export async function getWWorkspaceWorkspacesCompareTargetWorkspaceId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['compare'][':target_workspace_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.compare[':target_workspace_id'].$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesSeedFullDiffTargetWorkspaceId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['seed_full_diff'][':target_workspace_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.seed_full_diff[':target_workspace_id'].$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesResetDiffTallyForkWorkspaceId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['reset_diff_tally'][':fork_workspace_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.reset_diff_tally[':fork_workspace_id'].$post(args, options),
  )
}

export async function getUsersExistsEmail(
  args: InferRequestType<(typeof client.users.exists)[':email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.exists[':email'].$get(args, options))
}

export async function getUsersListAsSuperAdmin(
  args: InferRequestType<typeof client.users.list_as_super_admin.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.list_as_super_admin.$get(args, options))
}

export async function getWWorkspaceWorkspacesListPendingInvites(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['list_pending_invites']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.list_pending_invites.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetPublicSettings(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_public_settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_public_settings.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetSettings(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['get_settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.get_settings.$get(args, options))
}

export async function getWWorkspaceWorkspacesGetDeployTo(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['get_deploy_to']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.get_deploy_to.$get(args, options))
}

export async function getWWorkspaceRemoteDeployTarget(
  args: InferRequestType<(typeof client.w)[':workspace']['remote_deploy']['target']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].remote_deploy.target.$get(args, options))
}

export async function postWWorkspaceRemoteDeployTarget(
  args: InferRequestType<(typeof client.w)[':workspace']['remote_deploy']['target']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].remote_deploy.target.$post(args, options))
}

export async function postWWorkspaceRemoteDeployConnect(
  args: InferRequestType<(typeof client.w)[':workspace']['remote_deploy']['connect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].remote_deploy.connect.$post(args, options))
}

export async function postWWorkspaceRemoteDeployDisconnect(
  args: InferRequestType<(typeof client.w)[':workspace']['remote_deploy']['disconnect']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].remote_deploy.disconnect.$post(args, options))
}

export async function getWWorkspaceWorkspacesIsPremium(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['is_premium']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.is_premium.$get(args, options))
}

export async function getWWorkspaceWorkspacesBillableSeats(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['billable_seats']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.billable_seats.$get(args, options))
}

export async function getWWorkspaceWorkspacesPremiumInfo(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['premium_info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.premium_info.$get(args, options))
}

export async function getWWorkspaceWorkspacesThresholdAlert(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['threshold_alert']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.threshold_alert.$get(args, options))
}

export async function postWWorkspaceWorkspacesThresholdAlert(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['threshold_alert']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.threshold_alert.$post(args, options))
}

export async function postWWorkspaceWorkspacesRebuildDependencyMap(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['rebuild_dependency_map']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.rebuild_dependency_map.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetDependentsImportedPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_dependents'][':imported_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_dependents[':imported_path'].$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetImportsImporterPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_imports'][':importer_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_imports[':importer_path'].$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesGetDependentsAmounts(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_dependents_amounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_dependents_amounts.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetDependencyMap(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_dependency_map']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_dependency_map.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditSlackCommand(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_slack_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_slack_command.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesSlackOauthConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['slack_oauth_config']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.slack_oauth_config.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesSlackOauthConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['slack_oauth_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.slack_oauth_config.$post(args, options),
  )
}

export async function deleteWWorkspaceWorkspacesSlackOauthConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['slack_oauth_config']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.slack_oauth_config.$delete(args, options),
  )
}

export async function postWWorkspaceWorkspacesSlackSigningSecret(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['slack_signing_secret']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.slack_signing_secret.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditTeamsCommand(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_teams_command']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_teams_command.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesAvailableTeamsIds(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['available_teams_ids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.available_teams_ids.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesAvailableTeamsChannels(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['available_teams_channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.available_teams_channels.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesConnectTeams(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['connect_teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.connect_teams.$post(args, options))
}

export async function postWWorkspaceWorkspacesConnectSlack(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['connect_slack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.connect_slack.$post(args, options))
}

export async function postWWorkspaceWorkspacesRunSlackMessageTestJob(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['run_slack_message_test_job']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.run_slack_message_test_job.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesRunTeamsMessageTestJob(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['run_teams_message_test_job']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.run_teams_message_test_job.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditAutoInvite(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_auto_invite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_auto_invite.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditInstanceGroups(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_instance_groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_instance_groups.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditWebhook(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['edit_webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.edit_webhook.$post(args, options))
}

export async function postWWorkspaceWorkspacesEditCopilotConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_copilot_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_copilot_config.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesSettingsDocument(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['settings_document']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.settings_document.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesSettingsDocument(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['settings_document']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.settings_document.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetCopilotSettingsState(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_copilot_settings_state']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_copilot_settings_state.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetCopilotInfo(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['get_copilot_info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.get_copilot_info.$get(args, options))
}

export async function postWWorkspaceWorkspacesEditErrorHandler(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_error_handler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_error_handler.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditVariableExpirationHandler(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_variable_expiration_handler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_variable_expiration_handler.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditSuccessHandler(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_success_handler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_success_handler.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditLargeFileStorageConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_large_file_storage_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_large_file_storage_config.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditDbtWarehouses(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_dbt_warehouses']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_dbt_warehouses.$post(args, options),
  )
}

export async function postWWorkspaceDbtRunProgress(
  args: InferRequestType<(typeof client.w)[':workspace']['dbt']['run_progress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].dbt.run_progress.$post(args, options))
}

export async function getWWorkspaceDbtWarehouseName(
  args: InferRequestType<(typeof client.w)[':workspace']['dbt']['warehouse'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].dbt.warehouse[':name'].$get(args, options))
}

export async function getWWorkspaceDbtWarehouseExistsName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['dbt']['warehouse_exists'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].dbt.warehouse_exists[':name'].$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesListDucklakes(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['list_ducklakes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.list_ducklakes.$get(args, options))
}

export async function getWWorkspaceDataMetricsList(
  args: InferRequestType<(typeof client.w)[':workspace']['data_metrics']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].data_metrics.list.$get(args, options))
}

export async function getWWorkspaceWorkspacesListDatatables(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['list_datatables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.list_datatables.$get(args, options))
}

export async function getWWorkspaceWorkspacesDatatablePermissionsDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_permissions'][':datatable_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_permissions[':datatable_name'].$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesDatatablePermissionsDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_permissions'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_permissions[':datatable_name'].$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesDatatableAclDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_acl'][':datatable_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_acl[':datatable_name'].$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesDatatableAclDatatableNamePlan(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_acl'][':datatable_name']['plan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_acl[':datatable_name'].plan.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesDatatableAclDatatableNameApply(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_acl'][':datatable_name']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_acl[':datatable_name'].apply.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesDatatableUsableRolesDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_usable_roles'][':datatable_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_usable_roles[':datatable_name'].$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesListDatatableSchemas(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['list_datatable_schemas']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.list_datatable_schemas.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesTestDatatableConnectionDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['test_datatable_connection'][':datatable_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.test_datatable_connection[':datatable_name'].$get(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceWorkspacesListDatatableTables(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['list_datatable_tables']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.list_datatable_tables.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesGetDatatableTableSchema(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_datatable_table_schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_datatable_table_schema.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditDucklakeConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_ducklake_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_ducklake_config.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditDatatableConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_datatable_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_datatable_config.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesRunDatatableMigrationsDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['run_datatable_migrations'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.run_datatable_migrations[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceWorkspacesRollbackDatatableMigrationsDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['rollback_datatable_migrations'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.rollback_datatable_migrations[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceWorkspacesListDatatableMigrations(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['list_datatable_migrations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.list_datatable_migrations.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesDatatableMigrationsStatusDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['datatable_migrations_status'][':datatable_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.datatable_migrations_status[':datatable_name'].$get(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceWorkspacesEnableDatatableMigrationsDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['enable_datatable_migrations'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.enable_datatable_migrations[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceWorkspacesDisableDatatableMigrationsDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['disable_datatable_migrations'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.disable_datatable_migrations[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceWorkspacesCreateDatatableMigrationDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['create_datatable_migration'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.create_datatable_migration[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function deleteWWorkspaceWorkspacesDeleteDatatableMigrationDatatableNameTimestamp(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['delete_datatable_migration'][':datatable_name'][':timestamp']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.delete_datatable_migration[':datatable_name'][
      ':timestamp'
    ].$delete(args, options),
  )
}

export async function postWWorkspaceWorkspacesUpsertDatatableMigrationDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['upsert_datatable_migration'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.upsert_datatable_migration[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceWorkspacesGenerateInitialDatatableMigrationDatatableName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['generate_initial_datatable_migration'][':datatable_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.generate_initial_datatable_migration[':datatable_name'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceWorkspacesCreatePgDatabase(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['create_pg_database']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.create_pg_database.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesDropForkedDatatableDatabases(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['drop_forked_datatable_databases']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.drop_forked_datatable_databases.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesDropForkedDucklakeNamespaces(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['drop_forked_ducklake_namespaces']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.drop_forked_ducklake_namespaces.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesImportPgDatabase(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['import_pg_database']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.import_pg_database.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesExportPgSchema(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['export_pg_schema']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.export_pg_schema.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesGetDatatableFullSchema(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_datatable_full_schema']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_datatable_full_schema.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesGitSyncEnabled(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['git_sync_enabled']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.git_sync_enabled.$get(args, options))
}

export async function getWWorkspaceWorkspacesGitSyncDeployMode(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['git_sync_deploy_mode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.git_sync_deploy_mode.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditGitSyncConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_git_sync_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_git_sync_config.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditGitSyncRepository(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_git_sync_repository']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_git_sync_repository.$post(args, options),
  )
}

export async function deleteWWorkspaceWorkspacesDeleteGitSyncRepository(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['delete_git_sync_repository']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.delete_git_sync_repository.$delete(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditDeployUiConfig(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_deploy_ui_config']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_deploy_ui_config.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditDefaultApp(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_default_app']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_default_app.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditAddAdminsAndDevelopersToForks(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_add_admins_and_developers_to_forks']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_add_admins_and_developers_to_forks.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesEditGuestJwtKey(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['edit_guest_jwt_key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.edit_guest_jwt_key.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesGuestUsage(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['guest_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.guest_usage.$get(args, options))
}

export async function getWWorkspaceWorkspacesDefaultScripts(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['default_scripts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.default_scripts.$get(args, options))
}

export async function postWWorkspaceWorkspacesDefaultScripts(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['default_scripts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.default_scripts.$post(args, options))
}

export async function postWWorkspaceWorkspacesSetEnvironmentVariable(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['set_environment_variable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.set_environment_variable.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesEncryptionKey(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['encryption_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.encryption_key.$get(args, options))
}

export async function postWWorkspaceWorkspacesEncryptionKey(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['encryption_key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.encryption_key.$post(args, options))
}

export async function getWWorkspaceWorkspacesDefaultApp(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['default_app']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.default_app.$get(args, options))
}

export async function getWWorkspaceWorkspacesUsage(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.usage.$get(args, options))
}

export async function getWWorkspaceWorkspacesUsedTriggers(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['used_triggers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.used_triggers.$get(args, options))
}

export async function getWWorkspaceUsersList(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.list.$get(args, options))
}

export async function getWWorkspaceUsersListAddable(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['list_addable']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.list_addable.$get(args, options))
}

export async function getWWorkspaceUsersListUsage(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['list_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.list_usage.$get(args, options))
}

export async function getWWorkspaceUsersListUsernames(
  args: InferRequestType<(typeof client.w)[':workspace']['users']['list_usernames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].users.list_usernames.$get(args, options))
}

export async function getWWorkspaceUsersUsernameToEmailUsername(
  args: InferRequestType<
    (typeof client.w)[':workspace']['users']['username_to_email'][':username']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].users.username_to_email[':username'].$get(args, options),
  )
}

export async function getTokensListScopes(options?: ClientRequestOptions) {
  return await parseResponse(client.tokens.list.scopes.$get(undefined, options))
}

export async function postUsersTokensCreate(
  args: InferRequestType<typeof client.users.tokens.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.create.$post(args, options))
}

export async function postUsersTokensImpersonate(
  args: InferRequestType<typeof client.users.tokens.impersonate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.impersonate.$post(args, options))
}

export async function postUsersLoginLinks(
  args: InferRequestType<typeof client.users.login_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.login_links.$post(args, options))
}

export async function getUsersCloudTrialOffer(options?: ClientRequestOptions) {
  return await parseResponse(client.users.cloud_trial_offer.$get(undefined, options))
}

export async function postUsersCloudTrialOffer(
  args: InferRequestType<typeof client.users.cloud_trial_offer.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.cloud_trial_offer.$post(args, options))
}

export async function postUsersCloudTrialOfferGo(options?: ClientRequestOptions) {
  return await parseResponse(client.users.cloud_trial_offer.go.$post(undefined, options))
}

export async function getUsersOnboardingProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.users.onboarding_profile.$get(undefined, options))
}

export async function postUsersOnboardingProfile(
  args: InferRequestType<typeof client.users.onboarding_profile.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.onboarding_profile.$post(args, options))
}

export async function deleteUsersTokensDeleteTokenPrefix(
  args: InferRequestType<(typeof client.users.tokens.delete)[':token_prefix']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.delete[':token_prefix'].$delete(args, options))
}

export async function postUsersTokensUpdateScopesTokenPrefix(
  args: InferRequestType<(typeof client.users.tokens.update_scopes)[':token_prefix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users.tokens.update_scopes[':token_prefix'].$post(args, options),
  )
}

export async function postUsersTokensUpdateLabelTokenPrefix(
  args: InferRequestType<(typeof client.users.tokens.update_label)[':token_prefix']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.update_label[':token_prefix'].$post(args, options))
}

export async function getUsersTokensList(
  args: InferRequestType<typeof client.users.tokens.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.tokens.list.$get(args, options))
}

export async function getOidcSigningStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.oidc.signing_status.$get(undefined, options))
}

export async function postWWorkspaceOidcTokenAudience(
  args: InferRequestType<(typeof client.w)[':workspace']['oidc']['token'][':audience']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].oidc.token[':audience'].$post(args, options))
}

export async function postWWorkspaceVariablesCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.create.$post(args, options))
}

export async function postWWorkspaceVariablesEncrypt(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['encrypt']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.encrypt.$post(args, options))
}

export async function getWWorkspaceVariablesExternalSecretPrefixes(
  args: InferRequestType<
    (typeof client.w)[':workspace']['variables']['external_secret_prefixes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].variables.external_secret_prefixes.$get(args, options),
  )
}

export async function deleteWWorkspaceVariablesDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['variables']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].variables.delete[':path'].$delete(args, options),
  )
}

export async function deleteWWorkspaceVariablesDeleteBulk(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['delete_bulk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.delete_bulk.$delete(args, options))
}

export async function postWWorkspaceVariablesUpdatePath(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['update'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.update[':path'].$post(args, options))
}

export async function getWWorkspaceVariablesGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.get[':path'].$get(args, options))
}

export async function getWWorkspaceVariablesGetValuePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['variables']['get_value'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].variables.get_value[':path'].$get(args, options),
  )
}

export async function getWWorkspaceVariablesExistsPath(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['exists'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.exists[':path'].$get(args, options))
}

export async function getWWorkspaceVariablesList(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.list.$get(args, options))
}

export async function getWWorkspaceVariablesListContextual(
  args: InferRequestType<(typeof client.w)[':workspace']['variables']['list_contextual']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].variables.list_contextual.$get(args, options))
}

export async function getWWorkspaceWorkspacesGetSecondaryStorageNames(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['get_secondary_storage_names']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.get_secondary_storage_names.$get(args, options),
  )
}

export async function getWWorkspaceWorkspacesCriticalAlerts(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['critical_alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.critical_alerts.$get(args, options))
}

export async function postWWorkspaceWorkspacesCriticalAlertsIdAcknowledge(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['critical_alerts'][':id']['acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.critical_alerts[':id'].acknowledge.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesCriticalAlertsAcknowledgeAll(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['critical_alerts']['acknowledge_all']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.critical_alerts.acknowledge_all.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesCriticalAlertsMute(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['critical_alerts']['mute']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.critical_alerts.mute.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesProtectionRules(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['protection_rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.protection_rules.$get(args, options))
}

export async function postWWorkspaceWorkspacesProtectionRules(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['protection_rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.protection_rules.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesProtectionRulesRuleName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['protection_rules'][':rule_name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.protection_rules[':rule_name'].$post(args, options),
  )
}

export async function deleteWWorkspaceWorkspacesProtectionRulesRuleName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['protection_rules'][':rule_name']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.protection_rules[':rule_name'].$delete(args, options),
  )
}

export async function getWWorkspaceDeploymentRequestEligibleDeployers(
  args: InferRequestType<
    (typeof client.w)[':workspace']['deployment_request']['eligible_deployers']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].deployment_request.eligible_deployers.$get(args, options),
  )
}

export async function getWWorkspaceDeploymentRequestOpen(
  args: InferRequestType<(typeof client.w)[':workspace']['deployment_request']['open']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].deployment_request.open.$get(args, options))
}

export async function postWWorkspaceDeploymentRequest(
  args: InferRequestType<(typeof client.w)[':workspace']['deployment_request']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].deployment_request.$post(args, options))
}

export async function postWWorkspaceDeploymentRequestIdCancel(
  args: InferRequestType<
    (typeof client.w)[':workspace']['deployment_request'][':id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].deployment_request[':id'].cancel.$post(args, options),
  )
}

export async function postWWorkspaceDeploymentRequestIdCloseMerged(
  args: InferRequestType<
    (typeof client.w)[':workspace']['deployment_request'][':id']['close_merged']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].deployment_request[':id'].close_merged.$post(args, options),
  )
}

export async function postWWorkspaceDeploymentRequestIdComment(
  args: InferRequestType<
    (typeof client.w)[':workspace']['deployment_request'][':id']['comment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].deployment_request[':id'].comment.$post(args, options),
  )
}

export async function postWWorkspaceWorkspacesLogFeatureUsage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['log_feature_usage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.log_feature_usage.$post(args, options),
  )
}

export async function getWWorkspaceWorkspacesCloudQuotas(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['cloud_quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.cloud_quotas.$get(args, options))
}

export async function postWWorkspaceWorkspacesPruneVersions(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['prune_versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.prune_versions.$post(args, options))
}

export async function getWWorkspaceWorkspacesListWsSpecific(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['list_ws_specific']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.list_ws_specific.$get(args, options))
}

export async function getWWorkspaceWorkspacesListWsSpecificVersions(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['list_ws_specific_versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.list_ws_specific_versions.$get(args, options),
  )
}

export async function postWWorkspaceWorkspacesSetWsSpecific(
  args: InferRequestType<(typeof client.w)[':workspace']['workspaces']['set_ws_specific']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspaces.set_ws_specific.$post(args, options))
}

export async function postWWorkspaceWorkspacesPublicAppRateLimit(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspaces']['public_app_rate_limit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspaces.public_app_rate_limit.$post(args, options),
  )
}

export async function postOauthLoginCallbackClientName(
  args: InferRequestType<(typeof client.oauth.login_callback)[':client_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.login_callback[':client_name'].$post(args, options))
}

export async function postWWorkspaceOauthConnectSlackCallback(
  args: InferRequestType<
    (typeof client.w)[':workspace']['oauth']['connect_slack_callback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].oauth.connect_slack_callback.$post(args, options),
  )
}

export async function postOauthConnectSlackCallback(
  args: InferRequestType<typeof client.oauth.connect_slack_callback.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.connect_slack_callback.$post(args, options))
}

export async function postOauthConnectSlackInstance(
  args: InferRequestType<typeof client.oauth.connect_slack_instance.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.connect_slack_instance.$post(args, options))
}

export async function postOauthConnectCallbackClientName(
  args: InferRequestType<(typeof client.oauth.connect_callback)[':client_name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.connect_callback[':client_name'].$post(args, options))
}

export async function postWWorkspaceOauthCreateAccount(
  args: InferRequestType<(typeof client.w)[':workspace']['oauth']['create_account']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].oauth.create_account.$post(args, options))
}

export async function postWWorkspaceOauthConnectClientCredentialsClient(
  args: InferRequestType<
    (typeof client.w)[':workspace']['oauth']['connect_client_credentials'][':client']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].oauth.connect_client_credentials[':client'].$post(args, options),
  )
}

export async function postWWorkspaceOauthRefreshTokenId(
  args: InferRequestType<(typeof client.w)[':workspace']['oauth']['refresh_token'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].oauth.refresh_token[':id'].$post(args, options))
}

export async function postWWorkspaceOauthDisconnectId(
  args: InferRequestType<(typeof client.w)[':workspace']['oauth']['disconnect'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].oauth.disconnect[':id'].$post(args, options))
}

export async function postWWorkspaceOauthDisconnectSlack(
  args: InferRequestType<(typeof client.w)[':workspace']['oauth']['disconnect_slack']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].oauth.disconnect_slack.$post(args, options))
}

export async function postWWorkspaceOauthDisconnectTeams(
  args: InferRequestType<(typeof client.w)[':workspace']['oauth']['disconnect_teams']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].oauth.disconnect_teams.$post(args, options))
}

export async function getOauthListLogins(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.list_logins.$get(undefined, options))
}

export async function getOauthListConnects(options?: ClientRequestOptions) {
  return await parseResponse(client.oauth.list_connects.$get(undefined, options))
}

export async function getOauthGetConnectClient(
  args: InferRequestType<(typeof client.oauth.get_connect)[':client']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.get_connect[':client'].$get(args, options))
}

export async function postOauthTestClientCredentials(
  args: InferRequestType<typeof client.oauth.test_client_credentials.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth.test_client_credentials.$post(args, options))
}

export async function postTeamsActivities(
  args: InferRequestType<typeof client.teams.activities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teams.activities.$post(args, options))
}

export async function postWWorkspaceResourcesCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.create.$post(args, options))
}

export async function deleteWWorkspaceResourcesDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.delete[':path'].$delete(args, options),
  )
}

export async function deleteWWorkspaceResourcesDeleteBulk(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['delete_bulk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.delete_bulk.$delete(args, options))
}

export async function postWWorkspaceResourcesUpdatePath(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['update'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.update[':path'].$post(args, options))
}

export async function postWWorkspaceResourcesUpdateValuePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['update_value'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.update_value[':path'].$post(args, options),
  )
}

export async function getWWorkspaceResourcesHistoryPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['history']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.history.p[':path'].$get(args, options),
  )
}

export async function deleteWWorkspaceResourcesHistoryPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['history']['p'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.history.p[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceResourcesHistoryVId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['history']['v'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.history.v[':id'].$get(args, options))
}

export async function postWWorkspaceResourcesHistoryRestoreVId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['history']['restore']['v'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.history.restore.v[':id'].$post(args, options),
  )
}

export async function getWWorkspaceResourcesGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.get[':path'].$get(args, options))
}

export async function getWWorkspaceResourcesGetValueInterpolatedPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['get_value_interpolated'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.get_value_interpolated[':path'].$get(args, options),
  )
}

export async function getWWorkspaceResourcesGetValuePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['get_value'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.get_value[':path'].$get(args, options),
  )
}

export async function getWWorkspaceResourcesGitCommitHashPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['git_commit_hash'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.git_commit_hash[':path'].$get(args, options),
  )
}

export async function getWWorkspaceResourcesExistsPath(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['exists'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.exists[':path'].$get(args, options))
}

export async function getWWorkspaceResourcesList(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.list.$get(args, options))
}

export async function getWWorkspaceResourcesListSearch(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['list_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.list_search.$get(args, options))
}

export async function getWWorkspaceResourcesMcpToolsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['mcp_tools'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.mcp_tools[':path'].$get(args, options),
  )
}

export async function postWWorkspaceResourcesMcpCallToolPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['mcp_call_tool'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.mcp_call_tool[':path'].$post(args, options),
  )
}

export async function getWWorkspaceResourcesListNamesName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['list_names'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.list_names[':name'].$get(args, options),
  )
}

export async function postWWorkspaceResourcesTypeCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['type']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.type.create.$post(args, options))
}

export async function getWWorkspaceResourcesFileResourceTypeToFileExtMap(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['file_resource_type_to_file_ext_map']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.file_resource_type_to_file_ext_map.$get(args, options),
  )
}

export async function deleteWWorkspaceResourcesTypeDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.type.delete[':path'].$delete(args, options),
  )
}

export async function postWWorkspaceResourcesTypeUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.type.update[':path'].$post(args, options),
  )
}

export async function getWWorkspaceResourcesTypeGetPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['get'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.type.get[':path'].$get(args, options))
}

export async function getWWorkspaceResourcesTypeExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.type.exists[':path'].$get(args, options),
  )
}

export async function getWWorkspaceResourcesTypeList(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['type']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.type.list.$get(args, options))
}

export async function getWWorkspaceResourcesTypeListnames(
  args: InferRequestType<(typeof client.w)[':workspace']['resources']['type']['listnames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.type.listnames.$get(args, options))
}

export async function getWWorkspaceResourcesTypeResourceCounts(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['resource_counts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.type.resource_counts.$get(args, options),
  )
}

export async function getWWorkspaceResourcesTypeHubInfo(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['hub']['info']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].resources.type.hub.info.$get(args, options))
}

export async function postWWorkspaceResourcesTypeHubPickName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['resources']['type']['hub']['pick'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].resources.type.hub.pick[':name'].$post(args, options),
  )
}

export async function getWWorkspaceNpmProxyConfig(
  args: InferRequestType<(typeof client.w)[':workspace']['npm_proxy']['config']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].npm_proxy.config.$get(args, options))
}

export async function getWWorkspaceNpmProxyMetadataPackage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['npm_proxy']['metadata'][':package']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].npm_proxy.metadata[':package'].$get(args, options),
  )
}

export async function getWWorkspaceNpmProxyResolvePackage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['npm_proxy']['resolve'][':package']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].npm_proxy.resolve[':package'].$get(args, options),
  )
}

export async function getWWorkspaceNpmProxyFiletreePackageVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['npm_proxy']['filetree'][':package'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].npm_proxy.filetree[':package'][':version'].$get(args, options),
  )
}

export async function getWWorkspaceNpmProxyFilePackageVersionFilepath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['npm_proxy']['file'][':package'][':version'][':filepath']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].npm_proxy.file[':package'][':version'][':filepath'].$get(args, options),
  )
}

export async function getWWorkspaceNpmProxyTarballPackageVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['npm_proxy']['tarball'][':package'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].npm_proxy.tarball[':package'][':version'].$get(args, options),
  )
}

export async function getWWorkspaceEmbeddingsQueryResourceTypes(
  args: InferRequestType<
    (typeof client.w)[':workspace']['embeddings']['query_resource_types']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].embeddings.query_resource_types.$get(args, options),
  )
}

export async function getIntegrationsHubList(
  args: InferRequestType<typeof client.integrations.hub.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.hub.list.$get(args, options))
}

export async function getIntegrationsHubAppMeta(
  args: InferRequestType<(typeof client.integrations.hub)[':app']['meta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.integrations.hub[':app'].meta.$get(args, options))
}

export async function getFlowsHubList(options?: ClientRequestOptions) {
  return await parseResponse(client.flows.hub.list.$get(undefined, options))
}

export async function getFlowsHubGetId(
  args: InferRequestType<(typeof client.flows.hub.get)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.hub.get[':id'].$get(args, options))
}

export async function getAppsHubList(options?: ClientRequestOptions) {
  return await parseResponse(client.apps.hub.list.$get(undefined, options))
}

export async function getAppsHubGetId(
  args: InferRequestType<(typeof client.apps.hub.get)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.hub.get[':id'].$get(args, options))
}

export async function getAppsHubGetRawId(
  args: InferRequestType<(typeof client.apps.hub.get_raw)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.hub.get_raw[':id'].$get(args, options))
}

export async function getAppsUGuestEntryByCustomPathCustomPath(
  args: InferRequestType<(typeof client.apps_u.guest_entry_by_custom_path)[':custom_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps_u.guest_entry_by_custom_path[':custom_path'].$get(args, options),
  )
}

export async function getAppsUPublicAppByCustomPathCustomPath(
  args: InferRequestType<(typeof client.apps_u.public_app_by_custom_path)[':custom_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps_u.public_app_by_custom_path[':custom_path'].$get(args, options),
  )
}

export async function getAppsUEmbedTokenByCustomPathCustomPath(
  args: InferRequestType<(typeof client.apps_u.embed_token_by_custom_path)[':custom_path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps_u.embed_token_by_custom_path[':custom_path'].$get(args, options),
  )
}

export async function getScriptsHubGetPath(
  args: InferRequestType<(typeof client.scripts.hub.get)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.hub.get[':path'].$get(args, options))
}

export async function getScriptsHubGetFullPath(
  args: InferRequestType<(typeof client.scripts.hub.get_full)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.hub.get_full[':path'].$get(args, options))
}

export async function getScriptsHubPickPath(
  args: InferRequestType<(typeof client.scripts.hub.pick)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.hub.pick[':path'].$get(args, options))
}

export async function getScriptsHubTop(
  args: InferRequestType<typeof client.scripts.hub.top.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scripts.hub.top.$get(args, options))
}

export async function getEmbeddingsQueryHubScripts(
  args: InferRequestType<typeof client.embeddings.query_hub_scripts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.embeddings.query_hub_scripts.$get(args, options))
}

export async function getWWorkspaceScriptsListSearch(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['list_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.list_search.$get(args, options))
}

export async function getWWorkspaceScriptsList(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.list.$get(args, options))
}

export async function getWWorkspaceScriptsListPaths(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['list_paths']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.list_paths.$get(args, options))
}

export async function getWWorkspaceDraftsList(
  args: InferRequestType<(typeof client.w)[':workspace']['drafts']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].drafts.list.$get(args, options))
}

export async function getWWorkspaceDraftsGetKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['drafts']['get'][':kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].drafts.get[':kind'][':path'].$get(args, options),
  )
}

export async function getWWorkspaceDraftsGetOwnKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['drafts']['get_own'][':kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].drafts.get_own[':kind'][':path'].$get(args, options),
  )
}

export async function postWWorkspaceDraftsUpdateKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['drafts']['update'][':kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].drafts.update[':kind'][':path'].$post(args, options),
  )
}

export async function postWWorkspaceDraftsDeleteForUserKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['drafts']['delete_for_user'][':kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].drafts.delete_for_user[':kind'][':path'].$post(args, options),
  )
}

export async function postWWorkspaceDraftsMoveKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['drafts']['move'][':kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].drafts.move[':kind'][':path'].$post(args, options),
  )
}

export async function postWWorkspaceDraftsTransfer(
  args: InferRequestType<(typeof client.w)[':workspace']['drafts']['transfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].drafts.transfer.$post(args, options))
}

export async function postWWorkspaceDraftsMigrateLegacyKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['drafts']['migrate_legacy'][':kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].drafts.migrate_legacy[':kind'][':path'].$post(args, options),
  )
}

export async function postWWorkspaceScriptsCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.create.$post(args, options))
}

export async function postWWorkspaceScriptsUpdatePath(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['update'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.update[':path'].$post(args, options))
}

export async function postWWorkspaceScriptsToggleWorkspaceErrorHandlerPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['toggle_workspace_error_handler']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.toggle_workspace_error_handler.p[':path'].$post(args, options),
  )
}

export async function getWorkersCustomTags(
  args: InferRequestType<typeof client.workers.custom_tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workers.custom_tags.$get(args, options))
}

export async function getWWorkspaceWorkersCustomTags(
  args: InferRequestType<(typeof client.w)[':workspace']['workers']['custom_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workers.custom_tags.$get(args, options))
}

export async function getWorkersGetDefaultTags(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.get_default_tags.$get(undefined, options))
}

export async function getWorkersIsDefaultTagsPerWorkspace(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.is_default_tags_per_workspace.$get(undefined, options))
}

export async function getWorkersDevWorkspaceIsolation(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.dev_workspace_isolation.$get(undefined, options))
}

export async function postWWorkspaceWorkspaceDependenciesCreate(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspace_dependencies']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspace_dependencies.create.$post(args, options),
  )
}

export async function postWWorkspaceWorkspaceDependenciesArchiveLanguage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspace_dependencies']['archive'][':language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspace_dependencies.archive[':language'].$post(args, options),
  )
}

export async function postWWorkspaceWorkspaceDependenciesDeleteLanguage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspace_dependencies']['delete'][':language']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspace_dependencies.delete[':language'].$post(args, options),
  )
}

export async function getWWorkspaceWorkspaceDependenciesList(
  args: InferRequestType<(typeof client.w)[':workspace']['workspace_dependencies']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].workspace_dependencies.list.$get(args, options))
}

export async function getWWorkspaceWorkspaceDependenciesGetLatestLanguage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['workspace_dependencies']['get_latest'][':language']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].workspace_dependencies.get_latest[':language'].$get(args, options),
  )
}

export async function postWWorkspaceScriptsArchivePPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['archive']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.archive.p[':path'].$post(args, options))
}

export async function postWWorkspaceScriptsArchiveHHash(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['archive']['h'][':hash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.archive.h[':hash'].$post(args, options))
}

export async function postWWorkspaceScriptsDeleteHHash(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['delete']['h'][':hash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.delete.h[':hash'].$post(args, options))
}

export async function postWWorkspaceScriptsDeletePPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['delete']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.delete.p[':path'].$post(args, options))
}

export async function deleteWWorkspaceScriptsDeleteBulk(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['delete_bulk']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.delete_bulk.$delete(args, options))
}

export async function getWWorkspaceScriptsGetPPath(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['get']['p'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.get.p[':path'].$get(args, options))
}

export async function getWWorkspaceScriptsGetTriggersCountPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['get_triggers_count'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.get_triggers_count[':path'].$get(args, options),
  )
}

export async function getWWorkspaceScriptsListTokensPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['list_tokens'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.list_tokens[':path'].$get(args, options),
  )
}

export async function getWWorkspaceScriptsHistoryPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['history']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.history.p[':path'].$get(args, options))
}

export async function getWWorkspaceScriptsListPathsFromWorkspaceRunnablePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['list_paths_from_workspace_runnable'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.list_paths_from_workspace_runnable[':path'].$get(args, options),
  )
}

export async function getWWorkspaceScriptsGetLatestVersionPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['get_latest_version'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.get_latest_version[':path'].$get(args, options),
  )
}

export async function postWWorkspaceScriptsHistoryUpdateHHashPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['history_update']['h'][':hash']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.history_update.h[':hash'].p[':path'].$post(args, options),
  )
}

export async function getWWorkspaceScriptsListDedicatedWithDeps(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['list_dedicated_with_deps']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.list_dedicated_with_deps.$get(args, options),
  )
}

export async function getWWorkspaceScriptsRawPPath(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['raw']['p'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.raw.p[':path'].$get(args, options))
}

export async function getScriptsUTokenedRawWorkspaceTokenPath(
  args: InferRequestType<
    (typeof client.scripts_u.tokened_raw)[':workspace'][':token'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.scripts_u.tokened_raw[':workspace'][':token'][':path'].$get(args, options),
  )
}

export async function getWWorkspaceScriptsExistsPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['exists']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.exists.p[':path'].$get(args, options))
}

export async function getWWorkspaceScriptsGetHHash(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['get']['h'][':hash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.get.h[':hash'].$get(args, options))
}

export async function getWWorkspaceScriptsRawHPath(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['raw']['h'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.raw.h[':path'].$get(args, options))
}

export async function getWWorkspaceScriptsDeploymentStatusHHash(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['deployment_status']['h'][':hash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.deployment_status.h[':hash'].$get(args, options),
  )
}

export async function getWWorkspaceScriptsCiTestResultsKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['ci_test_results'][':kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.ci_test_results[':kind'][':path'].$get(args, options),
  )
}

export async function postWWorkspaceScriptsCiTestResultsBatch(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['ci_test_results_batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.ci_test_results_batch.$post(args, options),
  )
}

export async function postWWorkspaceScriptsTriggerCiTestsBatch(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['trigger_ci_tests_batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.trigger_ci_tests_batch.$post(args, options),
  )
}

export async function postWWorkspaceScriptsCheckSchemaContracts(
  args: InferRequestType<
    (typeof client.w)[':workspace']['scripts']['check_schema_contracts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].scripts.check_schema_contracts.$post(args, options),
  )
}

export async function postWWorkspaceScriptsRawTempStore(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['raw_temp']['store']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.raw_temp.store.$post(args, options))
}

export async function postWWorkspaceScriptsRawTempDiff(
  args: InferRequestType<(typeof client.w)[':workspace']['scripts']['raw_temp']['diff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].scripts.raw_temp.diff.$post(args, options))
}

export async function postWWorkspaceJobsListSelectedJobGroups(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['list_selected_job_groups']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.list_selected_job_groups.$post(args, options),
  )
}

export async function postWWorkspaceJobsRunPPath(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['p'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.p[':path'].$post(args, options))
}

export async function getWWorkspaceJobsRunWaitResultPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.p[':path'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunWaitResultPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.p[':path'].$post(args, options),
  )
}

export async function postWWorkspaceJobsRunWaitResultFPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['f'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.f[':path'].$post(args, options),
  )
}

export async function getWWorkspaceJobsRunWaitResultFvVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['fv'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.fv[':version'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunWaitResultFvVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['fv'][':version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.fv[':version'].$post(args, options),
  )
}

export async function getWWorkspaceJobsRunAndStreamFPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['f'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.f[':path'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunAndStreamFPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['f'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.f[':path'].$post(args, options),
  )
}

export async function getWWorkspaceJobsRunAndStreamFvVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['fv'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.fv[':version'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunAndStreamFvVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['fv'][':version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.fv[':version'].$post(args, options),
  )
}

export async function getWWorkspaceJobsRunAndStreamPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.p[':path'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunAndStreamPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.p[':path'].$post(args, options),
  )
}

export async function getWWorkspaceJobsRunAndStreamHHash(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['h'][':hash']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.h[':hash'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunAndStreamHHash(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_and_stream']['h'][':hash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_and_stream.h[':hash'].$post(args, options),
  )
}

export async function getWWorkspaceJobsResultByIdFlowJobIdNodeId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['result_by_id'][':flow_job_id'][':node_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.result_by_id[':flow_job_id'][':node_id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsFlowApprovalStepDetailJobIdStepId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['flow']['approval_step_detail'][':job_id'][':step_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.flow.approval_step_detail[':job_id'][':step_id'].$get(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceJobsJobViewTokenId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['job_view_token'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.job_view_token[':id'].$get(args, options))
}

export async function getWWorkspaceJobsJobPublicViewTokenId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['job_public_view_token'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.job_public_view_token[':id'].$get(args, options),
  )
}

export async function getWWorkspaceFlowsListPaths(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['list_paths']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.list_paths.$get(args, options))
}

export async function getWWorkspaceFlowsListSearch(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['list_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.list_search.$get(args, options))
}

export async function getWWorkspaceRunnablesList(
  args: InferRequestType<(typeof client.w)[':workspace']['runnables']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].runnables.list.$get(args, options))
}

export async function getWWorkspaceRunnablesCounts(
  args: InferRequestType<(typeof client.w)[':workspace']['runnables']['counts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].runnables.counts.$get(args, options))
}

export async function getWWorkspaceFlowsList(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.list.$get(args, options))
}

export async function getWWorkspaceFlowsHistoryPPath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['history']['p'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.history.p[':path'].$get(args, options))
}

export async function getWWorkspaceFlowsGetLatestVersionPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['get_latest_version'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.get_latest_version[':path'].$get(args, options),
  )
}

export async function getWWorkspaceFlowsListPathsFromWorkspaceRunnableRunnableKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['list_paths_from_workspace_runnable'][':runnable_kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.list_paths_from_workspace_runnable[':runnable_kind'][':path'].$get(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceFlowsListPathsLinkingAgentPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['list_paths_linking_agent'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.list_paths_linking_agent[':path'].$get(args, options),
  )
}

export async function getWWorkspaceFlowsGetVVersion(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['get']['v'][':version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.get.v[':version'].$get(args, options))
}

export async function postWWorkspaceFlowsHistoryUpdateVVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['history_update']['v'][':version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.history_update.v[':version'].$post(args, options),
  )
}

export async function getWWorkspaceFlowsGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.get[':path'].$get(args, options))
}

export async function getWWorkspaceFlowsDeploymentStatusPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['deployment_status']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.deployment_status.p[':path'].$get(args, options),
  )
}

export async function getWWorkspaceFlowsGetTriggersCountPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['get_triggers_count'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.get_triggers_count[':path'].$get(args, options),
  )
}

export async function getWWorkspaceFlowsListTokensPath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['list_tokens'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.list_tokens[':path'].$get(args, options))
}

export async function postWWorkspaceFlowsToggleWorkspaceErrorHandlerPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flows']['toggle_workspace_error_handler'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flows.toggle_workspace_error_handler[':path'].$post(args, options),
  )
}

export async function getWWorkspaceFlowsExistsPath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['exists'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.exists[':path'].$get(args, options))
}

export async function postWWorkspaceFlowsCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.create.$post(args, options))
}

export async function postWWorkspaceFlowsUpdatePath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['update'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.update[':path'].$post(args, options))
}

export async function postWWorkspaceFlowsArchivePath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['archive'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.archive[':path'].$post(args, options))
}

export async function deleteWWorkspaceFlowsDeletePath(
  args: InferRequestType<(typeof client.w)[':workspace']['flows']['delete'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flows.delete[':path'].$delete(args, options))
}

export async function getWWorkspaceFlowConversationsList(
  args: InferRequestType<(typeof client.w)[':workspace']['flow_conversations']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].flow_conversations.list.$get(args, options))
}

export async function getWWorkspaceSlackAgentsChannels(
  args: InferRequestType<(typeof client.w)[':workspace']['slack_agents']['channels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].slack_agents.channels.$get(args, options))
}

export async function getWWorkspaceSlackAgentsAvailableChannels(
  args: InferRequestType<
    (typeof client.w)[':workspace']['slack_agents']['available_channels']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].slack_agents.available_channels.$get(args, options),
  )
}

export async function getWWorkspaceSlackAgentsStatus(
  args: InferRequestType<(typeof client.w)[':workspace']['slack_agents']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].slack_agents.status.$get(args, options))
}

export async function getWWorkspaceSlackAgentsAgentChannelsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['slack_agents']['agent_channels'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].slack_agents.agent_channels[':path'].$get(args, options),
  )
}

export async function postWWorkspaceSlackAgentsAgentChannelsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['slack_agents']['agent_channels'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].slack_agents.agent_channels[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceSlackAgentsAgentChannelsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['slack_agents']['agent_channels'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].slack_agents.agent_channels[':path'].$delete(args, options),
  )
}

export async function postWWorkspaceFlowConversationsUpdateConversationId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flow_conversations']['update'][':conversation_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flow_conversations.update[':conversation_id'].$post(args, options),
  )
}

export async function deleteWWorkspaceFlowConversationsDeleteConversationId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flow_conversations']['delete'][':conversation_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flow_conversations.delete[':conversation_id'].$delete(args, options),
  )
}

export async function getWWorkspaceFlowConversationsConversationIdMessages(
  args: InferRequestType<
    (typeof client.w)[':workspace']['flow_conversations'][':conversation_id']['messages']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].flow_conversations[':conversation_id'].messages.$get(args, options),
  )
}

export async function postWWorkspaceAiComplete(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['complete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.complete.$post(args, options))
}

export async function postWWorkspaceAiWebSearch(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['web_search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.web_search.$post(args, options))
}

export async function postWWorkspaceAiWebFetch(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['web_fetch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.web_fetch.$post(args, options))
}

export async function getWWorkspaceAiEvalsDatasetsList(
  args: InferRequestType<(typeof client.w)[':workspace']['ai_evals']['datasets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.datasets.list.$get(args, options))
}

export async function postWWorkspaceAiEvalsDatasetsCreate(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['datasets']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.datasets.create.$post(args, options))
}

export async function getWWorkspaceAiEvalsDatasetsGetPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['datasets']['get'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.datasets.get[':path'].$get(args, options),
  )
}

export async function postWWorkspaceAiEvalsDatasetsUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['datasets']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.datasets.update[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAiEvalsDatasetsDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['datasets']['delete'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.datasets.delete[':path'].$post(args, options),
  )
}

export async function getWWorkspaceAiEvalsCasesListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['cases']['list'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.cases.list[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAiEvalsSubjectState(
  args: InferRequestType<(typeof client.w)[':workspace']['ai_evals']['subject_state']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.subject_state.$get(args, options))
}

export async function getWWorkspaceAiEvalsRunPayload(
  args: InferRequestType<(typeof client.w)[':workspace']['ai_evals']['run_payload']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.run_payload.$get(args, options))
}

export async function getWWorkspaceAiEvalsScorerDefaults(
  args: InferRequestType<(typeof client.w)[':workspace']['ai_evals']['scorer_defaults']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.scorer_defaults.$get(args, options))
}

export async function getWWorkspaceAiEvalsScorersRecent(
  args: InferRequestType<(typeof client.w)[':workspace']['ai_evals']['scorers']['recent']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.scorers.recent.$get(args, options))
}

export async function postWWorkspaceAiEvalsExperimentsRun(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['experiments']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_evals.experiments.run.$post(args, options))
}

export async function postWWorkspaceAiEvalsExperimentsCollect(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['experiments']['collect']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.experiments.collect.$post(args, options),
  )
}

export async function getWWorkspaceAiEvalsExperimentsListAll(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['experiments']['list_all']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.experiments.list_all.$get(args, options),
  )
}

export async function getWWorkspaceAiEvalsExperimentsResultsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_evals']['experiments']['results'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_evals.experiments.results[':path'].$get(args, options),
  )
}

export async function getWWorkspacePathAutocompleteListPaths(
  args: InferRequestType<
    (typeof client.w)[':workspace']['path_autocomplete']['list_paths']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].path_autocomplete.list_paths.$get(args, options),
  )
}

export async function getWWorkspaceRawAppsList(
  args: InferRequestType<(typeof client.w)[':workspace']['raw_apps']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].raw_apps.list.$get(args, options))
}

export async function getWWorkspaceSharedUiGet(
  args: InferRequestType<(typeof client.w)[':workspace']['shared_ui']['get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].shared_ui.get.$get(args, options))
}

export async function getWWorkspaceSharedUiList(
  args: InferRequestType<(typeof client.w)[':workspace']['shared_ui']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].shared_ui.list.$get(args, options))
}

export async function getWWorkspaceSharedUiVersion(
  args: InferRequestType<(typeof client.w)[':workspace']['shared_ui']['version']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].shared_ui.version.$get(args, options))
}

export async function putWWorkspaceSharedUi(
  args: InferRequestType<(typeof client.w)[':workspace']['shared_ui']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].shared_ui.$put(args, options))
}

export async function getWWorkspaceAiUsage(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.usage.$get(args, options))
}

export async function postWWorkspaceAiUsage(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['usage']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.usage.$post(args, options))
}

export async function postWWorkspaceAiSessionToolsName(
  args: InferRequestType<(typeof client.w)[':workspace']['ai_session_tools'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai_session_tools[':name'].$post(args, options))
}

export async function getWWorkspaceAiSessionsList(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['sessions']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.sessions.list.$get(args, options))
}

export async function postWWorkspaceAiSessionsPull(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['sessions']['pull']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.sessions.pull.$post(args, options))
}

export async function postWWorkspaceAiSessionsPush(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['sessions']['push']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.sessions.push.$post(args, options))
}

export async function postWWorkspaceAiSharedArtifactsShare(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_artifacts']['share']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.shared_artifacts.share.$post(args, options))
}

export async function getWWorkspaceAiSharedArtifactsStatus(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_artifacts']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.shared_artifacts.status.$get(args, options))
}

export async function getWWorkspaceAiSharedArtifactsList(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['shared_artifacts']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.shared_artifacts.list.$get(args, options))
}

export async function getWWorkspaceAiSharedArtifactsGetId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_artifacts']['get'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai.shared_artifacts.get[':id'].$get(args, options),
  )
}

export async function deleteWWorkspaceAiSharedArtifactsDeleteId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_artifacts']['delete'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai.shared_artifacts.delete[':id'].$delete(args, options),
  )
}

export async function postWWorkspaceAiSharedSessionsShare(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_sessions']['share']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.shared_sessions.share.$post(args, options))
}

export async function getWWorkspaceAiSharedSessionsStatus(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_sessions']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.shared_sessions.status.$get(args, options))
}

export async function getWWorkspaceAiSharedSessionsList(
  args: InferRequestType<(typeof client.w)[':workspace']['ai']['shared_sessions']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].ai.shared_sessions.list.$get(args, options))
}

export async function postWWorkspaceAiSharedSessionsSetPublicId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_sessions']['set_public'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai.shared_sessions.set_public[':id'].$post(args, options),
  )
}

export async function getWWorkspaceAiUSharedSessionsGetId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai_u']['shared_sessions']['get'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai_u.shared_sessions.get[':id'].$get(args, options),
  )
}

export async function deleteWWorkspaceAiSharedSessionsOpenedId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_sessions']['opened'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai.shared_sessions.opened[':id'].$delete(args, options),
  )
}

export async function deleteWWorkspaceAiSharedSessionsDeleteId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['ai']['shared_sessions']['delete'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].ai.shared_sessions.delete[':id'].$delete(args, options),
  )
}

export async function getWWorkspaceAppsGetDataVSecretWithExtension(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['get_data']['v'][':secretWithExtension']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.get_data.v[':secretWithExtension'].$get(args, options),
  )
}

export async function getWWorkspaceAppsListSearch(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['list_search']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.list_search.$get(args, options))
}

export async function getWWorkspaceAppsList(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.list.$get(args, options))
}

export async function postWWorkspaceAppsCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.create.$post(args, options))
}

export async function postWWorkspaceAppsCreateRaw(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['create_raw']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.create_raw.$post(args, options))
}

export async function getWWorkspaceAppsExistsPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['exists'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.exists[':path'].$get(args, options))
}

export async function getWWorkspaceAppsGetPPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['get']['p'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.get.p[':path'].$get(args, options))
}

export async function postWWorkspaceAppsPreviewSdkToken(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['preview_sdk_token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.preview_sdk_token.$post(args, options))
}

export async function getWWorkspaceAppsEmbedTokenPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['embed_token']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.embed_token.p[':path'].$get(args, options))
}

export async function getWWorkspaceAppsGetLitePath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['get']['lite'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.get.lite[':path'].$get(args, options))
}

export async function getWWorkspaceAppsHistoryPPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['history']['p'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.history.p[':path'].$get(args, options))
}

export async function getWWorkspaceAppsGetLatestVersionPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['get_latest_version'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.get_latest_version[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsListPathsFromWorkspaceRunnableRunnableKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['list_paths_from_workspace_runnable'][':runnable_kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.list_paths_from_workspace_runnable[':runnable_kind'][':path'].$get(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceAppsHistoryUpdateAIdVVersion(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['history_update']['a'][':id']['v'][':version']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.history_update.a[':id'].v[':version'].$post(args, options),
  )
}

export async function getWWorkspaceAppsUGuestEntryPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps_u']['guest_entry'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps_u.guest_entry[':path'].$get(args, options))
}

export async function getWWorkspaceAppsUPublicAppPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps_u']['public_app'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps_u.public_app[':path'].$get(args, options))
}

export async function getWWorkspaceAppsUEmbedTokenSecret(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['embed_token'][':secret']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.embed_token[':secret'].$get(args, options),
  )
}

export async function getWWorkspaceAppsUPublicResourcePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['public_resource'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.public_resource[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsSecretOfPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['secret_of'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.secret_of[':path'].$get(args, options))
}

export async function getWWorkspaceAppsSecretOfLatestVersionPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['secret_of_latest_version'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.secret_of_latest_version[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsGetVId(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['get']['v'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.get.v[':id'].$get(args, options))
}

export async function deleteWWorkspaceAppsDeletePath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['delete'][':path']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.delete[':path'].$delete(args, options))
}

export async function postWWorkspaceAppsUpdatePath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['update'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.update[':path'].$post(args, options))
}

export async function postWWorkspaceAppsCreateRawSource(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['create_raw_source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.create_raw_source.$post(args, options))
}

export async function postWWorkspaceAppsUpdateRawSourcePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['update_raw_source'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.update_raw_source[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAppsUpdateRawPath(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['update_raw'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.update_raw[':path'].$post(args, options))
}

export async function getWWorkspaceAppsCustomPathExistsCustomPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps']['custom_path_exists'][':custom_path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps.custom_path_exists[':custom_path'].$get(args, options),
  )
}

export async function postWWorkspaceAppsSignS3Objects(
  args: InferRequestType<(typeof client.w)[':workspace']['apps']['sign_s3_objects']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps.sign_s3_objects.$post(args, options))
}

export async function postWWorkspaceAppsUExecuteComponentPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['execute_component'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.execute_component[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAppsUUploadS3FilePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['upload_s3_file'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.upload_s3_file[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceAppsUDeleteS3File(
  args: InferRequestType<(typeof client.w)[':workspace']['apps_u']['delete_s3_file']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].apps_u.delete_s3_file.$delete(args, options))
}

export async function getWWorkspaceAppsULoadFileMetadataPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['load_file_metadata'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.load_file_metadata[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsULoadFilePreviewPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['load_file_preview'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.load_file_preview[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsULoadParquetPreviewPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['load_parquet_preview'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.load_parquet_preview[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsULoadCsvPreviewPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['load_csv_preview'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.load_csv_preview[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsULoadTableCountPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['load_table_count'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.load_table_count[':path'].$get(args, options),
  )
}

export async function getWWorkspaceAppsUDownloadS3ParquetFileAsCsvPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['apps_u']['download_s3_parquet_file_as_csv'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].apps_u.download_s3_parquet_file_as_csv[':path'].$get(args, options),
  )
}

export async function postWWorkspaceJobsRunFPath(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['f'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.f[':path'].$post(args, options))
}

export async function postWWorkspaceJobsRunFvVersion(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['fv'][':version']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.fv[':version'].$post(args, options))
}

export async function postWWorkspaceJobsRunBatchRerunJobs(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run']['batch_rerun_jobs']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.batch_rerun_jobs.$post(args, options))
}

export async function postWWorkspaceJobsRestartFId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['restart']['f'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.restart.f[':id'].$post(args, options))
}

export async function postWWorkspaceJobsRunHHash(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['h'][':hash']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.h[':hash'].$post(args, options))
}

export async function postWWorkspaceJobsRunPreview(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.preview.$post(args, options))
}

export async function postWWorkspaceJobsRunInlinePreview(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run_inline']['preview']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run_inline.preview.$post(args, options))
}

export async function postWWorkspaceJobsRunInlinePPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_inline']['p'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run_inline.p[':path'].$post(args, options))
}

export async function postWWorkspaceJobsRunInlineHHash(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_inline']['h'][':hash']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run_inline.h[':hash'].$post(args, options))
}

export async function postWWorkspaceJobsRunWaitResultPreview(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.preview.$post(args, options),
  )
}

export async function postWWorkspaceJobsWorkflowAsCodeJobIdEntrypoint(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['workflow_as_code'][':job_id'][':entrypoint']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.workflow_as_code[':job_id'][':entrypoint'].$post(args, options),
  )
}

export async function postWWorkspaceJobsRunDependencies(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['dependencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.dependencies.$post(args, options))
}

export async function postWWorkspaceJobsRunDependenciesAsync(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run']['dependencies_async']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run.dependencies_async.$post(args, options),
  )
}

export async function postWWorkspaceJobsRunFlowDependenciesAsync(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run']['flow_dependencies_async']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run.flow_dependencies_async.$post(args, options),
  )
}

export async function postWWorkspaceJobsRunFlowTestPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run']['flow_test'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run.flow_test[':path'].$post(args, options),
  )
}

export async function postWWorkspaceJobsRunPreviewFlow(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['preview_flow']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.preview_flow.$post(args, options))
}

export async function postWWorkspaceJobsRunAgentPath(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['agent'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.agent[':path'].$post(args, options))
}

export async function postWWorkspaceJobsRunWaitResultPreviewFlow(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['run_wait_result']['preview_flow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.run_wait_result.preview_flow.$post(args, options),
  )
}

export async function postWWorkspaceJobsRunDynamicSelect(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run']['dynamic_select']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run.dynamic_select.$post(args, options))
}

export async function getWWorkspaceJobsQueueList(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['queue']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.queue.list.$get(args, options))
}

export async function getWWorkspaceJobsQueueCount(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['queue']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.queue.count.$get(args, options))
}

export async function getWWorkspaceJobsOldest(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['oldest']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.oldest.$get(args, options))
}

export async function getWWorkspaceJobsCompletedCount(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['completed']['count']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.count.$get(args, options))
}

export async function getWWorkspaceJobsCompletedCountJobs(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['completed']['count_jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.count_jobs.$get(args, options))
}

export async function getWWorkspaceJobsListFilteredUuids(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['list_filtered_uuids']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.list_filtered_uuids.$get(args, options))
}

export async function getWWorkspaceJobsQueueListFilteredUuids(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['queue']['list_filtered_uuids']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.queue.list_filtered_uuids.$get(args, options),
  )
}

export async function postWWorkspaceJobsQueueRunNowId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['queue']['run_now'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.queue.run_now[':id'].$post(args, options))
}

export async function postWWorkspaceJobsQueueCancelSelection(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['queue']['cancel_selection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.queue.cancel_selection.$post(args, options),
  )
}

export async function getWWorkspaceJobsGetOtelTracesId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['get_otel_traces'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.get_otel_traces[':id'].$get(args, options))
}

export async function postWWorkspaceTriggerTriggerKindResumeSuspendedTriggerJobsTriggerPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['trigger'][':trigger_kind']['resume_suspended_trigger_jobs'][':trigger_path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].trigger[':trigger_kind'].resume_suspended_trigger_jobs[
      ':trigger_path'
    ].$post(args, options),
  )
}

export async function postWWorkspaceTriggerTriggerKindCancelSuspendedTriggerJobsTriggerPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['trigger'][':trigger_kind']['cancel_suspended_trigger_jobs'][':trigger_path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].trigger[':trigger_kind'].cancel_suspended_trigger_jobs[
      ':trigger_path'
    ].$post(args, options),
  )
}

export async function getWWorkspaceJobsCompletedList(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['completed']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.list.$get(args, options))
}

export async function getWWorkspaceJobsCompletedExport(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['completed']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.export.$get(args, options))
}

export async function postWWorkspaceJobsCompletedImport(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['completed']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.import.$post(args, options))
}

export async function getWWorkspaceJobsQueueExport(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['queue']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.queue.export.$get(args, options))
}

export async function postWWorkspaceJobsQueueImport(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['queue']['import']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.queue.import.$post(args, options))
}

export async function postWWorkspaceJobsDelete(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.delete.$post(args, options))
}

export async function getWWorkspaceJobsRecentRuns(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['recent_runs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.recent_runs.$get(args, options))
}

export async function postWWorkspaceJobsRecentRunsHide(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['recent_runs']['hide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.recent_runs.hide.$post(args, options))
}

export async function postWWorkspaceJobsRecentRunsUnhide(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['recent_runs']['unhide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.recent_runs.unhide.$post(args, options))
}

export async function getWWorkspaceJobsList(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.list.$get(args, options))
}

export async function getJobsDbClock(options?: ClientRequestOptions) {
  return await parseResponse(client.jobs.db_clock.$get(undefined, options))
}

export async function getJobsCompletedCountByTag(
  args: InferRequestType<typeof client.jobs.completed.count_by_tag.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.completed.count_by_tag.$get(args, options))
}

export async function getWWorkspaceJobsUGetId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs_u']['get'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.get[':id'].$get(args, options))
}

export async function getWWorkspaceJobsUGetRootJobIdId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_root_job_id'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_root_job_id[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsWorkerIsDrainingId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['worker_is_draining'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.worker_is_draining[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUGetLogsId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs_u']['get_logs'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.get_logs[':id'].$get(args, options))
}

export async function getWWorkspaceJobsUGetFlowAllLogsId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_flow_all_logs'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_flow_all_logs[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUGetFlowAllLogsStructuredId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_flow_all_logs_structured'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_flow_all_logs_structured[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUGetFlowAllResultsId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_flow_all_results'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_flow_all_results[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUGetCompletedLogsTailId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_completed_logs_tail'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_completed_logs_tail[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUGetArgsId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs_u']['get_args'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.get_args[':id'].$get(args, options))
}

export async function postWWorkspaceJobsUQueueGetStartedAtByIds(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['queue']['get_started_at_by_ids']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.queue.get_started_at_by_ids.$post(args, options),
  )
}

export async function getWWorkspaceJobsUGetupdateId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs_u']['getupdate'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.getupdate[':id'].$get(args, options))
}

export async function getWWorkspaceJobsUGetupdateSseId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs_u']['getupdate_sse'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.getupdate_sse[':id'].$get(args, options))
}

export async function getWWorkspaceJobsUGetLogFilePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_log_file'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_log_file[':path'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUGetFlowDebugInfoId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_flow_debug_info'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_flow_debug_info[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUCompletedGetId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['completed']['get'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.completed.get[':id'].$get(args, options))
}

export async function getWWorkspaceJobsUCompletedGetResultId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['completed']['get_result'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.completed.get_result[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUCompletedGetResultMaybeId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['completed']['get_result_maybe'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.completed.get_result_maybe[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUCompletedGetTimingId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['completed']['get_timing'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.completed.get_timing[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUDispatchEventsId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['dispatch_events'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.dispatch_events[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsAssetDispatchEdges(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['asset_dispatch_edges']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.asset_dispatch_edges.$get(args, options))
}

export async function postWWorkspaceJobsCompletedDeleteId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['completed']['delete'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.completed.delete[':id'].$post(args, options),
  )
}

export async function postWWorkspaceJobsCompletedResolve(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['completed']['resolve']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.resolve.$post(args, options))
}

export async function postWWorkspaceJobsCompletedUnresolve(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['completed']['unresolve']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.completed.unresolve.$post(args, options))
}

export async function postWWorkspaceJobsUQueueCancelId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['queue']['cancel'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs_u.queue.cancel[':id'].$post(args, options))
}

export async function postWWorkspaceJobsUQueueCancelPersistentPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['queue']['cancel_persistent'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.queue.cancel_persistent[':path'].$post(args, options),
  )
}

export async function postWWorkspaceJobsUQueueForceCancelId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['queue']['force_cancel'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.queue.force_cancel[':id'].$post(args, options),
  )
}

export async function getWWorkspaceJobsQueuePositionScheduledFor(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['queue']['position'][':scheduled_for']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.queue.position[':scheduled_for'].$get(args, options),
  )
}

export async function getWWorkspaceJobsQueueScheduledForId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['queue']['scheduled_for'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.queue.scheduled_for[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsJobSignatureIdResumeId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['job_signature'][':id'][':resume_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.job_signature[':id'][':resume_id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsResumeUrlsIdResumeId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['resume_urls'][':id'][':resume_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.resume_urls[':id'][':resume_id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsWacApprovalUrlsIdStepKey(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['wac_approval_urls'][':id'][':step_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.wac_approval_urls[':id'][':step_key'].$get(args, options),
  )
}

export async function getWWorkspaceJobsSlackApprovalId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['slack_approval'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.slack_approval[':id'].$get(args, options))
}

export async function getWWorkspaceJobsTeamsApprovalId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['teams_approval'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.teams_approval[':id'].$get(args, options))
}

export async function postWWorkspaceJobsUFlowResumeSuspendedJobId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['flow']['resume_suspended'][':job_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.flow.resume_suspended[':job_id'].$post(args, options),
  )
}

export async function getWWorkspaceJobsUFlowApprovalInfoJobId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['flow']['approval_info'][':job_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.flow.approval_info[':job_id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsUResumeIdResumeIdSignature(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['resume'][':id'][':resume_id'][':signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.resume[':id'][':resume_id'][':signature'].$get(args, options),
  )
}

export async function postWWorkspaceJobsUResumeIdResumeIdSignature(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['resume'][':id'][':resume_id'][':signature']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.resume[':id'][':resume_id'][':signature'].$post(args, options),
  )
}

export async function getWWorkspaceJobsFlowUserStatesIdKey(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['flow']['user_states'][':id'][':key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.flow.user_states[':id'][':key'].$get(args, options),
  )
}

export async function postWWorkspaceJobsFlowUserStatesIdKey(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['flow']['user_states'][':id'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.flow.user_states[':id'][':key'].$post(args, options),
  )
}

export async function postWWorkspaceJobsFlowResumeId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['flow']['resume'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.flow.resume[':id'].$post(args, options))
}

export async function getWWorkspaceJobsUCancelIdResumeIdSignature(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['cancel'][':id'][':resume_id'][':signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.cancel[':id'][':resume_id'][':signature'].$get(args, options),
  )
}

export async function postWWorkspaceJobsUCancelIdResumeIdSignature(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['cancel'][':id'][':resume_id'][':signature']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.cancel[':id'][':resume_id'][':signature'].$post(args, options),
  )
}

export async function getWWorkspaceJobsUGetFlowIdResumeIdSignature(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs_u']['get_flow'][':id'][':resume_id'][':signature']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs_u.get_flow[':id'][':resume_id'][':signature'].$get(args, options),
  )
}

export async function postSchedulesPreview(
  args: InferRequestType<typeof client.schedules.preview.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schedules.preview.$post(args, options))
}

export async function postWWorkspaceSchedulesCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['schedules']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].schedules.create.$post(args, options))
}

export async function postWWorkspaceSchedulesUpdatePath(
  args: InferRequestType<(typeof client.w)[':workspace']['schedules']['update'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].schedules.update[':path'].$post(args, options))
}

export async function postWWorkspaceSchedulesSetenabledPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['schedules']['setenabled'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].schedules.setenabled[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceSchedulesDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['schedules']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].schedules.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceSchedulesGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['schedules']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].schedules.get[':path'].$get(args, options))
}

export async function getWWorkspaceSchedulesExistsPath(
  args: InferRequestType<(typeof client.w)[':workspace']['schedules']['exists'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].schedules.exists[':path'].$get(args, options))
}

export async function getWWorkspaceSchedulesList(
  args: InferRequestType<(typeof client.w)[':workspace']['schedules']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].schedules.list.$get(args, options))
}

export async function getWWorkspaceSchedulesListWithJobs(
  args: InferRequestType<(typeof client.w)[':workspace']['schedules']['list_with_jobs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].schedules.list_with_jobs.$get(args, options))
}

export async function postWWorkspaceSchedulesSetdefaulthandler(
  args: InferRequestType<
    (typeof client.w)[':workspace']['schedules']['setdefaulthandler']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].schedules.setdefaulthandler.$post(args, options),
  )
}

export async function postWWorkspaceOpenapiGenerate(
  args: InferRequestType<(typeof client.w)[':workspace']['openapi']['generate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].openapi.generate.$post(args, options))
}

export async function postWWorkspaceOpenapiDownload(
  args: InferRequestType<(typeof client.w)[':workspace']['openapi']['download']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].openapi.download.$post(args, options))
}

export async function postWWorkspaceHttpTriggersCreateMany(
  args: InferRequestType<(typeof client.w)[':workspace']['http_triggers']['create_many']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].http_triggers.create_many.$post(args, options))
}

export async function postWWorkspaceHttpTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['http_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].http_triggers.create.$post(args, options))
}

export async function postWWorkspaceHttpTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['http_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].http_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceHttpTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['http_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].http_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceHttpTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['http_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].http_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceHttpTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['http_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].http_triggers.list.$get(args, options))
}

export async function getWWorkspaceHttpTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['http_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].http_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceHttpTriggersRouteExists(
  args: InferRequestType<(typeof client.w)[':workspace']['http_triggers']['route_exists']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].http_triggers.route_exists.$post(args, options))
}

export async function postWWorkspaceHttpTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['http_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].http_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceWebsocketTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['websocket_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].websocket_triggers.create.$post(args, options))
}

export async function postWWorkspaceWebsocketTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['websocket_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].websocket_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceWebsocketTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['websocket_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].websocket_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceWebsocketTriggersGetPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['websocket_triggers']['get'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].websocket_triggers.get[':path'].$get(args, options),
  )
}

export async function getWWorkspaceWebsocketTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['websocket_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].websocket_triggers.list.$get(args, options))
}

export async function getWWorkspaceWebsocketTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['websocket_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].websocket_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceWebsocketTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['websocket_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].websocket_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceWebsocketTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['websocket_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].websocket_triggers.test.$post(args, options))
}

export async function postWWorkspaceKafkaTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['kafka_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].kafka_triggers.create.$post(args, options))
}

export async function postWWorkspaceKafkaTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['kafka_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].kafka_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceKafkaTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['kafka_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].kafka_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceKafkaTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['kafka_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].kafka_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceKafkaTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['kafka_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].kafka_triggers.list.$get(args, options))
}

export async function getWWorkspaceKafkaTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['kafka_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].kafka_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceKafkaTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['kafka_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].kafka_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceKafkaTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['kafka_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].kafka_triggers.test.$post(args, options))
}

export async function postWWorkspaceKafkaTriggersResetOffsetsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['kafka_triggers']['reset_offsets'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].kafka_triggers.reset_offsets[':path'].$post(args, options),
  )
}

export async function postWWorkspaceKafkaTriggersCommitOffsetsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['kafka_triggers']['commit_offsets'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].kafka_triggers.commit_offsets[':path'].$post(args, options),
  )
}

export async function postWWorkspaceNatsTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['nats_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].nats_triggers.create.$post(args, options))
}

export async function postWWorkspaceNatsTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['nats_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].nats_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceNatsTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['nats_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].nats_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceNatsTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['nats_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].nats_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceNatsTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['nats_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].nats_triggers.list.$get(args, options))
}

export async function getWWorkspaceNatsTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['nats_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].nats_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceNatsTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['nats_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].nats_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceNatsTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['nats_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].nats_triggers.test.$post(args, options))
}

export async function postWWorkspaceSqsTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['sqs_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].sqs_triggers.create.$post(args, options))
}

export async function postWWorkspaceSqsTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['sqs_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].sqs_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceSqsTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['sqs_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].sqs_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceSqsTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['sqs_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].sqs_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceSqsTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['sqs_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].sqs_triggers.list.$get(args, options))
}

export async function getWWorkspaceSqsTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['sqs_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].sqs_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceSqsTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['sqs_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].sqs_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceSqsTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['sqs_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].sqs_triggers.test.$post(args, options))
}

export async function getWWorkspaceNativeTriggersIntegrationsList(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations.list.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersIntegrationsServiceNameExists(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['exists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].exists.$get(args, options),
  )
}

export async function postWWorkspaceNativeTriggersIntegrationsServiceNameCreate(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].create.$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceNativeTriggersIntegrationsServiceNameGenerateConnectUrl(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['generate_connect_url']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].generate_connect_url.$post(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceNativeTriggersIntegrationsServiceNameInstanceSharingAvailable(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['instance_sharing_available']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[
      ':service_name'
    ].instance_sharing_available.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersIntegrationsServiceNameConnections(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['connections']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].connections.$get(
      args,
      options,
    ),
  )
}

export async function deleteWWorkspaceNativeTriggersIntegrationsServiceNameConnectionsDelete(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['connections']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].connections.delete.$delete(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceNativeTriggersIntegrationsServiceNameWorkspaceConnection(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['workspace_connection']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].workspace_connection.$post(
      args,
      options,
    ),
  )
}

export async function deleteWWorkspaceNativeTriggersIntegrationsServiceNameDelete(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].delete.$delete(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceNativeTriggersIntegrationsServiceNameCallback(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['integrations'][':service_name']['callback']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.integrations[':service_name'].callback.$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceNativeTriggersServiceNameCreate(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].create.$post(args, options),
  )
}

export async function postWWorkspaceNativeTriggersServiceNameUpdateExternalId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['update'][':external_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].update[':external_id'].$post(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceNativeTriggersServiceNameGetExternalId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['get'][':external_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].get[':external_id'].$get(args, options),
  )
}

export async function deleteWWorkspaceNativeTriggersServiceNameDeleteExternalId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['delete'][':external_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].delete[':external_id'].$delete(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceNativeTriggersServiceNameSetenabledExternalId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['setenabled'][':external_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].setenabled[':external_id'].$post(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceNativeTriggersServiceNameList(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['list']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].list.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersServiceNameExistsExternalId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['exists'][':external_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].exists[':external_id'].$get(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceNativeTriggersServiceNameSync(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers'][':service_name']['sync']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers[':service_name'].sync.$post(args, options),
  )
}

export async function getWWorkspaceNativeTriggersNextcloudEvents(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['nextcloud']['events']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.nextcloud.events.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersGoogleCalendars(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['google']['calendars']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.google.calendars.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersGoogleDriveFiles(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['google']['drive']['files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.google.drive.files.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersGoogleDriveSharedDrives(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['google']['drive']['shared_drives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.google.drive.shared_drives.$get(args, options),
  )
}

export async function getWWorkspaceNativeTriggersGithubRepos(
  args: InferRequestType<
    (typeof client.w)[':workspace']['native_triggers']['github']['repos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].native_triggers.github.repos.$get(args, options),
  )
}

export async function postNativeTriggersServiceNameWWorkspaceIdWebhookInternalId(
  args: InferRequestType<
    (typeof client.native_triggers)[':service_name']['w'][':workspace_id']['webhook'][':internal_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.native_triggers[':service_name'].w[':workspace_id'].webhook[':internal_id'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspaceMqttTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['mqtt_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].mqtt_triggers.create.$post(args, options))
}

export async function postWWorkspaceMqttTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['mqtt_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].mqtt_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceMqttTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['mqtt_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].mqtt_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceMqttTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['mqtt_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].mqtt_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceMqttTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['mqtt_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].mqtt_triggers.list.$get(args, options))
}

export async function getWWorkspaceMqttTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['mqtt_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].mqtt_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceMqttTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['mqtt_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].mqtt_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceMqttTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['mqtt_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].mqtt_triggers.test.$post(args, options))
}

export async function postWWorkspaceAmqpTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['amqp_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].amqp_triggers.create.$post(args, options))
}

export async function postWWorkspaceAmqpTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['amqp_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].amqp_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceAmqpTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['amqp_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].amqp_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceAmqpTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['amqp_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].amqp_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceAmqpTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['amqp_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].amqp_triggers.list.$get(args, options))
}

export async function getWWorkspaceAmqpTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['amqp_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].amqp_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceAmqpTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['amqp_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].amqp_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAmqpTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['amqp_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].amqp_triggers.test.$post(args, options))
}

export async function postWWorkspaceGcpTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['gcp_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].gcp_triggers.create.$post(args, options))
}

export async function postWWorkspaceGcpTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceGcpTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceGcpTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['gcp_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].gcp_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceGcpTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['gcp_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].gcp_triggers.list.$get(args, options))
}

export async function getWWorkspaceGcpTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceGcpTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceGcpTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['gcp_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].gcp_triggers.test.$post(args, options))
}

export async function deleteWWorkspaceGcpTriggersSubscriptionsDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['subscriptions']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.subscriptions.delete[':path'].$delete(args, options),
  )
}

export async function deleteWWorkspaceGcpTriggersSubscriptionsDelete(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['subscriptions']['delete']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.subscriptions.delete.$delete(args, options),
  )
}

export async function getWWorkspaceGcpTriggersTopicsListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['topics']['list'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.topics.list[':path'].$get(args, options),
  )
}

export async function getWWorkspaceGcpTriggersTopicsList(
  args: InferRequestType<(typeof client.w)[':workspace']['gcp_triggers']['topics']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].gcp_triggers.topics.list.$get(args, options))
}

export async function postWWorkspaceGcpTriggersSubscriptionsListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['subscriptions']['list'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.subscriptions.list[':path'].$post(args, options),
  )
}

export async function postWWorkspaceGcpTriggersSubscriptionsList(
  args: InferRequestType<
    (typeof client.w)[':workspace']['gcp_triggers']['subscriptions']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].gcp_triggers.subscriptions.list.$post(args, options),
  )
}

export async function postWWorkspaceAzureTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['azure_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].azure_triggers.create.$post(args, options))
}

export async function postWWorkspaceAzureTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceAzureTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceAzureTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['azure_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].azure_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceAzureTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['azure_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].azure_triggers.list.$get(args, options))
}

export async function getWWorkspaceAzureTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceAzureTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAzureTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['azure_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].azure_triggers.test.$post(args, options))
}

export async function postWWorkspaceAzureTriggersNamespacesTopicsListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['namespaces']['topics']['list'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.namespaces.topics.list[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAzureTriggersNamespacesSubscriptionsListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['namespaces']['subscriptions']['list'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.namespaces.subscriptions.list[':path'].$post(
      args,
      options,
    ),
  )
}

export async function deleteWWorkspaceAzureTriggersSubscriptionsDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['subscriptions']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.subscriptions.delete[':path'].$delete(args, options),
  )
}

export async function postWWorkspaceAzureTriggersNamespacesListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['namespaces']['list'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.namespaces.list[':path'].$post(args, options),
  )
}

export async function postWWorkspaceAzureTriggersBasicTopicsListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['azure_triggers']['basic']['topics']['list'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].azure_triggers.basic.topics.list[':path'].$post(args, options),
  )
}

export async function getWWorkspacePostgresTriggersPostgresVersionPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['postgres']['version'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.postgres.version[':path'].$get(args, options),
  )
}

export async function getWWorkspacePostgresTriggersIsValidPostgresConfigurationPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['is_valid_postgres_configuration'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.is_valid_postgres_configuration[':path'].$get(
      args,
      options,
    ),
  )
}

export async function postWWorkspacePostgresTriggersCreateTemplateScript(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['create_template_script']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.create_template_script.$post(args, options),
  )
}

export async function getWWorkspacePostgresTriggersGetTemplateScriptId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['get_template_script'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.get_template_script[':id'].$get(args, options),
  )
}

export async function getWWorkspacePostgresTriggersSlotListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['slot']['list'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.slot.list[':path'].$get(args, options),
  )
}

export async function postWWorkspacePostgresTriggersSlotCreatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['slot']['create'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.slot.create[':path'].$post(args, options),
  )
}

export async function deleteWWorkspacePostgresTriggersSlotDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['slot']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.slot.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspacePostgresTriggersPublicationListPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['publication']['list'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.publication.list[':path'].$get(args, options),
  )
}

export async function getWWorkspacePostgresTriggersPublicationGetPublicationPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['publication']['get'][':publication'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.publication.get[':publication'][':path'].$get(
      args,
      options,
    ),
  )
}

export async function postWWorkspacePostgresTriggersPublicationCreatePublicationPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['publication']['create'][':publication'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.publication.create[':publication'][':path'].$post(
      args,
      options,
    ),
  )
}

export async function postWWorkspacePostgresTriggersPublicationUpdatePublicationPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['publication']['update'][':publication'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.publication.update[':publication'][':path'].$post(
      args,
      options,
    ),
  )
}

export async function deleteWWorkspacePostgresTriggersPublicationDeletePublicationPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['publication']['delete'][':publication'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.publication.delete[':publication'][':path'].$delete(
      args,
      options,
    ),
  )
}

export async function postWWorkspacePostgresTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['postgres_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].postgres_triggers.create.$post(args, options))
}

export async function postWWorkspacePostgresTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspacePostgresTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspacePostgresTriggersGetPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['get'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.get[':path'].$get(args, options),
  )
}

export async function getWWorkspacePostgresTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['postgres_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].postgres_triggers.list.$get(args, options))
}

export async function getWWorkspacePostgresTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspacePostgresTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['postgres_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].postgres_triggers.setmode[':path'].$post(args, options),
  )
}

export async function postWWorkspacePostgresTriggersTest(
  args: InferRequestType<(typeof client.w)[':workspace']['postgres_triggers']['test']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].postgres_triggers.test.$post(args, options))
}

export async function postWWorkspaceEmailTriggersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['email_triggers']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].email_triggers.create.$post(args, options))
}

export async function postWWorkspaceEmailTriggersUpdatePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['email_triggers']['update'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].email_triggers.update[':path'].$post(args, options),
  )
}

export async function deleteWWorkspaceEmailTriggersDeletePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['email_triggers']['delete'][':path']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].email_triggers.delete[':path'].$delete(args, options),
  )
}

export async function getWWorkspaceEmailTriggersGetPath(
  args: InferRequestType<(typeof client.w)[':workspace']['email_triggers']['get'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].email_triggers.get[':path'].$get(args, options))
}

export async function getWWorkspaceEmailTriggersList(
  args: InferRequestType<(typeof client.w)[':workspace']['email_triggers']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].email_triggers.list.$get(args, options))
}

export async function getWWorkspaceEmailTriggersExistsPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['email_triggers']['exists'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].email_triggers.exists[':path'].$get(args, options),
  )
}

export async function postWWorkspaceEmailTriggersLocalPartExists(
  args: InferRequestType<
    (typeof client.w)[':workspace']['email_triggers']['local_part_exists']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].email_triggers.local_part_exists.$post(args, options),
  )
}

export async function postWWorkspaceEmailTriggersSetmodePath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['email_triggers']['setmode'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].email_triggers.setmode[':path'].$post(args, options),
  )
}

export async function getGroupsList(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.list.$get(undefined, options))
}

export async function getGroupsListWithWorkspaces(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.list_with_workspaces.$get(undefined, options))
}

export async function getGroupsGetName(
  args: InferRequestType<(typeof client.groups.get)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.get[':name'].$get(args, options))
}

export async function postGroupsCreate(
  args: InferRequestType<typeof client.groups.create.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.create.$post(args, options))
}

export async function postGroupsUpdateName(
  args: InferRequestType<(typeof client.groups.update)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.update[':name'].$post(args, options))
}

export async function deleteGroupsDeleteName(
  args: InferRequestType<(typeof client.groups.delete)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.delete[':name'].$delete(args, options))
}

export async function postGroupsAdduserName(
  args: InferRequestType<(typeof client.groups.adduser)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.adduser[':name'].$post(args, options))
}

export async function postGroupsRemoveuserName(
  args: InferRequestType<(typeof client.groups.removeuser)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.removeuser[':name'].$post(args, options))
}

export async function getGroupsExport(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.export.$get(undefined, options))
}

export async function postGroupsOverwrite(
  args: InferRequestType<typeof client.groups.overwrite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.overwrite.$post(args, options))
}

export async function getWWorkspaceGroupsList(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.list.$get(args, options))
}

export async function getWWorkspaceGroupsListnames(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['listnames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.listnames.$get(args, options))
}

export async function postWWorkspaceGroupsCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.create.$post(args, options))
}

export async function postWWorkspaceGroupsUpdateName(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['update'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.update[':name'].$post(args, options))
}

export async function deleteWWorkspaceGroupsDeleteName(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['delete'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.delete[':name'].$delete(args, options))
}

export async function getWWorkspaceGroupsGetName(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['get'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.get[':name'].$get(args, options))
}

export async function postWWorkspaceGroupsAdduserName(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['adduser'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.adduser[':name'].$post(args, options))
}

export async function postWWorkspaceGroupsRemoveuserName(
  args: InferRequestType<(typeof client.w)[':workspace']['groups']['removeuser'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups.removeuser[':name'].$post(args, options))
}

export async function getWWorkspaceGroupsHistoryGetName(
  args: InferRequestType<(typeof client.w)[':workspace']['groups_history']['get'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].groups_history.get[':name'].$get(args, options))
}

export async function getWWorkspaceTriggersHistoryList(
  args: InferRequestType<(typeof client.w)[':workspace']['triggers_history']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].triggers_history.list.$get(args, options))
}

export async function getWWorkspaceFoldersList(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.list.$get(args, options))
}

export async function getWWorkspaceFoldersListnames(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['listnames']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.listnames.$get(args, options))
}

export async function postWWorkspaceFoldersCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.create.$post(args, options))
}

export async function postWWorkspaceFoldersUpdateName(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['update'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.update[':name'].$post(args, options))
}

export async function deleteWWorkspaceFoldersDeleteName(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['delete'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.delete[':name'].$delete(args, options))
}

export async function getWWorkspaceFoldersGetName(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['get'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.get[':name'].$get(args, options))
}

export async function getWWorkspaceFoldersExistsName(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['exists'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.exists[':name'].$get(args, options))
}

export async function getWWorkspaceFoldersGetusageName(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['getusage'][':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.getusage[':name'].$get(args, options))
}

export async function postWWorkspaceFoldersAddownerName(
  args: InferRequestType<(typeof client.w)[':workspace']['folders']['addowner'][':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].folders.addowner[':name'].$post(args, options))
}

export async function postWWorkspaceFoldersRemoveownerName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['folders']['removeowner'][':name']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].folders.removeowner[':name'].$post(args, options),
  )
}

export async function getWWorkspaceFoldersHistoryGetName(
  args: InferRequestType<
    (typeof client.w)[':workspace']['folders_history']['get'][':name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].folders_history.get[':name'].$get(args, options),
  )
}

export async function getWorkersList(
  args: InferRequestType<typeof client.workers.list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workers.list.$get(args, options))
}

export async function getWorkersExistsWorkersWithTags(
  args: InferRequestType<typeof client.workers.exists_workers_with_tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workers.exists_workers_with_tags.$get(args, options))
}

export async function getWorkersQueueMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.queue_metrics.$get(undefined, options))
}

export async function getWorkersRunnableStats(
  args: InferRequestType<typeof client.workers.runnable_stats.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workers.runnable_stats.$get(args, options))
}

export async function getWorkersQueueMetricsSeries(
  args: InferRequestType<typeof client.workers.queue_metrics_series.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workers.queue_metrics_series.$get(args, options))
}

export async function getWorkersQueueStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.queue_status.$get(undefined, options))
}

export async function getWorkersQueueCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.queue_counts.$get(undefined, options))
}

export async function getWorkersQueueRunningCounts(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.queue_running_counts.$get(undefined, options))
}

export async function getWorkersWorkspaceFairnessEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.workers.workspace_fairness_events.$get(undefined, options))
}

export async function getConfigsListWorkerGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.configs.list_worker_groups.$get(undefined, options))
}

export async function getConfigsGetName(
  args: InferRequestType<(typeof client.configs.get)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.get[':name'].$get(args, options))
}

export async function postConfigsUpdateName(
  args: InferRequestType<(typeof client.configs.update)[':name']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.update[':name'].$post(args, options))
}

export async function deleteConfigsUpdateName(
  args: InferRequestType<(typeof client.configs.update)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.update[':name'].$delete(args, options))
}

export async function getConfigsList(options?: ClientRequestOptions) {
  return await parseResponse(client.configs.list.$get(undefined, options))
}

export async function getConfigsListAutoscalingEventsWorkerGroup(
  args: InferRequestType<(typeof client.configs.list_autoscaling_events)[':worker_group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.configs.list_autoscaling_events[':worker_group'].$get(args, options),
  )
}

export async function getConfigsAutoscalingDiagnosticsWorkerGroup(
  args: InferRequestType<(typeof client.configs.autoscaling_diagnostics)[':worker_group']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.configs.autoscaling_diagnostics[':worker_group'].$get(args, options),
  )
}

export async function postConfigsAutoscalingRecordingWorkerGroup(
  args: InferRequestType<(typeof client.configs.autoscaling_recording)[':worker_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.configs.autoscaling_recording[':worker_group'].$post(args, options),
  )
}

export async function postConfigsTestAutoscalingWorkerGroup(
  args: InferRequestType<(typeof client.configs.test_autoscaling)[':worker_group']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configs.test_autoscaling[':worker_group'].$post(args, options))
}

export async function getConfigsNativeKubernetesAutoscalingHealthcheck(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.configs.native_kubernetes_autoscaling_healthcheck.$get(undefined, options),
  )
}

export async function getConfigsListAvailablePythonVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.configs.list_available_python_versions.$get(undefined, options))
}

export async function getConfigsListAllWorkspaceDependencies(options?: ClientRequestOptions) {
  return await parseResponse(
    client.configs.list_all_workspace_dependencies.$get(undefined, options),
  )
}

export async function getConfigsListAllDedicatedWithDeps(options?: ClientRequestOptions) {
  return await parseResponse(client.configs.list_all_dedicated_with_deps.$get(undefined, options))
}

export async function postAgentWorkersCreateAgentToken(
  args: InferRequestType<typeof client.agent_workers.create_agent_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_workers.create_agent_token.$post(args, options))
}

export async function postAgentWorkersBlacklistToken(
  args: InferRequestType<typeof client.agent_workers.blacklist_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_workers.blacklist_token.$post(args, options))
}

export async function postAgentWorkersRemoveBlacklistToken(
  args: InferRequestType<typeof client.agent_workers.remove_blacklist_token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_workers.remove_blacklist_token.$post(args, options))
}

export async function getAgentWorkersListBlacklistedTokens(
  args: InferRequestType<typeof client.agent_workers.list_blacklisted_tokens.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.agent_workers.list_blacklisted_tokens.$get(args, options))
}

export async function getAgentWorkersGetMinVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.agent_workers.get_min_version.$get(undefined, options))
}

export async function getWWorkspaceAccessGet(
  args: InferRequestType<(typeof client.w)[':workspace']['access']['get']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].access.get.$get(args, options))
}

export async function getWWorkspaceAclsGetKindPath(
  args: InferRequestType<(typeof client.w)[':workspace']['acls']['get'][':kind'][':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].acls.get[':kind'][':path'].$get(args, options))
}

export async function postWWorkspaceAclsAddKindPath(
  args: InferRequestType<(typeof client.w)[':workspace']['acls']['add'][':kind'][':path']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].acls.add[':kind'][':path'].$post(args, options))
}

export async function postWWorkspaceAclsRemoveKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['acls']['remove'][':kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].acls.remove[':kind'][':path'].$post(args, options),
  )
}

export async function postWWorkspaceCaptureSetConfig(
  args: InferRequestType<(typeof client.w)[':workspace']['capture']['set_config']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].capture.set_config.$post(args, options))
}

export async function postWWorkspaceCapturePingConfigTriggerKindRunnableKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['capture']['ping_config'][':trigger_kind'][':runnable_kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].capture.ping_config[':trigger_kind'][':runnable_kind'][':path'].$post(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceCaptureGetConfigsRunnableKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['capture']['get_configs'][':runnable_kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].capture.get_configs[':runnable_kind'][':path'].$get(args, options),
  )
}

export async function getWWorkspaceCaptureListRunnableKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['capture']['list'][':runnable_kind'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].capture.list[':runnable_kind'][':path'].$get(args, options),
  )
}

export async function postWWorkspaceCaptureMoveRunnableKindPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['capture']['move'][':runnable_kind'][':path']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].capture.move[':runnable_kind'][':path'].$post(args, options),
  )
}

export async function getWWorkspaceCaptureId(
  args: InferRequestType<(typeof client.w)[':workspace']['capture'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].capture[':id'].$get(args, options))
}

export async function deleteWWorkspaceCaptureId(
  args: InferRequestType<(typeof client.w)[':workspace']['capture'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].capture[':id'].$delete(args, options))
}

export async function postWWorkspaceFavoritesStar(
  args: InferRequestType<(typeof client.w)[':workspace']['favorites']['star']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].favorites.star.$post(args, options))
}

export async function postWWorkspaceFavoritesUnstar(
  args: InferRequestType<(typeof client.w)[':workspace']['favorites']['unstar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].favorites.unstar.$post(args, options))
}

export async function getWWorkspaceInputsHistory(
  args: InferRequestType<(typeof client.w)[':workspace']['inputs']['history']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].inputs.history.$get(args, options))
}

export async function getWWorkspaceInputsJobOrInputIdArgs(
  args: InferRequestType<
    (typeof client.w)[':workspace']['inputs'][':jobOrInputId']['args']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].inputs[':jobOrInputId'].args.$get(args, options),
  )
}

export async function getWWorkspaceInputsList(
  args: InferRequestType<(typeof client.w)[':workspace']['inputs']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].inputs.list.$get(args, options))
}

export async function postWWorkspaceInputsCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['inputs']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].inputs.create.$post(args, options))
}

export async function postWWorkspaceInputsUpdate(
  args: InferRequestType<(typeof client.w)[':workspace']['inputs']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].inputs.update.$post(args, options))
}

export async function postWWorkspaceInputsDeleteInput(
  args: InferRequestType<(typeof client.w)[':workspace']['inputs']['delete'][':input']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].inputs.delete[':input'].$post(args, options))
}

export async function postWWorkspaceJobHelpersDuckdbConnectionSettings(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['duckdb_connection_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.duckdb_connection_settings.$post(args, options),
  )
}

export async function postWWorkspaceJobHelpersV2DuckdbConnectionSettings(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['v2']['duckdb_connection_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.v2.duckdb_connection_settings.$post(args, options),
  )
}

export async function postWWorkspaceJobHelpersPolarsConnectionSettings(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['polars_connection_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.polars_connection_settings.$post(args, options),
  )
}

export async function postWWorkspaceJobHelpersV2PolarsConnectionSettings(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['v2']['polars_connection_settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.v2.polars_connection_settings.$post(args, options),
  )
}

export async function postWWorkspaceJobHelpersV2S3ResourceInfo(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['v2']['s3_resource_info']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.v2.s3_resource_info.$post(args, options),
  )
}

export async function getWWorkspaceJobHelpersV2S3ProxyBucket(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['v2']['s3_proxy_bucket']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.v2.s3_proxy_bucket.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersTestConnection(
  args: InferRequestType<(typeof client.w)[':workspace']['job_helpers']['test_connection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].job_helpers.test_connection.$get(args, options))
}

export async function getWWorkspaceJobHelpersStorageUsage(
  args: InferRequestType<(typeof client.w)[':workspace']['job_helpers']['storage_usage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].job_helpers.storage_usage.$get(args, options))
}

export async function getWWorkspaceJobHelpersListStoredFiles(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['list_stored_files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.list_stored_files.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersListStoredFilesPaged(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['list_stored_files_paged']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.list_stored_files_paged.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadFileMetadata(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_file_metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_file_metadata.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadFilePreview(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_file_preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_file_preview.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersListGitRepoFiles(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['list_git_repo_files']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.list_git_repo_files.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadGitRepoFilePreview(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_git_repo_file_preview']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_git_repo_file_preview.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadGitRepoFileMetadata(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_git_repo_file_metadata']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_git_repo_file_metadata.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersCheckS3FolderExists(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['check_s3_folder_exists']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.check_s3_folder_exists.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadParquetPreviewPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_parquet_preview'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_parquet_preview[':path'].$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadTableCountPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_table_count'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_table_count[':path'].$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersLoadCsvPreviewPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['load_csv_preview'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.load_csv_preview[':path'].$get(args, options),
  )
}

export async function deleteWWorkspaceJobHelpersDeleteS3File(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['delete_s3_file']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.delete_s3_file.$delete(args, options),
  )
}

export async function getWWorkspaceJobHelpersMoveS3File(
  args: InferRequestType<(typeof client.w)[':workspace']['job_helpers']['move_s3_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].job_helpers.move_s3_file.$get(args, options))
}

export async function postWWorkspaceJobHelpersUploadS3File(
  args: InferRequestType<(typeof client.w)[':workspace']['job_helpers']['upload_s3_file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].job_helpers.upload_s3_file.$post(args, options))
}

export async function postWWorkspaceJobHelpersUploadGitRepoFileToInstanceStorage(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['upload_git_repo_file_to_instance_storage']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.upload_git_repo_file_to_instance_storage.$post(
      args,
      options,
    ),
  )
}

export async function getWWorkspaceJobHelpersDownloadS3File(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['download_s3_file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.download_s3_file.$get(args, options),
  )
}

export async function getWWorkspaceJobHelpersDownloadS3ParquetFileAsCsv(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_helpers']['download_s3_parquet_file_as_csv']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_helpers.download_s3_parquet_file_as_csv.$get(args, options),
  )
}

export async function postWWorkspaceJobMetricsGetId(
  args: InferRequestType<(typeof client.w)[':workspace']['job_metrics']['get'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].job_metrics.get[':id'].$post(args, options))
}

export async function postWWorkspaceJobMetricsSetProgressId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_metrics']['set_progress'][':id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_metrics.set_progress[':id'].$post(args, options),
  )
}

export async function getWWorkspaceJobMetricsGetProgressId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['job_metrics']['get_progress'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].job_metrics.get_progress[':id'].$get(args, options),
  )
}

export async function getServiceLogsListFiles(
  args: InferRequestType<typeof client.service_logs.list_files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_logs.list_files.$get(args, options))
}

export async function getServiceLogsGetLogFilePath(
  args: InferRequestType<(typeof client.service_logs.get_log_file)[':path']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.service_logs.get_log_file[':path'].$get(args, options))
}

export async function getConcurrencyGroupsList(options?: ClientRequestOptions) {
  return await parseResponse(client.concurrency_groups.list.$get(undefined, options))
}

export async function deleteConcurrencyGroupsPruneConcurrencyId(
  args: InferRequestType<(typeof client.concurrency_groups.prune)[':concurrency_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.concurrency_groups.prune[':concurrency_id'].$delete(args, options),
  )
}

export async function getConcurrencyGroupsIdKey(
  args: InferRequestType<(typeof client.concurrency_groups)[':id']['key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.concurrency_groups[':id'].key.$get(args, options))
}

export async function getWWorkspaceConcurrencyGroupsListJobs(
  args: InferRequestType<
    (typeof client.w)[':workspace']['concurrency_groups']['list_jobs']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].concurrency_groups.list_jobs.$get(args, options),
  )
}

export async function getSrchWWorkspaceIndexSearchJob(
  args: InferRequestType<(typeof client.srch.w)[':workspace']['index']['search']['job']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.srch.w[':workspace'].index.search.job.$get(args, options))
}

export async function getSrchIndexSearchServiceLogs(
  args: InferRequestType<typeof client.srch.index.search.service_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.srch.index.search.service_logs.$get(args, options))
}

export async function getSrchIndexSearchCountServiceLogs(
  args: InferRequestType<typeof client.srch.index.search.count_service_logs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.srch.index.search.count_service_logs.$get(args, options))
}

export async function getSrchIndexStorageDisk(options?: ClientRequestOptions) {
  return await parseResponse(client.srch.index.storage.disk.$get(undefined, options))
}

export async function deleteIndexerDeleteIdxName(
  args: InferRequestType<(typeof client.indexer.delete)[':idx_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.indexer.delete[':idx_name'].$delete(args, options))
}

export async function getIndexerStorage(options?: ClientRequestOptions) {
  return await parseResponse(client.indexer.storage.$get(undefined, options))
}

export async function getIndexerStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.indexer.status.$get(undefined, options))
}

export async function getWWorkspaceAssetsList(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.list.$get(args, options))
}

export async function postWWorkspaceAssetsListByUsages(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['list_by_usages']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.list_by_usages.$post(args, options))
}

export async function getWWorkspaceAssetsListFavorites(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['list_favorites']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.list_favorites.$get(args, options))
}

export async function getWWorkspaceAssetsGraph(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['graph']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.graph.$get(args, options))
}

export async function getWWorkspaceAssetsColumnLineage(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['column_lineage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.column_lineage.$get(args, options))
}

export async function getWWorkspaceAssetsMacros(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['macros']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.macros.$get(args, options))
}

export async function getWWorkspaceAssetsPipelines(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['pipelines']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.pipelines.$get(args, options))
}

export async function getWWorkspaceAssetsPartitions(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['partitions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.partitions.$get(args, options))
}

export async function getWWorkspaceJobsDbtResumableId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['dbt_resumable'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.dbt_resumable[':id'].$get(args, options))
}

export async function getWWorkspaceJobsDbtResumableScriptPPath(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['dbt_resumable_script']['p'][':path']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.dbt_resumable_script.p[':path'].$get(args, options),
  )
}

export async function getWWorkspaceJobsDbtGraphId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['dbt_graph'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.dbt_graph[':id'].$get(args, options))
}

export async function getWWorkspaceJobsDbtColumnLineageId(
  args: InferRequestType<
    (typeof client.w)[':workspace']['jobs']['dbt_column_lineage'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].jobs.dbt_column_lineage[':id'].$get(args, options),
  )
}

export async function getWWorkspaceJobsRunProgressId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run_progress'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run_progress[':id'].$get(args, options))
}

export async function getWWorkspaceJobsRunAssetsId(
  args: InferRequestType<(typeof client.w)[':workspace']['jobs']['run_assets'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].jobs.run_assets[':id'].$get(args, options))
}

export async function getWWorkspaceAssetsPartitionsInRange(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['partitions_in_range']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.partitions_in_range.$get(args, options))
}

export async function getWWorkspaceAssetsAssetSchemas(
  args: InferRequestType<(typeof client.w)[':workspace']['assets']['asset_schemas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].assets.asset_schemas.$get(args, options))
}

export async function getWWorkspaceVolumesList(
  args: InferRequestType<(typeof client.w)[':workspace']['volumes']['list']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].volumes.list.$get(args, options))
}

export async function getWWorkspaceVolumesStorage(
  args: InferRequestType<(typeof client.w)[':workspace']['volumes']['storage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].volumes.storage.$get(args, options))
}

export async function postWWorkspaceVolumesCreate(
  args: InferRequestType<(typeof client.w)[':workspace']['volumes']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].volumes.create.$post(args, options))
}

export async function deleteWWorkspaceVolumesDeleteName(
  args: InferRequestType<(typeof client.w)[':workspace']['volumes']['delete'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].volumes.delete[':name'].$delete(args, options))
}

export async function getMcpWWorkspaceListTools(
  args: InferRequestType<(typeof client.mcp.w)[':workspace']['list_tools']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mcp.w[':workspace'].list_tools.$get(args, options))
}

export async function postMcpOauthDiscover(
  args: InferRequestType<typeof client.mcp.oauth.discover.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mcp.oauth.discover.$post(args, options))
}

export async function getMcpOauthStart(
  args: InferRequestType<typeof client.mcp.oauth.start.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mcp.oauth.start.$get(args, options))
}

export async function getMcpOauthCallback(
  args: InferRequestType<typeof client.mcp.oauth.callback.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mcp.oauth.callback.$get(args, options))
}

export async function postWWorkspaceHubPublishDraft(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['publish_draft']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.publish_draft.$post(args, options))
}

export async function postWWorkspaceHubScripts(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['scripts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.scripts.$post(args, options))
}

export async function postWWorkspaceHubFlows(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['flows']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.flows.$post(args, options))
}

export async function postWWorkspaceHubApps(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.apps.$post(args, options))
}

export async function postWWorkspaceHubRawApps(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['raw_apps']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.raw_apps.$post(args, options))
}

export async function postWWorkspaceHubRawAppsIdRecording(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['raw_apps'][':id']['recording']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.raw_apps[':id'].recording.$post(args, options),
  )
}

export async function postWWorkspaceHubScriptsAskIdRecording(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['scripts'][':ask_id']['recording']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.scripts[':ask_id'].recording.$post(args, options),
  )
}

export async function postWWorkspaceHubFlowsFlowIdRecording(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['flows'][':flow_id']['recording']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.flows[':flow_id'].recording.$post(args, options),
  )
}

export async function postWWorkspaceHubProjectsSlugPipelineRecording(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['projects'][':slug']['pipeline_recording']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.projects[':slug'].pipeline_recording.$post(args, options),
  )
}

export async function postWWorkspaceHubResourceTypes(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['resource_types']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.resource_types.$post(args, options))
}

export async function postWWorkspaceHubResources(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['resources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.resources.$post(args, options))
}

export async function postWWorkspaceHubTriggers(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['triggers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.triggers.$post(args, options))
}

export async function postWWorkspaceHubMigrations(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['migrations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.migrations.$post(args, options))
}

export async function getWWorkspaceHubProjectsSlugExport(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['projects'][':slug']['export']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.projects[':slug'].export.$get(args, options),
  )
}

export async function postWWorkspaceHubProjectsSlugLogo(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['projects'][':slug']['logo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.projects[':slug'].logo.$post(args, options))
}

export async function postWWorkspaceHubProjectsSlugSubmit(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['projects'][':slug']['submit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.projects[':slug'].submit.$post(args, options),
  )
}

export async function postWWorkspaceHubProjectsSlugWithdraw(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['projects'][':slug']['withdraw']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.projects[':slug'].withdraw.$post(args, options),
  )
}

export async function postWWorkspaceHubProjectsSlugDiscardUpdate(
  args: InferRequestType<
    (typeof client.w)[':workspace']['hub']['projects'][':slug']['discard_update']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.w[':workspace'].hub.projects[':slug'].discard_update.$post(args, options),
  )
}

export async function getWWorkspaceHubProjects(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['projects']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.projects.$get(args, options))
}

export async function getWWorkspaceHubProject(
  args: InferRequestType<(typeof client.w)[':workspace']['hub']['project']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.w[':workspace'].hub.project.$get(args, options))
}
