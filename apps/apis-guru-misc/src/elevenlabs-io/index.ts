import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1HistoryHistoryItemIdRoute,
  deleteV1VoicesVoiceIdRoute,
  deleteV1VoicesVoiceIdSamplesSampleIdRoute,
  getV1HistoryHistoryItemIdAudioRoute,
  getV1HistoryRoute,
  getV1UserRoute,
  getV1UserSubscriptionRoute,
  getV1VoicesRoute,
  getV1VoicesSettingsDefaultRoute,
  getV1VoicesVoiceIdRoute,
  getV1VoicesVoiceIdSamplesSampleIdAudioRoute,
  getV1VoicesVoiceIdSettingsRoute,
  postV1HistoryDeleteRoute,
  postV1HistoryDownloadRoute,
  postV1TextToSpeechVoiceIdRoute,
  postV1TextToSpeechVoiceIdStreamRoute,
  postV1VoicesAddRoute,
  postV1VoicesVoiceIdEditRoute,
  postV1VoicesVoiceIdSettingsEditRoute,
} from './routes'
import {
  deleteV1HistoryHistoryItemIdRouteHandler,
  deleteV1VoicesVoiceIdRouteHandler,
  deleteV1VoicesVoiceIdSamplesSampleIdRouteHandler,
  getV1HistoryHistoryItemIdAudioRouteHandler,
  getV1HistoryRouteHandler,
  getV1UserRouteHandler,
  getV1UserSubscriptionRouteHandler,
  getV1VoicesRouteHandler,
  getV1VoicesSettingsDefaultRouteHandler,
  getV1VoicesVoiceIdRouteHandler,
  getV1VoicesVoiceIdSamplesSampleIdAudioRouteHandler,
  getV1VoicesVoiceIdSettingsRouteHandler,
  postV1HistoryDeleteRouteHandler,
  postV1HistoryDownloadRouteHandler,
  postV1TextToSpeechVoiceIdRouteHandler,
  postV1TextToSpeechVoiceIdStreamRouteHandler,
  postV1VoicesAddRouteHandler,
  postV1VoicesVoiceIdEditRouteHandler,
  postV1VoicesVoiceIdSettingsEditRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1HistoryRoute, getV1HistoryRouteHandler)
  .openapi(postV1HistoryDeleteRoute, postV1HistoryDeleteRouteHandler)
  .openapi(postV1HistoryDownloadRoute, postV1HistoryDownloadRouteHandler)
  .openapi(deleteV1HistoryHistoryItemIdRoute, deleteV1HistoryHistoryItemIdRouteHandler)
  .openapi(getV1HistoryHistoryItemIdAudioRoute, getV1HistoryHistoryItemIdAudioRouteHandler)
  .openapi(postV1TextToSpeechVoiceIdRoute, postV1TextToSpeechVoiceIdRouteHandler)
  .openapi(postV1TextToSpeechVoiceIdStreamRoute, postV1TextToSpeechVoiceIdStreamRouteHandler)
  .openapi(getV1UserRoute, getV1UserRouteHandler)
  .openapi(getV1UserSubscriptionRoute, getV1UserSubscriptionRouteHandler)
  .openapi(getV1VoicesRoute, getV1VoicesRouteHandler)
  .openapi(postV1VoicesAddRoute, postV1VoicesAddRouteHandler)
  .openapi(getV1VoicesSettingsDefaultRoute, getV1VoicesSettingsDefaultRouteHandler)
  .openapi(deleteV1VoicesVoiceIdRoute, deleteV1VoicesVoiceIdRouteHandler)
  .openapi(getV1VoicesVoiceIdRoute, getV1VoicesVoiceIdRouteHandler)
  .openapi(postV1VoicesVoiceIdEditRoute, postV1VoicesVoiceIdEditRouteHandler)
  .openapi(
    deleteV1VoicesVoiceIdSamplesSampleIdRoute,
    deleteV1VoicesVoiceIdSamplesSampleIdRouteHandler,
  )
  .openapi(
    getV1VoicesVoiceIdSamplesSampleIdAudioRoute,
    getV1VoicesVoiceIdSamplesSampleIdAudioRouteHandler,
  )
  .openapi(getV1VoicesVoiceIdSettingsRoute, getV1VoicesVoiceIdSettingsRouteHandler)
  .openapi(postV1VoicesVoiceIdSettingsEditRoute, postV1VoicesVoiceIdSettingsEditRouteHandler)

export default app
