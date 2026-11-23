import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DescribeTestCasesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006DescribeTestCasesHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DescribeTestCasesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
