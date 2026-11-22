import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postOrdersV3BatchesChangeOrders(
  args: InferRequestType<typeof client.orders.v3.batches.changeOrders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.batches.changeOrders.$post(args, options))
}

export async function postOrdersV3BatchesChangeOrdersChangeOrderType(
  args: InferRequestType<
    (typeof client.orders.v3.batches.changeOrders)[':changeOrderType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3.batches.changeOrders[':changeOrderType'].$post(args, options),
  )
}

export async function postOrdersV3BatchesClearMerchantOrderInfos(
  args: InferRequestType<typeof client.orders.v3.batches.clearMerchantOrderInfos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.batches.clearMerchantOrderInfos.$post(args, options))
}

export async function postOrdersV3BatchesSetMerchantOrderInfos(
  args: InferRequestType<typeof client.orders.v3.batches.setMerchantOrderInfos.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.batches.setMerchantOrderInfos.$post(args, options))
}

export async function postOrdersV3Harvest(
  args: InferRequestType<typeof client.orders.v3.harvest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.harvest.$post(args, options))
}

export async function postOrdersV3ListFull(
  args: InferRequestType<typeof client.orders.v3.list.full.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.list.full.$post(args, options))
}

export async function postOrdersV3ListLight(
  args: InferRequestType<typeof client.orders.v3.list.light.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.list.light.$post(args, options))
}

export async function getOrdersV3LovOrderManagementReadyMarketplaceBusinessCode(
  args: InferRequestType<
    typeof client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3.lov.orderManagementReadyMarketplaceBusinessCode.$get(args, options),
  )
}

export async function getOrdersV3Status(
  args: InferRequestType<typeof client.orders.v3.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.orders.v3.status.$get(args, options))
}

export async function postOrdersV3MarketplaceTechnicalCodeAccountIdHarvest(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId']['harvest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'].harvest.$post(args, options),
  )
}

export async function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$get(
      args,
      options,
    ),
  )
}

export async function headOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderId(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].$head(
      args,
      options,
    ),
  )
}

export async function postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfo(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].clearMerchantOrderInfo.$post(args, options),
  )
}

export async function postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvest(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].harvest.$post(
      args,
      options,
    ),
  )
}

export async function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].history.$get(
      args,
      options,
    ),
  )
}

export async function getOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryOrderChangeExecutionUUID(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history'][':orderChangeExecutionUUID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'].history[
      ':orderChangeExecutionUUID'
    ].$get(args, options),
  )
}

export async function postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfo(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].setMerchantOrderInfo.$post(args, options),
  )
}

export async function postOrdersV3MarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderType(
  args: InferRequestType<
    (typeof client.orders.v3)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.orders.v3[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][
      ':changeOrderType'
    ].$post(args, options),
  )
}

export async function getV2PublicChannelsIndex(
  args: InferRequestType<typeof client.v2.public.channels.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.channels.index.$get(args, options))
}

export async function getV2PublicChannelsCountryIsoCode(
  args: InferRequestType<(typeof client.v2.public.channels)[':countryIsoCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.channels[':countryIsoCode'].$get(args, options))
}

export async function getV2PublicLovIndex(
  args: InferRequestType<typeof client.v2.public.lov.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.lov.index.$get(args, options))
}

export async function getV2PublicLovListName(
  args: InferRequestType<(typeof client.v2.public.lov)[':listName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.lov[':listName'].$get(args, options))
}

export async function postV2PublicSecurityLogin(
  args: InferRequestType<typeof client.v2.public.security.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.security.login.$post(args, options))
}

export async function postV2PublicSecurityLostpassword(
  args: InferRequestType<typeof client.v2.public.security.lostpassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.security.lostpassword.$post(args, options))
}

export async function postV2PublicSecurityRegister(
  args: InferRequestType<typeof client.v2.public.security.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.public.security.register.$post(args, options))
}

export async function getV2UserAnalyticsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.analytics.index.$get(undefined, options))
}

