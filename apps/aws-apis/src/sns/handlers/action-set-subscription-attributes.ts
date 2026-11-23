import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionSetSubscriptionAttributesRoute,
  postActionSetSubscriptionAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionSetSubscriptionAttributesHandler = app
  .openapi(getActionSetSubscriptionAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionSetSubscriptionAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
