import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionUnsubscribeRoute, postActionUnsubscribeRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionUnsubscribeHandler = app
  .openapi(getActionUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
