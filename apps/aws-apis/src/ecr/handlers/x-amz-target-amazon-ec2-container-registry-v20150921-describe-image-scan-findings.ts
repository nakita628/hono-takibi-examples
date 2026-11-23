import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921DescribeImageScanFindingsHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageScanFindingsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
