import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListSubscriptionsRoute, postActionListSubscriptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionListSubscriptionsHandler = app
  .openapi(getActionListSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListSubscriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
