import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523AddApplicationInputRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523AddApplicationInputHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523AddApplicationInputRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
