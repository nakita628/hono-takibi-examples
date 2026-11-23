import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonDAXV3DescribeClustersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonDaxv3DescribeClustersHandler = app.openapi(
  postXAmzTargetAmazonDAXV3DescribeClustersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
