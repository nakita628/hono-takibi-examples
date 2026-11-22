import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3LiveStreamsRoute,
  getYoutubeV3LiveStreamsRoute,
  postYoutubeV3LiveStreamsRoute,
  putYoutubeV3LiveStreamsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveStreamsHandler = app
  .openapi(deleteYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3LiveStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
