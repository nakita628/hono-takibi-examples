import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAcceptresourceshareinvitation(
  args: InferRequestType<typeof client.acceptresourceshareinvitation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.acceptresourceshareinvitation.$post(args, options))
}

export async function postAssociateresourceshare(
  args: InferRequestType<typeof client.associateresourceshare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associateresourceshare.$post(args, options))
}

export async function postAssociateresourcesharepermission(
  args: InferRequestType<typeof client.associateresourcesharepermission.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associateresourcesharepermission.$post(args, options))
}

export async function postCreatepermission(
  args: InferRequestType<typeof client.createpermission.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createpermission.$post(args, options))
}

export async function postCreatepermissionversion(
  args: InferRequestType<typeof client.createpermissionversion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createpermissionversion.$post(args, options))
}

export async function postCreateresourceshare(
  args: InferRequestType<typeof client.createresourceshare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createresourceshare.$post(args, options))
}

export async function deleteDeletepermissionPermissionArn(
  args: InferRequestType<(typeof client)['deletepermission#permissionArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['deletepermission#permissionArn'].$delete(args, options))
}

export async function deleteDeletepermissionversionPermissionArnPermissionVersion(
  args: InferRequestType<
    (typeof client)['deletepermissionversion#permissionArn&permissionVersion']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['deletepermissionversion#permissionArn&permissionVersion'].$delete(args, options),
  )
}

export async function deleteDeleteresourceshareResourceShareArn(
  args: InferRequestType<(typeof client)['deleteresourceshare#resourceShareArn']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['deleteresourceshare#resourceShareArn'].$delete(args, options))
}

export async function postDisassociateresourceshare(
  args: InferRequestType<typeof client.disassociateresourceshare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disassociateresourceshare.$post(args, options))
}

export async function postDisassociateresourcesharepermission(
  args: InferRequestType<typeof client.disassociateresourcesharepermission.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disassociateresourcesharepermission.$post(args, options))
}

export async function postEnablesharingwithawsorganization(
  args: InferRequestType<typeof client.enablesharingwithawsorganization.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.enablesharingwithawsorganization.$post(args, options))
}

export async function postGetpermission(
  args: InferRequestType<typeof client.getpermission.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getpermission.$post(args, options))
}

export async function postGetresourcepolicies(
  args: InferRequestType<typeof client.getresourcepolicies.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getresourcepolicies.$post(args, options))
}

export async function postGetresourceshareassociations(
  args: InferRequestType<typeof client.getresourceshareassociations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getresourceshareassociations.$post(args, options))
}

export async function postGetresourceshareinvitations(
  args: InferRequestType<typeof client.getresourceshareinvitations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getresourceshareinvitations.$post(args, options))
}

export async function postGetresourceshares(
  args: InferRequestType<typeof client.getresourceshares.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getresourceshares.$post(args, options))
}

export async function postListpendinginvitationresources(
  args: InferRequestType<typeof client.listpendinginvitationresources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listpendinginvitationresources.$post(args, options))
}

export async function postListpermissionassociations(
  args: InferRequestType<typeof client.listpermissionassociations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listpermissionassociations.$post(args, options))
}

export async function postListpermissionversions(
  args: InferRequestType<typeof client.listpermissionversions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listpermissionversions.$post(args, options))
}

export async function postListpermissions(
  args: InferRequestType<typeof client.listpermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listpermissions.$post(args, options))
}

export async function postListprincipals(
  args: InferRequestType<typeof client.listprincipals.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listprincipals.$post(args, options))
}

export async function postListreplacepermissionassociationswork(
  args: InferRequestType<typeof client.listreplacepermissionassociationswork.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listreplacepermissionassociationswork.$post(args, options))
}

export async function postListresourcesharepermissions(
  args: InferRequestType<typeof client.listresourcesharepermissions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listresourcesharepermissions.$post(args, options))
}

export async function postListresourcetypes(
  args: InferRequestType<typeof client.listresourcetypes.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listresourcetypes.$post(args, options))
}

export async function postListresources(
  args: InferRequestType<typeof client.listresources.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listresources.$post(args, options))
}

export async function postPromotepermissioncreatedfrompolicy(
  args: InferRequestType<typeof client.promotepermissioncreatedfrompolicy.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.promotepermissioncreatedfrompolicy.$post(args, options))
}

export async function postPromoteresourcesharecreatedfrompolicyResourceShareArn(
  args: InferRequestType<
    (typeof client)['promoteresourcesharecreatedfrompolicy#resourceShareArn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['promoteresourcesharecreatedfrompolicy#resourceShareArn'].$post(args, options),
  )
}

export async function postRejectresourceshareinvitation(
  args: InferRequestType<typeof client.rejectresourceshareinvitation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.rejectresourceshareinvitation.$post(args, options))
}

export async function postReplacepermissionassociations(
  args: InferRequestType<typeof client.replacepermissionassociations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.replacepermissionassociations.$post(args, options))
}

export async function postSetdefaultpermissionversion(
  args: InferRequestType<typeof client.setdefaultpermissionversion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.setdefaultpermissionversion.$post(args, options))
}

export async function postTagresource(
  args: InferRequestType<typeof client.tagresource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tagresource.$post(args, options))
}

export async function postUntagresource(
  args: InferRequestType<typeof client.untagresource.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.untagresource.$post(args, options))
}

export async function postUpdateresourceshare(
  args: InferRequestType<typeof client.updateresourceshare.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateresourceshare.$post(args, options))
}
