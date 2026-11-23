import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApps(
  args: InferRequestType<typeof client.apps.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$get(args, options))
}

export async function postApps(
  args: InferRequestType<typeof client.apps.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.$post(args, options))
}

export async function getAppsAccessInviteAccessToken(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.access.invite[':accessToken'].$get(args, options))
}

export async function deleteAppsAccessInviteAccessToken(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps.access.invite[':accessToken'].$delete(args, options))
}

export async function postAppsAccessInviteAccessTokenRegister(
  args: InferRequestType<(typeof client.apps.access.invite)[':accessToken']['register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps.access.invite[':accessToken'].register.$post(args, options),
  )
}

export async function getAppsAppId(
  args: InferRequestType<(typeof client.apps)[':appId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].$get(args, options))
}

export async function getAppsAppIdAccess(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access.$get(args, options))
}

export async function getAppsAppIdAccessInvite(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access.invite.$get(args, options))
}

export async function postAppsAppIdAccessInvite(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access.invite.$post(args, options))
}

export async function deleteAppsAppIdAccessInviteId(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['invite'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access.invite[':id'].$delete(args, options))
}

export async function getAppsAppIdAccessProfiles(
  args: InferRequestType<(typeof client.apps)[':appId']['access']['profiles']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access.profiles.$get(args, options))
}

export async function getAppsAppIdAccessUserId(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access[':userId'].$get(args, options))
}

export async function postAppsAppIdAccessUserId(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access[':userId'].$post(args, options))
}

export async function deleteAppsAppIdAccessUserId(
  args: InferRequestType<(typeof client.apps)[':appId']['access'][':userId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].access[':userId'].$delete(args, options))
}

export async function getAppsAppIdAccountcategoriesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accountcategories.index.$get(args, options))
}

export async function postAppsAppIdAccountcategoriesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accountcategories.index.$post(args, options))
}

export async function getAppsAppIdAccountcategoriesId(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accountcategories[':id'].$get(args, options))
}

export async function postAppsAppIdAccountcategoriesId(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accountcategories[':id'].$post(args, options))
}

export async function deleteAppsAppIdAccountcategoriesId(
  args: InferRequestType<(typeof client.apps)[':appId']['accountcategories'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accountcategories[':id'].$delete(args, options))
}

export async function getAppsAppIdAccountingEntriesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['accounting_entries']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounting_entries.index.$get(args, options))
}

export async function getAppsAppIdAccountsIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounts.index.$get(args, options))
}

export async function postAppsAppIdAccountsIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounts.index.$post(args, options))
}

export async function postAppsAppIdAccountsBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounts.batch.$post(args, options))
}

export async function getAppsAppIdAccountsId(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounts[':id'].$get(args, options))
}

export async function postAppsAppIdAccountsId(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounts[':id'].$post(args, options))
}

export async function deleteAppsAppIdAccountsId(
  args: InferRequestType<(typeof client.apps)[':appId']['accounts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].accounts[':id'].$delete(args, options))
}

export async function getAppsAppIdApikeys(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].apikeys.$get(args, options))
}

export async function postAppsAppIdApikeys(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].apikeys.$post(args, options))
}

export async function deleteAppsAppIdApikeysId(
  args: InferRequestType<(typeof client.apps)[':appId']['apikeys'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].apikeys[':id'].$delete(args, options))
}

export async function getAppsAppIdApipartners(
  args: InferRequestType<(typeof client.apps)[':appId']['apipartners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].apipartners.$get(args, options))
}

export async function getAppsAppIdAttachments(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments.$get(args, options))
}

export async function putAppsAppIdAttachments(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments.$put(args, options))
}

export async function postAppsAppIdAttachments(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments.$post(args, options))
}

export async function getAppsAppIdAttachmentsDownload(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments.download.$get(args, options))
}

export async function getAppsAppIdAttachmentsSapDownload(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments']['sap-download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments['sap-download'].$get(args, options))
}

export async function getAppsAppIdAttachmentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments[':id'].$get(args, options))
}

export async function deleteAppsAppIdAttachmentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments[':id'].$delete(args, options))
}

export async function getAppsAppIdAttachmentsIdPdf(
  args: InferRequestType<(typeof client.apps)[':appId']['attachments'][':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].attachments[':id'].pdf.$get(args, options))
}

export async function getAppsAppIdBankdetails(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].bankdetails.$get(args, options))
}

export async function postAppsAppIdBankdetails(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].bankdetails.$post(args, options))
}

export async function getAppsAppIdBankdetailsId(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].bankdetails[':id'].$get(args, options))
}

export async function postAppsAppIdBankdetailsId(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].bankdetails[':id'].$post(args, options))
}

export async function deleteAppsAppIdBankdetailsId(
  args: InferRequestType<(typeof client.apps)[':appId']['bankdetails'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].bankdetails[':id'].$delete(args, options))
}

export async function getAppsAppIdBanksIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks.index.$get(args, options))
}

export async function deleteAppsAppIdBanksIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['index']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks.index.$delete(args, options))
}

export async function getAppsAppIdBanksConnect(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['connect']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks.connect.$get(args, options))
}

export async function postAppsAppIdBanksSynchronize(
  args: InferRequestType<(typeof client.apps)[':appId']['banks']['synchronize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks.synchronize.$post(args, options))
}

export async function getAppsAppIdBanksIdFunnelEdit(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['edit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks[':id'].funnel.edit.$get(args, options))
}

export async function getAppsAppIdBanksIdFunnelSync(
  args: InferRequestType<(typeof client.apps)[':appId']['banks'][':id']['funnel']['sync']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks[':id'].funnel.sync.$get(args, options))
}

export async function getAppsAppIdBanksIdFunnelValidate(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['funnel']['validate']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].banks[':id'].funnel.validate.$get(args, options))
}

export async function postAppsAppIdBanksIdSelectAccounts(
  args: InferRequestType<
    (typeof client.apps)[':appId']['banks'][':id']['select_accounts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].banks[':id'].select_accounts.$post(args, options),
  )
}

export async function getAppsAppIdCashflowsourcesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].cashflowsources.index.$get(args, options))
}

export async function postAppsAppIdCashflowsourcesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].cashflowsources.index.$post(args, options))
}

export async function getAppsAppIdCashflowsourcesId(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].cashflowsources[':id'].$get(args, options))
}

export async function postAppsAppIdCashflowsourcesId(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].cashflowsources[':id'].$post(args, options))
}

export async function deleteAppsAppIdCashflowsourcesId(
  args: InferRequestType<(typeof client.apps)[':appId']['cashflowsources'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].cashflowsources[':id'].$delete(args, options))
}

export async function postAppsAppIdContactsMerge(
  args: InferRequestType<(typeof client.apps)[':appId']['contacts']['merge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].contacts.merge.$post(args, options))
}

export async function postAppsAppIdEmailBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['email']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].email.batch.$post(args, options))
}

export async function postAppsAppIdEmailDocument(
  args: InferRequestType<(typeof client.apps)[':appId']['email']['document']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].email.document.$post(args, options))
}

export async function getAppsAppIdEstablishmentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].establishments[':id'].$get(args, options))
}

export async function postAppsAppIdEstablishmentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].establishments[':id'].$post(args, options))
}

export async function deleteAppsAppIdEstablishmentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['establishments'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].establishments[':id'].$delete(args, options))
}

export async function getAppsAppIdExports(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports.$get(args, options))
}

export async function postAppsAppIdExports(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports.$post(args, options))
}

export async function getAppsAppIdExportsAcdCompta(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports.acd_compta.$get(args, options))
}

export async function postAppsAppIdExportsAcdCompta(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['acd_compta']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports.acd_compta.$post(args, options))
}

export async function getAppsAppIdExportsDownload(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports.download.$get(args, options))
}

export async function getAppsAppIdExportsMonths(
  args: InferRequestType<(typeof client.apps)[':appId']['exports']['months']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports.months.$get(args, options))
}

export async function getAppsAppIdExportsId(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports[':id'].$get(args, options))
}

