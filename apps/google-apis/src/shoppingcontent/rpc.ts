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

export async function postOrdersBatch(
  args: InferRequestType<typeof client.orders.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.batch.$post(args, options))
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

export async function postShippingsettingsBatch(
  args: InferRequestType<typeof client.shippingsettings.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.shippingsettings.batch.$post(args, options))
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

export async function getMerchantIdOrderreturnsReturnId(
  args: InferRequestType<(typeof client)[':merchantId']['orderreturns'][':returnId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orderreturns[':returnId'].$get(args, options))
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

export async function postMerchantIdOrdersOrderIdRefund(
  args: InferRequestType<(typeof client)[':merchantId']['orders'][':orderId']['refund']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':merchantId'].orders[':orderId'].refund.$post(args, options))
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

export async function postMerchantIdOrdersOrderIdReturnLineItem(
  args: InferRequestType<
    (typeof client)[':merchantId']['orders'][':orderId']['returnLineItem']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':merchantId'].orders[':orderId'].returnLineItem.$post(args, options),
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
