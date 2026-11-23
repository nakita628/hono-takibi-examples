import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAuthorize(
  args: InferRequestType<typeof client.authorize.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.authorize.$get(args, options))
}

export async function getCollaborationWhitelistEntries(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaboration_whitelist_entries.$get(args, options))
}

export async function postCollaborationWhitelistEntries(
  args: InferRequestType<typeof client.collaboration_whitelist_entries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaboration_whitelist_entries.$post(args, options))
}

export async function getCollaborationWhitelistEntriesCollaborationWhitelistEntryId(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$get(args, options),
  )
}

export async function deleteCollaborationWhitelistEntriesCollaborationWhitelistEntryId(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_entries)[':collaboration_whitelist_entry_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collaboration_whitelist_entries[':collaboration_whitelist_entry_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getCollaborationWhitelistExemptTargets(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaboration_whitelist_exempt_targets.$get(args, options))
}

export async function postCollaborationWhitelistExemptTargets(
  args: InferRequestType<typeof client.collaboration_whitelist_exempt_targets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaboration_whitelist_exempt_targets.$post(args, options))
}

export async function getCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collaboration_whitelist_exempt_targets[':collaboration_whitelist_exempt_target_id'].$get(
      args,
      options,
    ),
  )
}

export async function deleteCollaborationWhitelistExemptTargetsCollaborationWhitelistExemptTargetId(
  args: InferRequestType<
    (typeof client.collaboration_whitelist_exempt_targets)[':collaboration_whitelist_exempt_target_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.collaboration_whitelist_exempt_targets[
      ':collaboration_whitelist_exempt_target_id'
    ].$delete(args, options),
  )
}

export async function getCollaborations(
  args: InferRequestType<typeof client.collaborations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborations.$get(args, options))
}

export async function postCollaborations(
  args: InferRequestType<typeof client.collaborations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborations.$post(args, options))
}

export async function getCollaborationsCollaborationId(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborations[':collaboration_id'].$get(args, options))
}

export async function putCollaborationsCollaborationId(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborations[':collaboration_id'].$put(args, options))
}

export async function deleteCollaborationsCollaborationId(
  args: InferRequestType<(typeof client.collaborations)[':collaboration_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collaborations[':collaboration_id'].$delete(args, options))
}

export async function getCollections(
  args: InferRequestType<typeof client.collections.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$get(args, options))
}

export async function getCollectionsCollectionIdItems(
  args: InferRequestType<(typeof client.collections)[':collection_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':collection_id'].items.$get(args, options))
}

export async function postComments(
  args: InferRequestType<typeof client.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$post(args, options))
}

export async function getCommentsCommentId(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment_id'].$get(args, options))
}

export async function putCommentsCommentId(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment_id'].$put(args, options))
}

export async function deleteCommentsCommentId(
  args: InferRequestType<(typeof client.comments)[':comment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':comment_id'].$delete(args, options))
}

export async function getDevicePinnersDevicePinnerId(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device_pinners[':device_pinner_id'].$get(args, options))
}

export async function deleteDevicePinnersDevicePinnerId(
  args: InferRequestType<(typeof client.device_pinners)[':device_pinner_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.device_pinners[':device_pinner_id'].$delete(args, options))
}

export async function getEnterprisesEnterpriseIdDevicePinners(
  args: InferRequestType<(typeof client.enterprises)[':enterprise_id']['device_pinners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.enterprises[':enterprise_id'].device_pinners.$get(args, options),
  )
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function optionsEvents(options?: ClientRequestOptions) {
  return await parseResponse(client.events.$options(undefined, options))
}

export async function getFileRequestsFileRequestId(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_requests[':file_request_id'].$get(args, options))
}

export async function putFileRequestsFileRequestId(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_requests[':file_request_id'].$put(args, options))
}

export async function deleteFileRequestsFileRequestId(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_requests[':file_request_id'].$delete(args, options))
}

export async function postFileRequestsFileRequestIdCopy(
  args: InferRequestType<(typeof client.file_requests)[':file_request_id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_requests[':file_request_id'].copy.$post(args, options))
}

export async function getFileVersionLegalHolds(
  args: InferRequestType<typeof client.file_version_legal_holds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_version_legal_holds.$get(args, options))
}

export async function getFileVersionLegalHoldsFileVersionLegalHoldId(
  args: InferRequestType<
    (typeof client.file_version_legal_holds)[':file_version_legal_hold_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.file_version_legal_holds[':file_version_legal_hold_id'].$get(args, options),
  )
}

export async function getFileVersionRetentions(
  args: InferRequestType<typeof client.file_version_retentions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.file_version_retentions.$get(args, options))
}