export async function postV2UserAnalyticsReportsByday(
  args: InferRequestType<typeof client.v2.user.analytics.reports.byday.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.analytics.reports.byday.$post(args, options))
}

export async function getV2UserAnalyticsTrackingStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.analytics.tracking.status.$get(undefined, options))
}

export async function getV2UserAnalyticsStoreId(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.analytics[':storeId'].$get(args, options))
}

export async function postV2UserAnalyticsStoreIdOptimisationsAllActionName(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['optimisations']['all'][':actionName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].optimisations.all[':actionName'].$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionName(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['optimisations']['bycategory'][':catalogCategoryId'][':actionName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].optimisations.bycategory[':catalogCategoryId'][
      ':actionName'
    ].$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionName(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['optimisations']['bychannel'][':channelId'][':actionName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].optimisations.bychannel[':channelId'][':actionName'].$post(
      args,
      options,
    ),
  )
}

export async function postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionName(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['optimisations']['byproduct'][':productId'][':actionName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].optimisations.byproduct[':productId'][':actionName'].$post(
      args,
      options,
    ),
  )
}

export async function postV2UserAnalyticsStoreIdOptimisationsCopy(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['optimisations']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].optimisations.copy.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdOptimisationsActionName(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['optimisations'][':actionName']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].optimisations[':actionName'].$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdReportsBycategory(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['bycategory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.bycategory.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdReportsBychannel(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['bychannel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.bychannel.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdReportsByday(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['byday']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.byday.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdReportsByproduct(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['byproduct']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.byproduct.$post(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdReportsFilters(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.filters.$get(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdReportsFiltersReportFilterId(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$get(args, options),
  )
}

export async function putV2UserAnalyticsStoreIdReportsFiltersReportFilterId(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$put(args, options),
  )
}

export async function deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterId(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['reports']['filters'][':reportFilterId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].reports.filters[':reportFilterId'].$delete(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdRules(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.analytics[':storeId'].rules.$get(args, options))
}

export async function postV2UserAnalyticsStoreIdRules(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.analytics[':storeId'].rules.$post(args, options))
}

export async function getV2UserAnalyticsStoreIdRulesExecutions(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules']['executions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules.executions.$get(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdRulesRun(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules']['run']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.analytics[':storeId'].rules.run.$post(args, options))
}

export async function getV2UserAnalyticsStoreIdRulesRuleId(
  args: InferRequestType<(typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].$get(args, options),
  )
}

export async function deleteV2UserAnalyticsStoreIdRulesRuleId(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].$delete(args, options),
  )
}

export async function patchV2UserAnalyticsStoreIdRulesRuleId(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].$patch(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdRulesRuleIdDisable(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].disable.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdRulesRuleIdEnable(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].enable.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdRulesRuleIdMovedown(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['movedown']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].movedown.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdRulesRuleIdMoveup(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['moveup']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].moveup.$post(args, options),
  )
}

export async function postV2UserAnalyticsStoreIdRulesRuleIdRun(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['rules'][':ruleId']['run']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].rules[':ruleId'].run.$post(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdTrackingClicks(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['clicks']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].tracking.clicks.$get(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdTrackingExternalorders(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['externalorders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].tracking.externalorders.$get(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdTrackingOrders(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['orders']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].tracking.orders.$get(args, options),
  )
}

export async function getV2UserAnalyticsStoreIdTrackingStatus(
  args: InferRequestType<
    (typeof client.v2.user.analytics)[':storeId']['tracking']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.analytics[':storeId'].tracking.status.$get(args, options),
  )
}

export async function getV2UserCatalogsIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.catalogs.index.$get(undefined, options))
}

export async function getV2UserCatalogsBeezupColumns(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.catalogs.beezupColumns.$get(undefined, options))
}

export async function getV2UserCatalogsImportations(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.catalogs.importations.$get(undefined, options))
}

