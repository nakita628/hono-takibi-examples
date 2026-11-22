import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteSpotDatafeedSubscriptionRoute,
  postActionDeleteSpotDatafeedSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteSpotDatafeedSubscriptionHandler = app
  .openapi(getActionDeleteSpotDatafeedSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteSpotDatafeedSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
