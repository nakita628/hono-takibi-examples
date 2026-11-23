import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdminArtifactTypes(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.artifactTypes.$get(undefined, options))
}

export async function getAdminConfigProperties(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.config.properties.$get(undefined, options))
}

export async function getAdminConfigPropertiesPropertyName(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.properties[':propertyName'].$get(args, options))
}

export async function putAdminConfigPropertiesPropertyName(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.properties[':propertyName'].$put(args, options))
}

export async function deleteAdminConfigPropertiesPropertyName(
  args: InferRequestType<(typeof client.admin.config.properties)[':propertyName']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.config.properties[':propertyName'].$delete(args, options))
}

export async function getAdminExport(
  args: InferRequestType<typeof client.admin.export.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.export.$get(args, options))
}

export async function postAdminImport(
  args: InferRequestType<typeof client.admin.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.import.$post(args, options))
}

export async function getAdminLoggers(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.loggers.$get(undefined, options))
}

export async function getAdminLoggersLogger(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.loggers[':logger'].$get(args, options))
}

export async function putAdminLoggersLogger(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.loggers[':logger'].$put(args, options))
}

export async function deleteAdminLoggersLogger(
  args: InferRequestType<(typeof client.admin.loggers)[':logger']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.loggers[':logger'].$delete(args, options))
}

export async function getAdminRoleMappings(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.roleMappings.$get(undefined, options))
}

export async function postAdminRoleMappings(
  args: InferRequestType<typeof client.admin.roleMappings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.roleMappings.$post(args, options))
}

export async function getAdminRoleMappingsPrincipalId(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.roleMappings[':principalId'].$get(args, options))
}

export async function putAdminRoleMappingsPrincipalId(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.roleMappings[':principalId'].$put(args, options))
}

export async function deleteAdminRoleMappingsPrincipalId(
  args: InferRequestType<(typeof client.admin.roleMappings)[':principalId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.roleMappings[':principalId'].$delete(args, options))
}

export async function getAdminRules(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.rules.$get(undefined, options))
}

export async function postAdminRules(
  args: InferRequestType<typeof client.admin.rules.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.rules.$post(args, options))
}

export async function deleteAdminRules(options?: ClientRequestOptions) {
  return await parseResponse(client.admin.rules.$delete(undefined, options))
}

export async function getAdminRulesRule(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.rules[':rule'].$get(args, options))
}

export async function putAdminRulesRule(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.rules[':rule'].$put(args, options))
}

export async function deleteAdminRulesRule(
  args: InferRequestType<(typeof client.admin.rules)[':rule']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.admin.rules[':rule'].$delete(args, options))
}

export async function getGroups(
  args: InferRequestType<typeof client.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$get(args, options))
}

export async function postGroups(
  args: InferRequestType<typeof client.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.$post(args, options))
}

export async function getGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$get(args, options))
}

export async function deleteGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':groupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].$delete(args, options))
}

export async function getGroupsGroupIdArtifacts(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].artifacts.$get(args, options))
}

export async function postGroupsGroupIdArtifacts(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].artifacts.$post(args, options))
}

export async function deleteGroupsGroupIdArtifacts(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].artifacts.$delete(args, options))
}

export async function getGroupsGroupIdArtifactsArtifactId(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].artifacts[':artifactId'].$get(args, options))
}

export async function putGroupsGroupIdArtifactsArtifactId(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':groupId'].artifacts[':artifactId'].$put(args, options))
}

export async function deleteGroupsGroupIdArtifactsArtifactId(
  args: InferRequestType<(typeof client.groups)[':groupId']['artifacts'][':artifactId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].$delete(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdMeta(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].meta.$get(args, options),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdMeta(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].meta.$put(args, options),
  )
}

export async function postGroupsGroupIdArtifactsArtifactIdMeta(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['meta']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].meta.$post(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdOwner(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].owner.$get(args, options),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdOwner(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['owner']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].owner.$put(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdRules(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].rules.$get(args, options),
  )
}

export async function postGroupsGroupIdArtifactsArtifactIdRules(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].rules.$post(args, options),
  )
}

export async function deleteGroupsGroupIdArtifactsArtifactIdRules(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].rules.$delete(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdRulesRule(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$get(args, options),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdRulesRule(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$put(args, options),
  )
}

export async function deleteGroupsGroupIdArtifactsArtifactIdRulesRule(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['rules'][':rule']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].rules[':rule'].$delete(args, options),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdState(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].state.$put(args, options),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdTest(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['test']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].test.$put(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdVersions(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions.$get(args, options),
  )
}

export async function postGroupsGroupIdArtifactsArtifactIdVersions(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions.$post(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdVersionsVersion(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].$get(args, options),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$get(
      args,
      options,
    ),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$put(
      args,
      options,
    ),
  )
}

export async function deleteGroupsGroupIdArtifactsArtifactIdVersionsVersionMeta(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['meta']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].meta.$delete(
      args,
      options,
    ),
  )
}

export async function getGroupsGroupIdArtifactsArtifactIdVersionsVersionReferences(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['references']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].references.$get(
      args,
      options,
    ),
  )
}

export async function putGroupsGroupIdArtifactsArtifactIdVersionsVersionState(
  args: InferRequestType<
    (typeof client.groups)[':groupId']['artifacts'][':artifactId']['versions'][':version']['state']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.groups[':groupId'].artifacts[':artifactId'].versions[':version'].state.$put(
      args,
      options,
    ),
  )
}

export async function getIdsContentHashesContentHashIndex(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ids.contentHashes[':contentHash'].index.$get(args, options))
}

export async function getIdsContentHashesContentHashReferences(
  args: InferRequestType<(typeof client.ids.contentHashes)[':contentHash']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.ids.contentHashes[':contentHash'].references.$get(args, options),
  )
}

export async function getIdsContentIdsContentIdIndex(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ids.contentIds[':contentId'].index.$get(args, options))
}

export async function getIdsContentIdsContentIdReferences(
  args: InferRequestType<(typeof client.ids.contentIds)[':contentId']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ids.contentIds[':contentId'].references.$get(args, options))
}

export async function getIdsGlobalIdsGlobalId(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ids.globalIds[':globalId'].$get(args, options))
}

export async function getIdsGlobalIdsGlobalIdReferences(
  args: InferRequestType<(typeof client.ids.globalIds)[':globalId']['references']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ids.globalIds[':globalId'].references.$get(args, options))
}

export async function getSearchArtifacts(
  args: InferRequestType<typeof client.search.artifacts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.artifacts.$get(args, options))
}

export async function postSearchArtifacts(
  args: InferRequestType<typeof client.search.artifacts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.artifacts.$post(args, options))
}

export async function getSystemInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.system.info.$get(undefined, options))
}

export async function getSystemLimits(options?: ClientRequestOptions) {
  return await parseResponse(client.system.limits.$get(undefined, options))
}

export async function getUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$get(undefined, options))
}
