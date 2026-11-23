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
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1HistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HistoryDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HistoryDownloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1HistoryHistoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HistoryHistoryItemIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TextToSpeechVoiceIdStreamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UserSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesSettingsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSamplesSampleIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesVoiceIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesVoiceIdSettingsEditRoute, (c) => {
    throw new Error('Not implemented')
  })
