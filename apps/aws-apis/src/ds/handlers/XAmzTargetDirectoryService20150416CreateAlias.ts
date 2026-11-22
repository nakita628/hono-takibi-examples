import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416CreateAliasRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416CreateAliasHandler = app.openapi(
  postXAmzTargetDirectoryService20150416CreateAliasRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
