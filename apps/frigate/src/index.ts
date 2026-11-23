import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCameraNameRegionGridRoute,
  deleteCamerasCameraNameRoute,
  deleteCasesCaseIdRoute,
  deleteClassificationNameRoute,
  deleteEventsEventIdRetainRoute,
  deleteEventsEventIdRoute,
  deleteEventsIndexRoute,
  deleteGo2rtcStreamsStreamNameRoute,
  deleteNoticesHiddenRoute,
  deleteNoticesNoticeIdHiddenRoute,
  deleteRecordingsStartStartEndEndRoute,
  deleteReviewReviewIdViewedRoute,
  deleteTriggerEmbeddingCameraNameNameRoute,
  deleteUsersUsernameRoute,
  deleteVlmMonitorRoute,
  getAnalyticsPreviewRoute,
  getAudioLabelsRoute,
  getAuthFirstTimeLoginRoute,
  getAuthRoute,
  getCameraNameGridJpgRoute,
  getCameraNameLabelBestJpgRoute,
  getCameraNameLabelClipMp4Route,
  getCameraNameLabelSnapshotJpgRoute,
  getCameraNameLabelThumbnailJpgRoute,
  getCameraNameLatestExtensionRoute,
  getCameraNamePtzInfoRoute,
  getCameraNameRecordingsCoverageRoute,
  getCameraNameRecordingsFrameTimeSnapshotFormatRoute,
  getCameraNameRecordingsRoute,
  getCameraNameRecordingsSummaryRoute,
  getCameraNameRoute,
  getCameraNameSearchMotionJobIdRoute,
  getCameraNameStartStartTsEndEndTsClipMp4Route,
  getCameraNameStartStartTsEndEndTsPreviewGifRoute,
  getCameraNameStartStartTsEndEndTsPreviewMp4Route,
  getCasesCaseIdDownloadRoute,
  getCasesCaseIdRoute,
  getCasesRoute,
  getCategorizedObjectNamesRoute,
  getChatToolsRoute,
  getClassificationAttributesRoute,
  getClassificationNameDatasetRoute,
  getClassificationNameTrainRoute,
  getConfigRawPathsRoute,
  getConfigRawRoute,
  getConfigRoute,
  getConfigSchemaJsonRoute,
  getDebugReplayStatusRoute,
  getEventIdsRoute,
  getEventsEventIdClipMp4Route,
  getEventsEventIdPreviewGifRoute,
  getEventsEventIdRoute,
  getEventsEventIdSnapshotCleanWebpRoute,
  getEventsEventIdSnapshotJpgRoute,
  getEventsEventIdThumbnailExtensionRoute,
  getEventsExploreRoute,
  getEventsRoute,
  getEventsSearchRoute,
  getEventsSummaryRoute,
  getExportsExportIdRoute,
  getExportsRoute,
  getFacesRoute,
  getFfmpegPresetsRoute,
  getFfprobeRoute,
  getFfprobeSnapshotRoute,
  getGenaiModelsRoute,
  getGenaiRolesRoute,
  getGo2rtcStreamsRoute,
  getGo2rtcStreamsStreamNameBitrateRoute,
  getGo2rtcStreamsStreamNameRoute,
  getHardwareHwaccelRoute,
  getHardwareProbeRoute,
  getJobsExportExportIdRoute,
  getJobsExportRoute,
  getKeyframeAnalysisRoute,
  getLabelsRoute,
  getLogoutRoute,
  getLogsServiceRoute,
  getMediaSyncCurrentRoute,
  getMediaSyncStatusJobIdRoute,
  getMetricsRoute,
  getNoticesMutedChecksRoute,
  getNoticesRoute,
  getNoticesStatsRoute,
  getNotificationsPubkeyRoute,
  getNvinfoRoute,
  getOnvifProbeRoute,
  getPlusModelsRoute,
  getPreviewCameraNameStartStartTsEndEndTsFramesRoute,
  getPreviewCameraNameStartStartTsEndEndTsRoute,
  getPreviewFileNameThumbnailJpgRoute,
  getPreviewFileNameThumbnailWebpRoute,
  getPreviewYearMonthDayHourCameraNameTzNameRoute,
  getProfileActiveRoute,
  getProfileRoute,
  getProfilesRoute,
  getRecognizedLicensePlatesRoute,
  getRecordingsStorageRoute,
  getRecordingsSummaryRoute,
  getRecordingsUnavailableRoute,
  getReolinkDetectRoute,
  getReviewActivityMotionRoute,
  getReviewEventEventIdRoute,
  getReviewEventIdPreviewRoute,
  getReviewIdsRoute,
  getReviewReviewIdClipMp4Route,
  getReviewReviewIdRoute,
  getReviewRoute,
  getReviewSummaryRoute,
  getRoute,
  getStatsHistoryRoute,
  getStatsRoute,
  getSubLabelsRoute,
  getTimelineHourlyRoute,
  getTimelineRoute,
  getTriggersStatusCameraNameRoute,
  getUsersRoute,
  getVainfoRoute,
  getVersionRoute,
  getVlmMonitorRoute,
  getVodCameraNameStartStartTsEndEndTsRoute,
  getVodCameraNameStreamStartStartTsEndEndTsRoute,
  getVodClipCameraNameStartStartTsEndEndTsRoute,
  getVodEventEventIdRoute,
  getVodYearMonthDayHourCameraNameRoute,
  getVodYearMonthDayHourCameraNameTzNameRoute,
  patchCasesCaseIdRoute,
  patchExportEventIdRenameRoute,
  postCameraNamePlusFrameTimeRoute,
  postCameraNameSearchMotionJobIdCancelRoute,
  postCameraNameSearchMotionRoute,
  postCasesRoute,
  postChatCompletionRoute,
  postChatExecuteRoute,
  postClassificationGenerateExamplesObjectRoute,
  postClassificationGenerateExamplesStateRoute,
  postClassificationNameDatasetCategorizeRoute,
  postClassificationNameDatasetCategoryCreateRoute,
  postClassificationNameDatasetCategoryDeleteRoute,
  postClassificationNameDatasetCategoryReclassifyRoute,
  postClassificationNameTrainDeleteRoute,
  postClassificationNameTrainRoute,
  postConfigSaveRoute,
  postDebugReplayStartFromExportRoute,
  postDebugReplayStartRoute,
  postDebugReplayStopRoute,
  postDescriptionGenerateRoute,
  postEventsCameraNameLabelCreateRoute,
  postEventsEventIdAttributesRoute,
  postEventsEventIdDescriptionRoute,
  postEventsEventIdPlusRoute,
  postEventsEventIdRecognizedLicensePlateRoute,
  postEventsEventIdRetainRoute,
  postEventsEventIdSubLabelRoute,
  postExportCameraNameStartStartTimeEndEndTimeRoute,
  postExportCustomCameraNameStartStartTimeEndEndTimeRoute,
  postExportsBatchRoute,
  postExportsDeleteRoute,
  postExportsReassignRoute,
  postFacesNameCreateRoute,
  postFacesNameDeleteRoute,
  postFacesNameReclassifyRoute,
  postFacesNameRegisterRoute,
  postFacesRecognizeRoute,
  postFacesReprocessRoute,
  postFacesTrainNameClassifyRoute,
  postGenaiProbeRoute,
  postLoginRoute,
  postMediaSyncRoute,
  postNoticesNoticeIdAcknowledgeRoute,
  postNoticesNoticeIdMuteRoute,
  postNotificationsRegisterRoute,
  postPlusValidateRoute,
  postRestartRoute,
  postReviewsDeleteRoute,
  postReviewSummarizeStartStartTsEndEndTsRoute,
  postReviewsViewedRoute,
  postTriggerEmbeddingRoute,
  postUsersRoute,
  postVlmMonitorRoute,
  putAudioTranscribeRoute,
  putCameraCameraNameSetFeatureRoute,
  putCameraCameraNameSetFeatureSubCommandRoute,
  putClassificationNameDatasetOldCategoryRenameRoute,
  putConfigSetRoute,
  putEventsEventIdDescriptionRegenerateRoute,
  putEventsEventIdEndRoute,
  putEventsEventIdFalsePositiveRoute,
  putFacesOldNameRenameRoute,
  putGo2rtcStreamsStreamNameRoute,
  putLprReprocessRoute,
  putReindexRoute,
  putReviewReviewIdRegenerateDescriptionRoute,
  putTriggerEmbeddingCameraNameNameRoute,
  putUsersUsernamePasswordRoute,
  putUsersUsernameRoleRoute,
} from './routes'
import {
  deleteCameraNameRegionGridRouteHandler,
  deleteCamerasCameraNameRouteHandler,
  deleteCasesCaseIdRouteHandler,
  deleteClassificationNameRouteHandler,
  deleteEventsEventIdRetainRouteHandler,
  deleteEventsEventIdRouteHandler,
  deleteEventsIndexRouteHandler,
  deleteGo2rtcStreamsStreamNameRouteHandler,
  deleteNoticesHiddenRouteHandler,
  deleteNoticesNoticeIdHiddenRouteHandler,
  deleteRecordingsStartStartEndEndRouteHandler,
  deleteReviewReviewIdViewedRouteHandler,
  deleteTriggerEmbeddingCameraNameNameRouteHandler,
  deleteUsersUsernameRouteHandler,
  deleteVlmMonitorRouteHandler,
  getAnalyticsPreviewRouteHandler,
  getAudioLabelsRouteHandler,
  getAuthFirstTimeLoginRouteHandler,
  getAuthRouteHandler,
  getCameraNameGridJpgRouteHandler,
  getCameraNameLabelBestJpgRouteHandler,
  getCameraNameLabelClipMp4RouteHandler,
  getCameraNameLabelSnapshotJpgRouteHandler,
  getCameraNameLabelThumbnailJpgRouteHandler,
  getCameraNameLatestExtensionRouteHandler,
  getCameraNamePtzInfoRouteHandler,
  getCameraNameRecordingsCoverageRouteHandler,
  getCameraNameRecordingsFrameTimeSnapshotFormatRouteHandler,
  getCameraNameRecordingsRouteHandler,
  getCameraNameRecordingsSummaryRouteHandler,
  getCameraNameRouteHandler,
  getCameraNameSearchMotionJobIdRouteHandler,
  getCameraNameStartStartTsEndEndTsClipMp4RouteHandler,
  getCameraNameStartStartTsEndEndTsPreviewGifRouteHandler,
  getCameraNameStartStartTsEndEndTsPreviewMp4RouteHandler,
  getCasesCaseIdDownloadRouteHandler,
  getCasesCaseIdRouteHandler,
  getCasesRouteHandler,
  getCategorizedObjectNamesRouteHandler,
  getChatToolsRouteHandler,
  getClassificationAttributesRouteHandler,
  getClassificationNameDatasetRouteHandler,
  getClassificationNameTrainRouteHandler,
  getConfigRawPathsRouteHandler,
  getConfigRawRouteHandler,
  getConfigRouteHandler,
  getConfigSchemaJsonRouteHandler,
  getDebugReplayStatusRouteHandler,
  getEventIdsRouteHandler,
  getEventsEventIdClipMp4RouteHandler,
  getEventsEventIdPreviewGifRouteHandler,
  getEventsEventIdRouteHandler,
  getEventsEventIdSnapshotCleanWebpRouteHandler,
  getEventsEventIdSnapshotJpgRouteHandler,
  getEventsEventIdThumbnailExtensionRouteHandler,
  getEventsExploreRouteHandler,
  getEventsRouteHandler,
  getEventsSearchRouteHandler,
  getEventsSummaryRouteHandler,
  getExportsExportIdRouteHandler,
  getExportsRouteHandler,
  getFacesRouteHandler,
  getFfmpegPresetsRouteHandler,
  getFfprobeRouteHandler,
  getFfprobeSnapshotRouteHandler,
  getGenaiModelsRouteHandler,
  getGenaiRolesRouteHandler,
  getGo2rtcStreamsRouteHandler,
  getGo2rtcStreamsStreamNameBitrateRouteHandler,
  getGo2rtcStreamsStreamNameRouteHandler,
  getHardwareHwaccelRouteHandler,
  getHardwareProbeRouteHandler,
  getJobsExportExportIdRouteHandler,
  getJobsExportRouteHandler,
  getKeyframeAnalysisRouteHandler,
  getLabelsRouteHandler,
  getLogoutRouteHandler,
  getLogsServiceRouteHandler,
  getMediaSyncCurrentRouteHandler,
  getMediaSyncStatusJobIdRouteHandler,
  getMetricsRouteHandler,
  getNoticesMutedChecksRouteHandler,
  getNoticesRouteHandler,
  getNoticesStatsRouteHandler,
  getNotificationsPubkeyRouteHandler,
  getNvinfoRouteHandler,
  getOnvifProbeRouteHandler,
  getPlusModelsRouteHandler,
  getPreviewCameraNameStartStartTsEndEndTsFramesRouteHandler,
  getPreviewCameraNameStartStartTsEndEndTsRouteHandler,
  getPreviewFileNameThumbnailJpgRouteHandler,
  getPreviewFileNameThumbnailWebpRouteHandler,
  getPreviewYearMonthDayHourCameraNameTzNameRouteHandler,
  getProfileActiveRouteHandler,
  getProfileRouteHandler,
  getProfilesRouteHandler,
  getRecognizedLicensePlatesRouteHandler,
  getRecordingsStorageRouteHandler,
  getRecordingsSummaryRouteHandler,
  getRecordingsUnavailableRouteHandler,
  getReolinkDetectRouteHandler,
  getReviewActivityMotionRouteHandler,
  getReviewEventEventIdRouteHandler,
  getReviewEventIdPreviewRouteHandler,
  getReviewIdsRouteHandler,
  getReviewReviewIdClipMp4RouteHandler,
  getReviewReviewIdRouteHandler,
  getReviewRouteHandler,
  getReviewSummaryRouteHandler,
  getRouteHandler,
  getStatsHistoryRouteHandler,
  getStatsRouteHandler,
  getSubLabelsRouteHandler,
  getTimelineHourlyRouteHandler,
  getTimelineRouteHandler,
  getTriggersStatusCameraNameRouteHandler,
  getUsersRouteHandler,
  getVainfoRouteHandler,
  getVersionRouteHandler,
  getVlmMonitorRouteHandler,
  getVodCameraNameStartStartTsEndEndTsRouteHandler,
  getVodCameraNameStreamStartStartTsEndEndTsRouteHandler,
  getVodClipCameraNameStartStartTsEndEndTsRouteHandler,
  getVodEventEventIdRouteHandler,
  getVodYearMonthDayHourCameraNameRouteHandler,
  getVodYearMonthDayHourCameraNameTzNameRouteHandler,
  patchCasesCaseIdRouteHandler,
  patchExportEventIdRenameRouteHandler,
  postCameraNamePlusFrameTimeRouteHandler,
  postCameraNameSearchMotionJobIdCancelRouteHandler,
  postCameraNameSearchMotionRouteHandler,
  postCasesRouteHandler,
  postChatCompletionRouteHandler,
  postChatExecuteRouteHandler,
  postClassificationGenerateExamplesObjectRouteHandler,
  postClassificationGenerateExamplesStateRouteHandler,
  postClassificationNameDatasetCategorizeRouteHandler,
  postClassificationNameDatasetCategoryCreateRouteHandler,
  postClassificationNameDatasetCategoryDeleteRouteHandler,
  postClassificationNameDatasetCategoryReclassifyRouteHandler,
  postClassificationNameTrainDeleteRouteHandler,
  postClassificationNameTrainRouteHandler,
  postConfigSaveRouteHandler,
  postDebugReplayStartFromExportRouteHandler,
  postDebugReplayStartRouteHandler,
  postDebugReplayStopRouteHandler,
  postDescriptionGenerateRouteHandler,
  postEventsCameraNameLabelCreateRouteHandler,
  postEventsEventIdAttributesRouteHandler,
  postEventsEventIdDescriptionRouteHandler,
  postEventsEventIdPlusRouteHandler,
  postEventsEventIdRecognizedLicensePlateRouteHandler,
  postEventsEventIdRetainRouteHandler,
  postEventsEventIdSubLabelRouteHandler,
  postExportCameraNameStartStartTimeEndEndTimeRouteHandler,
  postExportCustomCameraNameStartStartTimeEndEndTimeRouteHandler,
  postExportsBatchRouteHandler,
  postExportsDeleteRouteHandler,
  postExportsReassignRouteHandler,
  postFacesNameCreateRouteHandler,
  postFacesNameDeleteRouteHandler,
  postFacesNameReclassifyRouteHandler,
  postFacesNameRegisterRouteHandler,
  postFacesRecognizeRouteHandler,
  postFacesReprocessRouteHandler,
  postFacesTrainNameClassifyRouteHandler,
  postGenaiProbeRouteHandler,
  postLoginRouteHandler,
  postMediaSyncRouteHandler,
  postNoticesNoticeIdAcknowledgeRouteHandler,
  postNoticesNoticeIdMuteRouteHandler,
  postNotificationsRegisterRouteHandler,
  postPlusValidateRouteHandler,
  postRestartRouteHandler,
  postReviewsDeleteRouteHandler,
  postReviewSummarizeStartStartTsEndEndTsRouteHandler,
  postReviewsViewedRouteHandler,
  postTriggerEmbeddingRouteHandler,
  postUsersRouteHandler,
  postVlmMonitorRouteHandler,
  putAudioTranscribeRouteHandler,
  putCameraCameraNameSetFeatureRouteHandler,
  putCameraCameraNameSetFeatureSubCommandRouteHandler,
  putClassificationNameDatasetOldCategoryRenameRouteHandler,
  putConfigSetRouteHandler,
  putEventsEventIdDescriptionRegenerateRouteHandler,
  putEventsEventIdEndRouteHandler,
  putEventsEventIdFalsePositiveRouteHandler,
  putFacesOldNameRenameRouteHandler,
  putGo2rtcStreamsStreamNameRouteHandler,
  putLprReprocessRouteHandler,
  putReindexRouteHandler,
  putReviewReviewIdRegenerateDescriptionRouteHandler,
  putTriggerEmbeddingCameraNameNameRouteHandler,
  putUsersUsernamePasswordRouteHandler,
  putUsersUsernameRoleRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAnalyticsPreviewRoute, getAnalyticsPreviewRouteHandler)
  .openapi(getAuthFirstTimeLoginRoute, getAuthFirstTimeLoginRouteHandler)
  .openapi(getAuthRoute, getAuthRouteHandler)
  .openapi(getProfileRoute, getProfileRouteHandler)
  .openapi(getLogoutRoute, getLogoutRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersUsernameRoute, deleteUsersUsernameRouteHandler)
  .openapi(putUsersUsernamePasswordRoute, putUsersUsernamePasswordRouteHandler)
  .openapi(putUsersUsernameRoleRoute, putUsersUsernameRoleRouteHandler)
  .openapi(getGo2rtcStreamsRoute, getGo2rtcStreamsRouteHandler)
  .openapi(getGo2rtcStreamsStreamNameRoute, getGo2rtcStreamsStreamNameRouteHandler)
  .openapi(putGo2rtcStreamsStreamNameRoute, putGo2rtcStreamsStreamNameRouteHandler)
  .openapi(deleteGo2rtcStreamsStreamNameRoute, deleteGo2rtcStreamsStreamNameRouteHandler)
  .openapi(getGo2rtcStreamsStreamNameBitrateRoute, getGo2rtcStreamsStreamNameBitrateRouteHandler)
  .openapi(getFfprobeRoute, getFfprobeRouteHandler)
  .openapi(getKeyframeAnalysisRoute, getKeyframeAnalysisRouteHandler)
  .openapi(getFfprobeSnapshotRoute, getFfprobeSnapshotRouteHandler)
  .openapi(getReolinkDetectRoute, getReolinkDetectRouteHandler)
  .openapi(getOnvifProbeRoute, getOnvifProbeRouteHandler)
  .openapi(deleteCamerasCameraNameRoute, deleteCamerasCameraNameRouteHandler)
  .openapi(
    putCameraCameraNameSetFeatureSubCommandRoute,
    putCameraCameraNameSetFeatureSubCommandRouteHandler,
  )
  .openapi(putCameraCameraNameSetFeatureRoute, putCameraCameraNameSetFeatureRouteHandler)
  .openapi(getChatToolsRoute, getChatToolsRouteHandler)
  .openapi(postChatExecuteRoute, postChatExecuteRouteHandler)
  .openapi(postChatCompletionRoute, postChatCompletionRouteHandler)
  .openapi(postVlmMonitorRoute, postVlmMonitorRouteHandler)
  .openapi(getVlmMonitorRoute, getVlmMonitorRouteHandler)
  .openapi(deleteVlmMonitorRoute, deleteVlmMonitorRouteHandler)
  .openapi(getFacesRoute, getFacesRouteHandler)
  .openapi(postFacesReprocessRoute, postFacesReprocessRouteHandler)
  .openapi(postFacesTrainNameClassifyRoute, postFacesTrainNameClassifyRouteHandler)
  .openapi(postFacesNameCreateRoute, postFacesNameCreateRouteHandler)
  .openapi(postFacesNameRegisterRoute, postFacesNameRegisterRouteHandler)
  .openapi(postFacesRecognizeRoute, postFacesRecognizeRouteHandler)
  .openapi(postFacesNameReclassifyRoute, postFacesNameReclassifyRouteHandler)
  .openapi(postFacesNameDeleteRoute, postFacesNameDeleteRouteHandler)
  .openapi(putFacesOldNameRenameRoute, putFacesOldNameRenameRouteHandler)
  .openapi(putLprReprocessRoute, putLprReprocessRouteHandler)
  .openapi(putReindexRoute, putReindexRouteHandler)
  .openapi(putAudioTranscribeRoute, putAudioTranscribeRouteHandler)
  .openapi(getClassificationNameDatasetRoute, getClassificationNameDatasetRouteHandler)
  .openapi(getClassificationAttributesRoute, getClassificationAttributesRouteHandler)
  .openapi(getClassificationNameTrainRoute, getClassificationNameTrainRouteHandler)
  .openapi(postClassificationNameTrainRoute, postClassificationNameTrainRouteHandler)
  .openapi(
    postClassificationNameDatasetCategoryDeleteRoute,
    postClassificationNameDatasetCategoryDeleteRouteHandler,
  )
  .openapi(
    postClassificationNameDatasetCategoryReclassifyRoute,
    postClassificationNameDatasetCategoryReclassifyRouteHandler,
  )
  .openapi(
    putClassificationNameDatasetOldCategoryRenameRoute,
    putClassificationNameDatasetOldCategoryRenameRouteHandler,
  )
  .openapi(
    postClassificationNameDatasetCategorizeRoute,
    postClassificationNameDatasetCategorizeRouteHandler,
  )
  .openapi(
    postClassificationNameDatasetCategoryCreateRoute,
    postClassificationNameDatasetCategoryCreateRouteHandler,
  )
  .openapi(postClassificationNameTrainDeleteRoute, postClassificationNameTrainDeleteRouteHandler)
  .openapi(
    postClassificationGenerateExamplesStateRoute,
    postClassificationGenerateExamplesStateRouteHandler,
  )
  .openapi(
    postClassificationGenerateExamplesObjectRoute,
    postClassificationGenerateExamplesObjectRouteHandler,
  )
  .openapi(deleteClassificationNameRoute, deleteClassificationNameRouteHandler)
  .openapi(getReviewRoute, getReviewRouteHandler)
  .openapi(getReviewIdsRoute, getReviewIdsRouteHandler)
  .openapi(getReviewSummaryRoute, getReviewSummaryRouteHandler)
  .openapi(postReviewsViewedRoute, postReviewsViewedRouteHandler)
  .openapi(postReviewsDeleteRoute, postReviewsDeleteRouteHandler)
  .openapi(getReviewActivityMotionRoute, getReviewActivityMotionRouteHandler)
  .openapi(getReviewEventEventIdRoute, getReviewEventEventIdRouteHandler)
  .openapi(getReviewReviewIdRoute, getReviewReviewIdRouteHandler)
  .openapi(
    putReviewReviewIdRegenerateDescriptionRoute,
    putReviewReviewIdRegenerateDescriptionRouteHandler,
  )
  .openapi(deleteReviewReviewIdViewedRoute, deleteReviewReviewIdViewedRouteHandler)
  .openapi(
    postReviewSummarizeStartStartTsEndEndTsRoute,
    postReviewSummarizeStartStartTsEndEndTsRouteHandler,
  )
  .openapi(getRoute, getRouteHandler)
  .openapi(getConfigSchemaJsonRoute, getConfigSchemaJsonRouteHandler)
  .openapi(getVersionRoute, getVersionRouteHandler)
  .openapi(getStatsRoute, getStatsRouteHandler)
  .openapi(getStatsHistoryRoute, getStatsHistoryRouteHandler)
  .openapi(getMetricsRoute, getMetricsRouteHandler)
  .openapi(getGenaiModelsRoute, getGenaiModelsRouteHandler)
  .openapi(getGenaiRolesRoute, getGenaiRolesRouteHandler)
  .openapi(postGenaiProbeRoute, postGenaiProbeRouteHandler)
  .openapi(getConfigRoute, getConfigRouteHandler)
  .openapi(getProfilesRoute, getProfilesRouteHandler)
  .openapi(getProfileActiveRoute, getProfileActiveRouteHandler)
  .openapi(getFfmpegPresetsRoute, getFfmpegPresetsRouteHandler)
  .openapi(getConfigRawPathsRoute, getConfigRawPathsRouteHandler)
  .openapi(getConfigRawRoute, getConfigRawRouteHandler)
  .openapi(postConfigSaveRoute, postConfigSaveRouteHandler)
  .openapi(putConfigSetRoute, putConfigSetRouteHandler)
  .openapi(getVainfoRoute, getVainfoRouteHandler)
  .openapi(getNvinfoRoute, getNvinfoRouteHandler)
  .openapi(getLogsServiceRoute, getLogsServiceRouteHandler)
  .openapi(postRestartRoute, postRestartRouteHandler)
  .openapi(postMediaSyncRoute, postMediaSyncRouteHandler)
  .openapi(getMediaSyncCurrentRoute, getMediaSyncCurrentRouteHandler)
  .openapi(getMediaSyncStatusJobIdRoute, getMediaSyncStatusJobIdRouteHandler)
  .openapi(getLabelsRoute, getLabelsRouteHandler)
  .openapi(getSubLabelsRoute, getSubLabelsRouteHandler)
  .openapi(getCategorizedObjectNamesRoute, getCategorizedObjectNamesRouteHandler)
  .openapi(getAudioLabelsRoute, getAudioLabelsRouteHandler)
  .openapi(getPlusModelsRoute, getPlusModelsRouteHandler)
  .openapi(postPlusValidateRoute, postPlusValidateRouteHandler)
  .openapi(getRecognizedLicensePlatesRoute, getRecognizedLicensePlatesRouteHandler)
  .openapi(getTimelineRoute, getTimelineRouteHandler)
  .openapi(getTimelineHourlyRoute, getTimelineHourlyRouteHandler)
  .openapi(
    getPreviewCameraNameStartStartTsEndEndTsRoute,
    getPreviewCameraNameStartStartTsEndEndTsRouteHandler,
  )
  .openapi(
    getPreviewYearMonthDayHourCameraNameTzNameRoute,
    getPreviewYearMonthDayHourCameraNameTzNameRouteHandler,
  )
  .openapi(
    getPreviewCameraNameStartStartTsEndEndTsFramesRoute,
    getPreviewCameraNameStartStartTsEndEndTsFramesRouteHandler,
  )
  .openapi(getNotificationsPubkeyRoute, getNotificationsPubkeyRouteHandler)
  .openapi(postNotificationsRegisterRoute, postNotificationsRegisterRouteHandler)
  .openapi(getExportsRoute, getExportsRouteHandler)
  .openapi(getCasesRoute, getCasesRouteHandler)
  .openapi(postCasesRoute, postCasesRouteHandler)
  .openapi(getCasesCaseIdRoute, getCasesCaseIdRouteHandler)
  .openapi(patchCasesCaseIdRoute, patchCasesCaseIdRouteHandler)
  .openapi(deleteCasesCaseIdRoute, deleteCasesCaseIdRouteHandler)
  .openapi(getCasesCaseIdDownloadRoute, getCasesCaseIdDownloadRouteHandler)
  .openapi(getJobsExportRoute, getJobsExportRouteHandler)
  .openapi(getJobsExportExportIdRoute, getJobsExportExportIdRouteHandler)
  .openapi(postExportsBatchRoute, postExportsBatchRouteHandler)
  .openapi(
    postExportCameraNameStartStartTimeEndEndTimeRoute,
    postExportCameraNameStartStartTimeEndEndTimeRouteHandler,
  )
  .openapi(patchExportEventIdRenameRoute, patchExportEventIdRenameRouteHandler)
  .openapi(
    postExportCustomCameraNameStartStartTimeEndEndTimeRoute,
    postExportCustomCameraNameStartStartTimeEndEndTimeRouteHandler,
  )
  .openapi(getExportsExportIdRoute, getExportsExportIdRouteHandler)
  .openapi(postExportsDeleteRoute, postExportsDeleteRouteHandler)
  .openapi(postExportsReassignRoute, postExportsReassignRouteHandler)
  .openapi(getHardwareProbeRoute, getHardwareProbeRouteHandler)
  .openapi(getHardwareHwaccelRoute, getHardwareHwaccelRouteHandler)
  .openapi(getNoticesRoute, getNoticesRouteHandler)
  .openapi(getNoticesStatsRoute, getNoticesStatsRouteHandler)
  .openapi(getNoticesMutedChecksRoute, getNoticesMutedChecksRouteHandler)
  .openapi(deleteNoticesHiddenRoute, deleteNoticesHiddenRouteHandler)
  .openapi(postNoticesNoticeIdAcknowledgeRoute, postNoticesNoticeIdAcknowledgeRouteHandler)
  .openapi(postNoticesNoticeIdMuteRoute, postNoticesNoticeIdMuteRouteHandler)
  .openapi(deleteNoticesNoticeIdHiddenRoute, deleteNoticesNoticeIdHiddenRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getEventsExploreRoute, getEventsExploreRouteHandler)
  .openapi(getEventIdsRoute, getEventIdsRouteHandler)
  .openapi(getEventsSearchRoute, getEventsSearchRouteHandler)
  .openapi(getEventsSummaryRoute, getEventsSummaryRouteHandler)
  .openapi(getEventsEventIdRoute, getEventsEventIdRouteHandler)
  .openapi(deleteEventsEventIdRoute, deleteEventsEventIdRouteHandler)
  .openapi(postEventsEventIdRetainRoute, postEventsEventIdRetainRouteHandler)
  .openapi(deleteEventsEventIdRetainRoute, deleteEventsEventIdRetainRouteHandler)
  .openapi(postEventsEventIdPlusRoute, postEventsEventIdPlusRouteHandler)
  .openapi(putEventsEventIdFalsePositiveRoute, putEventsEventIdFalsePositiveRouteHandler)
  .openapi(postEventsEventIdSubLabelRoute, postEventsEventIdSubLabelRouteHandler)
  .openapi(
    postEventsEventIdRecognizedLicensePlateRoute,
    postEventsEventIdRecognizedLicensePlateRouteHandler,
  )
  .openapi(postEventsEventIdAttributesRoute, postEventsEventIdAttributesRouteHandler)
  .openapi(postEventsEventIdDescriptionRoute, postEventsEventIdDescriptionRouteHandler)
  .openapi(
    putEventsEventIdDescriptionRegenerateRoute,
    putEventsEventIdDescriptionRegenerateRouteHandler,
  )
  .openapi(postDescriptionGenerateRoute, postDescriptionGenerateRouteHandler)
  .openapi(deleteEventsIndexRoute, deleteEventsIndexRouteHandler)
  .openapi(postEventsCameraNameLabelCreateRoute, postEventsCameraNameLabelCreateRouteHandler)
  .openapi(putEventsEventIdEndRoute, putEventsEventIdEndRouteHandler)
  .openapi(postTriggerEmbeddingRoute, postTriggerEmbeddingRouteHandler)
  .openapi(putTriggerEmbeddingCameraNameNameRoute, putTriggerEmbeddingCameraNameNameRouteHandler)
  .openapi(
    deleteTriggerEmbeddingCameraNameNameRoute,
    deleteTriggerEmbeddingCameraNameNameRouteHandler,
  )
  .openapi(getTriggersStatusCameraNameRoute, getTriggersStatusCameraNameRouteHandler)
  .openapi(getCameraNameRoute, getCameraNameRouteHandler)
  .openapi(getCameraNamePtzInfoRoute, getCameraNamePtzInfoRouteHandler)
  .openapi(getCameraNameLatestExtensionRoute, getCameraNameLatestExtensionRouteHandler)
  .openapi(
    getCameraNameRecordingsFrameTimeSnapshotFormatRoute,
    getCameraNameRecordingsFrameTimeSnapshotFormatRouteHandler,
  )
  .openapi(postCameraNamePlusFrameTimeRoute, postCameraNamePlusFrameTimeRouteHandler)
  .openapi(
    getCameraNameStartStartTsEndEndTsClipMp4Route,
    getCameraNameStartStartTsEndEndTsClipMp4RouteHandler,
  )
  .openapi(
    getVodCameraNameStartStartTsEndEndTsRoute,
    getVodCameraNameStartStartTsEndEndTsRouteHandler,
  )
  .openapi(getVodYearMonthDayHourCameraNameRoute, getVodYearMonthDayHourCameraNameRouteHandler)
  .openapi(
    getVodYearMonthDayHourCameraNameTzNameRoute,
    getVodYearMonthDayHourCameraNameTzNameRouteHandler,
  )
  .openapi(getVodEventEventIdRoute, getVodEventEventIdRouteHandler)
  .openapi(
    getVodClipCameraNameStartStartTsEndEndTsRoute,
    getVodClipCameraNameStartStartTsEndEndTsRouteHandler,
  )
  .openapi(
    getVodCameraNameStreamStartStartTsEndEndTsRoute,
    getVodCameraNameStreamStartStartTsEndEndTsRouteHandler,
  )
  .openapi(getEventsEventIdSnapshotJpgRoute, getEventsEventIdSnapshotJpgRouteHandler)
  .openapi(getEventsEventIdThumbnailExtensionRoute, getEventsEventIdThumbnailExtensionRouteHandler)
  .openapi(getCameraNameGridJpgRoute, getCameraNameGridJpgRouteHandler)
  .openapi(deleteCameraNameRegionGridRoute, deleteCameraNameRegionGridRouteHandler)
  .openapi(getEventsEventIdSnapshotCleanWebpRoute, getEventsEventIdSnapshotCleanWebpRouteHandler)
  .openapi(getEventsEventIdClipMp4Route, getEventsEventIdClipMp4RouteHandler)
  .openapi(getReviewReviewIdClipMp4Route, getReviewReviewIdClipMp4RouteHandler)
  .openapi(getEventsEventIdPreviewGifRoute, getEventsEventIdPreviewGifRouteHandler)
  .openapi(
    getCameraNameStartStartTsEndEndTsPreviewGifRoute,
    getCameraNameStartStartTsEndEndTsPreviewGifRouteHandler,
  )
  .openapi(
    getCameraNameStartStartTsEndEndTsPreviewMp4Route,
    getCameraNameStartStartTsEndEndTsPreviewMp4RouteHandler,
  )
  .openapi(getReviewEventIdPreviewRoute, getReviewEventIdPreviewRouteHandler)
  .openapi(getPreviewFileNameThumbnailWebpRoute, getPreviewFileNameThumbnailWebpRouteHandler)
  .openapi(getPreviewFileNameThumbnailJpgRoute, getPreviewFileNameThumbnailJpgRouteHandler)
  .openapi(getCameraNameLabelThumbnailJpgRoute, getCameraNameLabelThumbnailJpgRouteHandler)
  .openapi(getCameraNameLabelBestJpgRoute, getCameraNameLabelBestJpgRouteHandler)
  .openapi(getCameraNameLabelClipMp4Route, getCameraNameLabelClipMp4RouteHandler)
  .openapi(getCameraNameLabelSnapshotJpgRoute, getCameraNameLabelSnapshotJpgRouteHandler)
  .openapi(postCameraNameSearchMotionRoute, postCameraNameSearchMotionRouteHandler)
  .openapi(getCameraNameSearchMotionJobIdRoute, getCameraNameSearchMotionJobIdRouteHandler)
  .openapi(
    postCameraNameSearchMotionJobIdCancelRoute,
    postCameraNameSearchMotionJobIdCancelRouteHandler,
  )
  .openapi(getRecordingsStorageRoute, getRecordingsStorageRouteHandler)
  .openapi(getRecordingsSummaryRoute, getRecordingsSummaryRouteHandler)
  .openapi(getCameraNameRecordingsSummaryRoute, getCameraNameRecordingsSummaryRouteHandler)
  .openapi(getCameraNameRecordingsCoverageRoute, getCameraNameRecordingsCoverageRouteHandler)
  .openapi(getCameraNameRecordingsRoute, getCameraNameRecordingsRouteHandler)
  .openapi(getRecordingsUnavailableRoute, getRecordingsUnavailableRouteHandler)
  .openapi(deleteRecordingsStartStartEndEndRoute, deleteRecordingsStartStartEndEndRouteHandler)
  .openapi(postDebugReplayStartRoute, postDebugReplayStartRouteHandler)
  .openapi(postDebugReplayStartFromExportRoute, postDebugReplayStartFromExportRouteHandler)
  .openapi(getDebugReplayStatusRoute, getDebugReplayStatusRouteHandler)
  .openapi(postDebugReplayStopRoute, postDebugReplayStopRouteHandler)

export default app
