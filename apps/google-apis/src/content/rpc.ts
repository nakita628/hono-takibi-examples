import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAccountsAuthinfo(
  args: InferRequestType<typeof client.accounts.authinfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.authinfo.$get(args, options))
}

export async function postAccountsBatch(
  args: InferRequestType<typeof client.accounts.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts.batch.$post(args, options))
}

export async function postAccountsAccountIdCredentials(
  args: InferRequestType<(typeof client.accounts)[':accountId']['credentials']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].credentials.$post(args, options))
}

export async function getAccountsAccountIdLabels(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].labels.$get(args, options))
}

export async function postAccountsAccountIdLabels(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].labels.$post(args, options))
}

export async function deleteAccountsAccountIdLabelsLabelId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].labels[':labelId'].$delete(args, options),
  )
}

export async function patchAccountsAccountIdLabelsLabelId(
  args: InferRequestType<(typeof client.accounts)[':accountId']['labels'][':labelId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].labels[':labelId'].$patch(args, options))
}

export async function getAccountsAccountIdReturncarrier(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].returncarrier.$get(args, options))
}

export async function postAccountsAccountIdReturncarrier(
  args: InferRequestType<(typeof client.accounts)[':accountId']['returncarrier']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounts[':accountId'].returncarrier.$post(args, options))
}

export async function deleteAccountsAccountIdReturncarrierCarrierAccountId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].returncarrier[':carrierAccountId'].$delete(args, options),
  )
}

export async function patchAccountsAccountIdReturncarrierCarrierAccountId(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['returncarrier'][':carrierAccountId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.accounts[':accountId'].returncarrier[':carrierAccountId'].$patch(args, options),
  )
}

export async function postAccountstatusesBatch(
  args: InferRequestType<typeof client.accountstatuses.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accountstatuses.batch.$post(args, options))
}

export async function postAccounttaxBatch(
  args: InferRequestType<typeof client.accounttax.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.accounttax.batch.$post(args, options))
}

export async function postDatafeedsBatch(
  args: InferRequestType<typeof client.datafeeds.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datafeeds.batch.$post(args, options))
}

export async function postDatafeedstatusesBatch(
  args: InferRequestType<typeof client.datafeedstatuses.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.datafeedstatuses.batch.$post(args, options))
}

export async function postLiasettingsBatch(
  args: InferRequestType<typeof client.liasettings.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.liasettings.batch.$post(args, options))
}

export async function getLiasettingsPosdataproviders(
  args: InferRequestType<typeof client.liasettings.posdataproviders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.liasettings.posdataproviders.$get(args, options))
}

export async function postLocalinventoryBatch(
  args: InferRequestType<typeof client.localinventory.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.localinventory.batch.$post(args, options))
}

export async function postPosBatch(
  args: InferRequestType<typeof client.pos.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pos.batch.$post(args, options))
}

export async function postProductsBatch(
  args: InferRequestType<typeof client.products.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.products.batch.$post(args, options))
}

export async function postProductstatusesBatch(
  args: InferRequestType<typeof client.productstatuses.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.productstatuses.batch.$post(args, options))
}

export async function postRegionalinventoryBatch(
  args: InferRequestType<typeof client.regionalinventory.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regionalinventory.batch.$post(args, options))
}

export async function postReturnaddressBatch(
  args: InferRequestType<typeof client.returnaddress.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.returnaddress.batch.$post(args, options))
}

export async function postReturnpolicyBatch(
  args: InferRequestType<typeof client.returnpolicy.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.returnpolicy.batch.$post(args, options))
}

export async function postShippingsettingsBatch(
  args: InferRequestType<typeof client.shippingsettings.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shippingsettings.batch.$post(args, options))
}

export async function getCssGroupIdCsses(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':cssGroupId'].csses.$get(args, options))
}

