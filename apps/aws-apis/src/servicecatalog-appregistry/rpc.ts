import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function putApplicationsApplicationAttributeGroupsAttributeGroup(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application']['attribute-groups'][':attributeGroup'].$put(args, options),
  )
}

export async function deleteApplicationsApplicationAttributeGroupsAttributeGroup(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-groups'][':attributeGroup']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application']['attribute-groups'][':attributeGroup'].$delete(
      args,
      options,
    ),
  )
}

export async function getApplicationsApplicationResourcesResourceTypeResource(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application'].resources[':resourceType'][':resource'].$get(args, options),
  )
}

export async function putApplicationsApplicationResourcesResourceTypeResource(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application'].resources[':resourceType'][':resource'].$put(args, options),
  )
}

export async function deleteApplicationsApplicationResourcesResourceTypeResource(
  args: InferRequestType<
    (typeof client.applications)[':application']['resources'][':resourceType'][':resource']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application'].resources[':resourceType'][':resource'].$delete(
      args,
      options,
    ),
  )
}

export async function getApplications(
  args: InferRequestType<typeof client.applications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$get(args, options))
}

export async function postApplications(
  args: InferRequestType<typeof client.applications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications.$post(args, options))
}

export async function getAttributeGroups(
  args: InferRequestType<(typeof client)['attribute-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute-groups'].$get(args, options))
}

export async function postAttributeGroups(
  args: InferRequestType<(typeof client)['attribute-groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute-groups'].$post(args, options))
}

export async function getApplicationsApplication(
  args: InferRequestType<(typeof client.applications)[':application']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application'].$get(args, options))
}

export async function deleteApplicationsApplication(
  args: InferRequestType<(typeof client.applications)[':application']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application'].$delete(args, options))
}

export async function patchApplicationsApplication(
  args: InferRequestType<(typeof client.applications)[':application']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application'].$patch(args, options))
}

export async function getAttributeGroupsAttributeGroup(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute-groups'][':attributeGroup'].$get(args, options))
}

export async function deleteAttributeGroupsAttributeGroup(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute-groups'][':attributeGroup'].$delete(args, options))
}

export async function patchAttributeGroupsAttributeGroup(
  args: InferRequestType<(typeof client)['attribute-groups'][':attributeGroup']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute-groups'][':attributeGroup'].$patch(args, options))
}

export async function getConfiguration(
  args: InferRequestType<typeof client.configuration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.$get(args, options))
}

export async function putConfiguration(
  args: InferRequestType<typeof client.configuration.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.configuration.$put(args, options))
}

export async function getApplicationsApplicationAttributeGroups(
  args: InferRequestType<(typeof client.applications)[':application']['attribute-groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application']['attribute-groups'].$get(args, options),
  )
}

export async function getApplicationsApplicationResources(
  args: InferRequestType<(typeof client.applications)[':application']['resources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.applications[':application'].resources.$get(args, options))
}

export async function getApplicationsApplicationAttributeGroupDetails(
  args: InferRequestType<
    (typeof client.applications)[':application']['attribute-group-details']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.applications[':application']['attribute-group-details'].$get(args, options),
  )
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':resourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn'].$post(args, options))
}

export async function postSyncResourceTypeResource(
  args: InferRequestType<(typeof client.sync)[':resourceType'][':resource']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sync[':resourceType'][':resource'].$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':resourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':resourceArn#tagKeys'].$delete(args, options))
}
