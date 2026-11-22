import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416GetDirectoryLimitsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416GetDirectoryLimitsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416GetDirectoryLimitsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
