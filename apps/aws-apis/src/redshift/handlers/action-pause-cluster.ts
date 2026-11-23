import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPauseClusterRoute, postActionPauseClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPauseClusterHandler = app
  .openapi(getActionPauseClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPauseClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
