import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113ListTaskDefinitionFamiliesHandler =
  app.openapi(
    postXAmzTargetAmazonEC2ContainerServiceV20141113ListTaskDefinitionFamiliesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
