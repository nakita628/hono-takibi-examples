import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAmazonSSMResetServiceSettingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAmazonSSMResetServiceSettingHandler = app.openapi(
  postXAmzTargetAmazonSSMResetServiceSettingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
