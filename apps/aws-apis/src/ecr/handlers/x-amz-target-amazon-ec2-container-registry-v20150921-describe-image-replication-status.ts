import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerRegistryV20150921DescribeImageReplicationStatusHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerRegistryV20150921DescribeImageReplicationStatusRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