export async function getFileVersionRetentionsFileVersionRetentionId(
  args: InferRequestType<
    (typeof client.file_version_retentions)[':file_version_retention_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.file_version_retentions[':file_version_retention_id'].$get(args, options),
  )
}

export async function postFilesContent(
  args: InferRequestType<typeof client.files.content.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.content.$post(args, options))
}

export async function optionsFilesContent(
  args: InferRequestType<typeof client.files.content.$options>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.content.$options(args, options))
}

export async function postFilesUploadSessions(
  args: InferRequestType<typeof client.files.upload_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.upload_sessions.$post(args, options))
}

export async function getFilesUploadSessionsUploadSessionId(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.upload_sessions[':upload_session_id'].$get(args, options))
}

export async function putFilesUploadSessionsUploadSessionId(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.upload_sessions[':upload_session_id'].$put(args, options))
}

export async function deleteFilesUploadSessionsUploadSessionId(
  args: InferRequestType<(typeof client.files.upload_sessions)[':upload_session_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files.upload_sessions[':upload_session_id'].$delete(args, options),
  )
}

export async function postFilesUploadSessionsUploadSessionIdCommit(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['commit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files.upload_sessions[':upload_session_id'].commit.$post(args, options),
  )
}

export async function getFilesUploadSessionsUploadSessionIdParts(
  args: InferRequestType<
    (typeof client.files.upload_sessions)[':upload_session_id']['parts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files.upload_sessions[':upload_session_id'].parts.$get(args, options),
  )
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$get(args, options))
}

export async function putFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$put(args, options))
}

export async function postFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$post(args, options))
}

export async function deleteFilesFileId(
  args: InferRequestType<(typeof client.files)[':file_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].$delete(args, options))
}

export async function putFilesFileIdAddSharedLink(
  args: InferRequestType<(typeof client.files)[':file_id#add_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id#add_shared_link'].$put(args, options))
}

export async function getFilesFileIdGetSharedLink(
  args: InferRequestType<(typeof client.files)[':file_id#get_shared_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id#get_shared_link'].$get(args, options))
}

export async function putFilesFileIdRemoveSharedLink(
  args: InferRequestType<(typeof client.files)[':file_id#remove_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id#remove_shared_link'].$put(args, options))
}

export async function putFilesFileIdUpdateSharedLink(
  args: InferRequestType<(typeof client.files)[':file_id#update_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id#update_shared_link'].$put(args, options))
}

export async function getFilesFileIdCollaborations(
  args: InferRequestType<(typeof client.files)[':file_id']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].collaborations.$get(args, options))
}

export async function getFilesFileIdComments(
  args: InferRequestType<(typeof client.files)[':file_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].comments.$get(args, options))
}

export async function getFilesFileIdContent(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].content.$get(args, options))
}

export async function postFilesFileIdContent(
  args: InferRequestType<(typeof client.files)[':file_id']['content']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].content.$post(args, options))
}

export async function postFilesFileIdCopy(
  args: InferRequestType<(typeof client.files)[':file_id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].copy.$post(args, options))
}

export async function getFilesFileIdMetadata(
  args: InferRequestType<(typeof client.files)[':file_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].metadata.$get(args, options))
}

export async function getFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
      args,
      options,
    ),
  )
}

export async function putFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$put(
      args,
      options,
    ),
  )
}

export async function postFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$post(
      args,
      options,
    ),
  )
}

export async function deleteFilesFileIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$delete(
      args,
      options,
    ),
  )
}

export async function getFilesFileIdMetadataGlobalBoxSkillsCards(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.global.boxSkillsCards.$get(args, options),
  )
}

export async function putFilesFileIdMetadataGlobalBoxSkillsCards(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.global.boxSkillsCards.$put(args, options),
  )
}

export async function postFilesFileIdMetadataGlobalBoxSkillsCards(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.global.boxSkillsCards.$post(args, options),
  )
}

export async function deleteFilesFileIdMetadataGlobalBoxSkillsCards(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata']['global']['boxSkillsCards']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata.global.boxSkillsCards.$delete(args, options),
  )
}

export async function getFilesFileIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata[':scope'][':template_key'].$get(args, options),
  )
}

export async function putFilesFileIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata[':scope'][':template_key'].$put(args, options),
  )
}

export async function postFilesFileIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata[':scope'][':template_key'].$post(args, options),
  )
}

export async function deleteFilesFileIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.files)[':file_id']['metadata'][':scope'][':template_key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].metadata[':scope'][':template_key'].$delete(args, options),
  )
}

