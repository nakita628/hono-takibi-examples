import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarAs112SummaryDimensionRoute,
  getRadarAs112SummaryDnssecRoute,
  getRadarAs112SummaryEdnsRoute,
  getRadarAs112SummaryIpVersionRoute,
  getRadarAs112SummaryProtocolRoute,
  getRadarAs112SummaryQueryTypeRoute,
  getRadarAs112SummaryResponseCodesRoute,
  getRadarAs112TimeseriesGroupsDimensionRoute,
  getRadarAs112TimeseriesGroupsDnssecRoute,
  getRadarAs112TimeseriesGroupsEdnsRoute,
  getRadarAs112TimeseriesGroupsIpVersionRoute,
  getRadarAs112TimeseriesGroupsProtocolRoute,
  getRadarAs112TimeseriesGroupsQueryTypeRoute,
  getRadarAs112TimeseriesGroupsResponseCodesRoute,
  getRadarAs112TimeseriesRoute,
  getRadarAs112TopLocationsDnssecDnssecRoute,
  getRadarAs112TopLocationsEdnsEdnsRoute,
  getRadarAs112TopLocationsIpVersionIpVersionRoute,
  getRadarAs112TopLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarAS112Handler = app
  .openapi(getRadarAs112SummaryDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112SummaryEdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112SummaryIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112SummaryProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112SummaryQueryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112SummaryResponseCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112SummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsEdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsQueryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsResponseCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TopLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TopLocationsDnssecDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TopLocationsEdnsEdnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarAs112TopLocationsIpVersionIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
