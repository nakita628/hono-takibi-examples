import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetAccessKeyLastUsedRoute, postActionGetAccessKeyLastUsedRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetAccessKeyLastUsedHandler = app
  .openapi(getActionGetAccessKeyLastUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetAccessKeyLastUsedRoute, (c) => {
    throw new Error('Not implemented')
  })
