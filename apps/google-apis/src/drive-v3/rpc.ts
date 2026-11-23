import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAbout(
  args: InferRequestType<typeof client.about.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.about.$get(args, options))
}

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function getAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$get(args, options))
}

export async function getChanges(
  args: InferRequestType<typeof client.changes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changes.$get(args, options))
}

export async function getChangesStartPageToken(
  args: InferRequestType<typeof client.changes.startPageToken.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changes.startPageToken.$get(args, options))
}

export async function postChangesWatch(
  args: InferRequestType<typeof client.changes.watch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changes.watch.$post(args, options))
}

export async function postChannelsStop(
  args: InferRequestType<typeof client.channels.stop.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.channels.stop.$post(args, options))
}

export async function getDrives(
  args: InferRequestType<typeof client.drives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives.$get(args, options))
}

export async function postDrives(
  args: InferRequestType<typeof client.drives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives.$post(args, options))
}

export async function getDrivesDriveId(
  args: InferRequestType<(typeof client.drives)[':driveId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives[':driveId'].$get(args, options))
}

export async function deleteDrivesDriveId(
  args: InferRequestType<(typeof client.drives)[':driveId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives[':driveId'].$delete(args, options))
}

export async function patchDrivesDriveId(
  args: InferRequestType<(typeof client.drives)[':driveId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives[':driveId'].$patch(args, options))
}

export async function postDrivesDriveIdHide(
  args: InferRequestType<(typeof client.drives)[':driveId']['hide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives[':driveId'].hide.$post(args, options))
}

export async function postDrivesDriveIdUnhide(
  args: InferRequestType<(typeof client.drives)[':driveId']['unhide']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.drives[':driveId'].unhide.$post(args, options))
}

export async function getFiles(
  args: InferRequestType<typeof client.files.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$get(args, options))
}

export async function postFiles(
  args: InferRequestType<typeof client.files.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$post(args, options))
}

export async function getFilesGenerateIds(
  args: InferRequestType<typeof client.files.generateIds.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.generateIds.$get(args, options))
}

export async function deleteFilesTrash(
  args: InferRequestType<typeof client.files.trash.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.trash.$delete(args, options))
}

export async function getFilesFileId(
  args: InferRequestType<(typeof client.files)[':fileId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].$get(args, options))
}

export async function deleteFilesFileId(
  args: InferRequestType<(typeof client.files)[':fileId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].$delete(args, options))
}

export async function patchFilesFileId(
  args: InferRequestType<(typeof client.files)[':fileId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].$patch(args, options))
}

export async function getFilesFileIdComments(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].comments.$get(args, options))
}

export async function postFilesFileIdComments(
  args: InferRequestType<(typeof client.files)[':fileId']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].comments.$post(args, options))
}

export async function getFilesFileIdCommentsCommentId(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].comments[':commentId'].$get(args, options))
}

export async function deleteFilesFileIdCommentsCommentId(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].comments[':commentId'].$delete(args, options))
}

export async function patchFilesFileIdCommentsCommentId(
  args: InferRequestType<(typeof client.files)[':fileId']['comments'][':commentId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].comments[':commentId'].$patch(args, options))
}

export async function getFilesFileIdCommentsCommentIdReplies(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].comments[':commentId'].replies.$get(args, options),
  )
}

export async function postFilesFileIdCommentsCommentIdReplies(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].comments[':commentId'].replies.$post(args, options),
  )
}

export async function getFilesFileIdCommentsCommentIdRepliesReplyId(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].comments[':commentId'].replies[':replyId'].$get(args, options),
  )
}

export async function deleteFilesFileIdCommentsCommentIdRepliesReplyId(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].comments[':commentId'].replies[':replyId'].$delete(args, options),
  )
}

export async function patchFilesFileIdCommentsCommentIdRepliesReplyId(
  args: InferRequestType<
    (typeof client.files)[':fileId']['comments'][':commentId']['replies'][':replyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].comments[':commentId'].replies[':replyId'].$patch(args, options),
  )
}

export async function postFilesFileIdCopy(
  args: InferRequestType<(typeof client.files)[':fileId']['copy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].copy.$post(args, options))
}

export async function getFilesFileIdExport(
  args: InferRequestType<(typeof client.files)[':fileId']['export']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].export.$get(args, options))
}

export async function getFilesFileIdListLabels(
  args: InferRequestType<(typeof client.files)[':fileId']['listLabels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].listLabels.$get(args, options))
}

export async function postFilesFileIdModifyLabels(
  args: InferRequestType<(typeof client.files)[':fileId']['modifyLabels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].modifyLabels.$post(args, options))
}

export async function getFilesFileIdPermissions(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].permissions.$get(args, options))
}

export async function postFilesFileIdPermissions(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].permissions.$post(args, options))
}

export async function getFilesFileIdPermissionsPermissionId(
  args: InferRequestType<(typeof client.files)[':fileId']['permissions'][':permissionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].permissions[':permissionId'].$get(args, options),
  )
}

export async function deleteFilesFileIdPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.files)[':fileId']['permissions'][':permissionId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].permissions[':permissionId'].$delete(args, options),
  )
}

export async function patchFilesFileIdPermissionsPermissionId(
  args: InferRequestType<
    (typeof client.files)[':fileId']['permissions'][':permissionId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].permissions[':permissionId'].$patch(args, options),
  )
}

export async function getFilesFileIdRevisions(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].revisions.$get(args, options))
}

export async function getFilesFileIdRevisionsRevisionId(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].revisions[':revisionId'].$get(args, options))
}

export async function deleteFilesFileIdRevisionsRevisionId(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.files[':fileId'].revisions[':revisionId'].$delete(args, options),
  )
}

export async function patchFilesFileIdRevisionsRevisionId(
  args: InferRequestType<(typeof client.files)[':fileId']['revisions'][':revisionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].revisions[':revisionId'].$patch(args, options))
}

export async function postFilesFileIdWatch(
  args: InferRequestType<(typeof client.files)[':fileId']['watch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':fileId'].watch.$post(args, options))
}

export async function getTeamdrives(
  args: InferRequestType<typeof client.teamdrives.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teamdrives.$get(args, options))
}

export async function postTeamdrives(
  args: InferRequestType<typeof client.teamdrives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teamdrives.$post(args, options))
}

export async function getTeamdrivesTeamDriveId(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teamdrives[':teamDriveId'].$get(args, options))
}

export async function deleteTeamdrivesTeamDriveId(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teamdrives[':teamDriveId'].$delete(args, options))
}

export async function patchTeamdrivesTeamDriveId(
  args: InferRequestType<(typeof client.teamdrives)[':teamDriveId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.teamdrives[':teamDriveId'].$patch(args, options))
}
