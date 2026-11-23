import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DescribeCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DescribeCertificateHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DescribeCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
