import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAssociateDomain(
  args: InferRequestType<typeof client.associateDomain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associateDomain.$post(args, options))
}

export async function postAssociateWebsiteAuthorizationProvider(
  args: InferRequestType<typeof client.associateWebsiteAuthorizationProvider.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associateWebsiteAuthorizationProvider.$post(args, options))
}

export async function postAssociateWebsiteCertificateAuthority(
  args: InferRequestType<typeof client.associateWebsiteCertificateAuthority.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.associateWebsiteCertificateAuthority.$post(args, options))
}

export async function postCreateFleet(
  args: InferRequestType<typeof client.createFleet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.createFleet.$post(args, options))
}

export async function postDeleteFleet(
  args: InferRequestType<typeof client.deleteFleet.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deleteFleet.$post(args, options))
}

export async function postDescribeAuditStreamConfiguration(
  args: InferRequestType<typeof client.describeAuditStreamConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeAuditStreamConfiguration.$post(args, options))
}

export async function postDescribeCompanyNetworkConfiguration(
  args: InferRequestType<typeof client.describeCompanyNetworkConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeCompanyNetworkConfiguration.$post(args, options))
}

export async function postDescribeDevice(
  args: InferRequestType<typeof client.describeDevice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeDevice.$post(args, options))
}

export async function postDescribeDevicePolicyConfiguration(
  args: InferRequestType<typeof client.describeDevicePolicyConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeDevicePolicyConfiguration.$post(args, options))
}

export async function postDescribeDomain(
  args: InferRequestType<typeof client.describeDomain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeDomain.$post(args, options))
}

export async function postDescribeFleetMetadata(
  args: InferRequestType<typeof client.describeFleetMetadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeFleetMetadata.$post(args, options))
}

export async function postDescribeIdentityProviderConfiguration(
  args: InferRequestType<typeof client.describeIdentityProviderConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeIdentityProviderConfiguration.$post(args, options))
}

export async function postDescribeWebsiteCertificateAuthority(
  args: InferRequestType<typeof client.describeWebsiteCertificateAuthority.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.describeWebsiteCertificateAuthority.$post(args, options))
}

export async function postDisassociateDomain(
  args: InferRequestType<typeof client.disassociateDomain.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disassociateDomain.$post(args, options))
}

export async function postDisassociateWebsiteAuthorizationProvider(
  args: InferRequestType<typeof client.disassociateWebsiteAuthorizationProvider.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disassociateWebsiteAuthorizationProvider.$post(args, options))
}

export async function postDisassociateWebsiteCertificateAuthority(
  args: InferRequestType<typeof client.disassociateWebsiteCertificateAuthority.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.disassociateWebsiteCertificateAuthority.$post(args, options))
}

export async function postListDevices(
  args: InferRequestType<typeof client.listDevices.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listDevices.$post(args, options))
}

export async function postListDomains(
  args: InferRequestType<typeof client.listDomains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listDomains.$post(args, options))
}

export async function postListFleets(
  args: InferRequestType<typeof client.listFleets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listFleets.$post(args, options))
}

export async function getTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$get(args, options))
}

export async function postTagsResourceArn(
  args: InferRequestType<(typeof client.tags)[':ResourceArn']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn'].$post(args, options))
}

export async function postListWebsiteAuthorizationProviders(
  args: InferRequestType<typeof client.listWebsiteAuthorizationProviders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listWebsiteAuthorizationProviders.$post(args, options))
}

export async function postListWebsiteCertificateAuthorities(
  args: InferRequestType<typeof client.listWebsiteCertificateAuthorities.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listWebsiteCertificateAuthorities.$post(args, options))
}

export async function postRestoreDomainAccess(
  args: InferRequestType<typeof client.restoreDomainAccess.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.restoreDomainAccess.$post(args, options))
}

export async function postRevokeDomainAccess(
  args: InferRequestType<typeof client.revokeDomainAccess.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.revokeDomainAccess.$post(args, options))
}

export async function postSignOutUser(
  args: InferRequestType<typeof client.signOutUser.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.signOutUser.$post(args, options))
}

export async function deleteTagsResourceArnTagKeys(
  args: InferRequestType<(typeof client.tags)[':ResourceArn#tagKeys']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.tags[':ResourceArn#tagKeys'].$delete(args, options))
}

export async function postUpdateAuditStreamConfiguration(
  args: InferRequestType<typeof client.updateAuditStreamConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateAuditStreamConfiguration.$post(args, options))
}

export async function postUpdateCompanyNetworkConfiguration(
  args: InferRequestType<typeof client.updateCompanyNetworkConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateCompanyNetworkConfiguration.$post(args, options))
}

export async function postUpdateDevicePolicyConfiguration(
  args: InferRequestType<typeof client.updateDevicePolicyConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateDevicePolicyConfiguration.$post(args, options))
}

export async function postUpdateDomainMetadata(
  args: InferRequestType<typeof client.updateDomainMetadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateDomainMetadata.$post(args, options))
}

export async function postUpdateFleetMetadata(
  args: InferRequestType<typeof client.UpdateFleetMetadata.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.UpdateFleetMetadata.$post(args, options))
}

export async function postUpdateIdentityProviderConfiguration(
  args: InferRequestType<typeof client.updateIdentityProviderConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.updateIdentityProviderConfiguration.$post(args, options))
}