export async function getFilesFileIdTasks(
  args: InferRequestType<(typeof client.files)[':file_id']['tasks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].tasks.$get(args, options))
}

export async function getFilesFileIdThumbnailExtension(
  args: InferRequestType<(typeof client.files)[':file_id']['thumbnail.{extension}']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id']['thumbnail.{extension}'].$get(args, options))
}

export async function getFilesFileIdTrash(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].trash.$get(args, options))
}

export async function deleteFilesFileIdTrash(
  args: InferRequestType<(typeof client.files)[':file_id']['trash']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].trash.$delete(args, options))
}

export async function postFilesFileIdUploadSessions(
  args: InferRequestType<(typeof client.files)[':file_id']['upload_sessions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].upload_sessions.$post(args, options))
}

export async function getFilesFileIdVersions(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].versions.$get(args, options))
}

export async function postFilesFileIdVersionsCurrent(
  args: InferRequestType<(typeof client.files)[':file_id']['versions']['current']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].versions.current.$post(args, options))
}

export async function getFilesFileIdVersionsFileVersionId(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].versions[':file_version_id'].$get(args, options),
  )
}

export async function putFilesFileIdVersionsFileVersionId(
  args: InferRequestType<(typeof client.files)[':file_id']['versions'][':file_version_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].versions[':file_version_id'].$put(args, options),
  )
}

export async function deleteFilesFileIdVersionsFileVersionId(
  args: InferRequestType<
    (typeof client.files)[':file_id']['versions'][':file_version_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':file_id'].versions[':file_version_id'].$delete(args, options),
  )
}

export async function getFilesFileIdWatermark(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].watermark.$get(args, options))
}

export async function putFilesFileIdWatermark(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].watermark.$put(args, options))
}

export async function deleteFilesFileIdWatermark(
  args: InferRequestType<(typeof client.files)[':file_id']['watermark']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':file_id'].watermark.$delete(args, options))
}

export async function getFolderLocks(
  args: InferRequestType<typeof client.folder_locks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder_locks.$get(args, options))
}

export async function postFolderLocks(
  args: InferRequestType<typeof client.folder_locks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder_locks.$post(args, options))
}

export async function deleteFolderLocksFolderLockId(
  args: InferRequestType<(typeof client.folder_locks)[':folder_lock_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folder_locks[':folder_lock_id'].$delete(args, options))
}

export async function postFolders(
  args: InferRequestType<typeof client.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$post(args, options))
}

export async function getFoldersTrashItems(
  args: InferRequestType<typeof client.folders.trash.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.trash.items.$get(args, options))
}

export async function getFoldersFolderId(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].$get(args, options))
}

export async function putFoldersFolderId(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].$put(args, options))
}

export async function postFoldersFolderId(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].$post(args, options))
}

export async function deleteFoldersFolderId(
  args: InferRequestType<(typeof client.folders)[':folder_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].$delete(args, options))
}

export async function putFoldersFolderIdAddSharedLink(
  args: InferRequestType<(typeof client.folders)[':folder_id#add_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id#add_shared_link'].$put(args, options))
}

export async function getFoldersFolderIdGetSharedLink(
  args: InferRequestType<(typeof client.folders)[':folder_id#get_shared_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id#get_shared_link'].$get(args, options))
}

export async function putFoldersFolderIdRemoveSharedLink(
  args: InferRequestType<(typeof client.folders)[':folder_id#remove_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id#remove_shared_link'].$put(args, options))
}

export async function putFoldersFolderIdUpdateSharedLink(
  args: InferRequestType<(typeof client.folders)[':folder_id#update_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id#update_shared_link'].$put(args, options))
}

export async function getFoldersFolderIdCollaborations(
  args: InferRequestType<(typeof client.folders)[':folder_id']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].collaborations.$get(args, options))
}

export async function postFoldersFolderIdCopy(
  args: InferRequestType<(typeof client.folders)[':folder_id']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].copy.$post(args, options))
}

export async function getFoldersFolderIdItems(
  args: InferRequestType<(typeof client.folders)[':folder_id']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].items.$get(args, options))
}

export async function getFoldersFolderIdMetadata(
  args: InferRequestType<(typeof client.folders)[':folder_id']['metadata']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].metadata.$get(args, options))
}

export async function getFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$get(
      args,
      options,
    ),
  )
}

export async function putFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$put(
      args,
      options,
    ),
  )
}

export async function postFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$post(
      args,
      options,
    ),
  )
}

export async function deleteFoldersFolderIdMetadataEnterpriseSecurityClassification6VMVochwUWo(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata']['enterprise']['securityClassification-6VMVochwUWo']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata.enterprise['securityClassification-6VMVochwUWo'].$delete(
      args,
      options,
    ),
  )
}

