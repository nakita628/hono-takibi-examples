import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetSubscriptionAttributesRoute,
  postActionGetSubscriptionAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionGetSubscriptionAttributesHandler = app
  .openapi(getActionGetSubscriptionAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSubscriptionAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
