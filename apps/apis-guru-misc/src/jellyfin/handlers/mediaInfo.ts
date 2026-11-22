import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getItemsItemIdPlaybackInfoRoute,
  getPlaybackBitrateTestRoute,
  postItemsItemIdPlaybackInfoRoute,
  postLiveStreamsCloseRoute,
  postLiveStreamsOpenRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mediaInfoHandler = app
  .openapi(getItemsItemIdPlaybackInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postItemsItemIdPlaybackInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveStreamsCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLiveStreamsOpenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlaybackBitrateTestRoute, (c) => {
    throw new Error('Not implemented')
  })
