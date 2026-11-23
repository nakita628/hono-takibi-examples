import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute,
  deleteOcsV2PhpAppsAppApiApiV1ExAppConfigRoute,
  deleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute,
  deleteOcsV2PhpAppsAppApiApiV1OccCommandRoute,
  deleteOcsV2PhpAppsAppApiApiV1SetupCheckRoute,
  deleteOcsV2PhpAppsAppApiApiV1TalkBotRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiInitialStateRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiScriptRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiSettingsRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiStyleRoute,
  deleteOcsV2PhpAppsAppApiApiV1UiTopMenuRoute,
  getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute,
  getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteRoute,
  getOcsV2PhpAppsAppApiApiV1OccCommandRoute,
  getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute,
  getOcsV2PhpAppsAppApiApiV1UiInitialStateRoute,
  getOcsV2PhpAppsAppApiApiV1UiScriptRoute,
  getOcsV2PhpAppsAppApiApiV1UiSettingsRoute,
  getOcsV2PhpAppsAppApiApiV1UiStyleRoute,
  getOcsV2PhpAppsAppApiApiV1UiTopMenuRoute,
  getOcsV2PhpAppsAppApiApiV1UsersRoute,
  getOcsV2PhpAppsAppApiExAppStateRoute,
  postOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppConfigRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesRoute,
  postOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute,
  postOcsV2PhpAppsAppApiApiV1LogRoute,
  postOcsV2PhpAppsAppApiApiV1NotificationRoute,
  postOcsV2PhpAppsAppApiApiV1OccCommandRoute,
  postOcsV2PhpAppsAppApiApiV1SetupCheckRoute,
  postOcsV2PhpAppsAppApiApiV1TalkBotRoute,
  postOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteRoute,
  postOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute,
  postOcsV2PhpAppsAppApiApiV1UiInitialStateRoute,
  postOcsV2PhpAppsAppApiApiV1UiScriptRoute,
  postOcsV2PhpAppsAppApiApiV1UiSettingsRoute,
  postOcsV2PhpAppsAppApiApiV1UiStyleRoute,
  postOcsV2PhpAppsAppApiApiV1UiTopMenuRoute,
  postOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuRoute,
  putOcsV2PhpAppsAppApiAppsStatusAppIdRoute,
  putOcsV2PhpAppsAppApiExAppStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ocsHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1LogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsAppApiAppsStatusAppIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsAppApiExAppStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiExAppStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1InfoNextcloudUrlAbsoluteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1ExAppConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppConfigGetValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1ExAppPreferenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1ExAppPreferenceGetValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1NotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1OccCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1OccCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1OccCommandRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1TalkBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1TalkBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV2UiFilesActionsMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiTopMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiTopMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiTopMenuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiInitialStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiInitialStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiInitialStateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiScriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiStyleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiStyleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiStyleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1UiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1UiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1UiSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsAppApiApiV1AiProviderTaskProcessingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1SetupCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1SetupCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
