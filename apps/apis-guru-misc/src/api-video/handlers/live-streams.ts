import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLiveStreamsLiveStreamIdRoute,
  deleteLiveStreamsLiveStreamIdThumbnailRoute,
  getLiveStreamsLiveStreamIdRoute,
  getLiveStreamsRoute,
  patchLiveStreamsLiveStreamIdRoute,
  postLiveStreamsLiveStreamIdThumbnailRoute,
  postLiveStreamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveStreamsHandler = app
  .openapi(getLiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveStreamsLiveStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLiveStreamsLiveStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLiveStreamsLiveStreamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLiveStreamsLiveStreamIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveStreamsLiveStreamIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