export async function getV2UserCatalogsStoreId(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].$get(args, options))
}

export async function getV2UserCatalogsStoreIdAutoImport(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].autoImport.$get(args, options))
}

export async function deleteV2UserCatalogsStoreIdAutoImport(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['autoImport']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].autoImport.$delete(args, options))
}

export async function postV2UserCatalogsStoreIdAutoImportActivate(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].autoImport.activate.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdAutoImportPause(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['pause']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].autoImport.pause.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdAutoImportResume(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['resume']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].autoImport.resume.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdAutoImportSchedulingInterval(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['interval']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].autoImport.scheduling.interval.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdAutoImportSchedulingSchedules(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['scheduling']['schedules']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].autoImport.scheduling.schedules.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdAutoImportStart(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['autoImport']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].autoImport.start.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdCatalogColumns(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['catalogColumns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].catalogColumns.$get(args, options))
}

export async function postV2UserCatalogsStoreIdCatalogColumnsColumnIdRename(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['catalogColumns'][':columnId']['rename']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].catalogColumns[':columnId'].rename.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdCategories(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].categories.$get(args, options))
}

export async function getV2UserCatalogsStoreIdCustomColumns(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['customColumns']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].customColumns.$get(args, options))
}

export async function postV2UserCatalogsStoreIdCustomColumnsComputeExpression(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns']['computeExpression']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].customColumns.computeExpression.$post(args, options),
  )
}

export async function putV2UserCatalogsStoreIdCustomColumnsColumnId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].customColumns[':columnId'].$put(args, options),
  )
}

export async function deleteV2UserCatalogsStoreIdCustomColumnsColumnId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].customColumns[':columnId'].$delete(args, options),
  )
}

export async function getV2UserCatalogsStoreIdCustomColumnsColumnIdExpression(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$get(args, options),
  )
}

export async function putV2UserCatalogsStoreIdCustomColumnsColumnIdExpression(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['expression']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].customColumns[':columnId'].expression.$put(args, options),
  )
}

export async function postV2UserCatalogsStoreIdCustomColumnsColumnIdRename(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['customColumns'][':columnId']['rename']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].customColumns[':columnId'].rename.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportations(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['importations']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].importations.$get(args, options))
}

export async function postV2UserCatalogsStoreIdImportationsStart(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations']['start']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations.start.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].$get(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCancel(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].cancel.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumns(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns.$get(
      args,
      options,
    ),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
      ':columnId'
    ].$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnore(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['ignore']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
      ':columnId'
    ].ignore.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMap(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['map']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
      ':columnId'
    ].map.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattend(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['reattend']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
      ':columnId'
    ].reattend.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmap(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['catalogColumns'][':columnId']['unmap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].catalogColumns[
      ':columnId'
    ].unmap.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCommit(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commit']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].commit.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumns(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['commitColumns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].commitColumns.$post(
      args,
      options,
    ),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumns(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['configureRemainingCatalogColumns']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[
      ':executionId'
    ].configureRemainingCatalogColumns.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumns(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns.$get(
      args,
      options,
    ),
  )
}

export async function putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
      ':columnId'
    ].$put(args, options),
  )
}

export async function deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
      ':columnId'
    ].$delete(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpression(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['expression']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
      ':columnId'
    ].expression.$get(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMap(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['map']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
      ':columnId'
    ].map.$post(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmap(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['customColumns'][':columnId']['unmap']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].customColumns[
      ':columnId'
    ].unmap.$post(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndex(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
      ':productSampleIndex'
    ].$get(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['productSamples'][':productSampleIndex']['customColumns'][':columnId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].productSamples[
      ':productSampleIndex'
    ].customColumns[':columnId'].$get(args, options),
  )
}

export async function postV2UserCatalogsStoreIdImportationsExecutionIdProductsList(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['products']['list']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].products.list.$post(
      args,
      options,
    ),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdReport(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['report']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].report.$get(args, options),
  )
}

export async function getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgression(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['importations'][':executionId']['technicalProgression']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].importations[':executionId'].technicalProgression.$get(
      args,
      options,
    ),
  )
}

