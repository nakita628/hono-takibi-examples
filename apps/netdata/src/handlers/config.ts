import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ConfigRoute, postApiV3ConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getApiV3ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3ConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
