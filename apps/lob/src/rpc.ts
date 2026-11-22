import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccounts(options?: ClientRequestOptions) {
  return await parseResponse(client.accounts.$get(undefined, options))
}

export async function getAddresses(
  args: InferRequestType<typeof client.addresses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$get(args, options))
}

export async function postAddresses(
  args: InferRequestType<typeof client.addresses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses.$post(args, options))
}

export async function getAddressesAdrId(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':adr_id'].$get(args, options))
}

export async function deleteAddressesAdrId(
  args: InferRequestType<(typeof client.addresses)[':adr_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.addresses[':adr_id'].$delete(args, options))
}

export async function postBankAccountsBankIdVerify(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['verify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_accounts[':bank_id'].verify.$post(args, options))
}

export async function getBankAccountsBankId(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_accounts[':bank_id'].$get(args, options))
}

export async function deleteBankAccountsBankId(
  args: InferRequestType<(typeof client.bank_accounts)[':bank_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_accounts[':bank_id'].$delete(args, options))
}

export async function getBankAccounts(
  args: InferRequestType<typeof client.bank_accounts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_accounts.$get(args, options))
}

export async function postBankAccounts(
  args: InferRequestType<typeof client.bank_accounts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bank_accounts.$post(args, options))
}

export async function getBillingGroupsBgId(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':bg_id'].$get(args, options))
}

export async function postBillingGroupsBgId(
  args: InferRequestType<(typeof client.billing_groups)[':bg_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups[':bg_id'].$post(args, options))
}

export async function getBillingGroups(
  args: InferRequestType<typeof client.billing_groups.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups.$get(args, options))
}

export async function postBillingGroups(
  args: InferRequestType<typeof client.billing_groups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.billing_groups.$post(args, options))
}

export async function getBookletsBookletId(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booklets[':booklet_id'].$get(args, options))
}

export async function deleteBookletsBookletId(
  args: InferRequestType<(typeof client.booklets)[':booklet_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booklets[':booklet_id'].$delete(args, options))
}

export async function getBooklets(
  args: InferRequestType<typeof client.booklets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booklets.$get(args, options))
}

export async function postBooklets(
  args: InferRequestType<typeof client.booklets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.booklets.$post(args, options))
}

export async function getBuckslips(
  args: InferRequestType<typeof client.buckslips.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips.$get(args, options))
}

export async function postBuckslips(
  args: InferRequestType<typeof client.buckslips.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips.$post(args, options))
}

export async function getBuckslipsBuckslipId(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips[':buckslip_id'].$get(args, options))
}

export async function deleteBuckslipsBuckslipId(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips[':buckslip_id'].$delete(args, options))
}

export async function patchBuckslipsBuckslipId(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips[':buckslip_id'].$patch(args, options))
}

export async function getBuckslipsBuckslipIdOrders(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips[':buckslip_id'].orders.$get(args, options))
}

export async function postBuckslipsBuckslipIdOrders(
  args: InferRequestType<(typeof client.buckslips)[':buckslip_id']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.buckslips[':buckslip_id'].orders.$post(args, options))
}

export async function postBulkUsVerifications(
  args: InferRequestType<typeof client.bulk.us_verifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.us_verifications.$post(args, options))
}

export async function postBulkIntlVerifications(
  args: InferRequestType<typeof client.bulk.intl_verifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.bulk.intl_verifications.$post(args, options))
}

export async function getCampaigns(
  args: InferRequestType<typeof client.campaigns.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$get(args, options))
}

export async function postCampaigns(
  args: InferRequestType<typeof client.campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns.$post(args, options))
}

export async function getCampaignsCmpId(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':cmp_id'].$get(args, options))
}

export async function deleteCampaignsCmpId(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':cmp_id'].$delete(args, options))
}

export async function patchCampaignsCmpId(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':cmp_id'].$patch(args, options))
}

export async function postCampaignsCmpIdSend(
  args: InferRequestType<(typeof client.campaigns)[':cmp_id']['send']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.campaigns[':cmp_id'].send.$post(args, options))
}

export async function getCards(
  args: InferRequestType<typeof client.cards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$get(args, options))
}

