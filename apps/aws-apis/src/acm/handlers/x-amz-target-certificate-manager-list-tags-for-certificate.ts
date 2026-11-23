import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerListTagsForCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerListTagsForCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerListTagsForCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