export async function deleteAppsAppIdExportsId(
  args: InferRequestType<(typeof client.apps)[':appId']['exports'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].exports[':id'].$delete(args, options))
}

export async function getAppsAppIdInvoices(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.$get(args, options))
}

export async function postAppsAppIdInvoices(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.$post(args, options))
}

export async function postAppsAppIdInvoicesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.batch.$post(args, options))
}

export async function deleteAppsAppIdInvoicesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['batch']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.batch.$delete(args, options))
}

export async function getAppsAppIdInvoicesDownload(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.download.$get(args, options))
}

export async function postAppsAppIdInvoicesFresh(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['fresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.fresh.$post(args, options))
}

export async function getAppsAppIdInvoicesNextnumber(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['nextnumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.nextnumber.$get(args, options))
}

export async function getAppsAppIdInvoicesStatistics(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices.statistics.$get(args, options))
}

export async function getAppsAppIdInvoicesId(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].$get(args, options))
}

export async function postAppsAppIdInvoicesId(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].$post(args, options))
}

export async function deleteAppsAppIdInvoicesId(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].$delete(args, options))
}

export async function postAppsAppIdInvoicesIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].attach.$post(args, options))
}

export async function deleteAppsAppIdInvoicesIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['attach']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].attach.$delete(args, options))
}

export async function postAppsAppIdInvoicesIdAvoid(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['avoid']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].avoid.$post(args, options))
}

export async function postAppsAppIdInvoicesIdDuplicate(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].duplicate.$post(args, options))
}

export async function postAppsAppIdInvoicesIdFinalize(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].finalize.$post(args, options))
}

export async function getAppsAppIdInvoicesIdPdf(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].pdf.$get(args, options))
}

export async function getAppsAppIdInvoicesIdPreviewJpg(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].invoices[':id']['preview.jpg'].$get(args, options),
  )
}

export async function postAppsAppIdInvoicesIdTag(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].tag.$post(args, options))
}

export async function deleteAppsAppIdInvoicesIdTag(
  args: InferRequestType<(typeof client.apps)[':appId']['invoices'][':id']['tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].invoices[':id'].tag.$delete(args, options))
}

export async function postAppsAppIdInvoicesIdUpdatestatus(
  args: InferRequestType<
    (typeof client.apps)[':appId']['invoices'][':id']['updatestatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].invoices[':id'].updatestatus.$post(args, options),
  )
}

export async function getAppsAppIdLogsAutoreconcileIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].logs.autoreconcile.index.$get(args, options))
}

export async function postAppsAppIdLogsAutoreconcileIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].logs.autoreconcile.index.$post(args, options))
}

export async function deleteAppsAppIdLogsAutoreconcileIndex(
  args: InferRequestType<
    (typeof client.apps)[':appId']['logs']['autoreconcile']['index']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].logs.autoreconcile.index.$delete(args, options))
}

export async function getAppsAppIdOrganization(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organization.$get(args, options))
}

export async function postAppsAppIdOrganization(
  args: InferRequestType<(typeof client.apps)[':appId']['organization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organization.$post(args, options))
}

export async function getAppsAppIdOrganizations(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations.$get(args, options))
}

export async function postAppsAppIdOrganizations(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations.$post(args, options))
}

export async function postAppsAppIdOrganizationsBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations.batch.$post(args, options))
}

export async function getAppsAppIdOrganizationsId(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations[':id'].$get(args, options))
}

export async function postAppsAppIdOrganizationsId(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations[':id'].$post(args, options))
}

export async function deleteAppsAppIdOrganizationsId(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations[':id'].$delete(args, options))
}

export async function getAppsAppIdOrganizationsIdRestore(
  args: InferRequestType<(typeof client.apps)[':appId']['organizations'][':id']['restore']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].organizations[':id'].restore.$get(args, options))
}

export async function getAppsAppIdPayments(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].payments.$get(args, options))
}

export async function getAppsAppIdPaymentsRecipeBook(
  args: InferRequestType<(typeof client.apps)[':appId']['payments']['recipe_book']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].payments.recipe_book.$get(args, options))
}

