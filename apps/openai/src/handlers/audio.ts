import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAudioVoiceConsentsConsentIdRoute,
  deleteAudioVoicesVoiceIdRoute,
  getAudioVoiceConsentsConsentIdRoute,
  getAudioVoiceConsentsRoute,
  postAudioSpeechRoute,
  postAudioTranscriptionsRoute,
  postAudioTranslationsRoute,
  postAudioVoiceConsentsConsentIdRoute,
  postAudioVoiceConsentsRoute,
  postAudioVoicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const audioHandler = app
  .openapi(postAudioSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioTranscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioVoiceConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioVoiceConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAudioVoiceConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioVoiceConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAudioVoiceConsentsConsentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAudioVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAudioVoicesVoiceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
