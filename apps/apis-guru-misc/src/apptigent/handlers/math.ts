import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCalculateAbsoluteRoute,
  postCalculateAdditionRoute,
  postCalculateAverageRoute,
  postCalculateCosineRoute,
  postCalculateDivisionRoute,
  postCalculateLogarithmRoute,
  postCalculateMedianRoute,
  postCalculateMinMaxRoute,
  postCalculateModuloRoute,
  postCalculateMultiplicationRoute,
  postCalculateNthRootRoute,
  postCalculatePowerRoute,
  postCalculateSineRoute,
  postCalculateSquareRootRoute,
  postCalculateSubtractionRoute,
  postCalculateSumRoute,
  postCalculateTangentRoute,
  postCalculateVarianceRoute,
  postConvertAngleRoute,
  postConvertAreaRoute,
  postConvertDistanceRoute,
  postConvertDurationRoute,
  postConvertEnergyRoute,
  postConvertPowerRoute,
  postConvertSpeedRoute,
  postConvertTemperatureRoute,
  postConvertVolumeRoute,
  postConvertWeightRoute,
  postRandomNumberRoute,
  postRoundNumberRoute,
  postStandardDeviationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mathHandler = app
  .openapi(postCalculateAbsoluteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateAdditionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateAverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateCosineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateDivisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateLogarithmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateMedianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateMinMaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateModuloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateMultiplicationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateNthRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculatePowerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateSineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateSquareRootRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateSubtractionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateSumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateTangentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCalculateVarianceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertAngleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertAreaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertDistanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertDurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertEnergyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertPowerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertSpeedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertTemperatureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertVolumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConvertWeightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRandomNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRoundNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStandardDeviationRoute, (c) => {
    throw new Error('Not implemented')
  })
