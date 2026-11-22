import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyEventSubscriptionRoute,
  postActionModifyEventSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionModifyEventSubscriptionHandler = app
  .openapi(getActionModifyEventSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyEventSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
