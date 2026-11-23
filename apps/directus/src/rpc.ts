import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getActivity(
  args: InferRequestType<typeof client.activity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity.$get(args, options))
}

export async function getActivityId(
  args: InferRequestType<(typeof client.activity)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.activity[':id'].$get(args, options))
}

export async function getAssetsId(
  args: InferRequestType<(typeof client.assets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.assets[':id'].$get(args, options))
}

export async function postAuthLogin(
  args: InferRequestType<typeof client.auth.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.login.$post(args, options))
}

export async function postAuthRefresh(
  args: InferRequestType<typeof client.auth.refresh.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.refresh.$post(args, options))
}

export async function postAuthLogout(
  args: InferRequestType<typeof client.auth.logout.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.logout.$post(args, options))
}

export async function postAuthPasswordRequest(
  args: InferRequestType<typeof client.auth.password.request.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.password.request.$post(args, options))
}

export async function postAuthPasswordReset(
  args: InferRequestType<typeof client.auth.password.reset.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.password.reset.$post(args, options))
}

export async function getAuthOauth(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.oauth.$get(undefined, options))
}

export async function getAuthOauthProvider(
  args: InferRequestType<(typeof client.auth.oauth)[':provider']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.auth.oauth[':provider'].$get(args, options))
}

export async function getItemsCollection(
  args: InferRequestType<(typeof client.items)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'].$get(args, options))
}

export async function postItemsCollection(
  args: InferRequestType<(typeof client.items)[':collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'].$post(args, options))
}

export async function deleteItemsCollection(
  args: InferRequestType<(typeof client.items)[':collection']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'].$delete(args, options))
}

export async function patchItemsCollection(
  args: InferRequestType<(typeof client.items)[':collection']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'].$patch(args, options))
}

export async function getItemsCollectionId(
  args: InferRequestType<(typeof client.items)[':collection'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'][':id'].$get(args, options))
}

export async function deleteItemsCollectionId(
  args: InferRequestType<(typeof client.items)[':collection'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'][':id'].$delete(args, options))
}

export async function patchItemsCollectionId(
  args: InferRequestType<(typeof client.items)[':collection'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.items[':collection'][':id'].$patch(args, options))
}

export async function getPresets(
  args: InferRequestType<typeof client.presets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets.$get(args, options))
}

export async function postPresets(
  args: InferRequestType<typeof client.presets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets.$post(args, options))
}

export async function deletePresets(options?: ClientRequestOptions) {
  return await parseResponse(client.presets.$delete(undefined, options))
}

export async function patchPresets(
  args: InferRequestType<typeof client.presets.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets.$patch(args, options))
}

export async function getPresetsId(
  args: InferRequestType<(typeof client.presets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets[':id'].$get(args, options))
}

export async function deletePresetsId(
  args: InferRequestType<(typeof client.presets)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets[':id'].$delete(args, options))
}

export async function patchPresetsId(
  args: InferRequestType<(typeof client.presets)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.presets[':id'].$patch(args, options))
}

export async function getCollections(options?: ClientRequestOptions) {
  return await parseResponse(client.collections.$get(undefined, options))
}

export async function postCollections(
  args: InferRequestType<typeof client.collections.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections.$post(args, options))
}

export async function getCollectionsId(
  args: InferRequestType<(typeof client.collections)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':id'].$get(args, options))
}

export async function deleteCollectionsId(
  args: InferRequestType<(typeof client.collections)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':id'].$delete(args, options))
}

export async function patchCollectionsId(
  args: InferRequestType<(typeof client.collections)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.collections[':id'].$patch(args, options))
}

export async function getComments(
  args: InferRequestType<typeof client.comments.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$get(args, options))
}

export async function postComments(
  args: InferRequestType<typeof client.comments.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$post(args, options))
}

export async function deleteComments(options?: ClientRequestOptions) {
  return await parseResponse(client.comments.$delete(undefined, options))
}