export async function getFoldersFolderIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata[':scope'][':template_key'].$get(args, options),
  )
}

export async function putFoldersFolderIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata[':scope'][':template_key'].$put(args, options),
  )
}

export async function postFoldersFolderIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata[':scope'][':template_key'].$post(args, options),
  )
}

export async function deleteFoldersFolderIdMetadataScopeTemplateKey(
  args: InferRequestType<
    (typeof client.folders)[':folder_id']['metadata'][':scope'][':template_key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.folders[':folder_id'].metadata[':scope'][':template_key'].$delete(args, options),
  )
}

export async function getFoldersFolderIdTrash(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].trash.$get(args, options))
}

export async function deleteFoldersFolderIdTrash(
  args: InferRequestType<(typeof client.folders)[':folder_id']['trash']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].trash.$delete(args, options))
}

export async function getFoldersFolderIdWatermark(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].watermark.$get(args, options))
}

export async function putFoldersFolderIdWatermark(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].watermark.$put(args, options))
}

export async function deleteFoldersFolderIdWatermark(
  args: InferRequestType<(typeof client.folders)[':folder_id']['watermark']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':folder_id'].watermark.$delete(args, options))
}

export async function postGroupMemberships(
  args: InferRequestType<typeof client.group_memberships.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_memberships.$post(args, options))
}

export async function getGroupMembershipsGroupMembershipId(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_memberships[':group_membership_id'].$get(args, options))
}

export async function putGroupMembershipsGroupMembershipId(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.group_memberships[':group_membership_id'].$put(args, options))
}

export async function deleteGroupMembershipsGroupMembershipId(
  args: InferRequestType<(typeof client.group_memberships)[':group_membership_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.group_memberships[':group_membership_id'].$delete(args, options),
  )
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

export async function postGroupsTerminateSessions(
  args: InferRequestType<typeof client.groups.terminate_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups.terminate_sessions.$post(args, options))
}

export async function getGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].$get(args, options))
}

export async function putGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].$put(args, options))
}

export async function deleteGroupsGroupId(
  args: InferRequestType<(typeof client.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].$delete(args, options))
}

export async function getGroupsGroupIdCollaborations(
  args: InferRequestType<(typeof client.groups)[':group_id']['collaborations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].collaborations.$get(args, options))
}

export async function getGroupsGroupIdMemberships(
  args: InferRequestType<(typeof client.groups)[':group_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.groups[':group_id'].memberships.$get(args, options))
}

export async function postInvites(
  args: InferRequestType<typeof client.invites.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites.$post(args, options))
}

export async function getInvitesInviteId(
  args: InferRequestType<(typeof client.invites)[':invite_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.invites[':invite_id'].$get(args, options))
}

export async function getLegalHoldPolicies(
  args: InferRequestType<typeof client.legal_hold_policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_hold_policies.$get(args, options))
}

export async function postLegalHoldPolicies(
  args: InferRequestType<typeof client.legal_hold_policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_hold_policies.$post(args, options))
}

export async function getLegalHoldPoliciesLegalHoldPolicyId(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policies[':legal_hold_policy_id'].$get(args, options),
  )
}

export async function putLegalHoldPoliciesLegalHoldPolicyId(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policies[':legal_hold_policy_id'].$put(args, options),
  )
}

export async function deleteLegalHoldPoliciesLegalHoldPolicyId(
  args: InferRequestType<(typeof client.legal_hold_policies)[':legal_hold_policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policies[':legal_hold_policy_id'].$delete(args, options),
  )
}

export async function getLegalHoldPolicyAssignments(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_hold_policy_assignments.$get(args, options))
}

export async function postLegalHoldPolicyAssignments(
  args: InferRequestType<typeof client.legal_hold_policy_assignments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.legal_hold_policy_assignments.$post(args, options))
}

export async function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$get(args, options),
  )
}

export async function deleteLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentId(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].$delete(args, options),
  )
}

export async function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFileVersionsOnHold(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['file_versions_on_hold']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policy_assignments[
      ':legal_hold_policy_assignment_id'
    ].file_versions_on_hold.$get(args, options),
  )
}

export async function getLegalHoldPolicyAssignmentsLegalHoldPolicyAssignmentIdFilesOnHold(
  args: InferRequestType<
    (typeof client.legal_hold_policy_assignments)[':legal_hold_policy_assignment_id']['files_on_hold']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.legal_hold_policy_assignments[':legal_hold_policy_assignment_id'].files_on_hold.$get(
      args,
      options,
    ),
  )
}

export async function getMetadataCascadePolicies(
  args: InferRequestType<typeof client.metadata_cascade_policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_cascade_policies.$get(args, options))
}

