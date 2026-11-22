import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113UpdateClusterSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
