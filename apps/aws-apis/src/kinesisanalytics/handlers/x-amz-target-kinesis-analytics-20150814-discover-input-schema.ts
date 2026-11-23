import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20150814DiscoverInputSchemaHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20150814DiscoverInputSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