export async function getCssGroupIdCssesCssDomainId(
  args: InferRequestType<(typeof client)[':cssGroupId']['csses'][':cssDomainId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':cssGroupId'].csses[':cssDomainId'].$get(args, options))
}

export async function postCssGroupIdCssesCssDomainIdUpdatelabels(
  args: InferRequestType<
    (typeof client)[':cssGroupId']['csses'][':cssDomainId']['updatelabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':cssGroupId'].csses[':cssDomainId'].updatelabels.$post(args, options),
  )
}

export async function getMerchantIdAccounts(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounts.$get(args, options))
}

export async function postMerchantIdAccounts(
  args: InferRequestType<(typeof client)[':merchantId']['accounts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounts.$post(args, options))
}

export async function getMerchantIdAccountsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounts[':accountId'].$get(args, options))
}

export async function putMerchantIdAccountsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounts[':accountId'].$put(args, options))
}

export async function deleteMerchantIdAccountsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounts[':accountId'].$delete(args, options))
}

export async function postMerchantIdAccountsAccountIdClaimwebsite(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['claimwebsite']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].accounts[':accountId'].claimwebsite.$post(args, options),
  )
}

export async function postMerchantIdAccountsAccountIdLink(
  args: InferRequestType<(typeof client)[':merchantId']['accounts'][':accountId']['link']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounts[':accountId'].link.$post(args, options))
}

export async function getMerchantIdAccountsAccountIdListlinks(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['listlinks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].accounts[':accountId'].listlinks.$get(args, options),
  )
}

export async function postMerchantIdAccountsAccountIdRequestphoneverification(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['requestphoneverification']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].accounts[':accountId'].requestphoneverification.$post(args, options),
  )
}

export async function postMerchantIdAccountsAccountIdUpdatelabels(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['updatelabels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].accounts[':accountId'].updatelabels.$post(args, options),
  )
}

export async function postMerchantIdAccountsAccountIdVerifyphonenumber(
  args: InferRequestType<
    (typeof client)[':merchantId']['accounts'][':accountId']['verifyphonenumber']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].accounts[':accountId'].verifyphonenumber.$post(args, options),
  )
}

export async function getMerchantIdAccountstatuses(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accountstatuses.$get(args, options))
}

export async function getMerchantIdAccountstatusesAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['accountstatuses'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].accountstatuses[':accountId'].$get(args, options),
  )
}

export async function getMerchantIdAccounttax(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounttax.$get(args, options))
}

export async function getMerchantIdAccounttaxAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounttax[':accountId'].$get(args, options))
}

export async function putMerchantIdAccounttaxAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['accounttax'][':accountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].accounttax[':accountId'].$put(args, options))
}

export async function getMerchantIdBuyongoogleprogramsRegionCode(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].buyongoogleprograms[':regionCode'].$get(args, options),
  )
}

export async function patchMerchantIdBuyongoogleprogramsRegionCode(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].buyongoogleprograms[':regionCode'].$patch(args, options),
  )
}

export async function postMerchantIdBuyongoogleprogramsRegionCodeActivate(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].buyongoogleprograms[':regionCode'].activate.$post(args, options),
  )
}

export async function postMerchantIdBuyongoogleprogramsRegionCodeOnboard(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['onboard']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].buyongoogleprograms[':regionCode'].onboard.$post(args, options),
  )
}

export async function postMerchantIdBuyongoogleprogramsRegionCodePause(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].buyongoogleprograms[':regionCode'].pause.$post(args, options),
  )
}

export async function postMerchantIdBuyongoogleprogramsRegionCodeRequestreview(
  args: InferRequestType<
    (typeof client)[':merchantId']['buyongoogleprograms'][':regionCode']['requestreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].buyongoogleprograms[':regionCode'].requestreview.$post(args, options),
  )
}

export async function getMerchantIdCollections(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].collections.$get(args, options))
}

export async function postMerchantIdCollections(
  args: InferRequestType<(typeof client)[':merchantId']['collections']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].collections.$post(args, options))
}

