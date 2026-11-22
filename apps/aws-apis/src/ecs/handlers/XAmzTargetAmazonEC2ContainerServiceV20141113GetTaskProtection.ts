import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113GetTaskProtectionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
