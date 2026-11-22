import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeEntityRecognizerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribeEntityRecognizerHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeEntityRecognizerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
