import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApiChangeRequests(options?: ClientRequestOptions) {
  return await parseResponse(client.api.changeRequests.$get(undefined, options))
}

export async function getArchivesExport(
  args: InferRequestType<typeof client.archives.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.export.$get(args, options))
}

export async function postArchivesImport(
  args: InferRequestType<typeof client.archives.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.import.$post(args, options))
}

export async function getBranding(options?: ClientRequestOptions) {
  return await parseResponse(client.branding.$get(undefined, options))
}

export async function postBranding(
  args: InferRequestType<typeof client.branding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.branding.$post(args, options))
}

export async function postBrandingReload(options?: ClientRequestOptions) {
  return await parseResponse(client.branding.reload.$post(undefined, options))
}

export async function getChangeRequestsChangeRequestId(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changeRequests[':changeRequestId'].$get(args, options))
}

export async function postChangeRequestsChangeRequestId(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changeRequests[':changeRequestId'].$post(args, options))
}

export async function deleteChangeRequestsChangeRequestId(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changeRequests[':changeRequestId'].$delete(args, options))
}

export async function postChangeRequestsChangeRequestIdAccept(
  args: InferRequestType<(typeof client.changeRequests)[':changeRequestId']['accept']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changeRequests[':changeRequestId'].accept.$post(args, options))
}

export async function getCompliance(
  args: InferRequestType<typeof client.compliance.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compliance.$get(args, options))
}

export async function getComplianceNodes(
  args: InferRequestType<typeof client.compliance.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compliance.nodes.$get(args, options))
}

export async function getComplianceNodesNodeId(
  args: InferRequestType<(typeof client.compliance.nodes)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compliance.nodes[':nodeId'].$get(args, options))
}

export async function getComplianceRules(
  args: InferRequestType<typeof client.compliance.rules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compliance.rules.$get(args, options))
}

export async function getComplianceRulesRuleId(
  args: InferRequestType<(typeof client.compliance.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.compliance.rules[':ruleId'].$get(args, options))
}

export async function getCve(options?: ClientRequestOptions) {
  return await parseResponse(client.cve.$get(undefined, options))
}

export async function postCveCheck(options?: ClientRequestOptions) {
  return await parseResponse(client.cve.check.$post(undefined, options))
}

export async function getCveCheckConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.cve.check.config.$get(undefined, options))
}

export async function postCveCheckConfig(
  args: InferRequestType<typeof client.cve.check.config.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cve.check.config.$post(args, options))
}

export async function getCveCheckLast(options?: ClientRequestOptions) {
  return await parseResponse(client.cve.check.last.$get(undefined, options))
}

export async function postCveList(
  args: InferRequestType<typeof client.cve.list.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cve.list.$post(args, options))
}

export async function postCveUpdateIndex(
  args: InferRequestType<typeof client.cve.update.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cve.update.index.$post(args, options))
}

export async function postCveUpdateFs(options?: ClientRequestOptions) {
  return await parseResponse(client.cve.update.fs.$post(undefined, options))
}

export async function getDatasources(options?: ClientRequestOptions) {
  return await parseResponse(client.datasources.$get(undefined, options))
}

export async function putDatasources(
  args: InferRequestType<typeof client.datasources.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.$put(args, options))
}

export async function postDatasourcesReload(options?: ClientRequestOptions) {
  return await parseResponse(client.datasources.reload.$post(undefined, options))
}

export async function postDatasourcesReloadDatasourceId(
  args: InferRequestType<(typeof client.datasources.reload)[':datasourceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources.reload[':datasourceId'].$post(args, options))
}

export async function getDatasourcesDatasourceId(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':datasourceId'].$get(args, options))
}

export async function postDatasourcesDatasourceId(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':datasourceId'].$post(args, options))
}

export async function deleteDatasourcesDatasourceId(
  args: InferRequestType<(typeof client.datasources)[':datasourceId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datasources[':datasourceId'].$delete(args, options))
}

export async function getDirectives(options?: ClientRequestOptions) {
  return await parseResponse(client.directives.$get(undefined, options))
}

export async function putDirectives(
  args: InferRequestType<typeof client.directives.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directives.$put(args, options))
}

export async function getDirectivesDirectiveId(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directives[':directiveId'].$get(args, options))
}

export async function postDirectivesDirectiveId(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directives[':directiveId'].$post(args, options))
}

