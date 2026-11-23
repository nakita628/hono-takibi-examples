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
} from './routes'
import {
  postParticipantAttachmentXAmzBearerRouteHandler,
  postParticipantCompleteAttachmentUploadXAmzBearerRouteHandler,
  postParticipantConnectionXAmzBearerRouteHandler,
  postParticipantDisconnectXAmzBearerRouteHandler,
  postParticipantEventXAmzBearerRouteHandler,
  postParticipantMessageXAmzBearerRouteHandler,
  postParticipantStartAttachmentUploadXAmzBearerRouteHandler,
  postParticipantTranscriptXAmzBearerRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postParticipantCompleteAttachmentUploadXAmzBearerRoute,
    postParticipantCompleteAttachmentUploadXAmzBearerRouteHandler,
  )
  .openapi(
    postParticipantConnectionXAmzBearerRoute,
    postParticipantConnectionXAmzBearerRouteHandler,
  )
  .openapi(
    postParticipantDisconnectXAmzBearerRoute,
    postParticipantDisconnectXAmzBearerRouteHandler,
  )
  .openapi(
    postParticipantAttachmentXAmzBearerRoute,
    postParticipantAttachmentXAmzBearerRouteHandler,
  )
  .openapi(
    postParticipantTranscriptXAmzBearerRoute,
    postParticipantTranscriptXAmzBearerRouteHandler,
  )
  .openapi(postParticipantEventXAmzBearerRoute, postParticipantEventXAmzBearerRouteHandler)
  .openapi(postParticipantMessageXAmzBearerRoute, postParticipantMessageXAmzBearerRouteHandler)
  .openapi(
    postParticipantStartAttachmentUploadXAmzBearerRoute,
    postParticipantStartAttachmentUploadXAmzBearerRouteHandler,
  )

export default app
