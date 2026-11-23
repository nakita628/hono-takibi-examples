import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getApi1Partners(
  args: InferRequestType<(typeof client.api)['1']['partners']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners.$get(args, options))
}

export async function postApi1Partners(
  args: InferRequestType<(typeof client.api)['1']['partners']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners.$post(args, options))
}

export async function getApi1PartnersId(
  args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners[':id'].$get(args, options))
}

export async function putApi1PartnersId(
  args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners[':id'].$put(args, options))
}

export async function deleteApi1PartnersId(
  args: InferRequestType<(typeof client.api)['1']['partners'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners[':id'].$delete(args, options))
}

export async function putApi1PartnersCodeCode(
  args: InferRequestType<(typeof client.api)['1']['partners']['code'][':code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners.code[':code'].$put(args, options))
}

export async function putApi1PartnersUpsertByCode(
  args: InferRequestType<(typeof client.api)['1']['partners']['upsert_by_code']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].partners.upsert_by_code.$put(args, options))
}

export async function getApi1FormsSelectables(
  args: InferRequestType<(typeof client.api)['1']['forms']['selectables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].forms.selectables.$get(args, options))
}

export async function getApi1AccountItemsId(
  args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_items[':id'].$get(args, options))
}

export async function putApi1AccountItemsId(
  args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_items[':id'].$put(args, options))
}

export async function deleteApi1AccountItemsId(
  args: InferRequestType<(typeof client.api)['1']['account_items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_items[':id'].$delete(args, options))
}

export async function getApi1AccountItems(
  args: InferRequestType<(typeof client.api)['1']['account_items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_items.$get(args, options))
}

export async function postApi1AccountItems(
  args: InferRequestType<(typeof client.api)['1']['account_items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_items.$post(args, options))
}

export async function putApi1AccountItemsCodeUpsert(
  args: InferRequestType<(typeof client.api)['1']['account_items']['code']['upsert']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_items.code.upsert.$put(args, options))
}

export async function getApi1Tags(
  args: InferRequestType<(typeof client.api)['1']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].tags.$get(args, options))
}

export async function postApi1Tags(
  args: InferRequestType<(typeof client.api)['1']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].tags.$post(args, options))
}

export async function getApi1TagsId(
  args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].tags[':id'].$get(args, options))
}

export async function putApi1TagsId(
  args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].tags[':id'].$put(args, options))
}

export async function deleteApi1TagsId(
  args: InferRequestType<(typeof client.api)['1']['tags'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].tags[':id'].$delete(args, options))
}

export async function getApi1Sections(
  args: InferRequestType<(typeof client.api)['1']['sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].sections.$get(args, options))
}

export async function postApi1Sections(
  args: InferRequestType<(typeof client.api)['1']['sections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].sections.$post(args, options))
}

export async function getApi1SectionsId(
  args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].sections[':id'].$get(args, options))
}

export async function putApi1SectionsId(
  args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].sections[':id'].$put(args, options))
}

export async function deleteApi1SectionsId(
  args: InferRequestType<(typeof client.api)['1']['sections'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].sections[':id'].$delete(args, options))
}

export async function putApi1SectionsCodeUpsert(
  args: InferRequestType<(typeof client.api)['1']['sections']['code']['upsert']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].sections.code.upsert.$put(args, options))
}

export async function getApi1Invoices(
  args: InferRequestType<(typeof client.api)['1']['invoices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].invoices.$get(args, options))
}

export async function getApi1InvoicesId(
  args: InferRequestType<(typeof client.api)['1']['invoices'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].invoices[':id'].$get(args, options))
}

export async function getApi1Quotations(
  args: InferRequestType<(typeof client.api)['1']['quotations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].quotations.$get(args, options))
}

export async function getApi1QuotationsId(
  args: InferRequestType<(typeof client.api)['1']['quotations'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].quotations[':id'].$get(args, options))
}

export async function getApi1Deals(
  args: InferRequestType<(typeof client.api)['1']['deals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals.$get(args, options))
}

export async function postApi1Deals(
  args: InferRequestType<(typeof client.api)['1']['deals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals.$post(args, options))
}

export async function getApi1DealsId(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals[':id'].$get(args, options))
}

export async function putApi1DealsId(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals[':id'].$put(args, options))
}

export async function deleteApi1DealsId(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals[':id'].$delete(args, options))
}

export async function postApi1DealsIdRenews(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['renews']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals[':id'].renews.$post(args, options))
}

export async function putApi1DealsIdRenewsRenewId(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals[':id'].renews[':renew_id'].$put(args, options))
}

