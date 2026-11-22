import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DescribeMLModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonML20141212DescribeMLModelsHandler = app.openapi(
  postXAmzTargetAmazonML20141212DescribeMLModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
