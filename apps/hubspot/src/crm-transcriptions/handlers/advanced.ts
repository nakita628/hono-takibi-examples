import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCrmExtensionsCalling202609InboundCallRoute,
  postCrmExtensionsCalling202609TranscriptsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const advancedHandler = app
  .openapi(postCrmExtensionsCalling202609InboundCallRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCrmExtensionsCalling202609TranscriptsRoute, (c) => {
    throw new Error('Not implemented')
  })
