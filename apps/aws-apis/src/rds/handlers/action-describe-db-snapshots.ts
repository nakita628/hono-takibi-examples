import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeDBSnapshotsRoute, postActionDescribeDBSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeDbSnapshotsHandler = app
  .openapi(getActionDescribeDBSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeDBSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