export async function getMerchantIdCollectionsCollectionId(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].collections[':collectionId'].$get(args, options))
}

export async function deleteMerchantIdCollectionsCollectionId(
  args: InferRequestType<(typeof client)[':merchantId']['collections'][':collectionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].collections[':collectionId'].$delete(args, options),
  )
}

export async function getMerchantIdCollectionstatuses(
  args: InferRequestType<(typeof client)[':merchantId']['collectionstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].collectionstatuses.$get(args, options))
}

export async function getMerchantIdCollectionstatusesCollectionId(
  args: InferRequestType<
    (typeof client)[':merchantId']['collectionstatuses'][':collectionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].collectionstatuses[':collectionId'].$get(args, options),
  )
}

export async function getMerchantIdConversionsources(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].conversionsources.$get(args, options))
}

export async function postMerchantIdConversionsources(
  args: InferRequestType<(typeof client)[':merchantId']['conversionsources']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].conversionsources.$post(args, options))
}

export async function getMerchantIdConversionsourcesConversionSourceId(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].conversionsources[':conversionSourceId'].$get(args, options),
  )
}

export async function deleteMerchantIdConversionsourcesConversionSourceId(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].conversionsources[':conversionSourceId'].$delete(args, options),
  )
}

export async function patchMerchantIdConversionsourcesConversionSourceId(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].conversionsources[':conversionSourceId'].$patch(args, options),
  )
}

export async function postMerchantIdConversionsourcesConversionSourceIdUndelete(
  args: InferRequestType<
    (typeof client)[':merchantId']['conversionsources'][':conversionSourceId:undelete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].conversionsources[':conversionSourceId:undelete'].$post(args, options),
  )
}

export async function getMerchantIdDatafeeds(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].datafeeds.$get(args, options))
}

export async function postMerchantIdDatafeeds(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].datafeeds.$post(args, options))
}

export async function getMerchantIdDatafeedsDatafeedId(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$get(args, options))
}

export async function putMerchantIdDatafeedsDatafeedId(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$put(args, options))
}

export async function deleteMerchantIdDatafeedsDatafeedId(
  args: InferRequestType<(typeof client)[':merchantId']['datafeeds'][':datafeedId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].datafeeds[':datafeedId'].$delete(args, options))
}

export async function postMerchantIdDatafeedsDatafeedIdFetchNow(
  args: InferRequestType<
    (typeof client)[':merchantId']['datafeeds'][':datafeedId']['fetchNow']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].datafeeds[':datafeedId'].fetchNow.$post(args, options),
  )
}

export async function getMerchantIdDatafeedstatuses(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].datafeedstatuses.$get(args, options))
}

export async function getMerchantIdDatafeedstatusesDatafeedId(
  args: InferRequestType<(typeof client)[':merchantId']['datafeedstatuses'][':datafeedId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].datafeedstatuses[':datafeedId'].$get(args, options),
  )
}

export async function getMerchantIdFreelistingsprogram(
  args: InferRequestType<(typeof client)[':merchantId']['freelistingsprogram']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].freelistingsprogram.$get(args, options))
}

export async function postMerchantIdFreelistingsprogramRequestreview(
  args: InferRequestType<
    (typeof client)[':merchantId']['freelistingsprogram']['requestreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].freelistingsprogram.requestreview.$post(args, options),
  )
}

export async function getMerchantIdLiasettings(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].liasettings.$get(args, options))
}

export async function getMerchantIdLiasettingsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].liasettings[':accountId'].$get(args, options))
}

export async function putMerchantIdLiasettingsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['liasettings'][':accountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].liasettings[':accountId'].$put(args, options))
}

export async function getMerchantIdLiasettingsAccountIdAccessiblegmbaccounts(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['accessiblegmbaccounts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].liasettings[':accountId'].accessiblegmbaccounts.$get(args, options),
  )
}

