import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountAgents(
  args: InferRequestType<typeof client.account.agents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.agents.$get(args, options))
}

export async function getAccountCredentials(
  args: InferRequestType<typeof client.account.credentials.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.credentials.$get(args, options))
}

export async function putAccountCredentials(
  args: InferRequestType<typeof client.account.credentials.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.credentials.$put(args, options))
}

export async function getAccountCredentialsCredentialId(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.credentials[':credential_id'].$get(args, options))
}

export async function deleteAccountCredentialsCredentialId(
  args: InferRequestType<(typeof client.account.credentials)[':credential_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.credentials[':credential_id'].$delete(args, options))
}

export async function getAccountEventsJson(
  args: InferRequestType<(typeof client.account)['events.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['events.json'].$get(args, options))
}

export async function getAccountEventsJsonl(
  args: InferRequestType<(typeof client.account)['events.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account['events.jsonl'].$get(args, options))
}

export async function getAccountGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.account.groups.$get(undefined, options))
}

export async function putAccountGroups(
  args: InferRequestType<typeof client.account.groups.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.groups.$put(args, options))
}

export async function postAccountGroups(
  args: InferRequestType<typeof client.account.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.groups.$post(args, options))
}

export async function getAccountGroupsGroupId(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.groups[':group_id'].$get(args, options))
}

export async function deleteAccountGroupsGroupId(
  args: InferRequestType<(typeof client.account.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.groups[':group_id'].$delete(args, options))
}

export async function getAccountKeys(options?: ClientRequestOptions) {
  return await parseResponse(client.account.keys.$get(undefined, options))
}

export async function putAccountKeys(
  args: InferRequestType<typeof client.account.keys.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.keys.$put(args, options))
}

export async function getAccountKeysKeyId(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.keys[':key_id'].$get(args, options))
}

export async function deleteAccountKeysKeyId(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.keys[':key_id'].$delete(args, options))
}

export async function patchAccountKeysKeyIdRotate(
  args: InferRequestType<(typeof client.account.keys)[':key_id']['rotate']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.keys[':key_id'].rotate.$patch(args, options))
}

export async function getAccountLicense(options?: ClientRequestOptions) {
  return await parseResponse(client.account.license.$get(undefined, options))
}

export async function getAccountOrgs(
  args: InferRequestType<typeof client.account.orgs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.orgs.$get(args, options))
}

export async function putAccountOrgs(
  args: InferRequestType<typeof client.account.orgs.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.orgs.$put(args, options))
}

export async function getAccountOrgsOrgId(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.orgs[':org_id'].$get(args, options))
}

export async function deleteAccountOrgsOrgId(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.orgs[':org_id'].$delete(args, options))
}

export async function patchAccountOrgsOrgId(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.orgs[':org_id'].$patch(args, options))
}

export async function deleteAccountOrgsOrgIdExportToken(
  args: InferRequestType<(typeof client.account.orgs)[':org_id']['exportToken']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.orgs[':org_id'].exportToken.$delete(args, options))
}

export async function patchAccountOrgsOrgIdExportTokenRotate(
  args: InferRequestType<
    (typeof client.account.orgs)[':org_id']['exportToken']['rotate']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.orgs[':org_id'].exportToken.rotate.$patch(args, options),
  )
}

export async function getAccountSites(
  args: InferRequestType<typeof client.account.sites.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sites.$get(args, options))
}

export async function getAccountSsoGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.account.sso.groups.$get(undefined, options))
}

export async function putAccountSsoGroups(
  args: InferRequestType<typeof client.account.sso.groups.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sso.groups.$put(args, options))
}

export async function postAccountSsoGroups(
  args: InferRequestType<typeof client.account.sso.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sso.groups.$post(args, options))
}

export async function getAccountSsoGroupsGroupMappingId(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sso.groups[':group_mapping_id'].$get(args, options))
}

export async function deleteAccountSsoGroupsGroupMappingId(
  args: InferRequestType<(typeof client.account.sso.groups)[':group_mapping_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.sso.groups[':group_mapping_id'].$delete(args, options))
}

export async function getAccountTasks(
  args: InferRequestType<typeof client.account.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tasks.$get(args, options))
}

export async function getAccountTasksTemplates(
  args: InferRequestType<typeof client.account.tasks.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tasks.templates.$get(args, options))
}

export async function putAccountTasksTemplates(
  args: InferRequestType<typeof client.account.tasks.templates.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tasks.templates.$put(args, options))
}

export async function postAccountTasksTemplates(
  args: InferRequestType<typeof client.account.tasks.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.tasks.templates.$post(args, options))
}

export async function getAccountTasksTemplatesScanTemplateId(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.tasks.templates[':scan_template_id'].$get(args, options),
  )
}

export async function deleteAccountTasksTemplatesScanTemplateId(
  args: InferRequestType<(typeof client.account.tasks.templates)[':scan_template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.account.tasks.templates[':scan_template_id'].$delete(args, options),
  )
}

export async function getAccountUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.account.users.$get(undefined, options))
}

export async function putAccountUsers(
  args: InferRequestType<typeof client.account.users.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users.$put(args, options))
}

