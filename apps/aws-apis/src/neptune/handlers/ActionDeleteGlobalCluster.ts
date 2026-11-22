import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteGlobalClusterRoute, postActionDeleteGlobalClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteGlobalClusterHandler = app
  .openapi(getActionDeleteGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
