import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeStar20170419DescribeProjectRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeStar20170419DescribeProjectHandler = app.openapi(
  postXAmzTargetCodeStar20170419DescribeProjectRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
