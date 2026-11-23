import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateStackRoute, postActionCreateStackRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreateStackHandler = app
  .openapi(getActionCreateStackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateStackRoute, (c) => {
    throw new Error('Not implemented')
  })