export async function getAppsAppIdPaymentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].payments[':id'].$get(args, options))
}

export async function deleteAppsAppIdPaymentsId(
  args: InferRequestType<(typeof client.apps)[':appId']['payments'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].payments[':id'].$delete(args, options))
}

export async function getAppsAppIdPersons(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons.$get(args, options))
}

export async function postAppsAppIdPersons(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons.$post(args, options))
}

export async function postAppsAppIdPersonsBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['persons']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons.batch.$post(args, options))
}

export async function getAppsAppIdPersonsId(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons[':id'].$get(args, options))
}

export async function postAppsAppIdPersonsId(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons[':id'].$post(args, options))
}

export async function deleteAppsAppIdPersonsId(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons[':id'].$delete(args, options))
}

export async function getAppsAppIdPersonsIdRestore(
  args: InferRequestType<(typeof client.apps)[':appId']['persons'][':id']['restore']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].persons[':id'].restore.$get(args, options))
}

export async function getAppsAppIdPing(
  args: InferRequestType<(typeof client.apps)[':appId']['ping']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].ping.$get(args, options))
}

export async function getAppsAppIdProductcategory(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productcategory.$get(args, options))
}

export async function postAppsAppIdProductcategory(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productcategory.$post(args, options))
}

export async function getAppsAppIdProductcategoryId(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productcategory[':id'].$get(args, options))
}

export async function postAppsAppIdProductcategoryId(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productcategory[':id'].$post(args, options))
}

export async function deleteAppsAppIdProductcategoryId(
  args: InferRequestType<(typeof client.apps)[':appId']['productcategory'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productcategory[':id'].$delete(args, options))
}

export async function getAppsAppIdProducts(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products.$get(args, options))
}

export async function postAppsAppIdProducts(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products.$post(args, options))
}

export async function postAppsAppIdProductsBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['products']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products.batch.$post(args, options))
}

export async function getAppsAppIdProductsId(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products[':id'].$get(args, options))
}

export async function postAppsAppIdProductsId(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products[':id'].$post(args, options))
}

export async function deleteAppsAppIdProductsId(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products[':id'].$delete(args, options))
}

export async function postAppsAppIdProductsIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products[':id'].attach.$post(args, options))
}

export async function deleteAppsAppIdProductsIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['products'][':id']['attach']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].products[':id'].attach.$delete(args, options))
}

export async function getAppsAppIdProductstocks(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productstocks.$get(args, options))
}

export async function postAppsAppIdProductstocks(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productstocks.$post(args, options))
}

export async function getAppsAppIdProductstocksId(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productstocks[':id'].$get(args, options))
}

export async function postAppsAppIdProductstocksId(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productstocks[':id'].$post(args, options))
}

export async function deleteAppsAppIdProductstocksId(
  args: InferRequestType<(typeof client.apps)[':appId']['productstocks'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].productstocks[':id'].$delete(args, options))
}

export async function postAppsAppIdProductstocksIdDestruct(
  args: InferRequestType<
    (typeof client.apps)[':appId']['productstocks'][':id']['destruct']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].productstocks[':id'].destruct.$post(args, options),
  )
}

export async function postAppsAppIdProductstocksIdRentalBack(
  args: InferRequestType<
    (typeof client.apps)[':appId']['productstocks'][':id']['rental']['back']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].productstocks[':id'].rental.back.$post(args, options),
  )
}

export async function postAppsAppIdProductstocksIdRentalExit(
  args: InferRequestType<
    (typeof client.apps)[':appId']['productstocks'][':id']['rental']['exit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].productstocks[':id'].rental.exit.$post(args, options),
  )
}

export async function getAppsAppIdPurchases(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases.$get(args, options))
}

export async function postAppsAppIdPurchases(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases.$post(args, options))
}

export async function postAppsAppIdPurchasesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases.batch.$post(args, options))
}

export async function deleteAppsAppIdPurchasesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['batch']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases.batch.$delete(args, options))
}

