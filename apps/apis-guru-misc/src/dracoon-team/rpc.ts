import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postV4AuthLogin(
  args: InferRequestType<typeof client.v4.auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.login.$post(args, options))
}

export async function getV4AuthOpenidLogin(
  args: InferRequestType<typeof client.v4.auth.openid.login.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.openid.login.$get(args, options))
}

export async function postV4AuthOpenidLogin(
  args: InferRequestType<typeof client.v4.auth.openid.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.openid.login.$post(args, options))
}

export async function getV4AuthPing(options?: ClientRequestOptions) {
  return await parseResponse(client.v4.auth.ping.$get(undefined, options))
}

export async function postV4AuthRecoverUsername(
  args: InferRequestType<typeof client.v4.auth.recover_username.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.recover_username.$post(args, options))
}

export async function postV4AuthResetPassword(
  args: InferRequestType<typeof client.v4.auth.reset_password.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.reset_password.$post(args, options))
}

export async function getV4AuthResetPasswordToken(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.reset_password[':token'].$get(args, options))
}

export async function putV4AuthResetPasswordToken(
  args: InferRequestType<(typeof client.v4.auth.reset_password)[':token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.auth.reset_password[':token'].$put(args, options))
}

export async function getV4ConfigInfoDefaults(
  args: InferRequestType<typeof client.v4.config.info.defaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.defaults.$get(args, options))
}

export async function getV4ConfigInfoGeneral(
  args: InferRequestType<typeof client.v4.config.info.general.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.general.$get(args, options))
}

export async function getV4ConfigInfoInfrastructure(
  args: InferRequestType<typeof client.v4.config.info.infrastructure.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.infrastructure.$get(args, options))
}

export async function getV4ConfigInfoNotificationsChannels(
  args: InferRequestType<typeof client.v4.config.info.notifications.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.notifications.channels.$get(args, options))
}

export async function getV4ConfigInfoPoliciesAlgorithms(
  args: InferRequestType<typeof client.v4.config.info.policies.algorithms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.policies.algorithms.$get(args, options))
}

export async function getV4ConfigInfoPoliciesClassifications(
  args: InferRequestType<typeof client.v4.config.info.policies.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.policies.classifications.$get(args, options))
}

export async function getV4ConfigInfoPoliciesGuestUsers(
  args: InferRequestType<typeof client.v4.config.info.policies.guest_users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.policies.guest_users.$get(args, options))
}

export async function getV4ConfigInfoPoliciesPasswords(
  args: InferRequestType<typeof client.v4.config.info.policies.passwords.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.policies.passwords.$get(args, options))
}

export async function getV4ConfigInfoProductPackages(
  args: InferRequestType<typeof client.v4.config.info.product_packages.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.product_packages.$get(args, options))
}

export async function getV4ConfigInfoProductPackagesCurrent(
  args: InferRequestType<typeof client.v4.config.info.product_packages.current.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.product_packages.current.$get(args, options))
}

export async function getV4ConfigInfoS3Tags(
  args: InferRequestType<typeof client.v4.config.info.s3_tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.info.s3_tags.$get(args, options))
}

export async function getV4ConfigSettings(
  args: InferRequestType<typeof client.v4.config.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.settings.$get(args, options))
}

export async function putV4ConfigSettings(
  args: InferRequestType<typeof client.v4.config.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.config.settings.$put(args, options))
}

export async function getV4DownloadsAvatarUserIdUuid(
  args: InferRequestType<(typeof client.v4.downloads.avatar)[':user_id'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.downloads.avatar[':user_id'][':uuid'].$get(args, options))
}

export async function getV4DownloadsZipToken(
  args: InferRequestType<(typeof client.v4.downloads.zip)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.downloads.zip[':token'].$get(args, options))
}

export async function getV4DownloadsToken(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.downloads[':token'].$get(args, options))
}

export async function headV4DownloadsToken(
  args: InferRequestType<(typeof client.v4.downloads)[':token']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.downloads[':token'].$head(args, options))
}

export async function getV4EventlogAuditsNodeInfo(
  args: InferRequestType<typeof client.v4.eventlog.audits.node_info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.eventlog.audits.node_info.$get(args, options))
}

export async function getV4EventlogAuditsNodes(
  args: InferRequestType<typeof client.v4.eventlog.audits.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.eventlog.audits.nodes.$get(args, options))
}

export async function getV4EventlogEvents(
  args: InferRequestType<typeof client.v4.eventlog.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.eventlog.events.$get(args, options))
}

export async function getV4EventlogOperations(
  args: InferRequestType<typeof client.v4.eventlog.operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.eventlog.operations.$get(args, options))
}

export async function getV4Groups(
  args: InferRequestType<typeof client.v4.groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups.$get(args, options))
}

export async function postV4Groups(
  args: InferRequestType<typeof client.v4.groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups.$post(args, options))
}

export async function getV4GroupsGroupId(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].$get(args, options))
}

export async function putV4GroupsGroupId(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].$put(args, options))
}

export async function deleteV4GroupsGroupId(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].$delete(args, options))
}

export async function getV4GroupsGroupIdLastAdminRooms(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['last_admin_rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].last_admin_rooms.$get(args, options))
}

export async function getV4GroupsGroupIdRoles(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].roles.$get(args, options))
}

