import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortfolioAnalysisAlphaRoute,
  postPortfolioAnalysisBetaRoute,
  postPortfolioAnalysisConditionalValueAtRiskRoute,
  postPortfolioAnalysisContributionsReturnRoute,
  postPortfolioAnalysisContributionsRiskRoute,
  postPortfolioAnalysisCorrelationSpectrumRoute,
  postPortfolioAnalysisDiversificationRatioRoute,
  postPortfolioAnalysisDrawdownsRoute,
  postPortfolioAnalysisEffectiveNumberOfBetsRoute,
  postPortfolioAnalysisFactorsExposuresRoute,
  postPortfolioAnalysisMeanVarianceEfficientFrontierRoute,
  postPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRoute,
  postPortfolioAnalysisReturnRoute,
  postPortfolioAnalysisReturnsAverageRoute,
  postPortfolioAnalysisSharpeRatioBiasAdjustedRoute,
  postPortfolioAnalysisSharpeRatioConfidenceIntervalRoute,
  postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRoute,
  postPortfolioAnalysisSharpeRatioProbabilisticRoute,
  postPortfolioAnalysisSharpeRatioRoute,
  postPortfolioAnalysisTrackingErrorRoute,
  postPortfolioAnalysisUlcerIndexRoute,
  postPortfolioAnalysisUlcerPerformanceIndexRoute,
  postPortfolioAnalysisValueAtRiskRoute,
  postPortfolioAnalysisVolatilityRoute,
  postPortfolioConstructionInvestableRoute,
  postPortfolioConstructionMimickingRoute,
  postPortfolioConstructionRandomRoute,
  postPortfolioOptimizationEqualRiskContributionsRoute,
  postPortfolioOptimizationEqualSharpeRatioContributionsRoute,
  postPortfolioOptimizationEqualVolatilityWeightedRoute,
  postPortfolioOptimizationEqualWeightedRoute,
  postPortfolioOptimizationHierarchicalRiskParityClusteringBasedRoute,
  postPortfolioOptimizationHierarchicalRiskParityRoute,
  postPortfolioOptimizationInverseVarianceWeightedRoute,
  postPortfolioOptimizationInverseVolatilityWeightedRoute,
  postPortfolioOptimizationMarketCapitalizationWeightedRoute,
  postPortfolioOptimizationMaximumDecorrelationRoute,
  postPortfolioOptimizationMaximumReturnDiversifiedRoute,
  postPortfolioOptimizationMaximumReturnRoute,
  postPortfolioOptimizationMaximumReturnSubsetResamplingBasedRoute,
  postPortfolioOptimizationMaximumSharpeRatioDiversifiedRoute,
  postPortfolioOptimizationMaximumSharpeRatioRoute,
  postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRoute,
  postPortfolioOptimizationMaximumUlcerPerformanceIndexRoute,
  postPortfolioOptimizationMeanVarianceEfficientDiversifiedRoute,
  postPortfolioOptimizationMeanVarianceEfficientRoute,
  postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRoute,
  postPortfolioOptimizationMinimumCorrelationRoute,
  postPortfolioOptimizationMinimumUlcerIndexRoute,
  postPortfolioOptimizationMinimumVarianceDiversifiedRoute,
  postPortfolioOptimizationMinimumVarianceRoute,
  postPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRoute,
  postPortfolioOptimizationMostDiversifiedRoute,
  postPortfolioSimulationRebalancingDriftWeightRoute,
  postPortfolioSimulationRebalancingFixedWeightRoute,
  postPortfolioSimulationRebalancingRandomWeightRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioHandler = app
  .openapi(postPortfolioAnalysisAlphaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisBetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisConditionalValueAtRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisContributionsReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisContributionsRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisCorrelationSpectrumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisDiversificationRatioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisDrawdownsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisEffectiveNumberOfBetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisFactorsExposuresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisMeanVarianceEfficientFrontierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisMeanVarianceMinimumVarianceFrontierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisReturnsAverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioBiasAdjustedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioConfidenceIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioProbabilisticRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisSharpeRatioProbabilisticMinimumTrackRecordLengthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisTrackingErrorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisUlcerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisUlcerPerformanceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisValueAtRiskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioAnalysisVolatilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioConstructionInvestableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioConstructionMimickingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioConstructionRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationEqualRiskContributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationEqualSharpeRatioContributionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationEqualVolatilityWeightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationEqualWeightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationHierarchicalRiskParityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationHierarchicalRiskParityClusteringBasedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationInverseVarianceWeightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationInverseVolatilityWeightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMarketCapitalizationWeightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumDecorrelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumReturnDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumReturnSubsetResamplingBasedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumSharpeRatioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumSharpeRatioDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMaximumUlcerPerformanceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMeanVarianceEfficientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMeanVarianceEfficientDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumCorrelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumUlcerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumVarianceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumVarianceDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMostDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioSimulationRebalancingDriftWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioSimulationRebalancingFixedWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioSimulationRebalancingRandomWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
