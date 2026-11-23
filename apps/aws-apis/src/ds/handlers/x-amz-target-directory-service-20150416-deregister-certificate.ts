import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416DeregisterCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416DeregisterCertificateHandler = app.openapi(
  postXAmzTargetDirectoryService20150416DeregisterCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
