import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonEc2ContainerServiceV20141113ListAccountSettingsHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113ListAccountSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