export async function postMetadataCascadePolicies(
  args: InferRequestType<typeof client.metadata_cascade_policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_cascade_policies.$post(args, options))
}

export async function getMetadataCascadePoliciesMetadataCascadePolicyId(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_cascade_policies[':metadata_cascade_policy_id'].$get(args, options),
  )
}

export async function deleteMetadataCascadePoliciesMetadataCascadePolicyId(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_cascade_policies[':metadata_cascade_policy_id'].$delete(args, options),
  )
}

export async function postMetadataCascadePoliciesMetadataCascadePolicyIdApply(
  args: InferRequestType<
    (typeof client.metadata_cascade_policies)[':metadata_cascade_policy_id']['apply']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_cascade_policies[':metadata_cascade_policy_id'].apply.$post(args, options),
  )
}

export async function postMetadataQueriesExecuteRead(
  args: InferRequestType<typeof client.metadata_queries.execute_read.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_queries.execute_read.$post(args, options))
}

export async function getMetadataQueryIndices(
  args: InferRequestType<typeof client.metadata_query_indices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_query_indices.$get(args, options))
}

export async function getMetadataTemplates(
  args: InferRequestType<typeof client.metadata_templates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_templates.$get(args, options))
}

export async function getMetadataTemplatesEnterprise(
  args: InferRequestType<typeof client.metadata_templates.enterprise.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_templates.enterprise.$get(args, options))
}

export async function getMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$get(
      undefined,
      options,
    ),
  )
}

export async function deleteMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchema(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'].schema.$delete(
      undefined,
      options,
    ),
  )
}

export async function putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaAdd(
  args: InferRequestType<
    (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#add']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates.enterprise['securityClassification-6VMVochwUWo']['schema#add'].$put(
      args,
      options,
    ),
  )
}

export async function putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaDelete(
  args: InferRequestType<
    (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#delete']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
      'schema#delete'
    ].$put(args, options),
  )
}

export async function putMetadataTemplatesEnterpriseSecurityClassification6VMVochwUWoSchemaUpdate(
  args: InferRequestType<
    (typeof client.metadata_templates.enterprise)['securityClassification-6VMVochwUWo']['schema#update']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates.enterprise['securityClassification-6VMVochwUWo'][
      'schema#update'
    ].$put(args, options),
  )
}

export async function getMetadataTemplatesGlobal(
  args: InferRequestType<typeof client.metadata_templates.global.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_templates.global.$get(args, options))
}

export async function postMetadataTemplatesSchema(
  args: InferRequestType<typeof client.metadata_templates.schema.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_templates.schema.$post(args, options))
}

export async function postMetadataTemplatesSchemaClassifications(
  args: InferRequestType<(typeof client.metadata_templates)['schema#classifications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates['schema#classifications'].$post(args, options),
  )
}

export async function getMetadataTemplatesScopeTemplateKeySchema(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates[':scope'][':template_key'].schema.$get(args, options),
  )
}

export async function putMetadataTemplatesScopeTemplateKeySchema(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates[':scope'][':template_key'].schema.$put(args, options),
  )
}

export async function deleteMetadataTemplatesScopeTemplateKeySchema(
  args: InferRequestType<
    (typeof client.metadata_templates)[':scope'][':template_key']['schema']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.metadata_templates[':scope'][':template_key'].schema.$delete(args, options),
  )
}

export async function getMetadataTemplatesTemplateId(
  args: InferRequestType<(typeof client.metadata_templates)[':template_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.metadata_templates[':template_id'].$get(args, options))
}

export async function postOauth2Revoke(
  args: InferRequestType<typeof client.oauth2.revoke.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.revoke.$post(args, options))
}

export async function postOauth2Token(
  args: InferRequestType<typeof client.oauth2.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2.token.$post(args, options))
}

export async function postOauth2TokenRefresh(
  args: InferRequestType<(typeof client.oauth2)['token#refresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.oauth2['token#refresh'].$post(args, options))
}

export async function getRecentItems(
  args: InferRequestType<typeof client.recent_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recent_items.$get(args, options))
}

export async function getRetentionPolicies(
  args: InferRequestType<typeof client.retention_policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retention_policies.$get(args, options))
}

export async function postRetentionPolicies(
  args: InferRequestType<typeof client.retention_policies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retention_policies.$post(args, options))
}

export async function getRetentionPoliciesRetentionPolicyId(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retention_policies[':retention_policy_id'].$get(args, options))
}

export async function putRetentionPoliciesRetentionPolicyId(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retention_policies[':retention_policy_id'].$put(args, options))
}