export async function deleteDirectivesDirectiveId(
  args: InferRequestType<(typeof client.directives)[':directiveId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directives[':directiveId'].$delete(args, options))
}

export async function postDirectivesDirectiveIdCheck(
  args: InferRequestType<(typeof client.directives)[':directiveId']['check']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.directives[':directiveId'].check.$post(args, options))
}

export async function getGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.$get(undefined, options))
}

export async function putGroups(
  args: InferRequestType<typeof client.groups.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$put(args, options))
}

export async function putGroupsCategories(
  args: InferRequestType<typeof client.groups.categories.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.categories.$put(args, options))
}

export async function getGroupsCategoriesGroupCategoryId(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.categories[':groupCategoryId'].$get(args, options))
}

export async function postGroupsCategoriesGroupCategoryId(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.categories[':groupCategoryId'].$post(args, options))
}

export async function deleteGroupsCategoriesGroupCategoryId(
  args: InferRequestType<(typeof client.groups.categories)[':groupCategoryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.categories[':groupCategoryId'].$delete(args, options))
}

export async function getGroupsTree(options?: ClientRequestOptions) {
  return await parseResponse(client.groups.tree.$get(undefined, options))
}

export async function getGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$get(args, options))
}

export async function postGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$post(args, options))
}

export async function deleteGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$delete(args, options))
}

export async function postGroupsGroupIdReload(
  args: InferRequestType<(typeof client.groups)[':groupId']['reload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].reload.$post(args, options))
}

export async function getInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.info.$get(undefined, options))
}

export async function getInfoDetailsEndpointName(
  args: InferRequestType<(typeof client.info.details)[':endpointName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info.details[':endpointName'].$get(args, options))
}

export async function getInfoSectionId(
  args: InferRequestType<(typeof client.info)[':sectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.info[':sectionId'].$get(args, options))
}

export async function getInventoriesInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.inventories.info.$get(undefined, options))
}

export async function postInventoriesUpload(
  args: InferRequestType<typeof client.inventories.upload.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventories.upload.$post(args, options))
}

export async function postInventoriesWatcherRestart(options?: ClientRequestOptions) {
  return await parseResponse(client.inventories.watcher.restart.$post(undefined, options))
}

export async function postInventoriesWatcherStart(options?: ClientRequestOptions) {
  return await parseResponse(client.inventories.watcher.start.$post(undefined, options))
}

export async function postInventoriesWatcherStop(options?: ClientRequestOptions) {
  return await parseResponse(client.inventories.watcher.stop.$post(undefined, options))
}

export async function getMethods(options?: ClientRequestOptions) {
  return await parseResponse(client.methods.$get(undefined, options))
}

export async function postMethodsReload(options?: ClientRequestOptions) {
  return await parseResponse(client.methods.reload.$post(undefined, options))
}

export async function getNodes(
  args: InferRequestType<typeof client.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.$get(args, options))
}

export async function putNodes(
  args: InferRequestType<typeof client.nodes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.$put(args, options))
}

export async function postNodesApplyPolicy(options?: ClientRequestOptions) {
  return await parseResponse(client.nodes.applyPolicy.$post(undefined, options))
}

export async function getNodesPending(
  args: InferRequestType<typeof client.nodes.pending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.pending.$get(args, options))
}

export async function postNodesPendingNodeId(
  args: InferRequestType<(typeof client.nodes.pending)[':nodeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.pending[':nodeId'].$post(args, options))
}

export async function getNodesStatus(
  args: InferRequestType<typeof client.nodes.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes.status.$get(args, options))
}

export async function getNodesNodeId(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeId'].$get(args, options))
}

export async function postNodesNodeId(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeId'].$post(args, options))
}

export async function deleteNodesNodeId(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeId'].$delete(args, options))
}

export async function postNodesNodeIdApplyPolicy(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['applyPolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeId'].applyPolicy.$post(args, options))
}

export async function postNodesNodeIdFetchData(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['fetchData']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeId'].fetchData.$post(args, options))
}

export async function postNodesNodeIdFetchDataDatasourceId(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['fetchData'][':datasourceId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.nodes[':nodeId'].fetchData[':datasourceId'].$post(args, options),
  )
}

export async function getNodesNodeIdInheritedProperties(
  args: InferRequestType<(typeof client.nodes)[':nodeId']['inheritedProperties']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.nodes[':nodeId'].inheritedProperties.$get(args, options))
}

