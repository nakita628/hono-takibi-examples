import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteLoginProfileRoute, postActionDeleteLoginProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteLoginProfileHandler = app
  .openapi(getActionDeleteLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteLoginProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