export async function getV4GroupsGroupIdRooms(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].rooms.$get(args, options))
}

export async function getV4GroupsGroupIdUsers(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].users.$get(args, options))
}

export async function postV4GroupsGroupIdUsers(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].users.$post(args, options))
}

export async function deleteV4GroupsGroupIdUsers(
  args: InferRequestType<(typeof client.v4.groups)[':group_id']['users']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.groups[':group_id'].users.$delete(args, options))
}

export async function getV4InternalTenantSubscriptionPlan(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.internal.tenant.subscription_plan.$get(args, options))
}

export async function putV4InternalTenantSubscriptionPlan(
  args: InferRequestType<typeof client.v4.internal.tenant.subscription_plan.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.internal.tenant.subscription_plan.$put(args, options))
}

export async function getV4Nodes(
  args: InferRequestType<typeof client.v4.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.$get(args, options))
}

export async function deleteV4Nodes(
  args: InferRequestType<typeof client.v4.nodes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.$delete(args, options))
}

export async function putV4NodesCommentsCommentId(
  args: InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.comments[':comment_id'].$put(args, options))
}

export async function deleteV4NodesCommentsCommentId(
  args: InferRequestType<(typeof client.v4.nodes.comments)[':comment_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.comments[':comment_id'].$delete(args, options))
}

export async function deleteV4NodesDeletedNodes(
  args: InferRequestType<typeof client.v4.nodes.deleted_nodes.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.deleted_nodes.$delete(args, options))
}

export async function postV4NodesDeletedNodesActionsRestore(
  args: InferRequestType<typeof client.v4.nodes.deleted_nodes.actions.restore.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.deleted_nodes.actions.restore.$post(args, options))
}

export async function getV4NodesDeletedNodesDeletedNodeId(
  args: InferRequestType<(typeof client.v4.nodes.deleted_nodes)[':deleted_node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.deleted_nodes[':deleted_node_id'].$get(args, options))
}

export async function putV4NodesFavorites(
  args: InferRequestType<typeof client.v4.nodes.favorites.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.favorites.$put(args, options))
}

export async function putV4NodesFiles(
  args: InferRequestType<typeof client.v4.nodes.files.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.$put(args, options))
}

export async function postV4NodesFilesKeys(
  args: InferRequestType<typeof client.v4.nodes.files.keys.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.keys.$post(args, options))
}

export async function postV4NodesFilesUploads(
  args: InferRequestType<typeof client.v4.nodes.files.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.uploads.$post(args, options))
}

export async function getV4NodesFilesUploadsUploadId(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.uploads[':upload_id'].$get(args, options))
}

export async function putV4NodesFilesUploadsUploadId(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.uploads[':upload_id'].$put(args, options))
}

export async function postV4NodesFilesUploadsUploadId(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.uploads[':upload_id'].$post(args, options))
}

export async function deleteV4NodesFilesUploadsUploadId(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.uploads[':upload_id'].$delete(args, options))
}

export async function putV4NodesFilesUploadsUploadIdS3(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.uploads[':upload_id'].s3.$put(args, options))
}

export async function postV4NodesFilesUploadsUploadIdS3Urls(
  args: InferRequestType<(typeof client.v4.nodes.files.uploads)[':upload_id']['s3_urls']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.nodes.files.uploads[':upload_id'].s3_urls.$post(args, options),
  )
}

export async function getV4NodesFilesVersionsReferenceId(
  args: InferRequestType<(typeof client.v4.nodes.files.versions)[':reference_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files.versions[':reference_id'].$get(args, options))
}

export async function putV4NodesFilesFileId(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files[':file_id'].$put(args, options))
}

export async function getV4NodesFilesFileIdDataRoomFileKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_room_file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.nodes.files[':file_id'].data_room_file_key.$get(args, options),
  )
}

export async function getV4NodesFilesFileIdDataSpaceFileKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['data_space_file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.nodes.files[':file_id'].data_space_file_key.$get(args, options),
  )
}

export async function postV4NodesFilesFileIdDownloads(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['downloads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files[':file_id'].downloads.$post(args, options))
}

export async function getV4NodesFilesFileIdUserFileKey(
  args: InferRequestType<(typeof client.v4.nodes.files)[':file_id']['user_file_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.files[':file_id'].user_file_key.$get(args, options))
}

export async function postV4NodesFolders(
  args: InferRequestType<typeof client.v4.nodes.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.folders.$post(args, options))
}

export async function putV4NodesFoldersFolderId(
  args: InferRequestType<(typeof client.v4.nodes.folders)[':folder_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.folders[':folder_id'].$put(args, options))
}

export async function getV4NodesMissingFileKeys(
  args: InferRequestType<typeof client.v4.nodes.missingFileKeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.missingFileKeys.$get(args, options))
}

export async function postV4NodesRooms(
  args: InferRequestType<typeof client.v4.nodes.rooms.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms.$post(args, options))
}

export async function getV4NodesRoomsPending(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms.pending.$get(args, options))
}

export async function putV4NodesRoomsPending(
  args: InferRequestType<typeof client.v4.nodes.rooms.pending.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms.pending.$put(args, options))
}

export async function putV4NodesRoomsRoomId(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].$put(args, options))
}