export async function patchComments(
  args: InferRequestType<typeof client.comments.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments.$patch(args, options))
}

export async function getCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$get(args, options))
}

export async function deleteCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$delete(args, options))
}

export async function patchCommentsId(
  args: InferRequestType<(typeof client.comments)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.comments[':id'].$patch(args, options))
}

export async function getExtensions(options?: ClientRequestOptions) {
  return await parseResponse(client.extensions.$get(undefined, options))
}

export async function patchExtensionsName(
  args: InferRequestType<(typeof client.extensions)[':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':name'].$patch(args, options))
}

export async function patchExtensionsBundleName(
  args: InferRequestType<(typeof client.extensions)[':bundle'][':name']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.extensions[':bundle'][':name'].$patch(args, options))
}

export async function getFields(options?: ClientRequestOptions) {
  return await parseResponse(client.fields.$get(undefined, options))
}

export async function getFieldsCollection(
  args: InferRequestType<(typeof client.fields)[':collection']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fields[':collection'].$get(args, options))
}

export async function postFieldsCollection(
  args: InferRequestType<(typeof client.fields)[':collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fields[':collection'].$post(args, options))
}

export async function getFieldsCollectionId(
  args: InferRequestType<(typeof client.fields)[':collection'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fields[':collection'][':id'].$get(args, options))
}

export async function deleteFieldsCollectionId(
  args: InferRequestType<(typeof client.fields)[':collection'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fields[':collection'][':id'].$delete(args, options))
}

export async function patchFieldsCollectionId(
  args: InferRequestType<(typeof client.fields)[':collection'][':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.fields[':collection'][':id'].$patch(args, options))
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

export async function deleteFiles(options?: ClientRequestOptions) {
  return await parseResponse(client.files.$delete(undefined, options))
}

export async function patchFiles(
  args: InferRequestType<typeof client.files.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files.$patch(args, options))
}

export async function getFilesId(
  args: InferRequestType<(typeof client.files)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].$get(args, options))
}

export async function deleteFilesId(
  args: InferRequestType<(typeof client.files)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].$delete(args, options))
}

export async function patchFilesId(
  args: InferRequestType<(typeof client.files)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.files[':id'].$patch(args, options))
}

export async function getFlows(
  args: InferRequestType<typeof client.flows.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.$get(args, options))
}

export async function postFlows(
  args: InferRequestType<typeof client.flows.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.$post(args, options))
}

export async function deleteFlows(options?: ClientRequestOptions) {
  return await parseResponse(client.flows.$delete(undefined, options))
}

export async function patchFlows(
  args: InferRequestType<typeof client.flows.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows.$patch(args, options))
}

export async function getFlowsId(
  args: InferRequestType<(typeof client.flows)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows[':id'].$get(args, options))
}

export async function deleteFlowsId(
  args: InferRequestType<(typeof client.flows)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows[':id'].$delete(args, options))
}

export async function patchFlowsId(
  args: InferRequestType<(typeof client.flows)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.flows[':id'].$patch(args, options))
}

export async function getFolders(
  args: InferRequestType<typeof client.folders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$get(args, options))
}

export async function postFolders(
  args: InferRequestType<typeof client.folders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$post(args, options))
}

export async function deleteFolders(options?: ClientRequestOptions) {
  return await parseResponse(client.folders.$delete(undefined, options))
}

export async function patchFolders(
  args: InferRequestType<typeof client.folders.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders.$patch(args, options))
}

export async function getFoldersId(
  args: InferRequestType<(typeof client.folders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':id'].$get(args, options))
}

export async function deleteFoldersId(
  args: InferRequestType<(typeof client.folders)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':id'].$delete(args, options))
}

export async function patchFoldersId(
  args: InferRequestType<(typeof client.folders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.folders[':id'].$patch(args, options))
}

export async function getOperations(
  args: InferRequestType<typeof client.operations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations.$get(args, options))
}

export async function postOperations(
  args: InferRequestType<typeof client.operations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations.$post(args, options))
}

