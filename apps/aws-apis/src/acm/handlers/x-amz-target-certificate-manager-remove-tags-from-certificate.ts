import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCertificateManagerRemoveTagsFromCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
