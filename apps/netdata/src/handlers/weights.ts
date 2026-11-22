import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1MetricCorrelationsRoute,
  getApiV1WeightsRoute,
  getApiV2WeightsRoute,
  getApiV3WeightsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const weightsHandler = app
  .openapi(getApiV2WeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3WeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1WeightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1MetricCorrelationsRoute, (c) => {
    throw new Error('Not implemented')
  })
