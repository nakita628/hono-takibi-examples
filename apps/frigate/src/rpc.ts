import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getAnalyticsPreview(options?: ClientRequestOptions) {
  return await parseResponse(client.analytics.preview.$get(undefined, options))
}

export async function getAuthFirstTimeLogin(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.first_time_login.$get(undefined, options))
}

export async function getAuth(options?: ClientRequestOptions) {
  return await parseResponse(client.auth.$get(undefined, options))
}

export async function getProfile(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.$get(undefined, options))
}

export async function getLogout(options?: ClientRequestOptions) {
  return await parseResponse(client.logout.$get(undefined, options))
}

export async function postLogin(
  args: InferRequestType<typeof client.login.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.login.$post(args, options))
}

export async function getUsers(options?: ClientRequestOptions) {
  return await parseResponse(client.users.$get(undefined, options))
}

export async function postUsers(
  args: InferRequestType<typeof client.users.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users.$post(args, options))
}

export async function deleteUsersUsername(
  args: InferRequestType<(typeof client.users)[':username']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].$delete(args, options))
}

export async function putUsersUsernamePassword(
  args: InferRequestType<(typeof client.users)[':username']['password']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].password.$put(args, options))
}

export async function putUsersUsernameRole(
  args: InferRequestType<(typeof client.users)[':username']['role']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.users[':username'].role.$put(args, options))
}

export async function getGo2rtcStreams(options?: ClientRequestOptions) {
  return await parseResponse(client.go2rtc.streams.$get(undefined, options))
}

export async function getGo2rtcStreamsStreamName(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.go2rtc.streams[':stream_name'].$get(args, options))
}

export async function putGo2rtcStreamsStreamName(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.go2rtc.streams[':stream_name'].$put(args, options))
}

export async function deleteGo2rtcStreamsStreamName(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.go2rtc.streams[':stream_name'].$delete(args, options))
}

export async function getGo2rtcStreamsStreamNameBitrate(
  args: InferRequestType<(typeof client.go2rtc.streams)[':stream_name']['bitrate']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.go2rtc.streams[':stream_name'].bitrate.$get(args, options))
}

export async function getFfprobe(
  args: InferRequestType<typeof client.ffprobe.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ffprobe.$get(args, options))
}

export async function getKeyframeAnalysis(
  args: InferRequestType<typeof client.keyframe_analysis.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.keyframe_analysis.$get(args, options))
}

export async function getFfprobeSnapshot(
  args: InferRequestType<typeof client.ffprobe.snapshot.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.ffprobe.snapshot.$get(args, options))
}

export async function getReolinkDetect(
  args: InferRequestType<typeof client.reolink.detect.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reolink.detect.$get(args, options))
}

export async function getOnvifProbe(
  args: InferRequestType<typeof client.onvif.probe.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.onvif.probe.$get(args, options))
}

export async function deleteCamerasCameraName(
  args: InferRequestType<(typeof client.cameras)[':camera_name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cameras[':camera_name'].$delete(args, options))
}

export async function putCameraCameraNameSetFeatureSubCommand(
  args: InferRequestType<
    (typeof client.camera)[':camera_name']['set'][':feature'][':sub_command']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.camera[':camera_name'].set[':feature'][':sub_command'].$put(args, options),
  )
}

export async function putCameraCameraNameSetFeature(
  args: InferRequestType<(typeof client.camera)[':camera_name']['set'][':feature']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.camera[':camera_name'].set[':feature'].$put(args, options))
}

export async function getChatTools(options?: ClientRequestOptions) {
  return await parseResponse(client.chat.tools.$get(undefined, options))
}

export async function postChatExecute(
  args: InferRequestType<typeof client.chat.execute.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.execute.$post(args, options))
}

export async function postChatCompletion(
  args: InferRequestType<typeof client.chat.completion.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.chat.completion.$post(args, options))
}

export async function getVlmMonitor(options?: ClientRequestOptions) {
  return await parseResponse(client.vlm.monitor.$get(undefined, options))
}

export async function postVlmMonitor(
  args: InferRequestType<typeof client.vlm.monitor.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vlm.monitor.$post(args, options))
}

export async function deleteVlmMonitor(options?: ClientRequestOptions) {
  return await parseResponse(client.vlm.monitor.$delete(undefined, options))
}

