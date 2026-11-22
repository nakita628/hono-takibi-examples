import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMGetServiceSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMGetServiceSettingHandler = app.openapi(
  postXAmzTargetAmazonSSMGetServiceSettingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
