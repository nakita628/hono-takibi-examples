import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416GetDirectoryLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416GetDirectoryLimitsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416GetDirectoryLimitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
