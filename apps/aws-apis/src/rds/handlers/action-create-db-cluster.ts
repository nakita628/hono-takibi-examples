import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateDBClusterRoute, postActionCreateDBClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateDbClusterHandler = app
  .openapi(getActionCreateDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateDBClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
