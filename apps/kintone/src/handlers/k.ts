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
} from '../routes'

const app = new OpenAPIHono()

export const kHandler = app
  .openapi(getKGuestGuestSpaceIdV1AppJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1AppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppAdminNotesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppCustomizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppFormLayoutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1AppMoveJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppNotificationsGeneralJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppNotificationsPerRecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppNotificationsReminderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppPluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppReportsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppSettingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppViewsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1AppsStatisticsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1BulkRequestJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1FormJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PluginAppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PluginsRequiredJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1PreviewAppJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppAdminNotesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppCustomizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1PreviewAppDeployJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppFormLayoutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppNotificationsGeneralJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppNotificationsPerRecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppNotificationsReminderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1PreviewAppPluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppReportsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppSettingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewAppViewsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewFieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewFormJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1PreviewRecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordAssigneesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordCommentsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordsAclEvaluateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1RecordsStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1SearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKGuestGuestSpaceIdV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceBodyJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceGuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKGuestGuestSpaceIdV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1SpaceThreadCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKGuestGuestSpaceIdV1SpacesStatisticsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestGuestSpaceIdV1TemplateSpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKGuestV1SearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1AppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppAdminNotesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppCustomizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppFormLayoutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1AppMoveJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppNotificationsGeneralJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppNotificationsPerRecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppNotificationsReminderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppPluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppReportsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppSettingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppViewsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1AppsStatisticsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1BulkRequestJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1FieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1FileJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1FormJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1GuestsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PluginJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PluginAppsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PluginsRequiredJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1PreviewAppJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppActionsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppAdminNotesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppAdminNotesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppCustomizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppCustomizeJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppDeployJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1PreviewAppDeployJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppFormFieldsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppFormLayoutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppFormLayoutJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppNotificationsGeneralJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppNotificationsGeneralJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppNotificationsPerRecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppNotificationsPerRecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppNotificationsReminderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppNotificationsReminderJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppPluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1PreviewAppPluginsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppReportsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppReportsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppSettingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppSettingsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewAppViewsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewAppViewsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewFieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewFieldAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewFormJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1PreviewRecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1PreviewRecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordAclJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordAssigneesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordAsyncTokenJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordCommentsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordsAclEvaluateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1RecordsCursorJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1RecordsStatusJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1SearchJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteKV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceBodyJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putKV1SpaceThreadJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1SpaceThreadCommentJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getKV1SpacesStatisticsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postKV1TemplateSpaceJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
