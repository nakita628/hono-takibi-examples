import { OpenAPIHono } from '@hono/zod-openapi'
import { getAudioAnalysisIdRoute } from '../routes'

const app = new OpenAPIHono()

export const audioAnalysisHandler = app.openapi(getAudioAnalysisIdRoute, (c) => {
  throw new Error('Not implemented')
})