export async function getFaces(options?: ClientRequestOptions) {
  return await parseResponse(client.faces.$get(undefined, options))
}

export async function postFacesReprocess(
  args: InferRequestType<typeof client.faces.reprocess.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces.reprocess.$post(args, options))
}

export async function postFacesTrainNameClassify(
  args: InferRequestType<(typeof client.faces.train)[':name']['classify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces.train[':name'].classify.$post(args, options))
}

export async function postFacesNameCreate(
  args: InferRequestType<(typeof client.faces)[':name']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':name'].create.$post(args, options))
}

export async function postFacesNameRegister(
  args: InferRequestType<(typeof client.faces)[':name']['register']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':name'].register.$post(args, options))
}

export async function postFacesRecognize(
  args: InferRequestType<typeof client.faces.recognize.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces.recognize.$post(args, options))
}

export async function postFacesNameReclassify(
  args: InferRequestType<(typeof client.faces)[':name']['reclassify']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':name'].reclassify.$post(args, options))
}

export async function postFacesNameDelete(
  args: InferRequestType<(typeof client.faces)[':name']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':name'].delete.$post(args, options))
}

export async function putFacesOldNameRename(
  args: InferRequestType<(typeof client.faces)[':old_name']['rename']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.faces[':old_name'].rename.$put(args, options))
}

export async function putLprReprocess(
  args: InferRequestType<typeof client.lpr.reprocess.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.lpr.reprocess.$put(args, options))
}

export async function putReindex(options?: ClientRequestOptions) {
  return await parseResponse(client.reindex.$put(undefined, options))
}

export async function putAudioTranscribe(
  args: InferRequestType<typeof client.audio.transcribe.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.audio.transcribe.$put(args, options))
}

export async function getClassificationNameDataset(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification[':name'].dataset.$get(args, options))
}

export async function getClassificationAttributes(
  args: InferRequestType<typeof client.classification.attributes.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification.attributes.$get(args, options))
}

export async function getClassificationNameTrain(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification[':name'].train.$get(args, options))
}

export async function postClassificationNameTrain(
  args: InferRequestType<(typeof client.classification)[':name']['train']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification[':name'].train.$post(args, options))
}

export async function postClassificationNameDatasetCategoryDelete(
  args: InferRequestType<
    (typeof client.classification)[':name']['dataset'][':category']['delete']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classification[':name'].dataset[':category'].delete.$post(args, options),
  )
}

export async function postClassificationNameDatasetCategoryReclassify(
  args: InferRequestType<
    (typeof client.classification)[':name']['dataset'][':category']['reclassify']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classification[':name'].dataset[':category'].reclassify.$post(args, options),
  )
}

export async function putClassificationNameDatasetOldCategoryRename(
  args: InferRequestType<
    (typeof client.classification)[':name']['dataset'][':old_category']['rename']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classification[':name'].dataset[':old_category'].rename.$put(args, options),
  )
}

export async function postClassificationNameDatasetCategorize(
  args: InferRequestType<(typeof client.classification)[':name']['dataset']['categorize']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification[':name'].dataset.categorize.$post(args, options))
}

export async function postClassificationNameDatasetCategoryCreate(
  args: InferRequestType<
    (typeof client.classification)[':name']['dataset'][':category']['create']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.classification[':name'].dataset[':category'].create.$post(args, options),
  )
}

export async function postClassificationNameTrainDelete(
  args: InferRequestType<(typeof client.classification)[':name']['train']['delete']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification[':name'].train.delete.$post(args, options))
}

export async function postClassificationGenerateExamplesState(
  args: InferRequestType<typeof client.classification.generate_examples.state.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification.generate_examples.state.$post(args, options))
}

export async function postClassificationGenerateExamplesObject(
  args: InferRequestType<typeof client.classification.generate_examples.object.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification.generate_examples.object.$post(args, options))
}

export async function deleteClassificationName(
  args: InferRequestType<(typeof client.classification)[':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.classification[':name'].$delete(args, options))
}

export async function getReview(
  args: InferRequestType<typeof client.review.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review.$get(args, options))
}

export async function getReviewIds(
  args: InferRequestType<typeof client.review_ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review_ids.$get(args, options))
}

export async function getReviewSummary(
  args: InferRequestType<typeof client.review.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review.summary.$get(args, options))
}