export async function deleteApi1DealsIdRenewsRenewId(
  args: InferRequestType<
    (typeof client.api)['1']['deals'][':id']['renews'][':renew_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].deals[':id'].renews[':renew_id'].$delete(args, options),
  )
}

export async function postApi1DealsIdPayments(
  args: InferRequestType<(typeof client.api)['1']['deals'][':id']['payments']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].deals[':id'].payments.$post(args, options))
}

export async function putApi1DealsIdPaymentsPaymentId(
  args: InferRequestType<
    (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].deals[':id'].payments[':payment_id'].$put(args, options),
  )
}

export async function deleteApi1DealsIdPaymentsPaymentId(
  args: InferRequestType<
    (typeof client.api)['1']['deals'][':id']['payments'][':payment_id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].deals[':id'].payments[':payment_id'].$delete(args, options),
  )
}

export async function getApi1ManualJournals(
  args: InferRequestType<(typeof client.api)['1']['manual_journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].manual_journals.$get(args, options))
}

export async function postApi1ManualJournals(
  args: InferRequestType<(typeof client.api)['1']['manual_journals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].manual_journals.$post(args, options))
}

export async function getApi1ManualJournalsId(
  args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].manual_journals[':id'].$get(args, options))
}

export async function putApi1ManualJournalsId(
  args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].manual_journals[':id'].$put(args, options))
}

export async function deleteApi1ManualJournalsId(
  args: InferRequestType<(typeof client.api)['1']['manual_journals'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].manual_journals[':id'].$delete(args, options))
}

export async function getApi1Users(
  args: InferRequestType<(typeof client.api)['1']['users']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].users.$get(args, options))
}

export async function getApi1UsersMe(
  args: InferRequestType<(typeof client.api)['1']['users']['me']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].users.me.$get(args, options))
}

export async function putApi1UsersMe(
  args: InferRequestType<(typeof client.api)['1']['users']['me']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].users.me.$put(args, options))
}

export async function getApi1UsersCapabilities(
  args: InferRequestType<(typeof client.api)['1']['users']['capabilities']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].users.capabilities.$get(args, options))
}

export async function getApi1Companies(options?: ClientRequestOptions) {
  return await parseResponse(client.api['1'].companies.$get(undefined, options))
}

export async function getApi1CompaniesId(
  args: InferRequestType<(typeof client.api)['1']['companies'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].companies[':id'].$get(args, options))
}

export async function getApi1Items(
  args: InferRequestType<(typeof client.api)['1']['items']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].items.$get(args, options))
}

export async function postApi1Items(
  args: InferRequestType<(typeof client.api)['1']['items']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].items.$post(args, options))
}

export async function getApi1ItemsId(
  args: InferRequestType<(typeof client.api)['1']['items'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].items[':id'].$get(args, options))
}

export async function putApi1ItemsId(
  args: InferRequestType<(typeof client.api)['1']['items'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].items[':id'].$put(args, options))
}

export async function deleteApi1ItemsId(
  args: InferRequestType<(typeof client.api)['1']['items'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].items[':id'].$delete(args, options))
}

export async function putApi1ItemsCodeUpsert(
  args: InferRequestType<(typeof client.api)['1']['items']['code']['upsert']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].items.code.upsert.$put(args, options))
}

export async function getApi1TaxesCodes(options?: ClientRequestOptions) {
  return await parseResponse(client.api['1'].taxes.codes.$get(undefined, options))
}

export async function getApi1TaxesCodesCode(
  args: InferRequestType<(typeof client.api)['1']['taxes']['codes'][':code']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].taxes.codes[':code'].$get(args, options))
}

export async function getApi1TaxesCompaniesCompanyId(
  args: InferRequestType<(typeof client.api)['1']['taxes']['companies'][':company_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].taxes.companies[':company_id'].$get(args, options))
}

export async function getApi1Walletables(
  args: InferRequestType<(typeof client.api)['1']['walletables']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].walletables.$get(args, options))
}

export async function postApi1Walletables(
  args: InferRequestType<(typeof client.api)['1']['walletables']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].walletables.$post(args, options))
}

export async function getApi1WalletablesTypeId(
  args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].walletables[':type'][':id'].$get(args, options))
}

export async function putApi1WalletablesTypeId(
  args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].walletables[':type'][':id'].$put(args, options))
}

export async function deleteApi1WalletablesTypeId(
  args: InferRequestType<(typeof client.api)['1']['walletables'][':type'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].walletables[':type'][':id'].$delete(args, options))
}

export async function getApi1Banks(
  args: InferRequestType<(typeof client.api)['1']['banks']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].banks.$get(args, options))
}

export async function getApi1BanksId(
  args: InferRequestType<(typeof client.api)['1']['banks'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].banks[':id'].$get(args, options))
}

