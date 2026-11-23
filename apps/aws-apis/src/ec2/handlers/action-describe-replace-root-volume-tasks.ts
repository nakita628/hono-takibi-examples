import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionDescribeReplaceRootVolumeTasksRoute,
  postActionDescribeReplaceRootVolumeTasksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionDescribeReplaceRootVolumeTasksHandler = app
  .openapi(getActionDescribeReplaceRootVolumeTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeReplaceRootVolumeTasksRoute, (c) => {
    throw new Error('Not implemented')
  })
