import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdRoute,
  getVideosRoute,
  getVideosVideoIdRoute,
  getVideosVideoIdStatusRoute,
  patchVideosVideoIdRoute,
  patchVideosVideoIdThumbnailRoute,
  postVideosRoute,
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
