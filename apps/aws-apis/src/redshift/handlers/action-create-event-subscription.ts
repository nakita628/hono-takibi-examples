import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionCreateEventSubscriptionRoute,
  postActionCreateEventSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionCreateEventSubscriptionHandler = app
  .openapi(getActionCreateEventSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateEventSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
