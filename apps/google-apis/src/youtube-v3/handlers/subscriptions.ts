import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteYoutubeV3SubscriptionsRoute,
  getYoutubeV3SubscriptionsRoute,
  postYoutubeV3SubscriptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subscriptionsHandler = app
  .openapi(deleteYoutubeV3SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getYoutubeV3SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postYoutubeV3SubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
