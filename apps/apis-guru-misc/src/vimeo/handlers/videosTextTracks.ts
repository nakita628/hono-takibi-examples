import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdTexttracksTexttrackIdRoute,
  getChannelsChannelIdVideosVideoIdTexttracksRoute,
  getVideosVideoIdTexttracksRoute,
  getVideosVideoIdTexttracksTexttrackIdRoute,
  patchVideosVideoIdTexttracksTexttrackIdRoute,
  postChannelsChannelIdVideosVideoIdTexttracksRoute,
  postVideosVideoIdTexttracksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosTextTracksHandler = app
  .openapi(getChannelsChannelIdVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdTexttracksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdTexttracksTexttrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdTexttracksTexttrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdTexttracksTexttrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
