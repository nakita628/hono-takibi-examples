import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV1CodeReferences(
  args: InferRequestType<(typeof client.v1)['code-references']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['code-references'].$post(args, options))
}

export async function postV1CodeReferencesDeleteReports(
  args: InferRequestType<(typeof client.v1)['code-references']['delete-reports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1['code-references']['delete-reports'].$post(args, options))
}

export async function getV1ConfigsConfigId(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':configId'].$get(args, options))
}

export async function putV1ConfigsConfigId(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':configId'].$put(args, options))
}

export async function deleteV1ConfigsConfigId(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':configId'].$delete(args, options))
}

export async function getV1ConfigsConfigIdDeletedSettings(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['deleted-settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':configId']['deleted-settings'].$get(args, options))
}

export async function getV1ConfigsConfigIdEnvironmentsEnvironmentId(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.configs[':configId'].environments[':environmentId'].$get(args, options),
  )
}

export async function getV1ConfigsConfigIdEnvironmentsEnvironmentIdValues(
  args: InferRequestType<
    (typeof client.v1.configs)[':configId']['environments'][':environmentId']['values']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.configs[':configId'].environments[':environmentId'].values.$get(args, options),
  )
}

export async function getV1ConfigsConfigIdSettings(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':configId'].settings.$get(args, options))
}

export async function postV1ConfigsConfigIdSettings(
  args: InferRequestType<(typeof client.v1.configs)[':configId']['settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.configs[':configId'].settings.$post(args, options))
}

export async function getV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':environmentId'].$get(args, options))
}

export async function putV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':environmentId'].$put(args, options))
}

export async function deleteV1EnvironmentsEnvironmentId(
  args: InferRequestType<(typeof client.v1.environments)[':environmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.environments[':environmentId'].$delete(args, options))
}

export async function postV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
      ':integrationLinkType'
    ][':key'].$post(args, options),
  )
}

export async function deleteV1EnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksIntegrationLinkTypeKey(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':integrationLinkType'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environmentId'].settings[':settingId'].integrationLinks[
      ':integrationLinkType'
    ][':key'].$delete(args, options),
  )
}

export async function getV1EnvironmentsEnvironmentIdSettingsSettingIdValue(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environmentId'].settings[':settingId'].value.$get(args, options),
  )
}

export async function putV1EnvironmentsEnvironmentIdSettingsSettingIdValue(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environmentId'].settings[':settingId'].value.$put(args, options),
  )
}

export async function patchV1EnvironmentsEnvironmentIdSettingsSettingIdValue(
  args: InferRequestType<
    (typeof client.v1.environments)[':environmentId']['settings'][':settingId']['value']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.environments[':environmentId'].settings[':settingId'].value.$patch(args, options),
  )
}

export async function getV1IntegrationLinkIntegrationLinkTypeKeyDetails(
  args: InferRequestType<
    (typeof client.v1.integrationLink)[':integrationLinkType'][':key']['details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.integrationLink[':integrationLinkType'][':key'].details.$get(args, options),
  )
}

export async function postV1JiraConnect(
  args: InferRequestType<typeof client.v1.jira.Connect.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.jira.Connect.$post(args, options))
}

export async function postV1JiraEnvironmentsEnvironmentIdSettingsSettingIdIntegrationLinksKey(
  args: InferRequestType<
    (typeof client.v1.jira.environments)[':environmentId']['settings'][':settingId']['integrationLinks'][':key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.jira.environments[':environmentId'].settings[':settingId'].integrationLinks[
      ':key'
    ].$post(args, options),
  )
}

export async function getV1Me(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.me.$get(undefined, options))
}

export async function getV1Organizations(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.organizations.$get(undefined, options))
}

export async function getV1OrganizationsOrganizationIdAuditlogs(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['auditlogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].auditlogs.$get(args, options),
  )
}

export async function getV1OrganizationsOrganizationIdMembers(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.organizations[':organizationId'].members.$get(args, options))
}

export async function postV1OrganizationsOrganizationIdMembersUserId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].$post(args, options),
  )
}

export async function deleteV1OrganizationsOrganizationIdMembersUserId(
  args: InferRequestType<
    (typeof client.v1.organizations)[':organizationId']['members'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].members[':userId'].$delete(args, options),
  )
}

export async function postV1OrganizationsOrganizationIdProducts(
  args: InferRequestType<(typeof client.v1.organizations)[':organizationId']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.organizations[':organizationId'].products.$post(args, options),
  )
}

