import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1VoicesPvcVoiceIdSamplesSampleIdRoute,
  getV1VoicesPvcVoiceIdCaptchaRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdAudioRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudioRoute,
  getV1VoicesPvcVoiceIdSamplesSampleIdWaveformRoute,
  postV1VoicesPvcRoute,
  postV1VoicesPvcVoiceIdCaptchaRoute,
  postV1VoicesPvcVoiceIdRoute,
  postV1VoicesPvcVoiceIdSamplesRoute,
  postV1VoicesPvcVoiceIdSamplesSampleIdRoute,
  postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakersRoute,
  postV1VoicesPvcVoiceIdTrainRoute,
  postV1VoicesPvcVoiceIdVerificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pvcVoicesHandler = app
  .openapi(postV1VoicesPvcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1VoicesPvcVoiceIdSamplesSampleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdWaveformRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdSamplesSampleIdSeparateSpeakersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdSamplesSampleIdSpeakersSpeakerIdAudioRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1VoicesPvcVoiceIdCaptchaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdCaptchaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdTrainRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1VoicesPvcVoiceIdVerificationRoute, (c) => {
    throw new Error('Not implemented')
  })
