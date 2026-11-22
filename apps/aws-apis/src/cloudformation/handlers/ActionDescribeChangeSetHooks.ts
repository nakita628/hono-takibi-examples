import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeChangeSetHooksRoute,
  postActionDescribeChangeSetHooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeChangeSetHooksHandler = app
  .openapi(getActionDescribeChangeSetHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeChangeSetHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
