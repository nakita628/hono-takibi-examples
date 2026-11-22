import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetSubscriptionAttributesRoute,
  postActionSetSubscriptionAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionSetSubscriptionAttributesHandler = app
  .openapi(getActionSetSubscriptionAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetSubscriptionAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