export async function deleteOperations(options?: ClientRequestOptions) {
  return await parseResponse(client.operations.$delete(undefined, options))
}

export async function patchOperations(
  args: InferRequestType<typeof client.operations.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations.$patch(args, options))
}

export async function getOperationsId(
  args: InferRequestType<(typeof client.operations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations[':id'].$get(args, options))
}

export async function deleteOperationsId(
  args: InferRequestType<(typeof client.operations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations[':id'].$delete(args, options))
}

export async function patchOperationsId(
  args: InferRequestType<(typeof client.operations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.operations[':id'].$patch(args, options))
}

export async function getPermissions(
  args: InferRequestType<typeof client.permissions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$get(args, options))
}

export async function postPermissions(
  args: InferRequestType<typeof client.permissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$post(args, options))
}

export async function deletePermissions(options?: ClientRequestOptions) {
  return await parseResponse(client.permissions.$delete(undefined, options))
}

export async function patchPermissions(
  args: InferRequestType<typeof client.permissions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions.$patch(args, options))
}

export async function getPermissionsMe(options?: ClientRequestOptions) {
  return await parseResponse(client.permissions.me.$get(undefined, options))
}

export async function getPermissionsId(
  args: InferRequestType<(typeof client.permissions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions[':id'].$get(args, options))
}

export async function deletePermissionsId(
  args: InferRequestType<(typeof client.permissions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions[':id'].$delete(args, options))
}

export async function patchPermissionsId(
  args: InferRequestType<(typeof client.permissions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.permissions[':id'].$patch(args, options))
}

export async function getRelations(options?: ClientRequestOptions) {
  return await parseResponse(client.relations.$get(undefined, options))
}

export async function postRelations(
  args: InferRequestType<typeof client.relations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relations.$post(args, options))
}

export async function getRelationsId(
  args: InferRequestType<(typeof client.relations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relations[':id'].$get(args, options))
}

export async function deleteRelationsId(
  args: InferRequestType<(typeof client.relations)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relations[':id'].$delete(args, options))
}

export async function patchRelationsId(
  args: InferRequestType<(typeof client.relations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.relations[':id'].$patch(args, options))
}

export async function getRevisions(
  args: InferRequestType<typeof client.revisions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.revisions.$get(args, options))
}

export async function getRevisionsId(
  args: InferRequestType<(typeof client.revisions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.revisions[':id'].$get(args, options))
}

export async function getRoles(
  args: InferRequestType<typeof client.roles.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$get(args, options))
}

export async function postRoles(
  args: InferRequestType<typeof client.roles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$post(args, options))
}

export async function deleteRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.roles.$delete(undefined, options))
}

export async function patchRoles(
  args: InferRequestType<typeof client.roles.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles.$patch(args, options))
}

export async function getRolesId(
  args: InferRequestType<(typeof client.roles)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':id'].$get(args, options))
}

export async function deleteRolesId(
  args: InferRequestType<(typeof client.roles)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':id'].$delete(args, options))
}

export async function patchRolesId(
  args: InferRequestType<(typeof client.roles)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.roles[':id'].$patch(args, options))
}

export async function getSchemaSnapshot(
  args: InferRequestType<typeof client.schema.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema.snapshot.$get(args, options))
}

export async function postSchemaApply(
  args: InferRequestType<typeof client.schema.apply.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema.apply.$post(args, options))
}

export async function postSchemaDiff(
  args: InferRequestType<typeof client.schema.diff.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.schema.diff.$post(args, options))
}

export async function getServerInfo(options?: ClientRequestOptions) {
  return await parseResponse(client.server.info.$get(undefined, options))
}

export async function getServerPing(options?: ClientRequestOptions) {
  return await parseResponse(client.server.ping.$get(undefined, options))
}

export async function getSettings(
  args: InferRequestType<typeof client.settings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$get(args, options))
}

export async function patchSettings(
  args: InferRequestType<typeof client.settings.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.settings.$patch(args, options))
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

