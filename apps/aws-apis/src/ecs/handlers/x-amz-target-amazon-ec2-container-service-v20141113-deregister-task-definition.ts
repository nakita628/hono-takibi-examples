import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113DeregisterTaskDefinitionHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113DeregisterTaskDefinitionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
