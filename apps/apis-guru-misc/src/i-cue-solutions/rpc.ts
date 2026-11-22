import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAdministrationEntity(
  args: InferRequestType<typeof client.administration.entity.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.entity.$get(args, options))
}

export async function putAdministrationEntity(
  args: InferRequestType<typeof client.administration.entity.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.entity.$put(args, options))
}

export async function postAdministrationEntity(
  args: InferRequestType<typeof client.administration.entity.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.entity.$post(args, options))
}

export async function deleteAdministrationEntityId(
  args: InferRequestType<(typeof client.administration.entity)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.entity[':id'].$delete(args, options))
}

export async function postAdministrationFileToJson(
  args: InferRequestType<(typeof client.administration)['file-to-json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration['file-to-json'].$post(args, options))
}

export async function getAdministrationModel(
  args: InferRequestType<typeof client.administration.model.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.model.$get(args, options))
}

export async function postAdministrationModel(
  args: InferRequestType<typeof client.administration.model.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.model.$post(args, options))
}

export async function getAdministrationModelEntityId(
  args: InferRequestType<(typeof client.administration.model)[':entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.model[':entityId'].$get(args, options))
}

export async function postAdministrationModelEntityId(
  args: InferRequestType<(typeof client.administration.model)[':entityId']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.model[':entityId'].$post(args, options))
}

export async function postAdministrationPlanningLevelLock(
  args: InferRequestType<(typeof client.administration)['planning-level']['lock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration['planning-level'].lock.$post(args, options))
}

export async function deleteAdministrationPlanningLevelEntityIdId(
  args: InferRequestType<
    (typeof client.administration)['planning-level'][':entityId'][':id']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.administration['planning-level'][':entityId'][':id'].$delete(args, options),
  )
}

export async function postAdministrationToken(
  args: InferRequestType<typeof client.administration.token.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.token.$post(args, options))
}

export async function putAdministrationUser(
  args: InferRequestType<typeof client.administration.user.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.user.$put(args, options))
}

export async function postAdministrationUser(
  args: InferRequestType<typeof client.administration.user.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.user.$post(args, options))
}

export async function putAdministrationUserLock(
  args: InferRequestType<typeof client.administration.user.lock.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.user.lock.$put(args, options))
}

export async function getAdministrationUserEntityId(
  args: InferRequestType<(typeof client.administration.user)[':entityId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.user[':entityId'].$get(args, options))
}

export async function deleteAdministrationUserEntityIdId(
  args: InferRequestType<(typeof client.administration.user)[':entityId'][':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.administration.user[':entityId'][':id'].$delete(args, options))
}

export async function postForecast(
  args: InferRequestType<typeof client.forecast.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.$post(args, options))
}

export async function postForecastAI(
  args: InferRequestType<typeof client.forecast.AI.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.AI.$post(args, options))
}

export async function postForecastAIHistoryAndForecast(
  args: InferRequestType<(typeof client.forecast.AI)['history-and-forecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.AI['history-and-forecast'].$post(args, options))
}

export async function postForecastFileToForecast(
  args: InferRequestType<(typeof client.forecast)['file-to-forecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast['file-to-forecast'].$post(args, options))
}

export async function postForecastForecastBottomUp(
  args: InferRequestType<(typeof client.forecast)['forecast-bottom-up']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast['forecast-bottom-up'].$post(args, options))
}

export async function postForecastForecastTopDown(
  args: InferRequestType<(typeof client.forecast)['forecast-top-down']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast['forecast-top-down'].$post(args, options))
}

export async function postForecastFullDetail(
  args: InferRequestType<(typeof client.forecast)['full-detail']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast['full-detail'].$post(args, options))
}

export async function postForecastHistoryAndForecast(
  args: InferRequestType<(typeof client.forecast)['history-and-forecast']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast['history-and-forecast'].$post(args, options))
}

export async function postForecastOptimalParameter(
  args: InferRequestType<(typeof client.forecast)['optimal-parameter']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast['optimal-parameter'].$post(args, options))
}

export async function postForecastRerun(
  args: InferRequestType<typeof client.forecast.rerun.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.rerun.$post(args, options))
}

export async function getForecastResultJobId(
  args: InferRequestType<(typeof client.forecast.result)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.result[':jobId'].$get(args, options))
}

export async function getForecastStatusJobId(
  args: InferRequestType<(typeof client.forecast.status)[':jobId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.forecast.status[':jobId'].$get(args, options))
}

export async function getHyperparameter(
  args: InferRequestType<typeof client.hyperparameter.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hyperparameter.$get(args, options))
}

export async function postHyperparameter(
  args: InferRequestType<typeof client.hyperparameter.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hyperparameter.$post(args, options))
}

export async function postInventoryAmazonIpi(
  args: InferRequestType<(typeof client.inventory)['amazon-ipi']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['amazon-ipi'].$post(args, options))
}

export async function postInventoryCaryyingCost(
  args: InferRequestType<(typeof client.inventory)['caryying-cost']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['caryying-cost'].$post(args, options))
}

