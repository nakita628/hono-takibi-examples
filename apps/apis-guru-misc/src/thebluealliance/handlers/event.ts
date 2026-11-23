import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEventEventKeyAlliancesRoute,
  getEventEventKeyAwardsRoute,
  getEventEventKeyDistrictPointsRoute,
  getEventEventKeyInsightsRoute,
  getEventEventKeyMatchesKeysRoute,
  getEventEventKeyMatchesRoute,
  getEventEventKeyMatchesSimpleRoute,
  getEventEventKeyMatchesTimeseriesRoute,
  getEventEventKeyOprsRoute,
  getEventEventKeyPredictionsRoute,
  getEventEventKeyRankingsRoute,
  getEventEventKeyRoute,
  getEventEventKeySimpleRoute,
  getEventEventKeyTeamsKeysRoute,
  getEventEventKeyTeamsRoute,
  getEventEventKeyTeamsSimpleRoute,
  getEventEventKeyTeamsStatusesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const eventHandler = app
  .openapi(getEventEventKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyAlliancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyAwardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyDistrictPointsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyInsightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyMatchesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyMatchesKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyMatchesSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyMatchesTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyOprsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyPredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyRankingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeySimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyTeamsKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyTeamsSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventEventKeyTeamsStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