export async function postReviewsViewed(
  args: InferRequestType<typeof client.reviews.viewed.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.viewed.$post(args, options))
}

export async function postReviewsDelete(
  args: InferRequestType<typeof client.reviews.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.reviews.delete.$post(args, options))
}

export async function getReviewActivityMotion(
  args: InferRequestType<typeof client.review.activity.motion.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review.activity.motion.$get(args, options))
}

export async function getReviewEventEventId(
  args: InferRequestType<(typeof client.review.event)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review.event[':event_id'].$get(args, options))
}

export async function getReviewReviewId(
  args: InferRequestType<(typeof client.review)[':review_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':review_id'].$get(args, options))
}

export async function putReviewReviewIdRegenerateDescription(
  args: InferRequestType<(typeof client.review)[':review_id']['regenerate_description']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':review_id'].regenerate_description.$put(args, options))
}

export async function deleteReviewReviewIdViewed(
  args: InferRequestType<(typeof client.review)[':review_id']['viewed']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':review_id'].viewed.$delete(args, options))
}

export async function postReviewSummarizeStartStartTsEndEndTs(
  args: InferRequestType<
    (typeof client.review.summarize.start)[':start_ts']['end'][':end_ts']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.review.summarize.start[':start_ts'].end[':end_ts'].$post(args, options),
  )
}

export async function get(options?: ClientRequestOptions) {
  return await parseResponse(client.index.$get(undefined, options))
}

export async function getConfigSchemaJson(options?: ClientRequestOptions) {
  return await parseResponse(client.config['schema.json'].$get(undefined, options))
}

export async function getVersion(options?: ClientRequestOptions) {
  return await parseResponse(client.version.$get(undefined, options))
}

export async function getStats(options?: ClientRequestOptions) {
  return await parseResponse(client.stats.$get(undefined, options))
}

export async function getStatsHistory(
  args: InferRequestType<typeof client.stats.history.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.history.$get(args, options))
}

export async function getMetrics(options?: ClientRequestOptions) {
  return await parseResponse(client.metrics.$get(undefined, options))
}

export async function getGenaiModels(options?: ClientRequestOptions) {
  return await parseResponse(client.genai.models.$get(undefined, options))
}

export async function getGenaiRoles(options?: ClientRequestOptions) {
  return await parseResponse(client.genai.roles.$get(undefined, options))
}

export async function postGenaiProbe(
  args: InferRequestType<typeof client.genai.probe.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.genai.probe.$post(args, options))
}

export async function getConfig(options?: ClientRequestOptions) {
  return await parseResponse(client.config.$get(undefined, options))
}

export async function getProfiles(options?: ClientRequestOptions) {
  return await parseResponse(client.profiles.$get(undefined, options))
}

export async function getProfileActive(options?: ClientRequestOptions) {
  return await parseResponse(client.profile.active.$get(undefined, options))
}

export async function getFfmpegPresets(options?: ClientRequestOptions) {
  return await parseResponse(client.ffmpeg.presets.$get(undefined, options))
}

export async function getConfigRawPaths(options?: ClientRequestOptions) {
  return await parseResponse(client.config.raw_paths.$get(undefined, options))
}

export async function getConfigRaw(options?: ClientRequestOptions) {
  return await parseResponse(client.config.raw.$get(undefined, options))
}

export async function postConfigSave(
  args: InferRequestType<typeof client.config.save.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.save.$post(args, options))
}

export async function putConfigSet(
  args: InferRequestType<typeof client.config.set.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.config.set.$put(args, options))
}

export async function getVainfo(options?: ClientRequestOptions) {
  return await parseResponse(client.vainfo.$get(undefined, options))
}

export async function getNvinfo(options?: ClientRequestOptions) {
  return await parseResponse(client.nvinfo.$get(undefined, options))
}

export async function getLogsService(
  args: InferRequestType<(typeof client.logs)[':service']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.logs[':service'].$get(args, options))
}

export async function postRestart(options?: ClientRequestOptions) {
  return await parseResponse(client.restart.$post(undefined, options))
}

export async function postMediaSync(
  args: InferRequestType<typeof client.media.sync.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.sync.$post(args, options))
}

export async function getMediaSyncCurrent(options?: ClientRequestOptions) {
  return await parseResponse(client.media.sync.current.$get(undefined, options))
}

