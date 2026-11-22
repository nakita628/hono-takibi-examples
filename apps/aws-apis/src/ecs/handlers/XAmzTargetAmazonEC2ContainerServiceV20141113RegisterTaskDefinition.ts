import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionHandler =
  app.openapi(postXAmzTargetAmazonEC2ContainerServiceV20141113RegisterTaskDefinitionRoute, (c) => {
    throw new Error('Not implemented')
  })
