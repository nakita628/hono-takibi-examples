import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3CaptionsRoute,
  getYoutubeV3CaptionsIdRoute,
  getYoutubeV3CaptionsRoute,
  postYoutubeV3CaptionsRoute,
  putYoutubeV3CaptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const captionsHandler = app
  .openapi(deleteYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3CaptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3CaptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
