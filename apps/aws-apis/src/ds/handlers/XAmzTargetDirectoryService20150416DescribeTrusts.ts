import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeTrustsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDirectoryService20150416DescribeTrustsHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeTrustsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