export async function putV4NodesRoomsRoomIdConfig(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['config']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].config.$put(args, options))
}

export async function putV4NodesRoomsRoomIdEncrypt(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['encrypt']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].encrypt.$put(args, options))
}

export async function getV4NodesRoomsRoomIdEvents(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['events']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].events.$get(args, options))
}

export async function getV4NodesRoomsRoomIdGroups(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].groups.$get(args, options))
}

export async function putV4NodesRoomsRoomIdGroups(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].groups.$put(args, options))
}

export async function deleteV4NodesRoomsRoomIdGroups(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['groups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].groups.$delete(args, options))
}

export async function putV4NodesRoomsRoomIdGuestUsers(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['guest_users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].guest_users.$put(args, options))
}

export async function getV4NodesRoomsRoomIdKeypair(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$get(args, options))
}

export async function postV4NodesRoomsRoomIdKeypair(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$post(args, options))
}

export async function deleteV4NodesRoomsRoomIdKeypair(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypair']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].keypair.$delete(args, options))
}

export async function getV4NodesRoomsRoomIdKeypairs(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].keypairs.$get(args, options))
}

export async function postV4NodesRoomsRoomIdKeypairs(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['keypairs']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].keypairs.$post(args, options))
}

export async function getV4NodesRoomsRoomIdPolicies(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].policies.$get(args, options))
}

export async function putV4NodesRoomsRoomIdPolicies(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['policies']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].policies.$put(args, options))
}

export async function getV4NodesRoomsRoomIdS3Tags(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].s3_tags.$get(args, options))
}

export async function postV4NodesRoomsRoomIdS3Tags(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['s3_tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].s3_tags.$post(args, options))
}

export async function getV4NodesRoomsRoomIdUsers(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].users.$get(args, options))
}

export async function putV4NodesRoomsRoomIdUsers(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].users.$put(args, options))
}

export async function deleteV4NodesRoomsRoomIdUsers(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['users']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].users.$delete(args, options))
}

export async function getV4NodesRoomsRoomIdWebhooks(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].webhooks.$get(args, options))
}

export async function putV4NodesRoomsRoomIdWebhooks(
  args: InferRequestType<(typeof client.v4.nodes.rooms)[':room_id']['webhooks']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.rooms[':room_id'].webhooks.$put(args, options))
}

export async function getV4NodesSearch(
  args: InferRequestType<typeof client.v4.nodes.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.search.$get(args, options))
}

export async function postV4NodesZip(
  args: InferRequestType<typeof client.v4.nodes.zip.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.zip.$post(args, options))
}

export async function postV4NodesZipDownload(
  args: InferRequestType<typeof client.v4.nodes.zip.download.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes.zip.download.$post(args, options))
}

export async function getV4NodesNodeId(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].$get(args, options))
}

export async function deleteV4NodesNodeId(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].$delete(args, options))
}

export async function getV4NodesNodeIdComments(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].comments.$get(args, options))
}

export async function postV4NodesNodeIdComments(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['comments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].comments.$post(args, options))
}

export async function postV4NodesNodeIdCopyTo(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['copy_to']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].copy_to.$post(args, options))
}

export async function getV4NodesNodeIdDeletedNodes(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].deleted_nodes.$get(args, options))
}

export async function deleteV4NodesNodeIdDeletedNodes(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].deleted_nodes.$delete(args, options))
}

export async function getV4NodesNodeIdDeletedNodesVersions(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['deleted_nodes']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].deleted_nodes.versions.$get(args, options))
}

export async function postV4NodesNodeIdFavorite(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].favorite.$post(args, options))
}

export async function deleteV4NodesNodeIdFavorite(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['favorite']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].favorite.$delete(args, options))
}

export async function postV4NodesNodeIdMoveTo(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['move_to']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].move_to.$post(args, options))
}

export async function getV4NodesNodeIdParents(
  args: InferRequestType<(typeof client.v4.nodes)[':node_id']['parents']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.nodes[':node_id'].parents.$get(args, options))
}

export async function getV4ProvisioningCustomers(
  args: InferRequestType<typeof client.v4.provisioning.customers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.customers.$get(args, options))
}

export async function postV4ProvisioningCustomers(
  args: InferRequestType<typeof client.v4.provisioning.customers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.customers.$post(args, options))
}

export async function getV4ProvisioningCustomersCustomerId(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.customers[':customer_id'].$get(args, options))
}

export async function putV4ProvisioningCustomersCustomerId(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.customers[':customer_id'].$put(args, options))
}

export async function deleteV4ProvisioningCustomersCustomerId(
  args: InferRequestType<(typeof client.v4.provisioning.customers)[':customer_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.customers[':customer_id'].$delete(args, options),
  )
}

export async function getV4ProvisioningCustomersCustomerIdCustomerAttributes(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.customers[':customer_id'].customerAttributes.$get(args, options),
  )
}

export async function putV4ProvisioningCustomersCustomerIdCustomerAttributes(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.customers[':customer_id'].customerAttributes.$put(args, options),
  )
}

export async function postV4ProvisioningCustomersCustomerIdCustomerAttributes(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.customers[':customer_id'].customerAttributes.$post(args, options),
  )
}

