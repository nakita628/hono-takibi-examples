import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
  getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
  postCrmExtensionsCalling202609InboundCallRoute,
  postCrmExtensionsCalling202609TranscriptsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const crmHandler = app
  .openapi(postCrmExtensionsCalling202609InboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCalling202609TranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
