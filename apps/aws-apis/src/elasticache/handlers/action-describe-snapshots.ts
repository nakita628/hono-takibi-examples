import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDescribeSnapshotsRoute, postActionDescribeSnapshotsRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDescribeSnapshotsHandler = app
  .openapi(getActionDescribeSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDescribeSnapshotsRoute, (c) => {
    throw new Error('Not implemented')
  })
