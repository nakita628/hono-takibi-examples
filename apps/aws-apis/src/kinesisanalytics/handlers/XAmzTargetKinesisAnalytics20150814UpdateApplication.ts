import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814UpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20150814UpdateApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814UpdateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
