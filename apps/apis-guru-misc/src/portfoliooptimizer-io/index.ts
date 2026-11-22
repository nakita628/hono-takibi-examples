import { OpenAPIHono } from '@hono/zod-openapi'
import {
  assetsAnalysisHandler,
  assetsCorrelationMatrixHandler,
  assetsCovarianceMatrixHandler,
  assetsKurtosisHandler,
  assetsPricesHandler,
  assetsReturnsHandler,
  assetsReturnsSimulationHandler,
  assetsSkewnessHandler,
  assetsVarianceHandler,
  assetsVolatilityHandler,
  factorsHandler,
  portfolioAnalysisHandler,
  portfolioAnalysisSharpeRatioHandler,
  portfolioConstructionHandler,
  portfolioOptimizationHandler,
  portfolioOptimizationMeanVarianceHandler,
  portfolioSimulationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', assetsAnalysisHandler)
  .route('/', assetsCorrelationMatrixHandler)
  .route('/', assetsCovarianceMatrixHandler)
  .route('/', assetsKurtosisHandler)
  .route('/', assetsPricesHandler)
  .route('/', assetsReturnsHandler)
  .route('/', assetsReturnsSimulationHandler)
  .route('/', assetsSkewnessHandler)
  .route('/', assetsVarianceHandler)
  .route('/', assetsVolatilityHandler)
  .route('/', factorsHandler)
  .route('/', portfolioAnalysisHandler)
  .route('/', portfolioAnalysisSharpeRatioHandler)
  .route('/', portfolioConstructionHandler)
  .route('/', portfolioOptimizationHandler)
  .route('/', portfolioOptimizationMeanVarianceHandler)
  .route('/', portfolioSimulationHandler)

export default app
