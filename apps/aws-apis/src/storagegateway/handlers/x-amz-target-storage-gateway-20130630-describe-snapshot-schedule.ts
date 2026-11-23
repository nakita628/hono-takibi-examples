import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeSnapshotScheduleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeSnapshotScheduleHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeSnapshotScheduleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
