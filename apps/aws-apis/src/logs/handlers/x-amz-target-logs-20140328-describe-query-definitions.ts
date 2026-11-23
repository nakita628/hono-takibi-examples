import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLogs20140328DescribeQueryDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLogs20140328DescribeQueryDefinitionsHandler = app.openapi(
  postXAmzTargetLogs20140328DescribeQueryDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
