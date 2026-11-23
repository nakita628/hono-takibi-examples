import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetSessionTokenRoute, postActionGetSessionTokenRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetSessionTokenHandler = app
  .openapi(getActionGetSessionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSessionTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
