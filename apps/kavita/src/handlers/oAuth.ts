import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiOAuthCallbackRoute, getApiOAuthStartRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuthHandler = app
  .openapi(getApiOAuthStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiOAuthCallbackRoute, (c) => {
    throw new Error('Not implemented')
  })
