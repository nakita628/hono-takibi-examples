import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeLifecycleHookTypesRoute,
  postActionDescribeLifecycleHookTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeLifecycleHookTypesHandler = app
  .openapi(getActionDescribeLifecycleHookTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeLifecycleHookTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
