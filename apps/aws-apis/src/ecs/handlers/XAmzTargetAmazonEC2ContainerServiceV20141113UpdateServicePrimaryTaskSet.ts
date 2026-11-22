import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateServicePrimaryTaskSetRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
