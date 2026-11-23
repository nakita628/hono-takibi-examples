import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateClusterRoute, postActionCreateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateClusterHandler = app
  .openapi(getActionCreateClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