export async function getMediaSyncStatusJobId(
  args: InferRequestType<(typeof client.media.sync.status)[':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.media.sync.status[':job_id'].$get(args, options))
}

export async function getLabels(
  args: InferRequestType<typeof client.labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.labels.$get(args, options))
}

export async function getSubLabels(
  args: InferRequestType<typeof client.sub_labels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sub_labels.$get(args, options))
}

export async function getCategorizedObjectNames(
  args: InferRequestType<typeof client.categorized_object_names.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.categorized_object_names.$get(args, options))
}

export async function getAudioLabels(options?: ClientRequestOptions) {
  return await parseResponse(client.audio_labels.$get(undefined, options))
}

export async function getPlusModels(
  args: InferRequestType<typeof client.plus.models.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.plus.models.$get(args, options))
}

export async function postPlusValidate(options?: ClientRequestOptions) {
  return await parseResponse(client.plus.validate.$post(undefined, options))
}

export async function getRecognizedLicensePlates(
  args: InferRequestType<typeof client.recognized_license_plates.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recognized_license_plates.$get(args, options))
}

export async function getTimeline(
  args: InferRequestType<typeof client.timeline.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline.$get(args, options))
}

export async function getTimelineHourly(
  args: InferRequestType<typeof client.timeline.hourly.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.timeline.hourly.$get(args, options))
}

export async function getPreviewCameraNameStartStartTsEndEndTs(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, options),
  )
}

export async function getPreviewYearMonthDayHourCameraNameTzName(
  args: InferRequestType<
    (typeof client.preview)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preview[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(args, options),
  )
}

export async function getPreviewCameraNameStartStartTsEndEndTsFrames(
  args: InferRequestType<
    (typeof client.preview)[':camera_name']['start'][':start_ts']['end'][':end_ts']['frames']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.preview[':camera_name'].start[':start_ts'].end[':end_ts'].frames.$get(args, options),
  )
}

export async function getNotificationsPubkey(options?: ClientRequestOptions) {
  return await parseResponse(client.notifications.pubkey.$get(undefined, options))
}

export async function postNotificationsRegister(
  args: InferRequestType<typeof client.notifications.register.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notifications.register.$post(args, options))
}

export async function getExports(
  args: InferRequestType<typeof client.exports.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.$get(args, options))
}

export async function getCases(options?: ClientRequestOptions) {
  return await parseResponse(client.cases.$get(undefined, options))
}

export async function postCases(
  args: InferRequestType<typeof client.cases.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cases.$post(args, options))
}

export async function getCasesCaseId(
  args: InferRequestType<(typeof client.cases)[':case_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cases[':case_id'].$get(args, options))
}

export async function deleteCasesCaseId(
  args: InferRequestType<(typeof client.cases)[':case_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cases[':case_id'].$delete(args, options))
}

export async function patchCasesCaseId(
  args: InferRequestType<(typeof client.cases)[':case_id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cases[':case_id'].$patch(args, options))
}

export async function getCasesCaseIdDownload(
  args: InferRequestType<(typeof client.cases)[':case_id']['download']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cases[':case_id'].download.$get(args, options))
}

export async function getJobsExport(options?: ClientRequestOptions) {
  return await parseResponse(client.jobs.export.$get(undefined, options))
}

export async function getJobsExportExportId(
  args: InferRequestType<(typeof client.jobs.export)[':export_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.jobs.export[':export_id'].$get(args, options))
}

export async function postExportsBatch(
  args: InferRequestType<typeof client.exports.batch.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.batch.$post(args, options))
}

export async function postExportCameraNameStartStartTimeEndEndTime(
  args: InferRequestType<
    (typeof client.export)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export[':camera_name'].start[':start_time'].end[':end_time'].$post(args, options),
  )
}

export async function patchExportEventIdRename(
  args: InferRequestType<(typeof client.export)[':event_id']['rename']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.export[':event_id'].rename.$patch(args, options))
}

export async function postExportCustomCameraNameStartStartTimeEndEndTime(
  args: InferRequestType<
    (typeof client.export.custom)[':camera_name']['start'][':start_time']['end'][':end_time']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.export.custom[':camera_name'].start[':start_time'].end[':end_time'].$post(args, options),
  )
}