export async function postMerchantIdLiasettingsAccountIdRequestgmbaccess(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['requestgmbaccess']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].liasettings[':accountId'].requestgmbaccess.$post(args, options),
  )
}

export async function postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountry(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['requestinventoryverification'][':country']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].liasettings[':accountId'].requestinventoryverification[':country'].$post(
      args,
      options,
    ),
  )
}

export async function postMerchantIdLiasettingsAccountIdSetinventoryverificationcontact(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['setinventoryverificationcontact']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].liasettings[':accountId'].setinventoryverificationcontact.$post(
      args,
      options,
    ),
  )
}

export async function postMerchantIdLiasettingsAccountIdSetposdataprovider(
  args: InferRequestType<
    (typeof client)[':merchantId']['liasettings'][':accountId']['setposdataprovider']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].liasettings[':accountId'].setposdataprovider.$post(args, options),
  )
}

export async function postMerchantIdOrderinvoicesOrderIdCreateChargeInvoice(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderinvoices'][':orderId']['createChargeInvoice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderinvoices[':orderId'].createChargeInvoice.$post(args, options),
  )
}

export async function postMerchantIdOrderinvoicesOrderIdCreateRefundInvoice(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderinvoices'][':orderId']['createRefundInvoice']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderinvoices[':orderId'].createRefundInvoice.$post(args, options),
  )
}

export async function getMerchantIdOrderreportsDisbursements(
  args: InferRequestType<(typeof client)[':merchantId']['orderreports']['disbursements']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orderreports.disbursements.$get(args, options))
}

export async function getMerchantIdOrderreportsDisbursementsDisbursementIdTransactions(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreports']['disbursements'][':disbursementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderreports.disbursements[':disbursementId'].transactions.$get(
      args,
      options,
    ),
  )
}

export async function getMerchantIdOrderreturns(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orderreturns.$get(args, options))
}

export async function postMerchantIdOrderreturnsCreateOrderReturn(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreturns']['createOrderReturn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderreturns.createOrderReturn.$post(args, options),
  )
}

export async function getMerchantIdOrderreturnsReturnId(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orderreturns[':returnId'].$get(args, options))
}

export async function postMerchantIdOrderreturnsReturnIdAcknowledge(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreturns'][':returnId']['acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderreturns[':returnId'].acknowledge.$post(args, options),
  )
}

export async function postMerchantIdOrderreturnsReturnIdLabels(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreturns'][':returnId']['labels']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderreturns[':returnId'].labels.$post(args, options),
  )
}

export async function postMerchantIdOrderreturnsReturnIdProcess(
  args: InferRequestType<
    (typeof client)[':merchantId']['orderreturns'][':returnId']['process']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orderreturns[':returnId'].process.$post(args, options),
  )
}

export async function getMerchantIdOrders(
  args: InferRequestType<(typeof client)[':merchantId']['orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orders.$get(args, options))
}

export async function getMerchantIdOrdersOrderId(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orders[':orderId'].$get(args, options))
}

export async function postMerchantIdOrdersOrderIdAcknowledge(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['acknowledge']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].acknowledge.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdCancel(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['cancel']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orders[':orderId'].cancel.$post(args, options))
}

