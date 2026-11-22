import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postPortfolioOptimizationMaximumReturnDiversifiedRoute,
  postPortfolioOptimizationMaximumReturnRoute,
  postPortfolioOptimizationMaximumReturnSubsetResamplingBasedRoute,
  postPortfolioOptimizationMaximumSharpeRatioDiversifiedRoute,
  postPortfolioOptimizationMaximumSharpeRatioRoute,
  postPortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedRoute,
  postPortfolioOptimizationMeanVarianceEfficientDiversifiedRoute,
  postPortfolioOptimizationMeanVarianceEfficientRoute,
  postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRoute,
  postPortfolioOptimizationMinimumVarianceDiversifiedRoute,
  postPortfolioOptimizationMinimumVarianceRoute,
  postPortfolioOptimizationMinimumVarianceSubsetResamplingBasedRoute,
} from '../routes'

const app = new OpenAPIHono()

export const portfolioOptimizationMeanVarianceHandler = app
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
  .openapi(postPortfolioOptimizationMeanVarianceEfficientRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMeanVarianceEfficientDiversifiedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPortfolioOptimizationMeanVarianceEfficientSubsetResamplingBasedRoute, (c) => {
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
