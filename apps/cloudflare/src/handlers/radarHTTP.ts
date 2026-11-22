import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarHttpSummaryBotClassRoute,
  getRadarHttpSummaryDeviceTypeRoute,
  getRadarHttpSummaryDimensionRoute,
  getRadarHttpSummaryHttpProtocolRoute,
  getRadarHttpSummaryHttpVersionRoute,
  getRadarHttpSummaryIpVersionRoute,
  getRadarHttpSummaryOsRoute,
  getRadarHttpSummaryPostQuantumRoute,
  getRadarHttpSummaryTlsVersionRoute,
  getRadarHttpTimeseriesGroupsBotClassRoute,
  getRadarHttpTimeseriesGroupsBrowserFamilyRoute,
  getRadarHttpTimeseriesGroupsBrowserRoute,
  getRadarHttpTimeseriesGroupsDeviceTypeRoute,
  getRadarHttpTimeseriesGroupsDimensionRoute,
  getRadarHttpTimeseriesGroupsHttpProtocolRoute,
  getRadarHttpTimeseriesGroupsHttpVersionRoute,
  getRadarHttpTimeseriesGroupsIpVersionRoute,
  getRadarHttpTimeseriesGroupsOsRoute,
  getRadarHttpTimeseriesGroupsPostQuantumRoute,
  getRadarHttpTimeseriesGroupsTlsVersionRoute,
  getRadarHttpTimeseriesRoute,
  getRadarHttpTopAsesBotClassBotClassRoute,
  getRadarHttpTopAsesBrowserFamilyBrowserFamilyRoute,
  getRadarHttpTopAsesDeviceTypeDeviceTypeRoute,
  getRadarHttpTopAsesHttpProtocolHttpProtocolRoute,
  getRadarHttpTopAsesHttpVersionHttpVersionRoute,
  getRadarHttpTopAsesIpVersionIpVersionRoute,
  getRadarHttpTopAsesOsOsRoute,
  getRadarHttpTopAsesRoute,
  getRadarHttpTopAsesTlsVersionTlsVersionRoute,
  getRadarHttpTopBrowserFamilyRoute,
  getRadarHttpTopBrowserRoute,
  getRadarHttpTopLocationsBotClassBotClassRoute,
  getRadarHttpTopLocationsBrowserFamilyBrowserFamilyRoute,
  getRadarHttpTopLocationsDeviceTypeDeviceTypeRoute,
  getRadarHttpTopLocationsHttpProtocolHttpProtocolRoute,
  getRadarHttpTopLocationsHttpVersionHttpVersionRoute,
  getRadarHttpTopLocationsIpVersionIpVersionRoute,
  getRadarHttpTopLocationsOsOsRoute,
  getRadarHttpTopLocationsRoute,
  getRadarHttpTopLocationsTlsVersionTlsVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarHTTPHandler = app
  .openapi(getRadarHttpSummaryBotClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryDeviceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryHttpProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryHttpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryOsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryPostQuantumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryTlsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpSummaryDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsBotClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsBrowserFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsDeviceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsHttpProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsHttpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsOsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsPostQuantumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsTlsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTimeseriesGroupsDimensionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesBotClassBotClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesBrowserFamilyBrowserFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesDeviceTypeDeviceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesHttpProtocolHttpProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesHttpVersionHttpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesIpVersionIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesOsOsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopAsesTlsVersionTlsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopBrowserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopBrowserFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsBotClassBotClassRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsBrowserFamilyBrowserFamilyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsDeviceTypeDeviceTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsHttpProtocolHttpProtocolRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsHttpVersionHttpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsIpVersionIpVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsOsOsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarHttpTopLocationsTlsVersionTlsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
