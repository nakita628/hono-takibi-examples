import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLifecycleHooksRoute,
  postActionDescribeLifecycleHooksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeLifecycleHooksHandler = app
  .openapi(getActionDescribeLifecycleHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLifecycleHooksRoute, (c) => {
    throw new Error('Not implemented')
  })