export async function putAccountUsersInvite(
  args: InferRequestType<typeof client.account.users.invite.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users.invite.$put(args, options))
}

export async function getAccountUsersUserId(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':user_id'].$get(args, options))
}

export async function deleteAccountUsersUserId(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':user_id'].$delete(args, options))
}

export async function patchAccountUsersUserId(
  args: InferRequestType<(typeof client.account.users)[':user_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':user_id'].$patch(args, options))
}

export async function patchAccountUsersUserIdResetLockout(
  args: InferRequestType<(typeof client.account.users)[':user_id']['resetLockout']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':user_id'].resetLockout.$patch(args, options))
}

export async function patchAccountUsersUserIdResetMFA(
  args: InferRequestType<(typeof client.account.users)[':user_id']['resetMFA']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':user_id'].resetMFA.$patch(args, options))
}

export async function patchAccountUsersUserIdResetPassword(
  args: InferRequestType<(typeof client.account.users)[':user_id']['resetPassword']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.account.users[':user_id'].resetPassword.$patch(args, options))
}

export async function getExportOrgAssetsCiscoCsv(
  args: InferRequestType<(typeof client.export.org)['assets.cisco.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['assets.cisco.csv'].$get(args, options))
}

export async function getExportOrgAssetsCsv(
  args: InferRequestType<(typeof client.export.org)['assets.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['assets.csv'].$get(args, options))
}

export async function getExportOrgAssetsJson(
  args: InferRequestType<(typeof client.export.org)['assets.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['assets.json'].$get(args, options))
}

export async function getExportOrgAssetsJsonl(
  args: InferRequestType<(typeof client.export.org)['assets.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['assets.jsonl'].$get(args, options))
}

export async function getExportOrgAssetsNmapXml(
  args: InferRequestType<(typeof client.export.org)['assets.nmap.xml']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['assets.nmap.xml'].$get(args, options))
}

export async function getExportOrgAssetsServicenowCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.export.org['assets.servicenow.csv'].$get(undefined, options))
}

export async function getExportOrgAssetsServicenowJson(options?: ClientRequestOptions) {
  return await parseResponse(client.export.org['assets.servicenow.json'].$get(undefined, options))
}

export async function getExportOrgAssetsSyncCreatedAssetsJson(
  args: InferRequestType<(typeof client.export.org.assets.sync.created)['assets.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.org.assets.sync.created['assets.json'].$get(args, options),
  )
}

export async function getExportOrgAssetsSyncUpdatedAssetsJson(
  args: InferRequestType<(typeof client.export.org.assets.sync.updated)['assets.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.org.assets.sync.updated['assets.json'].$get(args, options),
  )
}

export async function getExportOrgServicesCsv(
  args: InferRequestType<(typeof client.export.org)['services.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['services.csv'].$get(args, options))
}

export async function getExportOrgServicesJson(
  args: InferRequestType<(typeof client.export.org)['services.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['services.json'].$get(args, options))
}

export async function getExportOrgServicesJsonl(
  args: InferRequestType<(typeof client.export.org)['services.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['services.jsonl'].$get(args, options))
}

export async function getExportOrgServicesServicenowCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.export.org['services.servicenow.csv'].$get(undefined, options))
}

export async function getExportOrgSitesCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.export.org['sites.csv'].$get(undefined, options))
}

export async function getExportOrgSitesJson(
  args: InferRequestType<(typeof client.export.org)['sites.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['sites.json'].$get(args, options))
}

export async function getExportOrgSitesJsonl(
  args: InferRequestType<(typeof client.export.org)['sites.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['sites.jsonl'].$get(args, options))
}

export async function getExportOrgWirelessCsv(
  args: InferRequestType<(typeof client.export.org)['wireless.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['wireless.csv'].$get(args, options))
}

export async function getExportOrgWirelessJson(
  args: InferRequestType<(typeof client.export.org)['wireless.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['wireless.json'].$get(args, options))
}

export async function getExportOrgWirelessJsonl(
  args: InferRequestType<(typeof client.export.org)['wireless.jsonl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export.org['wireless.jsonl'].$get(args, options))
}

export async function getOrg(options?: ClientRequestOptions) {
  return await parseResponse(client.org.$get(undefined, options))
}

export async function patchOrg(
  args: InferRequestType<typeof client.org.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.$patch(args, options))
}

export async function getOrgAgents(options?: ClientRequestOptions) {
  return await parseResponse(client.org.agents.$get(undefined, options))
}

export async function getOrgAgentsAgentId(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.agents[':agent_id'].$get(args, options))
}

export async function deleteOrgAgentsAgentId(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.agents[':agent_id'].$delete(args, options))
}

export async function patchOrgAgentsAgentId(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.agents[':agent_id'].$patch(args, options))
}

export async function postOrgAgentsAgentIdUpdate(
  args: InferRequestType<(typeof client.org.agents)[':agent_id']['update']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.agents[':agent_id'].update.$post(args, options))
}

export async function getOrgAssets(
  args: InferRequestType<typeof client.org.assets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets.$get(args, options))
}

