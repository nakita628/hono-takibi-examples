import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdCaptionsLanguageRoute,
  deleteVideosVideoIdChaptersLanguageRoute,
  deleteVideosVideoIdRoute,
  getVideosRoute,
  getVideosVideoIdCaptionsLanguageRoute,
  getVideosVideoIdCaptionsRoute,
  getVideosVideoIdChaptersLanguageRoute,
  getVideosVideoIdChaptersRoute,
  getVideosVideoIdRoute,
  getVideosVideoIdStatusRoute,
  patchVideosVideoIdCaptionsLanguageRoute,
  patchVideosVideoIdRoute,
  patchVideosVideoIdThumbnailRoute,
  postVideosRoute,
  postVideosVideoIdCaptionsLanguageRoute,
  postVideosVideoIdChaptersLanguageRoute,
  postVideosVideoIdSourceRoute,
  postVideosVideoIdThumbnailRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(getVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(postVideosVideoIdSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
