import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3PlaylistsRoute,
  getYoutubeV3PlaylistsRoute,
  postYoutubeV3PlaylistsRoute,
  putYoutubeV3PlaylistsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistsHandler = app
  .openapi(deleteYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3PlaylistsRoute, (c) => {
    throw new Error('Not implemented')
  })
