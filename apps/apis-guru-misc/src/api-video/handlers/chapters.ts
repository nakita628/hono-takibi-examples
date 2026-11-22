import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdChaptersLanguageRoute,
  getVideosVideoIdChaptersLanguageRoute,
  getVideosVideoIdChaptersRoute,
  postVideosVideoIdChaptersLanguageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chaptersHandler = app
  .openapi(getVideosVideoIdChaptersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdChaptersLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdChaptersLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdChaptersLanguageRoute, (c) => {
    throw new Error('Not implemented')
  })