export async function deleteV4ProvisioningCustomersCustomerIdCustomerAttributesKey(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['customerAttributes'][':key']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.customers[':customer_id'].customerAttributes[':key'].$delete(
      args,
      options,
    ),
  )
}

export async function getV4ProvisioningCustomersCustomerIdUsers(
  args: InferRequestType<
    (typeof client.v4.provisioning.customers)[':customer_id']['users']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.customers[':customer_id'].users.$get(args, options),
  )
}

export async function getV4ProvisioningWebhooks(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.webhooks.$get(args, options))
}

export async function postV4ProvisioningWebhooks(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.webhooks.$post(args, options))
}

export async function getV4ProvisioningWebhooksEventTypes(
  args: InferRequestType<typeof client.v4.provisioning.webhooks.event_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.webhooks.event_types.$get(args, options))
}

export async function getV4ProvisioningWebhooksWebhookId(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$get(args, options))
}

export async function putV4ProvisioningWebhooksWebhookId(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$put(args, options))
}

export async function deleteV4ProvisioningWebhooksWebhookId(
  args: InferRequestType<(typeof client.v4.provisioning.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.provisioning.webhooks[':webhook_id'].$delete(args, options))
}

export async function postV4ProvisioningWebhooksWebhookIdResetLifetime(
  args: InferRequestType<
    (typeof client.v4.provisioning.webhooks)[':webhook_id']['reset_lifetime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.provisioning.webhooks[':webhook_id'].reset_lifetime.$post(args, options),
  )
}

export async function getV4PublicSharesDownloadsAccessKey(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.shares.downloads[':access_key'].$get(args, options))
}

export async function postV4PublicSharesDownloadsAccessKey(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.shares.downloads[':access_key'].$post(args, options))
}

export async function headV4PublicSharesDownloadsAccessKey(
  args: InferRequestType<(typeof client.v4.public.shares.downloads)[':access_key']['$head']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.shares.downloads[':access_key'].$head(args, options))
}

export async function getV4PublicSharesDownloadsAccessKeyToken(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.downloads[':access_key'][':token'].$get(args, options),
  )
}

export async function headV4PublicSharesDownloadsAccessKeyToken(
  args: InferRequestType<
    (typeof client.v4.public.shares.downloads)[':access_key'][':token']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.downloads[':access_key'][':token'].$head(args, options),
  )
}

export async function getV4PublicSharesUploadsAccessKey(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.shares.uploads[':access_key'].$get(args, options))
}

export async function postV4PublicSharesUploadsAccessKey(
  args: InferRequestType<(typeof client.v4.public.shares.uploads)[':access_key']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.shares.uploads[':access_key'].$post(args, options))
}

export async function getV4PublicSharesUploadsAccessKeyUploadId(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.uploads[':access_key'][':upload_id'].$get(args, options),
  )
}

export async function putV4PublicSharesUploadsAccessKeyUploadId(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.uploads[':access_key'][':upload_id'].$put(args, options),
  )
}

export async function postV4PublicSharesUploadsAccessKeyUploadId(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.uploads[':access_key'][':upload_id'].$post(args, options),
  )
}

export async function deleteV4PublicSharesUploadsAccessKeyUploadId(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.uploads[':access_key'][':upload_id'].$delete(args, options),
  )
}

export async function putV4PublicSharesUploadsAccessKeyUploadIdS3(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.uploads[':access_key'][':upload_id'].s3.$put(args, options),
  )
}

export async function postV4PublicSharesUploadsAccessKeyUploadIdS3Urls(
  args: InferRequestType<
    (typeof client.v4.public.shares.uploads)[':access_key'][':upload_id']['s3_urls']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.public.shares.uploads[':access_key'][':upload_id'].s3_urls.$post(args, options),
  )
}

export async function getV4PublicSoftwareThirdPartyDependencies(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v4.public.software.third_party_dependencies.$get(undefined, options),
  )
}

export async function getV4PublicSoftwareVersion(
  args: InferRequestType<typeof client.v4.public.software.version.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.software.version.$get(args, options))
}

export async function getV4PublicSystemInfo(
  args: InferRequestType<typeof client.v4.public.system.info.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.system.info.$get(args, options))
}

export async function getV4PublicSystemInfoAuthAd(
  args: InferRequestType<typeof client.v4.public.system.info.auth.ad.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.system.info.auth.ad.$get(args, options))
}

export async function getV4PublicSystemInfoAuthOpenid(
  args: InferRequestType<typeof client.v4.public.system.info.auth.openid.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.system.info.auth.openid.$get(args, options))
}

export async function getV4PublicTime(
  args: InferRequestType<typeof client.v4.public.time.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.public.time.$get(args, options))
}

export async function getV4ResourcesUserNotificationsScopes(options?: ClientRequestOptions) {
  return await parseResponse(client.v4.resources.user.notifications.scopes.$get(undefined, options))
}

export async function getV4ResourcesUsersUserIdAvatarUuid(
  args: InferRequestType<(typeof client.v4.resources.users)[':user_id']['avatar'][':uuid']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.resources.users[':user_id'].avatar[':uuid'].$get(args, options),
  )
}

export async function getV4Roles(
  args: InferRequestType<typeof client.v4.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles.$get(args, options))
}

export async function getV4RolesRoleIdGroups(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles[':role_id'].groups.$get(args, options))
}