export async function getV2UserCatalogsStoreIdInputConfiguration(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['inputConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].inputConfiguration.$get(args, options),
  )
}

export async function getV2UserCatalogsStoreIdProducts(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].products.$get(args, options))
}

export async function postV2UserCatalogsStoreIdProductsList(
  args: InferRequestType<(typeof client.v2.user.catalogs)[':storeId']['products']['list']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.catalogs[':storeId'].products.list.$post(args, options))
}

export async function getV2UserCatalogsStoreIdProductsRandom(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products']['random']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].products.random.$get(args, options),
  )
}

export async function getV2UserCatalogsStoreIdProductsProductId(
  args: InferRequestType<
    (typeof client.v2.user.catalogs)[':storeId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.catalogs[':storeId'].products[':productId'].$get(args, options),
  )
}

export async function getV2UserChannelCatalogsIndex(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channelCatalogs.index.$get(args, options))
}

export async function postV2UserChannelCatalogsIndex(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channelCatalogs.index.$post(args, options))
}

export async function getV2UserChannelCatalogsFilterOperators(options?: ClientRequestOptions) {
  return await parseResponse(
    client.v2.user.channelCatalogs.filterOperators.$get(undefined, options),
  )
}

export async function postV2UserChannelCatalogsProducts(
  args: InferRequestType<typeof client.v2.user.channelCatalogs.products.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channelCatalogs.products.$post(args, options))
}

export async function getV2UserChannelCatalogsChannelCatalogId(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].$get(args, options),
  )
}

export async function deleteV2UserChannelCatalogsChannelCatalogId(
  args: InferRequestType<(typeof client.v2.user.channelCatalogs)[':channelCatalogId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].$delete(args, options),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdCategories(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].categories.$get(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigure(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['configure']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].categories.configure.$post(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMapping(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['disableMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].categories.disableMapping.$post(
      args,
      options,
    ),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMapping(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['categories']['reenableMapping']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].categories.reenableMapping.$post(
      args,
      options,
    ),
  )
}

export async function putV2UserChannelCatalogsChannelCatalogIdColumnMappings(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['columnMappings']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].columnMappings.$put(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdDisable(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].disable.$post(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdEnable(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['enable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].enable.$post(args, options),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdExclusionFilters(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$get(args, options),
  )
}

export async function putV2UserChannelCatalogsChannelCatalogIdExclusionFilters(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exclusionFilters']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].exclusionFilters.$put(args, options),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdExportationsCache(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.$get(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClear(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['cache']['clear']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].exportations.cache.clear.$post(
      args,
      options,
    ),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdExportationsHistory(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['exportations']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].exportations.history.$get(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdProducts(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products.$post(args, options),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdProductsCounters(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['counters']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products.counters.$get(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdProductsExport(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products']['export']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products.export.$post(args, options),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdProductsProductId(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].$get(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisable(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['disable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].disable.$post(
      args,
      options,
    ),
  )
}

export async function putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverrides(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides.$put(
      args,
      options,
    ),
  )
}

export async function getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides.copy.$get(
      args,
      options,
    ),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopy(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides']['copy']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides.copy.$post(
      args,
      options,
    ),
  )
}

export async function deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnId(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['overrides'][':channelColumnId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].overrides[
      ':channelColumnId'
    ].$delete(args, options),
  )
}

export async function postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenable(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['products'][':productId']['reenable']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].products[':productId'].reenable.$post(
      args,
      options,
    ),
  )
}

export async function putV2UserChannelCatalogsChannelCatalogIdSettingsCost(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['cost']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].settings.cost.$put(args, options),
  )
}

