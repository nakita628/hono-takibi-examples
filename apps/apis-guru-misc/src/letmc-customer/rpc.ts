import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getV2CustomerShortNameBranchBranches(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['branch']['branches']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].branch.branches.$get(args, options))
}

export async function getV2CustomerShortNameBranchBranchesBranchID(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['branch']['branches'][':branchID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].branch.branches[':branchID'].$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordAccounting(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['accounting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.accounting.$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordDocument(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['document']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].landlord.document.$get(args, options))
}

export async function getV2CustomerShortNameLandlordInventory(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['inventory']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.inventory.$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordInvoice(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['invoice']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].landlord.invoice.$get(args, options))
}

export async function getV2CustomerShortNameLandlordLandlordcrmentries(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['landlordcrmentries']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.landlordcrmentries.$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordMaintenance(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['maintenance']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.maintenance.$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordProfitloss(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['profitloss']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.profitloss.$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordRentarrears(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['rentarrears']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.rentarrears.$get(args, options),
  )
}

export async function getV2CustomerShortNameLandlordSas(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['sas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].landlord.sas.$get(args, options))
}

export async function getV2CustomerShortNameLandlordSettings(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].landlord.settings.$get(args, options))
}

export async function getV2CustomerShortNameLandlordSummary(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].landlord.summary.$get(args, options))
}

export async function getV2CustomerShortNameLandlordTenancy(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['landlord']['tenancy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].landlord.tenancy.$get(args, options))
}

export async function postV2CustomerShortNameLandlordTenancyMaintenancePreference(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancy']['maintenance']['preference']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.tenancy.maintenance.preference.$post(args, options),
  )
}

export async function getV2CustomerShortNameLandlordTenancyagreement(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['landlord']['tenancyagreement']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].landlord.tenancyagreement.$get(args, options),
  )
}

export async function getV2CustomerShortNamePhotoDownload(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['photo']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].photo.download.$get(args, options))
}

export async function getV2CustomerShortNamePropertyPropertyIDPhotos(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['property'][':propertyID']['photos']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].property[':propertyID'].photos.$get(args, options),
  )
}

export async function getV2CustomerShortNameSession(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].session.$get(args, options))
}

export async function postV2CustomerShortNameSession(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].session.$post(args, options))
}

export async function deleteV2CustomerShortNameSession(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].session.$delete(args, options))
}

export async function postV2CustomerShortNameSessionCreatelandlordlogin(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['session']['createlandlordlogin']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].session.createlandlordlogin.$post(args, options),
  )
}

export async function putV2CustomerShortNameSessionPassword(
  args: InferRequestType<(typeof client.v2.customer)[':shortName']['session']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.customer[':shortName'].session.password.$put(args, options))
}

export async function postV2CustomerShortNameSessionResetpassword(
  args: InferRequestType<
    (typeof client.v2.customer)[':shortName']['session']['resetpassword']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.customer[':shortName'].session.resetpassword.$post(args, options),
  )
}
