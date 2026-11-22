import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdPicturesPictureIdRoute,
  getChannelsChannelIdVideosVideoIdPicturesRoute,
  getVideosVideoIdPicturesPictureIdRoute,
  getVideosVideoIdPicturesRoute,
  patchVideosVideoIdPicturesPictureIdRoute,
  postChannelsChannelIdVideosVideoIdPicturesRoute,
  postVideosVideoIdPicturesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosThumbnailsHandler = app
  .openapi(getChannelsChannelIdVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdPicturesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdPicturesPictureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdPicturesPictureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdPicturesPictureIdRoute, (c) => {
    throw new Error('Not implemented')
  })
