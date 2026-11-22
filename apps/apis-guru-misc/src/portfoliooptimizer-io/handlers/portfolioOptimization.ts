import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
  postPortfolioOptimizationMaximumUlcerPerformanceIndexRoute,
  postPortfolioOptimizationMinimumCorrelationRoute,
  postPortfolioOptimizationMinimumUlcerIndexRoute,
  postPortfolioOptimizationMostDiversifiedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioOptimizationHandler = app
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
  .openapi(postPortfolioOptimizationMaximumUlcerPerformanceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumCorrelationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMinimumUlcerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMostDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