export async function deleteRetentionPoliciesRetentionPolicyId(
  args: InferRequestType<(typeof client.retention_policies)[':retention_policy_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.retention_policies[':retention_policy_id'].$delete(args, options),
  )
}

export async function getRetentionPoliciesRetentionPolicyIdAssignments(
  args: InferRequestType<
    (typeof client.retention_policies)[':retention_policy_id']['assignments']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.retention_policies[':retention_policy_id'].assignments.$get(args, options),
  )
}

export async function postRetentionPolicyAssignments(
  args: InferRequestType<typeof client.retention_policy_assignments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.retention_policy_assignments.$post(args, options))
}

export async function getRetentionPolicyAssignmentsRetentionPolicyAssignmentId(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.retention_policy_assignments[':retention_policy_assignment_id'].$get(args, options),
  )
}

export async function deleteRetentionPolicyAssignmentsRetentionPolicyAssignmentId(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.retention_policy_assignments[':retention_policy_assignment_id'].$delete(args, options),
  )
}

export async function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFileVersionsUnderRetention(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['file_versions_under_retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.retention_policy_assignments[
      ':retention_policy_assignment_id'
    ].file_versions_under_retention.$get(args, options),
  )
}

export async function getRetentionPolicyAssignmentsRetentionPolicyAssignmentIdFilesUnderRetention(
  args: InferRequestType<
    (typeof client.retention_policy_assignments)[':retention_policy_assignment_id']['files_under_retention']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.retention_policy_assignments[
      ':retention_policy_assignment_id'
    ].files_under_retention.$get(args, options),
  )
}

export async function getSearch(
  args: InferRequestType<typeof client.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.$get(args, options))
}

export async function getSharedItems(
  args: InferRequestType<typeof client.shared_items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shared_items.$get(args, options))
}

export async function getSharedItemsFolders(
  args: InferRequestType<(typeof client)['shared_items#folders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared_items#folders'].$get(args, options))
}

export async function getSharedItemsWebLinks(
  args: InferRequestType<(typeof client)['shared_items#web_links']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['shared_items#web_links'].$get(args, options))
}

export async function getShieldInformationBarrierReports(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barrier_reports.$get(args, options))
}

export async function postShieldInformationBarrierReports(
  args: InferRequestType<typeof client.shield_information_barrier_reports.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barrier_reports.$post(args, options))
}

export async function getShieldInformationBarrierReportsShieldInformationBarrierReportId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_reports)[':shield_information_barrier_report_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_reports[':shield_information_barrier_report_id'].$get(
      args,
      options,
    ),
  )
}

export async function getShieldInformationBarrierSegmentMembers(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barrier_segment_members.$get(args, options))
}

export async function postShieldInformationBarrierSegmentMembers(
  args: InferRequestType<typeof client.shield_information_barrier_segment_members.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barrier_segment_members.$post(args, options))
}

export async function getShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segment_members[
      ':shield_information_barrier_segment_member_id'
    ].$get(args, options),
  )
}

export async function deleteShieldInformationBarrierSegmentMembersShieldInformationBarrierSegmentMemberId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_members)[':shield_information_barrier_segment_member_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segment_members[
      ':shield_information_barrier_segment_member_id'
    ].$delete(args, options),
  )
}

export async function getShieldInformationBarrierSegmentRestrictions(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segment_restrictions.$get(args, options),
  )
}

export async function postShieldInformationBarrierSegmentRestrictions(
  args: InferRequestType<typeof client.shield_information_barrier_segment_restrictions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segment_restrictions.$post(args, options),
  )
}

export async function getShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segment_restrictions[
      ':shield_information_barrier_segment_restriction_id'
    ].$get(args, options),
  )
}

export async function deleteShieldInformationBarrierSegmentRestrictionsShieldInformationBarrierSegmentRestrictionId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segment_restrictions)[':shield_information_barrier_segment_restriction_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segment_restrictions[
      ':shield_information_barrier_segment_restriction_id'
    ].$delete(args, options),
  )
}

export async function getShieldInformationBarrierSegments(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barrier_segments.$get(args, options))
}

export async function postShieldInformationBarrierSegments(
  args: InferRequestType<typeof client.shield_information_barrier_segments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barrier_segments.$post(args, options))
}

export async function getShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$get(
      args,
      options,
    ),
  )
}

export async function putShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$put(
      args,
      options,
    ),
  )
}

export async function deleteShieldInformationBarrierSegmentsShieldInformationBarrierSegmentId(
  args: InferRequestType<
    (typeof client.shield_information_barrier_segments)[':shield_information_barrier_segment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barrier_segments[':shield_information_barrier_segment_id'].$delete(
      args,
      options,
    ),
  )
}