export async function deleteUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$delete(undefined, options))
}

export async function patchUsers(
  args: InferRequestType<typeof client.users.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$patch(args, options))
}

export async function getUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$get(args, options))
}

export async function deleteUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$delete(args, options))
}

export async function patchUsersId(
  args: InferRequestType<(typeof client.users)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].$patch(args, options))
}

export async function postUsersIdTfaDisable(
  args: InferRequestType<(typeof client.users)[':id']['tfa']['disable']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':id'].tfa.disable.$post(args, options))
}

export async function postUsersInvite(
  args: InferRequestType<typeof client.users.invite.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.invite.$post(args, options))
}

export async function postUsersInviteAccept(
  args: InferRequestType<typeof client.users.invite.accept.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.invite.accept.$post(args, options))
}

export async function getUsersMe(
  args: InferRequestType<typeof client.users.me.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.$get(args, options))
}

export async function patchUsersMe(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.$patch(undefined, options))
}

export async function postUsersMeTfaDisable(options?: ClientRequestOptions) {
  return await parseResponse(client.users.me.tfa.disable.$post(undefined, options))
}

export async function postUsersMeTfaEnable(
  args: InferRequestType<typeof client.users.me.tfa.enable.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.tfa.enable.$post(args, options))
}

export async function postUsersMeTfaGenerate(
  args: InferRequestType<typeof client.users.me.tfa.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.tfa.generate.$post(args, options))
}

export async function patchUsersMeTrackPage(
  args: InferRequestType<typeof client.users.me.track.page.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.me.track.page.$patch(args, options))
}

export async function postUsersRegister(
  args: InferRequestType<typeof client.users.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.register.$post(args, options))
}

export async function getUsersRegisterVerifyEmail(
  args: InferRequestType<(typeof client.users.register)['verify-email']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.register['verify-email'].$get(args, options))
}

export async function postUtilsSortCollection(
  args: InferRequestType<(typeof client.utils.sort)[':collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.sort[':collection'].$post(args, options))
}

export async function postUtilsImport(
  args: InferRequestType<typeof client.utils.import.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.import.$post(args, options))
}

export async function postUtilsImportCollection(
  args: InferRequestType<(typeof client.utils.import)[':collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.import[':collection'].$post(args, options))
}

export async function postUtilsExportCollection(
  args: InferRequestType<(typeof client.utils.export)[':collection']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.export[':collection'].$post(args, options))
}

export async function postUtilsCacheClear(options?: ClientRequestOptions) {
  return await parseResponse(client.utils.cache.clear.$post(undefined, options))
}

export async function getUtilsRandomString(
  args: InferRequestType<typeof client.utils.random.string.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.utils.random.string.$get(args, options))
}

export async function getVersions(
  args: InferRequestType<typeof client.versions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions.$get(args, options))
}

export async function postVersions(
  args: InferRequestType<typeof client.versions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions.$post(args, options))
}

export async function deleteVersions(options?: ClientRequestOptions) {
  return await parseResponse(client.versions.$delete(undefined, options))
}

export async function patchVersions(
  args: InferRequestType<typeof client.versions.$patch>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions.$patch(args, options))
}

export async function getVersionsId(
  args: InferRequestType<(typeof client.versions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':id'].$get(args, options))
}

export async function deleteVersionsId(
  args: InferRequestType<(typeof client.versions)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':id'].$delete(args, options))
}

export async function patchVersionsId(
  args: InferRequestType<(typeof client.versions)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':id'].$patch(args, options))
}

export async function postVersionsIdSave(
  args: InferRequestType<(typeof client.versions)[':id']['save']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':id'].save.$post(args, options))
}

export async function getVersionsIdCompare(
  args: InferRequestType<(typeof client.versions)[':id']['compare']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':id'].compare.$get(args, options))
}

export async function postVersionsIdPromote(
  args: InferRequestType<(typeof client.versions)[':id']['promote']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.versions[':id'].promote.$post(args, options))
}
