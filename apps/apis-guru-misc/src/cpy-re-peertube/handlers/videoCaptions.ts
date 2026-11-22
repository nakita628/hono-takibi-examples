import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideosIdCaptionsCaptionLanguageRoute,
  getApiV1VideosIdCaptionsRoute,
  putApiV1VideosIdCaptionsCaptionLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoCaptionsHandler = app
  .openapi(getApiV1VideosIdCaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideosIdCaptionsCaptionLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideosIdCaptionsCaptionLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
