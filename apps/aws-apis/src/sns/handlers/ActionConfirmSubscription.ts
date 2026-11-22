import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionConfirmSubscriptionRoute, postActionConfirmSubscriptionRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionConfirmSubscriptionHandler = app
  .openapi(getActionConfirmSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionConfirmSubscriptionRoute, (c) => {
    throw new Error('Not implemented')
  })
