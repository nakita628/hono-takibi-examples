import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1VideoConferenceCapabilitiesRoute,
  getApiV1VideoConferenceInfoRoute,
  getApiV1VideoConferenceJoinableRoute,
  getApiV1VideoConferenceListRoute,
  getApiV1VideoConferenceProvidersRoute,
  postApiV1VideoConferenceAddParticipantsRoute,
  postApiV1VideoConferenceCancelRoute,
  postApiV1VideoConferenceDeclineRoute,
  postApiV1VideoConferenceHeartbeatRoute,
  postApiV1VideoConferenceJoinRoute,
  postApiV1VideoConferenceLeaveRoute,
  postApiV1VideoConferenceRenameRoute,
  postApiV1VideoConferenceRingRoute,
  postApiV1VideoConferenceShareChatRoute,
  postApiV1VideoConferenceStartRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoConferenceHandler = app
  .openapi(getApiV1VideoConferenceCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceJoinRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceLeaveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceHeartbeatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceRingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceAddParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoConferenceShareChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoConferenceJoinableRoute, (c) => {
    throw new Error('Not implemented')
  })
