import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdCaptionsLanguageRoute,
  getVideosVideoIdCaptionsLanguageRoute,
  getVideosVideoIdCaptionsRoute,
  patchVideosVideoIdCaptionsLanguageRoute,
  postVideosVideoIdCaptionsLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const captionsHandler = app
  .openapi(getVideosVideoIdCaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCaptionsLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
