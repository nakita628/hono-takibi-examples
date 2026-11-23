import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateSpotDatafeedSubscriptionRoute,
  postActionCreateSpotDatafeedSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateSpotDatafeedSubscriptionHandler = app
  .openapi(getActionCreateSpotDatafeedSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateSpotDatafeedSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
