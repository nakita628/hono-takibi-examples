import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
