import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationHandler =
  app.openapi(postXAmzTargetKinesisAnalytics20180523DeleteApplicationVpcConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
