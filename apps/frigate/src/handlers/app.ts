import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAudioLabelsRoute,
  getCategorizedObjectNamesRoute,
  getConfigRawPathsRoute,
  getConfigRawRoute,
  getConfigRoute,
  getConfigSchemaJsonRoute,
  getDebugReplayStatusRoute,
  getFfmpegPresetsRoute,
  getGenaiModelsRoute,
  getGenaiRolesRoute,
  getLabelsRoute,
  getLogsServiceRoute,
  getMediaSyncCurrentRoute,
  getMediaSyncStatusJobIdRoute,
  getMetricsRoute,
  getNvinfoRoute,
  getPlusModelsRoute,
  getProfileActiveRoute,
  getProfilesRoute,
  getRecognizedLicensePlatesRoute,
  getRoute,
  getStatsHistoryRoute,
  getStatsRoute,
  getSubLabelsRoute,
  getTimelineHourlyRoute,
  getTimelineRoute,
  getVainfoRoute,
  getVersionRoute,
  postConfigSaveRoute,
  postDebugReplayStartFromExportRoute,
  postDebugReplayStartRoute,
  postDebugReplayStopRoute,
  postGenaiProbeRoute,
  postMediaSyncRoute,
  postPlusValidateRoute,
  postRestartRoute,
  putConfigSetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appHandler = app
  .openapi(getRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigSchemaJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStatsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenaiModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGenaiRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postGenaiProbeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProfileActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFfmpegPresetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRawPathsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigRawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigSaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putConfigSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVainfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getNvinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLogsServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMediaSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaSyncCurrentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMediaSyncStatusJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSubLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategorizedObjectNamesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlusModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPlusValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRecognizedLicensePlatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimelineHourlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebugReplayStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebugReplayStartFromExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDebugReplayStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDebugReplayStopRoute, (c) => {
    throw new Error('Not implemented')
  })
