import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLiveTvListingProvidersRoute,
  deleteLiveTvRecordingsRecordingIdRoute,
  deleteLiveTvSeriesTimersTimerIdRoute,
  deleteLiveTvTimersTimerIdRoute,
  deleteLiveTvTunerHostsRoute,
  getLiveTvChannelMappingOptionsRoute,
  getLiveTvChannelsChannelIdRoute,
  getLiveTvChannelsRoute,
  getLiveTvGuideInfoRoute,
  getLiveTvInfoRoute,
  getLiveTvListingProvidersDefaultRoute,
  getLiveTvListingProvidersLineupsRoute,
  getLiveTvListingProvidersSchedulesDirectCountriesRoute,
  getLiveTvLiveRecordingsRecordingIdStreamRoute,
  getLiveTvLiveStreamFilesStreamIdStreamContainerRoute,
  getLiveTvProgramsProgramIdRoute,
  getLiveTvProgramsRecommendedRoute,
  getLiveTvProgramsRoute,
  getLiveTvRecordingsFoldersRoute,
  getLiveTvRecordingsRecordingIdRoute,
  getLiveTvRecordingsRoute,
  getLiveTvSeriesTimersRoute,
  getLiveTvSeriesTimersTimerIdRoute,
  getLiveTvTimersDefaultsRoute,
  getLiveTvTimersRoute,
  getLiveTvTimersTimerIdRoute,
  getLiveTvTunerHostsTypesRoute,
  getLiveTvTunersDiscoverRoute,
  getLiveTvTunersDiscvoverRoute,
  postLiveTvChannelMappingsRoute,
  postLiveTvListingProvidersRoute,
  postLiveTvProgramsRoute,
  postLiveTvSeriesTimersRoute,
  postLiveTvSeriesTimersTimerIdRoute,
  postLiveTvTimersRoute,
  postLiveTvTimersTimerIdRoute,
  postLiveTvTunerHostsRoute,
  postLiveTvTunersTunerIdResetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveTvHandler = app
  .openapi(getLiveTvChannelMappingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvChannelMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvGuideInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvListingProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveTvListingProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvListingProvidersDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvListingProvidersLineupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvListingProvidersSchedulesDirectCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvLiveRecordingsRecordingIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvLiveStreamFilesStreamIdStreamContainerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvProgramsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvProgramsProgramIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvProgramsRecommendedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvRecordingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveTvRecordingsRecordingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvRecordingsFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvSeriesTimersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvSeriesTimersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvSeriesTimersTimerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveTvSeriesTimersTimerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvSeriesTimersTimerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvTimersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvTimersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvTimersTimerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveTvTimersTimerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvTimersTimerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvTimersDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvTunerHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveTvTunerHostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvTunerHostsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveTvTunersTunerIdResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvTunersDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveTvTunersDiscvoverRoute, (c) => {
    throw new Error('Not implemented')
  })
