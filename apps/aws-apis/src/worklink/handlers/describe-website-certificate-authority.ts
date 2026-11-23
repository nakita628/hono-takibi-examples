import { OpenAPIHono } from '@hono/zod-openapi'
import { postDescribeWebsiteCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const describeWebsiteCertificateAuthorityHandler = app.openapi(
  postDescribeWebsiteCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
