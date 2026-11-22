import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3PlaylistItemsRoute,
  getYoutubeV3PlaylistItemsRoute,
  postYoutubeV3PlaylistItemsRoute,
  putYoutubeV3PlaylistItemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistItemsHandler = app
  .openapi(deleteYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3PlaylistItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
