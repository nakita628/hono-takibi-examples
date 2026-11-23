import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssetsAnalysisAbsorptionRatioRoute,
  postAssetsAnalysisTurbulenceIndexRoute,
  postAssetsCorrelationMatrixBoundsRoute,
  postAssetsCorrelationMatrixDenoisedRoute,
  postAssetsCorrelationMatrixDistanceRoute,
  postAssetsCorrelationMatrixEffectiveRankRoute,
  postAssetsCorrelationMatrixInformativenessRoute,
  postAssetsCorrelationMatrixNearestRoute,
  postAssetsCorrelationMatrixRandomRoute,
  postAssetsCorrelationMatrixRoute,
  postAssetsCorrelationMatrixShrinkageRoute,
  postAssetsCorrelationMatrixTheoryImpliedRoute,
  postAssetsCorrelationMatrixValidationRoute,
  postAssetsCovarianceMatrixEffectiveRankRoute,
  postAssetsCovarianceMatrixExponentiallyWeightedRoute,
  postAssetsCovarianceMatrixRoute,
  postAssetsCovarianceMatrixValidationRoute,
  postAssetsKurtosisRoute,
  postAssetsPricesAdjustedForwardRoute,
  postAssetsPricesAdjustedRoute,
  postAssetsReturnsAverageRoute,
  postAssetsReturnsRoute,
  postAssetsReturnsSimulationBootstrapRoute,
  postAssetsSkewnessRoute,
  postAssetsVarianceRoute,
  postAssetsVolatilityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsHandler = app
  .openapi(postAssetsAnalysisAbsorptionRatioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsAnalysisTurbulenceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixBoundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixDenoisedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixDistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixEffectiveRankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixInformativenessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixNearestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixShrinkageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixTheoryImpliedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCorrelationMatrixValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCovarianceMatrixRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCovarianceMatrixEffectiveRankRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCovarianceMatrixExponentiallyWeightedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsCovarianceMatrixValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsKurtosisRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsPricesAdjustedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsPricesAdjustedForwardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsReturnsAverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsReturnsSimulationBootstrapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsSkewnessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsVarianceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAssetsVolatilityRoute, (c) => {
    throw new Error('Not implemented')
  })
