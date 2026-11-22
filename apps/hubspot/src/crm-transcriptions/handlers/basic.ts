import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
  getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const basicHandler = app
  .openapi(getCrmExtensionsCalling202609TranscriptsTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCrmExtensionsCalling202609TranscriptsTranscriptIdRoute, (c) => {
    throw new Error('Not implemented')
  })
