import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateGlobalClusterRoute, postActionCreateGlobalClusterRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateGlobalClusterHandler = app
  .openapi(getActionCreateGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateGlobalClusterRoute, (c) => {
    throw new Error('Not implemented')
  })
