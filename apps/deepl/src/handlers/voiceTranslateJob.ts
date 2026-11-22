import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1JobsVoiceTranslateJobIdRoute, postV1JobsVoiceTranslateRoute } from '../routes'

const app = new OpenAPIHono()

export const voiceTranslateJobHandler = app
  .openapi(postV1JobsVoiceTranslateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1JobsVoiceTranslateJobIdRoute, (c) => {
    throw new Error('Not implemented')
  })