export async function postV4RolesRoleIdGroups(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles[':role_id'].groups.$post(args, options))
}

export async function deleteV4RolesRoleIdGroups(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['groups']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles[':role_id'].groups.$delete(args, options))
}

export async function getV4RolesRoleIdUsers(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles[':role_id'].users.$get(args, options))
}

export async function postV4RolesRoleIdUsers(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles[':role_id'].users.$post(args, options))
}

export async function deleteV4RolesRoleIdUsers(
  args: InferRequestType<(typeof client.v4.roles)[':role_id']['users']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.roles[':role_id'].users.$delete(args, options))
}

export async function getV4Settings(
  args: InferRequestType<typeof client.v4.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.$get(args, options))
}

export async function putV4Settings(
  args: InferRequestType<typeof client.v4.settings.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.$put(args, options))
}

export async function getV4SettingsKeypair(
  args: InferRequestType<typeof client.v4.settings.keypair.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.keypair.$get(args, options))
}

export async function postV4SettingsKeypair(
  args: InferRequestType<typeof client.v4.settings.keypair.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.keypair.$post(args, options))
}

export async function deleteV4SettingsKeypair(
  args: InferRequestType<typeof client.v4.settings.keypair.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.keypair.$delete(args, options))
}

export async function getV4SettingsKeypairs(
  args: InferRequestType<typeof client.v4.settings.keypairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.keypairs.$get(args, options))
}

export async function postV4SettingsKeypairs(
  args: InferRequestType<typeof client.v4.settings.keypairs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.keypairs.$post(args, options))
}

export async function getV4SettingsNotificationsChannels(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.notifications.channels.$get(args, options))
}

export async function putV4SettingsNotificationsChannels(
  args: InferRequestType<typeof client.v4.settings.notifications.channels.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.notifications.channels.$put(args, options))
}

export async function getV4SettingsWebhooks(
  args: InferRequestType<typeof client.v4.settings.webhooks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.webhooks.$get(args, options))
}

export async function postV4SettingsWebhooks(
  args: InferRequestType<typeof client.v4.settings.webhooks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.webhooks.$post(args, options))
}

export async function getV4SettingsWebhooksEventTypes(
  args: InferRequestType<typeof client.v4.settings.webhooks.event_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.webhooks.event_types.$get(args, options))
}

export async function getV4SettingsWebhooksWebhookId(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.webhooks[':webhook_id'].$get(args, options))
}

export async function putV4SettingsWebhooksWebhookId(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.webhooks[':webhook_id'].$put(args, options))
}

export async function deleteV4SettingsWebhooksWebhookId(
  args: InferRequestType<(typeof client.v4.settings.webhooks)[':webhook_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.settings.webhooks[':webhook_id'].$delete(args, options))
}

export async function postV4SettingsWebhooksWebhookIdResetLifetime(
  args: InferRequestType<
    (typeof client.v4.settings.webhooks)[':webhook_id']['reset_lifetime']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.settings.webhooks[':webhook_id'].reset_lifetime.$post(args, options),
  )
}

export async function getV4SharesDownloads(
  args: InferRequestType<typeof client.v4.shares.downloads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads.$get(args, options))
}

export async function putV4SharesDownloads(
  args: InferRequestType<typeof client.v4.shares.downloads.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads.$put(args, options))
}

export async function postV4SharesDownloads(
  args: InferRequestType<typeof client.v4.shares.downloads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads.$post(args, options))
}

export async function deleteV4SharesDownloads(
  args: InferRequestType<typeof client.v4.shares.downloads.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads.$delete(args, options))
}

export async function getV4SharesDownloadsShareId(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads[':share_id'].$get(args, options))
}

export async function putV4SharesDownloadsShareId(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads[':share_id'].$put(args, options))
}

export async function deleteV4SharesDownloadsShareId(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads[':share_id'].$delete(args, options))
}

export async function postV4SharesDownloadsShareIdEmail(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads[':share_id'].email.$post(args, options))
}

export async function getV4SharesDownloadsShareIdQr(
  args: InferRequestType<(typeof client.v4.shares.downloads)[':share_id']['qr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.downloads[':share_id'].qr.$get(args, options))
}

export async function getV4SharesUploads(
  args: InferRequestType<typeof client.v4.shares.uploads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads.$get(args, options))
}

export async function putV4SharesUploads(
  args: InferRequestType<typeof client.v4.shares.uploads.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads.$put(args, options))
}

export async function postV4SharesUploads(
  args: InferRequestType<typeof client.v4.shares.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads.$post(args, options))
}

export async function deleteV4SharesUploads(
  args: InferRequestType<typeof client.v4.shares.uploads.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads.$delete(args, options))
}

export async function getV4SharesUploadsShareId(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads[':share_id'].$get(args, options))
}

export async function putV4SharesUploadsShareId(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads[':share_id'].$put(args, options))
}

export async function deleteV4SharesUploadsShareId(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads[':share_id'].$delete(args, options))
}

export async function postV4SharesUploadsShareIdEmail(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['email']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads[':share_id'].email.$post(args, options))
}

