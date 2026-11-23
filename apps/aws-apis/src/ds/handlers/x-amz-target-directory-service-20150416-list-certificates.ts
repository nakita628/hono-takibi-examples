import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDirectoryService20150416ListCertificatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDirectoryService20150416ListCertificatesHandler = app.openapi(
  postXAmzTargetDirectoryService20150416ListCertificatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