export async function getParameters(options?: ClientRequestOptions) {
  return await parseResponse(client.parameters.$get(undefined, options))
}

export async function putParameters(
  args: InferRequestType<typeof client.parameters.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameters.$put(args, options))
}

export async function getParametersParameterId(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameters[':parameterId'].$get(args, options))
}

export async function postParametersParameterId(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameters[':parameterId'].$post(args, options))
}

export async function deleteParametersParameterId(
  args: InferRequestType<(typeof client.parameters)[':parameterId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.parameters[':parameterId'].$delete(args, options))
}

export async function getRules(options?: ClientRequestOptions) {
  return await parseResponse(client.rules.$get(undefined, options))
}

export async function putRules(
  args: InferRequestType<typeof client.rules.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.$put(args, options))
}

export async function putRulesCategories(
  args: InferRequestType<typeof client.rules.categories.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.categories.$put(args, options))
}

export async function getRulesCategoriesRuleCategoryId(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.categories[':ruleCategoryId'].$get(args, options))
}

export async function postRulesCategoriesRuleCategoryId(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.categories[':ruleCategoryId'].$post(args, options))
}

export async function deleteRulesCategoriesRuleCategoryId(
  args: InferRequestType<(typeof client.rules.categories)[':ruleCategoryId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules.categories[':ruleCategoryId'].$delete(args, options))
}

export async function getRulesTree(options?: ClientRequestOptions) {
  return await parseResponse(client.rules.tree.$get(undefined, options))
}

export async function getRulesRuleId(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleId'].$get(args, options))
}

export async function postRulesRuleId(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleId'].$post(args, options))
}

export async function deleteRulesRuleId(
  args: InferRequestType<(typeof client.rules)[':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rules[':ruleId'].$delete(args, options))
}

export async function postScaleoutrelayDemoteNodeId(
  args: InferRequestType<(typeof client.scaleoutrelay.demote)[':nodeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaleoutrelay.demote[':nodeId'].$post(args, options))
}

export async function postScaleoutrelayPromoteNodeId(
  args: InferRequestType<(typeof client.scaleoutrelay.promote)[':nodeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.scaleoutrelay.promote[':nodeId'].$post(args, options))
}

export async function getSecretIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.secret.index.$get(undefined, options))
}

export async function putSecretIndex(
  args: InferRequestType<typeof client.secret.index.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secret.index.$put(args, options))
}

export async function postSecretIndex(
  args: InferRequestType<typeof client.secret.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secret.index.$post(args, options))
}

export async function getSecretName(
  args: InferRequestType<(typeof client.secret)[':name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secret[':name'].$get(args, options))
}

export async function deleteSecretName(
  args: InferRequestType<(typeof client.secret)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.secret[':name'].$delete(args, options))
}

export async function getSettings(options?: ClientRequestOptions) {
  return await parseResponse(client.settings.$get(undefined, options))
}

export async function getSettingsAllowedNetworksNodeId(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.allowed_networks[':nodeId'].$get(args, options))
}

export async function postSettingsAllowedNetworksNodeId(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.allowed_networks[':nodeId'].$post(args, options))
}

export async function postSettingsAllowedNetworksNodeIdDiff(
  args: InferRequestType<(typeof client.settings.allowed_networks)[':nodeId']['diff']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.allowed_networks[':nodeId'].diff.$post(args, options))
}

export async function getSettingsSettingId(
  args: InferRequestType<(typeof client.settings)[':settingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings[':settingId'].$get(args, options))
}

export async function postSettingsSettingId(
  args: InferRequestType<(typeof client.settings)[':settingId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings[':settingId'].$post(args, options))
}

export async function getStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.status.$get(undefined, options))
}

export async function getSystemArchivesArchiveKind(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.archives[':archiveKind'].$get(args, options))
}

export async function postSystemArchivesArchiveKind(
  args: InferRequestType<(typeof client.system.archives)[':archiveKind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.system.archives[':archiveKind'].$post(args, options))
}

export async function postSystemArchivesArchiveKindRestoreArchiveRestoreKind(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['restore'][':archiveRestoreKind']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.system.archives[':archiveKind'].restore[':archiveRestoreKind'].$post(args, options),
  )
}

export async function getSystemArchivesArchiveKindZipCommitId(
  args: InferRequestType<
    (typeof client.system.archives)[':archiveKind']['zip'][':commitId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.system.archives[':archiveKind'].zip[':commitId'].$get(args, options),
  )
}

