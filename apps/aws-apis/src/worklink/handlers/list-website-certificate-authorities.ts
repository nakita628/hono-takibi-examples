import { OpenAPIHono } from '@hono/zod-openapi'
import { postListWebsiteCertificateAuthoritiesRoute } from '../routes'

const app = new OpenAPIHono()

export const listWebsiteCertificateAuthoritiesHandler = app.openapi(
  postListWebsiteCertificateAuthoritiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
