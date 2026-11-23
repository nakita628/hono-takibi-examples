import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetKinesisAnalytics20180523DiscoverInputSchemaHandler = app.openapi(
  postXAmzTargetKinesisAnalytics20180523DiscoverInputSchemaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
