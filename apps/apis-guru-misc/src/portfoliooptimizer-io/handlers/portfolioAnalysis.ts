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
  postPortfolioAnalysisTrackingErrorRoute,
  postPortfolioAnalysisUlcerIndexRoute,
  postPortfolioAnalysisUlcerPerformanceIndexRoute,
  postPortfolioAnalysisValueAtRiskRoute,
  postPortfolioAnalysisVolatilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioAnalysisHandler = app
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
