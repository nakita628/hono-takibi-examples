import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuthentication(options?: ClientRequestOptions) {
  return await parseResponse(client.authentication.$get(undefined, options))
}

export async function getCombinedSubmissions(
  args: InferRequestType<typeof client.combined_submissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.combined_submissions.$get(args, options))
}

export async function postCombinedSubmissions(
  args: InferRequestType<typeof client.combined_submissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.combined_submissions.$post(args, options))
}

export async function getCombinedSubmissionsCombinedSubmissionId(
  args: InferRequestType<(typeof client.combined_submissions)[':combined_submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.combined_submissions[':combined_submission_id'].$get(args, options),
  )
}

export async function deleteCombinedSubmissionsCombinedSubmissionId(
  args: InferRequestType<
    (typeof client.combined_submissions)[':combined_submission_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.combined_submissions[':combined_submission_id'].$delete(args, options),
  )
}

export async function postCombinedSubmissionsV2(
  args: InferRequestType<(typeof client)['combined_submissions?v=2']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['combined_submissions?v=2'].$post(args, options))
}

export async function postCustomFiles(
  args: InferRequestType<typeof client.custom_files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.custom_files.$post(args, options))
}

export async function getDataRequestsDataRequestId(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_requests[':data_request_id'].$get(args, options))
}

export async function putDataRequestsDataRequestId(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_requests[':data_request_id'].$put(args, options))
}

export async function postDataRequestsDataRequestIdTokens(
  args: InferRequestType<(typeof client.data_requests)[':data_request_id']['tokens']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.data_requests[':data_request_id'].tokens.$post(args, options))
}

export async function getFoldersIndex(
  args: InferRequestType<typeof client.folders.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.index.$get(args, options))
}

export async function postFoldersIndex(
  args: InferRequestType<typeof client.folders.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.index.$post(args, options))
}

export async function deleteFoldersFolderId(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].$delete(args, options))
}

export async function postFoldersFolderIdMove(
  args: InferRequestType<(typeof client.folders)[':folder_id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].move.$post(args, options))
}

export async function postFoldersFolderIdRename(
  args: InferRequestType<(typeof client.folders)[':folder_id']['rename']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].rename.$post(args, options))
}

export async function getSubmissions(
  args: InferRequestType<typeof client.submissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions.$get(args, options))
}

export async function postSubmissionsBatches(
  args: InferRequestType<typeof client.submissions.batches.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions.batches.$post(args, options))
}

export async function getSubmissionsBatchesSubmissionBatchId(
  args: InferRequestType<(typeof client.submissions.batches)[':submission_batch_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions.batches[':submission_batch_id'].$get(args, options))
}

export async function getSubmissionsSubmissionId(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions[':submission_id'].$get(args, options))
}

export async function deleteSubmissionsSubmissionId(
  args: InferRequestType<(typeof client.submissions)[':submission_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.submissions[':submission_id'].$delete(args, options))
}

export async function getTemplates(
  args: InferRequestType<typeof client.templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$get(args, options))
}

export async function postTemplates(
  args: InferRequestType<typeof client.templates.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates.$post(args, options))
}

export async function getTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].$get(args, options))
}

export async function putTemplatesTemplateId(
  args: InferRequestType<(typeof client.templates)[':template_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].$put(args, options))
}

export async function putTemplatesTemplateIdAddFields(
  args: InferRequestType<(typeof client.templates)[':template_id']['add_fields']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].add_fields.$put(args, options))
}

export async function postTemplatesTemplateIdCopy(
  args: InferRequestType<(typeof client.templates)[':template_id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].copy.$post(args, options))
}

export async function postTemplatesTemplateIdMove(
  args: InferRequestType<(typeof client.templates)[':template_id']['move']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].move.$post(args, options))
}

export async function getTemplatesTemplateIdSchema(
  args: InferRequestType<(typeof client.templates)[':template_id']['schema']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].schema.$get(args, options))
}

export async function getTemplatesTemplateIdSubmissions(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].submissions.$get(args, options))
}

export async function postTemplatesTemplateIdSubmissions(
  args: InferRequestType<(typeof client.templates)[':template_id']['submissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id'].submissions.$post(args, options))
}

export async function postTemplatesTemplateIdSubmissionsBatch(
  args: InferRequestType<
    (typeof client.templates)[':template_id']['submissions']['batch']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':template_id'].submissions.batch.$post(args, options),
  )
}

export async function getTemplatesTemplateIdFullTrue(
  args: InferRequestType<(typeof client.templates)[':template_id?full=true']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':template_id?full=true'].$get(args, options))
}

export async function postTemplatesDescCachedUpload(
  args: InferRequestType<(typeof client)['templates?desc=cached_upload']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates?desc=cached_upload'].$post(args, options))
}

export async function postTemplatesDescHtml(
  args: InferRequestType<(typeof client)['templates?desc=html']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['templates?desc=html'].$post(args, options))
}

export async function getUploadsPresign(options?: ClientRequestOptions) {
  return await parseResponse(client.uploads.presign.$get(undefined, options))
}
