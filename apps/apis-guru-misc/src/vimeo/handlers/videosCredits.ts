import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVideosVideoIdCreditsCreditIdRoute,
  getChannelsChannelIdVideosVideoIdCreditsRoute,
  getVideosVideoIdCreditsCreditIdRoute,
  getVideosVideoIdCreditsRoute,
  patchVideosVideoIdCreditsCreditIdRoute,
  postChannelsChannelIdVideosVideoIdCreditsRoute,
  postVideosVideoIdCreditsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosCreditsHandler = app
  .openapi(getChannelsChannelIdVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChannelsChannelIdVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVideosVideoIdCreditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVideosVideoIdCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVideosVideoIdCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchVideosVideoIdCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
