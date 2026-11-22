import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTestFailoverRoute, postActionTestFailoverRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionTestFailoverHandler = app
  .openapi(getActionTestFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTestFailoverRoute, (c) => {
    throw new Error('Not implemented')
  })