export async function getExportsExportId(
  args: InferRequestType<(typeof client.exports)[':export_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports[':export_id'].$get(args, options))
}

export async function postExportsDelete(
  args: InferRequestType<typeof client.exports.delete.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.delete.$post(args, options))
}

export async function postExportsReassign(
  args: InferRequestType<typeof client.exports.reassign.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.exports.reassign.$post(args, options))
}

export async function getHardwareProbe(
  args: InferRequestType<typeof client.hardware.probe.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.probe.$get(args, options))
}

export async function getHardwareHwaccel(
  args: InferRequestType<typeof client.hardware.hwaccel.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.hardware.hwaccel.$get(args, options))
}

export async function getNotices(
  args: InferRequestType<typeof client.notices.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notices.$get(args, options))
}

export async function getNoticesStats(options?: ClientRequestOptions) {
  return await parseResponse(client.notices.stats.$get(undefined, options))
}

export async function getNoticesMutedChecks(options?: ClientRequestOptions) {
  return await parseResponse(client.notices.muted_checks.$get(undefined, options))
}

export async function deleteNoticesHidden(options?: ClientRequestOptions) {
  return await parseResponse(client.notices.hidden.$delete(undefined, options))
}

export async function postNoticesNoticeIdAcknowledge(
  args: InferRequestType<(typeof client.notices)[':notice_id']['acknowledge']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notices[':notice_id'].acknowledge.$post(args, options))
}

export async function postNoticesNoticeIdMute(
  args: InferRequestType<(typeof client.notices)[':notice_id']['mute']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notices[':notice_id'].mute.$post(args, options))
}

export async function deleteNoticesNoticeIdHidden(
  args: InferRequestType<(typeof client.notices)[':notice_id']['hidden']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.notices[':notice_id'].hidden.$delete(args, options))
}

export async function getEvents(
  args: InferRequestType<typeof client.events.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.$get(args, options))
}

export async function getEventsExplore(
  args: InferRequestType<typeof client.events.explore.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.explore.$get(args, options))
}

export async function getEventIds(
  args: InferRequestType<typeof client.event_ids.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.event_ids.$get(args, options))
}

export async function getEventsSearch(
  args: InferRequestType<typeof client.events.search.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.search.$get(args, options))
}

export async function getEventsSummary(
  args: InferRequestType<typeof client.events.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.summary.$get(args, options))
}

export async function getEventsEventId(
  args: InferRequestType<(typeof client.events)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].$get(args, options))
}

export async function deleteEventsEventId(
  args: InferRequestType<(typeof client.events)[':event_id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].$delete(args, options))
}

export async function postEventsEventIdRetain(
  args: InferRequestType<(typeof client.events)[':event_id']['retain']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].retain.$post(args, options))
}

export async function deleteEventsEventIdRetain(
  args: InferRequestType<(typeof client.events)[':event_id']['retain']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].retain.$delete(args, options))
}

export async function postEventsEventIdPlus(
  args: InferRequestType<(typeof client.events)[':event_id']['plus']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].plus.$post(args, options))
}

export async function putEventsEventIdFalsePositive(
  args: InferRequestType<(typeof client.events)[':event_id']['false_positive']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].false_positive.$put(args, options))
}

export async function postEventsEventIdSubLabel(
  args: InferRequestType<(typeof client.events)[':event_id']['sub_label']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].sub_label.$post(args, options))
}

export async function postEventsEventIdRecognizedLicensePlate(
  args: InferRequestType<(typeof client.events)[':event_id']['recognized_license_plate']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.events[':event_id'].recognized_license_plate.$post(args, options),
  )
}

export async function postEventsEventIdAttributes(
  args: InferRequestType<(typeof client.events)[':event_id']['attributes']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].attributes.$post(args, options))
}

export async function postEventsEventIdDescription(
  args: InferRequestType<(typeof client.events)[':event_id']['description']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].description.$post(args, options))
}

export async function putEventsEventIdDescriptionRegenerate(
  args: InferRequestType<(typeof client.events)[':event_id']['description']['regenerate']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].description.regenerate.$put(args, options))
}

export async function postDescriptionGenerate(
  args: InferRequestType<typeof client.description.generate.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.description.generate.$post(args, options))
}

export async function deleteEventsIndex(
  args: InferRequestType<typeof client.events.index.$delete>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events.index.$delete(args, options))
}