export async function getV4SharesUploadsShareIdQr(
  args: InferRequestType<(typeof client.v4.shares.uploads)[':share_id']['qr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.shares.uploads[':share_id'].qr.$get(args, options))
}

export async function postV4SystemConfigActionsTestAd(
  args: InferRequestType<typeof client.v4.system.config.actions.test.ad.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.actions.test.ad.$post(args, options))
}

export async function postV4SystemConfigActionsTestRadius(
  args: InferRequestType<typeof client.v4.system.config.actions.test.radius.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.actions.test.radius.$post(args, options))
}

export async function getV4SystemConfigAuthAds(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.ads.$get(args, options))
}

export async function postV4SystemConfigAuthAds(
  args: InferRequestType<typeof client.v4.system.config.auth.ads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.ads.$post(args, options))
}

export async function getV4SystemConfigAuthAdsAdId(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.ads[':ad_id'].$get(args, options))
}

export async function putV4SystemConfigAuthAdsAdId(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.ads[':ad_id'].$put(args, options))
}

export async function deleteV4SystemConfigAuthAdsAdId(
  args: InferRequestType<(typeof client.v4.system.config.auth.ads)[':ad_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.ads[':ad_id'].$delete(args, options))
}

export async function getV4SystemConfigAuthOpenidIdps(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.openid.idps.$get(args, options))
}

export async function postV4SystemConfigAuthOpenidIdps(
  args: InferRequestType<typeof client.v4.system.config.auth.openid.idps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.openid.idps.$post(args, options))
}

export async function getV4SystemConfigAuthOpenidIdpsIdpId(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.auth.openid.idps[':idp_id'].$get(args, options),
  )
}

export async function putV4SystemConfigAuthOpenidIdpsIdpId(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.auth.openid.idps[':idp_id'].$put(args, options),
  )
}

export async function deleteV4SystemConfigAuthOpenidIdpsIdpId(
  args: InferRequestType<(typeof client.v4.system.config.auth.openid.idps)[':idp_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.auth.openid.idps[':idp_id'].$delete(args, options),
  )
}

export async function getV4SystemConfigAuthRadius(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.radius.$get(args, options))
}

export async function putV4SystemConfigAuthRadius(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.radius.$put(args, options))
}

export async function postV4SystemConfigAuthRadius(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.radius.$post(args, options))
}

export async function deleteV4SystemConfigAuthRadius(
  args: InferRequestType<typeof client.v4.system.config.auth.radius.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.auth.radius.$delete(args, options))
}

export async function getV4SystemConfigOauthClients(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.oauth.clients.$get(args, options))
}

export async function postV4SystemConfigOauthClients(
  args: InferRequestType<typeof client.v4.system.config.oauth.clients.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.oauth.clients.$post(args, options))
}

export async function getV4SystemConfigOauthClientsClientId(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.oauth.clients[':client_id'].$get(args, options),
  )
}

export async function putV4SystemConfigOauthClientsClientId(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.oauth.clients[':client_id'].$put(args, options),
  )
}

export async function deleteV4SystemConfigOauthClientsClientId(
  args: InferRequestType<(typeof client.v4.system.config.oauth.clients)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.oauth.clients[':client_id'].$delete(args, options),
  )
}

export async function getV4SystemConfigPoliciesClassifications(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.classifications.$get(args, options))
}

export async function putV4SystemConfigPoliciesClassifications(
  args: InferRequestType<typeof client.v4.system.config.policies.classifications.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.classifications.$put(args, options))
}

export async function getV4SystemConfigPoliciesGuestUsers(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.guest_users.$get(args, options))
}

export async function putV4SystemConfigPoliciesGuestUsers(
  args: InferRequestType<typeof client.v4.system.config.policies.guest_users.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.guest_users.$put(args, options))
}

export async function getV4SystemConfigPoliciesMfa(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.mfa.$get(args, options))
}

export async function putV4SystemConfigPoliciesMfa(
  args: InferRequestType<typeof client.v4.system.config.policies.mfa.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.mfa.$put(args, options))
}

export async function getV4SystemConfigPoliciesPasswords(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.passwords.$get(args, options))
}

export async function putV4SystemConfigPoliciesPasswords(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.policies.passwords.$put(args, options))
}

export async function postV4SystemConfigPoliciesPasswordsEnforceChange(
  args: InferRequestType<typeof client.v4.system.config.policies.passwords.enforce_change.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.policies.passwords.enforce_change.$post(args, options),
  )
}

export async function getV4SystemConfigPoliciesPasswordsPasswordType(
  args: InferRequestType<
    (typeof client.v4.system.config.policies.passwords)[':password_type']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.system.config.policies.passwords[':password_type'].$get(args, options),
  )
}

export async function getV4SystemConfigSettingsAuth(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.auth.$get(args, options))
}

export async function putV4SystemConfigSettingsAuth(
  args: InferRequestType<typeof client.v4.system.config.settings.auth.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.auth.$put(args, options))
}

export async function getV4SystemConfigSettingsDefaults(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.defaults.$get(args, options))
}

export async function putV4SystemConfigSettingsDefaults(
  args: InferRequestType<typeof client.v4.system.config.settings.defaults.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.defaults.$put(args, options))
}

export async function getV4SystemConfigSettingsEventlog(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.eventlog.$get(args, options))
}

