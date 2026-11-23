import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeBuild20161006DescribeCodeCoveragesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeBuild20161006DescribeCodeCoveragesHandler = app.openapi(
  postXAmzTargetCodeBuild20161006DescribeCodeCoveragesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
