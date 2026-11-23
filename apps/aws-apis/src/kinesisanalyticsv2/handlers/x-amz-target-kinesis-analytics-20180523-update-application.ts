import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523UpdateApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523UpdateApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523UpdateApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