export async function putV4SystemConfigSettingsEventlog(
  args: InferRequestType<typeof client.v4.system.config.settings.eventlog.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.eventlog.$put(args, options))
}

export async function getV4SystemConfigSettingsGeneral(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.general.$get(args, options))
}

export async function putV4SystemConfigSettingsGeneral(
  args: InferRequestType<typeof client.v4.system.config.settings.general.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.general.$put(args, options))
}

export async function getV4SystemConfigSettingsInfrastructure(
  args: InferRequestType<typeof client.v4.system.config.settings.infrastructure.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.infrastructure.$get(args, options))
}

export async function getV4SystemConfigSettingsSyslog(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.syslog.$get(args, options))
}

export async function putV4SystemConfigSettingsSyslog(
  args: InferRequestType<typeof client.v4.system.config.settings.syslog.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.settings.syslog.$put(args, options))
}

export async function getV4SystemConfigStorageS3(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.$get(args, options))
}

export async function putV4SystemConfigStorageS3(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.$put(args, options))
}

export async function postV4SystemConfigStorageS3(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.$post(args, options))
}

export async function getV4SystemConfigStorageS3Tags(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.tags.$get(args, options))
}

export async function postV4SystemConfigStorageS3Tags(
  args: InferRequestType<typeof client.v4.system.config.storage.s3.tags.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.tags.$post(args, options))
}

export async function getV4SystemConfigStorageS3TagsId(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.tags[':id'].$get(args, options))
}

export async function deleteV4SystemConfigStorageS3TagsId(
  args: InferRequestType<(typeof client.v4.system.config.storage.s3.tags)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.system.config.storage.s3.tags[':id'].$delete(args, options))
}

export async function putV4UploadsToken(
  args: InferRequestType<(typeof client.v4.uploads)[':token']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads[':token'].$put(args, options))
}

export async function postV4UploadsToken(
  args: InferRequestType<(typeof client.v4.uploads)[':token']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads[':token'].$post(args, options))
}

export async function deleteV4UploadsToken(
  args: InferRequestType<(typeof client.v4.uploads)[':token']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.uploads[':token'].$delete(args, options))
}

export async function getV4UserAccount(
  args: InferRequestType<typeof client.v4.user.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.$get(args, options))
}

export async function putV4UserAccount(
  args: InferRequestType<typeof client.v4.user.account.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.$put(args, options))
}

export async function getV4UserAccountAvatar(
  args: InferRequestType<typeof client.v4.user.account.avatar.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.avatar.$get(args, options))
}

export async function postV4UserAccountAvatar(
  args: InferRequestType<typeof client.v4.user.account.avatar.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.avatar.$post(args, options))
}

export async function deleteV4UserAccountAvatar(
  args: InferRequestType<typeof client.v4.user.account.avatar.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.avatar.$delete(args, options))
}

export async function getV4UserAccountCustomer(
  args: InferRequestType<typeof client.v4.user.account.customer.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.customer.$get(args, options))
}

export async function putV4UserAccountCustomer(
  args: InferRequestType<typeof client.v4.user.account.customer.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.customer.$put(args, options))
}

export async function getV4UserAccountCustomerKeypair(
  args: InferRequestType<typeof client.v4.user.account.customer.keypair.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.customer.keypair.$get(args, options))
}

export async function getV4UserAccountKeypair(
  args: InferRequestType<typeof client.v4.user.account.keypair.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.keypair.$get(args, options))
}

export async function postV4UserAccountKeypair(
  args: InferRequestType<typeof client.v4.user.account.keypair.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.keypair.$post(args, options))
}

export async function deleteV4UserAccountKeypair(
  args: InferRequestType<typeof client.v4.user.account.keypair.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.keypair.$delete(args, options))
}

export async function getV4UserAccountKeypairs(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.keypairs.$get(args, options))
}

export async function postV4UserAccountKeypairs(
  args: InferRequestType<typeof client.v4.user.account.keypairs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.keypairs.$post(args, options))
}

export async function getV4UserAccountMfa(
  args: InferRequestType<typeof client.v4.user.account.mfa.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.mfa.$get(args, options))
}

export async function deleteV4UserAccountMfa(
  args: InferRequestType<typeof client.v4.user.account.mfa.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.mfa.$delete(args, options))
}

export async function getV4UserAccountMfaTotp(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.mfa.totp.$get(args, options))
}

export async function postV4UserAccountMfaTotp(
  args: InferRequestType<typeof client.v4.user.account.mfa.totp.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.mfa.totp.$post(args, options))
}

export async function deleteV4UserAccountMfaTotpId(
  args: InferRequestType<(typeof client.v4.user.account.mfa.totp)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.mfa.totp[':id'].$delete(args, options))
}

export async function putV4UserAccountPassword(
  args: InferRequestType<typeof client.v4.user.account.password.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.account.password.$put(args, options))
}

export async function postV4UserLogout(
  args: InferRequestType<typeof client.v4.user.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.logout.$post(args, options))
}

export async function getV4UserNotificationsConfig(
  args: InferRequestType<typeof client.v4.user.notifications.config.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.notifications.config.$get(args, options))
}

export async function putV4UserNotificationsConfigId(
  args: InferRequestType<(typeof client.v4.user.notifications.config)[':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.notifications.config[':id'].$put(args, options))
}

export async function getV4UserOauthApprovals(
  args: InferRequestType<typeof client.v4.user.oauth.approvals.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.oauth.approvals.$get(args, options))
}

