import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDocgenTemplates(
  args: InferRequestType<typeof client.docgen_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_templates.$get(args, options))
}

export async function postDocgenTemplates(
  args: InferRequestType<typeof client.docgen_templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_templates.$post(args, options))
}

export async function getDocgenTemplatesTemplateId(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_templates[':template_id'].$get(args, options))
}

export async function deleteDocgenTemplatesTemplateId(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_templates[':template_id'].$delete(args, options))
}

export async function getDocgenTemplatesTemplateIdTags(
  args: InferRequestType<(typeof client.docgen_templates)[':template_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_templates[':template_id'].tags.$get(args, options))
}

export async function getDocgenJobsJobId(
  args: InferRequestType<(typeof client.docgen_jobs)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_jobs[':job_id'].$get(args, options))
}

export async function getDocgenJobs(
  args: InferRequestType<typeof client.docgen_jobs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_jobs.$get(args, options))
}

export async function getDocgenTemplateJobsTemplateId(
  args: InferRequestType<(typeof client.docgen_template_jobs)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_template_jobs[':template_id'].$get(args, options))
}

export async function getDocgenBatchJobsBatchId(
  args: InferRequestType<(typeof client.docgen_batch_jobs)[':batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_batch_jobs[':batch_id'].$get(args, options))
}

export async function postDocgenBatches(
  args: InferRequestType<typeof client.docgen_batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.docgen_batches.$post(args, options))
}

export async function getEnterpriseConfigurationsEnterpriseId(
  args: InferRequestType<(typeof client.enterprise_configurations)[':enterprise_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise_configurations[':enterprise_id'].$get(args, options))
}

export async function getHubs(
  args: InferRequestType<typeof client.hubs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs.$get(args, options))
}

export async function postHubs(
  args: InferRequestType<typeof client.hubs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs.$post(args, options))
}

export async function getEnterpriseHubs(
  args: InferRequestType<typeof client.enterprise_hubs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enterprise_hubs.$get(args, options))
}

export async function getHubsHubId(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs[':hub_id'].$get(args, options))
}

export async function putHubsHubId(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs[':hub_id'].$put(args, options))
}

export async function deleteHubsHubId(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs[':hub_id'].$delete(args, options))
}

export async function postHubsHubIdCopy(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs[':hub_id'].copy.$post(args, options))
}

export async function getHubCollaborations(
  args: InferRequestType<typeof client.hub_collaborations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_collaborations.$get(args, options))
}

export async function postHubCollaborations(
  args: InferRequestType<typeof client.hub_collaborations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_collaborations.$post(args, options))
}

export async function getHubCollaborationsHubCollaborationId(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_collaborations[':hub_collaboration_id'].$get(args, options))
}

export async function putHubCollaborationsHubCollaborationId(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_collaborations[':hub_collaboration_id'].$put(args, options))
}

export async function deleteHubCollaborationsHubCollaborationId(
  args: InferRequestType<(typeof client.hub_collaborations)[':hub_collaboration_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.hub_collaborations[':hub_collaboration_id'].$delete(args, options),
  )
}

export async function getHubItems(
  args: InferRequestType<typeof client.hub_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_items.$get(args, options))
}

export async function postHubsHubIdManageItems(
  args: InferRequestType<(typeof client.hubs)[':hub_id']['manage_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hubs[':hub_id'].manage_items.$post(args, options))
}

export async function getHubDocumentPages(
  args: InferRequestType<typeof client.hub_document_pages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_document_pages.$get(args, options))
}

export async function getHubDocumentBlocks(
  args: InferRequestType<typeof client.hub_document_blocks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hub_document_blocks.$get(args, options))
}

export async function getShieldLists(
  args: InferRequestType<typeof client.shield_lists.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_lists.$get(args, options))
}

export async function postShieldLists(
  args: InferRequestType<typeof client.shield_lists.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_lists.$post(args, options))
}

export async function getShieldListsShieldListId(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_lists[':shield_list_id'].$get(args, options))
}

export async function putShieldListsShieldListId(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_lists[':shield_list_id'].$put(args, options))
}

export async function deleteShieldListsShieldListId(
  args: InferRequestType<(typeof client.shield_lists)[':shield_list_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_lists[':shield_list_id'].$delete(args, options))
}

export async function getArchives(
  args: InferRequestType<typeof client.archives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.$get(args, options))
}

export async function postArchives(
  args: InferRequestType<typeof client.archives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives.$post(args, options))
}

export async function putArchivesArchiveId(
  args: InferRequestType<(typeof client.archives)[':archive_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives[':archive_id'].$put(args, options))
}

export async function deleteArchivesArchiveId(
  args: InferRequestType<(typeof client.archives)[':archive_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.archives[':archive_id'].$delete(args, options))
}

export async function postExternalUsersSubmitDeleteJob(
  args: InferRequestType<typeof client.external_users.submit_delete_job.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.external_users.submit_delete_job.$post(args, options))
}
