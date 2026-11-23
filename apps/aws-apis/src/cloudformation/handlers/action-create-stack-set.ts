import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateStackSetRoute, postActionCreateStackSetRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateStackSetHandler = app
  .openapi(getActionCreateStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateStackSetRoute, (c) => {
    throw new Error('Not implemented')
  })