export async function getShieldInformationBarriers(
  args: InferRequestType<typeof client.shield_information_barriers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barriers.$get(args, options))
}

export async function postShieldInformationBarriers(
  args: InferRequestType<typeof client.shield_information_barriers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barriers.$post(args, options))
}

export async function postShieldInformationBarriersChangeStatus(
  args: InferRequestType<typeof client.shield_information_barriers.change_status.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shield_information_barriers.change_status.$post(args, options))
}

export async function getShieldInformationBarriersShieldInformationBarrierId(
  args: InferRequestType<
    (typeof client.shield_information_barriers)[':shield_information_barrier_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.shield_information_barriers[':shield_information_barrier_id'].$get(args, options),
  )
}

export async function getSignRequests(
  args: InferRequestType<typeof client.sign_requests.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_requests.$get(args, options))
}

export async function postSignRequests(
  args: InferRequestType<typeof client.sign_requests.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_requests.$post(args, options))
}

export async function getSignRequestsSignRequestId(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_requests[':sign_request_id'].$get(args, options))
}

export async function postSignRequestsSignRequestIdCancel(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_requests[':sign_request_id'].cancel.$post(args, options))
}

export async function postSignRequestsSignRequestIdResend(
  args: InferRequestType<(typeof client.sign_requests)[':sign_request_id']['resend']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sign_requests[':sign_request_id'].resend.$post(args, options))
}

export async function putSkillInvocationsSkillId(
  args: InferRequestType<(typeof client.skill_invocations)[':skill_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.skill_invocations[':skill_id'].$put(args, options))
}

export async function getStoragePolicies(
  args: InferRequestType<typeof client.storage_policies.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage_policies.$get(args, options))
}

export async function getStoragePoliciesStoragePolicyId(
  args: InferRequestType<(typeof client.storage_policies)[':storage_policy_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage_policies[':storage_policy_id'].$get(args, options))
}

export async function getStoragePolicyAssignments(
  args: InferRequestType<typeof client.storage_policy_assignments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage_policy_assignments.$get(args, options))
}

export async function postStoragePolicyAssignments(
  args: InferRequestType<typeof client.storage_policy_assignments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.storage_policy_assignments.$post(args, options))
}

export async function getStoragePolicyAssignmentsStoragePolicyAssignmentId(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage_policy_assignments[':storage_policy_assignment_id'].$get(args, options),
  )
}

export async function putStoragePolicyAssignmentsStoragePolicyAssignmentId(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage_policy_assignments[':storage_policy_assignment_id'].$put(args, options),
  )
}

export async function deleteStoragePolicyAssignmentsStoragePolicyAssignmentId(
  args: InferRequestType<
    (typeof client.storage_policy_assignments)[':storage_policy_assignment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.storage_policy_assignments[':storage_policy_assignment_id'].$delete(args, options),
  )
}

export async function postTaskAssignments(
  args: InferRequestType<typeof client.task_assignments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_assignments.$post(args, options))
}

export async function getTaskAssignmentsTaskAssignmentId(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_assignments[':task_assignment_id'].$get(args, options))
}

export async function putTaskAssignmentsTaskAssignmentId(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_assignments[':task_assignment_id'].$put(args, options))
}

export async function deleteTaskAssignmentsTaskAssignmentId(
  args: InferRequestType<(typeof client.task_assignments)[':task_assignment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.task_assignments[':task_assignment_id'].$delete(args, options))
}

export async function postTasks(
  args: InferRequestType<typeof client.tasks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks.$post(args, options))
}

export async function getTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_id'].$get(args, options))
}

export async function putTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_id'].$put(args, options))
}

export async function deleteTasksTaskId(
  args: InferRequestType<(typeof client.tasks)[':task_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_id'].$delete(args, options))
}

export async function getTasksTaskIdAssignments(
  args: InferRequestType<(typeof client.tasks)[':task_id']['assignments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tasks[':task_id'].assignments.$get(args, options))
}

export async function getTermsOfServiceUserStatuses(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_service_user_statuses.$get(args, options))
}

export async function postTermsOfServiceUserStatuses(
  args: InferRequestType<typeof client.terms_of_service_user_statuses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_service_user_statuses.$post(args, options))
}

export async function putTermsOfServiceUserStatusesTermsOfServiceUserStatusId(
  args: InferRequestType<
    (typeof client.terms_of_service_user_statuses)[':terms_of_service_user_status_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.terms_of_service_user_statuses[':terms_of_service_user_status_id'].$put(args, options),
  )
}

