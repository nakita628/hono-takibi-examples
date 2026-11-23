import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteDBClusterRoute, postActionDeleteDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteDbClusterHandler = app
  .openapi(getActionDeleteDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
