import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1VideoPlaylistsPlaylistIdRoute,
  deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
  getApiV1AccountsNameVideoPlaylistsRoute,
  getApiV1UsersMeVideoPlaylistsVideosExistRoute,
  getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute,
  getApiV1VideoPlaylistsPlaylistIdRoute,
  getApiV1VideoPlaylistsPrivaciesRoute,
  getApiV1VideoPlaylistsRoute,
  postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute,
  postApiV1VideoPlaylistsRoute,
  putApiV1VideoPlaylistsPlaylistIdRoute,
  putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videoPlaylistsHandler = app
  .openapi(getApiV1AccountsNameVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1UsersMeVideoPlaylistsVideosExistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoChannelsChannelHandleVideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPrivaciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoPlaylistsPlaylistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1VideoPlaylistsPlaylistIdVideosReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1VideoPlaylistsPlaylistIdVideosPlaylistElementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
