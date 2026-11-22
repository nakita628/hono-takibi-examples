import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteClusterRoute, postActionDeleteClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteClusterHandler = app
  .openapi(getActionDeleteClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
