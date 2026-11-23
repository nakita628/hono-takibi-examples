import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetUploadStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