export async function postCards(
  args: InferRequestType<typeof client.cards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards.$post(args, options))
}

export async function getCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$get(args, options))
}

export async function postCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$post(args, options))
}

export async function deleteCardsCardId(
  args: InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].$delete(args, options))
}

export async function getCardsCardIdOrders(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].orders.$get(args, options))
}

export async function postCardsCardIdOrders(
  args: InferRequestType<(typeof client.cards)[':card_id']['orders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cards[':card_id'].orders.$post(args, options))
}

export async function getChecks(
  args: InferRequestType<typeof client.checks.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks.$get(args, options))
}

export async function postChecks(
  args: InferRequestType<typeof client.checks.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks.$post(args, options))
}

export async function getChecksChkId(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':chk_id'].$get(args, options))
}

export async function deleteChecksChkId(
  args: InferRequestType<(typeof client.checks)[':chk_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.checks[':chk_id'].$delete(args, options))
}

export async function postCreatives(
  args: InferRequestType<typeof client.creatives.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creatives.$post(args, options))
}

export async function getCreativesCrvId(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creatives[':crv_id'].$get(args, options))
}

export async function patchCreativesCrvId(
  args: InferRequestType<(typeof client.creatives)[':crv_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.creatives[':crv_id'].$patch(args, options))
}

export async function postIdentityValidation(
  args: InferRequestType<typeof client.identity_validation.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.identity_validation.$post(args, options))
}

export async function getInformedDeliveryCampaigns(options?: ClientRequestOptions) {
  return await parseResponse(client.informed_delivery_campaigns.$get(undefined, options))
}

export async function postInformedDeliveryCampaigns(
  args: InferRequestType<typeof client.informed_delivery_campaigns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.informed_delivery_campaigns.$post(args, options))
}

export async function getInformedDeliveryCampaignsUspsCampaignId(
  args: InferRequestType<(typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.informed_delivery_campaigns[':usps_campaign_id'].$get(args, options),
  )
}

export async function patchInformedDeliveryCampaignsUspsCampaignId(
  args: InferRequestType<
    (typeof client.informed_delivery_campaigns)[':usps_campaign_id']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.informed_delivery_campaigns[':usps_campaign_id'].$patch(args, options),
  )
}

export async function postIntlVerifications(
  args: InferRequestType<typeof client.intl_verifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.intl_verifications.$post(args, options))
}

export async function getLettersLtrId(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.letters[':ltr_id'].$get(args, options))
}

export async function deleteLettersLtrId(
  args: InferRequestType<(typeof client.letters)[':ltr_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.letters[':ltr_id'].$delete(args, options))
}

export async function getLetters(
  args: InferRequestType<typeof client.letters.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.letters.$get(args, options))
}

export async function postLetters(
  args: InferRequestType<typeof client.letters.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.letters.$post(args, options))
}

export async function getPostcardsPscId(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postcards[':psc_id'].$get(args, options))
}

export async function deletePostcardsPscId(
  args: InferRequestType<(typeof client.postcards)[':psc_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postcards[':psc_id'].$delete(args, options))
}

export async function getPostcards(
  args: InferRequestType<typeof client.postcards.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postcards.$get(args, options))
}

export async function postPostcards(
  args: InferRequestType<typeof client.postcards.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.postcards.$post(args, options))
}

export async function getQrCodeAnalytics(
  args: InferRequestType<typeof client.qr_code_analytics.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.qr_code_analytics.$get(args, options))
}

export async function getDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$get(args, options))
}

export async function deleteDomainsDomainId(
  args: InferRequestType<(typeof client.domains)[':domain_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains[':domain_id'].$delete(args, options))
}

export async function getDomains(
  args: InferRequestType<typeof client.domains.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$get(args, options))
}

export async function postDomains(
  args: InferRequestType<typeof client.domains.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.domains.$post(args, options))
}

