import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarDnsSummaryCacheHitRoute,
  getRadarDnsSummaryDimensionRoute,
  getRadarDnsSummaryDnssecAwareRoute,
  getRadarDnsSummaryDnssecE2eRoute,
  getRadarDnsSummaryDnssecRoute,
  getRadarDnsSummaryIpVersionRoute,
  getRadarDnsSummaryMatchingAnswerRoute,
  getRadarDnsSummaryProtocolRoute,
  getRadarDnsSummaryQueryTypeRoute,
  getRadarDnsSummaryResponseCodeRoute,
  getRadarDnsSummaryResponseTtlRoute,
  getRadarDnsTimeseriesGroupsCacheHitRoute,
  getRadarDnsTimeseriesGroupsDimensionRoute,
  getRadarDnsTimeseriesGroupsDnssecAwareRoute,
  getRadarDnsTimeseriesGroupsDnssecE2eRoute,
  getRadarDnsTimeseriesGroupsDnssecRoute,
  getRadarDnsTimeseriesGroupsIpVersionRoute,
  getRadarDnsTimeseriesGroupsMatchingAnswerRoute,
  getRadarDnsTimeseriesGroupsProtocolRoute,
  getRadarDnsTimeseriesGroupsQueryTypeRoute,
  getRadarDnsTimeseriesGroupsResponseCodeRoute,
  getRadarDnsTimeseriesGroupsResponseTtlRoute,
  getRadarDnsTimeseriesRoute,
  getRadarDnsTopAsesRoute,
  getRadarDnsTopLocationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarDNSHandler = app
  .openapi(getRadarDnsSummaryCacheHitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryDnssecAwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryDnssecE2eRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryMatchingAnswerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryQueryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryResponseCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryResponseTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsCacheHitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsDnssecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsDnssecAwareRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsDnssecE2eRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsMatchingAnswerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsQueryTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsResponseCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsResponseTtlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTopAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarDnsTopLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