export async function getV1PermissionsPermissionGroupId(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions[':permissionGroupId'].$get(args, options))
}

export async function putV1PermissionsPermissionGroupId(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions[':permissionGroupId'].$put(args, options))
}

export async function deleteV1PermissionsPermissionGroupId(
  args: InferRequestType<(typeof client.v1.permissions)[':permissionGroupId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.permissions[':permissionGroupId'].$delete(args, options))
}

export async function getV1Products(options?: ClientRequestOptions) {
  return await parseResponse(client.v1.products.$get(undefined, options))
}

export async function getV1ProductsProductId(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].$get(args, options))
}

export async function putV1ProductsProductId(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].$put(args, options))
}

export async function deleteV1ProductsProductId(
  args: InferRequestType<(typeof client.v1.products)[':productId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].$delete(args, options))
}

export async function getV1ProductsProductIdAuditlogs(
  args: InferRequestType<(typeof client.v1.products)[':productId']['auditlogs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].auditlogs.$get(args, options))
}

export async function getV1ProductsProductIdConfigs(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].configs.$get(args, options))
}

export async function postV1ProductsProductIdConfigs(
  args: InferRequestType<(typeof client.v1.products)[':productId']['configs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].configs.$post(args, options))
}

export async function getV1ProductsProductIdEnvironments(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].environments.$get(args, options))
}

export async function postV1ProductsProductIdEnvironments(
  args: InferRequestType<(typeof client.v1.products)[':productId']['environments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].environments.$post(args, options))
}

export async function getV1ProductsProductIdMembers(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].members.$get(args, options))
}

export async function postV1ProductsProductIdMembersInvite(
  args: InferRequestType<(typeof client.v1.products)[':productId']['members']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].members.invite.$post(args, options))
}

export async function deleteV1ProductsProductIdMembersUserId(
  args: InferRequestType<
    (typeof client.v1.products)[':productId']['members'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v1.products[':productId'].members[':userId'].$delete(args, options),
  )
}

export async function getV1ProductsProductIdPermissions(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].permissions.$get(args, options))
}

export async function postV1ProductsProductIdPermissions(
  args: InferRequestType<(typeof client.v1.products)[':productId']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].permissions.$post(args, options))
}

export async function getV1ProductsProductIdSegments(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].segments.$get(args, options))
}

export async function postV1ProductsProductIdSegments(
  args: InferRequestType<(typeof client.v1.products)[':productId']['segments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].segments.$post(args, options))
}

export async function getV1ProductsProductIdTags(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].tags.$get(args, options))
}

export async function postV1ProductsProductIdTags(
  args: InferRequestType<(typeof client.v1.products)[':productId']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.products[':productId'].tags.$post(args, options))
}

export async function getV1SegmentsSegmentId(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments[':segmentId'].$get(args, options))
}

export async function putV1SegmentsSegmentId(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments[':segmentId'].$put(args, options))
}

export async function deleteV1SegmentsSegmentId(
  args: InferRequestType<(typeof client.v1.segments)[':segmentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.segments[':segmentId'].$delete(args, options))
}

export async function getV1SettingsSettingId(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':settingId'].$get(args, options))
}

export async function deleteV1SettingsSettingId(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':settingId'].$delete(args, options))
}

export async function patchV1SettingsSettingId(
  args: InferRequestType<(typeof client.v1.settings)[':settingId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':settingId'].$patch(args, options))
}

export async function getV1SettingsSettingKeyOrIdValue(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':settingKeyOrId'].value.$get(args, options))
}

export async function putV1SettingsSettingKeyOrIdValue(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':settingKeyOrId'].value.$put(args, options))
}

export async function patchV1SettingsSettingKeyOrIdValue(
  args: InferRequestType<(typeof client.v1.settings)[':settingKeyOrId']['value']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.settings[':settingKeyOrId'].value.$patch(args, options))
}

export async function getV1TagsTagId(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tagId'].$get(args, options))
}

export async function putV1TagsTagId(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tagId'].$put(args, options))
}

export async function deleteV1TagsTagId(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tagId'].$delete(args, options))
}

export async function getV1TagsTagIdSettings(
  args: InferRequestType<(typeof client.v1.tags)[':tagId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v1.tags[':tagId'].settings.$get(args, options))
}
