import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteGroupRoute, postActionDeleteGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteGroupHandler = app
  .openapi(getActionDeleteGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
