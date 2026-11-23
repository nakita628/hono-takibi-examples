import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
  getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
  postCrmExtensionsCalling202609InboundCallRoute,
  postCrmExtensionsCalling202609TranscriptsRoute,
} from './routes'
import {
  deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRouteHandler,
  getCrmExtensionsCalling202609TranscriptsTranscriptIdRouteHandler,
  postCrmExtensionsCalling202609InboundCallRouteHandler,
  postCrmExtensionsCalling202609TranscriptsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postCrmExtensionsCalling202609InboundCallRoute,
    postCrmExtensionsCalling202609InboundCallRouteHandler,
  )
  .openapi(
    postCrmExtensionsCalling202609TranscriptsRoute,
    postCrmExtensionsCalling202609TranscriptsRouteHandler,
  )
  .openapi(
    getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
    getCrmExtensionsCalling202609TranscriptsTranscriptIdRouteHandler,
  )
  .openapi(
    deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
    deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRouteHandler,
  )

export default app
