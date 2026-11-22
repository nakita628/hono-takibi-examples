import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateMicrosoftADRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416CreateMicrosoftADHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateMicrosoftADRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
