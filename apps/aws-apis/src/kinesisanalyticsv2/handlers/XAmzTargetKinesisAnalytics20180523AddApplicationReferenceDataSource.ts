import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceHandler =
  app.openapi(postXAmzTargetKinesisAnalytics20180523AddApplicationReferenceDataSourceRoute, (c) => {
    throw new Error('Not implemented')
  })