export async function postMerchantIdOrdersOrderIdCancelLineItem(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['cancelLineItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].cancelLineItem.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdCaptureOrder(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['captureOrder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].captureOrder.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdInStoreRefundLineItem(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['inStoreRefundLineItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].inStoreRefundLineItem.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdRefunditem(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['refunditem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].refunditem.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdRefundorder(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['refundorder']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].refundorder.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdRejectReturnLineItem(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['rejectReturnLineItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].rejectReturnLineItem.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdReturnRefundLineItem(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['returnRefundLineItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].returnRefundLineItem.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdSetLineItemMetadata(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['setLineItemMetadata']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].setLineItemMetadata.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdShipLineItems(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['shipLineItems']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].shipLineItems.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdTestreturn(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['testreturn']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].testreturn.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdUpdateLineItemShippingDetails(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['updateLineItemShippingDetails']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].updateLineItemShippingDetails.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdUpdateMerchantOrderId(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['updateMerchantOrderId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].updateMerchantOrderId.$post(args, options),
  )
}

export async function postMerchantIdOrdersOrderIdUpdateShipment(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['updateShipment']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].updateShipment.$post(args, options),
  )
}

export async function getMerchantIdOrdersbymerchantidMerchantOrderId(
  args: InferRequestType<
    (typeof client)[':merchantId']['ordersbymerchantid'][':merchantOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].ordersbymerchantid[':merchantOrderId'].$get(args, options),
  )
}

export async function postMerchantIdOrdertrackingsignals(
  args: InferRequestType<(typeof client)[':merchantId']['ordertrackingsignals']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].ordertrackingsignals.$post(args, options))
}

export async function postMerchantIdPosTargetMerchantIdInventory(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['inventory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].pos[':targetMerchantId'].inventory.$post(args, options),
  )
}

export async function postMerchantIdPosTargetMerchantIdSale(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['sale']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].pos[':targetMerchantId'].sale.$post(args, options),
  )
}

export async function getMerchantIdPosTargetMerchantIdStore(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].pos[':targetMerchantId'].store.$get(args, options),
  )
}

export async function postMerchantIdPosTargetMerchantIdStore(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].pos[':targetMerchantId'].store.$post(args, options),
  )
}

export async function getMerchantIdPosTargetMerchantIdStoreStoreCode(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$get(args, options),
  )
}

export async function deleteMerchantIdPosTargetMerchantIdStoreStoreCode(
  args: InferRequestType<
    (typeof client)[':merchantId']['pos'][':targetMerchantId']['store'][':storeCode']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].pos[':targetMerchantId'].store[':storeCode'].$delete(args, options),
  )
}

export async function postMerchantIdProductdeliverytime(
  args: InferRequestType<(typeof client)[':merchantId']['productdeliverytime']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].productdeliverytime.$post(args, options))
}

export async function getMerchantIdProductdeliverytimeProductId(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].productdeliverytime[':productId'].$get(args, options),
  )
}

export async function deleteMerchantIdProductdeliverytimeProductId(
  args: InferRequestType<
    (typeof client)[':merchantId']['productdeliverytime'][':productId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].productdeliverytime[':productId'].$delete(args, options),
  )
}

export async function getMerchantIdProducts(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].products.$get(args, options))
}

export async function postMerchantIdProducts(
  args: InferRequestType<(typeof client)[':merchantId']['products']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].products.$post(args, options))
}

export async function getMerchantIdProductsProductId(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].products[':productId'].$get(args, options))
}

export async function deleteMerchantIdProductsProductId(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].products[':productId'].$delete(args, options))
}

export async function patchMerchantIdProductsProductId(
  args: InferRequestType<(typeof client)[':merchantId']['products'][':productId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].products[':productId'].$patch(args, options))
}

export async function postMerchantIdProductsProductIdLocalinventory(
  args: InferRequestType<
    (typeof client)[':merchantId']['products'][':productId']['localinventory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].products[':productId'].localinventory.$post(args, options),
  )
}

export async function postMerchantIdProductsProductIdRegionalinventory(
  args: InferRequestType<
    (typeof client)[':merchantId']['products'][':productId']['regionalinventory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].products[':productId'].regionalinventory.$post(args, options),
  )
}

export async function getMerchantIdProductstatuses(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].productstatuses.$get(args, options))
}

export async function getMerchantIdProductstatusesProductId(
  args: InferRequestType<(typeof client)[':merchantId']['productstatuses'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].productstatuses[':productId'].$get(args, options),
  )
}

export async function getMerchantIdProductstatusesProductIdRepricingreports(
  args: InferRequestType<
    (typeof client)[':merchantId']['productstatuses'][':productId']['repricingreports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].productstatuses[':productId'].repricingreports.$get(args, options),
  )
}

