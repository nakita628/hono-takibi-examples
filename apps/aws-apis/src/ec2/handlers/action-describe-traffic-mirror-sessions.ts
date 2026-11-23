import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTrafficMirrorSessionsRoute,
  postActionDescribeTrafficMirrorSessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTrafficMirrorSessionsHandler = app
  .openapi(getActionDescribeTrafficMirrorSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTrafficMirrorSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
