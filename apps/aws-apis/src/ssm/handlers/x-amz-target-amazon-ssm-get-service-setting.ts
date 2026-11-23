import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetServiceSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmGetServiceSettingHandler = app.openapi(
  postXAmzTargetAmazonSSMGetServiceSettingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