export async function getLinksLinkId(
  args: InferRequestType<(typeof client.links)[':link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links[':link_id'].$get(args, options))
}

export async function deleteLinksLinkId(
  args: InferRequestType<(typeof client.links)[':link_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links[':link_id'].$delete(args, options))
}

export async function patchLinksLinkId(
  args: InferRequestType<(typeof client.links)[':link_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links[':link_id'].$patch(args, options))
}

export async function getLinks(
  args: InferRequestType<typeof client.links.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links.$get(args, options))
}

export async function postLinks(
  args: InferRequestType<typeof client.links.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.links.$post(args, options))
}

export async function getResourceProofsResPrfId(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_proofs[':res_prf_id'].$get(args, options))
}

export async function patchResourceProofsResPrfId(
  args: InferRequestType<(typeof client.resource_proofs)[':res_prf_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_proofs[':res_prf_id'].$patch(args, options))
}

export async function postResourceProofs(
  args: InferRequestType<typeof client.resource_proofs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.resource_proofs.$post(args, options))
}

export async function getSelfMailersSfmId(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self_mailers[':sfm_id'].$get(args, options))
}

export async function deleteSelfMailersSfmId(
  args: InferRequestType<(typeof client.self_mailers)[':sfm_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self_mailers[':sfm_id'].$delete(args, options))
}

export async function getSelfMailers(
  args: InferRequestType<typeof client.self_mailers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self_mailers.$get(args, options))
}

export async function postSelfMailers(
  args: InferRequestType<typeof client.self_mailers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.self_mailers.$post(args, options))
}

export async function getSnapPacksSnapPackId(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snap_packs[':snap_pack_id'].$get(args, options))
}

export async function deleteSnapPacksSnapPackId(
  args: InferRequestType<(typeof client.snap_packs)[':snap_pack_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snap_packs[':snap_pack_id'].$delete(args, options))
}

export async function getSnapPacks(
  args: InferRequestType<typeof client.snap_packs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snap_packs.$get(args, options))
}

export async function postSnapPacks(
  args: InferRequestType<typeof client.snap_packs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.snap_packs.$post(args, options))
}

export async function getTemplatesTmplIdVersionsVrsnId(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$get(args, options))
}

export async function postTemplatesTmplIdVersionsVrsnId(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].versions[':vrsn_id'].$post(args, options))
}

export async function deleteTemplatesTmplIdVersionsVrsnId(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions'][':vrsn_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.templates[':tmpl_id'].versions[':vrsn_id'].$delete(args, options),
  )
}

export async function getTemplatesTmplIdVersions(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].versions.$get(args, options))
}

export async function postTemplatesTmplIdVersions(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['versions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].versions.$post(args, options))
}

export async function getTemplatesTmplId(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].$get(args, options))
}

export async function postTemplatesTmplId(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].$post(args, options))
}

export async function deleteTemplatesTmplId(
  args: InferRequestType<(typeof client.templates)[':tmpl_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.templates[':tmpl_id'].$delete(args, options))
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

export async function getUploads(
  args: InferRequestType<typeof client.uploads.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads.$get(args, options))
}

export async function postUploads(
  args: InferRequestType<typeof client.uploads.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads.$post(args, options))
}

export async function getUploadsUplId(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].$get(args, options))
}

export async function deleteUploadsUplId(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].$delete(args, options))
}

export async function patchUploadsUplId(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].$patch(args, options))
}

export async function postUploadsUplIdFile(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['file']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].file.$post(args, options))
}

export async function postUploadsUplIdExports(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].exports.$post(args, options))
}

export async function getUploadsUplIdReport(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['report']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].report.$get(args, options))
}

export async function getUploadsUplIdExportsExId(
  args: InferRequestType<(typeof client.uploads)[':upl_id']['exports'][':ex_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.uploads[':upl_id'].exports[':ex_id'].$get(args, options))
}

export async function postUsAutocompletions(
  args: InferRequestType<typeof client.us_autocompletions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us_autocompletions.$post(args, options))
}

export async function postUsReverseGeocodeLookups(
  args: InferRequestType<typeof client.us_reverse_geocode_lookups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us_reverse_geocode_lookups.$post(args, options))
}

export async function postUsVerifications(
  args: InferRequestType<typeof client.us_verifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us_verifications.$post(args, options))
}

export async function postUsZipLookups(
  args: InferRequestType<typeof client.us_zip_lookups.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.us_zip_lookups.$post(args, options))
}
