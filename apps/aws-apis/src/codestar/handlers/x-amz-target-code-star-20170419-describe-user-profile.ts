import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419DescribeUserProfileRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeStar20170419DescribeUserProfileHandler = app.openapi(
  postXAmzTargetCodeStar20170419DescribeUserProfileRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
