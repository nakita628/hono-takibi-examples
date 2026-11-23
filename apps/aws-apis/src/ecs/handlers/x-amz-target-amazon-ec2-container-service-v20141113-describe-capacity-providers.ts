import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DescribeCapacityProvidersHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeCapacityProvidersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
