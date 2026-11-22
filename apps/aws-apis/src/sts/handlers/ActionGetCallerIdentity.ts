import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetCallerIdentityRoute, postActionGetCallerIdentityRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetCallerIdentityHandler = app
  .openapi(getActionGetCallerIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetCallerIdentityRoute, (c) => {
    throw new Error('Not implemented')
  })