export async function deleteV4UserOauthApprovalsClientId(
  args: InferRequestType<(typeof client.v4.user.oauth.approvals)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.oauth.approvals[':client_id'].$delete(args, options))
}

export async function getV4UserOauthAuthorizations(
  args: InferRequestType<typeof client.v4.user.oauth.authorizations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.oauth.authorizations.$get(args, options))
}

export async function deleteV4UserOauthAuthorizationsClientId(
  args: InferRequestType<(typeof client.v4.user.oauth.authorizations)[':client_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.user.oauth.authorizations[':client_id'].$delete(args, options),
  )
}

export async function deleteV4UserOauthAuthorizationsClientIdAuthorizationId(
  args: InferRequestType<
    (typeof client.v4.user.oauth.authorizations)[':client_id'][':authorization_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.user.oauth.authorizations[':client_id'][':authorization_id'].$delete(args, options),
  )
}

export async function getV4UserPing(
  args: InferRequestType<typeof client.v4.user.ping.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.ping.$get(args, options))
}

export async function getV4UserProfileAttributes(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.profileAttributes.$get(args, options))
}

export async function putV4UserProfileAttributes(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.profileAttributes.$put(args, options))
}

export async function postV4UserProfileAttributes(
  args: InferRequestType<typeof client.v4.user.profileAttributes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.profileAttributes.$post(args, options))
}

export async function deleteV4UserProfileAttributesKey(
  args: InferRequestType<(typeof client.v4.user.profileAttributes)[':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.profileAttributes[':key'].$delete(args, options))
}

export async function getV4UserSubscriptionsDownloadShares(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.download_shares.$get(args, options))
}

export async function putV4UserSubscriptionsDownloadShares(
  args: InferRequestType<typeof client.v4.user.subscriptions.download_shares.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.download_shares.$put(args, options))
}

export async function postV4UserSubscriptionsDownloadSharesShareId(
  args: InferRequestType<
    (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.user.subscriptions.download_shares[':share_id'].$post(args, options),
  )
}

export async function deleteV4UserSubscriptionsDownloadSharesShareId(
  args: InferRequestType<
    (typeof client.v4.user.subscriptions.download_shares)[':share_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.user.subscriptions.download_shares[':share_id'].$delete(args, options),
  )
}

export async function getV4UserSubscriptionsNodes(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.nodes.$get(args, options))
}

export async function putV4UserSubscriptionsNodes(
  args: InferRequestType<typeof client.v4.user.subscriptions.nodes.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.nodes.$put(args, options))
}

export async function postV4UserSubscriptionsNodesNodeId(
  args: InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.nodes[':node_id'].$post(args, options))
}

export async function deleteV4UserSubscriptionsNodesNodeId(
  args: InferRequestType<(typeof client.v4.user.subscriptions.nodes)[':node_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.nodes[':node_id'].$delete(args, options))
}

export async function getV4UserSubscriptionsUploadShares(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.upload_shares.$get(args, options))
}

export async function putV4UserSubscriptionsUploadShares(
  args: InferRequestType<typeof client.v4.user.subscriptions.upload_shares.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.user.subscriptions.upload_shares.$put(args, options))
}

export async function postV4UserSubscriptionsUploadSharesShareId(
  args: InferRequestType<(typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.user.subscriptions.upload_shares[':share_id'].$post(args, options),
  )
}

export async function deleteV4UserSubscriptionsUploadSharesShareId(
  args: InferRequestType<
    (typeof client.v4.user.subscriptions.upload_shares)[':share_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.user.subscriptions.upload_shares[':share_id'].$delete(args, options),
  )
}

export async function getV4Users(
  args: InferRequestType<typeof client.v4.users.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users.$get(args, options))
}

export async function postV4Users(
  args: InferRequestType<typeof client.v4.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users.$post(args, options))
}

export async function getV4UsersUserId(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].$get(args, options))
}

export async function putV4UsersUserId(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].$put(args, options))
}

export async function deleteV4UsersUserId(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].$delete(args, options))
}

export async function getV4UsersUserIdGroups(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['groups']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].groups.$get(args, options))
}

export async function getV4UsersUserIdLastAdminRooms(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['last_admin_rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].last_admin_rooms.$get(args, options))
}

export async function postV4UsersUserIdMfaEmergencyCode(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['mfa']['emergency_code']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].mfa.emergency_code.$post(args, options))
}

export async function getV4UsersUserIdRoles(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['roles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].roles.$get(args, options))
}

export async function getV4UsersUserIdRooms(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['rooms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].rooms.$get(args, options))
}

export async function getV4UsersUserIdUserAttributes(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].userAttributes.$get(args, options))
}

export async function putV4UsersUserIdUserAttributes(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].userAttributes.$put(args, options))
}

export async function postV4UsersUserIdUserAttributes(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v4.users[':user_id'].userAttributes.$post(args, options))
}

export async function deleteV4UsersUserIdUserAttributesKey(
  args: InferRequestType<(typeof client.v4.users)[':user_id']['userAttributes'][':key']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v4.users[':user_id'].userAttributes[':key'].$delete(args, options),
  )
}
