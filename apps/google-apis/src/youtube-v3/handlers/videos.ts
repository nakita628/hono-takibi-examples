import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3VideosRoute,
  getYoutubeV3VideosGetRatingRoute,
  getYoutubeV3VideosRoute,
  postYoutubeV3VideosRateRoute,
  postYoutubeV3VideosReportAbuseRoute,
  postYoutubeV3VideosRoute,
  putYoutubeV3VideosRoute,
} from '../routes'

const app = new OpenAPIHono()

export const videosHandler = app
  .openapi(deleteYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3VideosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3VideosGetRatingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3VideosRateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3VideosReportAbuseRoute, (c) => {
    throw new Error('Not implemented')
  })
