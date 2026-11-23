import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetPredictiveScalingForecastRoute,
  postActionGetPredictiveScalingForecastRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetPredictiveScalingForecastHandler = app
  .openapi(getActionGetPredictiveScalingForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetPredictiveScalingForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
