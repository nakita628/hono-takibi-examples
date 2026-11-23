import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteKGuestGuestSpaceIdV1GuestsJsonRoute,
  deleteKGuestGuestSpaceIdV1PluginJsonRoute,
  deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
  deleteKGuestGuestSpaceIdV1RecordCommentJsonRoute,
  deleteKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
  deleteKGuestGuestSpaceIdV1RecordsJsonRoute,
  deleteKGuestGuestSpaceIdV1SpaceJsonRoute,
  deleteKV1GuestsJsonRoute,
  deleteKV1PluginJsonRoute,
  deleteKV1PreviewAppFormFieldsJsonRoute,
  deleteKV1RecordCommentJsonRoute,
  deleteKV1RecordsCursorJsonRoute,
  deleteKV1RecordsJsonRoute,
  deleteKV1SpaceJsonRoute,
  getKGuestGuestSpaceIdV1AppAclJsonRoute,
  getKGuestGuestSpaceIdV1AppActionsJsonRoute,
  getKGuestGuestSpaceIdV1AppAdminNotesJsonRoute,
  getKGuestGuestSpaceIdV1AppCustomizeJsonRoute,
  getKGuestGuestSpaceIdV1AppFormFieldsJsonRoute,
  getKGuestGuestSpaceIdV1AppFormLayoutJsonRoute,
  getKGuestGuestSpaceIdV1AppJsonRoute,
  getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRoute,
  getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRoute,
  getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRoute,
  getKGuestGuestSpaceIdV1AppPluginsJsonRoute,
  getKGuestGuestSpaceIdV1AppReportsJsonRoute,
  getKGuestGuestSpaceIdV1AppSettingsJsonRoute,
  getKGuestGuestSpaceIdV1AppsJsonRoute,
  getKGuestGuestSpaceIdV1AppsStatisticsJsonRoute,
  getKGuestGuestSpaceIdV1AppStatusJsonRoute,
  getKGuestGuestSpaceIdV1AppViewsJsonRoute,
  getKGuestGuestSpaceIdV1FieldAclJsonRoute,
  getKGuestGuestSpaceIdV1FileJsonRoute,
  getKGuestGuestSpaceIdV1FormJsonRoute,
  getKGuestGuestSpaceIdV1PluginAppsJsonRoute,
  getKGuestGuestSpaceIdV1PluginsJsonRoute,
  getKGuestGuestSpaceIdV1PluginsRequiredJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppAclJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute,
  getKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute,
  getKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute,
  getKGuestGuestSpaceIdV1PreviewFormJsonRoute,
  getKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute,
  getKGuestGuestSpaceIdV1RecordAclJsonRoute,
  getKGuestGuestSpaceIdV1RecordCommentsJsonRoute,
  getKGuestGuestSpaceIdV1RecordJsonRoute,
  getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRoute,
  getKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
  getKGuestGuestSpaceIdV1RecordsJsonRoute,
  getKGuestGuestSpaceIdV1SpaceJsonRoute,
  getKGuestGuestSpaceIdV1SpaceMembersJsonRoute,
  getKGuestGuestSpaceIdV1SpacesStatisticsJsonRoute,
  getKV1AppAclJsonRoute,
  getKV1AppActionsJsonRoute,
  getKV1AppAdminNotesJsonRoute,
  getKV1AppCustomizeJsonRoute,
  getKV1AppFormFieldsJsonRoute,
  getKV1AppFormLayoutJsonRoute,
  getKV1AppJsonRoute,
  getKV1AppNotificationsGeneralJsonRoute,
  getKV1AppNotificationsPerRecordJsonRoute,
  getKV1AppNotificationsReminderJsonRoute,
  getKV1AppPluginsJsonRoute,
  getKV1AppReportsJsonRoute,
  getKV1AppSettingsJsonRoute,
  getKV1AppsJsonRoute,
  getKV1AppsStatisticsJsonRoute,
  getKV1AppStatusJsonRoute,
  getKV1AppViewsJsonRoute,
  getKV1FieldAclJsonRoute,
  getKV1FileJsonRoute,
  getKV1FormJsonRoute,
  getKV1PluginAppsJsonRoute,
  getKV1PluginsJsonRoute,
  getKV1PluginsRequiredJsonRoute,
  getKV1PreviewAppAclJsonRoute,
  getKV1PreviewAppActionsJsonRoute,
  getKV1PreviewAppAdminNotesJsonRoute,
  getKV1PreviewAppCustomizeJsonRoute,
  getKV1PreviewAppDeployJsonRoute,
  getKV1PreviewAppFormFieldsJsonRoute,
  getKV1PreviewAppFormLayoutJsonRoute,
  getKV1PreviewAppNotificationsGeneralJsonRoute,
  getKV1PreviewAppNotificationsPerRecordJsonRoute,
  getKV1PreviewAppNotificationsReminderJsonRoute,
  getKV1PreviewAppPluginsJsonRoute,
  getKV1PreviewAppReportsJsonRoute,
  getKV1PreviewAppSettingsJsonRoute,
  getKV1PreviewAppStatusJsonRoute,
  getKV1PreviewAppViewsJsonRoute,
  getKV1PreviewFieldAclJsonRoute,
  getKV1PreviewFormJsonRoute,
  getKV1PreviewRecordAclJsonRoute,
  getKV1RecordAclJsonRoute,
  getKV1RecordCommentsJsonRoute,
  getKV1RecordJsonRoute,
  getKV1RecordsAclEvaluateJsonRoute,
  getKV1RecordsCursorJsonRoute,
  getKV1RecordsJsonRoute,
  getKV1SpaceJsonRoute,
  getKV1SpaceMembersJsonRoute,
  getKV1SpacesStatisticsJsonRoute,
  postKGuestGuestSpaceIdV1AppMoveJsonRoute,
  postKGuestGuestSpaceIdV1BulkRequestJsonRoute,
  postKGuestGuestSpaceIdV1FileJsonRoute,
  postKGuestGuestSpaceIdV1GuestsJsonRoute,
  postKGuestGuestSpaceIdV1PluginJsonRoute,
  postKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute,
  postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
  postKGuestGuestSpaceIdV1PreviewAppJsonRoute,
  postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute,
  postKGuestGuestSpaceIdV1RecordCommentJsonRoute,
  postKGuestGuestSpaceIdV1RecordJsonRoute,
  postKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
  postKGuestGuestSpaceIdV1RecordsJsonRoute,
  postKGuestGuestSpaceIdV1SearchJsonRoute,
  postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRoute,
  postKGuestGuestSpaceIdV1SpaceThreadJsonRoute,
  postKGuestGuestSpaceIdV1TemplateSpaceJsonRoute,
  postKGuestV1SearchJsonRoute,
  postKV1AppMoveJsonRoute,
  postKV1BulkRequestJsonRoute,
  postKV1FileJsonRoute,
  postKV1GuestsJsonRoute,
  postKV1PluginJsonRoute,
  postKV1PreviewAppDeployJsonRoute,
  postKV1PreviewAppFormFieldsJsonRoute,
  postKV1PreviewAppJsonRoute,
  postKV1PreviewAppPluginsJsonRoute,
  postKV1RecordAsyncTokenJsonRoute,
  postKV1RecordCommentJsonRoute,
  postKV1RecordJsonRoute,
  postKV1RecordsCursorJsonRoute,
  postKV1RecordsJsonRoute,
  postKV1SearchJsonRoute,
  postKV1SpaceThreadCommentJsonRoute,
  postKV1SpaceThreadJsonRoute,
  postKV1TemplateSpaceJsonRoute,
  putKGuestGuestSpaceIdV1AppAclJsonRoute,
  putKGuestGuestSpaceIdV1FieldAclJsonRoute,
  putKGuestGuestSpaceIdV1PluginJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppAclJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute,
  putKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute,
  putKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute,
  putKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute,
  putKGuestGuestSpaceIdV1RecordAclJsonRoute,
  putKGuestGuestSpaceIdV1RecordAssigneesJsonRoute,
  putKGuestGuestSpaceIdV1RecordJsonRoute,
  putKGuestGuestSpaceIdV1RecordsJsonRoute,
  putKGuestGuestSpaceIdV1RecordsStatusJsonRoute,
  putKGuestGuestSpaceIdV1RecordStatusJsonRoute,
  putKGuestGuestSpaceIdV1SpaceBodyJsonRoute,
  putKGuestGuestSpaceIdV1SpaceGuestsJsonRoute,
  putKGuestGuestSpaceIdV1SpaceJsonRoute,
  putKGuestGuestSpaceIdV1SpaceMembersJsonRoute,
  putKGuestGuestSpaceIdV1SpaceThreadJsonRoute,
  putKV1AppAclJsonRoute,
  putKV1FieldAclJsonRoute,
  putKV1PluginJsonRoute,
  putKV1PreviewAppAclJsonRoute,
  putKV1PreviewAppActionsJsonRoute,
  putKV1PreviewAppAdminNotesJsonRoute,
  putKV1PreviewAppCustomizeJsonRoute,
  putKV1PreviewAppFormFieldsJsonRoute,
  putKV1PreviewAppFormLayoutJsonRoute,
  putKV1PreviewAppNotificationsGeneralJsonRoute,
  putKV1PreviewAppNotificationsPerRecordJsonRoute,
  putKV1PreviewAppNotificationsReminderJsonRoute,
  putKV1PreviewAppReportsJsonRoute,
  putKV1PreviewAppSettingsJsonRoute,
  putKV1PreviewAppStatusJsonRoute,
  putKV1PreviewAppViewsJsonRoute,
  putKV1PreviewFieldAclJsonRoute,
  putKV1PreviewRecordAclJsonRoute,
  putKV1RecordAclJsonRoute,
  putKV1RecordAssigneesJsonRoute,
  putKV1RecordJsonRoute,
  putKV1RecordsJsonRoute,
  putKV1RecordsStatusJsonRoute,
  putKV1RecordStatusJsonRoute,
  putKV1SpaceBodyJsonRoute,
  putKV1SpaceJsonRoute,
  putKV1SpaceMembersJsonRoute,
  putKV1SpaceThreadJsonRoute,
} from '../routes'