export async function getSystemHealthcheck(options?: ClientRequestOptions) {
  return await parseResponse(client.system.healthcheck.$get(undefined, options))
}

export async function getSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.system.info.$get(undefined, options))
}

export async function postSystemMaintenancePurgeSoftware(options?: ClientRequestOptions) {
  return await parseResponse(client.system.maintenance.purgeSoftware.$post(undefined, options))
}

export async function postSystemRegeneratePolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.system.regenerate.policies.$post(undefined, options))
}

export async function postSystemReload(options?: ClientRequestOptions) {
  return await parseResponse(client.system.reload.$post(undefined, options))
}

export async function postSystemReloadGroups(options?: ClientRequestOptions) {
  return await parseResponse(client.system.reload.groups.$post(undefined, options))
}

export async function postSystemReloadTechniques(options?: ClientRequestOptions) {
  return await parseResponse(client.system.reload.techniques.$post(undefined, options))
}

export async function getSystemStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.system.status.$get(undefined, options))
}

export async function postSystemUpdatePolicies(options?: ClientRequestOptions) {
  return await parseResponse(client.system.update.policies.$post(undefined, options))
}

export async function getTechniques(options?: ClientRequestOptions) {
  return await parseResponse(client.techniques.$get(undefined, options))
}

export async function putTechniques(
  args: InferRequestType<typeof client.techniques.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.techniques.$put(args, options))
}

export async function getTechniquesCategories(options?: ClientRequestOptions) {
  return await parseResponse(client.techniques.categories.$get(undefined, options))
}

export async function postTechniquesReload(options?: ClientRequestOptions) {
  return await parseResponse(client.techniques.reload.$post(undefined, options))
}

export async function getTechniquesVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.techniques.versions.$get(undefined, options))
}

export async function getTechniquesTechniqueId(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.techniques[':techniqueId'].$get(args, options))
}

export async function getTechniquesTechniqueIdDirectives(
  args: InferRequestType<(typeof client.techniques)[':techniqueId']['directives']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.techniques[':techniqueId'].directives.$get(args, options))
}

export async function getTechniquesTechniqueIdTechniqueVersion(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.techniques[':techniqueId'][':techniqueVersion'].$get(args, options),
  )
}

export async function postTechniquesTechniqueIdTechniqueVersion(
  args: InferRequestType<(typeof client.techniques)[':techniqueId'][':techniqueVersion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.techniques[':techniqueId'][':techniqueVersion'].$post(args, options),
  )
}

export async function deleteTechniquesTechniqueIdTechniqueVersion(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.techniques[':techniqueId'][':techniqueVersion'].$delete(args, options),
  )
}

export async function getTechniquesTechniqueIdTechniqueVersionDirectives(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['directives']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.techniques[':techniqueId'][':techniqueVersion'].directives.$get(args, options),
  )
}

export async function getTechniquesTechniqueIdTechniqueVersionResources(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['resources']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.techniques[':techniqueId'][':techniqueVersion'].resources.$get(args, options),
  )
}

export async function getTechniquesTechniqueIdTechniqueVersionRevisions(
  args: InferRequestType<
    (typeof client.techniques)[':techniqueId'][':techniqueVersion']['revisions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.techniques[':techniqueId'][':techniqueVersion'].revisions.$get(args, options),
  )
}

export async function postUsermanagement(
  args: InferRequestType<typeof client.usermanagement.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usermanagement.$post(args, options))
}

export async function getUsermanagementRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.usermanagement.roles.$get(undefined, options))
}

export async function postUsermanagementUpdateUsername(
  args: InferRequestType<(typeof client.usermanagement.update)[':username']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usermanagement.update[':username'].$post(args, options))
}

export async function getUsermanagementUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.usermanagement.users.$get(undefined, options))
}

export async function getUsermanagementUsersReload(options?: ClientRequestOptions) {
  return await parseResponse(client.usermanagement.users.reload.$get(undefined, options))
}

export async function deleteUsermanagementUsername(
  args: InferRequestType<(typeof client.usermanagement)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.usermanagement[':username'].$delete(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function postValidatedUsers(
  args: InferRequestType<typeof client.validatedUsers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validatedUsers.$post(args, options))
}

export async function deleteValidatedUsersUsername(
  args: InferRequestType<(typeof client.validatedUsers)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.validatedUsers[':username'].$delete(args, options))
}