export async function getTermsOfServices(
  args: InferRequestType<typeof client.terms_of_services.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_services.$get(args, options))
}

export async function postTermsOfServices(
  args: InferRequestType<typeof client.terms_of_services.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_services.$post(args, options))
}

export async function getTermsOfServicesTermsOfServiceId(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_services[':terms_of_service_id'].$get(args, options))
}

export async function putTermsOfServicesTermsOfServiceId(
  args: InferRequestType<(typeof client.terms_of_services)[':terms_of_service_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.terms_of_services[':terms_of_service_id'].$put(args, options))
}

export async function getUsers(
  args: InferRequestType<typeof client.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$get(args, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function getUsersMe(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.$get(args, options))
}

export async function postUsersTerminateSessions(
  args: InferRequestType<typeof client.users.terminate_sessions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.terminate_sessions.$post(args, options))
}

export async function getUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$get(args, options))
}

export async function putUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$put(args, options))
}

export async function deleteUsersUserId(
  args: InferRequestType<(typeof client.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].$delete(args, options))
}

export async function getUsersUserIdAvatar(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].avatar.$get(args, options))
}

export async function postUsersUserIdAvatar(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].avatar.$post(args, options))
}

export async function deleteUsersUserIdAvatar(
  args: InferRequestType<(typeof client.users)[':user_id']['avatar']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].avatar.$delete(args, options))
}

export async function getUsersUserIdEmailAliases(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].email_aliases.$get(args, options))
}

export async function postUsersUserIdEmailAliases(
  args: InferRequestType<(typeof client.users)[':user_id']['email_aliases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].email_aliases.$post(args, options))
}

export async function deleteUsersUserIdEmailAliasesEmailAliasId(
  args: InferRequestType<
    (typeof client.users)[':user_id']['email_aliases'][':email_alias_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.users[':user_id'].email_aliases[':email_alias_id'].$delete(args, options),
  )
}

export async function putUsersUserIdFolders0(
  args: InferRequestType<(typeof client.users)[':user_id']['folders']['0']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].folders['0'].$put(args, options))
}

export async function getUsersUserIdMemberships(
  args: InferRequestType<(typeof client.users)[':user_id']['memberships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':user_id'].memberships.$get(args, options))
}

export async function postWebLinks(
  args: InferRequestType<typeof client.web_links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links.$post(args, options))
}

export async function getWebLinksWebLinkId(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id'].$get(args, options))
}

export async function putWebLinksWebLinkId(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id'].$put(args, options))
}

export async function postWebLinksWebLinkId(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id'].$post(args, options))
}

export async function deleteWebLinksWebLinkId(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id'].$delete(args, options))
}

export async function putWebLinksWebLinkIdAddSharedLink(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#add_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id#add_shared_link'].$put(args, options))
}

export async function getWebLinksWebLinkIdGetSharedLink(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#get_shared_link']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id#get_shared_link'].$get(args, options))
}

export async function putWebLinksWebLinkIdRemoveSharedLink(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#remove_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.web_links[':web_link_id#remove_shared_link'].$put(args, options),
  )
}

export async function putWebLinksWebLinkIdUpdateSharedLink(
  args: InferRequestType<(typeof client.web_links)[':web_link_id#update_shared_link']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.web_links[':web_link_id#update_shared_link'].$put(args, options),
  )
}

export async function getWebLinksWebLinkIdTrash(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id'].trash.$get(args, options))
}

export async function deleteWebLinksWebLinkIdTrash(
  args: InferRequestType<(typeof client.web_links)[':web_link_id']['trash']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.web_links[':web_link_id'].trash.$delete(args, options))
}

export async function getWebhooks(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$get(args, options))
}

export async function postWebhooks(
  args: InferRequestType<typeof client.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks.$post(args, options))
}

export async function getWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$get(args, options))
}

export async function putWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$put(args, options))
}

export async function deleteWebhooksWebhookId(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
}

export async function getWorkflows(
  args: InferRequestType<typeof client.workflows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows.$get(args, options))
}

export async function postWorkflowsWorkflowIdStart(
  args: InferRequestType<(typeof client.workflows)[':workflow_id']['start']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.workflows[':workflow_id'].start.$post(args, options))
}

export async function postZipDownloads(
  args: InferRequestType<typeof client.zip_downloads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zip_downloads.$post(args, options))
}

export async function getZipDownloadsZipDownloadIdContent(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['content']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zip_downloads[':zip_download_id'].content.$get(args, options))
}

export async function getZipDownloadsZipDownloadIdStatus(
  args: InferRequestType<(typeof client.zip_downloads)[':zip_download_id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.zip_downloads[':zip_download_id'].status.$get(args, options))
}
