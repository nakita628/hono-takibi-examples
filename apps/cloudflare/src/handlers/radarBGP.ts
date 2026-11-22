import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRadarBgpHijacksEventsRoute,
  getRadarBgpIpsTimeseriesRoute,
  getRadarBgpIpsTopAsesRoute,
  getRadarBgpLeaksEventsRoute,
  getRadarBgpRoutesAsesRoute,
  getRadarBgpRoutesMoasRoute,
  getRadarBgpRoutesPathsAsnRoute,
  getRadarBgpRoutesPfx2asRoute,
  getRadarBgpRoutesRealtimeRoute,
  getRadarBgpRoutesStatsRoute,
  getRadarBgpRoutesUpstreamsAsnTimeseriesRoute,
  getRadarBgpRpkiAspaChangesRoute,
  getRadarBgpRpkiAspaSnapshotRoute,
  getRadarBgpRpkiAspaTimeseriesRoute,
  getRadarBgpRpkiRoasTimeseriesRoute,
  getRadarBgpTimeseriesRoute,
  getRadarBgpTopAsesPrefixesRoute,
  getRadarBgpTopAsesRoute,
  getRadarBgpTopPrefixesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const radarBGPHandler = app
  .openapi(getRadarBgpHijacksEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpIpsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpIpsTopAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpLeaksEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesMoasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesPathsAsnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesPfx2asRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRoutesUpstreamsAsnTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRpkiAspaChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRpkiAspaSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRpkiAspaTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpRpkiRoasTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpTopAsesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpTopAsesPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRadarBgpTopPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
