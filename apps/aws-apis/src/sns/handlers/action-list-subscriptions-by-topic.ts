import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionListSubscriptionsByTopicRoute,
  postActionListSubscriptionsByTopicRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionListSubscriptionsByTopicHandler = app
  .openapi(getActionListSubscriptionsByTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSubscriptionsByTopicRoute, (c) => {
    throw new Error('Not implemented')
  })
