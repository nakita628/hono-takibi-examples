import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postParticipantAttachmentXAmzBearerRoute,
  postParticipantCompleteAttachmentUploadXAmzBearerRoute,
  postParticipantConnectionXAmzBearerRoute,
  postParticipantDisconnectXAmzBearerRoute,
  postParticipantEventXAmzBearerRoute,
  postParticipantMessageXAmzBearerRoute,
  postParticipantStartAttachmentUploadXAmzBearerRoute,
  postParticipantTranscriptXAmzBearerRoute,
} from '../routes'

const app = new OpenAPIHono()

export const participantHandler = app
  .openapi(postParticipantCompleteAttachmentUploadXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantConnectionXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantDisconnectXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantAttachmentXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantTranscriptXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantEventXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantMessageXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postParticipantStartAttachmentUploadXAmzBearerRoute, (c) => {
    throw new Error('Not implemented')
  })
