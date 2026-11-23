import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814AddApplicationInputRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814AddApplicationInputHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814AddApplicationInputRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