export async function getApi1Transfers(
  args: InferRequestType<(typeof client.api)['1']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].transfers.$get(args, options))
}

export async function postApi1Transfers(
  args: InferRequestType<(typeof client.api)['1']['transfers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].transfers.$post(args, options))
}

export async function getApi1TransfersId(
  args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].transfers[':id'].$get(args, options))
}

export async function putApi1TransfersId(
  args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].transfers[':id'].$put(args, options))
}

export async function deleteApi1TransfersId(
  args: InferRequestType<(typeof client.api)['1']['transfers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].transfers[':id'].$delete(args, options))
}

export async function getApi1WalletTxns(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns.$get(args, options))
}

export async function postApi1WalletTxns(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns.$post(args, options))
}

export async function getApi1WalletTxnsId(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns[':id'].$get(args, options))
}

export async function deleteApi1WalletTxnsId(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns[':id'].$delete(args, options))
}

export async function postApi1WalletTxnsIdReconcile(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reconcile']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns[':id'].reconcile.$post(args, options))
}

export async function postApi1WalletTxnsIdCreateDeal(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['create_deal']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns[':id'].create_deal.$post(args, options))
}

export async function postApi1WalletTxnsIdCreateTransfer(
  args: InferRequestType<
    (typeof client.api)['1']['wallet_txns'][':id']['create_transfer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].wallet_txns[':id'].create_transfer.$post(args, options),
  )
}

export async function postApi1WalletTxnsIdCreatePrivateDeal(
  args: InferRequestType<
    (typeof client.api)['1']['wallet_txns'][':id']['create_private_deal']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].wallet_txns[':id'].create_private_deal.$post(args, options),
  )
}

export async function postApi1WalletTxnsIdIgnore(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['ignore']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns[':id'].ignore.$post(args, options))
}

export async function postApi1WalletTxnsIdReset(
  args: InferRequestType<(typeof client.api)['1']['wallet_txns'][':id']['reset']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].wallet_txns[':id'].reset.$post(args, options))
}

export async function getApi1Journals(
  args: InferRequestType<(typeof client.api)['1']['journals']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].journals.$get(args, options))
}

export async function getApi1JournalsReportsIdStatus(
  args: InferRequestType<(typeof client.api)['1']['journals']['reports'][':id']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].journals.reports[':id'].status.$get(args, options))
}

export async function getApi1JournalsReportsIdDownload(
  args: InferRequestType<
    (typeof client.api)['1']['journals']['reports'][':id']['download']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].journals.reports[':id'].download.$get(args, options))
}

export async function postApi1JournalsSearch(
  args: InferRequestType<(typeof client.api)['1']['journals']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].journals.search.$post(args, options))
}

export async function getApi1ReportsTrialBs(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_bs.$get(args, options))
}

export async function getApi1ReportsTrialBsTwoYears(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs_two_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_bs_two_years.$get(args, options))
}

export async function getApi1ReportsTrialBsThreeYears(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_bs_three_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_bs_three_years.$get(args, options))
}

export async function getApi1ReportsTrialPl(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl.$get(args, options))
}

export async function getApi1ReportsTrialPlTwoYears(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_two_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl_two_years.$get(args, options))
}

export async function getApi1ReportsTrialPlThreeYears(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_three_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl_three_years.$get(args, options))
}

export async function getApi1ReportsTrialPlSections(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl_sections.$get(args, options))
}

export async function getApi1ReportsTrialPlSegment1Tags(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_1_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl_segment_1_tags.$get(args, options))
}

export async function getApi1ReportsTrialPlSegment2Tags(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_2_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl_segment_2_tags.$get(args, options))
}

export async function getApi1ReportsTrialPlSegment3Tags(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_pl_segment_3_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_pl_segment_3_tags.$get(args, options))
}

export async function getApi1ReportsTrialCr(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr.$get(args, options))
}

export async function getApi1ReportsTrialCrTwoYears(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_two_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr_two_years.$get(args, options))
}

export async function getApi1ReportsTrialCrThreeYears(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_three_years']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr_three_years.$get(args, options))
}

export async function getApi1ReportsTrialCrSections(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_sections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr_sections.$get(args, options))
}

export async function getApi1ReportsTrialCrSegment1Tags(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_1_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr_segment_1_tags.$get(args, options))
}

export async function getApi1ReportsTrialCrSegment2Tags(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_2_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr_segment_2_tags.$get(args, options))
}