export async function putV2UserChannelCatalogsChannelCatalogIdSettingsGeneral(
  args: InferRequestType<
    (typeof client.v2.user.channelCatalogs)[':channelCatalogId']['settings']['general']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.channelCatalogs[':channelCatalogId'].settings.general.$put(args, options),
  )
}

export async function getV2UserChannelsIndex(
  args: InferRequestType<typeof client.v2.user.channels.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channels.index.$get(args, options))
}

export async function getV2UserChannelsChannelId(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channels[':channelId'].$get(args, options))
}

export async function getV2UserChannelsChannelIdCategories(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channels[':channelId'].categories.$get(args, options))
}

export async function postV2UserChannelsChannelIdColumns(
  args: InferRequestType<(typeof client.v2.user.channels)[':channelId']['columns']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.channels[':channelId'].columns.$post(args, options))
}

export async function getV2UserCustomerIndex(
  args: InferRequestType<typeof client.v2.user.customer.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.index.$get(args, options))
}

export async function getV2UserCustomerAccount(
  args: InferRequestType<typeof client.v2.user.customer.account.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.$get(args, options))
}

export async function postV2UserCustomerAccountActivate(
  args: InferRequestType<typeof client.v2.user.customer.account.activate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.activate.$post(args, options))
}

export async function postV2UserCustomerAccountChangeEmail(
  args: InferRequestType<typeof client.v2.user.customer.account.changeEmail.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.changeEmail.$post(args, options))
}

export async function postV2UserCustomerAccountChangePassword(
  args: InferRequestType<typeof client.v2.user.customer.account.changePassword.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.changePassword.$post(args, options))
}

export async function putV2UserCustomerAccountCompanyInfo(
  args: InferRequestType<typeof client.v2.user.customer.account.companyInfo.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.companyInfo.$put(args, options))
}

export async function getV2UserCustomerAccountCreditCardInfo(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.creditCardInfo.$get(args, options))
}

export async function putV2UserCustomerAccountCreditCardInfo(
  args: InferRequestType<typeof client.v2.user.customer.account.creditCardInfo.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.creditCardInfo.$put(args, options))
}

export async function putV2UserCustomerAccountPersonalInfo(
  args: InferRequestType<typeof client.v2.user.customer.account.personalInfo.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.personalInfo.$put(args, options))
}

export async function getV2UserCustomerAccountProfilePictureInfo(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.profilePictureInfo.$get(args, options))
}

export async function putV2UserCustomerAccountProfilePictureInfo(
  args: InferRequestType<typeof client.v2.user.customer.account.profilePictureInfo.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.account.profilePictureInfo.$put(args, options))
}

export async function postV2UserCustomerAccountResendEmailActivation(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.customer.account.resendEmailActivation.$post(undefined, options),
  )
}

export async function getV2UserCustomerBillingPeriods(
  args: InferRequestType<typeof client.v2.user.customer.billingPeriods.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.billingPeriods.$get(args, options))
}

export async function getV2UserCustomerContracts(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.contracts.$get(args, options))
}

export async function postV2UserCustomerContracts(
  args: InferRequestType<typeof client.v2.user.customer.contracts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.contracts.$post(args, options))
}

export async function postV2UserCustomerContractsCurrentDisableAutoRenewal(
  args: InferRequestType<typeof client.v2.user.customer.contracts.current.disableAutoRenewal.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.customer.contracts.current.disableAutoRenewal.$post(args, options),
  )
}

export async function postV2UserCustomerContractsCurrentReenableAutoRenewal(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.customer.contracts.current.reenableAutoRenewal.$post(undefined, options),
  )
}

export async function deleteV2UserCustomerContractsNext(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.customer.contracts.next.$delete(undefined, options))
}

export async function getV2UserCustomerFriendsUserId(
  args: InferRequestType<(typeof client.v2.user.customer.friends)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.friends[':userId'].$get(args, options))
}

export async function getV2UserCustomerInvoices(
  args: InferRequestType<typeof client.v2.user.customer.invoices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.invoices.$get(args, options))
}

