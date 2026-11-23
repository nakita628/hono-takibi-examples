import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMUpdateServiceSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAmazonSsmUpdateServiceSettingHandler = app.openapi(
  postXAmzTargetAmazonSSMUpdateServiceSettingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
