import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DescribeDefaultParametersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DescribeDefaultParametersHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DescribeDefaultParametersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