export async function getAppsAppIdPurchasesDownload(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases.download.$get(args, options))
}

export async function getAppsAppIdPurchasesStatistics(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases.statistics.$get(args, options))
}

export async function getAppsAppIdPurchasesId(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].$get(args, options))
}

export async function postAppsAppIdPurchasesId(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].$post(args, options))
}

export async function deleteAppsAppIdPurchasesId(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].$delete(args, options))
}

export async function postAppsAppIdPurchasesIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].attach.$post(args, options))
}

export async function deleteAppsAppIdPurchasesIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['attach']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].attach.$delete(args, options))
}

export async function getAppsAppIdPurchasesIdOriginal(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['original']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].original.$get(args, options))
}

export async function getAppsAppIdPurchasesIdPreviewJpg(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].purchases[':id']['preview.jpg'].$get(args, options),
  )
}

export async function postAppsAppIdPurchasesIdTag(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].tag.$post(args, options))
}

export async function deleteAppsAppIdPurchasesIdTag(
  args: InferRequestType<(typeof client.apps)[':appId']['purchases'][':id']['tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].purchases[':id'].tag.$delete(args, options))
}

export async function getAppsAppIdPurchasesIdThumbnailJpg(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['thumbnail.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].purchases[':id']['thumbnail.jpg'].$get(args, options),
  )
}

export async function postAppsAppIdPurchasesIdUpdatestatus(
  args: InferRequestType<
    (typeof client.apps)[':appId']['purchases'][':id']['updatestatus']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].purchases[':id'].updatestatus.$post(args, options),
  )
}

export async function getAppsAppIdQuotes(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.$get(args, options))
}

export async function postAppsAppIdQuotes(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.$post(args, options))
}

export async function postAppsAppIdQuotesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.batch.$post(args, options))
}

export async function deleteAppsAppIdQuotesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['batch']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.batch.$delete(args, options))
}

export async function getAppsAppIdQuotesDownload(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.download.$get(args, options))
}

export async function postAppsAppIdQuotesFresh(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['fresh']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.fresh.$post(args, options))
}

export async function postAppsAppIdQuotesInvoice(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['invoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.invoice.$post(args, options))
}

export async function getAppsAppIdQuotesNextnumber(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['nextnumber']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.nextnumber.$get(args, options))
}

export async function getAppsAppIdQuotesStatistics(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes']['statistics']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes.statistics.$get(args, options))
}

export async function getAppsAppIdQuotesId(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].$get(args, options))
}

export async function postAppsAppIdQuotesId(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].$post(args, options))
}

export async function deleteAppsAppIdQuotesId(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].$delete(args, options))
}

export async function postAppsAppIdQuotesIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].attach.$post(args, options))
}

export async function deleteAppsAppIdQuotesIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['attach']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].attach.$delete(args, options))
}

export async function postAppsAppIdQuotesIdDownpayment(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['downpayment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].downpayment.$post(args, options))
}

export async function postAppsAppIdQuotesIdDuplicate(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['duplicate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].duplicate.$post(args, options))
}

export async function postAppsAppIdQuotesIdFinalize(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['finalize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].finalize.$post(args, options))
}

export async function postAppsAppIdQuotesIdInvoice(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['invoice']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].invoice.$post(args, options))
}

export async function getAppsAppIdQuotesIdPdf(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['pdf']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].pdf.$get(args, options))
}

export async function getAppsAppIdQuotesIdPreviewJpg(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['preview.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id']['preview.jpg'].$get(args, options))
}

export async function postAppsAppIdQuotesIdSituationInvoice(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['situation_invoice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].quotes[':id'].situation_invoice.$post(args, options),
  )
}

export async function postAppsAppIdQuotesIdTag(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].tag.$post(args, options))
}

export async function deleteAppsAppIdQuotesIdTag(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['tag']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].tag.$delete(args, options))
}

