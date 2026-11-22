import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOvertureServiceDescribeTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetOvertureServiceDescribeTagsHandler = app.openapi(
  postXAmzTargetOvertureServiceDescribeTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