export async function postOrgAssetsBulkClearTags(
  args: InferRequestType<typeof client.org.assets.bulk.clearTags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets.bulk.clearTags.$post(args, options))
}

export async function patchOrgAssetsBulkTags(
  args: InferRequestType<typeof client.org.assets.bulk.tags.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets.bulk.tags.$patch(args, options))
}

export async function getOrgAssetsTopHwCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.assets['top.hw.csv'].$get(undefined, options))
}

export async function getOrgAssetsTopOsCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.assets['top.os.csv'].$get(undefined, options))
}

export async function getOrgAssetsTopTagsCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.assets['top.tags.csv'].$get(undefined, options))
}

export async function getOrgAssetsTopTypesCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.assets['top.types.csv'].$get(undefined, options))
}

export async function getOrgAssetsAssetId(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets[':asset_id'].$get(args, options))
}

export async function deleteOrgAssetsAssetId(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets[':asset_id'].$delete(args, options))
}

export async function patchOrgAssetsAssetIdComments(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['comments']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets[':asset_id'].comments.$patch(args, options))
}

export async function patchOrgAssetsAssetIdTags(
  args: InferRequestType<(typeof client.org.assets)[':asset_id']['tags']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.assets[':asset_id'].tags.$patch(args, options))
}

export async function getOrgKey(options?: ClientRequestOptions) {
  return await parseResponse(client.org.key.$get(undefined, options))
}

export async function deleteOrgKey(options?: ClientRequestOptions) {
  return await parseResponse(client.org.key.$delete(undefined, options))
}

export async function patchOrgKeyRotate(options?: ClientRequestOptions) {
  return await parseResponse(client.org.key.rotate.$patch(undefined, options))
}

export async function getOrgServices(
  args: InferRequestType<typeof client.org.services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.services.$get(args, options))
}

export async function getOrgServicesSubnetStatsCsv(
  args: InferRequestType<(typeof client.org.services)['subnet.stats.csv']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.services['subnet.stats.csv'].$get(args, options))
}

export async function getOrgServicesTopProductsCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.services['top.products.csv'].$get(undefined, options))
}

export async function getOrgServicesTopProtocolsCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.services['top.protocols.csv'].$get(undefined, options))
}

export async function getOrgServicesTopTcpCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.services['top.tcp.csv'].$get(undefined, options))
}

export async function getOrgServicesTopUdpCsv(options?: ClientRequestOptions) {
  return await parseResponse(client.org.services['top.udp.csv'].$get(undefined, options))
}

export async function getOrgServicesServiceId(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.services[':service_id'].$get(args, options))
}

export async function deleteOrgServicesServiceId(
  args: InferRequestType<(typeof client.org.services)[':service_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.services[':service_id'].$delete(args, options))
}

export async function getOrgSites(options?: ClientRequestOptions) {
  return await parseResponse(client.org.sites.$get(undefined, options))
}

export async function putOrgSites(
  args: InferRequestType<typeof client.org.sites.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites.$put(args, options))
}

export async function getOrgSitesSiteId(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites[':site_id'].$get(args, options))
}

export async function deleteOrgSitesSiteId(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites[':site_id'].$delete(args, options))
}

export async function patchOrgSitesSiteId(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites[':site_id'].$patch(args, options))
}

export async function putOrgSitesSiteIdImport(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['import']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites[':site_id'].import.$put(args, options))
}

export async function putOrgSitesSiteIdImportNessus(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['import']['nessus']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites[':site_id'].import.nessus.$put(args, options))
}

export async function putOrgSitesSiteIdScan(
  args: InferRequestType<(typeof client.org.sites)[':site_id']['scan']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.sites[':site_id'].scan.$put(args, options))
}

export async function getOrgTasks(
  args: InferRequestType<typeof client.org.tasks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks.$get(args, options))
}

export async function getOrgTasksTaskId(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].$get(args, options))
}

export async function patchOrgTasksTaskId(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].$patch(args, options))
}

export async function getOrgTasksTaskIdChanges(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['changes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].changes.$get(args, options))
}

export async function getOrgTasksTaskIdData(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['data']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].data.$get(args, options))
}

export async function postOrgTasksTaskIdHide(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['hide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].hide.$post(args, options))
}

export async function getOrgTasksTaskIdLog(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['log']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].log.$get(args, options))
}

export async function postOrgTasksTaskIdStop(
  args: InferRequestType<(typeof client.org.tasks)[':task_id']['stop']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.tasks[':task_id'].stop.$post(args, options))
}

export async function getOrgWireless(
  args: InferRequestType<typeof client.org.wireless.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.wireless.$get(args, options))
}

export async function getOrgWirelessWirelessId(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.wireless[':wireless_id'].$get(args, options))
}

export async function deleteOrgWirelessWirelessId(
  args: InferRequestType<(typeof client.org.wireless)[':wireless_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.org.wireless[':wireless_id'].$delete(args, options))
}

export async function getReleasesAgentVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.releases.agent.version.$get(undefined, options))
}

export async function getReleasesPlatformVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.releases.platform.version.$get(undefined, options))
}

export async function getReleasesScannerVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.releases.scanner.version.$get(undefined, options))
}
