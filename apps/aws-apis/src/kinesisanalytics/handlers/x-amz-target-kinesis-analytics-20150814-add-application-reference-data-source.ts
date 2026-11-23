import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceHandler =
  app.openapi(postXAmzTargetKinesisAnalytics20150814AddApplicationReferenceDataSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
