import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from '../routes'

const app = new OpenAPIHono()

export const assetsCorrelationMatrixHandler = app
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
