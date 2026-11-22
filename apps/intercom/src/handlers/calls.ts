import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCallsCallIdRecordingRoute,
  getCallsCallIdRoute,
  getCallsIdTranscriptRoute,
  getCallsRoute,
  getFinVoiceCollectIdRoute,
  getFinVoiceConversationConversationIdRoute,
  getFinVoiceExternalIdExternalIdRoute,
  getFinVoicePhoneNumberPhoneNumberRoute,
  postCallsSearchRoute,
  postFinVoiceRegisterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const callsHandler = app
  .openapi(getCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallsCallIdRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCallsIdTranscriptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCallsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFinVoiceRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoiceCollectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoiceExternalIdExternalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoicePhoneNumberPhoneNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFinVoiceConversationConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
