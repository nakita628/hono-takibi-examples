import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerUpdateCertificateOptionsHandler = app.openapi(
  postXAmzTargetCertificateManagerUpdateCertificateOptionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
