import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postRealtimeCallsCallIdAcceptRoute,
  postRealtimeCallsCallIdHangupRoute,
  postRealtimeCallsCallIdReferRoute,
  postRealtimeCallsCallIdRejectRoute,
  postRealtimeCallsRoute,
  postRealtimeClientSecretsRoute,
  postRealtimeSessionsRoute,
  postRealtimeTranscriptionSessionsRoute,
  postRealtimeTranslationsClientSecretsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realtimeHandler = app
  .openapi(postRealtimeCallsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeCallsCallIdAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeCallsCallIdHangupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeCallsCallIdReferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeCallsCallIdRejectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeTranscriptionSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRealtimeTranslationsClientSecretsRoute, (c) => {
    throw new Error('Not implemented')
  })
