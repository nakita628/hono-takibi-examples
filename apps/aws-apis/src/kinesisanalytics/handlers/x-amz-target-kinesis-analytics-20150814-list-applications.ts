import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814ListApplicationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814ListApplicationsHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814ListApplicationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
