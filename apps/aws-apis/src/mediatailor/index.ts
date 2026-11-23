import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteChannelChannelNamePolicyRoute,
  deleteChannelChannelNameProgramProgramNameRoute,
  deleteChannelChannelNameRoute,
  deletePlaybackConfigurationNameRoute,
  deletePrefetchSchedulePlaybackConfigurationNameNameRoute,
  deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  deleteSourceLocationSourceLocationNameRoute,
  deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
  deleteTagsResourceArnTagKeysRoute,
  getAlertsResourceArnRoute,
  getChannelChannelNamePolicyRoute,
  getChannelChannelNameProgramProgramNameRoute,
  getChannelChannelNameRoute,
  getChannelChannelNameScheduleRoute,
  getChannelsRoute,
  getPlaybackConfigurationNameRoute,
  getPlaybackConfigurationsRoute,
  getPrefetchSchedulePlaybackConfigurationNameNameRoute,
  getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  getSourceLocationSourceLocationNameLiveSourcesRoute,
  getSourceLocationSourceLocationNameRoute,
  getSourceLocationSourceLocationNameVodSourcesRoute,
  getSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
  getSourceLocationsRoute,
  getTagsResourceArnRoute,
  postChannelChannelNameProgramProgramNameRoute,
  postChannelChannelNameRoute,
  postPrefetchSchedulePlaybackConfigurationNameNameRoute,
  postPrefetchSchedulePlaybackConfigurationNameRoute,
  postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  postSourceLocationSourceLocationNameRoute,
  postSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
  postTagsResourceArnRoute,
  putChannelChannelNamePolicyRoute,
  putChannelChannelNameProgramProgramNameRoute,
  putChannelChannelNameRoute,
  putChannelChannelNameStartRoute,
  putChannelChannelNameStopRoute,
  putConfigureLogsChannelRoute,
  putConfigureLogsPlaybackConfigurationRoute,
  putPlaybackConfigurationRoute,
  putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
  putSourceLocationSourceLocationNameRoute,
  putSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
} from './routes'
import {
  deleteChannelChannelNamePolicyRouteHandler,
  deleteChannelChannelNameProgramProgramNameRouteHandler,
  deleteChannelChannelNameRouteHandler,
  deletePlaybackConfigurationNameRouteHandler,
  deletePrefetchSchedulePlaybackConfigurationNameNameRouteHandler,
  deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  deleteSourceLocationSourceLocationNameRouteHandler,
  deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getAlertsResourceArnRouteHandler,
  getChannelChannelNamePolicyRouteHandler,
  getChannelChannelNameProgramProgramNameRouteHandler,
  getChannelChannelNameRouteHandler,
  getChannelChannelNameScheduleRouteHandler,
  getChannelsRouteHandler,
  getPlaybackConfigurationNameRouteHandler,
  getPlaybackConfigurationsRouteHandler,
  getPrefetchSchedulePlaybackConfigurationNameNameRouteHandler,
  getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  getSourceLocationSourceLocationNameLiveSourcesRouteHandler,
  getSourceLocationSourceLocationNameRouteHandler,
  getSourceLocationSourceLocationNameVodSourcesRouteHandler,
  getSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  getSourceLocationsRouteHandler,
  getTagsResourceArnRouteHandler,
  postChannelChannelNameProgramProgramNameRouteHandler,
  postChannelChannelNameRouteHandler,
  postPrefetchSchedulePlaybackConfigurationNameNameRouteHandler,
  postPrefetchSchedulePlaybackConfigurationNameRouteHandler,
  postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  postSourceLocationSourceLocationNameRouteHandler,
  postSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  postTagsResourceArnRouteHandler,
  putChannelChannelNamePolicyRouteHandler,
  putChannelChannelNameProgramProgramNameRouteHandler,
  putChannelChannelNameRouteHandler,
  putChannelChannelNameStartRouteHandler,
  putChannelChannelNameStopRouteHandler,
  putConfigureLogsChannelRouteHandler,
  putConfigureLogsPlaybackConfigurationRouteHandler,
  putPlaybackConfigurationRouteHandler,
  putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  putSourceLocationSourceLocationNameRouteHandler,
  putSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putConfigureLogsChannelRoute, putConfigureLogsChannelRouteHandler)
  .openapi(
    putConfigureLogsPlaybackConfigurationRoute,
    putConfigureLogsPlaybackConfigurationRouteHandler,
  )
  .openapi(postChannelChannelNameRoute, postChannelChannelNameRouteHandler)
  .openapi(deleteChannelChannelNameRoute, deleteChannelChannelNameRouteHandler)
  .openapi(getChannelChannelNameRoute, getChannelChannelNameRouteHandler)
  .openapi(putChannelChannelNameRoute, putChannelChannelNameRouteHandler)
  .openapi(
    postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
    postSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  )
  .openapi(
    deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
    deleteSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  )
  .openapi(
    getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
    getSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  )
  .openapi(
    putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRoute,
    putSourceLocationSourceLocationNameLiveSourceLiveSourceNameRouteHandler,
  )
  .openapi(
    postPrefetchSchedulePlaybackConfigurationNameNameRoute,
    postPrefetchSchedulePlaybackConfigurationNameNameRouteHandler,
  )
  .openapi(
    deletePrefetchSchedulePlaybackConfigurationNameNameRoute,
    deletePrefetchSchedulePlaybackConfigurationNameNameRouteHandler,
  )
  .openapi(
    getPrefetchSchedulePlaybackConfigurationNameNameRoute,
    getPrefetchSchedulePlaybackConfigurationNameNameRouteHandler,
  )
  .openapi(
    postChannelChannelNameProgramProgramNameRoute,
    postChannelChannelNameProgramProgramNameRouteHandler,
  )
  .openapi(
    deleteChannelChannelNameProgramProgramNameRoute,
    deleteChannelChannelNameProgramProgramNameRouteHandler,
  )
  .openapi(
    getChannelChannelNameProgramProgramNameRoute,
    getChannelChannelNameProgramProgramNameRouteHandler,
  )
  .openapi(
    putChannelChannelNameProgramProgramNameRoute,
    putChannelChannelNameProgramProgramNameRouteHandler,
  )
  .openapi(
    postSourceLocationSourceLocationNameRoute,
    postSourceLocationSourceLocationNameRouteHandler,
  )
  .openapi(
    deleteSourceLocationSourceLocationNameRoute,
    deleteSourceLocationSourceLocationNameRouteHandler,
  )
  .openapi(
    getSourceLocationSourceLocationNameRoute,
    getSourceLocationSourceLocationNameRouteHandler,
  )
  .openapi(
    putSourceLocationSourceLocationNameRoute,
    putSourceLocationSourceLocationNameRouteHandler,
  )
  .openapi(
    postSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
    postSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  )
  .openapi(
    deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
    deleteSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  )
  .openapi(
    getSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
    getSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  )
  .openapi(
    putSourceLocationSourceLocationNameVodSourceVodSourceNameRoute,
    putSourceLocationSourceLocationNameVodSourceVodSourceNameRouteHandler,
  )
  .openapi(deleteChannelChannelNamePolicyRoute, deleteChannelChannelNamePolicyRouteHandler)
  .openapi(getChannelChannelNamePolicyRoute, getChannelChannelNamePolicyRouteHandler)
  .openapi(putChannelChannelNamePolicyRoute, putChannelChannelNamePolicyRouteHandler)
  .openapi(deletePlaybackConfigurationNameRoute, deletePlaybackConfigurationNameRouteHandler)
  .openapi(getPlaybackConfigurationNameRoute, getPlaybackConfigurationNameRouteHandler)
  .openapi(getChannelChannelNameScheduleRoute, getChannelChannelNameScheduleRouteHandler)
  .openapi(getAlertsResourceArnRoute, getAlertsResourceArnRouteHandler)
  .openapi(getChannelsRoute, getChannelsRouteHandler)
  .openapi(
    getSourceLocationSourceLocationNameLiveSourcesRoute,
    getSourceLocationSourceLocationNameLiveSourcesRouteHandler,
  )
  .openapi(getPlaybackConfigurationsRoute, getPlaybackConfigurationsRouteHandler)
  .openapi(
    postPrefetchSchedulePlaybackConfigurationNameRoute,
    postPrefetchSchedulePlaybackConfigurationNameRouteHandler,
  )
  .openapi(getSourceLocationsRoute, getSourceLocationsRouteHandler)
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    getSourceLocationSourceLocationNameVodSourcesRoute,
    getSourceLocationSourceLocationNameVodSourcesRouteHandler,
  )
  .openapi(putPlaybackConfigurationRoute, putPlaybackConfigurationRouteHandler)
  .openapi(putChannelChannelNameStartRoute, putChannelChannelNameStartRouteHandler)
  .openapi(putChannelChannelNameStopRoute, putChannelChannelNameStopRouteHandler)
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