export async function postEventsCameraNameLabelCreate(
  args: InferRequestType<(typeof client.events)[':camera_name'][':label']['create']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':camera_name'][':label'].create.$post(args, options))
}

export async function putEventsEventIdEnd(
  args: InferRequestType<(typeof client.events)[':event_id']['end']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id'].end.$put(args, options))
}

export async function postTriggerEmbedding(
  args: InferRequestType<typeof client.trigger.embedding.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trigger.embedding.$post(args, options))
}

export async function putTriggerEmbeddingCameraNameName(
  args: InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.trigger.embedding[':camera_name'][':name'].$put(args, options))
}

export async function deleteTriggerEmbeddingCameraNameName(
  args: InferRequestType<(typeof client.trigger.embedding)[':camera_name'][':name']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.trigger.embedding[':camera_name'][':name'].$delete(args, options),
  )
}

export async function getTriggersStatusCameraName(
  args: InferRequestType<(typeof client.triggers.status)[':camera_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.triggers.status[':camera_name'].$get(args, options))
}

export async function getCameraName(
  args: InferRequestType<(typeof client)[':camera_name']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].$get(args, options))
}

export async function getCameraNamePtzInfo(
  args: InferRequestType<(typeof client)[':camera_name']['ptz']['info']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].ptz.info.$get(args, options))
}

export async function getCameraNameLatestExtension(
  args: InferRequestType<(typeof client)[':camera_name']['latest.:extension']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name']['latest.:extension'].$get(args, options))
}

export async function getCameraNameRecordingsFrameTimeSnapshotFormat(
  args: InferRequestType<
    (typeof client)[':camera_name']['recordings'][':frame_time']['snapshot.:format']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':camera_name'].recordings[':frame_time']['snapshot.:format'].$get(args, options),
  )
}

export async function postCameraNamePlusFrameTime(
  args: InferRequestType<(typeof client)[':camera_name']['plus'][':frame_time']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].plus[':frame_time'].$post(args, options))
}

export async function getCameraNameStartStartTsEndEndTsClipMp4(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['clip.mp4']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':camera_name'].start[':start_ts'].end[':end_ts']['clip.mp4'].$get(args, options),
  )
}

export async function getVodCameraNameStartStartTsEndEndTs(
  args: InferRequestType<
    (typeof client.vod)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vod[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, options),
  )
}

export async function getVodYearMonthDayHourCameraName(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vod[':year_month'][':day'][':hour'][':camera_name'].$get(args, options),
  )
}

export async function getVodYearMonthDayHourCameraNameTzName(
  args: InferRequestType<
    (typeof client.vod)[':year_month'][':day'][':hour'][':camera_name'][':tz_name']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vod[':year_month'][':day'][':hour'][':camera_name'][':tz_name'].$get(args, options),
  )
}

export async function getVodEventEventId(
  args: InferRequestType<(typeof client.vod.event)[':event_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vod.event[':event_id'].$get(args, options))
}

export async function getVodClipCameraNameStartStartTsEndEndTs(
  args: InferRequestType<
    (typeof client.vod.clip)[':camera_name']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vod.clip[':camera_name'].start[':start_ts'].end[':end_ts'].$get(args, options),
  )
}

export async function getVodCameraNameStreamStartStartTsEndEndTs(
  args: InferRequestType<
    (typeof client.vod)[':camera_name'][':stream']['start'][':start_ts']['end'][':end_ts']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.vod[':camera_name'][':stream'].start[':start_ts'].end[':end_ts'].$get(args, options),
  )
}

export async function getEventsEventIdSnapshotJpg(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id']['snapshot.jpg'].$get(args, options))
}

export async function getEventsEventIdThumbnailExtension(
  args: InferRequestType<(typeof client.events)[':event_id']['thumbnail.:extension']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id']['thumbnail.:extension'].$get(args, options))
}

export async function getCameraNameGridJpg(
  args: InferRequestType<(typeof client)[':camera_name']['grid.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name']['grid.jpg'].$get(args, options))
}

export async function deleteCameraNameRegionGrid(
  args: InferRequestType<(typeof client)[':camera_name']['region_grid']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].region_grid.$delete(args, options))
}

export async function getEventsEventIdSnapshotCleanWebp(
  args: InferRequestType<(typeof client.events)[':event_id']['snapshot-clean.webp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id']['snapshot-clean.webp'].$get(args, options))
}