export async function postMerchantIdPromotions(
  args: InferRequestType<(typeof client)[':merchantId']['promotions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].promotions.$post(args, options))
}

export async function getMerchantIdPromotionsId(
  args: InferRequestType<(typeof client)[':merchantId']['promotions'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].promotions[':id'].$get(args, options))
}

export async function getMerchantIdPubsubnotificationsettings(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].pubsubnotificationsettings.$get(args, options))
}

export async function putMerchantIdPubsubnotificationsettings(
  args: InferRequestType<(typeof client)[':merchantId']['pubsubnotificationsettings']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].pubsubnotificationsettings.$put(args, options))
}

export async function getMerchantIdQuotas(
  args: InferRequestType<(typeof client)[':merchantId']['quotas']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].quotas.$get(args, options))
}

export async function getMerchantIdRecommendationsGenerate(
  args: InferRequestType<(typeof client)[':merchantId']['recommendations']['generate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].recommendations.generate.$get(args, options))
}

export async function postMerchantIdRecommendationsReportInteraction(
  args: InferRequestType<
    (typeof client)[':merchantId']['recommendations']['reportInteraction']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].recommendations.reportInteraction.$post(args, options),
  )
}

export async function getMerchantIdRegions(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].regions.$get(args, options))
}

export async function postMerchantIdRegions(
  args: InferRequestType<(typeof client)[':merchantId']['regions']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].regions.$post(args, options))
}

export async function getMerchantIdRegionsRegionId(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].regions[':regionId'].$get(args, options))
}

export async function deleteMerchantIdRegionsRegionId(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].regions[':regionId'].$delete(args, options))
}

export async function patchMerchantIdRegionsRegionId(
  args: InferRequestType<(typeof client)[':merchantId']['regions'][':regionId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].regions[':regionId'].$patch(args, options))
}

export async function postMerchantIdReportsSearch(
  args: InferRequestType<(typeof client)[':merchantId']['reports']['search']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].reports.search.$post(args, options))
}

export async function getMerchantIdRepricingrules(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].repricingrules.$get(args, options))
}

export async function postMerchantIdRepricingrules(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].repricingrules.$post(args, options))
}

export async function getMerchantIdRepricingrulesRuleId(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].repricingrules[':ruleId'].$get(args, options))
}

export async function deleteMerchantIdRepricingrulesRuleId(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].repricingrules[':ruleId'].$delete(args, options))
}

export async function patchMerchantIdRepricingrulesRuleId(
  args: InferRequestType<(typeof client)[':merchantId']['repricingrules'][':ruleId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].repricingrules[':ruleId'].$patch(args, options))
}

export async function getMerchantIdRepricingrulesRuleIdRepricingreports(
  args: InferRequestType<
    (typeof client)[':merchantId']['repricingrules'][':ruleId']['repricingreports']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].repricingrules[':ruleId'].repricingreports.$get(args, options),
  )
}

export async function getMerchantIdReturnaddress(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].returnaddress.$get(args, options))
}

export async function postMerchantIdReturnaddress(
  args: InferRequestType<(typeof client)[':merchantId']['returnaddress']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].returnaddress.$post(args, options))
}

export async function getMerchantIdReturnaddressReturnAddressId(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnaddress[':returnAddressId'].$get(args, options),
  )
}

export async function deleteMerchantIdReturnaddressReturnAddressId(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnaddress'][':returnAddressId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnaddress[':returnAddressId'].$delete(args, options),
  )
}

export async function getMerchantIdReturnpolicy(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].returnpolicy.$get(args, options))
}

export async function postMerchantIdReturnpolicy(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].returnpolicy.$post(args, options))
}

export async function getMerchantIdReturnpolicyReturnPolicyId(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnpolicy[':returnPolicyId'].$get(args, options),
  )
}