export async function getV2UserCustomerOffers(
  args: InferRequestType<typeof client.v2.user.customer.offers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.offers.$get(args, options))
}

export async function postV2UserCustomerOffers(
  args: InferRequestType<typeof client.v2.user.customer.offers.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.offers.$post(args, options))
}

export async function postV2UserCustomerSecurityLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.customer.security.logout.$post(undefined, options))
}

export async function getV2UserCustomerStores(
  args: InferRequestType<typeof client.v2.user.customer.stores.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores.$get(args, options))
}

export async function postV2UserCustomerStores(
  args: InferRequestType<typeof client.v2.user.customer.stores.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores.$post(args, options))
}

export async function getV2UserCustomerStoresStoreId(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].$get(args, options))
}

export async function deleteV2UserCustomerStoresStoreId(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].$delete(args, options))
}

export async function patchV2UserCustomerStoresStoreId(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].$patch(args, options))
}

export async function getV2UserCustomerStoresStoreIdAlerts(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].alerts.$get(args, options))
}

export async function postV2UserCustomerStoresStoreIdAlerts(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['alerts']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].alerts.$post(args, options))
}

export async function getV2UserCustomerStoresStoreIdRights(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['rights']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].rights.$get(args, options))
}

export async function getV2UserCustomerStoresStoreIdShares(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].shares.$get(args, options))
}

export async function postV2UserCustomerStoresStoreIdShares(
  args: InferRequestType<(typeof client.v2.user.customer.stores)[':storeId']['shares']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.customer.stores[':storeId'].shares.$post(args, options))
}

export async function deleteV2UserCustomerStoresStoreIdSharesUserId(
  args: InferRequestType<
    (typeof client.v2.user.customer.stores)[':storeId']['shares'][':userId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.customer.stores[':storeId'].shares[':userId'].$delete(args, options),
  )
}

export async function getV2UserCustomerZendeskToken(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.customer.zendeskToken.$get(undefined, options))
}

export async function getV2UserLegacyTrackingChannelCatalogsIndex(
  args: InferRequestType<typeof client.v2.user.legacyTracking.channelCatalogs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.legacyTracking.channelCatalogs.index.$get(args, options),
  )
}

export async function getV2UserLegacyTrackingChannelCatalogsChannelCatalogId(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].$get(args, options),
  )
}

export async function postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrate(
  args: InferRequestType<
    (typeof client.v2.user.legacyTracking.channelCatalogs)[':channelCatalogId']['migrate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.legacyTracking.channelCatalogs[':channelCatalogId'].migrate.$post(args, options),
  )
}

export async function getV2UserLovIndex(options?: ClientRequestOptions) {
  return await parseResponse(client.v2.user.lov.index.$get(undefined, options))
}

export async function getV2UserLovListName(
  args: InferRequestType<(typeof client.v2.user.lov)[':listName']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.lov[':listName'].$get(args, options))
}

export async function getV2UserMarketplacesChannelcatalogsIndex(
  args: InferRequestType<typeof client.v2.user.marketplaces.channelcatalogs.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.channelcatalogs.index.$get(args, options))
}

export async function getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistory(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
      ':accountId'
    ].history.$get(args, options),
  )
}

export async function postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublish(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs.publications)[':marketplaceTechnicalCode'][':accountId']['publish']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.channelcatalogs.publications[':marketplaceTechnicalCode'][
      ':accountId'
    ].publish.$post(args, options),
  )
}

export async function getV2UserMarketplacesChannelcatalogsChannelCatalogIdProperties(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['properties']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].properties.$get(args, options),
  )
}

export async function getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$get(args, options),
  )
}

export async function postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettings(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.channelcatalogs)[':channelCatalogId']['settings']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.channelcatalogs[':channelCatalogId'].settings.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersIndex(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.index.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.index.$get(args, options))
}

export async function getV2UserMarketplacesOrdersAutomaticTransitions(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.automaticTransitions.$get(args, options),
  )
}

