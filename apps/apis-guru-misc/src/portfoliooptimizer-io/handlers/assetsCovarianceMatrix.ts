import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postAssetsCovarianceMatrixEffectiveRankRoute,
  postAssetsCovarianceMatrixExponentiallyWeightedRoute,
  postAssetsCovarianceMatrixRoute,
  postAssetsCovarianceMatrixValidationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const assetsCovarianceMatrixHandler = app
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
