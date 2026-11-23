import { OpenAPIHono } from '@hono/zod-openapi'
import { postAssociateWebsiteCertificateAuthorityRoute } from '../routes'

const app = new OpenAPIHono()

export const associateWebsiteCertificateAuthorityHandler = app.openapi(
  postAssociateWebsiteCertificateAuthorityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
