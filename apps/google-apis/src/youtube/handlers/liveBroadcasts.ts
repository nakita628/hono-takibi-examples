import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3LiveBroadcastsRoute,
  getYoutubeV3LiveBroadcastsRoute,
  postYoutubeV3LiveBroadcastsBindRoute,
  postYoutubeV3LiveBroadcastsCuepointRoute,
  postYoutubeV3LiveBroadcastsRoute,
  postYoutubeV3LiveBroadcastsTransitionRoute,
  putYoutubeV3LiveBroadcastsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const liveBroadcastsHandler = app
  .openapi(deleteYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putYoutubeV3LiveBroadcastsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsBindRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsCuepointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3LiveBroadcastsTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
