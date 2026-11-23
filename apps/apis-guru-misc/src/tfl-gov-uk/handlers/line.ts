import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getLineIdRouteSequenceDirectionRoute,
  getLineIdsArrivalsStopPointIdRoute,
  getLineIdsDisruptionRoute,
  getLineIdsRoute,
  getLineIdsRouteRoute,
  getLineIdsStatusRoute,
  getLineIdsStatusStartDateToEndDateRoute,
  getLineIdStopPointsRoute,
  getLineIdTimetableFromStopPointIdRoute,
  getLineIdTimetableFromStopPointIdToToStopPointIdRoute,
  getLineMetaDisruptionCategoriesRoute,
  getLineMetaModesRoute,
  getLineMetaServiceTypesRoute,
  getLineMetaSeverityRoute,
  getLineModeModesDisruptionRoute,
  getLineModeModesRoute,
  getLineModeModesRouteRoute,
  getLineModeModesStatusRoute,
  getLineRouteRoute,
  getLineSearchQueryRoute,
  getLineStatusSeverityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lineHandler = app
  .openapi(getLineMetaDisruptionCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineMetaModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineMetaServiceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineMetaSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineModeModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineModeModesDisruptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineModeModesRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineModeModesStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineStatusSeverityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdsArrivalsStopPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdsDisruptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdsRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdsStatusStartDateToEndDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdRouteSequenceDirectionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdStopPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdTimetableFromStopPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLineIdTimetableFromStopPointIdToToStopPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
