import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523ListApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523ListApplicationsHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523ListApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