export async function getApi1ReportsTrialCrSegment3Tags(
  args: InferRequestType<(typeof client.api)['1']['reports']['trial_cr_segment_3_tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.trial_cr_segment_3_tags.$get(args, options))
}

export async function getApi1ReportsGeneralLedgers(
  args: InferRequestType<(typeof client.api)['1']['reports']['general_ledgers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].reports.general_ledgers.$get(args, options))
}

export async function getApi1Receipts(
  args: InferRequestType<(typeof client.api)['1']['receipts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].receipts.$get(args, options))
}

export async function postApi1Receipts(
  args: InferRequestType<(typeof client.api)['1']['receipts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].receipts.$post(args, options))
}

export async function getApi1ReceiptsId(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].receipts[':id'].$get(args, options))
}

export async function putApi1ReceiptsId(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].receipts[':id'].$put(args, options))
}

export async function deleteApi1ReceiptsId(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].receipts[':id'].$delete(args, options))
}

export async function getApi1ReceiptsIdDownload(
  args: InferRequestType<(typeof client.api)['1']['receipts'][':id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].receipts[':id'].download.$get(args, options))
}

export async function getApi1ExpenseApplications(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications.$get(args, options))
}

export async function postApi1ExpenseApplications(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications.$post(args, options))
}

export async function getApi1ExpenseApplicationsId(
  args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications[':id'].$get(args, options))
}

export async function putApi1ExpenseApplicationsId(
  args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications[':id'].$put(args, options))
}

export async function deleteApi1ExpenseApplicationsId(
  args: InferRequestType<(typeof client.api)['1']['expense_applications'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications[':id'].$delete(args, options))
}

export async function postApi1ExpenseApplicationsIdActions(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications'][':id']['actions']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_applications[':id'].actions.$post(args, options),
  )
}

export async function putApi1ExpenseApplicationsIdParentApprovableRequests(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications'][':id']['parent_approvable_requests']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_applications[':id'].parent_approvable_requests.$put(args, options),
  )
}

export async function getApi1ExpenseApplicationsCurrencies(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications.currencies.$get(args, options))
}

export async function postApi1ExpenseApplicationsCurrencies(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['currencies']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications.currencies.$post(args, options))
}

export async function getApi1ExpenseApplicationsCurrenciesId(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_applications.currencies[':id'].$get(args, options),
  )
}

export async function putApi1ExpenseApplicationsCurrenciesId(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_applications.currencies[':id'].$put(args, options),
  )
}

export async function deleteApi1ExpenseApplicationsCurrenciesId(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications']['currencies'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_applications.currencies[':id'].$delete(args, options),
  )
}

export async function getApi1ExpenseApplicationsForm(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications.form.$get(args, options))
}

export async function putApi1ExpenseApplicationsForm(
  args: InferRequestType<(typeof client.api)['1']['expense_applications']['form']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_applications.form.$put(args, options))
}

export async function postApi1ExpenseApplicationsAmountCalculations(
  args: InferRequestType<
    (typeof client.api)['1']['expense_applications']['amount_calculations']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_applications.amount_calculations.$post(args, options),
  )
}

export async function getApi1ExpenseApplicationLineTemplates(
  args: InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].expense_application_line_templates.$get(args, options))
}

export async function postApi1ExpenseApplicationLineTemplates(
  args: InferRequestType<(typeof client.api)['1']['expense_application_line_templates']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_application_line_templates.$post(args, options),
  )
}

export async function getApi1ExpenseApplicationLineTemplatesId(
  args: InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates'][':id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_application_line_templates[':id'].$get(args, options),
  )
}

export async function putApi1ExpenseApplicationLineTemplatesId(
  args: InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_application_line_templates[':id'].$put(args, options),
  )
}

export async function deleteApi1ExpenseApplicationLineTemplatesId(
  args: InferRequestType<
    (typeof client.api)['1']['expense_application_line_templates'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].expense_application_line_templates[':id'].$delete(args, options),
  )
}

export async function getApi1PaymentRequests(
  args: InferRequestType<(typeof client.api)['1']['payment_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].payment_requests.$get(args, options))
}

export async function postApi1PaymentRequests(
  args: InferRequestType<(typeof client.api)['1']['payment_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].payment_requests.$post(args, options))
}

export async function getApi1PaymentRequestsId(
  args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].payment_requests[':id'].$get(args, options))
}

export async function putApi1PaymentRequestsId(
  args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].payment_requests[':id'].$put(args, options))
}

export async function deleteApi1PaymentRequestsId(
  args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].payment_requests[':id'].$delete(args, options))
}

export async function postApi1PaymentRequestsIdActions(
  args: InferRequestType<(typeof client.api)['1']['payment_requests'][':id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].payment_requests[':id'].actions.$post(args, options))
}

export async function getApi1ApprovalRequests(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests.$get(args, options))
}

