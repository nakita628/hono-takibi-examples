import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonML20141212DescribeMLModelsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonMl20141212DescribeMlModelsHandler = app.openapi(
  postXAmzTargetAmazonML20141212DescribeMLModelsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
