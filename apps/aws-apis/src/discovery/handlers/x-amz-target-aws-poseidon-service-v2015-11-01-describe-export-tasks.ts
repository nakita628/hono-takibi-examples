import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101DescribeExportTasksHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeExportTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
