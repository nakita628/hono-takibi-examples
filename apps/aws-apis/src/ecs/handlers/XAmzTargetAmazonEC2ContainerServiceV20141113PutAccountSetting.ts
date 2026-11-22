import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113PutAccountSettingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