export async function postV2UserMarketplacesOrdersAutomaticTransitions(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.automaticTransitions.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.automaticTransitions.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderType(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.batches.changeOrders)[':changeOrderType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.batches.changeOrders[':changeOrderType'].$post(
      args,
      options,
    ),
  )
}

export async function postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfos(
  args: InferRequestType<
    typeof client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.batches.clearMerchantOrderInfos.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfos(
  args: InferRequestType<
    typeof client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.batches.setMerchantOrderInfos.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersExportations(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.exportations.$get(args, options))
}

export async function postV2UserMarketplacesOrdersExportations(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.exportations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.exportations.$post(args, options))
}

export async function postV2UserMarketplacesOrdersHarvest(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.harvest.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.harvest.$post(args, options))
}

export async function postV2UserMarketplacesOrdersInvoicesGenerate(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.generate.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersInvoicesGetPdfInvoice(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.getPdfInvoice.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersInvoicesSettingsDesign(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.settings.design.$get(undefined, options),
  )
}

export async function putV2UserMarketplacesOrdersInvoicesSettingsDesign(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.design.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.settings.design.$put(args, options),
  )
}

export async function postV2UserMarketplacesOrdersInvoicesSettingsDesignPreview(
  args: InferRequestType<
    typeof client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.settings.design.preview.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersInvoicesSettingsGeneral(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.settings.general.$get(undefined, options),
  )
}

export async function putV2UserMarketplacesOrdersInvoicesSettingsGeneral(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.invoices.settings.general.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices.settings.general.$put(args, options),
  )
}

export async function postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerate(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['generate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderUUID'
    ].generate.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreview(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.invoices)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderUUID']['preview']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.invoices[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderUUID'
    ].preview.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersListFull(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.list.full.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.list.full.$post(args, options))
}

export async function postV2UserMarketplacesOrdersListLight(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.list.light.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.list.light.$post(args, options))
}

export async function getV2UserMarketplacesOrdersStatus(
  args: InferRequestType<typeof client.v2.user.marketplaces.orders.status.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.v2.user.marketplaces.orders.status.$get(args, options))
}

export async function getV2UserMarketplacesOrdersSubscriptionsIndex(
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions.index.$get(undefined, options),
  )
}

export async function getV2UserMarketplacesOrdersSubscriptionsId(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].$get(args, options),
  )
}

export async function postV2UserMarketplacesOrdersSubscriptionsId(
  args: InferRequestType<(typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].$post(args, options),
  )
}

export async function deleteV2UserMarketplacesOrdersSubscriptionsId(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].$delete(args, options),
  )
}

export async function postV2UserMarketplacesOrdersSubscriptionsIdActivate(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['activate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].activate.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersSubscriptionsIdDeactivate(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['deactivate']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].deactivate.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersSubscriptionsIdReporting(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['reporting']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].reporting.$get(args, options),
  )
}

export async function postV2UserMarketplacesOrdersSubscriptionsIdRetry(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders.subscriptions)[':id']['retry']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders.subscriptions[':id'].retry.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].$get(args, options),
  )
}

export async function headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderId(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['$head']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].$head(args, options),
  )
}

export async function postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfo(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['clearMerchantOrderInfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].clearMerchantOrderInfo.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvest(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['harvest']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].harvest.$post(args, options),
  )
}

export async function getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistory(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['history']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].history.$get(args, options),
  )
}

export async function postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfo(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId']['setMerchantOrderInfo']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][
      ':beezUPOrderId'
    ].setMerchantOrderInfo.$post(args, options),
  )
}

export async function postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderType(
  args: InferRequestType<
    (typeof client.v2.user.marketplaces.orders)[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][':changeOrderType']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.v2.user.marketplaces.orders[':marketplaceTechnicalCode'][':accountId'][':beezUPOrderId'][
      ':changeOrderType'
    ].$post(args, options),
  )
}
