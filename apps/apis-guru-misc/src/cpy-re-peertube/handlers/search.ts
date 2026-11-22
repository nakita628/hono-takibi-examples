import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SearchVideoChannelsRoute,
  getApiV1SearchVideoPlaylistsRoute,
  getApiV1SearchVideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app
  .openapi(getApiV1SearchVideoChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SearchVideosRoute, (c) => {
    throw new Error('Not implemented')
  })
