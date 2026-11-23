import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getContactAttributesInstanceIdInitialContactIdRoute,
  getContactReferencesInstanceIdContactIdReferenceTypesRoute,
  postContactAttributesRoute,
  postContactCreateParticipantRoute,
  postContactMonitorRoute,
  postContactResumeRecordingRoute,
  postContactScheduleRoute,
  postContactStartRecordingRoute,
  postContactStartStreamingRoute,
  postContactStopRecordingRoute,
  postContactStopRoute,
  postContactStopStreamingRoute,
  postContactSuspendRecordingRoute,
  postContactTransferRoute,
  putContactChatRoute,
  putContactOutboundVoiceRoute,
  putContactParticipantRoleConfigInstanceIdContactIdRoute,
  putContactTaskRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contactHandler = app
  .openapi(postContactCreateParticipantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactAttributesInstanceIdInitialContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getContactReferencesInstanceIdContactIdReferenceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactResumeRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactStartRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactStartStreamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactOutboundVoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactTaskRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactStopRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactStopRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactStopStreamingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactSuspendRecordingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postContactScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putContactParticipantRoleConfigInstanceIdContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