export async function postInventoryEoq(
  args: InferRequestType<typeof client.inventory.eoq.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory.eoq.$post(args, options))
}

export async function postInventoryFillRate(
  args: InferRequestType<(typeof client.inventory)['fill-rate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['fill-rate'].$post(args, options))
}

export async function postInventoryFinancialImapctForecastAccuracy(
  args: InferRequestType<(typeof client.inventory)['financial-imapct-forecast-accuracy']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.inventory['financial-imapct-forecast-accuracy'].$post(args, options),
  )
}

export async function postInventoryInventoryTurnover(
  args: InferRequestType<(typeof client.inventory)['inventory-turnover']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['inventory-turnover'].$post(args, options))
}

export async function postInventoryLtd(
  args: InferRequestType<typeof client.inventory.ltd.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory.ltd.$post(args, options))
}

export async function postInventoryMoq(
  args: InferRequestType<typeof client.inventory.moq.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory.moq.$post(args, options))
}

export async function postInventoryOptimalServiceLevel(
  args: InferRequestType<(typeof client.inventory)['optimal-service-level']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['optimal-service-level'].$post(args, options))
}

export async function postInventoryReorderPoint(
  args: InferRequestType<(typeof client.inventory)['reorder-point']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['reorder-point'].$post(args, options))
}

export async function postInventorySafetyStock(
  args: InferRequestType<(typeof client.inventory)['safety-stock']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['safety-stock'].$post(args, options))
}

export async function postInventoryServiceLevel(
  args: InferRequestType<(typeof client.inventory)['service-level']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory['service-level'].$post(args, options))
}

export async function postInventoryTurns(
  args: InferRequestType<typeof client.inventory.turns.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.inventory.turns.$post(args, options))
}

export async function postLifecycleManyToOne(
  args: InferRequestType<(typeof client.lifecycle)['many-to-one']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle['many-to-one'].$post(args, options))
}

export async function postLifecycleOneToOne(
  args: InferRequestType<(typeof client.lifecycle)['one-to-one']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lifecycle['one-to-one'].$post(args, options))
}

export async function postOutlier(
  args: InferRequestType<typeof client.outlier.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.outlier.$post(args, options))
}

export async function postPortfolio(
  args: InferRequestType<typeof client.portfolio.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.$post(args, options))
}

export async function postPortfolioAbc(
  args: InferRequestType<typeof client.portfolio.abc.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.abc.$post(args, options))
}

export async function postPortfolioFileToPortfolio(
  args: InferRequestType<(typeof client.portfolio)['file-to-portfolio']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio['file-to-portfolio'].$post(args, options))
}

export async function postPortfolioForecastPerformanceRewind(
  args: InferRequestType<(typeof client.portfolio)['forecast-performance-rewind']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio['forecast-performance-rewind'].$post(args, options))
}

export async function postPortfolioXyz(
  args: InferRequestType<typeof client.portfolio.xyz.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.portfolio.xyz.$post(args, options))
}

export async function postPricingBundlePricing(
  args: InferRequestType<(typeof client.pricing)['bundle-pricing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['bundle-pricing'].$post(args, options))
}

export async function postPricingCompetitivePricing(
  args: InferRequestType<(typeof client.pricing)['competitive-pricing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['competitive-pricing'].$post(args, options))
}

export async function postPricingCostPlusPricing(
  args: InferRequestType<(typeof client.pricing)['cost-plus-pricing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['cost-plus-pricing'].$post(args, options))
}

export async function postPricingDecoyPricing(
  args: InferRequestType<(typeof client.pricing)['decoy-pricing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['decoy-pricing'].$post(args, options))
}

export async function postPricingOddPricing(
  args: InferRequestType<(typeof client.pricing)['odd-pricing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['odd-pricing'].$post(args, options))
}

export async function postPricingPenetrationPricing(
  args: InferRequestType<(typeof client.pricing)['penetration-pricing']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['penetration-pricing'].$post(args, options))
}

export async function postPricingPriceElasticityOfDemand(
  args: InferRequestType<(typeof client.pricing)['price-elasticity-of-demand']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pricing['price-elasticity-of-demand'].$post(args, options))
}

export async function getReportPerformanceSkuRationalizationPlanningLevelId(
  args: InferRequestType<
    (typeof client.report.performance)['sku-rationalization'][':planningLevelId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.report.performance['sku-rationalization'][':planningLevelId'].$get(args, options),
  )
}

export async function getReportPerformancePlanningLevelId(
  args: InferRequestType<(typeof client.report.performance)[':planningLevelId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.performance[':planningLevelId'].$get(args, options))
}

export async function getReportPlanningLevelOrganization(
  args: InferRequestType<(typeof client.report)['planning-level']['organization']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report['planning-level'].organization.$get(args, options))
}

export async function getReportPlanningLevelUser(
  args: InferRequestType<(typeof client.report)['planning-level']['user']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report['planning-level'].user.$get(args, options))
}

export async function getReportUser(
  args: InferRequestType<typeof client.report.user.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.report.user.$get(args, options))
}
