import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateClusterRoute, postActionCreateClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateClusterHandler = app
  .openapi(getActionCreateClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