export async function deleteMerchantIdReturnpolicyReturnPolicyId(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicy'][':returnPolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnpolicy[':returnPolicyId'].$delete(args, options),
  )
}

export async function getMerchantIdReturnpolicyonline(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].returnpolicyonline.$get(args, options))
}

export async function postMerchantIdReturnpolicyonline(
  args: InferRequestType<(typeof client)[':merchantId']['returnpolicyonline']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].returnpolicyonline.$post(args, options))
}

export async function getMerchantIdReturnpolicyonlineReturnPolicyId(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnpolicyonline[':returnPolicyId'].$get(args, options),
  )
}

export async function deleteMerchantIdReturnpolicyonlineReturnPolicyId(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnpolicyonline[':returnPolicyId'].$delete(args, options),
  )
}

export async function patchMerchantIdReturnpolicyonlineReturnPolicyId(
  args: InferRequestType<
    (typeof client)[':merchantId']['returnpolicyonline'][':returnPolicyId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].returnpolicyonline[':returnPolicyId'].$patch(args, options),
  )
}

export async function getMerchantIdSettlementreports(
  args: InferRequestType<(typeof client)[':merchantId']['settlementreports']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].settlementreports.$get(args, options))
}

export async function getMerchantIdSettlementreportsSettlementId(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].settlementreports[':settlementId'].$get(args, options),
  )
}

export async function getMerchantIdSettlementreportsSettlementIdTransactions(
  args: InferRequestType<
    (typeof client)[':merchantId']['settlementreports'][':settlementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].settlementreports[':settlementId'].transactions.$get(args, options),
  )
}

export async function getMerchantIdShippingsettings(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].shippingsettings.$get(args, options))
}

export async function getMerchantIdShippingsettingsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].shippingsettings[':accountId'].$get(args, options),
  )
}

export async function putMerchantIdShippingsettingsAccountId(
  args: InferRequestType<(typeof client)[':merchantId']['shippingsettings'][':accountId']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].shippingsettings[':accountId'].$put(args, options),
  )
}

export async function getMerchantIdShoppingadsprogram(
  args: InferRequestType<(typeof client)[':merchantId']['shoppingadsprogram']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].shoppingadsprogram.$get(args, options))
}

export async function postMerchantIdShoppingadsprogramRequestreview(
  args: InferRequestType<
    (typeof client)[':merchantId']['shoppingadsprogram']['requestreview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].shoppingadsprogram.requestreview.$post(args, options),
  )
}

export async function getMerchantIdSupportedCarriers(
  args: InferRequestType<(typeof client)[':merchantId']['supportedCarriers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].supportedCarriers.$get(args, options))
}

export async function getMerchantIdSupportedHolidays(
  args: InferRequestType<(typeof client)[':merchantId']['supportedHolidays']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].supportedHolidays.$get(args, options))
}

export async function getMerchantIdSupportedPickupServices(
  args: InferRequestType<(typeof client)[':merchantId']['supportedPickupServices']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].supportedPickupServices.$get(args, options))
}

export async function postMerchantIdTestorders(
  args: InferRequestType<(typeof client)[':merchantId']['testorders']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].testorders.$post(args, options))
}

export async function postMerchantIdTestordersOrderIdAdvance(
  args: InferRequestType<
    (typeof client)[':merchantId']['testorders'][':orderId']['advance']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].testorders[':orderId'].advance.$post(args, options),
  )
}

export async function postMerchantIdTestordersOrderIdCancelByCustomer(
  args: InferRequestType<
    (typeof client)[':merchantId']['testorders'][':orderId']['cancelByCustomer']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].testorders[':orderId'].cancelByCustomer.$post(args, options),
  )
}

export async function getMerchantIdTestordertemplatesTemplateName(
  args: InferRequestType<
    (typeof client)[':merchantId']['testordertemplates'][':templateName']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].testordertemplates[':templateName'].$get(args, options),
  )
}