export async function postAppsAppIdQuotesIdUpdatestatus(
  args: InferRequestType<(typeof client.apps)[':appId']['quotes'][':id']['updatestatus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].quotes[':id'].updatestatus.$post(args, options))
}

export async function getAppsAppIdQuotesIdYousignPreviewJpg(
  args: InferRequestType<
    (typeof client.apps)[':appId']['quotes'][':id']['yousign']['preview.jpg']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].quotes[':id'].yousign['preview.jpg'].$get(args, options),
  )
}

export async function postAppsAppIdReconcile(
  args: InferRequestType<(typeof client.apps)[':appId']['reconcile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].reconcile.$post(args, options))
}

export async function deleteAppsAppIdReconcile(
  args: InferRequestType<(typeof client.apps)[':appId']['reconcile']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].reconcile.$delete(args, options))
}

export async function postAppsAppIdReconcileBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['reconcile']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].reconcile.batch.$post(args, options))
}

export async function getAppsAppIdRecurringinvoices(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices.$get(args, options))
}

export async function postAppsAppIdRecurringinvoices(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices.$post(args, options))
}

export async function postAppsAppIdRecurringinvoicesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices.batch.$post(args, options))
}

export async function deleteAppsAppIdRecurringinvoicesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['batch']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices.batch.$delete(args, options))
}

export async function getAppsAppIdRecurringinvoicesPeriods(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices']['periods']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices.periods.$get(args, options))
}

export async function getAppsAppIdRecurringinvoicesId(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices[':id'].$get(args, options))
}

export async function postAppsAppIdRecurringinvoicesId(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices[':id'].$post(args, options))
}

export async function deleteAppsAppIdRecurringinvoicesId(
  args: InferRequestType<(typeof client.apps)[':appId']['recurringinvoices'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].recurringinvoices[':id'].$delete(args, options))
}

export async function getAppsAppIdRecurringinvoicesIdPlan(
  args: InferRequestType<
    (typeof client.apps)[':appId']['recurringinvoices'][':id']['plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].recurringinvoices[':id'].plan.$get(args, options),
  )
}

export async function getAppsAppIdRelationships(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].relationships.$get(args, options))
}

export async function getAppsAppIdRelationshipsId(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].relationships[':id'].$get(args, options))
}

export async function postAppsAppIdRelationshipsId(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].relationships[':id'].$post(args, options))
}

export async function postAppsAppIdRelationshipsIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['relationships'][':id']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].relationships[':id'].attach.$post(args, options))
}

export async function deleteAppsAppIdRelationshipsIdAttach(
  args: InferRequestType<
    (typeof client.apps)[':appId']['relationships'][':id']['attach']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].relationships[':id'].attach.$delete(args, options),
  )
}

export async function postAppsAppIdReset(
  args: InferRequestType<(typeof client.apps)[':appId']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].reset.$post(args, options))
}

export async function getAppsAppIdRulesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].rules.index.$get(args, options))
}

export async function postAppsAppIdRulesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].rules.index.$post(args, options))
}

export async function postAppsAppIdRulesExecuteOn(
  args: InferRequestType<(typeof client.apps)[':appId']['rules']['execute_on']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].rules.execute_on.$post(args, options))
}

export async function getAppsAppIdRulesId(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].rules[':id'].$get(args, options))
}

export async function postAppsAppIdRulesId(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].rules[':id'].$post(args, options))
}

export async function deleteAppsAppIdRulesId(
  args: InferRequestType<(typeof client.apps)[':appId']['rules'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].rules[':id'].$delete(args, options))
}

export async function getAppsAppIdSalesdocumentmodels(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].salesdocumentmodels.$get(args, options))
}

export async function postAppsAppIdSalesdocumentmodels(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].salesdocumentmodels.$post(args, options))
}

export async function getAppsAppIdSalesdocumentmodelsId(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$get(args, options))
}

export async function postAppsAppIdSalesdocumentmodelsId(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].salesdocumentmodels[':id'].$post(args, options))
}

export async function deleteAppsAppIdSalesdocumentmodelsId(
  args: InferRequestType<(typeof client.apps)[':appId']['salesdocumentmodels'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].salesdocumentmodels[':id'].$delete(args, options),
  )
}

export async function getAppsAppIdSepamandatesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates.index.$get(args, options))
}

export async function postAppsAppIdSepamandatesIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates.index.$post(args, options))
}

export async function getAppsAppIdSepamandatesCredittransfer(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates.credittransfer.$get(args, options))
}

export async function postAppsAppIdSepamandatesCredittransfer(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['credittransfer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates.credittransfer.$post(args, options))
}

export async function getAppsAppIdSepamandatesDirectdebit(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates.directdebit.$get(args, options))
}

export async function postAppsAppIdSepamandatesDirectdebit(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates']['directdebit']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates.directdebit.$post(args, options))
}

export async function getAppsAppIdSepamandatesId(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates[':id'].$get(args, options))
}

export async function postAppsAppIdSepamandatesId(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates[':id'].$post(args, options))
}

export async function deleteAppsAppIdSepamandatesId(
  args: InferRequestType<(typeof client.apps)[':appId']['sepamandates'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].sepamandates[':id'].$delete(args, options))
}

export async function getAppsAppIdServicesStripeWebhook(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].services.stripe.webhook.$get(args, options))
}

export async function postAppsAppIdServicesStripeWebhook(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['stripe']['webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].services.stripe.webhook.$post(args, options))
}

export async function postAppsAppIdServicesYousignWebhook(
  args: InferRequestType<(typeof client.apps)[':appId']['services']['yousign']['webhook']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].services.yousign.webhook.$post(args, options))
}

export async function getAppsAppIdSettings(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].settings.$get(args, options))
}

export async function postAppsAppIdSettings(
  args: InferRequestType<(typeof client.apps)[':appId']['settings']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].settings.$post(args, options))
}

export async function postAppsAppIdSignature(
  args: InferRequestType<(typeof client.apps)[':appId']['signature']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].signature.$post(args, options))
}

export async function getAppsAppIdStatisticsChartsType(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['charts'][':type']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].statistics.charts[':type'].$get(args, options))
}

export async function getAppsAppIdStatisticsTimetablePurchases(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['purchases']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].statistics.timetable.purchases.$get(args, options),
  )
}

export async function getAppsAppIdStatisticsTimetableSales(
  args: InferRequestType<
    (typeof client.apps)[':appId']['statistics']['timetable']['sales']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].statistics.timetable.sales.$get(args, options))
}

export async function getAppsAppIdStatisticsVat(
  args: InferRequestType<(typeof client.apps)[':appId']['statistics']['vat']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].statistics.vat.$get(args, options))
}

export async function postAppsAppIdSubscriptionAnchordate(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['anchordate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.anchordate.$post(args, options))
}

export async function getAppsAppIdSubscriptionCheckoutAddSource(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['checkout_add_source']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].subscription.checkout_add_source.$get(args, options),
  )
}

export async function postAppsAppIdSubscriptionCoupon(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['coupon']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.coupon.$post(args, options))
}

export async function postAppsAppIdSubscriptionExtendTrial(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['extend_trial']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.extend_trial.$post(args, options))
}

export async function postAppsAppIdSubscriptionExtraStripePlan(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['extra'][':stripe_plan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].subscription.extra[':stripe_plan'].$post(args, options),
  )
}

export async function postAppsAppIdSubscriptionPayAll(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['pay_all']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.pay_all.$post(args, options))
}

export async function getAppsAppIdSubscriptionPlan(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.plan.$get(args, options))
}

export async function deleteAppsAppIdSubscriptionPlan(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plan']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.plan.$delete(args, options))
}

export async function getAppsAppIdSubscriptionPlans(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.plans.$get(args, options))
}

export async function getAppsAppIdSubscriptionPlansStripePlan(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].subscription.plans[':stripe_plan'].$get(args, options),
  )
}

export async function postAppsAppIdSubscriptionPlansStripePlan(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].subscription.plans[':stripe_plan'].$post(args, options),
  )
}

export async function getAppsAppIdSubscriptionPlansStripePlanCheckout(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['plans'][':stripe_plan']['checkout']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].subscription.plans[':stripe_plan'].checkout.$get(args, options),
  )
}

