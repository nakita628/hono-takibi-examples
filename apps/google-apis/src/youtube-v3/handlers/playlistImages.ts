import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3PlaylistImagesRoute,
  getYoutubeV3PlaylistImagesRoute,
  postYoutubeV3PlaylistImagesRoute,
  putYoutubeV3PlaylistImagesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const playlistImagesHandler = app
  .openapi(deleteYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3PlaylistImagesRoute, (c) => {
    throw new Error('Not implemented')
  })
