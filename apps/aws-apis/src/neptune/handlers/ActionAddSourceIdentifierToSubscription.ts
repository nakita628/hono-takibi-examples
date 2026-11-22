import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionAddSourceIdentifierToSubscriptionRoute,
  postActionAddSourceIdentifierToSubscriptionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionAddSourceIdentifierToSubscriptionHandler = app
  .openapi(getActionAddSourceIdentifierToSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAddSourceIdentifierToSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
