import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RegisterEventTopicRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416RegisterEventTopicHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RegisterEventTopicRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
