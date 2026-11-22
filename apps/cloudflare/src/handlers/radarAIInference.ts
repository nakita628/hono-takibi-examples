import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAiInferenceSummaryDimensionRoute,
  getRadarAiInferenceSummaryModelRoute,
  getRadarAiInferenceSummaryTaskRoute,
  getRadarAiInferenceTimeseriesGroupsDimensionRoute,
  getRadarAiInferenceTimeseriesGroupsModelRoute,
  getRadarAiInferenceTimeseriesGroupsTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarAIInferenceHandler = app
  .openapi(getRadarAiInferenceSummaryModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiInferenceSummaryTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiInferenceSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiInferenceTimeseriesGroupsModelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiInferenceTimeseriesGroupsTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAiInferenceTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
