import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ExecuteCommandRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
