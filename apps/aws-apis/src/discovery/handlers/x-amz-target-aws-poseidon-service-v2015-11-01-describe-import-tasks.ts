import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAwsPoseidonServiceV20151101DescribeImportTasksHandler = app.openapi(
  postXAmzTargetAWSPoseidonServiceV20151101DescribeImportTasksRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
