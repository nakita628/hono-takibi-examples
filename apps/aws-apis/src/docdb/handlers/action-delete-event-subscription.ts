import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDeleteEventSubscriptionRoute,
  postActionDeleteEventSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDeleteEventSubscriptionHandler = app
  .openapi(getActionDeleteEventSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteEventSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
