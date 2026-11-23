import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionStartDBClusterRoute, postActionStartDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionStartDbClusterHandler = app
  .openapi(getActionStartDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionStartDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
