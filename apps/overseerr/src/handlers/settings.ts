import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSettingsDiscoverSliderIdRoute,
  deleteSettingsRadarrRadarrIdRoute,
  deleteSettingsSonarrSonarrIdRoute,
  getSettingsAboutRoute,
  getSettingsCacheRoute,
  getSettingsDiscoverResetRoute,
  getSettingsDiscoverRoute,
  getSettingsJobsRoute,
  getSettingsLogsRoute,
  getSettingsMainRoute,
  getSettingsNotificationsDiscordRoute,
  getSettingsNotificationsEmailRoute,
  getSettingsNotificationsGotifyRoute,
  getSettingsNotificationsLunaseaRoute,
  getSettingsNotificationsPushbulletRoute,
  getSettingsNotificationsPushoverRoute,
  getSettingsNotificationsPushoverSoundsRoute,
  getSettingsNotificationsSlackRoute,
  getSettingsNotificationsTelegramRoute,
  getSettingsNotificationsWebhookRoute,
  getSettingsNotificationsWebpushRoute,
  getSettingsPlexDevicesServersRoute,
  getSettingsPlexLibraryRoute,
  getSettingsPlexRoute,
  getSettingsPlexSyncRoute,
  getSettingsPlexUsersRoute,
  getSettingsPublicRoute,
  getSettingsRadarrRadarrIdProfilesRoute,
  getSettingsRadarrRoute,
  getSettingsSonarrRoute,
  getSettingsTautulliRoute,
  postSettingsCacheCacheIdFlushRoute,
  postSettingsDiscoverAddRoute,
  postSettingsDiscoverRoute,
  postSettingsInitializeRoute,
  postSettingsJobsJobIdCancelRoute,
  postSettingsJobsJobIdRunRoute,
  postSettingsJobsJobIdScheduleRoute,
  postSettingsMainRegenerateRoute,
  postSettingsMainRoute,
  postSettingsNotificationsDiscordRoute,
  postSettingsNotificationsDiscordTestRoute,
  postSettingsNotificationsEmailRoute,
  postSettingsNotificationsEmailTestRoute,
  postSettingsNotificationsGotifyRoute,
  postSettingsNotificationsGotifyTestRoute,
  postSettingsNotificationsLunaseaRoute,
  postSettingsNotificationsLunaseaTestRoute,
  postSettingsNotificationsPushbulletRoute,
  postSettingsNotificationsPushbulletTestRoute,
  postSettingsNotificationsPushoverRoute,
  postSettingsNotificationsPushoverTestRoute,
  postSettingsNotificationsSlackRoute,
  postSettingsNotificationsSlackTestRoute,
  postSettingsNotificationsTelegramRoute,
  postSettingsNotificationsTelegramTestRoute,
  postSettingsNotificationsWebhookRoute,
  postSettingsNotificationsWebhookTestRoute,
  postSettingsNotificationsWebpushRoute,
  postSettingsNotificationsWebpushTestRoute,
  postSettingsPlexRoute,
  postSettingsPlexSyncRoute,
  postSettingsRadarrRoute,
  postSettingsRadarrTestRoute,
  postSettingsSonarrRoute,
  postSettingsSonarrTestRoute,
  postSettingsTautulliRoute,
  putSettingsDiscoverSliderIdRoute,
  putSettingsRadarrRadarrIdRoute,
  putSettingsSonarrSonarrIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const settingsHandler = app
  .openapi(getSettingsMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsMainRegenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPlexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsPlexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPlexLibraryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPlexSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsPlexSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPlexDevicesServersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPlexUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsTautulliRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsTautulliRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRadarrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRadarrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsRadarrTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsRadarrRadarrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsRadarrRadarrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsRadarrRadarrIdProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsSonarrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsSonarrRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsSonarrTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsSonarrSonarrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsSonarrSonarrIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsPublicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsInitializeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsJobsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsJobsJobIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsJobsJobIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsJobsJobIdScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsCacheCacheIdFlushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsLogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsEmailTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsDiscordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsDiscordTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsLunaseaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsLunaseaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsLunaseaTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsPushbulletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsPushbulletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsPushbulletTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsPushoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsPushoverTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsPushoverSoundsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsGotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsGotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsGotifyTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsSlackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsSlackTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsTelegramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsTelegramTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsWebpushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsWebpushRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsWebpushTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsNotificationsWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsWebhookRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsNotificationsWebhookTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsDiscoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putSettingsDiscoverSliderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSettingsDiscoverSliderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsDiscoverAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsDiscoverResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSettingsAboutRoute, (c) => {
    throw new Error('Not implemented')
  })
