import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdministrationEntityIdRoute,
  deleteAdministrationPlanningLevelEntityIdIdRoute,
  deleteAdministrationUserEntityIdIdRoute,
  getAdministrationEntityRoute,
  getAdministrationModelEntityIdRoute,
  getAdministrationModelRoute,
  getAdministrationUserEntityIdRoute,
  getForecastResultJobIdRoute,
  getForecastStatusJobIdRoute,
  getHyperparameterRoute,
  getReportPerformancePlanningLevelIdRoute,
  getReportPerformanceSkuRationalizationPlanningLevelIdRoute,
  getReportPlanningLevelOrganizationRoute,
  getReportPlanningLevelUserRoute,
  getReportUserRoute,
  postAdministrationEntityRoute,
  postAdministrationFileToJsonRoute,
  postAdministrationModelEntityIdRoute,
  postAdministrationModelRoute,
  postAdministrationPlanningLevelLockRoute,
  postAdministrationTokenRoute,
  postAdministrationUserRoute,
  postForecastAIHistoryAndForecastRoute,
  postForecastAIRoute,
  postForecastFileToForecastRoute,
  postForecastForecastBottomUpRoute,
  postForecastForecastTopDownRoute,
  postForecastFullDetailRoute,
  postForecastHistoryAndForecastRoute,
  postForecastOptimalParameterRoute,
  postForecastRerunRoute,
  postForecastRoute,
  postHyperparameterRoute,
  postInventoryAmazonIpiRoute,
  postInventoryCaryyingCostRoute,
  postInventoryEoqRoute,
  postInventoryFillRateRoute,
  postInventoryFinancialImapctForecastAccuracyRoute,
  postInventoryInventoryTurnoverRoute,
  postInventoryLtdRoute,
  postInventoryMoqRoute,
  postInventoryOptimalServiceLevelRoute,
  postInventoryReorderPointRoute,
  postInventorySafetyStockRoute,
  postInventoryServiceLevelRoute,
  postInventoryTurnsRoute,
  postLifecycleManyToOneRoute,
  postLifecycleOneToOneRoute,
  postOutlierRoute,
  postPortfolioAbcRoute,
  postPortfolioFileToPortfolioRoute,
  postPortfolioForecastPerformanceRewindRoute,
  postPortfolioRoute,
  postPortfolioXyzRoute,
  postPricingBundlePricingRoute,
  postPricingCompetitivePricingRoute,
  postPricingCostPlusPricingRoute,
  postPricingDecoyPricingRoute,
  postPricingOddPricingRoute,
  postPricingPenetrationPricingRoute,
  postPricingPriceElasticityOfDemandRoute,
  putAdministrationEntityRoute,
  putAdministrationUserLockRoute,
  putAdministrationUserRoute,
} from './routes'
import {
  deleteAdministrationEntityIdRouteHandler,
  deleteAdministrationPlanningLevelEntityIdIdRouteHandler,
  deleteAdministrationUserEntityIdIdRouteHandler,
  getAdministrationEntityRouteHandler,
  getAdministrationModelEntityIdRouteHandler,
  getAdministrationModelRouteHandler,
  getAdministrationUserEntityIdRouteHandler,
  getForecastResultJobIdRouteHandler,
  getForecastStatusJobIdRouteHandler,
  getHyperparameterRouteHandler,
  getReportPerformancePlanningLevelIdRouteHandler,
  getReportPerformanceSkuRationalizationPlanningLevelIdRouteHandler,
  getReportPlanningLevelOrganizationRouteHandler,
  getReportPlanningLevelUserRouteHandler,
  getReportUserRouteHandler,
  postAdministrationEntityRouteHandler,
  postAdministrationFileToJsonRouteHandler,
  postAdministrationModelEntityIdRouteHandler,
  postAdministrationModelRouteHandler,
  postAdministrationPlanningLevelLockRouteHandler,
  postAdministrationTokenRouteHandler,
  postAdministrationUserRouteHandler,
  postForecastAIHistoryAndForecastRouteHandler,
  postForecastAIRouteHandler,
  postForecastFileToForecastRouteHandler,
  postForecastForecastBottomUpRouteHandler,
  postForecastForecastTopDownRouteHandler,
  postForecastFullDetailRouteHandler,
  postForecastHistoryAndForecastRouteHandler,
  postForecastOptimalParameterRouteHandler,
  postForecastRerunRouteHandler,
  postForecastRouteHandler,
  postHyperparameterRouteHandler,
  postInventoryAmazonIpiRouteHandler,
  postInventoryCaryyingCostRouteHandler,
  postInventoryEoqRouteHandler,
  postInventoryFillRateRouteHandler,
  postInventoryFinancialImapctForecastAccuracyRouteHandler,
  postInventoryInventoryTurnoverRouteHandler,
  postInventoryLtdRouteHandler,
  postInventoryMoqRouteHandler,
  postInventoryOptimalServiceLevelRouteHandler,
  postInventoryReorderPointRouteHandler,
  postInventorySafetyStockRouteHandler,
  postInventoryServiceLevelRouteHandler,
  postInventoryTurnsRouteHandler,
  postLifecycleManyToOneRouteHandler,
  postLifecycleOneToOneRouteHandler,
  postOutlierRouteHandler,
  postPortfolioAbcRouteHandler,
  postPortfolioFileToPortfolioRouteHandler,
  postPortfolioForecastPerformanceRewindRouteHandler,
  postPortfolioRouteHandler,
  postPortfolioXyzRouteHandler,
  postPricingBundlePricingRouteHandler,
  postPricingCompetitivePricingRouteHandler,
  postPricingCostPlusPricingRouteHandler,
  postPricingDecoyPricingRouteHandler,
  postPricingOddPricingRouteHandler,
  postPricingPenetrationPricingRouteHandler,
  postPricingPriceElasticityOfDemandRouteHandler,
  putAdministrationEntityRouteHandler,
  putAdministrationUserLockRouteHandler,
  putAdministrationUserRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdministrationEntityRoute, getAdministrationEntityRouteHandler)
  .openapi(postAdministrationEntityRoute, postAdministrationEntityRouteHandler)
  .openapi(putAdministrationEntityRoute, putAdministrationEntityRouteHandler)
  .openapi(deleteAdministrationEntityIdRoute, deleteAdministrationEntityIdRouteHandler)
  .openapi(postAdministrationFileToJsonRoute, postAdministrationFileToJsonRouteHandler)
  .openapi(getAdministrationModelRoute, getAdministrationModelRouteHandler)
  .openapi(postAdministrationModelRoute, postAdministrationModelRouteHandler)
  .openapi(getAdministrationModelEntityIdRoute, getAdministrationModelEntityIdRouteHandler)
  .openapi(postAdministrationModelEntityIdRoute, postAdministrationModelEntityIdRouteHandler)
  .openapi(
    postAdministrationPlanningLevelLockRoute,
    postAdministrationPlanningLevelLockRouteHandler,
  )
  .openapi(
    deleteAdministrationPlanningLevelEntityIdIdRoute,
    deleteAdministrationPlanningLevelEntityIdIdRouteHandler,
  )
  .openapi(postAdministrationTokenRoute, postAdministrationTokenRouteHandler)
  .openapi(postAdministrationUserRoute, postAdministrationUserRouteHandler)
  .openapi(putAdministrationUserRoute, putAdministrationUserRouteHandler)
  .openapi(putAdministrationUserLockRoute, putAdministrationUserLockRouteHandler)
  .openapi(getAdministrationUserEntityIdRoute, getAdministrationUserEntityIdRouteHandler)
  .openapi(deleteAdministrationUserEntityIdIdRoute, deleteAdministrationUserEntityIdIdRouteHandler)
  .openapi(postForecastRoute, postForecastRouteHandler)
  .openapi(postForecastAIRoute, postForecastAIRouteHandler)
  .openapi(postForecastAIHistoryAndForecastRoute, postForecastAIHistoryAndForecastRouteHandler)
  .openapi(postForecastFileToForecastRoute, postForecastFileToForecastRouteHandler)
  .openapi(postForecastForecastBottomUpRoute, postForecastForecastBottomUpRouteHandler)
  .openapi(postForecastForecastTopDownRoute, postForecastForecastTopDownRouteHandler)
  .openapi(postForecastFullDetailRoute, postForecastFullDetailRouteHandler)
  .openapi(postForecastHistoryAndForecastRoute, postForecastHistoryAndForecastRouteHandler)
  .openapi(postForecastOptimalParameterRoute, postForecastOptimalParameterRouteHandler)
  .openapi(postForecastRerunRoute, postForecastRerunRouteHandler)
  .openapi(getForecastResultJobIdRoute, getForecastResultJobIdRouteHandler)
  .openapi(getForecastStatusJobIdRoute, getForecastStatusJobIdRouteHandler)
  .openapi(getHyperparameterRoute, getHyperparameterRouteHandler)
  .openapi(postHyperparameterRoute, postHyperparameterRouteHandler)
  .openapi(postInventoryAmazonIpiRoute, postInventoryAmazonIpiRouteHandler)
  .openapi(postInventoryCaryyingCostRoute, postInventoryCaryyingCostRouteHandler)
  .openapi(postInventoryEoqRoute, postInventoryEoqRouteHandler)
  .openapi(postInventoryFillRateRoute, postInventoryFillRateRouteHandler)
  .openapi(
    postInventoryFinancialImapctForecastAccuracyRoute,
    postInventoryFinancialImapctForecastAccuracyRouteHandler,
  )
  .openapi(postInventoryInventoryTurnoverRoute, postInventoryInventoryTurnoverRouteHandler)
  .openapi(postInventoryLtdRoute, postInventoryLtdRouteHandler)
  .openapi(postInventoryMoqRoute, postInventoryMoqRouteHandler)
  .openapi(postInventoryOptimalServiceLevelRoute, postInventoryOptimalServiceLevelRouteHandler)
  .openapi(postInventoryReorderPointRoute, postInventoryReorderPointRouteHandler)
  .openapi(postInventorySafetyStockRoute, postInventorySafetyStockRouteHandler)
  .openapi(postInventoryServiceLevelRoute, postInventoryServiceLevelRouteHandler)
  .openapi(postInventoryTurnsRoute, postInventoryTurnsRouteHandler)
  .openapi(postLifecycleManyToOneRoute, postLifecycleManyToOneRouteHandler)
  .openapi(postLifecycleOneToOneRoute, postLifecycleOneToOneRouteHandler)
  .openapi(postOutlierRoute, postOutlierRouteHandler)
  .openapi(postPortfolioRoute, postPortfolioRouteHandler)
  .openapi(postPortfolioAbcRoute, postPortfolioAbcRouteHandler)
  .openapi(postPortfolioFileToPortfolioRoute, postPortfolioFileToPortfolioRouteHandler)
  .openapi(
    postPortfolioForecastPerformanceRewindRoute,
    postPortfolioForecastPerformanceRewindRouteHandler,
  )
  .openapi(postPortfolioXyzRoute, postPortfolioXyzRouteHandler)
  .openapi(postPricingBundlePricingRoute, postPricingBundlePricingRouteHandler)
  .openapi(postPricingCompetitivePricingRoute, postPricingCompetitivePricingRouteHandler)
  .openapi(postPricingCostPlusPricingRoute, postPricingCostPlusPricingRouteHandler)
  .openapi(postPricingDecoyPricingRoute, postPricingDecoyPricingRouteHandler)
  .openapi(postPricingOddPricingRoute, postPricingOddPricingRouteHandler)
  .openapi(postPricingPenetrationPricingRoute, postPricingPenetrationPricingRouteHandler)
  .openapi(postPricingPriceElasticityOfDemandRoute, postPricingPriceElasticityOfDemandRouteHandler)
  .openapi(
    getReportPerformanceSkuRationalizationPlanningLevelIdRoute,
    getReportPerformanceSkuRationalizationPlanningLevelIdRouteHandler,
  )
  .openapi(
    getReportPerformancePlanningLevelIdRoute,
    getReportPerformancePlanningLevelIdRouteHandler,
  )
  .openapi(getReportPlanningLevelOrganizationRoute, getReportPlanningLevelOrganizationRouteHandler)
  .openapi(getReportPlanningLevelUserRoute, getReportPlanningLevelUserRouteHandler)
  .openapi(getReportUserRoute, getReportUserRouteHandler)

export default app