export async function postAppsAppIdSubscriptionSource(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.source.$post(args, options))
}

export async function deleteAppsAppIdSubscriptionSource(
  args: InferRequestType<(typeof client.apps)[':appId']['subscription']['source']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.source.$delete(args, options))
}

export async function postAppsAppIdSubscriptionSourceDefault(
  args: InferRequestType<
    (typeof client.apps)[':appId']['subscription']['source']['default']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].subscription.source.default.$post(args, options))
}

export async function getAppsAppIdTags(
  args: InferRequestType<(typeof client.apps)[':appId']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].tags.$get(args, options))
}

export async function getAppsAppIdTemplates(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].templates.$get(args, options))
}

export async function postAppsAppIdTemplates(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].templates.$post(args, options))
}

export async function postAppsAppIdTemplatesBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].templates.batch.$post(args, options))
}

export async function getAppsAppIdTemplatesDefault(
  args: InferRequestType<(typeof client.apps)[':appId']['templates']['default']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].templates.default.$get(args, options))
}

export async function getAppsAppIdTemplatesId(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].templates[':id'].$get(args, options))
}

export async function postAppsAppIdTemplatesId(
  args: InferRequestType<(typeof client.apps)[':appId']['templates'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].templates[':id'].$post(args, options))
}

export async function getAppsAppIdTransactionsIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions.index.$get(args, options))
}

export async function postAppsAppIdTransactionsIndex(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['index']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions.index.$post(args, options))
}

export async function postAppsAppIdTransactionsBatch(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions']['batch']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions.batch.$post(args, options))
}

export async function getAppsAppIdTransactionsId(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions[':id'].$get(args, options))
}

export async function postAppsAppIdTransactionsId(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions[':id'].$post(args, options))
}

export async function deleteAppsAppIdTransactionsId(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions[':id'].$delete(args, options))
}

export async function postAppsAppIdTransactionsIdAttach(
  args: InferRequestType<(typeof client.apps)[':appId']['transactions'][':id']['attach']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].transactions[':id'].attach.$post(args, options))
}

export async function deleteAppsAppIdTransactionsIdAttach(
  args: InferRequestType<
    (typeof client.apps)[':appId']['transactions'][':id']['attach']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.apps[':appId'].transactions[':id'].attach.$delete(args, options),
  )
}

export async function postAppsAppIdUrssafAuth(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['auth']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].urssaf.auth.$post(args, options))
}

export async function getAppsAppIdUrssafPayment(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].urssaf.payment.$get(args, options))
}

export async function postAppsAppIdUrssafPayment(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['payment']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].urssaf.payment.$post(args, options))
}

export async function getAppsAppIdUrssafPreview(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].urssaf.preview.$get(args, options))
}

export async function postAppsAppIdUrssafRegisterCustomer(
  args: InferRequestType<(typeof client.apps)[':appId']['urssaf']['register_customer']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.apps[':appId'].urssaf.register_customer.$post(args, options))
}

export async function postChangepassword(
  args: InferRequestType<typeof client.changepassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.changepassword.$post(args, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function postLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.logout.$post(undefined, options))
}

export async function getMe(options?: ClientRequestOptions) {
  return await parseResponse(client.me.$get(undefined, options))
}

export async function postMe(
  args: InferRequestType<typeof client.me.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.me.$post(args, options))
}

export async function getPing(options?: ClientRequestOptions) {
  return await parseResponse(client.ping.$get(undefined, options))
}

export async function getRefresh(options?: ClientRequestOptions) {
  return await parseResponse(client.refresh.$get(undefined, options))
}

export async function postRegister(
  args: InferRequestType<typeof client.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.register.$post(args, options))
}

export async function postSendpassword(
  args: InferRequestType<typeof client.sendpassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sendpassword.$post(args, options))
}

export async function postServicesCollector(
  args: InferRequestType<typeof client.services.collector.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.collector.$post(args, options))
}

export async function getServicesViesSiren(
  args: InferRequestType<(typeof client.services.vies)[':siren']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.services.vies[':siren'].$get(args, options))
}