export async function postApi1ApprovalRequests(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests.$post(args, options))
}

export async function getApi1ApprovalRequestsId(
  args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests[':id'].$get(args, options))
}

export async function putApi1ApprovalRequestsId(
  args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests[':id'].$put(args, options))
}

export async function deleteApi1ApprovalRequestsId(
  args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests[':id'].$delete(args, options))
}

export async function postApi1ApprovalRequestsIdActions(
  args: InferRequestType<(typeof client.api)['1']['approval_requests'][':id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests[':id'].actions.$post(args, options))
}

export async function getApi1ApprovalRequestsForms(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests.forms.$get(args, options))
}

export async function getApi1ApprovalRequestsFormsId(
  args: InferRequestType<(typeof client.api)['1']['approval_requests']['forms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_requests.forms[':id'].$get(args, options))
}

export async function getApi1PurchaseRequests(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests.$get(args, options))
}

export async function postApi1PurchaseRequests(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests.$post(args, options))
}

export async function getApi1PurchaseRequestsId(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests[':id'].$get(args, options))
}

export async function putApi1PurchaseRequestsId(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests[':id'].$put(args, options))
}

export async function deleteApi1PurchaseRequestsId(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests[':id'].$delete(args, options))
}

export async function getApi1PurchaseRequestsForms(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['forms']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests.forms.$get(args, options))
}

export async function getApi1PurchaseRequestsFormsId(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests']['forms'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests.forms[':id'].$get(args, options))
}

export async function postApi1PurchaseRequestsIdActions(
  args: InferRequestType<(typeof client.api)['1']['purchase_requests'][':id']['actions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].purchase_requests[':id'].actions.$post(args, options))
}

export async function getApi1PurchaseRequestsPurchaseRequestIdPurchaseBudget(
  args: InferRequestType<
    (typeof client.api)['1']['purchase_requests'][':purchase_request_id']['purchase_budget']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].purchase_requests[':purchase_request_id'].purchase_budget.$get(args, options),
  )
}

export async function getApi1ApprovalFlowRoutes(
  args: InferRequestType<(typeof client.api)['1']['approval_flow_routes']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_flow_routes.$get(args, options))
}

export async function getApi1ApprovalFlowRoutesId(
  args: InferRequestType<(typeof client.api)['1']['approval_flow_routes'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].approval_flow_routes[':id'].$get(args, options))
}

export async function getApi1SegmentsSegmentIdTags(
  args: InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].segments[':segment_id'].tags.$get(args, options))
}

export async function postApi1SegmentsSegmentIdTags(
  args: InferRequestType<(typeof client.api)['1']['segments'][':segment_id']['tags']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].segments[':segment_id'].tags.$post(args, options))
}

export async function putApi1SegmentsSegmentIdTagsId(
  args: InferRequestType<
    (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].segments[':segment_id'].tags[':id'].$put(args, options),
  )
}

export async function deleteApi1SegmentsSegmentIdTagsId(
  args: InferRequestType<
    (typeof client.api)['1']['segments'][':segment_id']['tags'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].segments[':segment_id'].tags[':id'].$delete(args, options),
  )
}

export async function putApi1SegmentsSegmentIdTagsCodeUpsert(
  args: InferRequestType<
    (typeof client.api)['1']['segments'][':segment_id']['tags']['code']['upsert']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api['1'].segments[':segment_id'].tags.code.upsert.$put(args, options),
  )
}

export async function getApi1FixedAssets(
  args: InferRequestType<(typeof client.api)['1']['fixed_assets']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].fixed_assets.$get(args, options))
}

export async function postApi1AccountGroups(
  args: InferRequestType<(typeof client.api)['1']['account_groups']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].account_groups.$post(args, options))
}

export async function getApi1UserMatchers(
  args: InferRequestType<(typeof client.api)['1']['user_matchers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].user_matchers.$get(args, options))
}

export async function postApi1UserMatchers(
  args: InferRequestType<(typeof client.api)['1']['user_matchers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].user_matchers.$post(args, options))
}

export async function getApi1UserMatchersId(
  args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].user_matchers[':id'].$get(args, options))
}

export async function putApi1UserMatchersId(
  args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].user_matchers[':id'].$put(args, options))
}

export async function deleteApi1UserMatchersId(
  args: InferRequestType<(typeof client.api)['1']['user_matchers'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].user_matchers[':id'].$delete(args, options))
}

export async function postApi1UserMatchersApply(
  args: InferRequestType<(typeof client.api)['1']['user_matchers']['apply']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api['1'].user_matchers.apply.$post(args, options))
}
