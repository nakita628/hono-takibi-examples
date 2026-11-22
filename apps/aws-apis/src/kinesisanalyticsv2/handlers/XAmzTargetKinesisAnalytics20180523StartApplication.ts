import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523StartApplicationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523StartApplicationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523StartApplicationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
