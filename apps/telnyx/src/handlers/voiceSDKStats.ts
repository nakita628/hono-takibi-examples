import { OpenAPIHono } from '@hono/zod-openapi'
import { getVoiceSdkCallReportsCallIdRoute, getVoiceSdkCallReportsRoute } from '../routes'

const app = new OpenAPIHono()

export const voiceSDKStatsHandler = app
  .openapi(getVoiceSdkCallReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceSdkCallReportsCallIdRoute, (c) => {
    throw new Error('Not implemented')
  })
