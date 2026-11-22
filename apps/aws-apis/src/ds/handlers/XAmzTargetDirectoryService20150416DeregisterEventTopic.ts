import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeregisterEventTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DeregisterEventTopicHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeregisterEventTopicRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
