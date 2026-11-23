import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getStopPointIdArrivalDeparturesRoute,
  getStopPointIdArrivalsRoute,
  getStopPointIdCanReachOnLineLineIdRoute,
  getStopPointIdCrowdingLineRoute,
  getStopPointIdDirectionToToStopPointIdRoute,
  getStopPointIdPlaceTypesRoute,
  getStopPointIdRouteRoute,
  getStopPointIdsDisruptionRoute,
  getStopPointIdsRoute,
  getStopPointMetaCategoriesRoute,
  getStopPointMetaModesRoute,
  getStopPointMetaStopTypesRoute,
  getStopPointModeModesDisruptionRoute,
  getStopPointModeModesRoute,
  getStopPointRoute,
  getStopPointSearchQueryRoute,
  getStopPointSearchRoute,
  getStopPointServiceTypesRoute,
  getStopPointSmsIdRoute,
  getStopPointStopPointIdCarParksRoute,
  getStopPointStopPointIdTaxiRanksRoute,
  getStopPointTypeTypesPagePageRoute,
  getStopPointTypeTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stopPointHandler = app
  .openapi(getStopPointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointMetaCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointMetaModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointMetaStopTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointModeModesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointModeModesDisruptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointSearchQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointServiceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointSmsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointTypeTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointTypeTypesPagePageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdsDisruptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdArrivalDeparturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdArrivalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdCanReachOnLineLineIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdCrowdingLineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdDirectionToToStopPointIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointIdPlaceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointStopPointIdCarParksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStopPointStopPointIdTaxiRanksRoute, (c) => {
    throw new Error('Not implemented')
  })
