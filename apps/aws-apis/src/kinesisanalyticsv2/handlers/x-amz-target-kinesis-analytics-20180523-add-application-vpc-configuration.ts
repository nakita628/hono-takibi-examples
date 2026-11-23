import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523AddApplicationVpcConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
