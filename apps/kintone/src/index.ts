import { OpenAPIHono } from '@hono/zod-openapi'
import {
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
} from './routes'
import {
  deleteKGuestGuestSpaceIdV1GuestsJsonRouteHandler,
  deleteKGuestGuestSpaceIdV1PluginJsonRouteHandler,
  deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  deleteKGuestGuestSpaceIdV1RecordCommentJsonRouteHandler,
  deleteKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler,
  deleteKGuestGuestSpaceIdV1RecordsJsonRouteHandler,
  deleteKGuestGuestSpaceIdV1SpaceJsonRouteHandler,
  deleteKV1GuestsJsonRouteHandler,
  deleteKV1PluginJsonRouteHandler,
  deleteKV1PreviewAppFormFieldsJsonRouteHandler,
  deleteKV1RecordCommentJsonRouteHandler,
  deleteKV1RecordsCursorJsonRouteHandler,
  deleteKV1RecordsJsonRouteHandler,
  deleteKV1SpaceJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppAclJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppActionsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppAdminNotesJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppCustomizeJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppFormFieldsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppFormLayoutJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppPluginsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppReportsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppSettingsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppsStatisticsJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppStatusJsonRouteHandler,
  getKGuestGuestSpaceIdV1AppViewsJsonRouteHandler,
  getKGuestGuestSpaceIdV1FieldAclJsonRouteHandler,
  getKGuestGuestSpaceIdV1FileJsonRouteHandler,
  getKGuestGuestSpaceIdV1FormJsonRouteHandler,
  getKGuestGuestSpaceIdV1PluginAppsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PluginsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PluginsRequiredJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppAclJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppActionsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppDeployJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppReportsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppStatusJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewAppViewsJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewFieldAclJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewFormJsonRouteHandler,
  getKGuestGuestSpaceIdV1PreviewRecordAclJsonRouteHandler,
  getKGuestGuestSpaceIdV1RecordAclJsonRouteHandler,
  getKGuestGuestSpaceIdV1RecordCommentsJsonRouteHandler,
  getKGuestGuestSpaceIdV1RecordJsonRouteHandler,
  getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRouteHandler,
  getKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler,
  getKGuestGuestSpaceIdV1RecordsJsonRouteHandler,
  getKGuestGuestSpaceIdV1SpaceJsonRouteHandler,
  getKGuestGuestSpaceIdV1SpaceMembersJsonRouteHandler,
  getKGuestGuestSpaceIdV1SpacesStatisticsJsonRouteHandler,
  getKV1AppAclJsonRouteHandler,
  getKV1AppActionsJsonRouteHandler,
  getKV1AppAdminNotesJsonRouteHandler,
  getKV1AppCustomizeJsonRouteHandler,
  getKV1AppFormFieldsJsonRouteHandler,
  getKV1AppFormLayoutJsonRouteHandler,
  getKV1AppJsonRouteHandler,
  getKV1AppNotificationsGeneralJsonRouteHandler,
  getKV1AppNotificationsPerRecordJsonRouteHandler,
  getKV1AppNotificationsReminderJsonRouteHandler,
  getKV1AppPluginsJsonRouteHandler,
  getKV1AppReportsJsonRouteHandler,
  getKV1AppSettingsJsonRouteHandler,
  getKV1AppsJsonRouteHandler,
  getKV1AppsStatisticsJsonRouteHandler,
  getKV1AppStatusJsonRouteHandler,
  getKV1AppViewsJsonRouteHandler,
  getKV1FieldAclJsonRouteHandler,
  getKV1FileJsonRouteHandler,
  getKV1FormJsonRouteHandler,
  getKV1PluginAppsJsonRouteHandler,
  getKV1PluginsJsonRouteHandler,
  getKV1PluginsRequiredJsonRouteHandler,
  getKV1PreviewAppAclJsonRouteHandler,
  getKV1PreviewAppActionsJsonRouteHandler,
  getKV1PreviewAppAdminNotesJsonRouteHandler,
  getKV1PreviewAppCustomizeJsonRouteHandler,
  getKV1PreviewAppDeployJsonRouteHandler,
  getKV1PreviewAppFormFieldsJsonRouteHandler,
  getKV1PreviewAppFormLayoutJsonRouteHandler,
  getKV1PreviewAppNotificationsGeneralJsonRouteHandler,
  getKV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  getKV1PreviewAppNotificationsReminderJsonRouteHandler,
  getKV1PreviewAppPluginsJsonRouteHandler,
  getKV1PreviewAppReportsJsonRouteHandler,
  getKV1PreviewAppSettingsJsonRouteHandler,
  getKV1PreviewAppStatusJsonRouteHandler,
  getKV1PreviewAppViewsJsonRouteHandler,
  getKV1PreviewFieldAclJsonRouteHandler,
  getKV1PreviewFormJsonRouteHandler,
  getKV1PreviewRecordAclJsonRouteHandler,
  getKV1RecordAclJsonRouteHandler,
  getKV1RecordCommentsJsonRouteHandler,
  getKV1RecordJsonRouteHandler,
  getKV1RecordsAclEvaluateJsonRouteHandler,
  getKV1RecordsCursorJsonRouteHandler,
  getKV1RecordsJsonRouteHandler,
  getKV1SpaceJsonRouteHandler,
  getKV1SpaceMembersJsonRouteHandler,
  getKV1SpacesStatisticsJsonRouteHandler,
  postKGuestGuestSpaceIdV1AppMoveJsonRouteHandler,
  postKGuestGuestSpaceIdV1BulkRequestJsonRouteHandler,
  postKGuestGuestSpaceIdV1FileJsonRouteHandler,
  postKGuestGuestSpaceIdV1GuestsJsonRouteHandler,
  postKGuestGuestSpaceIdV1PluginJsonRouteHandler,
  postKGuestGuestSpaceIdV1PreviewAppDeployJsonRouteHandler,
  postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  postKGuestGuestSpaceIdV1PreviewAppJsonRouteHandler,
  postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRouteHandler,
  postKGuestGuestSpaceIdV1RecordCommentJsonRouteHandler,
  postKGuestGuestSpaceIdV1RecordJsonRouteHandler,
  postKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler,
  postKGuestGuestSpaceIdV1RecordsJsonRouteHandler,
  postKGuestGuestSpaceIdV1SearchJsonRouteHandler,
  postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRouteHandler,
  postKGuestGuestSpaceIdV1SpaceThreadJsonRouteHandler,
  postKGuestGuestSpaceIdV1TemplateSpaceJsonRouteHandler,
  postKGuestV1SearchJsonRouteHandler,
  postKV1AppMoveJsonRouteHandler,
  postKV1BulkRequestJsonRouteHandler,
  postKV1FileJsonRouteHandler,
  postKV1GuestsJsonRouteHandler,
  postKV1PluginJsonRouteHandler,
  postKV1PreviewAppDeployJsonRouteHandler,
  postKV1PreviewAppFormFieldsJsonRouteHandler,
  postKV1PreviewAppJsonRouteHandler,
  postKV1PreviewAppPluginsJsonRouteHandler,
  postKV1RecordAsyncTokenJsonRouteHandler,
  postKV1RecordCommentJsonRouteHandler,
  postKV1RecordJsonRouteHandler,
  postKV1RecordsCursorJsonRouteHandler,
  postKV1RecordsJsonRouteHandler,
  postKV1SearchJsonRouteHandler,
  postKV1SpaceThreadCommentJsonRouteHandler,
  postKV1SpaceThreadJsonRouteHandler,
  postKV1TemplateSpaceJsonRouteHandler,
  putKGuestGuestSpaceIdV1AppAclJsonRouteHandler,
  putKGuestGuestSpaceIdV1FieldAclJsonRouteHandler,
  putKGuestGuestSpaceIdV1PluginJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppAclJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppActionsJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppReportsJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppStatusJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewAppViewsJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewFieldAclJsonRouteHandler,
  putKGuestGuestSpaceIdV1PreviewRecordAclJsonRouteHandler,
  putKGuestGuestSpaceIdV1RecordAclJsonRouteHandler,
  putKGuestGuestSpaceIdV1RecordAssigneesJsonRouteHandler,
  putKGuestGuestSpaceIdV1RecordJsonRouteHandler,
  putKGuestGuestSpaceIdV1RecordsJsonRouteHandler,
  putKGuestGuestSpaceIdV1RecordsStatusJsonRouteHandler,
  putKGuestGuestSpaceIdV1RecordStatusJsonRouteHandler,
  putKGuestGuestSpaceIdV1SpaceBodyJsonRouteHandler,
  putKGuestGuestSpaceIdV1SpaceGuestsJsonRouteHandler,
  putKGuestGuestSpaceIdV1SpaceJsonRouteHandler,
  putKGuestGuestSpaceIdV1SpaceMembersJsonRouteHandler,
  putKGuestGuestSpaceIdV1SpaceThreadJsonRouteHandler,
  putKV1AppAclJsonRouteHandler,
  putKV1FieldAclJsonRouteHandler,
  putKV1PluginJsonRouteHandler,
  putKV1PreviewAppAclJsonRouteHandler,
  putKV1PreviewAppActionsJsonRouteHandler,
  putKV1PreviewAppAdminNotesJsonRouteHandler,
  putKV1PreviewAppCustomizeJsonRouteHandler,
  putKV1PreviewAppFormFieldsJsonRouteHandler,
  putKV1PreviewAppFormLayoutJsonRouteHandler,
  putKV1PreviewAppNotificationsGeneralJsonRouteHandler,
  putKV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  putKV1PreviewAppNotificationsReminderJsonRouteHandler,
  putKV1PreviewAppReportsJsonRouteHandler,
  putKV1PreviewAppSettingsJsonRouteHandler,
  putKV1PreviewAppStatusJsonRouteHandler,
  putKV1PreviewAppViewsJsonRouteHandler,
  putKV1PreviewFieldAclJsonRouteHandler,
  putKV1PreviewRecordAclJsonRouteHandler,
  putKV1RecordAclJsonRouteHandler,
  putKV1RecordAssigneesJsonRouteHandler,
  putKV1RecordJsonRouteHandler,
  putKV1RecordsJsonRouteHandler,
  putKV1RecordsStatusJsonRouteHandler,
  putKV1RecordStatusJsonRouteHandler,
  putKV1SpaceBodyJsonRouteHandler,
  putKV1SpaceJsonRouteHandler,
  putKV1SpaceMembersJsonRouteHandler,
  putKV1SpaceThreadJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getKGuestGuestSpaceIdV1AppJsonRoute, getKGuestGuestSpaceIdV1AppJsonRouteHandler)
  .openapi(getKGuestGuestSpaceIdV1AppAclJsonRoute, getKGuestGuestSpaceIdV1AppAclJsonRouteHandler)
  .openapi(putKGuestGuestSpaceIdV1AppAclJsonRoute, putKGuestGuestSpaceIdV1AppAclJsonRouteHandler)
  .openapi(
    getKGuestGuestSpaceIdV1AppActionsJsonRoute,
    getKGuestGuestSpaceIdV1AppActionsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppAdminNotesJsonRoute,
    getKGuestGuestSpaceIdV1AppAdminNotesJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppCustomizeJsonRoute,
    getKGuestGuestSpaceIdV1AppCustomizeJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppFormFieldsJsonRoute,
    getKGuestGuestSpaceIdV1AppFormFieldsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppFormLayoutJsonRoute,
    getKGuestGuestSpaceIdV1AppFormLayoutJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1AppMoveJsonRoute,
    postKGuestGuestSpaceIdV1AppMoveJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRoute,
    getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRoute,
    getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRoute,
    getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppPluginsJsonRoute,
    getKGuestGuestSpaceIdV1AppPluginsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppReportsJsonRoute,
    getKGuestGuestSpaceIdV1AppReportsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppSettingsJsonRoute,
    getKGuestGuestSpaceIdV1AppSettingsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppStatusJsonRoute,
    getKGuestGuestSpaceIdV1AppStatusJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1AppViewsJsonRoute,
    getKGuestGuestSpaceIdV1AppViewsJsonRouteHandler,
  )
  .openapi(getKGuestGuestSpaceIdV1AppsJsonRoute, getKGuestGuestSpaceIdV1AppsJsonRouteHandler)
  .openapi(
    getKGuestGuestSpaceIdV1AppsStatisticsJsonRoute,
    getKGuestGuestSpaceIdV1AppsStatisticsJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1BulkRequestJsonRoute,
    postKGuestGuestSpaceIdV1BulkRequestJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1FieldAclJsonRoute,
    getKGuestGuestSpaceIdV1FieldAclJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1FieldAclJsonRoute,
    putKGuestGuestSpaceIdV1FieldAclJsonRouteHandler,
  )
  .openapi(getKGuestGuestSpaceIdV1FileJsonRoute, getKGuestGuestSpaceIdV1FileJsonRouteHandler)
  .openapi(postKGuestGuestSpaceIdV1FileJsonRoute, postKGuestGuestSpaceIdV1FileJsonRouteHandler)
  .openapi(getKGuestGuestSpaceIdV1FormJsonRoute, getKGuestGuestSpaceIdV1FormJsonRouteHandler)
  .openapi(
    deleteKGuestGuestSpaceIdV1GuestsJsonRoute,
    deleteKGuestGuestSpaceIdV1GuestsJsonRouteHandler,
  )
  .openapi(postKGuestGuestSpaceIdV1GuestsJsonRoute, postKGuestGuestSpaceIdV1GuestsJsonRouteHandler)
  .openapi(
    deleteKGuestGuestSpaceIdV1PluginJsonRoute,
    deleteKGuestGuestSpaceIdV1PluginJsonRouteHandler,
  )
  .openapi(postKGuestGuestSpaceIdV1PluginJsonRoute, postKGuestGuestSpaceIdV1PluginJsonRouteHandler)
  .openapi(putKGuestGuestSpaceIdV1PluginJsonRoute, putKGuestGuestSpaceIdV1PluginJsonRouteHandler)
  .openapi(
    getKGuestGuestSpaceIdV1PluginAppsJsonRoute,
    getKGuestGuestSpaceIdV1PluginAppsJsonRouteHandler,
  )
  .openapi(getKGuestGuestSpaceIdV1PluginsJsonRoute, getKGuestGuestSpaceIdV1PluginsJsonRouteHandler)
  .openapi(
    getKGuestGuestSpaceIdV1PluginsRequiredJsonRoute,
    getKGuestGuestSpaceIdV1PluginsRequiredJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1PreviewAppJsonRoute,
    postKGuestGuestSpaceIdV1PreviewAppJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppAclJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppAclJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppAclJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppAclJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppActionsJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppActionsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppDeployJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute,
    postKGuestGuestSpaceIdV1PreviewAppDeployJsonRouteHandler,
  )
  .openapi(
    deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
    deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
    postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute,
    postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppReportsJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppReportsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppStatusJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppStatusJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute,
    getKGuestGuestSpaceIdV1PreviewAppViewsJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute,
    putKGuestGuestSpaceIdV1PreviewAppViewsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute,
    getKGuestGuestSpaceIdV1PreviewFieldAclJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute,
    putKGuestGuestSpaceIdV1PreviewFieldAclJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewFormJsonRoute,
    getKGuestGuestSpaceIdV1PreviewFormJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute,
    getKGuestGuestSpaceIdV1PreviewRecordAclJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute,
    putKGuestGuestSpaceIdV1PreviewRecordAclJsonRouteHandler,
  )
  .openapi(getKGuestGuestSpaceIdV1RecordJsonRoute, getKGuestGuestSpaceIdV1RecordJsonRouteHandler)
  .openapi(postKGuestGuestSpaceIdV1RecordJsonRoute, postKGuestGuestSpaceIdV1RecordJsonRouteHandler)
  .openapi(putKGuestGuestSpaceIdV1RecordJsonRoute, putKGuestGuestSpaceIdV1RecordJsonRouteHandler)
  .openapi(
    getKGuestGuestSpaceIdV1RecordAclJsonRoute,
    getKGuestGuestSpaceIdV1RecordAclJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1RecordAclJsonRoute,
    putKGuestGuestSpaceIdV1RecordAclJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1RecordAssigneesJsonRoute,
    putKGuestGuestSpaceIdV1RecordAssigneesJsonRouteHandler,
  )
  .openapi(
    deleteKGuestGuestSpaceIdV1RecordCommentJsonRoute,
    deleteKGuestGuestSpaceIdV1RecordCommentJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1RecordCommentJsonRoute,
    postKGuestGuestSpaceIdV1RecordCommentJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1RecordCommentsJsonRoute,
    getKGuestGuestSpaceIdV1RecordCommentsJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1RecordStatusJsonRoute,
    putKGuestGuestSpaceIdV1RecordStatusJsonRouteHandler,
  )
  .openapi(
    deleteKGuestGuestSpaceIdV1RecordsJsonRoute,
    deleteKGuestGuestSpaceIdV1RecordsJsonRouteHandler,
  )
  .openapi(getKGuestGuestSpaceIdV1RecordsJsonRoute, getKGuestGuestSpaceIdV1RecordsJsonRouteHandler)
  .openapi(
    postKGuestGuestSpaceIdV1RecordsJsonRoute,
    postKGuestGuestSpaceIdV1RecordsJsonRouteHandler,
  )
  .openapi(putKGuestGuestSpaceIdV1RecordsJsonRoute, putKGuestGuestSpaceIdV1RecordsJsonRouteHandler)
  .openapi(
    getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRoute,
    getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRouteHandler,
  )
  .openapi(
    deleteKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
    deleteKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
    getKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1RecordsCursorJsonRoute,
    postKGuestGuestSpaceIdV1RecordsCursorJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1RecordsStatusJsonRoute,
    putKGuestGuestSpaceIdV1RecordsStatusJsonRouteHandler,
  )
  .openapi(postKGuestGuestSpaceIdV1SearchJsonRoute, postKGuestGuestSpaceIdV1SearchJsonRouteHandler)
  .openapi(
    deleteKGuestGuestSpaceIdV1SpaceJsonRoute,
    deleteKGuestGuestSpaceIdV1SpaceJsonRouteHandler,
  )
  .openapi(getKGuestGuestSpaceIdV1SpaceJsonRoute, getKGuestGuestSpaceIdV1SpaceJsonRouteHandler)
  .openapi(putKGuestGuestSpaceIdV1SpaceJsonRoute, putKGuestGuestSpaceIdV1SpaceJsonRouteHandler)
  .openapi(
    putKGuestGuestSpaceIdV1SpaceBodyJsonRoute,
    putKGuestGuestSpaceIdV1SpaceBodyJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1SpaceGuestsJsonRoute,
    putKGuestGuestSpaceIdV1SpaceGuestsJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1SpaceMembersJsonRoute,
    getKGuestGuestSpaceIdV1SpaceMembersJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1SpaceMembersJsonRoute,
    putKGuestGuestSpaceIdV1SpaceMembersJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1SpaceThreadJsonRoute,
    postKGuestGuestSpaceIdV1SpaceThreadJsonRouteHandler,
  )
  .openapi(
    putKGuestGuestSpaceIdV1SpaceThreadJsonRoute,
    putKGuestGuestSpaceIdV1SpaceThreadJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRoute,
    postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRouteHandler,
  )
  .openapi(
    getKGuestGuestSpaceIdV1SpacesStatisticsJsonRoute,
    getKGuestGuestSpaceIdV1SpacesStatisticsJsonRouteHandler,
  )
  .openapi(
    postKGuestGuestSpaceIdV1TemplateSpaceJsonRoute,
    postKGuestGuestSpaceIdV1TemplateSpaceJsonRouteHandler,
  )
  .openapi(postKGuestV1SearchJsonRoute, postKGuestV1SearchJsonRouteHandler)
  .openapi(getKV1AppJsonRoute, getKV1AppJsonRouteHandler)
  .openapi(getKV1AppAclJsonRoute, getKV1AppAclJsonRouteHandler)
  .openapi(putKV1AppAclJsonRoute, putKV1AppAclJsonRouteHandler)
  .openapi(getKV1AppActionsJsonRoute, getKV1AppActionsJsonRouteHandler)
  .openapi(getKV1AppAdminNotesJsonRoute, getKV1AppAdminNotesJsonRouteHandler)
  .openapi(getKV1AppCustomizeJsonRoute, getKV1AppCustomizeJsonRouteHandler)
  .openapi(getKV1AppFormFieldsJsonRoute, getKV1AppFormFieldsJsonRouteHandler)
  .openapi(getKV1AppFormLayoutJsonRoute, getKV1AppFormLayoutJsonRouteHandler)
  .openapi(postKV1AppMoveJsonRoute, postKV1AppMoveJsonRouteHandler)
  .openapi(getKV1AppNotificationsGeneralJsonRoute, getKV1AppNotificationsGeneralJsonRouteHandler)
  .openapi(
    getKV1AppNotificationsPerRecordJsonRoute,
    getKV1AppNotificationsPerRecordJsonRouteHandler,
  )
  .openapi(getKV1AppNotificationsReminderJsonRoute, getKV1AppNotificationsReminderJsonRouteHandler)
  .openapi(getKV1AppPluginsJsonRoute, getKV1AppPluginsJsonRouteHandler)
  .openapi(getKV1AppReportsJsonRoute, getKV1AppReportsJsonRouteHandler)
  .openapi(getKV1AppSettingsJsonRoute, getKV1AppSettingsJsonRouteHandler)
  .openapi(getKV1AppStatusJsonRoute, getKV1AppStatusJsonRouteHandler)
  .openapi(getKV1AppViewsJsonRoute, getKV1AppViewsJsonRouteHandler)
  .openapi(getKV1AppsJsonRoute, getKV1AppsJsonRouteHandler)
  .openapi(getKV1AppsStatisticsJsonRoute, getKV1AppsStatisticsJsonRouteHandler)
  .openapi(postKV1BulkRequestJsonRoute, postKV1BulkRequestJsonRouteHandler)
  .openapi(getKV1FieldAclJsonRoute, getKV1FieldAclJsonRouteHandler)
  .openapi(putKV1FieldAclJsonRoute, putKV1FieldAclJsonRouteHandler)
  .openapi(getKV1FileJsonRoute, getKV1FileJsonRouteHandler)
  .openapi(postKV1FileJsonRoute, postKV1FileJsonRouteHandler)
  .openapi(getKV1FormJsonRoute, getKV1FormJsonRouteHandler)
  .openapi(deleteKV1GuestsJsonRoute, deleteKV1GuestsJsonRouteHandler)
  .openapi(postKV1GuestsJsonRoute, postKV1GuestsJsonRouteHandler)
  .openapi(deleteKV1PluginJsonRoute, deleteKV1PluginJsonRouteHandler)
  .openapi(postKV1PluginJsonRoute, postKV1PluginJsonRouteHandler)
  .openapi(putKV1PluginJsonRoute, putKV1PluginJsonRouteHandler)
  .openapi(getKV1PluginAppsJsonRoute, getKV1PluginAppsJsonRouteHandler)
  .openapi(getKV1PluginsJsonRoute, getKV1PluginsJsonRouteHandler)
  .openapi(getKV1PluginsRequiredJsonRoute, getKV1PluginsRequiredJsonRouteHandler)
  .openapi(postKV1PreviewAppJsonRoute, postKV1PreviewAppJsonRouteHandler)
  .openapi(getKV1PreviewAppAclJsonRoute, getKV1PreviewAppAclJsonRouteHandler)
  .openapi(putKV1PreviewAppAclJsonRoute, putKV1PreviewAppAclJsonRouteHandler)
  .openapi(getKV1PreviewAppActionsJsonRoute, getKV1PreviewAppActionsJsonRouteHandler)
  .openapi(putKV1PreviewAppActionsJsonRoute, putKV1PreviewAppActionsJsonRouteHandler)
  .openapi(getKV1PreviewAppAdminNotesJsonRoute, getKV1PreviewAppAdminNotesJsonRouteHandler)
  .openapi(putKV1PreviewAppAdminNotesJsonRoute, putKV1PreviewAppAdminNotesJsonRouteHandler)
  .openapi(getKV1PreviewAppCustomizeJsonRoute, getKV1PreviewAppCustomizeJsonRouteHandler)
  .openapi(putKV1PreviewAppCustomizeJsonRoute, putKV1PreviewAppCustomizeJsonRouteHandler)
  .openapi(getKV1PreviewAppDeployJsonRoute, getKV1PreviewAppDeployJsonRouteHandler)
  .openapi(postKV1PreviewAppDeployJsonRoute, postKV1PreviewAppDeployJsonRouteHandler)
  .openapi(deleteKV1PreviewAppFormFieldsJsonRoute, deleteKV1PreviewAppFormFieldsJsonRouteHandler)
  .openapi(getKV1PreviewAppFormFieldsJsonRoute, getKV1PreviewAppFormFieldsJsonRouteHandler)
  .openapi(postKV1PreviewAppFormFieldsJsonRoute, postKV1PreviewAppFormFieldsJsonRouteHandler)
  .openapi(putKV1PreviewAppFormFieldsJsonRoute, putKV1PreviewAppFormFieldsJsonRouteHandler)
  .openapi(getKV1PreviewAppFormLayoutJsonRoute, getKV1PreviewAppFormLayoutJsonRouteHandler)
  .openapi(putKV1PreviewAppFormLayoutJsonRoute, putKV1PreviewAppFormLayoutJsonRouteHandler)
  .openapi(
    getKV1PreviewAppNotificationsGeneralJsonRoute,
    getKV1PreviewAppNotificationsGeneralJsonRouteHandler,
  )
  .openapi(
    putKV1PreviewAppNotificationsGeneralJsonRoute,
    putKV1PreviewAppNotificationsGeneralJsonRouteHandler,
  )
  .openapi(
    getKV1PreviewAppNotificationsPerRecordJsonRoute,
    getKV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  )
  .openapi(
    putKV1PreviewAppNotificationsPerRecordJsonRoute,
    putKV1PreviewAppNotificationsPerRecordJsonRouteHandler,
  )
  .openapi(
    getKV1PreviewAppNotificationsReminderJsonRoute,
    getKV1PreviewAppNotificationsReminderJsonRouteHandler,
  )
  .openapi(
    putKV1PreviewAppNotificationsReminderJsonRoute,
    putKV1PreviewAppNotificationsReminderJsonRouteHandler,
  )
  .openapi(getKV1PreviewAppPluginsJsonRoute, getKV1PreviewAppPluginsJsonRouteHandler)
  .openapi(postKV1PreviewAppPluginsJsonRoute, postKV1PreviewAppPluginsJsonRouteHandler)
  .openapi(getKV1PreviewAppReportsJsonRoute, getKV1PreviewAppReportsJsonRouteHandler)
  .openapi(putKV1PreviewAppReportsJsonRoute, putKV1PreviewAppReportsJsonRouteHandler)
  .openapi(getKV1PreviewAppSettingsJsonRoute, getKV1PreviewAppSettingsJsonRouteHandler)
  .openapi(putKV1PreviewAppSettingsJsonRoute, putKV1PreviewAppSettingsJsonRouteHandler)
  .openapi(getKV1PreviewAppStatusJsonRoute, getKV1PreviewAppStatusJsonRouteHandler)
  .openapi(putKV1PreviewAppStatusJsonRoute, putKV1PreviewAppStatusJsonRouteHandler)
  .openapi(getKV1PreviewAppViewsJsonRoute, getKV1PreviewAppViewsJsonRouteHandler)
  .openapi(putKV1PreviewAppViewsJsonRoute, putKV1PreviewAppViewsJsonRouteHandler)
  .openapi(getKV1PreviewFieldAclJsonRoute, getKV1PreviewFieldAclJsonRouteHandler)
  .openapi(putKV1PreviewFieldAclJsonRoute, putKV1PreviewFieldAclJsonRouteHandler)
  .openapi(getKV1PreviewFormJsonRoute, getKV1PreviewFormJsonRouteHandler)
  .openapi(getKV1PreviewRecordAclJsonRoute, getKV1PreviewRecordAclJsonRouteHandler)
  .openapi(putKV1PreviewRecordAclJsonRoute, putKV1PreviewRecordAclJsonRouteHandler)
  .openapi(getKV1RecordJsonRoute, getKV1RecordJsonRouteHandler)
  .openapi(postKV1RecordJsonRoute, postKV1RecordJsonRouteHandler)
  .openapi(putKV1RecordJsonRoute, putKV1RecordJsonRouteHandler)
  .openapi(getKV1RecordAclJsonRoute, getKV1RecordAclJsonRouteHandler)
  .openapi(putKV1RecordAclJsonRoute, putKV1RecordAclJsonRouteHandler)
  .openapi(putKV1RecordAssigneesJsonRoute, putKV1RecordAssigneesJsonRouteHandler)
  .openapi(postKV1RecordAsyncTokenJsonRoute, postKV1RecordAsyncTokenJsonRouteHandler)
  .openapi(deleteKV1RecordCommentJsonRoute, deleteKV1RecordCommentJsonRouteHandler)
  .openapi(postKV1RecordCommentJsonRoute, postKV1RecordCommentJsonRouteHandler)
  .openapi(getKV1RecordCommentsJsonRoute, getKV1RecordCommentsJsonRouteHandler)
  .openapi(putKV1RecordStatusJsonRoute, putKV1RecordStatusJsonRouteHandler)
  .openapi(deleteKV1RecordsJsonRoute, deleteKV1RecordsJsonRouteHandler)
  .openapi(getKV1RecordsJsonRoute, getKV1RecordsJsonRouteHandler)
  .openapi(postKV1RecordsJsonRoute, postKV1RecordsJsonRouteHandler)
  .openapi(putKV1RecordsJsonRoute, putKV1RecordsJsonRouteHandler)
  .openapi(getKV1RecordsAclEvaluateJsonRoute, getKV1RecordsAclEvaluateJsonRouteHandler)
  .openapi(deleteKV1RecordsCursorJsonRoute, deleteKV1RecordsCursorJsonRouteHandler)
  .openapi(getKV1RecordsCursorJsonRoute, getKV1RecordsCursorJsonRouteHandler)
  .openapi(postKV1RecordsCursorJsonRoute, postKV1RecordsCursorJsonRouteHandler)
  .openapi(putKV1RecordsStatusJsonRoute, putKV1RecordsStatusJsonRouteHandler)
  .openapi(postKV1SearchJsonRoute, postKV1SearchJsonRouteHandler)
  .openapi(deleteKV1SpaceJsonRoute, deleteKV1SpaceJsonRouteHandler)
  .openapi(getKV1SpaceJsonRoute, getKV1SpaceJsonRouteHandler)
  .openapi(putKV1SpaceJsonRoute, putKV1SpaceJsonRouteHandler)
  .openapi(putKV1SpaceBodyJsonRoute, putKV1SpaceBodyJsonRouteHandler)
  .openapi(getKV1SpaceMembersJsonRoute, getKV1SpaceMembersJsonRouteHandler)
  .openapi(putKV1SpaceMembersJsonRoute, putKV1SpaceMembersJsonRouteHandler)
  .openapi(postKV1SpaceThreadJsonRoute, postKV1SpaceThreadJsonRouteHandler)
  .openapi(putKV1SpaceThreadJsonRoute, putKV1SpaceThreadJsonRouteHandler)
  .openapi(postKV1SpaceThreadCommentJsonRoute, postKV1SpaceThreadCommentJsonRouteHandler)
  .openapi(getKV1SpacesStatisticsJsonRoute, getKV1SpacesStatisticsJsonRouteHandler)
  .openapi(postKV1TemplateSpaceJsonRoute, postKV1TemplateSpaceJsonRouteHandler)

export default app