export async function getEventsEventIdClipMp4(
  args: InferRequestType<(typeof client.events)[':event_id']['clip.mp4']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id']['clip.mp4'].$get(args, options))
}

export async function getReviewReviewIdClipMp4(
  args: InferRequestType<(typeof client.review)[':review_id']['clip.mp4']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':review_id']['clip.mp4'].$get(args, options))
}

export async function getEventsEventIdPreviewGif(
  args: InferRequestType<(typeof client.events)[':event_id']['preview.gif']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.events[':event_id']['preview.gif'].$get(args, options))
}

export async function getCameraNameStartStartTsEndEndTsPreviewGif(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.gif']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.gif'].$get(args, options),
  )
}

export async function getCameraNameStartStartTsEndEndTsPreviewMp4(
  args: InferRequestType<
    (typeof client)[':camera_name']['start'][':start_ts']['end'][':end_ts']['preview.mp4']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':camera_name'].start[':start_ts'].end[':end_ts']['preview.mp4'].$get(args, options),
  )
}

export async function getReviewEventIdPreview(
  args: InferRequestType<(typeof client.review)[':event_id']['preview']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.review[':event_id'].preview.$get(args, options))
}

export async function getPreviewFileNameThumbnailWebp(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.webp']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preview[':file_name']['thumbnail.webp'].$get(args, options))
}

export async function getPreviewFileNameThumbnailJpg(
  args: InferRequestType<(typeof client.preview)[':file_name']['thumbnail.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.preview[':file_name']['thumbnail.jpg'].$get(args, options))
}

export async function getCameraNameLabelThumbnailJpg(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['thumbnail.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'][':label']['thumbnail.jpg'].$get(args, options))
}

export async function getCameraNameLabelBestJpg(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['best.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'][':label']['best.jpg'].$get(args, options))
}

export async function getCameraNameLabelClipMp4(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['clip.mp4']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'][':label']['clip.mp4'].$get(args, options))
}

export async function getCameraNameLabelSnapshotJpg(
  args: InferRequestType<(typeof client)[':camera_name'][':label']['snapshot.jpg']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'][':label']['snapshot.jpg'].$get(args, options))
}

export async function postCameraNameSearchMotion(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].search.motion.$post(args, options))
}

export async function getCameraNameSearchMotionJobId(
  args: InferRequestType<(typeof client)[':camera_name']['search']['motion'][':job_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].search.motion[':job_id'].$get(args, options))
}

export async function postCameraNameSearchMotionJobIdCancel(
  args: InferRequestType<
    (typeof client)[':camera_name']['search']['motion'][':job_id']['cancel']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client[':camera_name'].search.motion[':job_id'].cancel.$post(args, options),
  )
}

export async function getRecordingsStorage(options?: ClientRequestOptions) {
  return await parseResponse(client.recordings.storage.$get(undefined, options))
}

export async function getRecordingsSummary(
  args: InferRequestType<typeof client.recordings.summary.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings.summary.$get(args, options))
}

export async function getCameraNameRecordingsSummary(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['summary']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].recordings.summary.$get(args, options))
}

export async function getCameraNameRecordingsCoverage(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['coverage']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].recordings.coverage.$get(args, options))
}

export async function getCameraNameRecordings(
  args: InferRequestType<(typeof client)[':camera_name']['recordings']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client[':camera_name'].recordings.$get(args, options))
}

export async function getRecordingsUnavailable(
  args: InferRequestType<typeof client.recordings.unavailable.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings.unavailable.$get(args, options))
}

export async function deleteRecordingsStartStartEndEnd(
  args: InferRequestType<(typeof client.recordings.start)[':start']['end'][':end']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.recordings.start[':start'].end[':end'].$delete(args, options))
}

export async function postDebugReplayStart(
  args: InferRequestType<typeof client.debug_replay.start.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug_replay.start.$post(args, options))
}

export async function postDebugReplayStartFromExport(
  args: InferRequestType<typeof client.debug_replay.start_from_export.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.debug_replay.start_from_export.$post(args, options))
}

export async function getDebugReplayStatus(options?: ClientRequestOptions) {
  return await parseResponse(client.debug_replay.status.$get(undefined, options))
}

export async function postDebugReplayStop(options?: ClientRequestOptions) {
  return await parseResponse(client.debug_replay.stop.$post(undefined, options))
}
