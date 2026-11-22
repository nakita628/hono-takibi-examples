import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingHandler = app.openapi(
  postXAmzTargetAmazonEC2ContainerServiceV20141113DeleteAccountSettingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
