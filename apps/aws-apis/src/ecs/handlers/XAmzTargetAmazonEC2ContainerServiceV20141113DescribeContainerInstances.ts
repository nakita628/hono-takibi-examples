import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113DescribeContainerInstancesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
