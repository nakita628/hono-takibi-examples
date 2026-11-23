import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActionOrganizationActivityList(
  args: InferRequestType<typeof client.action.organization_activity_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_activity_list.$get(args, options))
}

export async function getActionOrganizationActivityListHtml(
  args: InferRequestType<typeof client.action.organization_activity_list_html.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_activity_list_html.$get(args, options))
}

export async function getActionOrganizationAutocomplete(
  args: InferRequestType<typeof client.action.organization_autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_autocomplete.$get(args, options))
}

export async function getActionOrganizationFollowerCount(
  args: InferRequestType<typeof client.action.organization_follower_count.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_follower_count.$get(args, options))
}

export async function getActionOrganizationFollowerList(
  args: InferRequestType<typeof client.action.organization_follower_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_follower_list.$get(args, options))
}

export async function getActionOrganizationList(
  args: InferRequestType<typeof client.action.organization_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_list.$get(args, options))
}

export async function getActionOrganizationListForUser(
  args: InferRequestType<typeof client.action.organization_list_for_user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_list_for_user.$get(args, options))
}

export async function getActionOrganizationRevisionList(
  args: InferRequestType<typeof client.action.organization_revision_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_revision_list.$get(args, options))
}

export async function getActionOrganizationShow(
  args: InferRequestType<typeof client.action.organization_show.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.organization_show.$get(args, options))
}

export async function getActionPackageActivityList(
  args: InferRequestType<typeof client.action.package_activity_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_activity_list.$get(args, options))
}

export async function getActionPackageActivityListHtml(
  args: InferRequestType<typeof client.action.package_activity_list_html.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_activity_list_html.$get(args, options))
}

export async function getActionPackageAutocomplete(
  args: InferRequestType<typeof client.action.package_autocomplete.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_autocomplete.$get(args, options))
}

export async function getActionPackageList(
  args: InferRequestType<typeof client.action.package_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_list.$get(args, options))
}

export async function getActionPackageRelationshipsList(
  args: InferRequestType<typeof client.action.package_relationships_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_relationships_list.$get(args, options))
}

export async function getActionPackageRevisionList(
  args: InferRequestType<typeof client.action.package_revision_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_revision_list.$get(args, options))
}

export async function getActionPackageSearch(
  args: InferRequestType<typeof client.action.package_search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_search.$get(args, options))
}

export async function getActionPackageShow(
  args: InferRequestType<typeof client.action.package_show.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.package_show.$get(args, options))
}

export async function getActionRelatedList(
  args: InferRequestType<typeof client.action.related_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.related_list.$get(args, options))
}

export async function getActionResourceSearch(
  args: InferRequestType<typeof client.action.resource_search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.resource_search.$get(args, options))
}

export async function getActionResourceShow(
  args: InferRequestType<typeof client.action.resource_show.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.resource_show.$get(args, options))
}

export async function getActionStatusShow(options?: ClientRequestOptions) {
  return await parseResponse(client.action.status_show.$get(undefined, options))
}

export async function getActionTagList(
  args: InferRequestType<typeof client.action.tag_list.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.action.tag_list.$get(args, options))
}
