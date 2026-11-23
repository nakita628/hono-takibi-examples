import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416RegisterCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416RegisterCertificateHandler = app.openapi(
  postXAmzTargetDirectoryService20150416RegisterCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
