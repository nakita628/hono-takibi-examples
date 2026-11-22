import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeTrafficMirrorFiltersRoute,
  postActionDescribeTrafficMirrorFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionDescribeTrafficMirrorFiltersHandler = app
  .openapi(getActionDescribeTrafficMirrorFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeTrafficMirrorFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
