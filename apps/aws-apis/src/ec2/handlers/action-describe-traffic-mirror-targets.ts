import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTrafficMirrorTargetsRoute,
  postActionDescribeTrafficMirrorTargetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeTrafficMirrorTargetsHandler = app
  .openapi(getActionDescribeTrafficMirrorTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTrafficMirrorTargetsRoute, (c) => {
    throw new Error('Not implemented')
  })
