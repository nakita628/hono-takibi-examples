import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523ListApplicationVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523ListApplicationVersionsHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523ListApplicationVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
