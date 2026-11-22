import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DeleteApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DeleteApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