export const getKGuestGuestSpaceIdV1AppJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppAclJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1AppAclJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1AppAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppActionsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppAdminNotesJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppAdminNotesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppCustomizeJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppCustomizeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppFormFieldsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppFormLayoutJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppFormLayoutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1AppMoveJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1AppMoveJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppPluginsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppPluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppReportsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppReportsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppSettingsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppSettingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppStatusJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppViewsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppViewsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1AppsStatisticsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1AppsStatisticsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1BulkRequestJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1BulkRequestJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1FieldAclJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1FieldAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1FieldAclJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1FieldAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1FileJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1FileJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1FileJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1FileJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1FormJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1FormJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1GuestsJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1GuestsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1GuestsJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1GuestsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1PluginJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1PluginJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1PluginJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1PluginJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PluginJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PluginJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PluginAppsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PluginAppsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PluginsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PluginsRequiredJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PluginsRequiredJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1PreviewAppJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1PreviewAppJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppAclJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppAclJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppActionsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppActionsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppDeployJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1PreviewAppDeployJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppReportsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppReportsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppStatusJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppStatusJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewAppViewsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewAppViewsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewFieldAclJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewFieldAclJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewFormJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewFormJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1PreviewRecordAclJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1PreviewRecordAclJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1RecordJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1RecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1RecordJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1RecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1RecordJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1RecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1RecordAclJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1RecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1RecordAclJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1RecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1RecordAssigneesJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1RecordAssigneesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1RecordCommentJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1RecordCommentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1RecordCommentJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1RecordCommentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1RecordCommentsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1RecordCommentsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1RecordStatusJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1RecordStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1RecordsJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1RecordsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1RecordsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1RecordsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1RecordsJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1RecordsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1RecordsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1RecordsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1RecordsCursorJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1RecordsCursorJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1RecordsCursorJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1RecordsStatusJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1RecordsStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1SearchJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1SearchJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKGuestGuestSpaceIdV1SpaceJsonRouteHandler: RouteHandler<
  typeof deleteKGuestGuestSpaceIdV1SpaceJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1SpaceJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1SpaceJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1SpaceJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1SpaceJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1SpaceBodyJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1SpaceBodyJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1SpaceGuestsJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1SpaceGuestsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1SpaceMembersJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1SpaceMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1SpaceMembersJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1SpaceMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1SpaceThreadJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1SpaceThreadJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKGuestGuestSpaceIdV1SpaceThreadJsonRouteHandler: RouteHandler<
  typeof putKGuestGuestSpaceIdV1SpaceThreadJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKGuestGuestSpaceIdV1SpacesStatisticsJsonRouteHandler: RouteHandler<
  typeof getKGuestGuestSpaceIdV1SpacesStatisticsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestGuestSpaceIdV1TemplateSpaceJsonRouteHandler: RouteHandler<
  typeof postKGuestGuestSpaceIdV1TemplateSpaceJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKGuestV1SearchJsonRouteHandler: RouteHandler<
  typeof postKGuestV1SearchJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppJsonRouteHandler: RouteHandler<typeof getKV1AppJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppAclJsonRouteHandler: RouteHandler<typeof getKV1AppAclJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putKV1AppAclJsonRouteHandler: RouteHandler<typeof putKV1AppAclJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1AppActionsJsonRouteHandler: RouteHandler<
  typeof getKV1AppActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppAdminNotesJsonRouteHandler: RouteHandler<
  typeof getKV1AppAdminNotesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppCustomizeJsonRouteHandler: RouteHandler<
  typeof getKV1AppCustomizeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppFormFieldsJsonRouteHandler: RouteHandler<
  typeof getKV1AppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppFormLayoutJsonRouteHandler: RouteHandler<
  typeof getKV1AppFormLayoutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1AppMoveJsonRouteHandler: RouteHandler<typeof postKV1AppMoveJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1AppNotificationsGeneralJsonRouteHandler: RouteHandler<
  typeof getKV1AppNotificationsGeneralJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppNotificationsPerRecordJsonRouteHandler: RouteHandler<
  typeof getKV1AppNotificationsPerRecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppNotificationsReminderJsonRouteHandler: RouteHandler<
  typeof getKV1AppNotificationsReminderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppPluginsJsonRouteHandler: RouteHandler<
  typeof getKV1AppPluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppReportsJsonRouteHandler: RouteHandler<
  typeof getKV1AppReportsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppSettingsJsonRouteHandler: RouteHandler<
  typeof getKV1AppSettingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppStatusJsonRouteHandler: RouteHandler<
  typeof getKV1AppStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppViewsJsonRouteHandler: RouteHandler<typeof getKV1AppViewsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1AppsJsonRouteHandler: RouteHandler<typeof getKV1AppsJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1AppsStatisticsJsonRouteHandler: RouteHandler<
  typeof getKV1AppsStatisticsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1BulkRequestJsonRouteHandler: RouteHandler<
  typeof postKV1BulkRequestJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1FieldAclJsonRouteHandler: RouteHandler<typeof getKV1FieldAclJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putKV1FieldAclJsonRouteHandler: RouteHandler<typeof putKV1FieldAclJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1FileJsonRouteHandler: RouteHandler<typeof getKV1FileJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1FileJsonRouteHandler: RouteHandler<typeof postKV1FileJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1FormJsonRouteHandler: RouteHandler<typeof getKV1FormJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKV1GuestsJsonRouteHandler: RouteHandler<
  typeof deleteKV1GuestsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1GuestsJsonRouteHandler: RouteHandler<typeof postKV1GuestsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteKV1PluginJsonRouteHandler: RouteHandler<
  typeof deleteKV1PluginJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1PluginJsonRouteHandler: RouteHandler<typeof postKV1PluginJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putKV1PluginJsonRouteHandler: RouteHandler<typeof putKV1PluginJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1PluginAppsJsonRouteHandler: RouteHandler<
  typeof getKV1PluginAppsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PluginsJsonRouteHandler: RouteHandler<typeof getKV1PluginsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1PluginsRequiredJsonRouteHandler: RouteHandler<
  typeof getKV1PluginsRequiredJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1PreviewAppJsonRouteHandler: RouteHandler<
  typeof postKV1PreviewAppJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppAclJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppAclJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppActionsJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppActionsJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppActionsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppAdminNotesJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppAdminNotesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppAdminNotesJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppAdminNotesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppCustomizeJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppCustomizeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppCustomizeJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppCustomizeJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppDeployJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppDeployJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1PreviewAppDeployJsonRouteHandler: RouteHandler<
  typeof postKV1PreviewAppDeployJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof deleteKV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof postKV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppFormFieldsJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppFormFieldsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppFormLayoutJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppFormLayoutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppFormLayoutJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppFormLayoutJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppNotificationsGeneralJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppNotificationsGeneralJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppNotificationsGeneralJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppNotificationsGeneralJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppNotificationsPerRecordJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppNotificationsPerRecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppNotificationsPerRecordJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppNotificationsPerRecordJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppNotificationsReminderJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppNotificationsReminderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppNotificationsReminderJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppNotificationsReminderJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppPluginsJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppPluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1PreviewAppPluginsJsonRouteHandler: RouteHandler<
  typeof postKV1PreviewAppPluginsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppReportsJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppReportsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppReportsJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppReportsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppSettingsJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppSettingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppSettingsJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppSettingsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppStatusJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppStatusJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewAppViewsJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewAppViewsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewAppViewsJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewAppViewsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewFieldAclJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewFieldAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewFieldAclJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewFieldAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewFormJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewFormJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1PreviewRecordAclJsonRouteHandler: RouteHandler<
  typeof getKV1PreviewRecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1PreviewRecordAclJsonRouteHandler: RouteHandler<
  typeof putKV1PreviewRecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1RecordJsonRouteHandler: RouteHandler<typeof getKV1RecordJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postKV1RecordJsonRouteHandler: RouteHandler<typeof postKV1RecordJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putKV1RecordJsonRouteHandler: RouteHandler<typeof putKV1RecordJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1RecordAclJsonRouteHandler: RouteHandler<
  typeof getKV1RecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1RecordAclJsonRouteHandler: RouteHandler<
  typeof putKV1RecordAclJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1RecordAssigneesJsonRouteHandler: RouteHandler<
  typeof putKV1RecordAssigneesJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1RecordAsyncTokenJsonRouteHandler: RouteHandler<
  typeof postKV1RecordAsyncTokenJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKV1RecordCommentJsonRouteHandler: RouteHandler<
  typeof deleteKV1RecordCommentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1RecordCommentJsonRouteHandler: RouteHandler<
  typeof postKV1RecordCommentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1RecordCommentsJsonRouteHandler: RouteHandler<
  typeof getKV1RecordCommentsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1RecordStatusJsonRouteHandler: RouteHandler<
  typeof putKV1RecordStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKV1RecordsJsonRouteHandler: RouteHandler<
  typeof deleteKV1RecordsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1RecordsJsonRouteHandler: RouteHandler<typeof getKV1RecordsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postKV1RecordsJsonRouteHandler: RouteHandler<typeof postKV1RecordsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putKV1RecordsJsonRouteHandler: RouteHandler<typeof putKV1RecordsJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1RecordsAclEvaluateJsonRouteHandler: RouteHandler<
  typeof getKV1RecordsAclEvaluateJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteKV1RecordsCursorJsonRouteHandler: RouteHandler<
  typeof deleteKV1RecordsCursorJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1RecordsCursorJsonRouteHandler: RouteHandler<
  typeof getKV1RecordsCursorJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1RecordsCursorJsonRouteHandler: RouteHandler<
  typeof postKV1RecordsCursorJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1RecordsStatusJsonRouteHandler: RouteHandler<
  typeof putKV1RecordsStatusJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1SearchJsonRouteHandler: RouteHandler<typeof postKV1SearchJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteKV1SpaceJsonRouteHandler: RouteHandler<typeof deleteKV1SpaceJsonRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getKV1SpaceJsonRouteHandler: RouteHandler<typeof getKV1SpaceJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1SpaceJsonRouteHandler: RouteHandler<typeof putKV1SpaceJsonRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1SpaceBodyJsonRouteHandler: RouteHandler<
  typeof putKV1SpaceBodyJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1SpaceMembersJsonRouteHandler: RouteHandler<
  typeof getKV1SpaceMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1SpaceMembersJsonRouteHandler: RouteHandler<
  typeof putKV1SpaceMembersJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1SpaceThreadJsonRouteHandler: RouteHandler<
  typeof postKV1SpaceThreadJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putKV1SpaceThreadJsonRouteHandler: RouteHandler<
  typeof putKV1SpaceThreadJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1SpaceThreadCommentJsonRouteHandler: RouteHandler<
  typeof postKV1SpaceThreadCommentJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getKV1SpacesStatisticsJsonRouteHandler: RouteHandler<
  typeof getKV1SpacesStatisticsJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postKV1TemplateSpaceJsonRouteHandler: RouteHandler<
  typeof postKV1TemplateSpaceJsonRoute
> = async (c) => {
  throw new Error('Not implemented')
}
