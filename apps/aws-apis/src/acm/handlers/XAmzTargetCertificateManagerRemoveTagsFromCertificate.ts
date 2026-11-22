import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCertificateManagerRemoveTagsFromCertificateHandler = app.openapi(
  postXAmzTargetCertificateManagerRemoveTagsFromCertificateRoute,
  (c) => {},
)
